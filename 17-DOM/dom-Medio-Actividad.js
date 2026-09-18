// ACTIVIDAD - MANIPULACIÓN DEL DOM (NIVEL MEDIO)
// Abrir dom-Medio-Actividad.html en el navegador y verificar interactuando con la UI.
//
// Consigna: construir una lista de tareas ("to-do list") con Event Delegation.
//
// 1) Seleccioná: #input-tarea, #btn-agregar y #lista.
//
// 2) Completá `crearItemTarea(texto)` que retorne (sin insertarlo todavía)
//    un elemento <li> con:
//      - textContent = texto
//      - un <button> hijo con textContent "x" y classList "btn-eliminar"
//    Pista: creá el <li>, creá el <button>, usá appendChild del botón
//    dentro del <li>, y retorná el <li>.
//
// 3) El botón "Agregar" debe, al hacer click:
//      - leer el valor de #input-tarea (`.value`)
//      - si está vacío (después de un `.trim()`), no hacer nada
//      - si tiene contenido: crear el item con `crearItemTarea` y
//        agregarlo a #lista, y luego vaciar el input (`input.value = ""`)
//
// 4) Implementá EVENT DELEGATION sobre #lista (un solo listener, NO uno por
//    cada <li>): al hacer click sobre un elemento con clase "btn-eliminar",
//    debe eliminarse el <li> padre de la lista.
//    Pista: `event.target` es el botón clickeado; `event.target.closest("li")`
//    devuelve el <li> ancestro más cercano.
//
// 5) Además, si el click fue directamente sobre el <li> (no sobre el botón),
//    debé alternar (toggle) la clase "completada" en ese <li>.

// TODO: paso 1
const input = null;
const btnAgregar = null;
const lista = null;

function crearItemTarea(texto) {
  // TODO: paso 2
}

// TODO: paso 3 - listener de btnAgregar

// TODO: paso 4 y 5 - listener de lista con delegación

// --- Verificación manual ---
console.assert(input !== null && btnAgregar !== null && lista !== null, "Faltan selecciones del paso 1");
const pruebaItem = typeof crearItemTarea === "function" ? crearItemTarea("prueba") : null;
console.assert(pruebaItem && pruebaItem.tagName === "LI", "crearItemTarea debe retornar un <li>");
console.assert(pruebaItem && pruebaItem.querySelector(".btn-eliminar"), "El <li> debe contener un botón .btn-eliminar");
console.log("Agregá 3 tareas desde la UI, eliminá una con el botón 'x' y marcá otra como completada haciendo click en el texto.");
