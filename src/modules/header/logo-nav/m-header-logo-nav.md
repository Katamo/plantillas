# m-header-logo-nav

Cabecera horizontal con dos áreas: logo a la izquierda y navegación a la derecha. Soporta variante de fondo oscuro y reducción progresiva de altura al hacer scroll.

## Dependencias Bedrock

Requiere `BWrapper`, `BGridLayout` y `BGridArea` de `@bedrock/core`.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `background` | `String` | `null` | Variante de fondo. Valor válido: `dark` |
| `shrink` | `Boolean` | `false` | Activa la reducción progresiva de altura al hacer scroll |

## Slots

| Slot | Descripción |
|---|---|
| `logo` | Área izquierda para el logotipo |
| `nav` | Área derecha para la navegación |

## Variantes

| `data-background` | Descripción |
|---|---|
| *(sin atributo)* | Fondo transparente |
| `dark` | Fondo oscuro (`surface.dark`) con texto claro |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--m-header-logo-nav-height` | `spacing(20)` — 80px | Alto máximo del header (scroll top 0) |
| `--m-header-logo-nav-height-min` | `spacing(14)` — 56px | Alto mínimo cuando `shrink` está activo |
| `--m-header-logo-nav-shrink-start` | `0px` | Scroll a partir del cual empieza la reducción |
| `--m-header-logo-nav-shrink-distance` | `200px` | Distancia de scroll en la que se completa la reducción |

```css
.mi-pagina {
  --m-header-logo-nav-height: 96px;
  --m-header-logo-nav-height-min: 60px;
  --m-header-logo-nav-shrink-distance: 300px;
}
```

## Ejemplo de uso

```vue
<MHeaderLogoNav background="dark" :shrink="true">
  <template #logo>
    <CBrandLogo src="/logo.svg" alt="Marca" />
  </template>
  <template #nav>
    <nav>...</nav>
  </template>
</MHeaderLogoNav>
```

El header debe estar posicionado como `sticky` o `fixed` en la página para que el efecto sea visible durante el scroll. `c-layout-blog` ya gestiona esto cuando el header se usa como slot `#header`.
