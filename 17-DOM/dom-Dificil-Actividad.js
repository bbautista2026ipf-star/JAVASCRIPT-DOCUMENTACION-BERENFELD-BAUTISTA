// ACTIVIDAD - MANIPULACIÓN DEL DOM (NIVEL DIFÍCIL - SOCRÁTICO)
// Abrir dom-Dificil-Actividad.html en el navegador.
//
// ESCENARIO:
// Tenés un array de productos en memoria (más abajo). El objetivo es
// renderizarlos dentro de #contenedor-productos y permitir filtrarlos en
// tiempo real a medida que el usuario escribe en #filtro, SIN recargar
// la página y SIN duplicar nodos innecesariamente en cada tecla.
//
// No hay pasos numerados. Las preguntas de abajo son guía de pensamiento,
// no un checklist a copiar literal. Completá los TODO con tu propia lógica.
//
// PREGUNTAS PARA REFLEXIONAR ANTES DE ESCRIBIR CÓDIGO:
//
// - ¿Qué diferencia hay entre construir el HTML de la lista con innerHTML
//   concatenando strings vs. crear cada nodo con createElement? ¿Cuál es
//   más seguro si `nombre` viniera de un usuario? ¿Cuál es más simple de
//   escribir para una lista que se re-renderiza seguido?
//
// - Si cada vez que el usuario escribe una letra volvés a generar TODO el
//   HTML de la lista desde cero (borrar todo y reconstruir), ¿qué le pasa
//   a los event listeners que hayas agregado a los elementos anteriores
//   con `addEventListener` directo sobre cada <div> de producto? ¿Cómo te
//   protege de ese problema la Event Delegation (un único listener en
//   #contenedor-productos en vez de uno por producto)?
//
// - ¿Con qué evento del <input> conviene reaccionar en cada tecla:
//   "change" o "input"? ¿Qué diferencia de comportamiento notás entre
//   ambos si probás uno y después el otro?
//
// - ¿Cómo comparás el texto del filtro con el nombre de cada producto de
//   forma que "notebook" también encuentre "Notebook Gamer"? (pensá en
//   mayúsculas/minúsculas y en `.includes()`)
//
// - Al hacer click en un producto para "seleccionarlo" (agregarle una
//   clase "seleccionado"), ¿cómo identificás CUÁL producto del array
//   corresponde al elemento clickeado? Pensá en guardar el `id` del
//   producto como atributo de datos (`dataset`) en el nodo, y leerlo
//   después desde `event.target`.

const productos = [
  { id: 1, nombre: "Notebook Gamer", precio: 850000 },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 12000 },
  { id: 3, nombre: "Teclado Mecánico", precio: 45000 },
  { id: 4, nombre: "Monitor 24 pulgadas", precio: 180000 },
  { id: 5, nombre: "Notebook Ultrabook", precio: 920000 },
];

const contenedor = document.querySelector("#contenedor-productos");
const filtro = document.querySelector("#filtro");

function renderProductos(listaAMostrar) {
  // TODO: renderizar `listaAMostrar` dentro de `contenedor`.
  // Cada producto debe quedar en un <div class="producto" data-id="...">
  // mostrando nombre y precio. Definí primero si usás innerHTML o
  // createElement, y por qué.
}

// TODO: listener de `filtro` (evento "input") que filtre `productos`
// por nombre (case-insensitive, coincidencia parcial) y vuelva a
// llamar a `renderProductos` con el resultado filtrado.

// TODO: listener de `contenedor` (Event Delegation) que, al hacer click
// en un ".producto", le alterne (toggle) la clase "seleccionado".

renderProductos(productos);

// --- Verificación manual ---
console.log("Escribí 'notebook' en el filtro: deben quedar 2 productos visibles.");
console.log("Borrá el filtro: deben volver a verse los 5 productos.");
console.log("Hacé click sobre un producto: debe alternar la clase 'seleccionado'.");
console.assert(typeof renderProductos === "function", "Falta implementar renderProductos");
