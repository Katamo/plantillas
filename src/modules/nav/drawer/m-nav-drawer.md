# m-nav-drawer

Drawer de navegación móvil con backdrop. Gestiona las transiciones de entrada/salida (fade para el backdrop, slide desde la derecha para el panel). El estado `open` es controlado por el padre.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `open` | `Boolean` | `false` | Muestra u oculta el drawer y el backdrop |

## Eventos

| Evento | Descripción |
|---|---|
| `close` | Emitido al pulsar el botón de cierre o al hacer click en el backdrop |

## Slot

El slot default es el contenido del drawer — habitualmente una lista de enlaces de navegación.

```html
<MNavDrawer :open="isMenuOpen" @close="isMenuOpen = false">
  <a href="/" class="link">Inicio</a>
  <a href="/about" class="link">Sobre mí</a>
</MNavDrawer>
```

El módulo no asume ningún framework de routing. Los enlaces pueden ser `<a>`, `<NuxtLink>`, `<RouterLink>` o cualquier elemento.

## Gestión del estado

El módulo es completamente controlado — no gestiona el estado internamente. El consumidor decide cuándo abrir y cerrar:

```javascript
const isMenuOpen = ref(false)
const route = useRoute()

// Cerrar al navegar
watch(route, () => { isMenuOpen.value = false })
```

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--m-nav-drawer-width` | `spacing(60)` | Ancho del panel |
| `--m-nav-drawer-background` | `color(surface, alt)` | Color de fondo del panel |
| `--m-nav-drawer-padding` | `spacing(6)` | Padding interior del panel |
| `--m-nav-drawer-backdrop-color` | `rgba(0,0,0,0.3)` | Color del backdrop |

## Dependencias

- `CCloseButton` — botón de cierre incluido automáticamente dentro del drawer
