// ACTIVIDAD - FUNCIONES Y ARGUMENTOS (NIVEL MEDIO)
//
// Consigna:
// 1) Completá `sumarTodos(...numeros)` usando REST PARAMETERS para que
//    retorne la suma de todos los argumentos recibidos (sin importar
//    cuántos sean, incluso cero argumentos -> debe retornar 0).
//
// 2) Completá `crearSaludador(saludo)` que retorne una ARROW FUNCTION
//    que reciba un `nombre` y retorne `` `${saludo}, ${nombre}!` ``.
//    Esto es un Closure: la función interna debe "recordar" el
//    parámetro `saludo` de la función externa.
//
// 3) ⚠️ Trampa de hoisting: el siguiente bloque de prueba llama a
//    `funcionAdelantada()` ANTES de su definición textual. Decidí vos
//    si debe ser función DECLARATIVA o EXPRESIVA para que el test
//    pase, e implementala como corresponda al final del archivo.
//    Debe retornar el string "Llegué antes de tiempo".
//
// 4) Completá `describirProducto({nombre, precio = 0})` que reciba un
//    ÚNICO objeto desestructurado como parámetro (con `precio` por
//    defecto en 0) y retorne `` `${nombre}: $${precio}` ``.

function sumarTodos(...numeros) {
  // TODO
}

function crearSaludador(saludo) {
  // TODO: retornar una arrow function (closure)
}

function describirProducto({ nombre, precio = 0 }) {
  // TODO
}

// --- Casos de prueba ---
console.assert(sumarTodos() === 0, "Test 1 falló (sin args)");
console.assert(sumarTodos(5) === 5, "Test 2 falló");
console.assert(sumarTodos(1, 2, 3, 4) === 10, "Test 3 falló");

const saludarFormal = crearSaludador("Buenos días");
console.assert(saludarFormal("Sra. Pérez") === "Buenos días, Sra. Pérez!", "Test 4 falló (closure)");

console.assert(describirProducto({ nombre: "Mouse", precio: 1500 }) === "Mouse: $1500", "Test 5 falló");
console.assert(describirProducto({ nombre: "Regalo" }) === "Regalo: $0", "Test 6 falló (default en destructuring)");

// Test de hoisting: se invoca antes de su definición textual más abajo.
console.assert(funcionAdelantada() === "Llegué antes de tiempo", "Test 7 falló (hoisting)");

// TODO: implementá acá abajo `funcionAdelantada` con el tipo de función
// que permita que el Test 7 (más arriba) funcione correctamente.


console.log("Actividad Media - Funciones: si no viste errores arriba, ¡todo OK!");
