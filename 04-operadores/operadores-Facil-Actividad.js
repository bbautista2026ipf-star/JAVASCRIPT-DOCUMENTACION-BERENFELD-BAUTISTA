// ================================================================
// ACTIVIDAD: OPERADORES — NIVEL FÁCIL
// ================================================================
// Consigna:
// 1. Completá la función `esPar(numero)` para que devuelva `true` si el
//    número es par y `false` si es impar, usando el operador módulo (%).
// 2. Completá la función `duplicar(numero)` para que devuelva el número
//    multiplicado por 2, usando asignación compuesta (*=).
// 3. Completá la función `esMayorDeEdad(edad)` para que devuelva `true`
//    si `edad` es mayor o igual a 18, usando el operador de comparación
//    estricta (>=).
// 4. Completá la función `nombreOInvitado(nombre)` para que devuelva
//    `nombre` si tiene contenido, o "Invitado" si `nombre` es un string
//    vacío, usando el operador de cortocircuito (||).
// 5. Completá la función `describirEdad(edad)` usando el operador
//    ternario: debe devolver "Mayor" si edad >= 18, o "Menor" si no.
// ================================================================

function esPar(numero) {
  // TODO: completar usando %
}

function duplicar(numero) {
  let resultado = numero;
  // TODO: completar usando *=
  return resultado;
}

function esMayorDeEdad(edad) {
  // TODO: completar usando >=
}

function nombreOInvitado(nombre) {
  // TODO: completar usando ||
}

function describirEdad(edad) {
  // TODO: completar usando operador ternario
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(esPar(4) === true, "esPar(4) debería ser true");
console.assert(esPar(7) === false, "esPar(7) debería ser false");

console.assert(duplicar(5) === 10, "duplicar(5) debería ser 10");
console.assert(duplicar(0) === 0, "duplicar(0) debería ser 0");

console.assert(esMayorDeEdad(18) === true, "esMayorDeEdad(18) debería ser true");
console.assert(esMayorDeEdad(17) === false, "esMayorDeEdad(17) debería ser false");

console.assert(nombreOInvitado("") === "Invitado", 'nombreOInvitado("") debería ser "Invitado"');
console.assert(nombreOInvitado("Ana") === "Ana", 'nombreOInvitado("Ana") debería ser "Ana"');

console.assert(describirEdad(20) === "Mayor", 'describirEdad(20) debería ser "Mayor"');
console.assert(describirEdad(10) === "Menor", 'describirEdad(10) debería ser "Menor"');

console.log("Actividad Fácil de Operadores: revisá la consola en busca de errores de assert.");
