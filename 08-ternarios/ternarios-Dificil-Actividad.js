// ACTIVIDAD - OPERADOR TERNARIO (NIVEL DIFÍCIL)
//
// Escenario:
// Un cine tiene una política de precios de entrada según edad y día:
//   - Los MIÉRCOLES todas las entradas cuestan $500 (día del espectador).
//   - Cualquier otro día:
//       * Menores de 12 años: $600
//       * Entre 12 y 59 años (inclusive): $1200
//       * 60 años o más: $700
//
// Antes de escribir código, respondé (como comentario) estas preguntas:
//   1) ¿Cuántas condiciones independientes intervienen en el problema?
//      ¿Cuál conviene evaluar primero para simplificar el resto?
//   2) ¿Es posible resolver esto con un único operador ternario anidado,
//      o convendría dividirlo en dos pasos (uno para el día, otro para
//      la edad)? ¿Por qué?
//   3) ¿Qué pasa en los valores límite (12, 59, 60 años)? Definí vos
//      mismo el criterio de inclusión/exclusión ANTES de codear.
//
// Tu tarea:
// Implementar `calcularPrecioEntrada(edad, dia)` donde `dia` es un string
// como "lunes", "martes", "miércoles", etc. (todo en minúsculas).
// Debe usar operador(es) ternario(s) — no if/else.
//
// Pensá el algoritmo en papel/comentario antes de tocar código.

// TODO: escribí acá tu razonamiento como comentario antes de codear

function calcularPrecioEntrada(edad, dia) {
  // TODO: implementar usando ternario(s)
}

// --- Casos de prueba (no modificar) ---
console.assert(calcularPrecioEntrada(25, "miércoles") === 500, "Test 1 falló (miércoles siempre 500)");
console.assert(calcularPrecioEntrada(8, "miércoles") === 500, "Test 2 falló (miércoles siempre 500)");
console.assert(calcularPrecioEntrada(10, "lunes") === 600, "Test 3 falló (menor de 12)");
console.assert(calcularPrecioEntrada(12, "lunes") === 1200, "Test 4 falló (límite 12 años)");
console.assert(calcularPrecioEntrada(59, "viernes") === 1200, "Test 5 falló (límite 59 años)");
console.assert(calcularPrecioEntrada(60, "viernes") === 700, "Test 6 falló (límite 60 años)");
console.assert(calcularPrecioEntrada(80, "domingo") === 700, "Test 7 falló (adulto mayor)");

console.log("Actividad Difícil - Ternarios: si no viste errores arriba, ¡todo OK!");
