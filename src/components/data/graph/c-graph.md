# c-graph

Grafo de nodos y enlaces interactivo, renderizado en `<canvas>`: paneo, zoom, arrastre de nodos, resaltado de vecinos al pasar el ratón/seleccionar, y filtrado sin perder la disposición del layout. No sabe nada del dominio que representa — `group` y `state` son claves libres que decide el consumidor.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `nodes` | `GraphNode[]` (requerido) | — | `{ id, label, group?, state?, size?, filled? }` |
| `edges` | `GraphEdge[]` (requerido) | — | `{ source, target, label? }` (ids de `nodes`) |
| `groupColors` | `Object` | `{}` | mapa `group -> color CSS`. Sin entrada para un grupo, usa `--c-graph-node-fill` |
| `edgeColors` | `Object` | `{}` | mapa `edge.label -> color CSS`. Colorea la arista y su etiqueta por tipo; sin entrada usa `--c-graph-edge-color`. Las aristas atenuadas (fuera del foco) ignoran este color |
| `hiddenIds` | `Array` | `[]` | ids a ocultar del dibujo y del hit-test — siguen simulados, así que al quitar el filtro no se reinicia el layout |
| `selectedId` | `String` | `undefined` | v-model opcionalmente controlado (`v-model:selected-id`) |
| `layoutConfig` | `Object` | `{}` | `{ repulsion?, springLength? }` — afinado en caliente (ver abajo) |
| `edgeLabelsAlways` | `Boolean` | `false` | mostrar las etiquetas de arista sin importar el zoom (por defecto solo aparecen a partir de zoom > 0.55) |

`GraphNode.state` acepta `'ghost'` (solo contorno — pensado para "aún no confirmado/sin datos propios"), `'solid'` (relleno, por defecto) o `'active'` (relleno + halo, para destacar un nodo concreto más allá de la selección).

`GraphNode.size` es un peso relativo adicional al grado (nº de conexiones) para el cálculo del radio; por defecto `1`.

`GraphNode.filled` (por defecto `true`): con `false` el nodo se dibuja como anillo — borde sólido, centro hueco (relleno `--c-graph-surface`) — en vez de relleno completo. Es independiente de `state`: no debe confundirse con el hueco punteado de `'ghost'` (que significa "sin datos propios todavía"); `filled: false` es para distinguir dos niveles de un mismo dato ya existente (p. ej. "verificado a fondo" vs "verificado por encima"), no presencia/ausencia de ficha.

`layoutConfig.repulsion` (default `2600`) controla cuánto se repelen todos los nodos entre sí; `layoutConfig.springLength` (default `90`) es la distancia de reposo entre dos nodos unidos por una arista. Ambos se leen en cada tick de la simulación (no se cachean), así que cambiarlos desde fuera —p. ej. un slider— reacomoda el layout en caliente sin necesidad de `reheat()` manual (el propio componente lo llama al detectar el cambio).

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:selectedId` | `string \| null` | selección controlada |
| `node-click` | `GraphNode \| null` | clic sobre un nodo (`null` si el clic fue en vacío) |
| `node-hover` | `GraphNode \| null` | cambio de nodo bajo el puntero |

## Expuesto (`ref`)

| Método | Descripción |
|---|---|
| `reheat(amount?)` | reactiva la simulación de fuerzas (útil tras cambiar `nodes`/`edges` externamente sin que el componente lo detecte) |

## Uso

```html
<CGraph
  :nodes="nodes"
  :edges="edges"
  :group-colors="{ artist: '#c1502c', label: '#2c7168' }"
  v-model:selected-id="selectedId"
  @node-click="onNodeClick"
/>
```

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-graph-node-fill` | `color(primary)` | relleno por defecto cuando el nodo no tiene color en `groupColors` |
| `--c-graph-edge-color` | `color(text, muted)` | color de arista sin atenuar |
| `--c-graph-edge-color-dim` | `color(line)` | color de arista atenuada (fuera del foco de selección/hover) |
| `--c-graph-ink` | `color(text)` | color de las etiquetas de nodo |
| `--c-graph-surface` | `color(surface)` | relleno de los nodos en estado `ghost` |

## Dependencias

- `useOptionalModel` (composable compartido de plantillas)

## Carga incremental (PLT-004 tanda 1)

El componente se puede usar de forma incremental cambiando reactivamente las props `nodes`/`edges` (añadir elementos al array), sin re-montar ni API imperativa nueva. Al detectar nodos nuevos:

- **Se preservan las posiciones** de los nodos ya colocados (solo se inicializan los nuevos).
- Un nodo nuevo **nace junto a un vecino ya posicionado** (por sus aristas) con un pequeño jitter, no en el origen — evita que entre "volando" desde el centro.
- El `reheat` es **moderado** (`0.35`) cuando solo se añade sobre un grafo existente (el resto apenas se reacomoda) y completo (`0.6`) en la carga inicial o si hubo bajas.
- El bucle de simulación **se detiene cuando el grafo se enfría** y no hay interacción, y se rearma solo en el siguiente `reheat` (mutación, drag o cambio de `layoutConfig`) — antes giraba en vacío indefinidamente. (El bucle de dibujo sí sigue activo para responder a paneo/zoom.)

Sin cambios de API: `reheat`/`setFixed`/`release` y las props se mantienen. Los consumidores que cargan todo el grafo de una vez (morrofi/viewer, migas/viewer) no cambian de comportamiento, salvo que la simulación deja de girar en vacío al estabilizarse.

## Limitaciones conocidas

- El texto dibujado en canvas (etiquetas de nodo/arista) usa una tipografía fija en JS (`system-ui, sans-serif`), no los typesets de Bedrock — `@include typeset()` es un mixin SCSS que solo aplica a texto DOM, no hay puente todavía para tipografía de canvas.
- El layout es una simulación de fuerzas genérica de propósito general (repulsión + muelles + centrado + colisión mínima entre radios visuales), no una librería de grafos completa: no hay agrupación jerárquica, edge-bundling ni layouts alternativos (radial, jerárquico...).
- **Rendimiento (PLT-004 tanda 2, pendiente)**: el layout sigue siendo O(n²) por tick en el hilo principal y el render redibuja todo sin culling — cómodo hasta ~300-500 nodos. Para 2-5k nodos fluidos hacen falta quadtree/Barnes-Hut, simulación en Web Worker y culling por viewport (no implementado todavía).
