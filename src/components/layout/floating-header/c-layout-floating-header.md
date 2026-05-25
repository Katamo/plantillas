# c-layout-floating-header

Shell de página en el que el header flota sobre el contenido mediante `position: fixed`. El área `main` reserva el espacio ocupado por el header con un `margin-top` igual a la altura configurada.

Útil para headers transparentes o semitransparentes que se superponen visualmente al contenido al inicio de la página.

## Dependencias Bedrock

No requiere `BGridLayout` ni `BGridArea`. El layout se implementa con flexbox.

## Props

Este componente no tiene props.

## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido del header fijo. Ocupa el ancho completo y la altura definida por `--c-layout-floating-header-height`. |
| *(default)* | Contenido principal de la página. |
| `footer` | Footer, empujado al final del contenido mediante `margin-top: auto`. |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-layout-floating-header-height` | `spacing(20)` (80px) | Alto del header. Controla tanto la altura del elemento header como el `margin-top` del main. |

## Estructura HTML generada

```html
<div class="c-layout-floating-header">
  <header class="c-layout-floating-header__header"><!-- slot header --></header>
  <main class="c-layout-floating-header__main">
    <!-- slot default -->
    <footer class="c-layout-floating-header__footer"><!-- slot footer --></footer>
  </main>
</div>
```

## Ejemplo de uso

```vue
<CLayoutFloatingHeader>
  <template #header>
    <MHeaderLogoNav :shrink="true" />
  </template>

  <RouterView />

  <template #footer>
    <MFooter />
  </template>
</CLayoutFloatingHeader>
```

## Integración con useScrollShrink

Si el header usa `useScrollShrink` para reducir su altura al hacer scroll, hay que sincronizar el custom property del layout con el del módulo de header para que el `margin-top` del main no quede desajustado:

```css
/* El layout y el header comparten la misma altura inicial */
:root {
  --c-layout-floating-header-height: var(--m-header-logo-nav-height);
}
```

El `margin-top` del main corresponde a la altura máxima del header. El contenido quedará visible aunque el header se reduzca, ya que el espacio extra pasa a ser padding visible en el scroll inicial.
