# c-section-heading

Encabezado de bloque/sección: barra de acento + índice opcional + título + zona de acciones a la derecha ("ver todo", flechas de carrusel, tabs…). Aparece en cualquier página de composición por bloques.

## Typesets requeridos

El consumidor debe definir **`h2`** (título) y **`label`** (índice) en su `bedrock-config.scss`. Usa los grupos de color `primary` y `text`.

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|---|---|---|---|---|
| `index` | `String` | No | `null` | Índice de sección (`/01`) pintado en `color(primary)` |
| `bar` | `Boolean` | No | `true` | Muestra la barra de acento delante del título |
| `level` | `String` | No | `'h2'` | Etiqueta del título (`h2`, `h3`…) |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Texto del título |
| `actions` | Zona derecha: enlaces, botones, controles |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-section-heading-gap` | `spacing(3)` | Separación entre piezas |
| `--c-section-heading-bar-width` | `spacing(1)` | Ancho de la barra |
| `--c-section-heading-bar-height` | `spacing(4)` | Alto de la barra |

## Ejemplo

```html
<CSectionHeading index="/01">
  Últimos lanzamientos
  <template #actions>
    <a href="/lanzamientos">Ver todo</a>
  </template>
</CSectionHeading>
```
