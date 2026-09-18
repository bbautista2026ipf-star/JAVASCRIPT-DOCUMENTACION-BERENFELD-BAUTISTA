// ACTIVIDAD - OBJETO DATE (NIVEL MEDIO)
//
// Consigna:
// 1. Completá `calcularEdad(fechaNacimiento, fechaReferencia)` que retorne la edad en años
//    cumplidos, comparando año, mes y día (no alcanza con restar los años: si todavía no
//    pasó el cumpleaños de este año, hay que restar 1).
// 2. Completá `diasEntreFechas(fechaA, fechaB)` que retorne la cantidad de DÍAS COMPLETOS
//    de diferencia entre dos fechas (siempre positiva, sin importar el orden de los
//    argumentos). Pista: restar dos objetos Date da milisegundos.
// 3. ⚠️ TRAMPA: Completá `esFinDeSemana(fecha)` que retorne `true` si el día cae sábado o
//    domingo. Repasá qué valores devuelve `getDay()` (0 = domingo) antes de escribir la
//    condición.
// 4. Completá `agregarDias(fecha, cantidad)` que retorne una NUEVA fecha (sin mutar la
//    fecha recibida) sumándole la cantidad de días indicada. Pensá cómo evitar mutar el
//    parámetro original antes de usar `setDate()`.
// 5. Completá `formatearDDMMAAAA(fecha)` que retorne un string tipo "20/05/2000", con el
//    día y el mes rellenados con cero a la izquierda si son menores a 10 (usá
//    `padStart`), y recordando sumar 1 al mes.

function calcularEdad(fechaNacimiento, fechaReferencia) {
  // TODO
}

function diasEntreFechas(fechaA, fechaB) {
  // TODO
}

function esFinDeSemana(fecha) {
  // TODO
}

function agregarDias(fecha, cantidad) {
  // TODO
}

function formatearDDMMAAAA(fecha) {
  // TODO
}

// --- Casos de prueba ---
console.assert(
  calcularEdad(new Date(2000, 4, 20), new Date(2024, 4, 19)) === 23,
  "un día antes del cumpleaños todavía tiene 23",
);
console.assert(
  calcularEdad(new Date(2000, 4, 20), new Date(2024, 4, 20)) === 24,
  "el día del cumpleaños ya cumple 24",
);

console.assert(
  diasEntreFechas(new Date(2023, 0, 1), new Date(2023, 0, 10)) === 9,
  "diferencia debe ser 9 días",
);
console.assert(
  diasEntreFechas(new Date(2023, 0, 10), new Date(2023, 0, 1)) === 9,
  "el orden de los argumentos no debe afectar el resultado (siempre positivo)",
);

console.assert(
  esFinDeSemana(new Date(2024, 5, 15)) === true,
  "15/06/2024 es sábado",
);
console.assert(
  esFinDeSemana(new Date(2024, 5, 17)) === false,
  "17/06/2024 es lunes",
);

const original = new Date(2024, 0, 30);
const nueva = agregarDias(original, 5);
console.assert(nueva.getDate() === 4 && nueva.getMonth() === 1, "debe avanzar a 4/feb");
console.assert(original.getDate() === 30, "la fecha original NO debe mutarse");

console.assert(
  formatearDDMMAAAA(new Date(2000, 4, 5)) === "05/05/2000",
  "debe rellenar con cero a la izquierda",
);
