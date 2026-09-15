# 🏨 Actividad Práctica: Reserva de Hotel

## 🎯 Objetivo

Implementar funcionalidades utilizando funciones en JavaScript para registrar reservas de hotel a partir de un formulario HTML cargado por un recepcionista.

---

## 📝 Consignas

### 1. Captura de datos

- Crear una función `obtenerDatosHotel()` que devuelva un objeto con los valores ingresados:
  - nombre, dni, email, check-in, check-out, tipo de habitación, servicios adicionales (checkboxes), comentarios.
- Validar que los campos obligatorios no estén vacíos. Mostrar `alert()` si falta alguno.

### 2. Almacenamiento

- Crear un arreglo `reservasHotel` que almacene los objetos de reservas.
- Crear una función `agregarReservaHotel(reserva)` que agregue una reserva al arreglo.

### 3. Mostrar resultado

- Crear la función `mostrarReservaHotel(reserva)` que muestre el resumen de la última reserva en el `div` correspondiente.

### 4. Interacción

- Capturar el evento `submit` del formulario y usarlo para:
  - Prevenir el comportamiento por defecto.
  - Obtener los datos, validarlos y guardarlos.
  - Limpiar el formulario y mostrar la reserva.

### 5. Bonus (opcional)

- Mostrar la cantidad total de noches entre check-in y check-out.
- Filtrar reservas por tipo de habitación o servicios y mostrarlas en consola.

---

## ⏱️ Tiempo estimado

Duración sugerida: 1 hora y 45 minutos
