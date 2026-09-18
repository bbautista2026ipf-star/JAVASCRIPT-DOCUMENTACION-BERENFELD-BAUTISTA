// ================================================================
// ACTIVIDAD: SCOPE — NIVEL MEDIO
// ================================================================
// Consigna:
// 1. Completá `contadorConClosure()`: debe devolver una FUNCIÓN interna
//    que, cada vez que se la invoca, incrementa y devuelve un contador
//    que vive en el scope de `contadorConClosure` (usá el concepto de
//    Closure: la función interna "recuerda" la variable del scope
//    donde nació, incluso después de que `contadorConClosure` terminó
//    de ejecutarse).
// 2. Completá `probarVarEnLoop()`: usa `var` en un `for` para declarar
//    `i` y guarda en un array, dentro de cada iteración, una función
//    que devuelve el valor de `i`. Por el hoisting/scope de función de
//    `var`, TODAS las funciones guardadas van a "ver" el mismo valor
//    final de `i` (3). Devolvé el array de resultados de invocar cada
//    función guardada (ej: [3, 3, 3]).
// 3. Completá `probarLetEnLoop()`: igual que el anterior pero usando
//    `let`. Por el scope de bloque de `let`, cada iteración tiene su
//    PROPIA copia de `i`, así que el resultado debe ser [0, 1, 2].
//    TRAMPA: la diferencia entre estas dos funciones es justamente la
//    diferencia de scope entre var y let dentro de un bucle.
// ================================================================

function contadorConClosure() {
  let cuenta = 0;
  // TODO: devolver una función que incremente y devuelva "cuenta"
}

function probarVarEnLoop() {
  let funciones = [];
  for (var i = 0; i < 3; i++) {
    // TODO: guardar en "funciones" una función que devuelva "i"
  }
  // TODO: devolver un array con el resultado de invocar cada función guardada
}

function probarLetEnLoop() {
  let funciones = [];
  for (let i = 0; i < 3; i++) {
    // TODO: guardar en "funciones" una función que devuelva "i"
  }
  // TODO: devolver un array con el resultado de invocar cada función guardada
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
const incrementar = contadorConClosure();
console.assert(incrementar() === 1, "Primera llamada al closure debería ser 1");
console.assert(incrementar() === 2, "Segunda llamada al closure debería ser 2");
console.assert(incrementar() === 3, "Tercera llamada al closure debería ser 3");

const otroContador = contadorConClosure();
console.assert(otroContador() === 1, "Un nuevo closure debe arrancar de nuevo en 1 (cuenta independiente)");

console.assert(
  JSON.stringify(probarVarEnLoop()) === JSON.stringify([3, 3, 3]),
  "probarVarEnLoop() debería devolver [3, 3, 3] por el scope de función de var"
);
console.assert(
  JSON.stringify(probarLetEnLoop()) === JSON.stringify([0, 1, 2]),
  "probarLetEnLoop() debería devolver [0, 1, 2] por el scope de bloque de let"
);

console.log("Actividad Media de Scope: revisá la consola en busca de errores de assert.");
