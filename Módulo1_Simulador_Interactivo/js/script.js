// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Incorporar objetos en donde sea necesario
// Agregar Array

// Array que almacena cada compra
const comprasTotales = [];

// Clase referenciando los datos de la compra
class CompraCte {
  constructor(producto, precio, medioPago, descuento) {
    this.producto = producto;
    this.precio = parseFloat(precio);
    this.medioPago = medioPago;
    this.descuento = descuento;
  }

  descripcionCompra() {
    alert(
      `Compraste: ${this.producto}.\nValor: $${this.precio}.\nPor abonar con '${
        this.medioPago
      }' tenes un descuento del ${this.descuento}%.\nPrecio final: $${
        this.precio - (this.precio * this.descuento) / 100
      }.`
    );
  }
}

let datosCompra = () => {
  // 1er dato: Se consulta el producto a comprar, mediante un while se verifica que "exista" dicho producto.
  let producto = prompt(
    "Ingrese el producto que desea comprar: \n-Teclado \n-Mouse \n-Auriculares \n-Monitor \n-Notebook"
  ).toUpperCase();
  while (
    producto != "TECLADO" &&
    producto != "MOUSE" &&
    producto != "AURICULARES" &&
    producto != "MONITOR" &&
    producto != "NOTEBOOK"
  ) {
    producto = prompt(
      "Producto no disponible, ingrese el producto que desea comprar: \n-Teclado \n-Mouse \n-Auriculares \n-Monitor \n-Notebook"
    ).toUpperCase();
  }

  // 2do dato: Con un switch se adquiere el precio del producto elegido
  let precio;
  switch (producto) {
    case "TECLADO":
      precio = 5000;
      break;
    case "MOUSE":
      precio = 2500;
      break;
    case "AURICULARES":
      precio = 7500;
      break;
    case "MONITOR":
      precio = 45000;
      break;
    case "NOTEBOOK":
      precio = 155000;
      break;
  }

  // 3er dato: Se consulta medio de pago, se valida que elija una opción correcta. (Se ingresa abreviado para evitar problemas con las tildes).
  let tipoPago = prompt(
    "Eliga medio de pago: \nEF: Efectivo \nDEB: Débito \nTC: Crédito"
  ).toUpperCase();
  while (tipoPago != "EF" && tipoPago != "DEB" && tipoPago != "TC") {
    tipoPago = prompt(
      "Medio de pago inexistente. Ingrese: \nEF: para efectivo \nDEB: para débito \nTC: para crédito"
    ).toUpperCase();
  }

  // 4to dato: En base al medio de pago elegido se retorna el descuento otorgado. (Se vuelve a settear 'tipoPago' para que retorne el nombre completo de medio de pago)
  let descuento;
  if (tipoPago == "EF") [(tipoPago = "Efectivo"), (descuento = 25)];
  if (tipoPago == "DEB") [(tipoPago = "Tarjeta de Débito"), (descuento = 15)];
  if (tipoPago == "TC") [(tipoPago = "Tarjeta de Crédito"), (descuento = 10)];

  // La función retorna los 4 datos necesarios para crear el objeto.
  return [producto, precio, tipoPago, descuento];
};

// Para iniciar el programa consulta si desea hacer una compra
let hacerCompra = confirm("Desea hacer una compra?");

// Si el valor es true inicia el ciclo, ejecutando la función principal para la compra
while (hacerCompra == true) {
  // Se toman los datos que retorna la función.
  let [producto, precio, tipoPago, descuento] = datosCompra();

  // Se crea objeto
  let compra1 = new CompraCte(producto, precio, tipoPago, descuento);
  
  // Se agrega al Array
  comprasTotales.push(compra1);

  // Se ejecuta el método que posee la clase para mostrar el detalle de la compra.
  compra1.descripcionCompra();

  // Por último se consulta si desea hacer nueva comprar, sino se cierra el ciclo.
  hacerCompra = confirm("Desea hacer una nueva compra?");
}

// Al finalizar el ciclo muestra el array con todos los objetos (compras) creados por consola.
console.log(comprasTotales);
