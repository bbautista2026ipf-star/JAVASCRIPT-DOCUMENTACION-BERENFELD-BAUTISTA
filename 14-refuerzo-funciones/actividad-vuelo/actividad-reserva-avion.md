# ✈️ Actividad Práctica: Reserva de Pasajes de Avión

## 🎯 Objetivo

Implementar funcionalidades utilizando funciones en JavaScript para registrar reservas de pasajes aéreos desde un formulario HTML.

---

## 📝 Consignas

### 1. Captura de datos

- Crear una función `obtenerDatosAvion()` que devuelva un objeto con:
  - nombre, dni, teléfono, origen, destino, fecha, hora, clase, equipaje adicional.
- Validar los campos requeridos y alertar si falta alguno.

### 2. Almacenamiento

- Crear un arreglo `reservasAvion` para almacenar las reservas.
- Implementar la función `agregarReservaAvion(reserva)` que inserte la nueva reserva.

### 3. Mostrar resultado

- Implementar `mostrarReservaAvion(reserva)` para reflejar en pantalla los datos ingresados de la última reserva.

### 4. Interacción

- Asociar la lógica al evento `submit`:
  - Evitar el envío por defecto.
  - Capturar y validar los datos.
  - Guardar en el arreglo y mostrar resumen.

### 5. Bonus (opcional)

- Implementar filtrado por clase de vuelo y mostrarlo en consola.
- Contar cuántas reservas con equipaje adicional fueron registradas.

---

## ⏱️ Tiempo estimado

Duración sugerida: 1 hora y 45 minutos
