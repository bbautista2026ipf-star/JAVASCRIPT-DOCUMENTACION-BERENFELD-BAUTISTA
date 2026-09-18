# Módulo 07: Strings y Template Literals

---

## 1. Concatenación Tradicional vs Template Literals

Antes de ES6, concatenar variables dentro de un string obligaba a usar el operador `+`, algo propenso a errores y poco legible:

```javascript
let mensaje = "Hola " + nombre + ", tienes " + edad + " años.";
```

Los **template literals** (delimitados por comillas invertidas o *backticks* `` ` ``) permiten **interpolar expresiones** directamente dentro del string usando la sintaxis `${expresion}`:

```javascript
let mensaje = `Hola ${nombre}, tienes ${edad} años.`;
```

Cualquier expresión válida de JavaScript puede ir dentro de `${ }`: variables, operaciones, llamadas a funciones, ternarios.

```javascript
let a = 5, b = 3;
console.log(`La suma es ${a + b}`); // "La suma es 8"
console.log(`Es mayor de edad: ${edad >= 18 ? "sí" : "no"}`);
```

---

## 2. Ventajas de los Template Literals

| Característica | `+` (concatenación) | Template Literals |
|---|---|---|
| Interpolar variables | Requiere cortar el string | `${variable}` directo |
| Multilínea | Requiere `\n` o `+` | Salto de línea real dentro del string |
| Legibilidad | Baja con muchas variables | Alta |

### Strings multilínea

```javascript
const poema = `Primera línea
Segunda línea
Tercera línea`;
```

---

## 3. Métodos Útiles de Strings (repaso)

| Método | Uso |
|---|---|
| `.length` | Longitud del string |
| `.toUpperCase()` / `.toLowerCase()` | Cambia mayúsculas/minúsculas |
| `.trim()` | Elimina espacios al inicio y final |
| `.includes(texto)` | Verifica si contiene un substring |
| `.slice(inicio, fin)` | Extrae una porción del string |
| `.split(separador)` | Convierte el string en un array |
| `.replace(a, b)` | Reemplaza texto |

**Buena práctica:** preferir siempre template literals sobre concatenación con `+` cuando se combinan strings y variables, por legibilidad y menor probabilidad de errores de sintaxis.
