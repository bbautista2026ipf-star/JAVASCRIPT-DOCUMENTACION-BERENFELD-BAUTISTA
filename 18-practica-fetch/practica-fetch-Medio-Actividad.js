// ACTIVIDAD - FETCH (NIVEL MEDIO)
// Abrir practica-fetch-Medio-Actividad.html en el navegador y revisar consola + pantalla.
// API usada: https://jsonplaceholder.typicode.com/users
//
// Consigna: usar async/await con manejo explícito de errores HTTP.
//
// 1) Completá `obtenerUsuarios()` (async) que:
//      - haga fetch a "https://jsonplaceholder.typicode.com/users"
//      - verifique `response.ok`; si es falso, lance un `Error` con
//        mensaje `"Error HTTP: " + response.status`
//      - retorne el array de usuarios parseado
//
// 2) Completá `poblarSelector(usuarios)` que:
//      - por cada usuario cree una `<option value="ID">NOMBRE</option>`
//      - inserte todas las options dentro de #selector-usuario de una sola vez
//
// 3) Completá `obtenerUsuarioPorId(id)` (async) que:
//      - haga fetch a `"https://jsonplaceholder.typicode.com/users/" + id`
//      - verifique `response.ok` igual que en el paso 1
//      - retorne el usuario parseado
//
// 4) Agregá un listener "change" a #selector-usuario que:
//      - lea el `.value` seleccionado
//      - llame a `obtenerUsuarioPorId` con ese id
//      - muestre nombre, email y ciudad (`address.city`) en #contenedor-usuario
//      - si algo falla (try/catch), muestre el mensaje de error en #mensaje-error
//        y limpie #contenedor-usuario
//
// 5) Completá `iniciar()` para: obtener usuarios, poblar el selector, y
//    disparar manualmente la carga del primer usuario (podés simular un
//    evento "change" o llamar directamente a la lógica del paso 4).

const selector = document.querySelector("#selector-usuario");
const contenedorUsuario = document.querySelector("#contenedor-usuario");
const mensajeError = document.querySelector("#mensaje-error");

async function obtenerUsuarios() {
  // TODO: paso 1
}

function poblarSelector(usuarios) {
  // TODO: paso 2
}

async function obtenerUsuarioPorId(id) {
  // TODO: paso 3
}

// TODO: paso 4 - listener "change" de selector

async function iniciar() {
  // TODO: paso 5
}

iniciar();

// --- Verificación manual ---
console.assert(typeof obtenerUsuarios === "function", "Falta obtenerUsuarios");
console.assert(typeof obtenerUsuarioPorId === "function", "Falta obtenerUsuarioPorId");
console.log("El selector debe poblarse con 10 usuarios y mostrar los datos del primero.");
console.log("Cambiá la selección: los datos mostrados deben actualizarse.");
