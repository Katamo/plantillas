# useScrollShrink

Reduce progresivamente la altura de un elemento a medida que el usuario hace scroll. Cuando la reducción está completa añade `data-shrink` al elemento para permitir reacciones de estilo adicionales.

## Uso en un componente

### 1. Llamar el composable en el `<script setup>`

```js
import { ref } from 'vue'
import { useScrollShrink } from '../../composables/use-scroll-shrink'

const props = defineProps({
  shrink: { type: Boolean, default: false },
})

const el = ref(null)
useScrollShrink(el, { enabled: props.shrink })
```

### 2. Mapear las CSS custom properties en el SCSS del componente

El composable lee cuatro propiedades genéricas del elemento. En el SCSS del componente hay que mapear sus propias variables a esas propiedades:

```scss
.c-mi-componente {
  --scroll-shrink-max: var(--c-mi-componente-height);
  --scroll-shrink-min: var(--c-mi-componente-height-min);
  --scroll-shrink-start: var(--c-mi-componente-shrink-start);
  --scroll-shrink-distance: var(--c-mi-componente-shrink-distance);
}
```

## API

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|---|---|---|---|
| `el` | `Ref<HTMLElement>` | — | Ref al elemento DOM que se va a reducir |
| `options.enabled` | `Boolean` | `true` | Activa o desactiva el comportamiento |

### CSS custom properties que lee el composable

| Propiedad | Descripción |
|---|---|
| `--scroll-shrink-max` | Altura máxima (cuando `scrollY` ≤ `start`) |
| `--scroll-shrink-min` | Altura mínima (cuando la reducción está completa) |
| `--scroll-shrink-start` | Scroll a partir del cual empieza la reducción |
| `--scroll-shrink-distance` | Distancia de scroll para completar la reducción |

## Atributo de estado

Cuando la reducción está completa, el composable añade `data-shrink` al elemento. Se puede usar desde SCSS para aplicar estilos adicionales:

```scss
.c-mi-componente {
  @include attr(shrink) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}
```

## Ejemplo completo

```vue
<!-- c-mi-componente.vue -->
<template>
  <div ref="el" class="c-mi-componente">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollShrink } from '../../composables/use-scroll-shrink'

const props = defineProps({
  shrink: { type: Boolean, default: false },
})

const el = ref(null)
useScrollShrink(el, { enabled: props.shrink })
</script>

<style lang="scss" src="./c-mi-componente.scss" />
```

```scss
/* c-mi-componente.scss */
@use 'bedrock-config' as *;

:root {
  --c-mi-componente-height: #{spacing(20)};
  --c-mi-componente-height-min: #{spacing(14)};
  --c-mi-componente-shrink-start: 0px;
  --c-mi-componente-shrink-distance: 200px;
}

.c-mi-componente {
  --scroll-shrink-max: var(--c-mi-componente-height);
  --scroll-shrink-min: var(--c-mi-componente-height-min);
  --scroll-shrink-start: var(--c-mi-componente-shrink-start);
  --scroll-shrink-distance: var(--c-mi-componente-shrink-distance);

  height: var(--c-mi-componente-height);
}
```
