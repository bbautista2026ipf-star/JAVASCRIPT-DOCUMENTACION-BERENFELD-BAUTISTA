# Módulo 04: Operadores y Estructuras de Control

---

## 1. Operadores Aritméticos y Asignación Compuesta

Además de las operaciones básicas (`+`, `-`, `*`, `/`), los operadores más utilizados en el desarrollo real son:

- **Módulo (`%`):** Devuelve el residuo de una división. Esencial para verificar paridad (`num % 2 === 0`) o ciclos.
- **Exponenciación (`**`):** Eleva una base a una potencia (ejemplo: `2 \*\* 3`resulta en`8`).
- **Asignación Compuesta (`+=`, `-=`, `*=`, `/=`):** Aplica la operación y reasigna el resultado en un solo paso (`x += 5` equivale a `x = x + 5`).
- **Incremento / Decremento (`++`, `--`):** Aumenta o disminuye en `1` el valor de una variable numérica (`contador++`).

---

## 2. Operadores Lógicos y Cortocircuito

- **`&&` (AND):** Retorna `true` únicamente si todas las condiciones son verdaderas.
- **`||` (OR):** Retorna `true` si al menos una de las condiciones es verdadera.
- **`!` (NOT):** Invierte el valor booleano (`!true` es `false`). La doble negación (`!!valor`) forza cualquier dato a su equivalente booleano estricto.

### Evaluación por Cortocircuito (_Short-circuit_)

JavaScript evalúa de izquierda a derecha y se detiene apenas conoce el resultado final:

- **`||` busca el primer valor _Truthy_:** Se usa para asignar valores por defecto.
  ```javascript
  const nombre = usuarioNombre || "Invitado"; // Si usuarioNombre es "" o null, asigna "Invitado"
  ```
