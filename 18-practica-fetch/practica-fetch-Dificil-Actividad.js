// ACTIVIDAD - FETCH (NIVEL DIFÍCIL - SOCRÁTICO)
// Abrir practica-fetch-Dificil-Actividad.html en el navegador.
// API usada: https://jsonplaceholder.typicode.com (endpoints /users/:id y /posts?userId=:id)
//
// ESCENARIO:
// Al ingresar un ID de usuario (1-10) y presionar "Cargar panel", la
// aplicación debe mostrar en #panel: el nombre del usuario y la lista de
// TÍTULOS de sus posts. Los datos del usuario y de sus posts viven en
// endpoints DISTINTOS de la misma API:
//   - https://jsonplaceholder.typicode.com/users/{id}
//   - https://jsonplaceholder.typicode.com/posts?userId={id}
//
// No hay pasos numerados. Las preguntas de abajo son guía de pensamiento.
// Completá los TODO con tu propia lógica.
//
// PREGUNTAS PARA REFLEXIONAR ANTES DE ESCRIBIR CÓDIGO:
//
// - Los datos de usuario y de posts, ¿dependen uno del otro para poder
//   pedirse? En este caso ambos solo necesitan el `id` que ya tenés de
//   entrada. Si podés pedirlos sin esperar el resultado del otro,
//   ¿conviene hacer dos `await fetch()` uno después del otro (secuencial),
//   o `Promise.all([...])` (en paralelo)? ¿Qué diferencia práctica de
//   tiempo de espera notás entre ambas estrategias?
//
// - `fetch` no rechaza la Promise ante un 404. Si el usuario ingresa el
//   ID "999" (que no existe), ¿qué deberías chequear en el objeto
//   `Response` para darte cuenta de que la petición "falló" en términos
//   de negocio aunque la Promise se haya resuelto igual?
//
// - Si el fetch de posts falla pero el de usuario funciona (o viceversa),
//   ¿el panel debería quedar completamente vacío, o debería mostrar lo
//   que sí pudo obtener y avisar del error parcial? Decidí un
//   comportamiento y hacé que el código lo refleje.
//
// - ¿Qué pasa si el usuario hace click en "Cargar panel" varias veces
//   seguidas antes de que responda la primera petición? ¿Cómo evitás que
//   el panel termine mostrando datos de una petición vieja que llegó
//   tarde, pisando a los de una más nueva? (pista: pensá en guardar el
//   último ID solicitado y comparar antes de renderizar)
//
// - ¿Dónde es el lugar correcto para deshabilitar el botón "Cargar panel"
//   mientras la petición está en curso, y dónde para rehabilitarlo,
//   considerando que la petición puede terminar en éxito O en error?
//   (pista: `try / catch / finally`)

const input = document.querySelector("#input-id-usuario");
const boton = document.querySelector("#btn-cargar");
const panel = document.querySelector("#panel");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function obtenerUsuario(id) {
  // TODO: fetch a `${BASE_URL}/users/${id}`, validar response.ok,
  // retornar el usuario parseado o lanzar un Error descriptivo.
}

async function obtenerPostsDeUsuario(id) {
  // TODO: fetch a `${BASE_URL}/posts?userId=${id}`, validar response.ok,
  // retornar el array de posts parseado o lanzar un Error descriptivo.
}

function renderizarPanel(usuario, posts) {
  // TODO: renderizar dentro de #panel el nombre del usuario y una lista
  // <ul> con los títulos de sus posts.
}

// TODO: listener "click" de #boton que:
//   - lea y valide el id del #input-id-usuario
//   - deshabilite el botón mientras carga
//   - dispare las peticiones necesarias (decidiste arriba si en paralelo
//     o secuencial, y qué hacer si una falla)
//   - renderice el resultado o un mensaje de error en #panel
//   - rehabilite el botón al terminar, haya éxito o error

// --- Verificación manual ---
console.log("Probá con ID 1: debe mostrar el nombre y sus posts.");
console.log("Probá con ID 999: debe mostrar un mensaje de error, no romper la app.");
console.log("Hacé doble click rápido en 'Cargar panel' con distintos IDs y confirmá que no se mezclen datos.");
console.assert(typeof obtenerUsuario === "function", "Falta implementar obtenerUsuario");
console.assert(typeof obtenerPostsDeUsuario === "function", "Falta implementar obtenerPostsDeUsuario");
