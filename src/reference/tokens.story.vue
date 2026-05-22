<template>
  <Story title="Reference/Tokens" :layout="{ type: 'single', iframe: false }">
    <Variant title="Design tokens">
      <div class="ref">

        <!-- COLORES -->
        <section class="ref-section">
          <h2 class="ref-heading">Colores</h2>

          <h3 class="ref-subheading">Primary</h3>
          <div class="ref-swatches">
            <div class="ref-swatch" v-for="s in colors.primary" :key="s.token">
              <div class="ref-swatch__color" :style="{ background: s.hex, borderColor: s.hex === '#ffffff' ? '#e0e0e0' : s.hex }"></div>
              <span class="ref-swatch__token">{{ s.token }}</span>
              <span class="ref-swatch__hex">{{ s.hex }}</span>
            </div>
          </div>

          <h3 class="ref-subheading">Text</h3>
          <div class="ref-swatches">
            <div class="ref-swatch" v-for="s in colors.text" :key="s.token">
              <div class="ref-swatch__color" :style="{ background: s.hex, borderColor: s.hex === '#ffffff' || s.hex === '#f5f5f5' ? '#e0e0e0' : s.hex }"></div>
              <span class="ref-swatch__token">{{ s.token }}</span>
              <span class="ref-swatch__hex">{{ s.hex }}</span>
            </div>
          </div>

          <h3 class="ref-subheading">Surface</h3>
          <div class="ref-swatches">
            <div class="ref-swatch" v-for="s in colors.surface" :key="s.token">
              <div class="ref-swatch__color" :style="{ background: s.hex, borderColor: s.hex === '#ffffff' ? '#e0e0e0' : s.hex }"></div>
              <span class="ref-swatch__token">{{ s.token }}</span>
              <span class="ref-swatch__hex">{{ s.hex }}</span>
            </div>
          </div>

          <h3 class="ref-subheading">Grey</h3>
          <div class="ref-swatches">
            <div class="ref-swatch" v-for="s in colors.grey" :key="s.token">
              <div class="ref-swatch__color" :style="{ background: s.hex, borderColor: s.hex === '#f5f5f5' ? '#e0e0e0' : s.hex }"></div>
              <span class="ref-swatch__token">{{ s.token }}</span>
              <span class="ref-swatch__hex">{{ s.hex }}</span>
            </div>
          </div>

          <h3 class="ref-subheading">Line</h3>
          <div class="ref-swatches">
            <div class="ref-swatch" v-for="s in colors.line" :key="s.token">
              <div class="ref-swatch__color" :style="{ background: s.hex, borderColor: s.hex }"></div>
              <span class="ref-swatch__token">{{ s.token }}</span>
              <span class="ref-swatch__hex">{{ s.hex }}</span>
            </div>
          </div>
        </section>

        <!-- ESPACIADO -->
        <section class="ref-section">
          <h2 class="ref-heading">Espaciado</h2>
          <p class="ref-note">spacing-base: 4px — <code>spacing(n)</code> = n × 4px</p>
          <div class="ref-spacing">
            <div class="ref-spacing__row" v-for="s in spacing" :key="s.n">
              <span class="ref-spacing__label">spacing({{ s.n }})</span>
              <div class="ref-spacing__bar" :style="{ width: s.px + 'px', minWidth: '2px' }"></div>
              <span class="ref-spacing__value">{{ s.px }}px</span>
            </div>
          </div>
        </section>

        <!-- TIPOGRAFÍA -->
        <section class="ref-section">
          <h2 class="ref-heading">Tipografía</h2>

          <h3 class="ref-subheading">Familias</h3>
          <div class="ref-families">
            <div class="ref-family">
              <span class="ref-family__label">font(base)</span>
              <span class="ref-family__sample" style="font-family: system-ui, -apple-system, sans-serif;">The quick brown fox</span>
              <span class="ref-family__stack">system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif</span>
            </div>
            <div class="ref-family">
              <span class="ref-family__label">font(heading)</span>
              <span class="ref-family__sample" style="font-family: system-ui, -apple-system, sans-serif; font-weight: 700;">The quick brown fox</span>
              <span class="ref-family__stack">system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif</span>
            </div>
            <div class="ref-family">
              <span class="ref-family__label">font(mono)</span>
              <span class="ref-family__sample" style="font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;">const foo = 'bar'</span>
              <span class="ref-family__stack">ui-monospace, SFMono-Regular, Menlo, monospace</span>
            </div>
          </div>

          <h3 class="ref-subheading">Pesos</h3>
          <div class="ref-weights">
            <div class="ref-weight" v-for="w in weights" :key="w.token">
              <span class="ref-weight__label">weight({{ w.token }}) · {{ w.value }}</span>
              <span class="ref-weight__sample" :style="{ fontWeight: w.value }">Plantillas · The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>

          <h3 class="ref-subheading">Jerarquía</h3>
          <div class="ref-type-scale">
            <div class="ref-type-row">
              <span class="ref-type-row__label">h1</span>
              <h1 class="ref-h1">Título de primer nivel</h1>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">h2</span>
              <h2 class="ref-h2">Título de segundo nivel</h2>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">h3</span>
              <h3 class="ref-h3">Título de tercer nivel</h3>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">h4</span>
              <h4 class="ref-h4">Título de cuarto nivel</h4>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">body</span>
              <p class="ref-body">El cuerpo del texto es el typeset más importante. La line-height es el parámetro que más afecta a la sensación de espacio: demasiado corta agobia, demasiado larga rompe la cohesión del texto.</p>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">small</span>
              <p class="ref-small">Texto de apoyo, metadatos, etiquetas y elementos secundarios de la interfaz.</p>
            </div>
            <div class="ref-type-row">
              <span class="ref-type-row__label">mono</span>
              <code class="ref-mono">const spacing = (n) => n * 4 + 'px'</code>
            </div>
          </div>

          <h3 class="ref-subheading">Elementos inline</h3>
          <p class="ref-body ref-inline-sample">
            Texto con <strong>negrita</strong>, <em>cursiva</em>, <strong><em>negrita cursiva</em></strong>,
            <a href="#" style="color: #2563eb;">un enlace</a> y <code class="ref-mono" style="font-size: 0.875em;">código en línea</code>.
          </p>
        </section>

      </div>
    </Variant>
  </Story>
