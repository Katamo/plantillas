# Plantillas — Instrucciones para Claude

Este proyecto es una librería de componentes y módulos reutilizables construidos sobre **CSS Bedrock** (`../css_bedrock`). Cualquier componente, módulo o bloque que se genere aquí debe seguir estrictamente las convenciones de Bedrock.

Antes de crear o editar cualquier elemento, lee `../css_bedrock/SYSTEM.md` para tener la referencia completa del sistema. Lo que sigue es un resumen operativo de las reglas más importantes.

---

## Reglas de creación de componentes y módulos

### Nomenclatura

- Los **components** usan el prefijo `.c-` en su clase raíz y en el nombre de carpeta/archivo: `c-button`, `c-tag`, `c-menu`
- Los **modules** usan el prefijo `.m-` : `m-header`, `m-footer`, `m-hero`
- Los módulos no importan otros módulos, solo `bedrock-config` y usan clases de componentes en su estructura

### Estructura de archivos (siempre co-localizada)

Cada elemento vive en su propia carpeta con todos sus archivos juntos:

```
src/components/c-nombre/
├── index.js              ← re-exporta el componente como named export
├── c-nombre.vue
├── c-nombre.scss
├── c-nombre.story.vue
├── c-nombre.md
└── manifest.json

src/modules/m-nombre/
├── index.js
├── m-nombre.vue
├── m-nombre.scss
├── m-nombre.story.vue
├── m-nombre.md
└── manifest.json
```

**`index.js` — patrón obligatorio**, igual que Bedrock:

```js
import CNombre from './c-nombre.vue';
export { CNombre, CNombre as default };
```

Esto permite importarlo como named export en el proyecto consumidor:

```js
import { CNombre } from 'plantillas/components/c-nombre'
// equivalente a como Bedrock exporta sus componentes:
import { BLogo } from '@bedrock/core/vue'
```

### CSS Custom Properties — valores configurables

Los componentes **no deben exponer props de Vue para valores visuales configurables** (tamaños, espaciados, colores, etc.). El mecanismo correcto es declarar CSS custom properties en `:root` y usarlas en los estilos. El proyecto consumidor las sobrescribe por contexto sin modificar el componente.

**Correcto:**
```scss
:root {
  --c-nombre-gap: #{spacing(3)};
  --c-nombre-size: #{spacing(10)};
}

.c-nombre {
  gap: var(--c-nombre-gap);
  width: var(--c-nombre-size);
}
```

Los valores siempre usan `spacing()` de Bedrock, nunca píxeles literales. La interpolación `#{}` es necesaria para que SASS evalúe la función en tiempo de compilación antes de asignarla a la custom property.

```html
<!-- El consumidor ajusta por contexto, sin tocar el componente -->
<div class="mi-header" style="--c-nombre-gap: 8px;">
  <CBrandLogo ... />
</div>
```

**Incorrecto:**
```vue
<!-- No añadir props para valores visuales -->
<CBrandLogo :gap="12" :logoSize="40" />
```

La excepción son props que cambian la **estructura o comportamiento** del componente (`layout`, `href`, `disabled`, `type`…), que sí van como props de Vue porque afectan al HTML renderizado, no solo al estilo.

Las CSS custom properties del componente se documentan en su `.md` bajo la sección **CSS Custom Properties**.

### SCSS — reglas obligatorias

**Siempre empezar con:**
```scss
@use 'bedrock-config' as *;
```
Nunca usar rutas relativas para importar bedrock-config. El proyecto consumidor lo resuelve vía `loadPaths`.

**Orden de declaración dentro de una clase raíz:**
```scss
.c-nombre {
  // 1. Estilos base (mobile-first)

  // 2. Selectores de posición
  @include firstChild { ... }
  @include notLastChild { ... }

  // 3. Hover (solo dispositivos no táctiles)
  @include hover { ... }

  // 4. Breakpoints (mobile-first)
  @include bpFrom(md) { ... }
  @include bpFrom(lg) { ... }

  // 5. Atributos / variantes del propio elemento
  @include attr(type, secondary) { ... }
  @include attr(size, large) { ... }

  // 6. Contextos (reacciones al entorno)
  @include context(background, dark) { ... }

  // 7. Dirección RTL
  @include RTL { ... }
}
```

