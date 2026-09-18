# Módulo 17: Manipulación del DOM

---

## 1. ¿Qué es el DOM?

El **DOM (Document Object Model)** es la representación en memoria del documento HTML como un árbol de objetos (nodos). El navegador parsea el HTML y construye esta estructura; JavaScript no modifica el archivo `.html` en disco, sino este árbol vivo que el navegador renderiza en tiempo real.

```
document
 └── html
      ├── head
      └── body
           ├── h1
           └── ul
                ├── li
                └── li
```

Cada etiqueta es un **nodo elemento**; el texto dentro de una etiqueta es un **nodo de texto**. `document` es la puerta de entrada a todo el árbol.

---

## 2. Selección de elementos

| Método | Retorna | Live/Static | Uso típico |
|---|---|---|---|
| `document.getElementById(id)` | Un elemento o `null` | — | Acceso directo por `id` único |
| `document.getElementsByTagName(tag)` | `HTMLCollection` | Live | Todos los elementos de una etiqueta |
| `document.getElementsByClassName(clase)` | `HTMLCollection` | Live | Todos los elementos con una clase |
| `document.querySelector(selectorCSS)` | El primer elemento que matchea o `null` | Static | Selector CSS arbitrario, un solo resultado |
| `document.querySelectorAll(selectorCSS)` | `NodeList` | Static | Selector CSS arbitrario, todos los resultados |

```javascript
const titulo = document.getElementById("titulo");
const primerBoton = document.querySelector(".btn");
const todosLosBotones = document.querySelectorAll(".btn");
```

`querySelectorAll` retorna un `NodeList`, que soporta `.forEach` pero **no** todos los métodos de array (`.map`, `.filter`) salvo que se convierta con `Array.from(nodeList)`.

---

## 3. Leer y cambiar contenido

| Propiedad | Qué hace | Riesgo |
|---|---|---|
| `textContent` | Lee/escribe el texto plano del nodo | Seguro: no interpreta HTML |
| `innerHTML` | Lee/escribe el HTML interno del nodo | Riesgo de **XSS** si el contenido viene de un usuario; se re-parsea el HTML completo |
| `innerText` | Similar a `textContent` pero respeta el CSS visible (más costoso) | Fuerza *reflow* |

```javascript
parrafo.textContent = "Texto seguro";
parrafo.innerHTML = "<strong>Texto con formato</strong>"; // usar solo con contenido confiable
```

**Buena práctica:** preferir `textContent` cuando no se necesita insertar etiquetas; nunca inyectar `innerHTML` con datos sin sanitizar provenientes de un input de usuario.

---

## 4. Modificar estilos y clases

```javascript
elemento.style.color = "red";           // estilo inline directo
elemento.style.backgroundColor = "black"; // camelCase para propiedades con guion

elemento.classList.add("activo");
elemento.classList.remove("oculto");
elemento.classList.toggle("nocturno");   // agrega si no está, quita si está
elemento.classList.contains("activo");   // true/false
```

**Buena práctica:** preferir `classList` (agregar/quitar clases CSS predefinidas) sobre `style` inline: separa la lógica del diseño visual (Separation of Concerns).

---

## 5. Crear, agregar y eliminar elementos dinámicamente

```javascript
const li = document.createElement("li");   // 1. crear el nodo (aún no existe en el DOM)
li.textContent = "Nuevo elemento";          // 2. darle contenido
contenedor.appendChild(li);                 // 3. insertarlo en el árbol

contenedor.removeChild(li);                 // eliminarlo (desde el padre)
li.remove();                                // forma moderna: el propio nodo se elimina
```

Otros métodos útiles: `prepend()` (inserta al inicio), `insertBefore(nuevo, referencia)`, `append()` (admite múltiples nodos o strings).

---

## 6. Eventos y `addEventListener`

```javascript
boton.addEventListener("click", (evento) => {
  console.log("Se hizo click en", evento.target);
});
```

| Concepto | Definición |
|---|---|
| **Event Listener** | Función que se ejecuta en respuesta a un evento (`click`, `input`, `change`, `submit`, `keydown`) |
| **Objeto Evento (`event`)** | Contiene información del evento: `event.target` (elemento que disparó el evento), `event.preventDefault()`, `event.stopPropagation()` |
| **Event Delegation** | En vez de agregar un listener a cada hijo, se agrega **uno solo al padre** y se identifica el hijo real mediante `event.target`. Aprovecha el **bubbling** (burbujeo): los eventos se propagan del nodo disparador hacia arriba en el árbol |

```javascript
// Event Delegation: un solo listener para N elementos, incluso los creados después
contenedor.addEventListener("click", (e) => {
  if (e.target.matches(".item-lista")) {
    e.target.classList.toggle("completado");
  }
});
```

**Ventaja de la delegación:** funciona para elementos agregados dinámicamente al DOM *después* de registrar el listener, y reduce el número de listeners en memoria.

---

## 7. Contenido de la carpeta

| Carpeta/Archivo | Contenido |
|---|---|
| `01_metodos_seleccion_elementos/` | Práctica guiada de selectores |
| `02_metodos_valores/` | Práctica guiada de atributos, estilos y `classList` |
| `03_modificacion/` | Práctica guiada de creación/inserción de nodos |
| `dragon-ball-project/`, `practica/` | Proyectos integradores |
| `dom-Facil-Actividad.js` + `dom-Facil-Actividad.html` | Actividad nueva, nivel fácil |
| `dom-Medio-Actividad.js` + `dom-Medio-Actividad.html` | Actividad nueva, nivel medio |
| `dom-Dificil-Actividad.js` + `dom-Dificil-Actividad.html` | Actividad nueva, nivel difícil (socrática) |
