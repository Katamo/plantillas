# c-layout-floating-header

Shell de página en el que el header flota sobre el contenido sin ocupar espacio en el flujo del documento. En modo `fixed` (por defecto), el `main` reserva el espacio del header con `margin-top`; en modo `absolute`, el header se superpone al contenido sin reservar espacio.

Admite dos modos de posicionamiento: `fixed` (por defecto) para headers que permanecen fijos al hacer scroll en toda la página, y `absolute` para headers que flotan dentro de un contenedor específico.

## Dependencias Bedrock

No requiere `BGridLayout` ni `BGridArea`. El layout se implementa con flexbox.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `String` | `'fixed'` | Posicionamiento del header: `'fixed'` (relativo al viewport) o `'absolute'` (relativo al componente). |

## Variantes de atributo

| `data-variant` | Descripción |
|---|---|
| *(sin atributo)* | Header `position: fixed`. El main reserva el espacio del header con `margin-top`. |
| `absolute` | Header `position: absolute`. El root añade `position: relative` para contener el header. El main **no** reserva espacio — el header flota sobre el contenido. |

## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido del header flotante. Ocupa el ancho completo y la altura definida por `--c-layout-floating-header-height`. |
| *(default)* | Contenido principal de la página. |
| `footer` | Footer, empujado al final del contenido mediante `margin-top: auto`. |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-layout-floating-header-height` | `spacing(20)` (80px) | Altura del header. Controla tanto el `height` del elemento header como el `margin-top` del main. |

## Estructura HTML generada

```html
<!-- variant: fixed (por defecto) -->
<div class="c-layout-floating-header">
  <header class="c-layout-floating-header__header"><!-- slot header --></header>
  <main class="c-layout-floating-header__main">
    <!-- slot default -->
    <footer class="c-layout-floating-header__footer"><!-- slot footer --></footer>
  </main>
</div>

<!-- variant: absolute -->
<div class="c-layout-floating-header" data-variant="absolute">
  <header class="c-layout-floating-header__header"><!-- slot header --></header>
  <main class="c-layout-floating-header__main">
    <!-- slot default -->
    <footer class="c-layout-floating-header__footer"><!-- slot footer --></footer>
  </main>
</div>
```

## Ejemplo de uso

```vue
<!-- Header fijo en toda la página -->
<CLayoutFloatingHeader>
  <template #header>
    <MHeaderLogoNav />
  </template>
  <RouterView />
  <template #footer>
    <MFooter />
  </template>
</CLayoutFloatingHeader>

<!-- Header absoluto dentro de una sección -->
<section>
  <CLayoutFloatingHeader variant="absolute">
    <template #header>
      <MHeaderLogoNav />
    </template>
    <HeroContent />
  </CLayoutFloatingHeader>
</section>
```

## Integración con useScrollShrink

Si el header usa `useScrollShrink` para reducir su altura al hacer scroll, sincroniza el custom property del layout con el del módulo de header para que el `margin-top` del main no quede desajustado:

```css
:root {
  --c-layout-floating-header-height: var(--m-header-logo-nav-height);
}
```

El `margin-top` del main corresponde a la altura máxima del header. El espacio extra que queda al reducirse el header pasa a ser espacio visible en el scroll inicial, lo cual es el comportamiento esperado.
