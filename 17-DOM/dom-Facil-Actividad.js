// ACTIVIDAD - MANIPULACIÓN DEL DOM (NIVEL FÁCIL)
// Abrir dom-Facil-Actividad.html en el navegador y verificar por consola/visualmente.
//
// Consigna:
// 1) Seleccioná el elemento con id "titulo" usando `getElementById` y
//    guardalo en la constante `titulo`.
// 2) Seleccioná el elemento con id "descripcion" usando `querySelector`
//    y guardalo en la constante `descripcion`.
// 3) Seleccioná el botón con id "btn-cambiar" y guardalo en `boton`.
// 4) Agregá un `addEventListener` de tipo "click" al botón que:
//      - cambie el `textContent` de `titulo` a "Título cambiado"
//      - cambie el `style.color` de `descripcion` a "blue"
// 5) Completá la función `agregarTarea(texto)` que:
//      - cree un elemento `<li>` con `createElement`
//      - le asigne `texto` como `textContent`
//      - lo agregue como hijo del elemento con id "lista-tareas" con `appendChild`
// 6) Debajo, llamá a `agregarTarea` tres veces con distintos textos.

// TODO: paso 1
const titulo = null;

// TODO: paso 2
const descripcion = null;

// TODO: paso 3
const boton = null;

// TODO: paso 4
// boton.addEventListener("click", () => { ... });

function agregarTarea(texto) {
  // TODO: paso 5
}

// TODO: paso 6 - llamar agregarTarea 3 veces

// --- Verificación manual (abrir en el navegador y revisar la consola) ---
console.assert(titulo !== null, "Falta seleccionar #titulo");
console.assert(descripcion !== null, "Falta seleccionar #descripcion");
console.assert(boton !== null, "Falta seleccionar #btn-cambiar");
console.log("Hacé click en el botón y confirmá visualmente los 2 cambios.");
console.log("Revisá que <ul id='lista-tareas'> tenga 3 elementos <li> agregados.");
