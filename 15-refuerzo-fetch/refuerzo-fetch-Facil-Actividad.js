// ACTIVIDAD - REFUERZO DE FETCH (NIVEL FÁCIL)
//
// Consigna:
// Pegá este código en la consola del navegador (F12 > Console) en
// cualquier pestaña, o ejecutalo con `node refuerzo-fetch-Facil-Actividad.js`
// (Node 18+).
//
// 1) Completá `obtenerPokemon(nombre)`: usando `fetch` y `async/await`,
//    debe pedir datos a `https://pokeapi.co/api/v2/pokemon/${nombre}`,
//    verificar `response.ok` (si falla, lanzar un Error con el status),
//    parsear el JSON con `response.json()` y RETORNAR el objeto completo.
//
// 2) Completá `mostrarNombreYPeso(nombre)`: debe llamar a
//    `obtenerPokemon(nombre)`, y luego hacer `console.log` con el mensaje
//    `"<nombre>: peso <weight>"` usando los campos `name` y `weight` del
//    objeto recibido. Envolvé la llamada en `try/catch` y en el catch
//    hacé `console.log("Error:", error.message)`.
//
// Verificación: llamá a `mostrarNombreYPeso("pikachu")` y confirmá en
// consola que se imprime "pikachu: peso 60". Probá también con un nombre
// inexistente (ej. "noexiste123") y confirmá que se imprime el mensaje
// de error sin que la página/script se rompa.

async function obtenerPokemon(nombre) {
  // TODO: fetch + validación de response.ok + parseo JSON
}

async function mostrarNombreYPeso(nombre) {
  // TODO: try/catch alrededor de obtenerPokemon
}

// --- Verificación manual (descomentar para probar) ---
// mostrarNombreYPeso("pikachu");
// mostrarNombreYPeso("noexiste123");

console.log("Actividad Fácil - Refuerzo Fetch: descomentá las líneas de verificación y revisá la consola.");
