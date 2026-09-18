// ================================================================
// ACTIVIDAD: CONTROL DE FLUJO — NIVEL MEDIO
// ================================================================
// Consigna:
// 1. Completá `validarPin(pin)` usando un `do...while`: debe simular
//    intentos de validación. Recibe un array de intentos (números) y
//    un `pin` correcto por parámetro separado ya definido en la firma.
//    Debe recorrer los intentos y devolver la POSICIÓN (índice) del
//    primer intento correcto, ejecutando el bucle al menos una vez
//    aunque el array esté vacío (en ese caso devolvé -1). Usá do...while
//    con un índice manual, combinando con `break`.
// 2. Completá `primerMultiploDe(divisor, desde, hasta)`: recorré con un
//    `for` el rango [desde, hasta] y devolvé el primer número múltiplo
//    de `divisor`. Si no hay ninguno, devolvé null. Usá `continue` para
//    saltar los que no son múltiplos y `break` (o return directo) al
//    encontrar el primero.
// 3. Completá `contarVocalesSaltandoEspacios(texto)`: recorré el texto
//    carácter por carácter con un `for`. Si el carácter es un espacio,
//    usá `continue` para saltarlo. Contá cuántos caracteres son vocales
//    (a, e, i, o, u, en minúscula o mayúscula) usando un switch dentro
//    del bucle. TRAMPA: el switch para vocales necesita "fall-through"
//    intencional (varios `case` seguidos sin `break` entre ellos, antes
//    de la acción común).
// ================================================================

function validarPin(intentos, pinCorrecto) {
  let i = 0;
  let resultado = -1;
  // TODO: completar con do...while, break y un índice manual "i"
  return resultado;
}

function primerMultiploDe(divisor, desde, hasta) {
  // TODO: completar con for, continue y break/return
}

function contarVocalesSaltandoEspacios(texto) {
  let contador = 0;
  // TODO: completar con for, continue y switch con fall-through
  return contador;
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(validarPin([1111, 2222, 4321, 9999], 4321) === 2, "El pin correcto está en el índice 2");
console.assert(validarPin([1111, 2222], 4321) === -1, "Ningún intento coincide, debería ser -1");
console.assert(validarPin([], 4321) === -1, "Array vacío debería devolver -1 (do...while corre igual una vez)");

console.assert(primerMultiploDe(3, 1, 10) === 3, "Primer múltiplo de 3 entre 1 y 10 es 3");
console.assert(primerMultiploDe(7, 1, 6) === null, "No hay múltiplos de 7 entre 1 y 6");
console.assert(primerMultiploDe(5, 5, 5) === 5, "Rango de un solo número que es múltiplo");

console.assert(contarVocalesSaltandoEspacios("Hola Mundo") === 4, 'contarVocalesSaltandoEspacios("Hola Mundo") debería ser 4');
console.assert(contarVocalesSaltandoEspacios("xyz") === 0, "Sin vocales debería ser 0");

console.log("Actividad Media de Control de Flujo: revisá la consola en busca de errores de assert.");
