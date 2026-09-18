// ACTIVIDAD - OBJETO DATE (NIVEL FÁCIL)
//
// Consigna:
// 1. Creá una fecha `cumpleanios` correspondiente al 20 de mayo de 2000.
//    ⚠️ Recordá: el mes en `new Date(año, mes, dia)` es 0-indexado (mayo = 4).
// 2. Extraé el año en `anio` usando `getFullYear()`.
// 3. Extraé el día del mes en `dia` usando `getDate()`.
// 4. Extraé el número de mes "humano" (1-12, no 0-11) en `mesHumano`, sumando 1
//    al resultado de `getMonth()`.
// 5. Creá una fecha `fechaDesdeTexto` a partir del string ISO "2025-01-01".
// 6. Usá `getTime()` sobre `cumpleanios` para guardar su timestamp en `timestampMs`.
// 7. Completá la función `esBisiesto(anio)` que reciba un año y retorne `true` si es
//    bisiesto. Pista: un año es bisiesto si es divisible por 4, excepto los divisibles
//    por 100 que no sean también divisibles por 400.

// 1. new Date(año, mes, día)
let cumpleanios; // TODO

// 2. getFullYear()
let anio; // TODO

// 3. getDate()
let dia; // TODO

// 4. mes humano (getMonth() + 1)
let mesHumano; // TODO

// 5. desde string ISO
let fechaDesdeTexto; // TODO

// 6. getTime()
let timestampMs; // TODO

// 7. función esBisiesto
function esBisiesto(anio) {
  // TODO
}

// --- Casos de prueba ---
console.assert(anio === 2000, "anio debe ser 2000");
console.assert(dia === 20, "dia debe ser 20");
console.assert(mesHumano === 5, "mesHumano debe ser 5 (mayo)");
console.assert(cumpleanios.getMonth() === 4, "getMonth() debe ser 4 (0-indexado)");
console.assert(
  fechaDesdeTexto.getFullYear() === 2025,
  "fechaDesdeTexto debe ser del año 2025",
);
console.assert(typeof timestampMs === "number", "timestampMs debe ser un número");
console.assert(esBisiesto(2000) === true, "2000 es bisiesto (divisible por 400)");
console.assert(esBisiesto(1900) === false, "1900 NO es bisiesto (div. por 100, no por 400)");
console.assert(esBisiesto(2024) === true, "2024 es bisiesto (divisible por 4)");
console.assert(esBisiesto(2023) === false, "2023 NO es bisiesto");
