// ACTIVIDAD - OBJETOS (NIVEL DIFÍCIL)
//
// Escenario:
// Tenés los datos crudos de pedidos de una tienda online, mezclados
// con información redundante y estructura inconsistente. Necesitás
// transformarlos en un formato limpio y calcular estadísticas.
//
// const pedidos = [
//   { id: 1, cliente: { nombre: "Lucía", vip: true }, total: 4500, items: 3 },
//   { id: 2, cliente: { nombre: "Marcos", vip: false }, total: 1200, items: 1 },
//   { id: 3, cliente: { nombre: "Elena", vip: true }, total: 8900, items: 5 },
// ];
//
// Antes de escribir código, respondé (como comentario) estas preguntas:
//   1) Para extraer `nombre` y `vip` del objeto `cliente` ANIDADO dentro
//      de cada pedido, sin escribir `pedido.cliente.nombre` repetidas
//      veces, ¿qué técnica de desestructuración aplicarías? Pensá en
//      cómo se desestructura una propiedad que a su vez es un objeto.
//   2) Si necesitás transformar cada pedido en un nuevo objeto plano
//      como `{ id, nombreCliente, total, esVip }` SIN modificar el
//      array original (Mutabilidad: no se debe mutar `pedidos`), ¿qué
//      método de array conocés que crea un array nuevo aplicando una
//      transformación a cada elemento?
//   3) Para calcular el total acumulado de todos los pedidos VIP
//      únicamente, ¿cómo combinarías un filtro por condición con una
//      acumulación de valores, sin usar un `for` tradicional?
//
// Tu tarea:
// 1) Implementar `normalizarPedidos(pedidos)` que retorne un NUEVO
//    array de objetos con forma `{ id, nombreCliente, total, esVip }`,
//    usando desestructuración anidada en los parámetros de la función
//    de transformación.
// 2) Implementar `totalClientesVip(pedidosNormalizados)` que retorne la
//    suma de `total` de únicamente los pedidos donde `esVip === true`.

// TODO: escribí acá tu razonamiento como comentario antes de codear

function normalizarPedidos(pedidos) {
  // TODO
}

function totalClientesVip(pedidosNormalizados) {
  // TODO
}

// --- Casos de prueba (no modificar) ---
const pedidos = [
  { id: 1, cliente: { nombre: "Lucía", vip: true }, total: 4500, items: 3 },
  { id: 2, cliente: { nombre: "Marcos", vip: false }, total: 1200, items: 1 },
  { id: 3, cliente: { nombre: "Elena", vip: true }, total: 8900, items: 5 },
];

const normalizados = normalizarPedidos(pedidos);

console.assert(Array.isArray(normalizados) && normalizados.length === 3, "Test 1 falló");
console.assert(normalizados[0].nombreCliente === "Lucía", "Test 2 falló (desestructuración anidada)");
console.assert(normalizados[0].esVip === true, "Test 3 falló");
console.assert(normalizados[1].esVip === false, "Test 4 falló");
console.assert(normalizados[0].items === undefined, "Test 5 falló (no debe copiar `items`)");

console.assert(pedidos[0].cliente.nombre === "Lucía", "Test 6 falló (no se debe mutar el array original)");

console.assert(totalClientesVip(normalizados) === 13400, "Test 7 falló (4500 + 8900)");

console.log("Actividad Difícil - Objetos: si no viste errores arriba, ¡todo OK!");
