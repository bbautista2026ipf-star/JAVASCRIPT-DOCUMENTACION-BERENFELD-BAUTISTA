# Módulo 13: APIs del Navegador y Asincronía

---

## 1. Índice del módulo

| Archivo | Contenido |
| --- | --- |
| [`01-promesas-asincronia-js.md`](./01-promesas-asincronia-js.md) | Teoría completa: síncrono vs. asíncrono, callbacks, Promesas, async/await, ejercicios y recursos. |
| [`02-apis-navegador-ejemplos.md`](./02-apis-navegador-ejemplos.md) | Ejemplos de APIs del navegador: DOM, Eventos, `localStorage`, Geolocalización, Cámara. |
| `03-apis-navegador-ejemplos.html` / `04-fetch-jsonplaceholder-todos.html` | Demos ejecutables en el navegador. |
| `05` a `10-ejercicio*.js` | Ejercicios resueltos de Promesas, async/await y `fetch`. |
| `asincronia-Facil/Medio/Dificil-Actividad.js` | Actividades nuevas de práctica (ver más abajo). |

Este README es un **resumen orientador**; el detalle teórico y los ejemplos extendidos están en los dos `.md` listados arriba.

---

## 2. Síncrono vs. Asíncrono

- **Síncrono:** el código se ejecuta línea por línea, en orden, y cada instrucción **bloquea** a la siguiente hasta terminar.
- **Asíncrono:** permite lanzar una tarea que toma tiempo (una petición de red, un timer) sin detener el resto del programa. El motor de JavaScript sigue ejecutando otras líneas mientras esa tarea se resuelve en segundo plano, gracias al **Event Loop**.

---

## 3. Callbacks

Un **callback** es una función que se pasa como argumento a otra función, para ser ejecutada cuando una tarea (a menudo asíncrona) se completa.

```javascript
setTimeout(() => console.log("Se ejecuta después"), 1000);
```

**Problema del "callback hell":** cuando varias operaciones asíncronas dependen unas de otras, anidar callbacks genera código profundamente indentado, difícil de leer y de mantener.

---

## 4. Promesas

Una **Promesa** (`Promise`) es un objeto que representa el resultado eventual (exitoso o fallido) de una operación asíncrona. Ver detalle y ejemplos en `01-promesas-asincronia-js.md`.

- **Estados:** `pending` (pendiente) → `fulfilled` (cumplida) o `rejected` (rechazada). Una vez resuelta, el estado es definitivo.
- **`resolve` / `reject`:** funciones que el ejecutor de la promesa invoca para pasar al estado `fulfilled` o `rejected`.
- **`.then()`:** registra el callback a ejecutar cuando la promesa se cumple.
- **`.catch()`:** registra el callback a ejecutar cuando la promesa es rechazada.

---

## 5. Async/Await

**Azúcar sintáctico** sobre las Promesas: permite escribir código asíncrono con apariencia síncrona, más legible que encadenar `.then()`.

- `await` solo puede usarse dentro de una función marcada `async`, y pausa la ejecución de esa función hasta que la promesa se resuelva.
- El manejo de errores se hace con `try/catch`, en lugar de `.catch()`.

```javascript
async function ejemplo() {
  try {
    const resultado = await promesa;
  } catch (error) {
    console.error(error);
  }
}
```

---

## 6. Consumo de APIs con `fetch`

`fetch(url)` retorna una Promesa que se resuelve con un objeto `Response`. Para obtener el cuerpo como JSON hay que esperar un segundo paso asíncrono con `.json()`.

```javascript
async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const datos = await respuesta.json();
    console.log(datos.title);
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}
```

Ejemplos completos en `04-fetch-jsonplaceholder-todos.html` y `07-ejercicio3.js`.
