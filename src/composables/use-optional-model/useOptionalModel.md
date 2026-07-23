# useOptionalModel

Estado "opcionalmente controlado" para componentes con `v-model` opcional: si el consumidor pasa la prop, el componente funciona en modo controlado (la prop manda y cada cambio se emite como `update:<name>`); si no la pasa, el componente mantiene su propio estado interno.

## API

```js
const model = useOptionalModel(props, name, emit, initial)
```

| Parámetro | Tipo | Descripción |
|---|---|---|
| `props` | `Object` | Props reactivas del componente |
| `name` | `String` | Nombre de la prop / model (ej. `'sortKey'`) |
| `emit` | `Function` | Función `emit` del componente |
| `initial` | `*` | Valor inicial del estado interno en modo no controlado |

Devuelve un `WritableComputedRef`: leerlo da la prop (si está pasada) o el estado interno; escribirlo actualiza el interno y emite `update:<name>`.

## Requisito

La prop debe declararse con `default: undefined` para poder distinguir "no pasada" de cualquier valor legítimo (incluido `null`):

```js
defineProps({
  sortKey: { type: String, default: undefined },
})
```

## Uso

```js
import { useOptionalModel } from 'plantillas/composables/use-optional-model'

const props = defineProps({
  selectedKeys: { type: Array, default: undefined },
})
const emit = defineEmits(['update:selectedKeys'])

const selected = useOptionalModel(props, 'selectedKeys', emit, [])

// Lectura y escritura transparentes en ambos modos
selected.value = [...selected.value, nuevaClave]
```

El consumidor puede entonces elegir:

```html
<!-- Controlado -->
<CDataTable v-model:selected-keys="claves" ... />

<!-- No controlado: el componente gestiona su propio estado -->
<CDataTable ... />
```
