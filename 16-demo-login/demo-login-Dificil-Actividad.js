// ACTIVIDAD - DEMO LOGIN (NIVEL DIFÍCIL - SOCRÁTICO)
//
// Escenario:
// El `script.js` de este módulo valida un login con reglas fijas escritas
// "a mano" dentro del listener de submit. Si mañana el formulario de
// registro necesita 5 reglas nuevas, o el equipo quiere reusar la misma
// validación en otro formulario, ese código no escala.
//
// Tu tarea es diseñar un pequeño MOTOR DE VALIDACIÓN genérico. No hay
// pasos numerados: las preguntas te guían, vos tomás las decisiones de
// diseño.

// ── Parte 1: representar una regla de validación ─────────────────────────
// Preguntas para pensar:
//   - Una regla necesita: un campo al que aplica, una condición que
//     determina si el valor es válido, y un mensaje de error. ¿Cómo
//     representarías eso como un objeto de JavaScript?
//   - ¿La condición debería ser un valor fijo o una FUNCIÓN? ¿Por qué
//     una función te da más flexibilidad acá?
// TODO: definí la forma de un objeto "regla", por ejemplo con esta pinta
// (podés cambiar los nombres si tu razonamiento te lleva a algo mejor):
//   { campo: "email", condicion: (valor) => ..., mensaje: "..." }

// ── Parte 2: motor que aplica reglas ──────────────────────────────────────
// Preguntas para pensar:
//   - Si tenés un array de reglas y un objeto con los datos del
//     formulario, ¿qué función de array te permite recorrer las reglas
//     y quedarte sólo con las que fallaron?
//   - ¿Cómo accedés dinámicamente a `datos[regla.campo]` en vez de
//     escribir `datos.email`, `datos.password`, etc. a mano?
//   - ¿Qué deberías retornar: sólo un booleano, o también el detalle de
//     qué falló y por qué? ¿Qué es más útil para quien use tu motor?
function validarConReglas(datos, reglas) {
  // TODO: debe retornar un array de mensajes de error (uno por cada
  // regla cuya condición NO se cumple para el campo correspondiente).
  // Array vacío significa "todo válido".
}

// ── Parte 3: aplicarlo al caso del login ──────────────────────────────────
// Preguntas para pensar:
//   - Con tu motor ya armado, ¿cómo describirías las reglas del login
//     original (usuario y contraseña obligatorios) como DATOS (un array
//     de reglas) en vez de como código imperativo (if/else)?
//   - Si ahora quisieras agregar una regla "el usuario no puede tener
//     espacios", ¿tendrías que tocar `validarConReglas`? ¿Por qué eso es
//     una señal de buen diseño (o de mal diseño)?
const reglasLogin = [
  // TODO: array de reglas usando la forma que definiste en la Parte 1,
  // para los campos "username" y "password" (ambos obligatorios).
];

// --- Casos de prueba ---
const datosOk = { username: "ana", password: "1234" };
const datosMal = { username: "", password: "" };

const erroresOk = validarConReglas(datosOk, reglasLogin);
const erroresMal = validarConReglas(datosMal, reglasLogin);

console.assert(erroresOk.length === 0, "Test 1 falló: con datos completos no debería haber errores");
console.assert(erroresMal.length === reglasLogin.length, "Test 2 falló: con datos vacíos deberían fallar todas las reglas definidas");

console.log("Actividad Difícil - Demo Login: revisá los asserts. Si algo falla, releé las preguntas guía de esa sección.");
