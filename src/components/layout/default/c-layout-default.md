# c-layout-default

Shell de página con tres áreas: `header`, `main` y `footer`. Usa CSS Grid para que el main ocupe todo el espacio disponible y la página alcance como mínimo el alto del viewport.

## Dependencias Bedrock

Requiere `BGridLayout` y `BGridArea` de `@bedrock/core`. El layout CSS se define mediante los mixins `grid-layout` y `grid-area` de Bedrock.

## Props

Este componente no tiene props. Su configuración es estructural y se controla mediante slots.

## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido del área `<header>` |
| *(default)* | Contenido del área `<main>` |
| `footer` | Contenido del área `<footer>` |

## Estructura HTML generada

```html
<div class="c-layout-default">
  <div data-grid-layout="default" class="b-grid-layout">
    <header data-grid-area="header" class="b-grid-area"><!-- slot header --></header>
    <main data-grid-area="main" class="b-grid-area"><!-- slot default --></main>
    <footer data-grid-area="footer" class="b-grid-area"><!-- slot footer --></footer>
  </div>
</div>
```

## Ejemplo de uso

```vue
<CLayoutDefault>
  <template #header>
    <MHeader />
  </template>

  <RouterView />

  <template #footer>
    <MFooter />
  </template>
</CLayoutDefault>
```
