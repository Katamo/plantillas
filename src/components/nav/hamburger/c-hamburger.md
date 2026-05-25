# c-hamburger

Botón de menú tipo hamburger para activar navegaciones móviles. Gestiona `aria-label` y `aria-expanded` automáticamente según el estado `open`.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `open` | `Boolean` | `false` | Estado abierto/cerrado. Cambia el aria-label y el aria-expanded |
| `labelOpen` | `String` | `'Abrir menú'` | Aria-label cuando el menú está cerrado |
| `labelClose` | `String` | `'Cerrar menú'` | Aria-label cuando el menú está abierto |

## Eventos

| Evento | Descripción |
|---|---|
| `click` | Se emite al pulsar el botón |

## Uso

```html
<CHamburger :open="isMenuOpen" @click="isMenuOpen = true" />
```

El componente no gestiona el estado internamente — el consumidor controla `open` y reacciona al evento `click`.

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-hamburger-size` | `spacing(10)` | Tamaño del botón (ancho y alto) |
| `--c-hamburger-padding` | `spacing(2)` | Padding interior |
| `--c-hamburger-bar-gap` | `5px` | Espacio entre las barras |
| `--c-hamburger-bar-height` | `2px` | Grosor de cada barra |
| `--c-hamburger-bar-color` | `color(text)` | Color de las barras |

Sobrescribibles por contexto:

```css
.mi-header {
  --c-hamburger-bar-color: white;
  --c-hamburger-size: 48px;
}
```
