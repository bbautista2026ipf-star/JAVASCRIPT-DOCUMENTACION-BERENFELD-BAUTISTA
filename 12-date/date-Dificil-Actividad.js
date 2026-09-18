// ACTIVIDAD - OBJETO DATE (NIVEL DIFÍCIL - FORMATO SOCRÁTICO)
//
// Escenario:
// Estás armando el backend de un sistema de reservas de una biblioteca. Cada préstamo
// tiene una fecha de retiro y un plazo de devolución de 7 días. Necesitás un pequeño
// motor de validaciones y cálculos de mora.
//
// No hay pasos numerados: pensá el algoritmo antes de escribir código.
// Guiate por las preguntas comentadas en cada sección.

const prestamos = [
  { libro: "Rayuela", retiro: new Date(2026, 8, 1) }, // 1 de septiembre de 2026
  { libro: "1984", retiro: new Date(2026, 8, 10) }, // 10 de septiembre de 2026
  { libro: "El Aleph", retiro: new Date(2026, 8, 17) }, // 17 de septiembre de 2026
];

const HOY = new Date(2026, 8, 18); // fecha de referencia fija para que los tests sean reproducibles

// --- FUNCIÓN 1: calcular la fecha límite de devolución ---
// Un préstamo vence 7 días después del retiro. ¿Qué método de Date te permite sumar
// días a una fecha sin tener que calcular manualmente si el mes "se pasa" de 30/31/28?
// ¿Ese método muta la fecha original? Si el resto de tu programa sigue necesitando la
// fecha de retiro intacta, ¿qué tenés que hacer antes de modificarla?
function fechaLimite(fechaRetiro) {
  // TODO
}

// --- FUNCIÓN 2: determinar si un préstamo está vencido a día de HOY ---
// ¿Qué relación tiene que existir entre HOY y la fecha límite calculada en la función
// anterior para que consideres el préstamo "vencido"? ¿Podés comparar dos objetos Date
// directamente con operadores como > o <, o necesitás convertir algo primero?
function estaVencido(prestamo, hoy) {
  // TODO
}

// --- FUNCIÓN 3: calcular los días de mora (0 si no está vencido) ---
// Si ya sabés vencido/no vencido, ¿cómo obtenés la CANTIDAD de días de diferencia entre
// hoy y la fecha límite? ¿Qué operación entre dos Date te da milisegundos, y por qué
// número tenés que dividir ese resultado para pasarlo a días?
// ¿Qué pasa si el préstamo no está vencido: qué debería retornar la función en ese caso?
function diasDeMora(prestamo, hoy) {
  // TODO
}

// --- FUNCIÓN 4: listar los libros vencidos ordenados por mayor mora primero ---
// Ya tenés `estaVencido` y `diasDeMora`. ¿Qué combinación de métodos de arreglo te
// permite primero QUEDARTE solo con los vencidos, y después ORDENARLOS por mora
// descendente? ¿En qué orden tenés que encadenar esos métodos, y por qué importa el
// orden? ¿Necesitás cuidar la mutabilidad del arreglo `prestamos` original acá también?
function librosVencidosPorMora(prestamos, hoy) {
  // TODO
}

// --- Casos de prueba ---
const limiteRayuela = fechaLimite(prestamos[0].retiro);
console.assert(
  limiteRayuela.getDate() === 8 && limiteRayuela.getMonth() === 8,
  "Rayuela vence el 8/09 (1/09 + 7 días)",
);
console.assert(
  prestamos[0].retiro.getDate() === 1,
  "la fecha de retiro original no debe mutarse",
);

console.assert(estaVencido(prestamos[0], HOY) === true, "Rayuela (vence 8/09) está vencido al 18/09");
console.assert(estaVencido(prestamos[1], HOY) === true, "1984 (vence 17/09) está vencido al 18/09");
console.assert(estaVencido(prestamos[2], HOY) === false, "El Aleph (vence 24/09) NO está vencido");

console.assert(diasDeMora(prestamos[0], HOY) === 10, "Rayuela: 10 días de mora");
console.assert(diasDeMora(prestamos[2], HOY) === 0, "El Aleph: 0 días de mora (no vencido)");

const vencidos = librosVencidosPorMora(prestamos, HOY);
console.assert(vencidos.length === 2, "debe haber 2 libros vencidos");
console.assert(vencidos[0].libro === "Rayuela", "Rayuela tiene más mora, va primero");
