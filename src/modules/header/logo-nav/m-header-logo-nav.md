# m-header-logo-nav

Cabecera horizontal con dos áreas: logo a la izquierda y navegación a la derecha. Soporta variante de fondo oscuro mediante `data-background`.

## Dependencias Bedrock

Requiere `BWrapper`, `BGridLayout` y `BGridArea` de `@bedrock/core`.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `background` | `String` | `null` | Variante de fondo. Valor válido: `dark` |

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
| `--m-header-logo-nav-height` | `spacing(20)` — 80px | Alto del header |

```css
.mi-pagina {
  --m-header-logo-nav-height: 64px;
}
```

## Ejemplo de uso

```vue
<MHeaderLogoNav background="dark">
  <template #logo>
    <CBrandLogo src="/logo.svg" alt="Marca" />
  </template>
  <template #nav>
    <nav>...</nav>
  </template>
</MHeaderLogoNav>
```
