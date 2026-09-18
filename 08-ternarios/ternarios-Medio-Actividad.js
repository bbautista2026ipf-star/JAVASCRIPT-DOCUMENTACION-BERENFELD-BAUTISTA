// ACTIVIDAD - OPERADOR TERNARIO (NIVEL MEDIO)
//
// Consigna:
// 1) Completá `clasificarEdad(edad)` usando TERNARIOS ANIDADOS (sin if/else)
//    que retorne:
//      - "Niño"           si edad < 13
//      - "Adolescente"    si 13 <= edad < 18
//      - "Adulto"         si 18 <= edad < 65
//      - "Adulto mayor"   si edad >= 65
//    ⚠️ Trampa: prestá atención al orden de las comparaciones encadenadas.
//
// 2) Completá `calcularDescuento(precio, esSocio)` que retorne el precio
//    final: si `esSocio` es true aplica 20% de descuento, si no, aplica
//    5% de descuento SOLO cuando `precio > 1000`, y si no se cumple nada
//    de eso, retorna el precio sin cambios. Debe resolverse con UN SOLO
//    ternario anidado (no declarar variables intermedias con if).
//
// 3) Completá `validarContraseña(pass)` que retorne "Válida" si
//    `pass.length >= 8`, "Débil" si tiene entre 4 y 7 caracteres,
//    y "Inválida" si tiene menos de 4. Usá ternarios anidados.

function clasificarEdad(edad) {
  // TODO
}

function calcularDescuento(precio, esSocio) {
  // TODO
}

function validarContraseña(pass) {
  // TODO
}

// --- Casos de prueba ---
console.assert(clasificarEdad(10) === "Niño", "Test 1 falló");
console.assert(clasificarEdad(15) === "Adolescente", "Test 2 falló");
console.assert(clasificarEdad(30) === "Adulto", "Test 3 falló");
console.assert(clasificarEdad(70) === "Adulto mayor", "Test 4 falló");
console.assert(clasificarEdad(13) === "Adolescente", "Test 5 falló (límite inferior)");
console.assert(clasificarEdad(65) === "Adulto mayor", "Test 6 falló (límite superior)");

console.assert(calcularDescuento(2000, true) === 1600, "Test 7 falló (socio)");
console.assert(calcularDescuento(2000, false) === 1900, "Test 8 falló (no socio, >1000)");
console.assert(calcularDescuento(500, false) === 500, "Test 9 falló (no socio, <=1000)");

console.assert(validarContraseña("abcdefgh") === "Válida", "Test 10 falló");
console.assert(validarContraseña("abcd") === "Débil", "Test 11 falló");
console.assert(validarContraseña("ab") === "Inválida", "Test 12 falló");

console.log("Actividad Media - Ternarios: si no viste errores arriba, ¡todo OK!");
