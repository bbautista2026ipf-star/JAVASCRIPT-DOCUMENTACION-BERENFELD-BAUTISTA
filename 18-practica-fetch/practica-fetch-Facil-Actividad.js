// ACTIVIDAD - FETCH (NIVEL FÁCIL)
// Abrir practica-fetch-Facil-Actividad.html en el navegador y revisar la consola (DevTools).
// API usada: https://jsonplaceholder.typicode.com/posts (pública, sin API key).
//
// Consigna:
// 1) Completá `obtenerPosts()` para que:
//      - haga fetch a "https://jsonplaceholder.typicode.com/posts"
//      - use `.then()` encadenado (NO async/await en esta función)
//      - parsee la respuesta con `.json()`
//      - retorne solo los primeros 5 posts (`.slice(0, 5)`)
//      - use `.catch()` para loguear cualquier error de red
//    Pista: recordá que `fetch(...).then(...).then(...)` retorna una Promise;
//    tenés que `return` esa cadena completa desde la función.
//
// 2) Completá `mostrarPosts(posts)` que reciba un array de posts y:
//      - construya el HTML de cada post como `<h3>${titulo}</h3><p>${body}</p>`
//      - inserte TODO el HTML de una sola vez en #contenedor-posts
//        (armá un array/string primero, no uses += dentro de un forEach)
//
// 3) Completá `iniciar()` (ya declarada como async) para que llame a
//    `obtenerPosts()`, espere el resultado con `await`, y se lo pase a
//    `mostrarPosts`.

const contenedor = document.querySelector("#contenedor-posts");

function obtenerPosts() {
  // TODO: paso 1
}

function mostrarPosts(posts) {
  // TODO: paso 2
}

async function iniciar() {
  // TODO: paso 3
}

iniciar();

// --- Verificación manual (abrir en el navegador y revisar consola + pantalla) ---
console.assert(typeof obtenerPosts === "function", "Falta obtenerPosts");
console.assert(typeof mostrarPosts === "function", "Falta mostrarPosts");
console.log("Deberían aparecer 5 posts con título y cuerpo en pantalla.");
