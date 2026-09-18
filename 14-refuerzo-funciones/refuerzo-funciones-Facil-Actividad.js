// ACTIVIDAD - REFUERZO DE FUNCIONES (NIVEL FÁCIL)
//
// Consigna:
// 1) Completá la función `crearSaludo(nombre = "invitado")` que retorne
//    el string `"Hola, ${nombre}!"`. Debe usar un PARÁMETRO POR DEFECTO
//    para el caso en que no se pase argumento.
//
// 2) Completá la función `sumarTodo(...numeros)` que reciba una cantidad
//    variable de números usando REST PARAMETERS y retorne la suma de todos.
//    Si no se pasa ningún número, debe retornar 0.
//
// 3) Completá la función `combinarArrays(arr1, arr2)` que retorne un
//    nuevo array con los elementos de `arr1` y `arr2` combinados, usando
//    el operador SPREAD (no uses `concat`).

function crearSaludo(nombre = "invitado") {
  // TODO: reemplazar por el string interpolado
}

function sumarTodo(...numeros) {
  // TODO: sumar todos los elementos de "numeros"
}

function combinarArrays(arr1, arr2) {
  // TODO: combinar usando spread
}

// --- Casos de prueba ---
console.assert(crearSaludo("Ana") === "Hola, Ana!", "Test 1 falló");
console.assert(crearSaludo() === "Hola, invitado!", "Test 2 falló");

console.assert(sumarTodo(1, 2, 3) === 6, "Test 3 falló");
console.assert(sumarTodo(5) === 5, "Test 4 falló");
console.assert(sumarTodo() === 0, "Test 5 falló");

console.assert(
  JSON.stringify(combinarArrays([1, 2], [3, 4])) === JSON.stringify([1, 2, 3, 4]),
  "Test 6 falló",
);
console.assert(
  JSON.stringify(combinarArrays([], [1])) === JSON.stringify([1]),
  "Test 7 falló",
);

console.log("Actividad Fácil - Refuerzo Funciones: si no viste errores arriba, ¡todo OK!");
