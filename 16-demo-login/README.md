# Módulo 16 — Demo de Login (Formularios, Validación y Eventos)

> Proyecto de referencia: `index.html` + `script.js` — formulario de login que compara credenciales contra un array simulando una base de datos.

## 1. El evento `submit` y `preventDefault`

Por defecto, un `<form>` recarga la página al enviarse. `event.preventDefault()` cancela ese comportamiento para poder manejar el envío con JavaScript.

```js
const form = document.querySelector("#form-login");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // lógica de validación / autenticación aquí
});
```

## 2. Captura de valores de inputs

```js
const usuario = form.user.value;      // acceso vía name del input
const password = document.getElementById("password").value;
```

## 3. Validación de campos

| Validación | Ejemplo |
|---|---|
| Campo vacío | `if (valor.trim() === "") { ... }` |
| Longitud mínima | `valor.length >= 8` |
| Formato (regex) | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)` |

Buenas prácticas: validar tanto en el `submit` (antes de procesar) como, idealmente, en tiempo real (`input`/`blur`) para dar feedback temprano.

## 4. Feedback visual en el DOM

Patrón usado en `script.js`: una función reutilizable que inyecta un mensaje de alerta con clase dinámica según el tipo (`danger`, `success`, `warning`).

```js
const showAlert = (contenedor, mensaje, tipo = "danger") => {
  contenedor.innerHTML = `<div class="alert alert-${tipo}">${mensaje}</div>`;
};
```

## 5. Simulación de autenticación en el cliente

`Array.prototype.find()` para buscar coincidencia de credenciales contra un array de usuarios "hardcodeado":

```js
const usuarioValido = users.find(
  (u) => u.username === username && u.password === password,
);
```

⚠️ **Esto es sólo demostrativo.** En una aplicación real, las contraseñas NUNCA se comparan en el cliente ni se guardan en texto plano: la autenticación se hace contra un backend, con hashing (bcrypt, argon2) y HTTPS.

## 6. Manejo de eventos: buenas prácticas

- Usar `addEventListener`, no atributos inline (`onclick="..."`).
- Delegar eventos en el contenedor padre cuando los elementos hijos son dinámicos (Event Delegation).
- Limpiar/resetear el formulario o mensajes de error cuando corresponda.

## 7. Actividades

| Archivo | Nivel | Foco |
|---|---|---|
| `demo-login-Facil-Actividad.js` | Fácil | Validación de campos vacíos, `preventDefault` |
| `demo-login-Medio-Actividad.js` | Medio | Regex, múltiples reglas de validación, feedback DOM |
| `demo-login-Dificil-Actividad.js` | Difícil (socrático) | Diseño de sistema de validación extensible |

> Actividades standalone pensadas para pegar en la consola del navegador sobre una página con inputs de prueba (cada archivo indica qué elementos HTML asumir/crear), o para adaptar directamente sobre `index.html` de este módulo.

## 8. Recursos recomendados

- [MDN – Form validation](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [MDN – preventDefault](https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
- [MDN – Expresiones regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)
