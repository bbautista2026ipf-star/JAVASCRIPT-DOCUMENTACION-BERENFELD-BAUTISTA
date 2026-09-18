// ================================================================
// ACTIVIDAD: OPERADORES — NIVEL MEDIO
// ================================================================
// Consigna:
// 1. Completá `esMultiploDe(numero, divisor)`: devuelve true si `numero`
//    es múltiplo de `divisor` (combinar % con comparación estricta).
//    Cuidado: si `divisor` es 0, debe devolver false (evitar división por cero).
// 2. Completá `calcularDescuento(precio, esSocio)`: si `esSocio` es true,
//    aplica 20% de descuento (precio *= 0.8); si no, devuelve el precio
//    sin cambios. Usá operador ternario.
// 3. Completá `validarAcceso(usuario, clave)`: devuelve true SOLO si
//    ambos parámetros llegan con contenido (no son strings vacíos ni
//    undefined). Usá && y aprovechá que un string vacío es "falsy".
// 4. Completá `obtenerConfiguracion(configUsuario)`: `configUsuario`
//    puede venir como 0, "", null, undefined o un valor válido. Debe
//    devolver `configUsuario` si es un valor válido DISTINTO de
//    null/undefined, o "default" en caso contrario.
//    TRAMPA: usar || acá rompe con el valor 0 (es falsy pero válido).
//    Investigá el operador de coalescencia nula (??) para resolverlo.
// 5. Completá `signo(numero)`: devuelve "positivo", "negativo" o "cero"
//    combinando operadores de comparación y ternarios anidados.
// ================================================================

function esMultiploDe(numero, divisor) {
  // TODO: completar (atención al caso divisor === 0)
}

function calcularDescuento(precio, esSocio) {
  // TODO: completar usando ternario y *=
}

function validarAcceso(usuario, clave) {
  // TODO: completar usando &&
}

function obtenerConfiguracion(configUsuario) {
  // TODO: completar usando ?? (coalescencia nula), NO uses ||
}

function signo(numero) {
  // TODO: completar usando ternarios anidados
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(esMultiploDe(10, 5) === true, "esMultiploDe(10,5) debería ser true");
console.assert(esMultiploDe(10, 3) === false, "esMultiploDe(10,3) debería ser false");
console.assert(esMultiploDe(10, 0) === false, "esMultiploDe(10,0) debería ser false (división por cero)");

console.assert(calcularDescuento(100, true) === 80, "calcularDescuento(100,true) debería ser 80");
console.assert(calcularDescuento(100, false) === 100, "calcularDescuento(100,false) debería ser 100");

console.assert(validarAcceso("ana", "1234") === true, 'validarAcceso("ana","1234") debería ser true');
console.assert(validarAcceso("", "1234") === false, 'validarAcceso("","1234") debería ser false');
console.assert(validarAcceso("ana", "") === false, 'validarAcceso("ana","") debería ser false');

console.assert(obtenerConfiguracion(0) === 0, "obtenerConfiguracion(0) debería ser 0 (trampa de ||)");
console.assert(obtenerConfiguracion(null) === "default", 'obtenerConfiguracion(null) debería ser "default"');
console.assert(obtenerConfiguracion(undefined) === "default", 'obtenerConfiguracion(undefined) debería ser "default"');
console.assert(obtenerConfiguracion("") === "", 'obtenerConfiguracion("") debería ser "" (string vacío es válido)');

console.assert(signo(5) === "positivo", "signo(5) debería ser positivo");
console.assert(signo(-5) === "negativo", "signo(-5) debería ser negativo");
console.assert(signo(0) === "cero", "signo(0) debería ser cero");

console.log("Actividad Media de Operadores: revisá la consola en busca de errores de assert.");
