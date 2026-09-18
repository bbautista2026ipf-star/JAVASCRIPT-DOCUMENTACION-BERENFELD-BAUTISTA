// ACTIVIDAD - DEMO LOGIN (NIVEL MEDIO)
//
// Consigna:
// Ejercicio de lógica de validación con regex y reglas combinadas.
//
// 1) Completá `esEmailValido(email)`: retorna `true` si `email` cumple
//    un formato básico `algo@algo.algo` (usá una expresión regular),
//    `false` en caso contrario.
//
// 2) Completá `esPasswordSegura(password)`: retorna `true` SOLO SI
//    `password` cumple TODAS estas reglas:
//      - longitud mínima de 8 caracteres
//      - al menos una letra mayúscula
//      - al menos un número
//      - al menos un carácter especial de este set: !@#$%^&*
//    (podés resolverlo con varias regex o con una sola combinada).
//
// 3) Completá `validarFormularioRegistro({ email, password, passwordRepetida })`:
//    debe retornar un array de STRINGS con TODOS los errores encontrados
//    (puede haber más de uno a la vez). Reglas:
//      - si `esEmailValido(email)` es false -> agregar "Email inválido"
//      - si `esPasswordSegura(password)` es false -> agregar "Contraseña insegura"
//      - si `password !== passwordRepetida` -> agregar "Las contraseñas no coinciden"
//    Si no hay errores, debe retornar un array vacío `[]`.

function esEmailValido(email) {
  // TODO
}

function esPasswordSegura(password) {
  // TODO
}

function validarFormularioRegistro({ email, password, passwordRepetida }) {
  // TODO
}

// --- Casos de prueba ---
console.assert(esEmailValido("ana@mail.com") === true, "Test 1 falló");
console.assert(esEmailValido("ana@mail") === false, "Test 2 falló");
console.assert(esEmailValido("anamail.com") === false, "Test 3 falló");

console.assert(esPasswordSegura("Abcdef1!") === true, "Test 4 falló");
console.assert(esPasswordSegura("abcdefg1!") === false, "Test 5 falló (sin mayúscula)");
console.assert(esPasswordSegura("Abcdefgh!") === false, "Test 6 falló (sin número)");
console.assert(esPasswordSegura("Abcdefg1") === false, "Test 7 falló (sin especial)");
console.assert(esPasswordSegura("Ab1!") === false, "Test 8 falló (longitud)");

const errores1 = validarFormularioRegistro({
  email: "malformado",
  password: "abc",
  passwordRepetida: "xyz",
});
console.assert(errores1.length === 3, "Test 9 falló (deberían ser 3 errores)");

const errores2 = validarFormularioRegistro({
  email: "ana@mail.com",
  password: "Abcdef1!",
  passwordRepetida: "Abcdef1!",
});
console.assert(errores2.length === 0, "Test 10 falló (no debería haber errores)");

console.log("Actividad Media - Demo Login: si no viste errores arriba, ¡todo OK!");
