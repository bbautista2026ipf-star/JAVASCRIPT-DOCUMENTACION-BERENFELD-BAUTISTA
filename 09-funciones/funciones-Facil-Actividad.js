// ACTIVIDAD - FUNCIONES Y ARGUMENTOS (NIVEL FÁCIL)
//
// Consigna:
// 1) Creá una función DECLARATIVA llamada `multiplicar` que reciba dos
//    parámetros `a` y `b` y retorne su producto.
//
// 2) Creá una función EXPRESIVA (asignada a una constante) llamada
//    `restar` que reciba `a` y `b` y retorne `a - b`.
//
// 3) Creá una ARROW FUNCTION llamada `elevarAlCuadrado` que reciba un
//    número `n` y retorne `n * n`.
//
// 4) Completá la función `saludarConDefault(nombre = "invitado")` para
//    que retorne `"Hola, " + nombre` usando el parámetro por defecto
//    (no uses ternario ni if).

// TODO: función declarativa `multiplicar`


// TODO: función expresiva `restar`
const restar = undefined;

// TODO: arrow function `elevarAlCuadrado`
const elevarAlCuadrado = undefined;

function saludarConDefault(nombre = "invitado") {
  // TODO
}

// --- Casos de prueba ---
console.assert(typeof multiplicar === "function", "Test 1 falló: multiplicar debe ser function");
console.assert(multiplicar(3, 4) === 12, "Test 2 falló");
console.assert(restar(10, 4) === 6, "Test 3 falló");
console.assert(elevarAlCuadrado(5) === 25, "Test 4 falló");
console.assert(saludarConDefault() === "Hola, invitado", "Test 5 falló (default)");
console.assert(saludarConDefault("Bautista") === "Hola, Bautista", "Test 6 falló");

console.log("Actividad Fácil - Funciones: si no viste errores arriba, ¡todo OK!");
