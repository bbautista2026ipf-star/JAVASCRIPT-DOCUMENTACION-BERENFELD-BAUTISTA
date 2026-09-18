# Módulo 12: Objeto `Date`

---

## 1. Definición

`Date` es un objeto nativo de JavaScript para representar y manipular fechas y horas. Internamente almacena un **timestamp**: la cantidad de milisegundos transcurridos desde el **1 de enero de 1970, 00:00:00 UTC** (la llamada "Época Unix" o *Unix Epoch*).

---

## 2. Formas de Creación

| Sintaxis                                  | Resultado                                          |
| ------------------------------------------ | --------------------------------------------------- |
| `new Date()`                               | Fecha y hora actuales                                |
| `new Date("2023-12-25")`                   | Parseada desde un string en formato ISO 8601         |
| `new Date(2023, 11, 25)`                   | Año, mes (0-indexado), día → 25/12/2023              |
| `new Date(2023, 11, 25, 14, 30)`           | + hora y minutos → 25/12/2023 14:30                  |
| `new Date(1703516400000)`                  | Desde un timestamp (milisegundos desde la época)     |

```javascript
const ahora = new Date();
const navidad = new Date(2023, 11, 25); // 25 de diciembre de 2023
const desdeTexto = new Date("2023-12-25");
```

---

## 3. ⚠️ La Trampa Clásica: `getMonth()` es 0-indexado

Los meses van de `0` (enero) a `11` (diciembre), **no** de 1 a 12. Es el error más común al trabajar con `Date`.

```javascript
const fecha = new Date(2023, 4, 15); // 4 = MAYO, no abril
console.log(fecha.getMonth()); // 4 (mayo), NO 5

// Para mostrar el mes "humano" hay que sumar 1:
console.log(fecha.getMonth() + 1); // 5
```

---

## 4. Métodos Getters

| Método          | Retorna                                      |
| ---------------- | --------------------------------------------- |
| `getFullYear()`  | Año de 4 dígitos (ej. `2023`)                 |
| `getMonth()`     | Mes, **0 a 11**                               |
| `getDate()`      | Día del mes, **1 a 31**                       |
| `getDay()`       | Día de la semana, **0 (domingo) a 6 (sábado)**|
| `getHours()`     | Hora, 0 a 23                                  |
| `getMinutes()`   | Minutos, 0 a 59                               |
| `getSeconds()`   | Segundos, 0 a 59                              |
| `getTime()`      | Timestamp en milisegundos desde la época      |

---

## 5. Métodos Setters

Permiten **mutar** el objeto `Date` existente modificando una de sus partes.

```javascript
const fecha = new Date(2023, 0, 1);
fecha.setFullYear(2024);
fecha.setMonth(5); // junio (index 5)
fecha.setDate(20);
console.log(fecha); // 20 de junio de 2024
```

| Método          | Modifica                |
| ---------------- | ------------------------ |
| `setFullYear()`  | Año                       |
| `setMonth()`     | Mes (0-11)                |
| `setDate()`      | Día del mes               |
| `setHours()`     | Hora                      |

---

## 6. Diferencia entre Fechas

Restar dos objetos `Date` produce la diferencia en **milisegundos** (se convierten implícitamente a su timestamp con `getTime()`).

```javascript
const inicio = new Date(2023, 0, 1);
const fin = new Date(2023, 0, 10);

const diferenciaMs = fin - inicio; // resta implícita vía getTime()
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);
console.log(diferenciaDias); // 9
```

---

## 7. Formateo Básico

```javascript
const fecha = new Date();

fecha.toDateString(); // "Mon Sep 18 2026" (formato legible, en inglés)
fecha.toLocaleDateString(); // formato según configuración regional (ej. "18/9/2026")
fecha.toLocaleDateString("es-AR"); // forzado a formato argentino
fecha.toISOString(); // "2026-09-18T00:00:00.000Z" (formato estándar ISO 8601, en UTC)
```

---

## 8. Comparación de Fechas

Los objetos `Date` se pueden comparar con operadores relacionales (`<`, `>`), porque se convierten a su timestamp numérico. **No** se pueden comparar con `===` (compara referencias de objeto, no valores).

```javascript
const hoy = new Date();
const mañana = new Date();
mañana.setDate(hoy.getDate() + 1);

console.log(mañana > hoy); // true
console.log(mañana === hoy); // false, aunque representaran el mismo instante
```
