# Módulo 05: Scope (Ámbito de Variables)

---

## 1. Definición

El **scope** determina desde qué región del código es accesible una variable. JavaScript resuelve el acceso mediante la **Scope Chain** (cadena de ámbitos): si una variable no existe en el ámbito actual, el motor la busca en el ámbito contenedor inmediato superior, y así sucesivamente hasta el ámbito global.

---

## 2. Tipos de Scope

| Tipo | Declaración | Accesible desde |
|---|---|---|
| **Global** | Fuera de toda función o bloque | Todo el programa |
| **Local / Función** | Dentro de una `function` | Solo dentro de esa función (y sus funciones anidadas) |
| **Bloque** | `let` / `const` dentro de `{ }` (`if`, `for`, `while`) | Solo dentro de ese bloque |

```javascript
let global = "accesible en todo el programa";

function ejemplo() {
  let local = "solo dentro de ejemplo()";
  if (true) {
    let deBloque = "solo dentro de este if";
  }
  // console.log(deBloque); ❌ ReferenceError
}
```

---

## 3. `var` vs `let`/`const`

`var` tiene scope de **función**, no de bloque: ignora los límites de `if`, `for`, `while`. `let` y `const` sí respetan el scope de bloque.

```javascript
if (true) {
  var x = 1;   // escapa del bloque
  let y = 2;   // queda encerrada en el bloque
}
console.log(x); // 1
console.log(y); // ❌ ReferenceError
```

---

## 4. Hoisting

El **hoisting** es el comportamiento por el cual las declaraciones se "elevan" al inicio de su ámbito durante la fase de compilación, antes de ejecutar el código línea por línea.

- `var` se hoistea e inicializa automáticamente con `undefined`: se puede referenciar antes de la línea de declaración sin error (aunque su valor sea `undefined`).
- `let` y `const` se hoistean pero **no se inicializan**: quedan en la **Temporal Dead Zone (TDZ)**, una región donde acceder a ellas lanza `ReferenceError`.

```javascript
console.log(a); // undefined (hoisting de var)
var a = 5;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;
```

---

## 5. Riesgos de las Variables Globales

- **Colisión de nombres:** cualquier parte del código puede sobrescribir una variable global, generando bugs difíciles de rastrear.
- **Acoplamiento:** funciones que dependen de variables globales son difíciles de testear y reutilizar de forma aislada.
- **Contaminación del entorno:** en el navegador, variables globales declaradas con `var` se cuelgan del objeto `window`.

**Buena práctica:** minimizar el uso de variables globales, preferir `const`/`let` de bloque, y encapsular datos dentro de funciones o módulos.

---

## 6. Closures (introducción)

Una función conserva acceso al scope en el que fue creada, incluso después de que ese scope "terminó" de ejecutarse. Esto es un **closure**.

```javascript
function contador() {
  let cuenta = 0;
  return function () {
    cuenta++;
    return cuenta;
  };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2 (recuerda "cuenta" entre llamadas)
```
