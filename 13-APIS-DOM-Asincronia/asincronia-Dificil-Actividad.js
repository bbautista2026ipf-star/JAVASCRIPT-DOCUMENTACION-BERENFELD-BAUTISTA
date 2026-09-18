// ACTIVIDAD - ASINCRONÍA (NIVEL DIFÍCIL - FORMATO SOCRÁTICO)
//
// Escenario:
// Estás construyendo un mini "check-out" de un carrito de compras. El proceso real
// tiene tres pasos que dependen unos de otros: (1) verificar stock, (2) procesar el
// pago, (3) confirmar el envío. Cada paso es una operación que toma tiempo (se simula
// con `setTimeout`) y puede fallar.
//
// No hay pasos numerados: pensá el algoritmo antes de escribir código.
// Guiate por las preguntas comentadas en cada sección. Usá las funciones base
// provistas (`verificarStock`, `procesarPago`, `confirmarEnvio`) sin modificarlas.

function verificarStock(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto === "sin-stock") reject("Sin stock de " + producto);
      else resolve("Stock OK: " + producto);
    }, 300);
  });
}

function procesarPago(monto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (monto <= 0) reject("Monto inválido: " + monto);
      else resolve("Pago procesado: $" + monto);
    }, 300);
  });
}

function confirmarEnvio(direccion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!direccion) reject("Falta dirección de envío");
      else resolve("Envío confirmado a: " + direccion);
    }, 300);
  });
}

// --- FUNCIÓN 1: checkout completo, paso a paso ---
// Los tres pasos son DEPENDIENTES entre sí en el sentido de que si el primero falla,
// no tiene sentido intentar el segundo. ¿Qué construcción de async/await te permite
// esperar una operación, y si esa espera lanza una excepción, saltar directamente al
// manejo del error sin ejecutar el resto de los pasos?
// ¿Qué tiene que retornar esta función si TODO sale bien? ¿Y si algo falla en el medio,
// qué información sería útil retornar para saber en qué paso se cortó el proceso?
// Pensá el tipo de dato de retorno antes de escribir código: ¿un string? ¿un objeto
// con `{ exito, paso, mensaje }`?
async function checkout(producto, monto, direccion) {
  // TODO
}

// --- FUNCIÓN 2: checkout con reintento ---
// Un pago puede fallar por una razón transitoria (ej. timeout de red). Te piden que,
// si `procesarPago` falla, se reintente UNA vez más antes de abandonar. ¿Cómo
// estructurás un `try/catch` para que, al capturar el error del primer intento, vuelva
// a llamar a la misma operación en lugar de propagar el error inmediatamente? ¿Qué
// pasa si ese segundo intento también falla: ahí sí tenés que propagarlo o manejarlo?
async function procesarPagoConReintento(monto) {
  // TODO
}

// --- FUNCIÓN 3: checkout de varios pedidos en paralelo, tolerando fallos individuales ---
// Recibís un array de pedidos: [{producto, monto, direccion}, ...]. Necesitás procesar
// el checkout de TODOS en paralelo (no uno por uno) y al final saber cuáles tuvieron
// éxito y cuáles fallaron, SIN que un solo pedido fallido corte la ejecución de los
// demás. ¿`Promise.all` es la herramienta correcta acá, sabiendo que rechaza apenas
// UNA promesa falla? Investigá qué diferencia hay con `Promise.allSettled` y qué forma
// tiene cada resultado que retorna.
async function checkoutMultiple(pedidos) {
  // TODO
}

// --- Casos de prueba (asíncronos) ---
checkout("remera", 5000, "Calle Falsa 123").then((resultado) => {
  console.assert(
    resultado.exito === true,
    "checkout con datos válidos debe tener exito true",
  );
});

checkout("sin-stock", 5000, "Calle Falsa 123").then((resultado) => {
  console.assert(
    resultado.exito === false && resultado.paso === "stock",
    "checkout debe fallar en el paso 'stock' cuando no hay stock",
  );
});

procesarPagoConReintento(8000).then((resultado) => {
  console.assert(
    resultado === "Pago procesado: $8000",
    "procesarPagoConReintento debe resolver igual que un pago directo válido",
  );
});

checkoutMultiple([
  { producto: "remera", monto: 5000, direccion: "Calle Falsa 123" },
  { producto: "sin-stock", monto: 5000, direccion: "Calle Falsa 123" },
]).then((resultados) => {
  console.assert(
    Array.isArray(resultados) && resultados.length === 2,
    "checkoutMultiple debe retornar un resultado por cada pedido, sin cortar por fallos individuales",
  );
});