**Mixins clave disponibles:**

| Mixin | Uso |
|---|---|
| `bpFrom(lg)` | Media query min-width |
| `attr(name, value)` | Variante por `data-name="value"` en el propio elemento |
| `attr(name)` | Variante por `data-name` sin valor |
| `context(name, value)` | Reacciona a un ancestro con `data-name="value"` |
| `childContext(name, value)` | Controla estilos de un descendiente |
| `hover` | Hover solo en dispositivos no táctiles |
| `tapAndHover` | Hover incondicional |
| `RTL` | Estilos para dirección RTL |
| `spacing(n)` | Escala de espaciado (spacing-base × n) |
| `color(name, variant?)` | Token de color |
| `typeset(name)` | Escala tipográfica |
| `font(name)` | Familia tipográfica |

**Atributos en HTML** — las variantes se aplican con `data-*`, nunca con clases adicionales:
```html
<div class="c-button" data-type="ghost" data-size="large"></div>
```

### Vue SFC

- Los props que mapean a atributos Bedrock se pasan como `data-*` en el template
- Usar `:data-prop="value || undefined"` para que el atributo no aparezca en el DOM cuando es nulo
- La hoja de estilos se enlaza con `<style lang="scss" src="./c-nombre.scss" />`

```vue
<template>
  <div
    class="c-nombre"
    :data-type="type || undefined"
    :data-size="size || undefined"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: null },
  size: { type: String, default: null },
})
</script>

<style lang="scss" src="./c-nombre.scss" />
```

### manifest.json

Obligatorio en cada componente y módulo:

```json
{
  "name": "c-nombre",
  "version": "1.0.0",
  "type": "component",
  "dependencies": ["c-otro"],
  "tags": ["cta"]
}
```

- `type`: `"component"` o `"module"`
- `dependencies`: lista de otros componentes/módulos de plantillas que este elemento necesita
- Al modificar un componente, incrementar `version` siguiendo semver

### Documentación del componente

Cada componente tiene un archivo `.md` co-localizado con su documentación. Se importa en la story con `?raw` y se pasa a la prop `docs` de `<Story>`:

```js
import docs from './c-nombre.md?raw'
```

```vue
<Story title="Components/c-nombre" :docs="docs">
```

El `.md` documenta: descripción, dependencias Bedrock, props (tabla), slot, variantes de atributo, CSS custom properties y ejemplos de uso en HTML.

### Story de Histoire

Una story por componente con una `<Variant>` por cada estado o atributo relevante:

```vue
<script setup>
import CNombre from './c-nombre.vue'
</script>

<template>
  <Story title="Components/c-nombre">
    <Variant title="Default">
      <CNombre />
    </Variant>
    <Variant title="[nombre del atributo]">
      <CNombre type="ghost" />
    </Variant>
  </Story>
</template>
```

- El título sigue el patrón `"Components/c-nombre"` o `"Modules/m-nombre"`
- Crear una variante por cada `@include attr(...)` relevante del SCSS

---

## Estructura del proyecto

```
plantillas/
├── src/
│   ├── styles/
│   │   ├── bedrock-config.scss   ← tokens neutros para el catálogo interno
│   │   └── main.scss             ← reset + wrapper de Bedrock
│   ├── histoire-setup.js         ← importa main.scss para Histoire
│   ├── components/               ← elementos .c-
│   └── modules/                  ← elementos .m-
├── histoire.config.js
├── vite.config.js
└── package.json
```

## Consumo desde otros proyectos

Los proyectos consumidores instalan plantillas con `"plantillas": "file:../plantillas"` en `devDependencies` y configuran:
1. Un alias Vite: `'plantillas' → '../plantillas/src'`
2. `loadPaths` de SCSS apuntando a su propia carpeta de `bedrock-config.scss`

Ver `README.md` para instrucciones completas.
