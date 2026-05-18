# Plantillas

Librería de componentes y módulos reutilizables construidos sobre [CSS Bedrock](../css_bedrock). Almacena componentes Vue limpios, versionados e independientes de proyecto, exportables mediante importación directa o copy-paste a cualquier proyecto que use Bedrock como base.

---

## Arquitectura

Los componentes siguen la convención de Bedrock:

- **Components** (`.c-`) — unidades atómicas de UI
- **Modules** (`.m-`) — secciones completas de página que componen varios componentes

Cada elemento vive en su propia carpeta con todos sus archivos co-localizados:

```
src/components/c-button/
├── c-button.vue          ← componente Vue
├── c-button.scss         ← estilos (usa Bedrock vía loadPaths)
├── c-button.story.vue    ← story de Histoire
└── manifest.json         ← versión y dependencias
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

El campo `dependencies` lista otros componentes/módulos de los que depende este elemento, lo que permite resolver el árbol completo antes de exportar.

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

### 4. Importar componentes

```js
import { CBrandLogo } from 'plantillas/components/brand/logo'
import { MHeader }    from 'plantillas/modules/m-header'
```

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

## Versionado

Cada componente tiene su propia versión en `manifest.json`. Al modificar un componente:

1. Actualizar `version` en su `manifest.json` (semver: `1.0.0` → `1.1.0` para mejoras, `2.0.0` para cambios breaking)
2. El repositorio global se versiona con git tags

Los proyectos consumidores que usan la importación `file:` reciben los cambios al hacer `npm install`. Los que han usado copy-paste actualizan manualmente el componente cuando lo necesitan.
