// ACTIVIDAD - ASINCRONÍA: PROMESAS Y ASYNC/AWAIT (NIVEL MEDIO)
//
// Consigna:
// 1. Completá `pedirRecurso(nombre, ms, debeFallar)`: retorna una Promesa que, tras
//    `ms` milisegundos, resuelve con `"${nombre} listo"` si `debeFallar` es `false`,
//    o rechaza con `"${nombre} falló"` si es `true`.
// 2. Con ENCADENAMIENTO de `.then()` (no uses async/await acá), armá
//    `cargarSecuencia()`: primero pedí el recurso "config" (500ms, sin fallo), y
//    cuando se resuelva, dentro de ESE `.then()` pedí el recurso "datos" (500ms, sin
//    fallo) y retornalo (para encadenar). Agregá un `.catch()` al final que capture
//    cualquier error de la cadena y retorne el string `"Error en secuencia: " + error`.
//    `cargarSecuencia()` debe retornar la promesa completa (para poder testearla).
// 3. ⚠️ TRAMPA: Convertí la misma lógica del punto 2 a `async/await` en
//    `cargarSecuenciaAsync()`. Pensá: si usás DOS `await` seguidos para dos pedidos que
//    NO dependen entre sí, ¿se ejecutan en paralelo o uno espera al otro? ¿Es ese el
//    comportamiento correcto para esta consigna en particular (donde "datos" si depende
//    de tener "config" antes)?
// 4. Completá `cargarEnParalelo()`: pedí "usuarios" (300ms) y "productos" (300ms) EN
//    PARALELO (sin que uno espere al otro) usando `Promise.all`, y retorná un array con
//    ambos resultados. Pensá por qué acá SÍ conviene paralelizar, a diferencia del punto 3.
// 5. Completá `cargarConFallback(nombre, ms)`: intenta `pedirRecurso(nombre, ms, true)`
//    (siempre falla) con `try/catch`; si falla, en el `catch` debe retornar el string
//    `"${nombre} (fallback)"` en lugar de propagar el error.

function pedirRecurso(nombre, ms, debeFallar) {
  // TODO
}

function cargarSecuencia() {
  // TODO (encadenar con .then() y .catch())
}

async function cargarSecuenciaAsync() {
  // TODO (equivalente con async/await)
}

async function cargarEnParalelo() {
  // TODO (Promise.all)
}

async function cargarConFallback(nombre, ms) {
  // TODO (try/catch con fallback)
}

// --- Casos de prueba (asíncronos) ---
cargarSecuencia().then((resultado) => {
  console.assert(resultado === "datos listo", "cargarSecuencia debe resolver con 'datos listo'");
});

cargarSecuenciaAsync().then((resultado) => {
  console.assert(
    resultado === "datos listo",
    "cargarSecuenciaAsync debe dar el mismo resultado que la versión encadenada",
  );
});

cargarEnParalelo().then((resultados) => {
  console.assert(
    Array.isArray(resultados) &&
      resultados[0] === "usuarios listo" &&
      resultados[1] === "productos listo",
    "cargarEnParalelo debe retornar ambos resultados en un array",
  );
});

cargarConFallback("perfil", 200).then((resultado) => {
  console.assert(
    resultado === "perfil (fallback)",
    "cargarConFallback debe manejar el error y retornar el fallback",
  );
});
