# c-close-button

Botón de cierre genérico para drawers, modales y paneles. Renderiza un símbolo ✕ con estilos mínimos y sin fondo.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `label` | `String` | `'Cerrar'` | Aria-label del botón |

## Eventos

| Evento | Descripción |
|---|---|
| `click` | Se emite al pulsar el botón |

## Uso

```html
<CCloseButton @click="closeDrawer" />
<CCloseButton label="Cerrar panel lateral" @click="closePanel" />
```

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-close-button-color` | `color(text, muted)` | Color del símbolo |
| `--c-close-button-color-hover` | `color(text)` | Color en hover |
| `--c-close-button-padding` | `spacing(2)` | Padding del botón |
