// ACTIVIDAD - REFUERZO DE FETCH (NIVEL MEDIO)
//
// Consigna:
// Pegá este código en la consola del navegador o ejecutalo con Node 18+.
//
// 1) Completá `pedirJSON(url)`: función genérica y REUTILIZABLE que haga
//    fetch a `url`, valide `response.ok` (si es falso, lanzar
//    `new Error(\`Error HTTP \${response.status} en \${url}\`)`) y retorne
//    el JSON parseado. Todo el módulo de abajo debe reusar esta función
//    en vez de llamar a `fetch` directamente.
//
// 2) Completá `obtenerEspecieYEvoluciones(nombrePokemon)`: debe encadenar
//    DOS peticiones usando `pedirJSON`:
//      a) pedir `https://pokeapi.co/api/v2/pokemon-species/${nombrePokemon}`
//      b) tomar `data.evolution_chain.url` de la respuesta anterior y
//         pedir ESA url para obtener la cadena evolutiva.
//    Debe retornar el resultado del segundo pedido.
//    Envolvé todo en try/catch: si algo falla en cualquiera de las dos
//    peticiones, debe loguearse UN SOLO mensaje de error claro indicando
//    en qué pokemon falló, y la función debe retornar `null`.
//
// 3) Completá `obtenerVariosPokemon(nombres)`: dado un array de nombres,
//    debe pedir los datos de TODOS en paralelo (pista: `Promise.all` +
//    `pedirJSON`) y retornar un array con los nombres (`data.name`) de
//    los que se resolvieron correctamente. Si alguno falla, no debe
//    interrumpir a los demás (pista: `Promise.allSettled` en vez de
//    `Promise.all`, o manejar el error individualmente dentro del map).

async function pedirJSON(url) {
  // TODO
}

async function obtenerEspecieYEvoluciones(nombrePokemon) {
  // TODO
}

async function obtenerVariosPokemon(nombres) {
  // TODO
}

// --- Verificación manual (descomentar para probar) ---
// obtenerEspecieYEvoluciones("eevee").then((data) => console.log(data));
// obtenerEspecieYEvoluciones("noexiste123").then((data) => console.log("Resultado:", data));
// obtenerVariosPokemon(["pikachu", "charmander", "noexiste123"]).then((data) =>
//   console.log("Nombres obtenidos:", data),
// );

console.log("Actividad Media - Refuerzo Fetch: descomentá las líneas de verificación y revisá la consola.");
