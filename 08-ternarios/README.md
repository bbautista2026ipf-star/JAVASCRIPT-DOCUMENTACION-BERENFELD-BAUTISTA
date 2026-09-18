# Módulo 08 — Operador Ternario

## 1. Definición

El **operador ternario** (`condición ? expr_verdadera : expr_falsa`) es el único operador de JavaScript que trabaja con tres operandos. Es una forma abreviada de una estructura `if/else` cuando ambas ramas retornan o asignan un valor.

```js
condicion ? expresionSiVerdadero : expresionSiFalso;
```

## 2. Equivalencia con if/else

| if / else | Ternario |
|---|---|
| Sentencia (statement), no retorna valor por sí misma | Expresión (expression), sí retorna un valor |
| Ocupa varias líneas | Cabe en una línea |
| Ideal para lógica con efectos secundarios múltiples | Ideal para asignar o retornar un valor condicional |

```js
// if/else
let categoria;
if (edad >= 18) {
  categoria = "Adulto";
} else {
  categoria = "Menor";
}

// ternario equivalente
const categoria2 = edad >= 18 ? "Adulto" : "Menor";
```

## 3. Ternarios anidados

Se pueden encadenar ternarios para resolver múltiples condiciones, simulando un `if/else if/else`:

```js
const rango = edad < 13 ? "Niño"
            : edad < 18 ? "Adolescente"
            : edad < 65 ? "Adulto"
            : "Adulto mayor";
```

### ⚠️ Buenas prácticas

- No anidar más de 2-3 niveles: la legibilidad se degrada rápido.
- Si el ternario anidado no cabe en una línea legible, usar `if/else if` o `switch`.
- Evitar ternarios con efectos secundarios (ej. `condicion ? funcionA() : funcionB()` está permitido, pero mezclar asignaciones y llamadas confunde).
- El ternario **no reemplaza** al `if` cuando no hay valor de retorno o asignación involucrado.

## 4. Casos de uso comunes

- Renderizado condicional (React, JSX).
- Asignación rápida de valores por defecto.
- Mensajes cortos según estado (logueado/no logueado, stock disponible/agotado).

```js
const stock = 0;
console.log(stock > 0 ? `Quedan ${stock} unidades` : "Sin stock");
```
