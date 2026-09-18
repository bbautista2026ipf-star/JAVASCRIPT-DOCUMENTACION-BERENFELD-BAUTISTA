// ACTIVIDAD - FUNCIONES Y ARGUMENTOS (NIVEL DIFÍCIL)
//
// Escenario:
// Necesitás construir un sistema de descuentos acumulables para una
// tienda. Cada "cupón" es una función que recibe un precio y devuelve
// un precio con descuento aplicado. Querés poder combinar varios
// cupones en cadena sin repetir código, y además llevar un CONTADOR
// de cuántas veces se aplicó CADA cupón en particular, sin usar
// variables globales.
//
// Antes de escribir código, respondé (como comentario) estas preguntas:
//   1) ¿Qué concepto de JavaScript te permite que una función "recuerde"
//      un contador propio entre distintas llamadas, sin exponerlo como
//      variable global ni como parámetro? Nombralo con la terminología
//      exacta vista en clase.
//   2) Si necesitás aplicar N funciones de descuento en secuencia sobre
//      un mismo valor (el resultado de una es la entrada de la
//      siguiente), ¿qué tipo de parámetro te permite recibir "una
//      cantidad variable" de funciones como argumento?
//   3) ¿Qué diferencia práctica habría si implementás el cupón como
//      arrow function en vez de function tradicional, considerando que
//      no necesita su propio `this`?
//
// Tu tarea:
// Implementar `crearCupon(porcentaje)` que retorne una función. Esa
// función recibe un `precio` y retorna el precio con el descuento
// aplicado (redondeado con Math.round). Además, la función retornada
// debe tener un contador interno accesible mediante una propiedad
// `.usos` que indique cuántas veces fue invocada (pista: closures +
// asignar propiedades a una función también es válido en JS).
//
// Luego, implementar `aplicarCupones(precioInicial, ...cupones)` que
// reciba un precio inicial y una cantidad variable de cupones (rest
// parameters), aplicándolos en cadena, en el orden recibido, y
// retornando el precio final.

// TODO: escribí acá tu razonamiento como comentario antes de codear

function crearCupon(porcentaje) {
  // TODO: retornar una función con closure sobre `porcentaje` y un
  // contador de usos expuesto como propiedad `.usos`
}

function aplicarCupones(precioInicial, ...cupones) {
  // TODO: aplicar cada cupón en orden sobre el precio acumulado
}

// --- Casos de prueba (no modificar) ---
const cupon10 = crearCupon(10);
const cupon20 = crearCupon(20);

console.assert(cupon10(1000) === 900, "Test 1 falló (10% de descuento)");
console.assert(cupon10.usos === 1, "Test 2 falló (contador de usos)");
console.assert(cupon10(1000) === 900, "Test 3 falló");
console.assert(cupon10.usos === 2, "Test 4 falló (contador acumulado)");

console.assert(cupon20.usos === 0, "Test 5 falló (cada cupón tiene su propio contador)");

const precioFinal = aplicarCupones(1000, cupon10, cupon20);
console.assert(precioFinal === 720, "Test 6 falló (900 -> 720 tras aplicar ambos cupones)");

console.log("Actividad Difícil - Funciones: si no viste errores arriba, ¡todo OK!");
