# 📘 Guía de Refuerzo: Funciones en JavaScript

## 🎯 Objetivos

- Repasar la definición y propósito de las funciones.
- Reconocer las diferentes formas de declarar funciones en JavaScript.
- Comprender el alcance (`scope`) y retorno de valores.
- Aplicar funciones en tareas prácticas (manipulación del DOM, almacenamiento, callbacks, etc.)

---

## 1. ¿Qué es una función?

Una función es un bloque de código que se puede reutilizar. Permite dividir un programa en partes más pequeñas y comprensibles.

```javascript
function saludar() {
  console.log("¡Hola!");
}
saludar(); // Invocación
```

---

## 2. Parámetros y retorno

### 🧪 Con parámetros

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}
saludar("Ana");
```

### 🔁 Con retorno

```javascript
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 5); // resultado: 8
```

---

## 3. Formas de declarar funciones

### ✅ Declaración clásica

```javascript
function multiplicar(x, y) {
  return x * y;
}
```

### ✅ Expresión de función

```javascript
const dividir = function (a, b) {
  return a / b;
};
```

### ✅ Funciones flecha (arrow function)

```javascript
const restar = (a, b) => a - b;
```

---

## 4. Funciones con arrays y objetos

### 📌 Guardar datos en un array

```javascript
let usuarios = [];

function registrarUsuario(nombre, email) {
  usuarios.push({ nombre, email });
}
```

### 📌 Recorrer con `forEach`

```javascript
usuarios.forEach((usuario) => {
  console.log(usuario.nombre);
});
```

---

## 5. Funciones y DOM

### 📌 Obtener valores de un formulario

```javascript
function obtenerNombre() {
  const nombre = document.getElementById("nombre").value;
  return nombre;
}
```

### 📌 Mostrar en pantalla

```javascript
function mostrarMensaje(mensaje) {
  document.getElementById("salida").textContent = mensaje;
}
```

---

## 6. Callbacks y funciones como parámetros

```javascript
function procesarEntrada(input, callback) {
  const salida = callback(input);
  console.log(salida);
}

function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}

procesarEntrada("hola mundo", convertirAMayusculas); // "HOLA MUNDO"
```

---

## 7. Alcance (scope)

```javascript
let mensaje = "global";

function mostrar() {
  let mensaje = "local";
  console.log(mensaje); // "local"
}
mostrar();
console.log(mensaje); // "global"
```

---

## 8. Buenas prácticas

- Usar nombres descriptivos para las funciones.
- Mantenerlas cortas y con una única responsabilidad.
- Reutilizarlas siempre que sea posible.

---

## 9. Actividades prácticas

1. **Formulario simple de contacto**: crear una función que capture nombre, email y mensaje, y lo almacene en un array.
2. **Calculadora**: sumar, restar, multiplicar y dividir usando funciones.
3. **Validación de campos**: verificar si un campo está vacío o si un email tiene formato válido.
4. **Contador de clics**: cada clic en un botón ejecuta una función que suma 1 y lo muestra en pantalla.
5. **Filtro de datos**: crear una función que reciba un arreglo de objetos y devuelva sólo los que cumplan cierta condición.

---

## 10. Recursos recomendados

- [MDN Web Docs – Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info – Fundamentos de funciones](https://es.javascript.info/function-basics)
- [Codewars](https://www.codewars.com) – Desafíos de práctica
