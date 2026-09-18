# Módulo 15 — Refuerzo de Fetch y Consumo de APIs

> Proyecto de referencia en este módulo: `index.html` + `script.js` (galería de personajes con Dragon Ball API / Harry Potter API).

## 1. `fetch()` y Promesas

`fetch()` retorna una **Promise** que se resuelve con un objeto `Response`. Esa promesa **no rechaza** por códigos de error HTTP (404, 500); sólo rechaza ante fallos de red. Por eso siempre hay que chequear `response.ok`.

```js
fetch("https://api.ejemplo.com/datos")
  .then((response) => {
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## 2. `async`/`await`

Azúcar sintáctico sobre Promesas que permite escribir código asíncrono con apariencia síncrona. Requiere `try/catch` para manejar errores (equivalente a `.catch`).

```js
async function obtenerDatos(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falló la petición:", error);
  }
}
```

## 3. Parseo de JSON

`response.json()` retorna **otra Promise** (el body se lee de forma asíncrona), por eso lleva su propio `await`/`.then`.

## 4. Manipulación del DOM con datos de API

Flujo típico: pedir datos → recorrerlos (`forEach`/`map`) → construir HTML (template strings) → inyectarlo en el DOM.

```js
datos.forEach((item) => {
  contenedor.innerHTML += `<div class="card"><h5>${item.nombre}</h5></div>`;
});
```

⚠️ Usar `innerHTML +=` repetidamente en un loop es ineficiente (re-parsea todo el HTML en cada iteración). Alternativa recomendada: acumular en un string o `DocumentFragment` y asignar una sola vez al final.

## 5. Event Delegation con datos dinámicos

Cuando se generan elementos dinámicamente (ej. botones "Ver más" por cada card), conviene delegar el evento al contenedor padre en vez de agregar un listener por cada elemento nuevo:

```js
contenedorPadre.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-ver-detalles")) {
    const id = e.target.closest(".card-wrapper").dataset.id;
    verDetalles(id);
  }
});
```

## 6. Manejo de errores robusto

- Validar `response.ok` antes de parsear.
- Usar `try/catch` alrededor de todo bloque `await`.
- Distinguir errores de red (`fetch` rechaza) de errores HTTP (`response.ok === false`).
- Nunca dejar un `catch` vacío: como mínimo, loguear el error.

## 7. Actividades

| Archivo | Nivel | Foco |
|---|---|---|
| `refuerzo-fetch-Facil-Actividad.js` | Fácil | `fetch` + `async/await` básico, parseo JSON |
| `refuerzo-fetch-Medio-Actividad.js` | Medio | Manejo de errores, encadenar peticiones |
| `refuerzo-fetch-Dificil-Actividad.js` | Difícil (socrático) | Diseño de función reutilizable + DOM |

> Estas actividades son archivos `.js` standalone: se ejecutan pegando el código en la consola del navegador (en cualquier página) o con Node (v18+, que incluye `fetch` nativo). No usan `console.assert` porque dependen de la red: la verificación es por `console.log` y lectura de la salida.

## 8. Recursos recomendados

- [MDN – Using Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN – async function](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [DragonBall API](https://dragonball-api.com/) · [HP API](https://hp-api.onrender.com/)
