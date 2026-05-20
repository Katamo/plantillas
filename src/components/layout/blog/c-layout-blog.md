# c-layout-blog

Shell de página para blogs. El header es sticky (siempre visible al hacer scroll). El footer vive dentro del área `main` y se empuja al final del contenido, no queda anclado al viewport.

## Diferencia con `c-layout-default`

| | `c-layout-default` | `c-layout-blog` |
|---|---|---|
| Header | Estático | Sticky (`position: sticky; top: 0`) |
| Footer | Área grid propia, anclada al viewport | Dentro de `main`, sigue al contenido |
| Grid areas | `header` + `main` + `footer` | `header` + `main` |

## Dependencias Bedrock

Requiere `BGridLayout` y `BGridArea` de `@bedrock/core`.

## Props

Este componente no tiene props.

## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido del `<header>` sticky |
| *(default)* | Contenido del artículo o página |
| `footer` | Footer al final del contenido scrollable |

## Estructura HTML generada

```html
<div data-grid-layout="blog" class="b-grid-layout">
  <header data-grid-area="header" class="b-grid-area"><!-- slot header --></header>
  <main data-grid-area="main" class="b-grid-area">
    <!-- slot default -->
    <footer class="c-layout-blog__footer"><!-- slot footer --></footer>
  </main>
</div>
```

## Ejemplo de uso

```vue
<CLayoutBlog>
  <template #header>
    <MHeader />
  </template>

  <RouterView />

  <template #footer>
    <MFooter />
  </template>
</CLayoutBlog>
```
