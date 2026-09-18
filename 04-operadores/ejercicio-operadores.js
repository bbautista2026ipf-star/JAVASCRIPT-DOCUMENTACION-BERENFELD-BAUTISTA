// ====================================================
// EJERCICIO 1: Asignación por Cortocircuito (|| y &&)
// ====================================================

// 1. Declará correoEntrada con el valor ""
let correoEntrada = "";

// 2. Declará correoFinal: toma correoEntrada o "usuario@email.com" por defecto
let correoFinal = correoEntrada || "usuario@email.com"; // Tu código acá;

// 3. Declará estaActivo con el valor true
let estaActivo = true;

// 4. Declará estadoSistema: evalúa con && para devolver "Sistema Operativo"
let estadoSistema = estaActivo || "Sistema Operativo"; // Tu código acá;

// ====================================================
// EJERCICIO 2: Calculadora de Precios (Operadores Compuestos)
// ====================================================

let precioBase = 5000;

// 1. Restá $1000 usando asignación compuesta (-=)
// Tu código acá
precioBase -= 1000;

// 2. Multiplicá por 1.21 usando asignación compuesta (*=)
// Tu código acá
precioBase *= 1.21;

// 3. Imprimí el valor final en consola
// Tu código acá
console.log(precioBase);

// ====================================================
// EJERCICIO 3: Control de Turnos (Módulo e Incremento)
// ====================================================

let numeroTurno = 15;

// 1. Incrementá numeroTurno en 1 usando ++
// Tu código acá
numeroTurno++;

// 2. Evaluar si es par usando % y === 0
let esVentanillaPar = numeroTurno % 2 === 0; // Tu código acá;

// 3. Imprimí Template Literal: `Turno actual: ${numeroTurno} | ¿Es par?: ${esVentanillaPar}`
// Tu código acá
console.log(`tu turno es el numero ${numeroTurno}`);
