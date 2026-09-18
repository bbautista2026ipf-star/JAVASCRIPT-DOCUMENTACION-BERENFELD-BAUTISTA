# Módulo 09 — Funciones y Argumentos

## 1. Tipos de funciones

### 1.1 Función declarativa (Function Declaration)

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

Gracias al **Hoisting**, las declaraciones de función se cargan por completo en memoria durante la fase de compilación, antes de ejecutar el código línea por línea. Esto permite invocarlas **antes** de su declaración textual:

```js
console.log(saludar("Ana")); // ✅ funciona
function saludar(nombre) { return `Hola, ${nombre}`; }
```

### 1.2 Función expresiva (Function Expression)

```js
const despedir = function (nombre) {
  return `Adiós, ${nombre}`;
};
```

Se asigna a una variable (`const`/`let`). Solo el nombre de la variable sufre hoisting (queda `undefined` hasta la asignación), **no** la función en sí. Por eso no puede invocarse antes de la línea donde se define (Temporal Dead Zone con `const`/`let`).

### 1.3 Arrow function (función flecha)

```js
const sumar = (a, b) => a + b;
```

Sintaxis concisa de función expresiva. Diferencias clave respecto a `function`:

| Característica | function tradicional | Arrow function |
|---|---|---|
| `this` propio | Sí | No (hereda del scope léxico externo) |
| Object `arguments` | Sí | No |
| Uso como constructor (`new`) | Sí | No |
| Hoisting | Sí (declarativa) | No |

### 1.4 IIFE (Immediately Invoked Function Expression)

```js
(function () {
  console.log("Se ejecuta al instante");
})();
```

Crea un ámbito (scope) privado inmediato, útil para evitar contaminar el espacio global.

## 2. Tipos de argumentos

### 2.1 Sin argumentos

```js
function saludoGenerico() {
  return "Hola!";
}
```

### 2.2 Obligatorios (posicionales)

```js
function dividir(a, b) {
  return a / b;
}
// dividir(10) -> b es undefined -> 10 / undefined = NaN
```

### 2.3 Con valores por defecto (Default Parameters)

```js
function suma(a = 0, b = 0) {
  return a + b;
}
suma();      // 0
suma(5);     // 5
suma(5, 3);  // 8
```

### 2.4 Rest parameters (`...args`)

Agrupa un número variable de argumentos en un array:

```js
function sumarTodos(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
sumarTodos(1, 2, 3, 4); // 10
```

## 3. Closure (Clausura)

Una función "recuerda" el **Scope Chain** (cadena de ámbitos) en el que fue creada, incluso después de que la función externa terminó de ejecutarse:

```js
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

const contar = crearContador();
console.log(contar()); // 1
console.log(contar()); // 2
```

`contador` no es accesible desde afuera, pero la función interna retenida en `contar` mantiene una referencia viva a esa variable: esto es un **Closure**. Se usa para encapsulamiento, memoización y fábricas de funciones.
