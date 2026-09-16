### VARIABLES

## ¿Que es una variable?

# una variable representa un espacio concreto de la memoria del programa. analogicamente es una caja que guarda contenido, puede ser cualquier valor, segun vea tambien su tipo de dato.

# su valor puede ser modificado a lo largo del programa

### Módulo 02: Variables en JavaScript

# Módulo 02: Variables en JavaScript

**Diferencias entre `var`, `let` y `const`**

| Característica      | `var`                | `let`                | `const`                  |
| :------------------ | :------------------- | :------------------- | :----------------------- |
| **Alcance (Scope)** | Global o de función  | Bloque (`{}`)        | Bloque (`{}`)            |
| **Reasignación**    | Permitida            | Permitida            | No permitida (Constante) |
| **Redeclaración**   | Permitida            | No permitida         | No permitida             |
| **Inicialización**  | Opcional al declarar | Opcional al declarar | Obligatoria al declarar  |

---

**Formas de Inicialización**

- **Declaración y asignación en dos pasos:** `let ciudad; ciudad = "Buenos Aires";`
- **Declaración y asignación en un paso:** `let pais = "Argentina";`
- **Declaración múltiple:** `let a, b, c;`
- **Asignación múltiple:** `let x = 1, y = 2, z = 3;`

---

**Reglas de Nomenclatura y Convenciones**

- **Inicio válido:** Debe comenzar con una letra, guion bajo (`_`) o signo de dólar (`$`). No puede comenzar con números.
- **Sensibilidad a mayúsculas:** El lenguaje distingue minúsculas de mayúsculas (`nombre` y `Nombre` son distintas).
- **Palabras reservadas:** No se pueden utilizar términos propios del lenguaje como `if`, `for`, `class` o `const`.
- **Formatos:**
  - **`camelCase`:** Estándar recomendado para variables en JS (`let nombreCompleto = "Juan";`).
  - **`PascalCase`:** Utilizado principalmente para nombres de clases (`let NombreClase;`).
  - **`snake_case`:** Separado por guiones bajos (`let nombre_completo;`).
  - **`kebab-case`:** **No válido** en JS (`let nombre-completo;`), genera error de sintaxis al interpretarse como resta.

---

**Ámbito de las Variables (Scope)**

El ámbito determina en qué partes del programa una variable es visible y accesible.

- **Ámbito Global:** Variables declaradas fuera de cualquier función o bloque; accesibles en todo el programa.
- **Ámbito Local:** Variables declaradas dentro de una función; solo existen dentro de ella.
- **Ámbito de Bloque:** Variables declaradas con `let` o `const` dentro de llaves `{}` (`if`, `for`, `while`); solo son accesibles dentro de dicho bloque.
