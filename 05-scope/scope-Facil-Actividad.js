// ================================================================
// ACTIVIDAD: SCOPE — NIVEL FÁCIL
// ================================================================
// Consigna:
// 1. Declará una variable global `contadorVisitas` con valor inicial 0.
// 2. Completá la función `registrarVisita()` para que incremente
//    `contadorVisitas` en 1 y devuelva su nuevo valor (esto demuestra
//    que una función puede leer y modificar el scope global).
// 3. Completá la función `crearSaludoLocal(nombre)`: declará DENTRO de
//    la función una variable local `saludo` con el valor
//    `"Hola, " + nombre` y devolvela. `saludo` NO debe existir fuera
//    de la función (scope local).
// 4. Completá la función `probarScopeDeBloque()`: dentro de un `if (true)`
//    declará con `let` una variable `mensaje = "Estoy en el bloque"`.
//    La función debe devolver el valor de esa variable DESDE DENTRO
//    del bloque (no se puede acceder fuera de él).
// ================================================================

let contadorVisitas = 0;

function registrarVisita() {
  // TODO: incrementar contadorVisitas y devolver su nuevo valor
}

function crearSaludoLocal(nombre) {
  // TODO: declarar variable local "saludo" y devolverla
}

function probarScopeDeBloque() {
  if (true) {
    // TODO: declarar "mensaje" con let y devolverlo desde acá
  }
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(registrarVisita() === 1, "Primera visita debería devolver 1");
console.assert(registrarVisita() === 2, "Segunda visita debería devolver 2");
console.assert(contadorVisitas === 2, "contadorVisitas global debería ser 2");

console.assert(crearSaludoLocal("Ana") === "Hola, Ana", 'crearSaludoLocal("Ana") debería ser "Hola, Ana"');
// La siguiente línea, si se descomenta, debe dar ReferenceError (scope local):
// console.log(saludo);

console.assert(probarScopeDeBloque() === "Estoy en el bloque", "probarScopeDeBloque() debería devolver el mensaje del bloque");

console.log("Actividad Fácil de Scope: revisá la consola en busca de errores de assert.");
