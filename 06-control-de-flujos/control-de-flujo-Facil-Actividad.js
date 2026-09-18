// ================================================================
// ACTIVIDAD: CONTROL DE FLUJO — NIVEL FÁCIL
// ================================================================
// Consigna:
// 1. Completá `clasificarNumero(numero)` usando if/else: debe devolver
//    "positivo" si numero > 0, "negativo" si numero < 0, o "cero" si
//    numero === 0.
// 2. Completá `diaDeLaSemana(numero)` usando switch: recibe un número
//    del 1 al 7 y devuelve el nombre del día ("Lunes" a "Domingo").
//    Si el número no corresponde a ningún día, devolvé "Día inválido"
//    (usá el `default` del switch).
// 3. Completá `sumarHasta(n)` usando un `for`: debe devolver la suma
//    de todos los números enteros desde 1 hasta `n` (inclusive).
// 4. Completá `contarHaciaAtras(n)` usando un `while`: debe devolver
//    un array con los números desde `n` hasta 1, en orden descendente
//    (ej: contarHaciaAtras(3) devuelve [3, 2, 1]).
// ================================================================

function clasificarNumero(numero) {
  // TODO: completar con if/else if/else
}

function diaDeLaSemana(numero) {
  // TODO: completar con switch
}

function sumarHasta(n) {
  let suma = 0;
  // TODO: completar con un bucle for
  return suma;
}

function contarHaciaAtras(n) {
  let resultado = [];
  // TODO: completar con un bucle while
  return resultado;
}

// ------------------------------------
// CASOS DE PRUEBA
// ------------------------------------
console.assert(clasificarNumero(5) === "positivo", "clasificarNumero(5) debería ser positivo");
console.assert(clasificarNumero(-5) === "negativo", "clasificarNumero(-5) debería ser negativo");
console.assert(clasificarNumero(0) === "cero", "clasificarNumero(0) debería ser cero");

console.assert(diaDeLaSemana(1) === "Lunes", "diaDeLaSemana(1) debería ser Lunes");
console.assert(diaDeLaSemana(7) === "Domingo", "diaDeLaSemana(7) debería ser Domingo");
console.assert(diaDeLaSemana(99) === "Día inválido", "diaDeLaSemana(99) debería ser Día inválido");

console.assert(sumarHasta(5) === 15, "sumarHasta(5) debería ser 15 (1+2+3+4+5)");
console.assert(sumarHasta(1) === 1, "sumarHasta(1) debería ser 1");

console.assert(
  JSON.stringify(contarHaciaAtras(3)) === JSON.stringify([3, 2, 1]),
  "contarHaciaAtras(3) debería ser [3, 2, 1]"
);

console.log("Actividad Fácil de Control de Flujo: revisá la consola en busca de errores de assert.");
