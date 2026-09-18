// ACTIVIDAD - OPERADOR TERNARIO (NIVEL FÁCIL)
//
// Consigna:
// 1) Completá la función `esMayorDeEdad(edad)` que retorne el string
//    "Mayor de edad" si `edad >= 18`, o "Menor de edad" en caso contrario.
//    Usá OBLIGATORIAMENTE el operador ternario (no if/else).
//
// 2) Completá la función `signoDeNumero(numero)` que retorne "Positivo"
//    si el número es mayor a 0, o "No positivo" en caso contrario.
//    Usá el operador ternario.
//
// 3) Completá la función `mensajeStock(cantidad)` que retorne
//    `"Hay ${cantidad} unidades"` si cantidad es mayor a 0,
//    o "Sin stock" si es 0. Usá el operador ternario.

function esMayorDeEdad(edad) {
  // TODO: reemplazar por el operador ternario
}

function signoDeNumero(numero) {
  // TODO: reemplazar por el operador ternario
}

function mensajeStock(cantidad) {
  // TODO: reemplazar por el operador ternario
}

// --- Casos de prueba ---
console.assert(esMayorDeEdad(20) === "Mayor de edad", "Test 1 falló");
console.assert(esMayorDeEdad(15) === "Menor de edad", "Test 2 falló");
console.assert(esMayorDeEdad(18) === "Mayor de edad", "Test 3 falló");

console.assert(signoDeNumero(5) === "Positivo", "Test 4 falló");
console.assert(signoDeNumero(-3) === "No positivo", "Test 5 falló");
console.assert(signoDeNumero(0) === "No positivo", "Test 6 falló");

console.assert(mensajeStock(4) === "Hay 4 unidades", "Test 7 falló");
console.assert(mensajeStock(0) === "Sin stock", "Test 8 falló");

console.log("Actividad Fácil - Ternarios: si no viste errores arriba, ¡todo OK!");
