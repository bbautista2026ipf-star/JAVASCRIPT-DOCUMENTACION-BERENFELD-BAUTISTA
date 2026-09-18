// ACTIVIDAD - REFUERZO DE FUNCIONES (NIVEL DIFÍCIL - SOCRÁTICO)
//
// Escenario:
// Un sistema de facturación necesita calcular el precio final de un carrito
// de compras. Cada producto tiene un precio y una cantidad. Además, existen
// descuentos por "escalones" de cantidad total: cuantos más productos se
// compran, mayor el descuento acumulado sobre el próximo tramo.
//
// No hay pasos numerados. Guiate por las preguntas comentadas junto a cada
// TODO para llegar a tu propia solución. El objetivo es que razones la
// lógica y la sintaxis, no que sigas una receta.

// ── Parte 1: recursividad ──────────────────────────────────────────────
// Preguntas para pensar antes de escribir código:
//   - ¿Cuál es el caso base de una suma recursiva sobre un array?
//     (pista: ¿qué debería devolver la suma de un array vacío?)
//   - ¿Cómo se "acerca" cada llamada recursiva al caso base?
//   - ¿Qué pasaría si el caso base no existiera? Pensá en la Call Stack.
function sumarPreciosRecursivo(carrito) {
  // carrito: [{ precio: number, cantidad: number }, ...]
  // Debe retornar la suma de (precio * cantidad) de TODOS los productos,
  // pero resuelto con RECURSIVIDAD (sin usar reduce, for, ni while).
  // TODO
}

// ── Parte 2: closures ───────────────────────────────────────────────────
// Preguntas para pensar:
//   - ¿Qué variable necesita "recordarse" entre llamadas sucesivas?
//   - Si dos carritos distintos usan la misma fábrica de descuentos,
//     ¿deberían compartir el mismo estado interno? ¿Por qué sí o no?
//   - ¿Qué diferencia hay entre declarar el estado adentro o afuera
//     de la función que se retorna?
function crearAplicadorDeDescuento(porcentaje) {
  // Debe retornar una función `aplicar(monto)` que descuente `porcentaje`
  // sobre `monto`, pero cada vez que se invoque, el porcentaje real
  // aplicado debe incrementarse en 1 punto adicional respecto a la
  // llamada anterior (empezando en `porcentaje`).
  // Ejemplo: crearAplicadorDeDescuento(10) -> aplicar(100) usa 10% -> 90
  //                                            aplicar(100) usa 11% -> 89
  // TODO
}

// ── Parte 3: funciones de orden superior ────────────────────────────────
// Preguntas para pensar:
//   - ¿Qué función nativa de arrays te permite "hacer algo" con cada
//     elemento sin escribir el bucle manualmente?
//   - ¿Cómo le pasarías una función distinta según el tipo de reporte
//     que se necesite generar (nombres, totales, etc.)?
//   - ¿Qué ventaja tiene recibir la función de formateo como parámetro
//     en vez de hardcodearla adentro?
function generarReporte(carrito, formateador) {
  // Debe aplicar `formateador` a cada producto del carrito y retornar
  // el array de strings resultante. `formateador` es una función que
  // recibe un producto y retorna un string.
  // TODO
}

// ── Parte 4: integración ────────────────────────────────────────────────
// Pregunta final: ¿cómo combinarías las tres funciones anteriores para
// calcular el total de un carrito, aplicarle un descuento creciente y
// generar un reporte legible, todo en una sola función `procesarCompra`?
function procesarCompra(carrito, porcentajeDescuentoInicial) {
  // TODO: combiná sumarPreciosRecursivo, crearAplicadorDeDescuento y
  // generarReporte para retornar un objeto:
  // { total: number, reporte: string[] }
}

// --- Casos de prueba ---
const carritoTest = [
  { nombre: "Mouse", precio: 100, cantidad: 2 },
  { nombre: "Teclado", precio: 300, cantidad: 1 },
];

console.assert(sumarPreciosRecursivo(carritoTest) === 500, "Test 1 falló");
console.assert(sumarPreciosRecursivo([]) === 0, "Test 2 falló (caso base)");

const descontar = crearAplicadorDeDescuento(10);
console.assert(descontar(100) === 90, "Test 3 falló (primer descuento 10%)");
console.assert(descontar(100) === 89, "Test 4 falló (segundo descuento 11%)");

const reporte = generarReporte(carritoTest, (p) => `${p.nombre}: $${p.precio * p.cantidad}`);
console.assert(
  JSON.stringify(reporte) === JSON.stringify(["Mouse: $200", "Teclado: $300"]),
  "Test 5 falló",
);

console.log("Actividad Difícil - Refuerzo Funciones: revisá los asserts. Si algo falla, releé las preguntas guía de esa sección.");
