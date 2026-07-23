<template>
  <div class="c-graph" :data-dragging="dragging || undefined">
    <canvas
      ref="canvasEl"
      class="c-graph__canvas"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @click="onClick"
      @wheel.prevent="onWheel"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useOptionalModel } from '../../../composables/use-optional-model'
import { useForceLayout } from './use-force-layout'
import { usePanZoom } from './use-pan-zoom'
import { useHitTest } from './use-hit-test'
import { useNodeDrag } from './use-node-drag'

/**
 * @typedef {Object} GraphNode
 * @property {string} id
 * @property {string} label
 * @property {string} [group]                        - clave libre para colorear (ver prop groupColors)
 * @property {'ghost'|'solid'|'active'} [state='solid'] - énfasis visual: ghost = solo contorno, solid = relleno, active = relleno + halo
 * @property {number} [size=1]                        - peso relativo adicional para el radio, además del grado (nº de conexiones)
 * @property {boolean} [filled=true]                   - false = anillo (borde sólido, centro hueco) en vez de relleno completo; independiente de `state` (no confundir con el hueco punteado de 'ghost')
 */

/**
 * @typedef {Object} GraphEdge
 * @property {string} source
 * @property {string} target
 * @property {string} [label]
 */

const props = defineProps({
  /** @type {import('vue').PropType<GraphNode[]>} */
  nodes: { type: Array, required: true },
  /** @type {import('vue').PropType<GraphEdge[]>} */
  edges: { type: Array, required: true },
  // group -> color CSS (hex/rgb/var). Si un nodo no tiene color aquí, usa --c-graph-node-fill.
  groupColors: { type: Object, default: () => ({}) },
  // ids que se ocultan del dibujo y del hit-test, pero siguen simulados (no se resetea el layout al filtrar)
  hiddenIds: { type: Array, default: () => [] },
  // selección opcionalmente controlada (v-model:selected-id)
  selectedId: { type: String, default: undefined },
  // `{ repulsion?: number, springLength?: number }` — afinado en caliente, ver use-force-layout.js.
  // repulsion: fuerza de separación entre todo par de nodos (default 2600).
  // springLength: distancia de reposo entre nodos conectados por una arista (default 90).
  layoutConfig: { type: Object, default: () => ({}) },
  // Mostrar las etiquetas de las aristas sin importar el zoom (por defecto solo aparecen a partir de zoom > 0.55, para no saturar la vista con el grafo alejado)
  edgeLabelsAlways: { type: Boolean, default: false },
})

const emit = defineEmits(['update:selectedId', 'node-click', 'node-hover'])

const canvasEl = ref(null)
const dragging = ref(false)
const hoveredId = ref(null)
const selectedModel = useOptionalModel(props, 'selectedId', emit, null)

const nodesRef = computed(() => props.nodes)
const edgesRef = computed(() => props.edges)

const degree = computed(() => {
  const d = {}
  props.edges.forEach((e) => {
    d[e.source] = (d[e.source] || 0) + 1
    d[e.target] = (d[e.target] || 0) + 1
  })
  return d
})

function radiusOf(n) {
  return 7 + Math.sqrt((degree.value[n.id] || 1) * (n.size || 1)) * 5.5
}

const visibleNodes = computed(() => props.nodes.filter((n) => !props.hiddenIds.includes(n.id)))
const visibleEdges = computed(() =>
  props.edges.filter((e) => !props.hiddenIds.includes(e.source) && !props.hiddenIds.includes(e.target))
)

const layoutConfigRef = computed(() => props.layoutConfig)
// radiusOf se pasa tal cual (no una ref): cierra sobre degree.value, así que
// ya se mantiene al día solo — el layout no necesita recalcular el grado.
const layout = useForceLayout(nodesRef, edgesRef, layoutConfigRef, radiusOf)
const panZoom = usePanZoom()

// Un cambio de repulsión/longitud de muelle sin reheat no se nota hasta que
// algo más (drag, filtro) reactive el alpha — así se ve el efecto al momento.
watch(layoutConfigRef, () => layout.reheat(0.6), { deep: true })
const hitTest = useHitTest({ nodes: visibleNodes, positions: layout.positions, radiusOf, panZoom })
const drag = useNodeDrag({ hitTest, layout, panZoom })

// Recentra la cámara sobre el nodo seleccionado. Sin esto, en un grafo grande
// (cientos de nodos) el layout de fuerzas puede dejar al nodo elegido — y a
// sus vecinos, que se estabilizan cerca de él mediante los muelles — fuera
// del viewport actual: las aristas existen en el espacio-mundo pero no hay
// nada que las traiga a pantalla. Un único recentrado al cambiar la
// selección basta; no sigue el nodo frame a frame para no pelearse con el
// paneo manual del usuario.
watch(selectedModel, (id) => {
  if (!id) return
  const p = layout.positions[id]
  if (!p) return
  panZoom.camX.value = -p.x
  panZoom.camY.value = -p.y
})

function neighborsOf(id) {
  const set = new Set([id])
  props.edges.forEach((e) => {
    if (e.source === id) set.add(e.target)
    if (e.target === id) set.add(e.source)
  })
  return set
}

// ── tamaño del lienzo ───────────────────────────────────────────────────
const dpr = Math.min(window.devicePixelRatio || 1, 2)
const size = { width: 0, height: 0 }
let ctx = null
let ro = null

