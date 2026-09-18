// ACTIVIDAD - REFUERZO DE FETCH (NIVEL DIFÍCIL - SOCRÁTICO)
//
// Escenario:
// Necesitás construir un mini "buscador de personajes" reutilizable que
// pueda consultar DISTINTAS APIs (Dragon Ball, Harry Potter, Pokémon...)
// sin duplicar la lógica de fetch, manejo de errores ni renderizado.
// Pensá esto como si tuvieras que integrarlo en el `script.js` de este
// módulo, donde ya existe un patrón similar para Dragon Ball.
//
// No hay pasos numerados. Las preguntas comentadas te guían; completá
// los TODO con tu propia solución.

// ── Parte 1: función de fetch genérica ──────────────────────────────────
// Preguntas para pensar:
//   - ¿Qué tienen en común TODAS las llamadas a fetch que ya viste en
//     script.js (validación, parseo, manejo de error)?
//   - Si mañana necesitás consultar una cuarta API, ¿qué tendrías que
//     cambiar de esta función? (idealmente: nada, o casi nada)
//   - ¿Qué debería pasar si `response.ok` es false? ¿Quién debería
//     decidir cómo mostrar ese error: esta función, o quien la llama?
async function fetchSeguro(url) {
  // TODO: debe retornar { ok: true, data } o { ok: false, error: mensaje }
  // (sin lanzar excepciones hacia afuera: quien llama decide qué hacer
  // con el resultado)
}

// ── Parte 2: adaptar datos de distintas fuentes a un formato común ──────
// Preguntas para pensar:
//   - Dragon Ball API devuelve { name, image, race, gender }.
//     Harry Potter API devuelve { name, image, house }.
//     ¿Qué campos mínimos necesita TU aplicación para mostrar una card?
//   - ¿Cómo evitarías escribir un `if (fuente === "dbz") ... else ...`
//     gigante cada vez que agregás una fuente nueva? (pista: pensá en
//     recibir una función "adaptadora" como parámetro, no en if/else)
function normalizarPersonaje(personajeCrudo, adaptador) {
  // TODO: debe aplicar "adaptador" (una función) sobre "personajeCrudo"
  // y retornar un objeto con forma { nombre, imagen, detalle }
}

// ── Parte 3: orquestación con DOM ────────────────────────────────────────
// Preguntas para pensar:
//   - Si esta función tuviera que correr en un navegador real, ¿qué
//     partes de tu código de arriba podrías reusar TAL CUAL?
//   - ¿Por qué conviene separar "traer y transformar datos" de
//     "pintar el DOM"? ¿Qué ganás al testear cada parte por separado?
//   - ¿Cómo manejarías el caso en que `fetchSeguro` devuelva
//     `{ ok: false }` en este punto de la orquestación?
async function buscarYNormalizarPersonajes(url, adaptador) {
  // TODO: usa fetchSeguro(url); si ok, mapea cada item crudo con
  // normalizarPersonaje(item, adaptador) y retorna el array resultante.
  // Si no ok, retorna un array vacío y loguea el error.
}

// --- Verificación manual (adaptador de ejemplo provisto) ---
const adaptadorDragonBall = (p) => ({
  nombre: p.name,
  imagen: p.image,
  detalle: `${p.race} - ${p.gender}`,
});

// buscarYNormalizarPersonajes(
//   "https://dragonball-api.com/api/characters",
//   adaptadorDragonBall,
// ).then((personajes) => console.log(personajes));

console.log("Actividad Difícil - Refuerzo Fetch: descomentá la verificación y contrastá el resultado con las preguntas guía.");
