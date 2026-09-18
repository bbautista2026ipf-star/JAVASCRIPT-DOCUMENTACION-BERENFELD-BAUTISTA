// ================================================================
// ACTIVIDAD: SCOPE — NIVEL DIFÍCIL (MODO SOCRÁTICO)
// ================================================================
// No hay instrucciones paso a paso. Hay un problema y preguntas.
// Pensá el algoritmo ANTES de escribir código.
//
// ESCENARIO:
// Querés construir un sistema de "banco" muy simplificado con estas
// reglas:
//   - El saldo de la cuenta NO debe ser accesible ni modificable
//     directamente desde afuera (nadie debe poder hacer `banco.saldo = 999999`).
//   - Solo se puede interactuar con el saldo a través de dos funciones
//     que el sistema te entrega: una para depositar y otra para
//     consultar el saldo actual.
//   - Un intento de depositar un monto negativo o cero no debe
//     modificar el saldo.
//
// Necesitás construir: crearCuentaBancaria(saldoInicial)
// que devuelva un objeto con dos métodos: `depositar(monto)` y
// `consultarSaldo()`.
//
// PREGUNTAS PARA REFLEXIONAR:
// 1. ¿Qué mecanismo de JavaScript te permite tener una variable que
//    "vive" dentro de una función pero es inaccesible desde afuera,
//    salvo a través de funciones específicas que la referencian?
//    (Pensá en Scope Chain y Closure.)
// 2. Si declarás `saldo` como parámetro o variable local dentro de
//    `crearCuentaBancaria`, ¿por qué las funciones `depositar` y
//    `consultarSaldo`, si se definen DENTRO de esa función, pueden
//    seguir viendo y modificando `saldo` aunque `crearCuentaBancaria`
//    ya haya terminado de ejecutarse?
// 3. ¿Por qué NO conviene simplemente devolver `{ saldo, depositar,
//    consultarSaldo }` con `saldo` como propiedad directa del objeto?
//    ¿Qué problema de encapsulamiento genera eso?
// 4. ¿Dónde tiene que vivir la validación de "monto positivo": adentro
//    de `depositar`, o afuera? ¿Por qué en este diseño no tiene sentido
//    que viva afuera?
// 5. Si llamás `crearCuentaBancaria(100)` dos veces, en dos variables
//    distintas, ¿por qué cada cuenta debe tener su propio saldo
//    independiente? ¿Qué concepto de scope garantiza eso?
//
// Una vez que tengas el algoritmo pensado, completá la función.
// ================================================================

function crearCuentaBancaria(saldoInicial) {
  // TODO: implementar el algoritmo que pensaste respondiendo las preguntas.
  // Debe devolver un objeto { depositar(monto), consultarSaldo() }
  // sin exponer "saldo" como propiedad accesible directamente.
}

// ------------------------------------
// CASOS DE PRUEBA (no los mires antes de intentar resolver el problema)
// ------------------------------------
const cuenta1 = crearCuentaBancaria(100);
console.assert(cuenta1.consultarSaldo() === 100, "Saldo inicial debería ser 100");

cuenta1.depositar(50);
console.assert(cuenta1.consultarSaldo() === 150, "Después de depositar 50, saldo debería ser 150");

cuenta1.depositar(-30);
console.assert(cuenta1.consultarSaldo() === 150, "Depósito negativo no debería modificar el saldo");

cuenta1.depositar(0);
console.assert(cuenta1.consultarSaldo() === 150, "Depósito de 0 no debería modificar el saldo");

console.assert(cuenta1.saldo === undefined, "La propiedad 'saldo' no debería ser accesible directamente");

const cuenta2 = crearCuentaBancaria(500);
console.assert(cuenta2.consultarSaldo() === 500, "cuenta2 debería tener su propio saldo independiente");
console.assert(cuenta1.consultarSaldo() === 150, "cuenta1 no debería verse afectada por cuenta2");

console.log("Actividad Difícil de Scope: revisá la consola en busca de errores de assert.");
