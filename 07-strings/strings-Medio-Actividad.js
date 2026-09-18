// ================================================================
// ACTIVIDAD: STRINGS Y TEMPLATE LITERALS — NIVEL MEDIO
// ================================================================
// Consigna:
// 1. Completá `resumenCompra(producto, cantidad, precioUnitario)`: debe
//    devolver, usando UN SOLO template literal (sin variables
//    intermedias para el total):
//    "Compraste {cantidad} x {producto} a ${precioUnitario} c/u. Total: ${total}"
//    donde {total} = cantidad * precioUnitario, calculado DENTRO del ${}.
// 2. Completá `estadoDeStock(nombre, cantidad)`: usa un template literal
//    con un OPERADOR TERNARIO interpolado directamente dentro del ${}
//    para mostrar "disponible" si cantidad > 0, o "agotado" si cantidad
//    es 0 o menor. Formato exacto:
//    "{nombre}: {disponible/agotado}"
//    TRAMPA: el ternario completo (condición ? a : b) debe ir DENTRO
//    de un único ${}, no se puede armar con dos interpolaciones.
// 3. Completá `normalizarNombreUsuario(nombreCompleto)`: recibe un
//    string con posibles espacios extra al inicio/final y varias
//    palabras (ej: "  Ana García  "). Debe devolver un string armado
//    con template literal, combinando `.trim()` y `.toLowerCase()`,
//    con el formato "usuario: {nombreEnMinusculasSinEspacios}"
//    (ej: "usuario: ana garcía"). Combiná métodos de string DENTRO
//    del ${}.
// ================================================================

function resumenCompra(producto, cantidad, precioUnitario) {
  // TODO: completar con un único template literal, calculando el total dentro de ${}
}

function estadoDeStock(nombre, cantidad) {
  // TODO: completar con template literal + ternario dentro de ${}
}

function normalizarNombreUsuario(nombreCompleto) {
  // TODO: completar combinando .trim() y .toLowerCase() dentro de ${}
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(
  resumenCompra("Mouse", 3, 500) === "Compraste 3 x Mouse a $500 c/u. Total: $1500",
  "resumenCompra debería calcular el total correctamente dentro del template literal"
);

console.assert(
  estadoDeStock("Teclado", 5) === "Teclado: disponible",
  'estadoDeStock("Teclado", 5) debería ser "Teclado: disponible"'
);
console.assert(
  estadoDeStock("Monitor", 0) === "Monitor: agotado",
  'estadoDeStock("Monitor", 0) debería ser "Monitor: agotado"'
);

console.assert(
  normalizarNombreUsuario("  Ana García  ") === "usuario: ana garcía",
  'normalizarNombreUsuario("  Ana García  ") debería ser "usuario: ana garcía"'
);

console.log("Actividad Media de Strings: revisá la consola en busca de errores de assert.");
