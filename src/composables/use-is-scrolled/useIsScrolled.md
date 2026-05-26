# useIsScrolled

Detecta si la página ha superado un umbral de scroll y devuelve un ref reactivo `isScrolled`. Útil para activar estilos de contexto (header compacto, barra flotante, etc.) mediante atributos `data-*`.

## Uso

```js
import { useIsScrolled } from 'plantillas/composables/use-is-scrolled'

const { isScrolled } = useIsScrolled()
// o con umbral personalizado:
const { isScrolled } = useIsScrolled(100)
```

Aplica el estado al elemento raíz para usarlo como contexto en SCSS:

```vue
<template>
  <div :data-is-scrolled="isScrolled || undefined">
    <!-- contenido -->
  </div>
</template>
```

> `|| undefined` evita que el atributo aparezca en el DOM con valor `false`.  
> Cuando el usuario está en el top, el atributo no existe; cuando hace scroll, aparece con valor `true`.

## API

### Parámetros

| Parámetro   | Tipo     | Default | Descripción                                      |
|-------------|----------|---------|--------------------------------------------------|
| `threshold` | `Number` | `0`     | Píxeles de scroll a partir de los cuales `isScrolled` pasa a `true` |

### Valor de retorno

| Propiedad    | Tipo            | Descripción                  |
|--------------|-----------------|------------------------------|
| `isScrolled` | `Ref<Boolean>`  | `true` si `scrollY > threshold` |

## Uso en SCSS

Con el atributo presente en el elemento raíz se puede usar como contexto para estilos descendientes:

```scss
// Estado por defecto (sin scroll)
.mi-header {
  background: transparent;
}

// Con scroll activo
[data-is-scrolled] .mi-header {
  background: color(surface);
}
```

O con el mixin `@include attr()` de Bedrock directamente sobre el elemento que tiene el atributo:

```scss
.c-shell {
  @include attr(is-scrolled) {
    // estilos cuando hay scroll
  }
}
```

## Ejemplo completo

```vue
<!-- App.vue -->
<script setup>
import { useIsScrolled } from 'plantillas/composables/use-is-scrolled'

const { isScrolled } = useIsScrolled()
</script>

<template>
  <div :data-is-scrolled="isScrolled || undefined">
    <slot />
  </div>
</template>
```
