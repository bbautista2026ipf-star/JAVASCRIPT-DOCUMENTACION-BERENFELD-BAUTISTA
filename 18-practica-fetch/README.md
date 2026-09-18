# Módulo 18: Consumo de APIs con Fetch

---

## 1. `fetch()`: la base

`fetch(url)` retorna una **Promise** que resuelve con un objeto `Response` una vez que el servidor respondió (con los *headers*, no necesariamente con el cuerpo ya parseado).

```javascript
fetch("https://api.ejemplo.com/datos")
  .then((response) => response.json()) // parsea el body como JSON (retorna otra Promise)
  .then((data) => console.log(data))
  .catch((error) => console.log("Error de red:", error));
```

---

## 2. Promesas encadenadas vs `async/await`

| Estilo | Ventaja | Desventaja |
|---|---|---|
| `.then().then().catch()` | Explícito sobre el pipeline de transformación | Anidamiento si hay lógica condicional entre pasos ("callback hell" reducido pero presente) |
| `async/await` | Se lee como código síncrono, más legible | Requiere `try/catch` para manejar errores |

```javascript
// Equivalente con async/await
const obtenerDatos = async () => {
  try {
    const response = await fetch("https://api.ejemplo.com/datos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error de red:", error);
  }
};
```

`await` solo puede usarse dentro de una función declarada `async`.

---

## 3. Manejo de errores: la trampa de `fetch`

`fetch` **NO** rechaza la Promise ante errores HTTP (404, 500). Solo rechaza ante fallos de red (sin conexión, dominio inexistente). Por eso hay que verificar `response.ok` manualmente:

```javascript
const response = await fetch(url);
if (!response.ok) {
  throw new Error(`Error HTTP: ${response.status}`);
}
const data = await response.json();
```

| Propiedad de `Response` | Qué indica |
|---|---|
| `response.ok` | `true` si el status está entre 200-299 |
| `response.status` | Código numérico (200, 404, 500...) |
| `response.statusText` | Descripción textual del status |

---

## 4. Renderizar datos obtenidos en el DOM

Patrón típico: obtener datos → transformar en HTML → insertar en el contenedor.

```javascript
const cargar = async () => {
  const productos = await obtenerProductos();
  contenedor.innerHTML = productos
    .map((p) => `<div class="producto">${p.nombre}</div>`)
    .join("");
};
```

**Buena práctica:** evitar hacer `contenedor.innerHTML += "..."` dentro de un `forEach` (re-parsea todo el HTML en cada iteración, es O(n²)); preferir construir un string u array completo y asignarlo una sola vez.

---

## 5. `Promise.all`: fetches en paralelo

Cuando varias peticiones no dependen entre sí, `await` secuencial (una tras otra) desperdicia tiempo. `Promise.all` las dispara en paralelo y espera a que todas terminen:

```javascript
const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
```

---

## 6. Contenido de la carpeta

| Archivo | Contenido |
|---|---|
| `app.js` + `index.html` | Proyecto integrador existente (personajes de Harry Potter con modal) |
| `practica-fetch-Facil-Actividad.js` + `.html` | Actividad nueva, nivel fácil |
| `practica-fetch-Medio-Actividad.js` + `.html` | Actividad nueva, nivel medio |
| `practica-fetch-Dificil-Actividad.js` + `.html` | Actividad nueva, nivel difícil (socrática) |

Las actividades usan la API pública gratuita [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (no requiere API key). Para verificar: abrir el `.html` correspondiente en el navegador y revisar la consola (DevTools → Console).
