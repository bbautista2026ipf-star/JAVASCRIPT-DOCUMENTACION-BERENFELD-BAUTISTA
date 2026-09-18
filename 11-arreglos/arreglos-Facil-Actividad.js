// ACTIVIDAD - ARREGLOS (NIVEL FÁCIL)
//
// Consigna:
// 1. Declará un arreglo llamado `numeros` con los valores [4, 8, 15, 16, 23, 42].
// 2. Usá `push()` para agregar el número 100 al final del arreglo.
// 3. Usá `pop()` para eliminar el último elemento (deberías volver a tener 6 elementos).
// 4. Creá una variable `primerNumero` que guarde el elemento en el índice 0 usando acceso por índice.
// 5. Creá una variable `cantidad` que guarde la longitud del arreglo usando `.length`.
// 6. Usá `slice(0, 3)` para crear un nuevo arreglo `primerosTres` con los primeros 3 elementos,
//    sin modificar `numeros`.
// 7. Completá la función `sumarTodos(arr)` que recorra el arreglo con un `for` tradicional
//    y retorne la suma de todos sus elementos.

let numeros = [4, 8, 15, 16, 23, 42];

// 2. push()
// TODO

// 3. pop()
// TODO

// 4. acceso por índice
let primerNumero; // TODO

// 5. length
let cantidad; // TODO

// 6. slice (no muta)
let primerosTres; // TODO

// 7. función con for tradicional
function sumarTodos(arr) {
  // TODO
}

// --- Casos de prueba ---
console.assert(numeros.length === 6, "numeros debe tener 6 elementos después de push+pop");
console.assert(primerNumero === 4, "primerNumero debe ser 4");
console.assert(cantidad === 6, "cantidad debe ser 6");
console.assert(
  Array.isArray(primerosTres) && primerosTres.length === 3,
  "primerosTres debe tener 3 elementos",
);
console.assert(sumarTodos([1, 2, 3]) === 6, "sumarTodos([1,2,3]) debe ser 6");
console.assert(sumarTodos([]) === 0, "sumarTodos([]) debe ser 0");
