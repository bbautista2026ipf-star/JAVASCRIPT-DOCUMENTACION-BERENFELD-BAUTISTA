// ACTIVIDAD - ARREGLOS (NIVEL MEDIO)
//
// Consigna:
// 1. Dado el arreglo `productos` (objetos con nombre y precio), usá `filter()` para obtener
//    `productosCaros`: solo los productos con precio mayor a 500.
// 2. Usá `map()` sobre `productos` para crear `nombresProductos`: un arreglo con solo los
//    nombres (strings).
// 3. Usá `reduce()` para calcular `precioTotal`: la suma de todos los precios de `productos`.
// 4. Usá `find()` para obtener `productoMasCaro`... o mejor: primero pensá si `find()` es la
//    herramienta correcta para "encontrar el máximo", o si hay una combinación de métodos más
//    adecuada. Implementá `productoMasCaro` (el objeto completo con el precio más alto).
// 5. ⚠️ TRAMPA: Ordená una copia de los precios de menor a mayor en `preciosOrdenados`,
//    SIN mutar el arreglo `productos` original ni el array de precios extraído. Pensá qué
//    método de copiado necesitás antes de usar `sort()`, y qué comparador hay que pasarle
//    para que ordene numéricamente (no alfabéticamente).
// 6. Completá `agruparPorRangoPrecio(productos)` que devuelva un objeto:
//    { baratos: [...nombres con precio < 300], caros: [...nombres con precio >= 300] }
//    usando `reduce()` (no uses un `for` tradicional).

const productos = [
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 600 },
  { nombre: "Monitor", precio: 1500 },
  { nombre: "Mousepad", precio: 80 },
  { nombre: "Webcam", precio: 450 },
];

// 1. filter()
let productosCaros; // TODO

// 2. map()
let nombresProductos; // TODO

// 3. reduce()
let precioTotal; // TODO

// 4. producto con precio más alto
let productoMasCaro; // TODO

// 5. copia ordenada de precios, sin mutar originales
let preciosOrdenados; // TODO

// 6. agrupar con reduce
function agruparPorRangoPrecio(productos) {
  // TODO
}

// --- Casos de prueba ---
console.assert(
  productosCaros.length === 2 &&
    productosCaros.every((p) => p.precio > 500),
  "productosCaros debe contener solo precio > 500",
);
console.assert(
  nombresProductos.join(",") === "Mouse,Teclado,Monitor,Mousepad,Webcam",
  "nombresProductos debe mantener el orden original",
);
console.assert(precioTotal === 2880, "precioTotal debe ser 2880");
console.assert(
  productoMasCaro && productoMasCaro.nombre === "Monitor",
  "productoMasCaro debe ser Monitor",
);
console.assert(
  JSON.stringify(preciosOrdenados) === JSON.stringify([80, 250, 450, 600, 1500]),
  "preciosOrdenados debe estar ordenado numéricamente ascendente",
);
console.assert(
  productos[0].precio === 250 && productos[2].nombre === "Monitor",
  "productos original NO debe haberse mutado",
);
const grupos = agruparPorRangoPrecio(productos);
console.assert(
  grupos.baratos.includes("Mousepad") && grupos.caros.includes("Monitor"),
  "agruparPorRangoPrecio debe clasificar correctamente",
);
