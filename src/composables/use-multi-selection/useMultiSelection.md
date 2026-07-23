# useMultiSelection

Selección múltiple sobre una lista ordenada de claves, con los modificadores de teclado habituales de los exploradores de archivos. Lógica pura sin DOM: sirve para tablas, listas, galerías o árboles.

- **clic** → selección única
- **Ctrl/Cmd + clic** → alterna el elemento sin tocar el resto
- **Shift + clic** → añade el rango entre el ancla (último clic) y el elemento pulsado

## API

```js
const selection = useMultiSelection(orderedKeys, selectedKeys)
```

| Parámetro | Tipo | Descripción |
|---|---|---|
| `orderedKeys` | `Ref<Array>` | Claves en el orden en que se presentan (los rangos con Shift se calculan sobre este orden) |
| `selectedKeys` | `Ref<Array>` | Ref escribible con las claves seleccionadas (puede ser un modelo de `useOptionalModel`) |

Devuelve:

| Miembro | Tipo | Descripción |
|---|---|---|
| `isSelected(key)` | `Function` | Si la clave está seleccionada |
| `handleClick(key, event)` | `Function` | Gestiona un clic leyendo `shiftKey` / `ctrlKey` / `metaKey` del evento |
| `toggle(key)` | `Function` | Alterna un elemento sin modificadores (checkboxes) |
| `selectOnly(key)` | `Function` | Deja como única selección el elemento indicado |
| `selectAll()` / `clear()` | `Function` | Selecciona todo / vacía la selección |
| `allSelected` | `ComputedRef<Boolean>` | Todas las claves están seleccionadas |
| `someSelected` | `ComputedRef<Boolean>` | Hay selección pero no es completa (checkbox tri-estado) |
| `anchor` | `Ref` | Clave ancla del último clic |

## Uso

```js
import { computed } from 'vue'
import { useMultiSelection } from 'plantillas/composables/use-multi-selection'

const orderedKeys = computed(() => filas.value.map((f) => f.id))
const selectedKeys = ref([])

const { isSelected, handleClick } = useMultiSelection(orderedKeys, selectedKeys)
```

```html
<li
  v-for="fila in filas"
  :data-selected="isSelected(fila.id) || undefined"
  @click="handleClick(fila.id, $event)"
>
```
