// ACTIVIDAD - OBJETOS (NIVEL FÁCIL)
//
// Consigna:
// 1) Creá un objeto `libro` con las propiedades:
//    titulo: "Cien años de soledad", autor: "Gabriel García Márquez",
//    anio: 1967.
//
// 2) Accedé a `titulo` usando notación de PUNTO y guardalo en una
//    variable `tituloLibro`.
//
// 3) Accedé a `autor` usando notación de CORCHETES y guardalo en una
//    variable `autorLibro`.
//
// 4) Agregá dinámicamente al objeto `libro` una nueva propiedad
//    `genero` con el valor "Realismo mágico".
//
// 5) Eliminá la propiedad `anio` del objeto `libro` usando `delete`.
//
// 6) Usando DESESTRUCTURACIÓN, extraé `titulo` y `autor` de `libro` en
//    variables llamadas `tituloDesestructurado` y `autorDesestructurado`.

// TODO: 1) objeto `libro`
const libro = {};

// TODO: 2) tituloLibro (notación punto)
let tituloLibro;

// TODO: 3) autorLibro (notación corchetes)
let autorLibro;

// TODO: 4) agregar `genero`


// TODO: 5) eliminar `anio`


// TODO: 6) desestructuración
let tituloDesestructurado, autorDesestructurado;

// --- Casos de prueba ---
console.assert(libro.titulo === "Cien años de soledad", "Test 1 falló");
console.assert(tituloLibro === "Cien años de soledad", "Test 2 falló (notación punto)");
console.assert(autorLibro === "Gabriel García Márquez", "Test 3 falló (notación corchetes)");
console.assert(libro.genero === "Realismo mágico", "Test 4 falló (propiedad agregada)");
console.assert(libro.anio === undefined, "Test 5 falló (propiedad eliminada)");
console.assert(tituloDesestructurado === "Cien años de soledad", "Test 6 falló (destructuring)");
console.assert(autorDesestructurado === "Gabriel García Márquez", "Test 7 falló (destructuring)");

console.log("Actividad Fácil - Objetos: si no viste errores arriba, ¡todo OK!");
