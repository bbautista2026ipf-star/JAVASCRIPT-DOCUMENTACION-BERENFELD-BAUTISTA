# Módulo 10 — Objetos

## 1. Definición

Un **objeto** es una estructura de datos clave-valor (colección de pares `propiedad: valor`), definida con llaves `{}`. Es el tipo de dato fundamental de JavaScript para representar entidades del mundo real.

```js
const persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: false,
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};
```

- **Propiedades**: pares clave-valor que almacenan datos (`nombre`, `edad`).
- **Métodos**: propiedades cuyo valor es una función (`saludar`), permiten definir comportamiento del objeto.

## 2. Acceso a propiedades

| Notación | Sintaxis | Cuándo usarla |
|---|---|---|
| Punto | `persona.nombre` | Cuando la clave es conocida y es un identificador válido |
| Corchetes | `persona["nombre"]` | Cuando la clave es dinámica (variable) o tiene caracteres especiales |

```js
const clave = "edad";
console.log(persona[clave]); // 30 -> notación de punto no permite esto
```

## 3. Mutabilidad: agregar y eliminar propiedades

Los objetos son **mutables**: se pueden modificar sus propiedades incluso si fueron declarados con `const` (la referencia es constante, no el contenido).

```js
persona.profesion = "Programador"; // agregar
persona["edad"] = 31;              // modificar
delete persona.profesion;          // eliminar
```

## 4. Recorrer objetos

```js
for (const clave in persona) {
  console.log(clave, persona[clave]);
}

Object.keys(persona);   // ["nombre", "edad", "esEstudiante", "saludar"]
Object.values(persona); // ["Juan", 30, false, function]
Object.entries(persona); // [["nombre","Juan"], ["edad",30], ...]
```

## 5. Desestructuración de objetos (Destructuring)

Extrae propiedades de un objeto y las asigna a variables individuales:

```js
const { nombre, edad } = persona;
```

### 5.1 Con valor por defecto

Si la propiedad no existe, se usa el valor indicado:

```js
const { profesion = "Sin especificar" } = persona;
```

### 5.2 Con alias (renombrar)

```js
const { nombre: primerNombre } = persona;
console.log(primerNombre); // "Juan"
```

### 5.3 Alias + valor por defecto combinados

```js
const { profesion: oficio = "Sin especificar" } = persona;
```

### 5.4 Desestructuración anidada

```js
const usuario = { datos: { pais: "Argentina" } };
const { datos: { pais } } = usuario;
```

## 6. Buena práctica

Preferir desestructuración sobre acceso repetido a la misma propiedad (`obj.x`, `obj.y`, `obj.z`) mejora la legibilidad y reduce la Complejidad Ciclomática visual del código.
