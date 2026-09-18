// ================================================================
// ACTIVIDAD: CONTROL DE FLUJO — NIVEL DIFÍCIL (MODO SOCRÁTICO)
// ================================================================
// No hay instrucciones paso a paso. Hay un problema y preguntas.
// Pensá el algoritmo ANTES de escribir código.
//
// ESCENARIO:
// Un ascensor arranca en la planta baja (piso 0) de un edificio de
// 10 pisos (0 a 10). Recibe una lista ordenada de "llamadas" (pisos a
// los que gente lo llamó, en el orden en que se realizaron). El
// ascensor debe procesar las llamadas UNA POR UNA, pero:
//   - Si dos llamadas SEGUIDAS piden el mismo piso, la segunda se
//     ignora (no tiene sentido "llegar dos veces" al mismo piso
//     consecutivamente).
//   - Si en algún momento se recibe el piso especial -1 ("alarma de
//     emergencia"), el ascensor debe detener el procesamiento de
//     llamadas INMEDIATAMENTE, sin procesar ninguna llamada posterior.
//   - El resultado final es la lista de pisos efectivamente visitados,
//     en orden, SIN incluir el -1 de emergencia si aparece.
//
// Necesitás construir: procesarLlamadasAscensor(llamadas)
// que reciba un array de números y devuelva un array con los pisos
// visitados según las reglas de arriba.
//
// PREGUNTAS PARA REFLEXIONAR:
// 1. ¿Qué estructura de bucle te permite recorrer un array elemento
//    por elemento, en orden, con acceso al índice actual? ¿Por qué
//    necesitás el índice (y no alcanza con "recorrer los valores")
//    para poder comparar cada llamada con la ANTERIOR?
// 2. ¿Qué instrucción de salto usarías para "cortar todo el bucle de
//    inmediato" apenas aparece el piso -1? ¿Es la misma instrucción
//    que usarías para "saltear solo esta llamada y seguir con la
//    siguiente" en el caso de llamadas duplicadas consecutivas?
//    ¿Por qué son casos distintos?
// 3. Para detectar "la misma llamada que la anterior": ¿contra qué
//    tenés que comparar cada llamada? ¿Contra el último elemento que
//    pusiste en el resultado, o contra la llamada en la posición
//    anterior del array original? ¿Son siempre lo mismo? (pensalo con
//    el caso [3, 3, 5, 3])
// 4. ¿En qué orden tenés que chequear las dos condiciones (emergencia
//    vs. duplicado) dentro del bucle? ¿Puede una llamada ser -1 Y
//    además duplicada? ¿Qué condición "gana"?
// 5. ¿Cómo se comporta tu función si `llamadas` es un array vacío?
//    ¿Tu algoritmo lo maneja sin errores sin que tengas que agregar
//    un caso especial?
//
// Una vez que tengas el algoritmo pensado, completá la función.
// ================================================================

function procesarLlamadasAscensor(llamadas) {
  let visitados = [];
  // TODO: implementar el algoritmo que pensaste respondiendo las preguntas.
  return visitados;
}

// ------------------------------------
// CASOS DE PRUEBA (no los mires antes de intentar resolver el problema)
// ------------------------------------
console.assert(
  JSON.stringify(procesarLlamadasAscensor([1, 2, 3])) === JSON.stringify([1, 2, 3]),
  "Sin duplicados ni emergencia, se procesan todas"
);
console.assert(
  JSON.stringify(procesarLlamadasAscensor([3, 3, 5, 3])) === JSON.stringify([3, 5, 3]),
  "Solo se ignora el duplicado consecutivo inmediato, no los duplicados no consecutivos"
);
console.assert(
  JSON.stringify(procesarLlamadasAscensor([1, 2, -1, 5, 6])) === JSON.stringify([1, 2]),
  "Al encontrar -1 se corta el procesamiento y no se incluyen llamadas posteriores"
);
console.assert(
  JSON.stringify(procesarLlamadasAscensor([])) === JSON.stringify([]),
  "Array vacío debería devolver array vacío"
);
console.assert(
  JSON.stringify(procesarLlamadasAscensor([4, 4, 4, 4])) === JSON.stringify([4]),
  "Múltiples duplicados consecutivos colapsan en un solo piso"
);

console.log("Actividad Difícil de Control de Flujo: revisá la consola en busca de errores de assert.");
