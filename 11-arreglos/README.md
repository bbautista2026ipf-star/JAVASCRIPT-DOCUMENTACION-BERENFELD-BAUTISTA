# Módulo 11: Arreglos (Arrays)

---

## 1. Definición

Un **arreglo** es una colección ordenada de elementos, almacenada en una única variable y creada con la sintaxis literal `[]`. Puede contener valores de cualquier tipo (incluso mezclados) y su tamaño es dinámico.

```javascript
const frutas = ["manzana", "banana", "naranja"];
```

---

## 2. Acceso e Indexación

Cada elemento tiene un **índice** numérico que arranca en `0` (base 0). El último elemento está en la posición `length - 1`.

```javascript
console.log(frutas[0]); // "manzana"
console.log(frutas[frutas.length - 1]); // "naranja" (último elemento)
```

**Modificación por índice:** asignar un valor a una posición existente reemplaza el elemento (los arreglos son **mutables**).

```javascript
frutas[1] = "frutilla"; // reemplaza "banana"
```

---

## 3. Recorrido

### Con `for` tradicional y `.length`

```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(i, frutas[i]);
}
```

### Con métodos funcionales modernos

Los métodos de iteración funcional reciben un **callback** que se ejecuta por cada elemento, evitando el manejo manual de índices.

---

## 4. Tabla de Métodos Esenciales

| Método      | ¿Muta el original? | Retorna                          | Uso típico                                    |
| ----------- | ------------------- | --------------------------------- | ---------------------------------------------- |
| `push()`    | ✅ Sí                | Nuevo `length`                    | Agregar elemento(s) al final                   |
| `pop()`     | ✅ Sí                | El elemento eliminado             | Quitar el último elemento                      |
| `unshift()` | ✅ Sí                | Nuevo `length`                    | Agregar elemento(s) al inicio                  |
| `shift()`   | ✅ Sí                | El elemento eliminado             | Quitar el primer elemento                      |
| `sort()`    | ✅ Sí                | El mismo arreglo ordenado         | Ordenar (por defecto, orden lexicográfico)     |
| `splice()`  | ✅ Sí                | Array con los eliminados          | Insertar/eliminar en cualquier posición        |
| `slice()`   | ❌ No                | Nuevo arreglo (porción)           | Extraer una copia parcial sin alterar el original |
| `map()`     | ❌ No                | Nuevo arreglo transformado        | Transformar cada elemento                      |
| `filter()`  | ❌ No                | Nuevo arreglo filtrado            | Seleccionar elementos según condición          |
| `reduce()`  | ❌ No                | Un valor acumulado                | Reducir el arreglo a un único resultado        |
| `forEach()` | ❌ No                | `undefined`                       | Recorrer y ejecutar efectos (sin retornar)     |
| `find()`    | ❌ No                | El primer elemento que matchea    | Buscar un elemento según condición             |

---

## 5. La Trampa de `sort()`

`sort()` **muta** el arreglo original y, sin comparador, ordena convirtiendo los elementos a **string**. Esto rompe el orden numérico esperado.

```javascript
const numeros = [10, 1, 21, 2];
numeros.sort();
console.log(numeros); // [1, 10, 2, 21] ❌ orden alfabético, no numérico

// Buena práctica: siempre pasar un comparador para números
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 10, 21] ✅
```

---

## 6. Métodos Funcionales en Profundidad

```javascript
const numeros = [1, 2, 3, 4, 5];

// map() - transforma cada elemento, retorna un array nuevo (misma longitud)
const dobles = numeros.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter() - conserva solo los que cumplen la condición
const pares = numeros.filter((n) => n % 2 === 0); // [2, 4]

// reduce() - acumula un único valor recorriendo el array
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0); // 15

// find() - retorna el primer elemento que cumple, o undefined
const mayorQueTres = numeros.find((n) => n > 3); // 4

// forEach() - recorre con efectos secundarios, no retorna nada útil
numeros.forEach((n) => console.log(n));
```

---

## 7. Mutabilidad: `slice()` vs `splice()`

Confundir estos dos métodos es un error frecuente:

- `slice(inicio, fin)`: **no muta**, retorna una copia parcial.
- `splice(inicio, cantidadAEliminar, ...nuevosElementos)`: **muta** el arreglo original.

```javascript
const letras = ["a", "b", "c", "d"];

const copia = letras.slice(1, 3); // ["b", "c"] — letras queda intacto
letras.splice(1, 1, "X"); // letras ahora es ["a", "X", "c", "d"]
```

---

## 8. Desestructuración de Arreglos

```javascript
const colores = ["rojo", "verde", "azul", "amarillo"];
const [primero, segundo] = colores; // "rojo", "verde"
const [, , tercero] = colores; // saltea posiciones: "azul"
const [color1, ...resto] = colores; // color1 = "rojo", resto = ["verde","azul","amarillo"]
```
