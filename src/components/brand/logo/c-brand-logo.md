# c-brand-logo

Extiende el componente `BLogo` de Bedrock añadiendo control sobre la disposición relativa entre imagen y texto mediante el atributo `data-layout`.

## Dependencias Bedrock

Requiere `BLogo` y `BImage` de `@bedrock/core`. Sus estilos se importan automáticamente desde el SCSS del componente.

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|---|---|---|---|---|
| `src` | `String` | Sí | — | Ruta de la imagen del logo |
| `alt` | `String` | No | `''` | Texto alternativo de la imagen |
| `href` | `String` | No | `null` | Si se proporciona, el logo se convierte en enlace |
| `disabled` | `Boolean` | No | `false` | Deshabilita el enlace si `href` está presente |
| `layout` | `String` | No | `null` | Disposición imagen/texto (ver variantes) |

## Slot

El slot por defecto es el texto o contenido que acompaña al logo. Se ignora automáticamente cuando `layout="image-only"`.

```html
<CBrandLogo src="/logo.svg" alt="Mi marca">
  <span>Mi marca</span>
</CBrandLogo>
```

## Variantes de layout

| `data-layout` | Disposición |
|---|---|
| *(sin atributo)* | Imagen izquierda, texto derecha |
| `text-image` | Texto izquierda, imagen derecha |
| `image-top` | Imagen arriba, texto abajo |
| `text-top` | Texto arriba, imagen abajo |
| `image-only` | Solo imagen (slot no se renderiza) |

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-brand-logo-gap` | `12px` | Espacio entre imagen y texto |

Sobrescribible por contexto sin modificar el componente:

```css
.mi-header {
  --c-brand-logo-gap: 8px;
}
```

## Ejemplos

```html
<!-- Imagen + texto (default) -->
<div class="c-brand-logo">
  <span>Marca</span>
</div>

<!-- Solo imagen -->
<div class="c-brand-logo" data-layout="image-only">...</div>

<!-- Texto a la izquierda -->
<div class="c-brand-logo" data-layout="text-image">...</div>

<!-- Apilado con imagen arriba -->
<div class="c-brand-logo" data-layout="image-top">...</div>
```
