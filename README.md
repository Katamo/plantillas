# Plantillas

Librería de componentes y módulos reutilizables construidos sobre [CSS Bedrock](../css_bedrock). Almacena componentes Vue limpios, versionados e independientes de proyecto, exportables mediante importación directa o copy-paste a cualquier proyecto que use Bedrock como base.

---

## Arquitectura

Tres tipos de unidades, cada una en su propia carpeta con todos sus archivos co-localizados:

- **Components** (`.c-`) — unidades atómicas de UI
- **Modules** (`.m-`) — secciones completas de página que componen varios componentes
- **Composables** (`use-`) — lógica Vue reutilizable sin UI propia

```
src/components/c-button/
├── index.js              ← re-exporta como named export y default
├── c-button.vue
├── c-button.scss
├── c-button.story.vue
├── c-button.md
└── manifest.json

src/modules/m-header/
├── index.js
├── m-header.vue
├── m-header.scss
├── m-header.story.vue
├── m-header.md
└── manifest.json

src/composables/use-scroll-shrink/
├── index.js
├── useScrollShrink.js
├── useScrollShrink.story.vue
├── useScrollShrink.md
└── manifest.json
```

### index.js

Patrón obligatorio en todos los tipos de unidad:

```js
// componente
import CButton from './c-button.vue';
export { CButton, CButton as default };

// composable
import { useScrollShrink } from './useScrollShrink';
export { useScrollShrink, useScrollShrink as default };
```

### manifest.json

```json
{
  "name": "c-button",
  "version": "1.0.0",
  "type": "component",
  "dependencies": [],
  "tags": ["cta", "interactive"]
}
```

El campo `type` acepta `"component"`, `"module"` o `"composable"`. El campo `dependencies` lista otras unidades de plantillas de las que depende, lo que permite resolver el árbol completo antes de exportar.

---

## Instalación del catálogo (este proyecto)

```bash
npm install
npm run story:dev     # catálogo en http://localhost:6006
npm run story:build   # build estático
npm run story:preview # previsualizar el build
```

Requiere que [css_bedrock](../css_bedrock) esté disponible en `../css_bedrock` (mismo nivel de directorio).

---

## Consumir plantillas en otro proyecto

### 1. Añadir la dependencia

En el `package.json` del proyecto consumidor:

```json
"devDependencies": {
  "plantillas": "file:../plantillas"
}
```

```bash
npm install
```

### 2. Configurar el alias de Vite

En el `vite.config.js` del proyecto consumidor:

```js
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      'plantillas': resolve(__dirname, '../plantillas/src'),
    },
  },
})
```

### 3. Configurar loadPaths de SCSS

Los componentes de plantillas usan `@use 'bedrock-config' as *` sin ruta relativa. El proyecto consumidor debe exponer su propio `bedrock-config.scss` en el `loadPaths` de SASS:

```js
// vite.config.js del proyecto consumidor
css: {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
      loadPaths: [resolve(__dirname, 'src/assets/styles/setup')], // ajustar al path del proyecto
    },
  },
},
```

De este modo cada proyecto compila los componentes con sus propios tokens de Bedrock.

### 4. Importar componentes y composables

```js
import { CBrandLogo }     from 'plantillas/components/brand/logo'
import { MHeaderLogoNav } from 'plantillas/modules/header/logo-nav'
import { useScrollShrink } from 'plantillas/composables/use-scroll-shrink'
```

> Los composables no están en el mapa de exports de `package.json` por defecto. Para habilitarlos en un proyecto consumidor, añadir `"./composables/*": "./src/composables/*"` junto a los demás exports.

```scss
// Si necesitas importar estilos por separado
@use 'plantillas/styles/bedrock-config' as *;
```

---

## Crear un nuevo componente

1. Crear la carpeta `src/components/c-nombre/`
2. Añadir los archivos:

**`c-nombre.scss`**
```scss
@use 'bedrock-config' as *;

.c-nombre {
  // estilos base
}
```

**`c-nombre.vue`**
```vue
<template>
  <div class="c-nombre">
    <slot />
  </div>
</template>

<script setup>
defineProps({})
</script>

<style lang="scss" src="./c-nombre.scss" />
```

**`c-nombre.story.vue`**
```vue
<script setup>
import CNombre from './c-nombre.vue'
</script>

<template>
  <Story title="Components/c-nombre">
    <Variant title="Default">
      <CNombre />
    </Variant>
  </Story>
</template>
```

**`manifest.json`**
```json
{
  "name": "c-nombre",
  "version": "1.0.0",
  "type": "component",
  "dependencies": [],
  "tags": []
}
```

---

## Crear un nuevo composable

1. Crear la carpeta `src/composables/use-nombre/`
2. Añadir los archivos:

**`useNombre.js`**
```js
import { onMounted, onUnmounted } from 'vue'

export function useNombre(el, { enabled = true } = {}) {
  if (!enabled) return

  onMounted(() => { /* setup */ })
  onUnmounted(() => { /* cleanup */ })
}
```

**`index.js`**
```js
import { useNombre } from './useNombre';
export { useNombre, useNombre as default };
```

**`useNombre.story.vue`**

Los composables no son componentes, por lo que las stories definen mini-componentes inline con `defineComponent` para aislar correctamente cada variante:

```vue
<script setup>
import { defineComponent, ref } from 'vue'
import { useNombre } from './useNombre'
import docs from './useNombre.md?raw'

const DemoDefault = defineComponent({
  setup() {
    const el = ref(null)
    useNombre(el, { enabled: true })
    return { el }
  },
  template: `<div ref="el">Demo</div>`,
})
</script>

<template>
  <Story title="Composables/useNombre" :docs="docs">
    <Variant title="Default">
      <DemoDefault />
    </Variant>
  </Story>
</template>
```

**`useNombre.md`** — documenta la API, las dependencias (CSS custom props u otras), el contrato de efectos de DOM y un ejemplo de integración en un componente.

**`manifest.json`**
```json
{
  "name": "useNombre",
  "version": "1.0.0",
  "type": "composable",
  "dependencies": [],
  "tags": []
}
```

### Uso desde un componente

```js
import { ref } from 'vue'
import { useNombre } from '../../composables/use-nombre' // ruta relativa desde el componente

const el = ref(null)
useNombre(el, { enabled: props.someFlag })
```

> Usar siempre rutas relativas para importar composables desde componentes/módulos de plantillas. El alias `@` se resuelve con la config del proyecto consumidor, que apunta a su propio `src/`, no al de plantillas.

---

## Versionado

Cada componente tiene su propia versión en `manifest.json`. Al modificar un componente:

1. Actualizar `version` en su `manifest.json` (semver: `1.0.0` → `1.1.0` para mejoras, `2.0.0` para cambios breaking)
2. El repositorio global se versiona con git tags

Los proyectos consumidores que usan la importación `file:` reciben los cambios al hacer `npm install`. Los que han usado copy-paste actualizan manualmente el componente cuando lo necesitan.
