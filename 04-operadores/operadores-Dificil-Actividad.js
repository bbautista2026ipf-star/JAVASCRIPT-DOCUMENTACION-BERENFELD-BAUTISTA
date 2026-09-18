// ================================================================
// ACTIVIDAD: OPERADORES — NIVEL DIFÍCIL (MODO SOCRÁTICO)
// ================================================================
// No hay instrucciones paso a paso. Hay un problema y preguntas.
// Pensá el algoritmo ANTES de escribir código.
//
// ESCENARIO:
// Un cine aplica esta política de precios para UNA entrada:
//   - Precio base: $1000
//   - Si la persona es socia del cine, tiene 15% de descuento adicional.
//   - Los martes, TODAS las entradas tienen 30% de descuento (sea socio o no),
//     pero los descuentos NO se acumulan: se aplica el que sea MÁS beneficioso
//     para el cliente, no ambos sumados.
//   - Si la persona tiene menos de 12 años, la entrada cuesta directamente $300,
//     sin importar el día ni si es socio (esta regla pisa a todas las demás).
//
// Necesitás construir: calcularPrecioEntrada(edad, esSocio, esMartes)
//
// PREGUNTAS PARA REFLEXIONAR (respondelas en tu cabeza o en comentarios
// antes de programar):
// 1. ¿Cuál es la condición que SIEMPRE hay que chequear primero? ¿Por qué
//    el orden de las condiciones importa acá? (pensá en "return anticipado")
// 2. Si no es menor de 12: ¿qué dos descuentos posibles compiten
//    (socio vs martes)? ¿Cómo determinás cuál es "más beneficioso" sin
//    calcular ambos precios y comparar con operadores de comparación?
// 3. ¿Qué pasa si la persona es socia Y es martes? Según la consigna,
//    ¿se suman los descuentos o se toma solo uno? ¿Qué operador lógico
//    te sirve para expresar "aplicar el MAYOR descuento posible"?
// 4. ¿Cómo representarías "15%" y "30%" de descuento como multiplicador
//    del precio, en vez de restar directamente?
// 5. ¿Necesitás un ternario simple, uno anidado, o if/else? ¿Por qué
//    elegiste esa estructura y no otra?
//
// Una vez que tengas el algoritmo pensado, completá la función.
// ================================================================

function calcularPrecioEntrada(edad, esSocio, esMartes) {
  // TODO: implementar el algoritmo que pensaste respondiendo las preguntas.
}

// ------------------------------------
// CASOS DE PRUEBA (no los mires antes de intentar resolver el problema)
// ------------------------------------
console.assert(calcularPrecioEntrada(10, false, false) === 300, "Menor de 12 siempre paga 300");
console.assert(calcularPrecioEntrada(10, true, true) === 300, "Menor de 12 pisa cualquier otra regla");
console.assert(calcularPrecioEntrada(30, false, false) === 1000, "Adulto sin descuentos paga precio base");
console.assert(calcularPrecioEntrada(30, true, false) === 850, "Socio sin ser martes: 15% off");
console.assert(calcularPrecioEntrada(30, false, true) === 700, "Martes sin ser socio: 30% off");
console.assert(calcularPrecioEntrada(30, true, true) === 700, "Socio Y martes: se aplica el mayor descuento (30%), no se suman");

console.log("Actividad Difícil de Operadores: revisá la consola en busca de errores de assert.");