function resize() {
  if (!canvasEl.value) return
  size.width = canvasEl.value.clientWidth
  size.height = canvasEl.value.clientHeight
  canvasEl.value.width = size.width * dpr
  canvasEl.value.height = size.height * dpr
}

// ── puente canvas ↔ CSS: las custom properties se leen en cada frame ───
function cssVar(name, fallback) {
  const v = getComputedStyle(canvasEl.value).getPropertyValue(name).trim()
  return v || fallback
}

function colorFor(node) {
  if (node.group && props.groupColors[node.group]) return props.groupColors[node.group]
  return cssVar('--c-graph-node-fill', '#2563eb')
}

// ── bucle de dibujo, independiente del ciclo de render de Vue ──────────
let raf = null
function draw() {
  if (ctx && canvasEl.value) {
    ctx.save()
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, size.width, size.height)

    const focusId = selectedModel.value || hoveredId.value
    const focusSet = focusId ? neighborsOf(focusId) : null
    const edgeColor = cssVar('--c-graph-edge-color', '#666666')
    const edgeColorDim = cssVar('--c-graph-edge-color-dim', '#cccccc')
    const ink = cssVar('--c-graph-ink', '#1a1a1a')
    const surface = cssVar('--c-graph-surface', '#ffffff')

    visibleEdges.value.forEach((e) => {
      const s = layout.positions[e.source]
      const t = layout.positions[e.target]
      if (!s || !t) return
      const dim = focusSet && !(focusSet.has(e.source) && focusSet.has(e.target))
      const [x1, y1] = panZoom.worldToScreen(s.x, s.y, size)
      const [x2, y2] = panZoom.worldToScreen(t.x, t.y, size)
      ctx.strokeStyle = dim ? edgeColorDim : edgeColor
      ctx.globalAlpha = dim ? 0.35 : 0.9
      ctx.lineWidth = dim ? 1 : 1.4
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      if (!dim && e.label && (props.edgeLabelsAlways || panZoom.zoom.value > 0.55)) {
        ctx.globalAlpha = 0.85
        ctx.fillStyle = edgeColor
        // Nota: el texto del canvas usa una tipografía fija en JS, no los
        // typesets de Bedrock (@include typeset solo aplica a DOM) — ver c-graph.md
        ctx.font = '10px system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(e.label, (x1 + x2) / 2, (y1 + y2) / 2 - 3)
      }
    })
    ctx.globalAlpha = 1

    visibleNodes.value.forEach((n) => {
      const p = layout.positions[n.id]
      if (!p) return
      const [x, y] = panZoom.worldToScreen(p.x, p.y, size)
      const r = radiusOf(n) * panZoom.zoom.value
      const dim = focusSet && !focusSet.has(n.id)
      const col = colorFor(n)
      const state = n.state || 'solid'

      const filled = n.filled !== false // default true; false = anillo (relleno hueco) sin ser 'ghost'

      ctx.globalAlpha = dim ? 0.3 : 1
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fillStyle = state === 'ghost' || !filled ? surface : col
      ctx.fill()

      ctx.lineWidth = n.id === selectedModel.value ? 2.5 : 1.5
      ctx.strokeStyle = col
      ctx.setLineDash(state === 'ghost' ? [3, 3] : [])
      ctx.stroke()
      ctx.setLineDash([])

      if (state === 'active' || n.id === selectedModel.value) {
        ctx.beginPath()
        ctx.arc(x, y, r + 5, 0, Math.PI * 2)
        ctx.strokeStyle = col
        ctx.globalAlpha = dim ? 0.3 : 0.4
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.globalAlpha = dim ? 0.3 : 1
      }

      if (panZoom.zoom.value > 0.4) {
        ctx.fillStyle = ink
        ctx.font = '11.5px system-ui, sans-serif'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        ctx.fillText(n.label, x + r + 6, y)
      }
    })
    ctx.globalAlpha = 1
    ctx.restore()
  }
  raf = requestAnimationFrame(draw)
}

// ── interacción de puntero ──────────────────────────────────────────────
function pointerPos(event) {
  const rect = canvasEl.value.getBoundingClientRect()
  return [event.clientX - rect.left, event.clientY - rect.top]
}

function onPointerDown(event) {
  const [mx, my] = pointerPos(event)
  const n = drag.start(mx, my, size)
  if (!n) panZoom.startPan(mx, my)
  dragging.value = true
  canvasEl.value.setPointerCapture(event.pointerId)
}

function onPointerMove(event) {
  const [mx, my] = pointerPos(event)
  if (drag.isDragging()) {
    drag.move(mx, my, size)
  } else if (panZoom.isPanning()) {
    panZoom.movePan(mx, my)
  } else {
    const n = hitTest.pick(mx, my, size)
    const id = n ? n.id : null
    if (id !== hoveredId.value) {
      hoveredId.value = id
      emit('node-hover', n || null)
    }
  }
}

function onPointerUp() {
  drag.end()
  panZoom.endPan()
  dragging.value = false
}

function onClick(event) {
  const [mx, my] = pointerPos(event)
  const n = hitTest.pick(mx, my, size)
  selectedModel.value = n ? n.id : null
  emit('node-click', n || null)
}

function onWheel(event) {
  const [mx, my] = pointerPos(event)
  panZoom.zoomAt(mx, my, size, event.deltaY)
}

onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  resize()
  ro = new ResizeObserver(resize)
  ro.observe(canvasEl.value)
  raf = requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
})

defineExpose({ reheat: layout.reheat })
</script>

<style lang="scss" src="./c-graph.scss" />
