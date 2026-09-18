// ACTIVIDAD - DEMO LOGIN (NIVEL FÁCIL)
//
// Consigna:
// Ejercicio de lógica pura (sin DOM todavía), pensado para Node o consola
// del navegador.
//
// 1) Completá `estaVacio(valor)`: retorna `true` si `valor` es un string
//    vacío o contiene sólo espacios (usá `.trim()`), `false` en caso
//    contrario.
//
// 2) Completá `validarCamposLogin(username, password)`: debe retornar
//    un objeto `{ esValido, mensaje }`.
//      - Si `username` está vacío: `{ esValido: false, mensaje: "El usuario es obligatorio" }`
//      - Si `password` está vacío: `{ esValido: false, mensaje: "La contraseña es obligatoria" }`
//      - Si ambos tienen contenido: `{ esValido: true, mensaje: "" }`
//    (usá `estaVacio` dentro de esta función).
//
// 3) Completá `simularPreventDefault(eventoFalso)`: recibe un objeto
//    `{ defaultPrevented: false }` simulando un evento, debe MUTARLO
//    poniendo `defaultPrevented` en `true` (simulando lo que hace
//    `event.preventDefault()` en un evento real de formulario).

function estaVacio(valor) {
  // TODO
}

function validarCamposLogin(username, password) {
  // TODO
}

function simularPreventDefault(eventoFalso) {
  // TODO
}

// --- Casos de prueba ---
console.assert(estaVacio("") === true, "Test 1 falló");
console.assert(estaVacio("   ") === true, "Test 2 falló");
console.assert(estaVacio("ana") === false, "Test 3 falló");

const r1 = validarCamposLogin("", "1234");
console.assert(r1.esValido === false && r1.mensaje === "El usuario es obligatorio", "Test 4 falló");

const r2 = validarCamposLogin("ana", "");
console.assert(r2.esValido === false && r2.mensaje === "La contraseña es obligatoria", "Test 5 falló");

const r3 = validarCamposLogin("ana", "1234");
console.assert(r3.esValido === true && r3.mensaje === "", "Test 6 falló");

const eventoFalso = { defaultPrevented: false };
simularPreventDefault(eventoFalso);
console.assert(eventoFalso.defaultPrevented === true, "Test 7 falló");

console.log("Actividad Fácil - Demo Login: si no viste errores arriba, ¡todo OK!");
