# Módulo 14 — Refuerzo de Funciones

> Teoría consolidada. Para ejercicios guiados con formularios (reserva de hotel/vuelo) ver `guia-refuerzo-funciones.md`, `actividad-hotel/` y `actividad-vuelo/`.

## 1. Parámetros por defecto (Default Parameters)

Permiten asignar un valor a un parámetro cuando no se pasa argumento (o se pasa `undefined`).

```js
function saludar(nombre = "invitado") {
  return `Hola ${nombre}`;
}
saludar(); // "Hola invitado"
```

## 2. Rest y Spread

| Operador | Contexto | Efecto |
|---|---|---|
| Rest (`...args`) | En la firma de una función | Agrupa argumentos sobrantes en un array |
| Spread (`...arr`) | En una llamada o literal | Expande un iterable en elementos individuales |

```js
function sumarTodos(...numeros) {          // rest
  return numeros.reduce((acc, n) => acc + n, 0);
}
sumarTodos(1, 2, 3); // 6

const base = [1, 2];
const extendido = [...base, 3, 4];         // spread: [1, 2, 3, 4]
```

## 3. Closures

Un **closure** es la combinación de una función con las referencias a su entorno léxico (*scope chain*) en el momento de su creación. La función "recuerda" las variables de su scope exterior incluso después de que ese scope haya terminado de ejecutarse.

```js
function crearContador() {
  let contador = 0;
  return function incrementar() {
    contador++;
    return contador;
  };
}
const contar = crearContador();
contar(); // 1
contar(); // 2 — "contador" persiste entre llamadas
```

Usos típicos: encapsulamiento de estado privado, *factories* de funciones, `debounce`/`throttle`, manejadores de eventos con memoria propia.

## 4. Funciones de orden superior (Higher-Order Functions)

Una función es de orden superior si **recibe otra función como argumento** y/o **retorna una función**.

```js
function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}
aplicarOperacion(4, 2, (x, y) => x * y); // 8
```

Ejemplos nativos: `map`, `filter`, `reduce`, `forEach`, `sort`.

## 5. Recursividad

Una función recursiva se llama a sí misma hasta alcanzar un **caso base** que detiene la recursión. Toda función recursiva necesita:

1. Caso base (condición de corte).
2. Caso recursivo (llamada a sí misma acercándose al caso base).

```js
function factorial(n) {
  if (n <= 1) return 1;          // caso base
  return n * factorial(n - 1);   // caso recursivo
}
factorial(5); // 120
```

⚠️ Sin caso base o sin acercamiento a él: `RangeError: Maximum call stack size exceeded` (desborde de la *Call Stack*).

## 6. Buenas prácticas

- Preferir funciones puras (mismo input → mismo output, sin efectos secundarios) cuando sea posible.
- No abusar de closures que retengan referencias grandes en memoria innecesariamente (memory leaks).
- Evaluar siempre si una recursión puede resolverse de forma iterativa por costo de memoria (cada llamada apila un nuevo *stack frame*).

## 7. Actividades

| Archivo | Nivel | Foco |
|---|---|---|
| `refuerzo-funciones-Facil-Actividad.js` | Fácil | Default params, rest/spread básico |
| `refuerzo-funciones-Medio-Actividad.js` | Medio | Closures, funciones de orden superior |
| `refuerzo-funciones-Dificil-Actividad.js` | Difícil (socrático) | Recursividad + composición de conceptos |

## 8. Recursos recomendados

- [MDN – Funciones por defecto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN – Closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
- [MDN – Rest parameters](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)
