const NOMBRE_TIENDA = "CodeMarket";

let precioProductoRaw = "2500",
  descuentoRaw = "500",
  cuponTexto = "",
  envioEspecial = null;

let precio = Number(precioProductoRaw);
let descuento = Number(descuentoRaw);

let tieneCupon = Boolean(cuponTexto);

// Boolean(envioEspecial) va a dar false, porque los valores que son equivalente a falso son: "", null, undefined, 0, false.

if (precio > 1000) {
  let totalConDescuento = precio - descuento;
  console.log(`el total a pagar en ${NOMBRE_TIENDA} es $${totalConDescuento}`);
}
console.log(totalConDescuento);
// aca da error por el ambito de bloque

let compararValor = precioProductoRaw == precio; // true: '==' ignora los tipos y realiza coerción implícita (convierte "2500" a Number antes de comparar)
let compararValor2 = precioProductoRaw === precio; // false: '===' es estricto; compara tipo y valor sin convertir nada (String vs Number)
