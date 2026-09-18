// ACTIVIDAD - ARREGLOS (NIVEL DIFÍCIL - FORMATO SOCRÁTICO)
//
// Escenario:
// Un e-commerce te pasa el historial de ventas del día como un arreglo de objetos:
// { producto, categoria, monto }. Te piden un pequeño motor de reportes.
//
// No hay pasos numerados: pensá el algoritmo antes de escribir código.
// Guiate por las preguntas comentadas en cada sección.

const ventas = [
  { producto: "Notebook", categoria: "Tecnología", monto: 900000 },
  { producto: "Mouse", categoria: "Tecnología", monto: 15000 },
  { producto: "Silla", categoria: "Hogar", monto: 60000 },
  { producto: "Notebook", categoria: "Tecnología", monto: 850000 },
  { producto: "Lámpara", categoria: "Hogar", monto: 22000 },
  { producto: "Mesa", categoria: "Hogar", monto: 120000 },
];

// --- REPORTE 1: total facturado por categoría ---
// ¿Qué método te permite recorrer todo el arreglo mientras vas construyendo UN SOLO
// resultado acumulado (en este caso, un objeto con una clave por categoría)?
// ¿Qué valor inicial le tenés que dar a ese acumulador para que funcione con
// categorías que todavía no aparecieron?
// ¿Qué pasa si una categoría se repite: tenés que crear la clave o sumarle al valor
// que ya existe? ¿Cómo lo distinguís dentro del callback?
function totalPorCategoria(ventas) {
  // TODO
}

// --- REPORTE 2: el producto más vendido en cantidad de operaciones (no en monto) ---
// Antes de pensar en arreglos: ¿cómo contarías manualmente, en un papel, cuántas veces
// aparece cada nombre de producto en una lista? ¿Qué estructura de datos de JS te sirve
// para llevar la cuenta de "nombre -> cantidad de apariciones"?
// Una vez que tenés esas cuentas, ¿cómo determinás cuál es el máximo? ¿Necesitás
// ordenar todo el conjunto, o alcanza con recorrerlo una vez llevando el "mejor hasta
// ahora"?
function productoMasFrecuente(ventas) {
  // TODO
}

// --- REPORTE 3: top 2 ventas por monto, de mayor a menor, sin mutar el arreglo original ---
// Sabés que `sort()` muta el arreglo. ¿Qué tenés que hacer ANTES de ordenar para
// garantizar que `ventas` no cambie?
// Sabés que `sort()` sin comparador ordena como texto. ¿Qué comparador numérico
// necesitás para que las ventas de mayor monto queden primero (orden descendente,
// no ascendente)?
// Una vez ordenado, ¿qué método usarías para quedarte solo con los primeros 2 elementos?
function topDosVentas(ventas) {
  // TODO
}

// --- REPORTE 4: ¿hay alguna venta individual que supere el 40% del total facturado? ---
// Primero necesitás el total general. ¿Con qué método lo calculás?
// Luego, para cada venta individual, ¿qué condición la clasifica como "venta
// concentrada"? ¿Qué método de arreglo retorna directamente true/false sin que vos
// tengas que armar un array intermedio de resultados booleanos?
function hayVentaConcentrada(ventas) {
  // TODO
}

// --- Casos de prueba ---
const total = totalPorCategoria(ventas);
console.assert(
  total.Tecnología === 1765000 && total.Hogar === 202000,
  "totalPorCategoria debe sumar correctamente por clave",
);

console.assert(
  productoMasFrecuente(ventas) === "Notebook",
  "productoMasFrecuente debe ser Notebook (aparece 2 veces)",
);

const top2 = topDosVentas(ventas);
console.assert(
  top2[0].monto === 900000 && top2[1].monto === 850000,
  "topDosVentas debe retornar las 2 ventas de mayor monto, descendente",
);
console.assert(
  ventas[0].producto === "Notebook" && ventas[0].monto === 900000,
  "ventas original NO debe haberse mutado por topDosVentas",
);

console.assert(
  hayVentaConcentrada(ventas) === true,
  "la Notebook de 900000 supera el 40% del total (1967000 aprox)",
);
