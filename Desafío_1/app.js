// Consigna: Crear un algoritmo utilizando un ciclo

let num1 = parseInt(prompt("Ingrese su primer número:"));
let num2 = parseInt(prompt("Ingrese su segundo número:"));
let operador = parseInt(
  prompt(
    "Ingrese el n° de la operación que desea realizar.\n1-Suma\n2-Resta\n3-División\n4-Multiplicación"
  )
);
let resultado;

while (operador != 1 && operador != 2 && operador != 3 && operador != 4) {
  operador = parseInt(
    prompt(
      "Opción incorrecta, recuerde solo ingresar el n° de la operación que desea realizar \n1-Suma\n2-Resta\n3-División\n4-Multiplicación"
    )
  );
}

switch (operador) {
  case 1:
    resultado = num1 + num2;
    console.log(`El resultado de ${num1} + ${num2} es: ${resultado}`);
    break;
  case 2:
    resultado = num1 - num2;
    console.log(`El resultado de ${num1} - ${num2} es: ${resultado}`);
    break;
  case 3:
    resultado = num1 / num2;
    console.log(`El resultado de ${num1} / ${num2} es: ${resultado}`);
    break;
  case 4:
    resultado = num1 * num2;
    console.log(`El resultado de ${num1} * ${num2} es: ${resultado}`);
    break;
}
