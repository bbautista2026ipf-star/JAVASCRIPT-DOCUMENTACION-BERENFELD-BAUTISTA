// ACTIVIDAD - REFUERZO DE FUNCIONES (NIVEL MEDIO)
//
// Consigna:
// 1) Completá `crearAcumulador(inicial = 0)`, una función que use un
//    CLOSURE: debe retornar una función `agregar(valor)` que sume `valor`
//    al acumulador interno y retorne el nuevo total acumulado. El estado
//    (`total`) debe permanecer privado, sólo accesible a través de la
//    función retornada.
//    Ejemplo: const acc = crearAcumulador(10); acc(5) -> 15; acc(5) -> 20;
//
// 2) Completá `filtrarYTransformar(lista, predicado, transformador)`, una
//    FUNCIÓN DE ORDEN SUPERIOR que reciba un array y dos funciones:
//    primero filtra `lista` con `predicado`, y luego aplica `transformador`
//    a cada elemento filtrado. Retorná el array resultante.
//    (Podés resolverlo combinando `filter` y `map`.)
//
// 3) Completá `crearValidador(reglas)`, que reciba un array de funciones
//    "regla" (cada una recibe un valor y retorna true/false) y devuelva
//    una función `validar(valor)` que retorne true SOLO SI el valor
//    cumple TODAS las reglas (usá `every` dentro de un closure).

function crearAcumulador(inicial = 0) {
  // TODO
}

function filtrarYTransformar(lista, predicado, transformador) {
  // TODO
}

function crearValidador(reglas) {
  // TODO
}

// --- Casos de prueba ---
const acc = crearAcumulador(10);
console.assert(acc(5) === 15, "Test 1 falló");
console.assert(acc(5) === 20, "Test 2 falló (el estado no persiste en el closure)");

const acc2 = crearAcumulador();
console.assert(acc2(3) === 3, "Test 3 falló (valor inicial por defecto)");

const pares = filtrarYTransformar([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0, (n) => n * 10);
console.assert(JSON.stringify(pares) === JSON.stringify([20, 40, 60]), "Test 4 falló");

const esMayorA0YEntero = crearValidador([(n) => n > 0, (n) => Number.isInteger(n)]);
console.assert(esMayorA0YEntero(5) === true, "Test 5 falló");
console.assert(esMayorA0YEntero(-2) === false, "Test 6 falló");
console.assert(esMayorA0YEntero(2.5) === false, "Test 7 falló");

console.log("Actividad Media - Refuerzo Funciones: si no viste errores arriba, ¡todo OK!");
