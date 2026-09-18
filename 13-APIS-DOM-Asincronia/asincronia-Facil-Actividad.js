// ACTIVIDAD - ASINCRONÍA: PROMESAS Y ASYNC/AWAIT (NIVEL FÁCIL)
//
// Consigna:
// 1. Completá la función `simularDescarga(archivo)` que retorne una Promesa envolviendo
//    un `setTimeout` de 1000ms, y al cumplirse el tiempo resuelva (`resolve`) con el
//    string `"${archivo} descargado"`.
// 2. Usá `.then()` para consumir `simularDescarga("foto.png")` e imprimir el resultado
//    por consola (guardá el resultado también en la variable `resultadoThen` dentro del
//    callback, para poder verificarlo en los tests).
// 3. Completá la función asíncrona `descargarConAwait(archivo)` que use `await` para
//    esperar `simularDescarga(archivo)` y RETORNE el resultado (no lo imprima).
// 4. Completá `simularDescargaConError(archivo, debeFallar)` que retorne una Promesa:
//    si `debeFallar` es `true`, debe rechazar (`reject`) con el string "Error al
//    descargar ${archivo}"; si es `false`, debe resolver igual que en el punto 1.
// 5. Escribí una función asíncrona `descargarSeguro(archivo, debeFallar)` que use
//    `try/catch` para llamar a `simularDescargaConError` y RETORNE el mensaje de éxito
//    o, en caso de error, retorne el string `"Manejado: " + mensajeDeError`.

// 1.
function simularDescarga(archivo) {
  // TODO
}

// 2.
let resultadoThen;
simularDescarga("foto.png").then((resultado) => {
  resultadoThen = resultado;
  console.log(resultado);
});

// 3.
async function descargarConAwait(archivo) {
  // TODO
}

// 4.
function simularDescargaConError(archivo, debeFallar) {
  // TODO
}

// 5.
async function descargarSeguro(archivo, debeFallar) {
  // TODO
}

// --- Casos de prueba (asíncronos: revisar consola tras unos segundos) ---
setTimeout(() => {
  console.assert(
    resultadoThen === "foto.png descargado",
    "resultadoThen debe confirmar la descarga de foto.png",
  );
}, 1200);

descargarConAwait("video.mp4").then((resultado) => {
  console.assert(
    resultado === "video.mp4 descargado",
    "descargarConAwait debe retornar el string de confirmación",
  );
});

descargarSeguro("audio.mp3", false).then((resultado) => {
  console.assert(
    resultado === "audio.mp3 descargado",
    "descargarSeguro sin fallo debe retornar el mensaje de éxito",
  );
});

descargarSeguro("audio.mp3", true).then((resultado) => {
  console.assert(
    resultado === "Manejado: Error al descargar audio.mp3",
    "descargarSeguro con fallo debe manejar el error con try/catch",
  );
});
