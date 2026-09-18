// ================================================================
// ACTIVIDAD: STRINGS Y TEMPLATE LITERALS — NIVEL FÁCIL
// ================================================================
// Consigna:
// 1. Completá `saludar(nombre)`: debe devolver `"Hola, {nombre}!"`
//    usando template literals (backticks e interpolación ${}), NO
//    concatenación con +.
// 2. Completá `describirPersona(nombre, edad)`: debe devolver
//    `"{nombre} tiene {edad} años."` usando template literals.
// 3. Completá `calcularYMostrar(a, b)`: debe devolver
//    `"La suma de {a} y {b} es {resultado}."` interpolando DIRECTAMENTE
//    la operación `a + b` dentro del `${}` (sin variable intermedia).
// 4. Completá `tarjetaPresentacion(nombre, profesion)` usando un
//    template literal MULTILÍNEA (con salto de línea real dentro de
//    los backticks) con este formato exacto:
//    "Nombre: {nombre}\nProfesión: {profesion}"
// ================================================================

function saludar(nombre) {
  // TODO: completar con template literal
}

function describirPersona(nombre, edad) {
  // TODO: completar con template literal
}

function calcularYMostrar(a, b) {
  // TODO: completar interpolando "a + b" directamente dentro de ${}
}

function tarjetaPresentacion(nombre, profesion) {
  // TODO: completar con template literal multilínea
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(saludar("Bautista") === "Hola, Bautista!", 'saludar("Bautista") debería ser "Hola, Bautista!"');

console.assert(
  describirPersona("Ana", 25) === "Ana tiene 25 años.",
  'describirPersona("Ana", 25) debería ser "Ana tiene 25 años."'
);

console.assert(
  calcularYMostrar(2, 3) === "La suma de 2 y 3 es 5.",
  'calcularYMostrar(2, 3) debería ser "La suma de 2 y 3 es 5."'
);

console.assert(
  tarjetaPresentacion("Juan", "Programador") === "Nombre: Juan\nProfesión: Programador",
  "tarjetaPresentacion debería tener un salto de línea real entre nombre y profesión"
);

console.log("Actividad Fácil de Strings: revisá la consola en busca de errores de assert.");
