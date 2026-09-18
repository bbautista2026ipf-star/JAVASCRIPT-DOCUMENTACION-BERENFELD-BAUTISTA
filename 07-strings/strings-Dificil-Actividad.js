// ================================================================
// ACTIVIDAD: STRINGS Y TEMPLATE LITERALS — NIVEL DIFÍCIL (MODO SOCRÁTICO)
// ================================================================
// No hay instrucciones paso a paso. Hay un problema y preguntas.
// Pensá el algoritmo ANTES de escribir código.
//
// ESCENARIO:
// Necesitás generar automáticamente un "recibo de compra" en formato
// texto a partir de un array de ítems. Cada ítem es un objeto con
// `{ nombre, cantidad, precio }`. El recibo final debe verse así
// (con saltos de línea reales, no "\\n" literal):
//
// RECIBO
// ------
// 2x Pan - $200
// 1x Leche - $150
// ------
// TOTAL: $550
//
// Reglas:
//   - Cada línea de ítem sigue el formato "{cantidad}x {nombre} - ${subtotal}"
//     donde subtotal = cantidad * precio.
//   - El TOTAL es la suma de todos los subtotales.
//   - Si el array de ítems está vacío, el recibo debe decir
//     "RECIBO\n------\n(sin items)\n------\nTOTAL: $0"
//
// Necesitás construir: generarRecibo(items)
//
// PREGUNTAS PARA REFLEXIONAR:
// 1. ¿Cómo transformás un array de objetos en un array de STRINGS
//    (una línea de texto por ítem)? ¿Qué método de array (no de
//    string) te permite recorrer y transformar sin usar un bucle
//    explícito con push? ¿Es obligatorio usarlo, o un for + push
//    también resuelve el problema?
// 2. Una vez que tenés un array de líneas de texto (una por ítem),
//    ¿qué método de string te permite UNIRLAS todas con saltos de
//    línea reales en un solo string, sin concatenar manualmente uno
//    por uno?
// 3. ¿En qué momento del proceso conviene calcular el TOTAL: antes de
//    armar las líneas de texto, durante, o después? ¿Por qué mezclar
//    el cálculo del total con el armado del string de cada línea
//    puede complicar el código en vez de simplificarlo?
// 4. Pensá en la plantilla general del recibo como un template literal
//    con "huecos": ¿cuáles son esos huecos? (pista: hay un hueco que
//    es, a su vez, el resultado de unir varias líneas). ¿Podés armar
//    TODO el recibo con un único template literal final, aunque
//    algunas partes se hayan calculado antes?
// 5. ¿Cómo tenés que tratar el caso de array vacío? ¿Conviene resolver
//    ese caso ANTES de intentar recorrer el array (return anticipado),
//    o tu algoritmo general ya lo cubre naturalmente? Verificalo antes
//    de agregar un caso especial innecesario.
//
// Una vez que tengas el algoritmo pensado, completá la función.
// ================================================================

function generarRecibo(items) {
  // TODO: implementar el algoritmo que pensaste respondiendo las preguntas.
}

// ------------------------------------
// CASOS DE PRUEBA (no los mires antes de intentar resolver el problema)
// ------------------------------------
const recibo1 = generarRecibo([
  { nombre: "Pan", cantidad: 2, precio: 100 },
  { nombre: "Leche", cantidad: 1, precio: 150 },
]);
console.assert(
  recibo1 === "RECIBO\n------\n2x Pan - $200\n1x Leche - $150\n------\nTOTAL: $550",
  "El recibo con 2 items no coincide con el formato esperado"
);

const reciboVacio = generarRecibo([]);
console.assert(
  reciboVacio === "RECIBO\n------\n(sin items)\n------\nTOTAL: $0",
  "El recibo vacío no coincide con el formato esperado"
);

const reciboUnItem = generarRecibo([{ nombre: "Café", cantidad: 3, precio: 50 }]);
console.assert(
  reciboUnItem === "RECIBO\n------\n3x Café - $150\n------\nTOTAL: $150",
  "El recibo con un solo item no coincide con el formato esperado"
);

console.log("Actividad Difícil de Strings: revisá la consola en busca de errores de assert.");
