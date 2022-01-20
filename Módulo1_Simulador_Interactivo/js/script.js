// Armar un simulador interactivo, la estructura final de tu proyecto integrador.

// función principal
let compra = () => {
  // Consulta el producto a comprar
  let producto = prompt(
    "Ingrese el producto que desea comprar:\n-Teclado\n-Mouse\n-Auriculares\n-Monitor\n-Notebook"
  ).toUpperCase();
  //  Ciclo para validar que se ingrese un valor válido
  while (
    producto != "TECLADO" &&
    producto != "MOUSE" &&
    producto != "AURICULARES" &&
    producto != "MONITOR" &&
    producto != "NOTEBOOK"
  ) {
    producto = prompt(
      "Producto no disponible, ingrese el producto que desea comprar: \n-Teclado\n-Mouse\n-Auriculares\n-Monitor\n-Notebook"
    ).toUpperCase();
  }

  // Según producto se almacena el precio
  let precioProd = (prod) => {
    if (prod == "TECLADO") return 5000;
    if (prod == "MOUSE") return 2500;
    if (prod == "AURICULARES") return 7500;
    if (prod == "MONITOR") return 45000;
    if (prod == "NOTEBOOK") return 155000;
  };

  // Se obtiene el modo de pago
  let medioPago = prompt(
    "Eliga medio de pago:\nEF: Efectivo\nDEB: Débito\nTC: Crédito"
  ).toUpperCase();
  //  Ciclo para validar que se ingrese un valor válido
  while (medioPago != "EF" && medioPago != "DEB" && medioPago != "TC") {
    medioPago = prompt(
      "Medio de pago inexistente. Ingrese:\nEF: para efectivo\nDEB: para débito\nTC: para crédito"
    ).toUpperCase();
  }

  // Acá se empiezan a usar los datos obtenidos. En base al medio de pago se realiza un descuento sobre el valor del producto, el cual se muestra como alerta
  switch (medioPago) {
    case "EF":
      alert(
        `Por abonar en Efectivo tienes un descuento del 25%.\nProducto: ${producto} $${precioProd(
          producto
        )} - 25%.\nTotal a pagar = $${precioProd(producto) * 0.75}`
      );
      break;
    case "DEB":
      alert(
        `Por abonar con Tarjeta de Débito tienes un descuento del 15%.\nProducto: ${producto} $${precioProd(
          producto
        )} - 15%.\nTotal a pagar = $${precioProd(producto) * 0.85}`
      );
      break;
    case "TC":
      alert(
        `Por abonar con Tarjeta de Crédito tienes un descuento del 10%.\nProducto: ${producto} $${precioProd(
          producto
        )} - 10%.\nTotal a pagar = $${precioProd(producto) * 0.9}`
      );
      break;
  }
};

// Para iniciar el programa consulta si desea hacer una compra
let hacerCompra = confirm("Desea hacer una compra?");

// Si el valor es true inicia el ciclo, ejecutando la función principal para la compra y al final del proceso se vuelve a consultar si desea hacer otra compra, si acepta se repite el bucle sino finaliza.
while (hacerCompra == true) {
  compra();
  hacerCompra = confirm("Desea hacer una nueva compra?");
}
