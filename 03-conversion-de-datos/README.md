# Módulo 03: Conversión de Datos (Type Casting y Coerción)

La conversión de datos es el proceso de transformar un valor de un tipo a otro. Ocurre de dos formas: **explícita** (hecha a propósito en el código) e **implícita** (realizada automáticamente por el lenguaje).

---

## 1. Conversión Explícita (Type Casting)

Transformación manual mediante funciones nativas de JavaScript.

| Función            | Entrada de ejemplo                                           | Resultado                                     |
| :----------------- | :----------------------------------------------------------- | :-------------------------------------------- |
| **`Number(val)`**  | `"100"` / `true` / `false` / `null` / `undefined` / `"hola"` | `100` / `1` / `0` / `0` / `NaN` / `NaN`       |
| **`String(val)`**  | `100` / `true` / `null` / `undefined`                        | `"100"` / `"true"` / `"null"` / `"undefined"` |
| **`Boolean(val)`** | Cualquier valor                                              | `true` o `false`                              |

- **`parseInt("10.55")`:** Devuelve `10` (convierte a entero ignorando decimales).
- **`parseFloat("10.55")`:** Devuelve `10.55` (conserva decimales).

---

## 2. Valores Truthy y Falsy

Cualquier valor se evalúa automáticamente como `true` o `false` al evaluarse en contexto booleano (por ejemplo, dentro de una condición `if`).

- **Valores Falsy (Los únicos 6 en todo el lenguaje):**
  - `false`
  - `0`
  - `""` (string vacío)
  - `null`
  - `undefined`
  - `NaN` (_Not a Number_)

- **Valores Truthy:** Absolutamente todo lo demás (incluye `"0"`, `" "`, `[]`, `{}`, y números negativos).

---

## 3. Conversión Implícita (Type Coercion)

Ocurre automáticamente al realizar operaciones entre tipos distintos.

- **Suma (`+`) con Strings:** Prioriza la concatenación. Si hay un texto, convierte todo a texto.
  - `"5" + 2` $\rightarrow$ `"52"`
  - `true + " días"` $\rightarrow$ `"truedías"`
- **Operadores aritméticos (`-`, `*`, `/`, `%`):** Priorizan las matemáticas y convierten el texto a número.
  - `"10" - 2` $\rightarrow$ `8`
  - `"5" * "2"` $\rightarrow$ `10`
  - `"hola" - 2` $\rightarrow$ `NaN`
- **Comparaciones (`==` vs `===`):**
  - `==` (Igualdad débil): Fuerza la conversión de tipos antes de comparar (`"5" == 5` da `true`).
  - `===` (Igualdad estricta): Compara tipo y valor sin convertir nada (`"5" === 5` da `false`). **Usá siempre `===`.**
