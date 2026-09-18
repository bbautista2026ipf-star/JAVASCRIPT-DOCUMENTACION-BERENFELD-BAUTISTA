// ACTIVIDAD - OBJETOS (NIVEL MEDIO)
//
// Consigna:
// 1) Dado el objeto `producto` (definido abajo, no modificar), completá
//    la función `resumenProducto(producto)` que use DESESTRUCTURACIÓN
//    en los PARÁMETROS de la función (no dentro del cuerpo) para
//    extraer `nombre`, `precio` y `stock` (con valor por defecto 0 si
//    no viniera), y retorne el string:
//    `` `${nombre}: $${precio} (stock: ${stock})` ``
//
// 2) Completá `renombrarCliente(cliente)` que reciba un objeto con
//    propiedad `nombreCompleto` y, usando desestructuración con ALIAS,
//    la extraiga como `nombre` y retorne un nuevo objeto
//    `{ nombre, email: cliente.email }`.
//    ⚠️ Trampa: `cliente` NO tiene una propiedad `nombre`, sino
//    `nombreCompleto`. Si usás `cliente.nombre` directo, va a fallar.
//
// 3) Completá `mezclarConfiguracion(porDefecto, personalizada)` que
//    combine dos objetos (usá el spread operator `{...a, ...b}`) de
//    forma que las propiedades de `personalizada` sobrescriban a las
//    de `porDefecto`, y retorne el objeto resultante.

const producto = { nombre: "Teclado", precio: 8500 };

function resumenProducto({ nombre, precio, stock = 0 }) {
  // TODO
}

function renombrarCliente(cliente) {
  // TODO: desestructurar con alias `nombreCompleto: nombre`
}

function mezclarConfiguracion(porDefecto, personalizada) {
  // TODO
}

// --- Casos de prueba ---
console.assert(
  resumenProducto(producto) === "Teclado: $8500 (stock: 0)",
  "Test 1 falló (default en destructuring de parámetro)"
);
console.assert(
  resumenProducto({ nombre: "Mouse", precio: 2000, stock: 15 }) === "Mouse: $2000 (stock: 15)",
  "Test 2 falló"
);

const clienteOriginal = { nombreCompleto: "Ana Torres", email: "ana@mail.com" };
const clienteRenombrado = renombrarCliente(clienteOriginal);
console.assert(clienteRenombrado.nombre === "Ana Torres", "Test 3 falló (alias)");
console.assert(clienteRenombrado.email === "ana@mail.com", "Test 4 falló");
console.assert(clienteRenombrado.nombreCompleto === undefined, "Test 5 falló (no debe copiar la clave original)");

const configDefault = { tema: "claro", idioma: "es", notificaciones: true };
const configUsuario = { tema: "oscuro" };
const configFinal = mezclarConfiguracion(configDefault, configUsuario);
console.assert(configFinal.tema === "oscuro", "Test 6 falló (override)");
console.assert(configFinal.idioma === "es", "Test 7 falló (se mantiene default)");
console.assert(configFinal.notificaciones === true, "Test 8 falló (se mantiene default)");

console.log("Actividad Media - Objetos: si no viste errores arriba, ¡todo OK!");
