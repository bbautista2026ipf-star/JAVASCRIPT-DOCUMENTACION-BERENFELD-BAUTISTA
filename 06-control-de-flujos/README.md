# Módulo 06: Estructuras de Control de Flujo

---

## 1. Condicionales

### `if / else if / else`

Ejecuta un bloque de código solo si una condición es verdadera (`truthy`).

```javascript
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

### `switch`

Compara una expresión contra múltiples valores (`case`) usando igualdad estricta (`===`). Cada `case` requiere `break` para no continuar ejecutando los siguientes (comportamiento llamado **fall-through**).

```javascript
switch (dia) {
  case "Lunes":
    console.log("Inicio de semana");
    break;
  default:
    console.log("Día no reconocido");
}
```

---

## 2. Bucles (Loops)

| Estructura | Evalúa la condición | Ejecuta al menos una vez |
|---|---|---|
| `while` | Antes de cada iteración | No (si la condición es falsa desde el inicio, nunca entra) |
| `do...while` | Después de cada iteración | **Sí, siempre**, aunque la condición sea falsa |
| `for` | Antes de cada iteración | No |

### `while`

```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

### `do...while`

La diferencia clave frente a `while` es que el bloque se ejecuta **al menos una vez** porque la condición se evalúa al final, después de la primera pasada.

```javascript
let i = 0;
do {
  console.log(i); // se ejecuta aunque la condición sea falsa
  i++;
} while (i < 0);
```

### `for`

Ideal cuando se conoce de antemano el número de iteraciones. Reúne inicialización, condición e incremento en una sola línea.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## 3. Saltos (Jump Statements)

- **`break`**: interrumpe por completo un bucle o un `switch`, saliendo inmediatamente de la estructura.
- **`continue`**: salta el resto del código de la iteración actual y pasa directamente a la siguiente.
- **`return`**: dentro de una función, finaliza su ejecución y opcionalmente devuelve un valor.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;      // corta el bucle al llegar a 5
  if (i % 2 === 0) continue; // salta los pares
  console.log(i);
}
```
