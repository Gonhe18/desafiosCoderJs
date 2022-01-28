// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Incorporar objetos en donde sea necesario
// Agregar Array

// Array de objetos con los productos que se comercializan.
const productos = [
  {
    ref: "TECLADO",
    marca: "HyperX",
    modelo: "Alloy Origins Core RGB",
    precio: 8190,
  },
  {
    ref: "MOUSE",
    marca: "HyperX",
    modelo: "PulseFire Raid",
    precio: 2999,
  },
  {
    ref: "AURICULARES",
    marca: "Corsair",
    modelo: "Virtuoso RGB",
    precio: 26290,
  },
  {
    ref: "MONITOR",
    marca: "Samsung",
    modelo: "G50 Curco 144Hz",
    precio: 39190,
  },
  {
    ref: "NOTEBOOK",
    marca: "Asus",
    modelo: "X515EA",
    precio: 99990,
  },
];

// Array de objetos con los medios de pagos y respectivos descuentos.
const medioDePago = [
  {
    ref: "EF",
    medioPago: "Efectivo",
    descuento: 25,
  },
  {
    ref: "TC",
    medioPago: "Tarjeta de Crédito",
    descuento: 15,
  },
  {
    ref: "DEB",
    medioPago: "Tarjeta de Débito",
    descuento: 10,
  },
];

// Array que almacena cada compra
const comprasTotales = [];

// Clase referenciando los datos de la compra
class CompraCte {
  constructor(
    categoria,
    marca,
    modelo,
    precioReal,
    precioDesc,
    medioPago,
    descuento
  ) {
    this.categoria = categoria;
    this.marca = marca;
    this.modelo = modelo;
    this.precioReal = parseFloat(precioReal);
    this.precioDesc = parseFloat(precioDesc);
    this.medioPago = medioPago;
    this.descuento = descuento;
  }

  descripcionCompra() {
    alert(
      `Compraste: ${this.categoria} - ${this.marca} ${
        this.modelo
      } \nValor: $${this.precioReal} \nPor abonar con '${
        this.medioPago
      }' tenes un descuento del ${
        this.descuento
      }% \nPrecio final: $${this.precioDesc.toFixed(2)}`
    );
  }
}

// Función principal, desde donde se obtienen todos los datos.
let datosCompra = () => {
  // Función que me permite filtrar por el producto elegido y obtener sus datos
  let filtro = (arr, prod) => {
    return arr.find((el) => el.ref == prod);
  };

  //            PRODUCTO
  // Consulto el producto que se desea comprar
  let producto = prompt(
    "Ingrese el producto que desea comprar: \n-Teclado \n-Mouse \n-Auriculares \n-Monitor \n-Notebook"
  ).toUpperCase();

  // Ejecuto filtro y almaceno objeto completo
  let prodCompra = filtro(productos, producto);

  // Creo ciclo para validar que se ingrese un producto correcto
  while (prodCompra == undefined) {
    producto = prompt(
      "Producto no disponible, ingrese el producto que desea comprar: \n-Teclado \n-Mouse \n-Auriculares \n-Monitor \n-Notebook"
    ).toUpperCase();
    prodCompra = filtro(productos, producto);
  }

  //            PAGO
  // Solicito la referencia del tipo de pago
  let tipoPago = prompt(
    "Eliga medio de pago: \nEF: Efectivo \nDEB: Débito \nTC: Crédito"
  ).toUpperCase();

  // Ejecuto nuevamente el filtro pero para obtener el tipo de pago y descuento correspondiente
  let canalPago = filtro(medioDePago, tipoPago);

  // Validación de que se ingrese dato correcto
  while (canalPago == undefined) {
    tipoPago = prompt(
      "Medio de pago inexistente. Ingrese: \nEF: para efectivo \nDEB: para débito \nTC: para crédito"
    ).toUpperCase();
    canalPago = filtro(medioDePago, tipoPago);
  }

  // Retorno el objeto completo del producto y del medio de pago.
  return [prodCompra, canalPago];
};

// Para iniciar el programa consulto si desea hacer una compra
let hacerCompra = confirm("Desea hacer una compra?");

// Si el valor es true inicia el ciclo, ejecutando la función principal para la compra
while (hacerCompra == true) {
  // Se toman los datos que retorna la función.
  let [prodCompra, canalPago] = datosCompra();

  // Almaceno el precio del producto con descuento (lo hago acá para poder usar esa variable, ya que sino solo puedo manipular el precio real).
  let precioFinal =
    prodCompra.precio - (prodCompra.precio * canalPago.descuento) / 100;

  // Se crea objeto
  let compra1 = new CompraCte(
    prodCompra.ref,
    prodCompra.marca,
    prodCompra.modelo,
    prodCompra.precio,
    precioFinal,
    canalPago.medioPago,
    canalPago.descuento
  );

  // Se agrega al Array
  comprasTotales.push(compra1);

  // Se ejecuta el método que posee la clase para mostrar el detalle de la compra.
  compra1.descripcionCompra();

  // Por último se consulta si desea hacer nueva comprar, sino se cierra el ciclo.
  hacerCompra = confirm("Desea hacer una nueva compra?");
}

// Al finalizar el ciclo, si existió una compra muestro el array con todos los objetos (compras) creados por consola y el saldo total que se abonó. Si no se compró nada emito un msj indicandolo.
if (comprasTotales != "") {
  let sumaTotal = comprasTotales.reduce(
    (acc, prod) => acc + prod.precioDesc,
    0
  );
  console.log(comprasTotales);
  console.log(`Se compraron ${comprasTotales.length} productos. El total a abonar: $${sumaTotal.toFixed(2)}`);
} else {
  console.log("No se ha realizado ninguna compra");
}
