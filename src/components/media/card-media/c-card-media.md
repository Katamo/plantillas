# c-card-media

Card de contenido con imagen: cover + título + subtítulo + metadatos + footer. Es la pieza base de cualquier listado de media (discos, artículos, fichas). Agnóstica de dominio: el proyecto consumidor decide qué va en cada slot.

Renderiza como `<article>`, o como `<a>` cuando se le pasa `href` (toda la card es clicable).

## Dependencias Bedrock

Requiere `BImage` de `@bedrock/core` (solo si se usa `coverSrc`; con el slot `cover` no se renderiza). Sus estilos se importan desde el SCSS del componente.

## Typesets requeridos

El proyecto consumidor debe definir en su `bedrock-config.scss` los typesets **`h4`** (título), **`label`** (subtítulo) y **`caption`** (metadatos). También usa los grupos de color `surface` (base, alt), `line`, `text` (base, muted) y `primary`.

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|---|---|---|---|---|
| `href` | `String` | No | `null` | Si se proporciona, la card entera es un enlace |
| `coverSrc` | `String` | No | `null` | Imagen del cover (vía `BImage`, `object-fit: cover`) |
| `coverAlt` | `String` | No | `''` | Texto alternativo del cover |
| `layout` | `String` | No | `null` | `horizontal` para variante en fila |
| `size` | `String` | No | `null` | `s` / `l` (el tamaño medio es el default) |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Título de la card |
| `subtitle` | Línea secundaria (autor, artista…) |
| `meta-start` | Metadato izquierdo (se pinta en `color(primary)`) |
| `meta-end` | Metadato derecho (muted) |
| `footer` | Fila final (chips, acciones…) |
| `cover` | Sustituye el cover por defecto (placeholder o `BImage`) |
| `tag` | Etiqueta superpuesta en la esquina inferior-izquierda del cover |

Sin `coverSrc` ni slot `cover`, el cover se pinta como placeholder plano (`color(surface, alt)`).

## Variantes de atributo

| Atributo | Valores | Efecto |
|---|---|---|
| `data-layout` | `horizontal` | Cover cuadrado a la izquierda (`--c-card-media-cover-size`), body al lado. Para listas compactas |
| `data-size` | `s` / `l` | Ajusta padding y gap del body |

Hover (dispositivos no táctiles): el borde pasa a `color(primary)`.

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-card-media-cover-ratio` | `1` | Aspect-ratio del cover en layout vertical |
| `--c-card-media-cover-size` | `spacing(12)` | Lado del cover cuadrado en layout horizontal |
| `--c-card-media-padding` | `spacing(3)` | Padding del body |
| `--c-card-media-gap` | `spacing(1)` | Gap entre líneas del body |

## Ejemplo

```html
<CCardMedia href="/release/anxious" cover-src="/cover.jpg" cover-alt="Anxious">
  Anxious
  <template #subtitle>RØDHÅD</template>
  <template #meta-start>DYSTOPIAN015</template>
  <template #meta-end>15.03.2024</template>
  <template #tag><span class="mi-tag">PRE-ORDER</span></template>
  <template #footer><span class="mi-chip">RAW TECHNO</span></template>
</CCardMedia>
```

```html
<!-- Fila compacta (próximamente, resultados de búsqueda) -->
<CCardMedia layout="horizontal" size="s" href="/release/decade">
  Decade
  <template #subtitle>RØDHÅD</template>
  <template #meta-end>12.07.2026</template>
</CCardMedia>
```