</template>

<script setup>
const colors = {
  primary: [
    { token: 'primary',       hex: '#2563eb' },
    { token: 'primary light', hex: '#dbeafe' },
    { token: 'primary dark',  hex: '#1d4ed8' },
  ],
  text: [
    { token: 'text',       hex: '#1a1a1a' },
    { token: 'text muted', hex: '#666666' },
    { token: 'text light', hex: '#f5f5f5' },
  ],
  surface: [
    { token: 'surface',      hex: '#ffffff' },
    { token: 'surface alt',  hex: '#f5f5f5' },
    { token: 'surface dark', hex: '#1a1a1a' },
  ],
  grey: [
    { token: 'grey',      hex: '#888888' },
    { token: 'grey light', hex: '#f5f5f5' },
    { token: 'grey mid',  hex: '#cccccc' },
    { token: 'grey dark', hex: '#444444' },
  ],
  line: [
    { token: 'line',      hex: '#e0e0e0' },
    { token: 'line dark', hex: '#333333' },
  ],
}

const spacing = Array.from({ length: 20 }, (_, i) => ({
  n: i + 1,
  px: (i + 1) * 4,
}))

const weights = [
  { token: 'thin',        value: 100 },
  { token: 'extra-light', value: 200 },
  { token: 'light',       value: 300 },
  { token: 'regular',     value: 400 },
  { token: 'medium',      value: 500 },
  { token: 'semi-bold',   value: 600 },
  { token: 'bold',        value: 700 },
  { token: 'extra-bold',  value: 800 },
  { token: 'black',       value: 900 },
]
</script>

<style scoped>
.ref {
  padding: 40px;
  max-width: 900px;
  font-family: system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
}

.ref-section {
  margin-bottom: 64px;
}

.ref-heading {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  margin: 0 0 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
}

.ref-subheading {
  font-size: 11px;
  font-weight: 600;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 32px 0 12px;
}

.ref-note {
  font-size: 13px;
  color: #888;
  margin: -8px 0 20px;
  font-family: ui-monospace, monospace;
}

/* Swatches */
.ref-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.ref-swatch {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ref-swatch__color {
  width: 72px;
  height: 72px;
  border-radius: 6px;
  border: 1px solid;
}

.ref-swatch__token {
  font-size: 11px;
  font-weight: 600;
  color: #1a1a1a;
}

.ref-swatch__hex {
  font-size: 11px;
  color: #888;
  font-family: ui-monospace, monospace;
}

/* Spacing */
.ref-spacing {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ref-spacing__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ref-spacing__label {
  font-size: 12px;
  font-family: ui-monospace, monospace;
  color: #888;
  width: 100px;
  flex-shrink: 0;
}

.ref-spacing__bar {
  height: 8px;
  background: #2563eb;
  border-radius: 2px;
  max-width: 400px;
}

.ref-spacing__value {
  font-size: 12px;
  color: #888;
  font-family: ui-monospace, monospace;
}

/* Familias */
.ref-families {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ref-family {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: auto auto;
  gap: 2px 16px;
  align-items: baseline;
}

.ref-family__label {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: #888;
  grid-row: 1 / 3;
  align-self: center;
}

.ref-family__sample {
  font-size: 20px;
  color: #1a1a1a;
}

.ref-family__stack {
  font-size: 11px;
  color: #aaa;
  font-family: ui-monospace, monospace;
}

/* Pesos */
.ref-weights {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ref-weight {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  align-items: baseline;
}

.ref-weight__label {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: #888;
  flex-shrink: 0;
}

.ref-weight__sample {
  font-size: 16px;
  color: #1a1a1a;
}

/* Jerarquía tipográfica */
.ref-type-scale {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ref-type-row {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 16px;
  align-items: baseline;
}

.ref-type-row__label {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: #aaa;
  align-self: start;
  padding-top: 4px;
}

.ref-h1 { font-size: 40px; font-weight: 700; line-height: 1.1; margin: 0; }
.ref-h2 { font-size: 28px; font-weight: 700; line-height: 1.2; margin: 0; }
.ref-h3 { font-size: 22px; font-weight: 600; line-height: 1.3; margin: 0; }
.ref-h4 { font-size: 18px; font-weight: 600; line-height: 1.4; margin: 0; }
.ref-body { font-size: 16px; line-height: 1.6; margin: 0; color: #1a1a1a; }
.ref-small { font-size: 13px; line-height: 1.5; margin: 0; color: #666; }
.ref-mono { font-family: ui-monospace, monospace; font-size: 14px; color: #444; }

.ref-inline-sample {
  line-height: 1.8;
}
</style>
