// //aquí esta la alerta
// console.log("hola desde consola🫡");
// console.log("hola desde consola2");

// console.log(20);
// console.log("20");

// console.log(true);
// console.log(false);

// let nombreUsuario = "Ignacio";
// let edad = 33;
// let nacionalidad = "Español";

// console.log("Su nombre es:");
// console.log(nombreUsuario);
// console.log("Su edad es:");
// console.log(edad);
// console.log("Su nacionalidad es:");
// console.log(nacionalidad);

// console.log("mi nombre es " + nombreUsuario + " " + edad);

// let numeroUno = "33";
// let numeroDos = 55;
// console.log(numeroDos + numeroUno);

// let numeroTres = prompt("Ingresa un apellido");
// let numeroUno = prompt("1️⃣");
// let numeroDos = prompt("2️⃣");
// let resultado = numeroUno + numeroDos;
// console.log(resultado);
//20+20=2020, porque prompt reciebe un string, toma todo como un texto

// console.log(typeof numeroDos);

// console.log(parseInt(numeroUno) + parseInt(numeroDos));
//20+20=40, porque convierte (parsea) un agrumento de tipo cadena y devuelve un entero de la base especificada

// let numeroUno = parseInt(prompt("1️⃣"));
// let numeroDos = parseInt(prompt("2️⃣"));
// let resultado = numeroUno + numeroDos;

// console.log(resultado);

// let resultado = 10 - 2;
// let resultado1 = 10 * 20;
// //sobrante o módulo
// let resultado2 = 20 % 10;
// console.log(resultado);
// console.log(resultado1);
// console.log(resultado2);

// Resto (%) - остаток от деления

// El operador resto (%) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo. Para obtener el módulo (en pyton) en JavaScript, en lugar de a % n, usa ((a % n ) + n ) % n.

// Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (===) y distinto de (!==).

// let resultado = 20 > 10;
// console. log(resultado);
// //true

// let resultado1 = 20 < 10;
// console. log (resultado1);
// //false

// let resultado3 = 10 == 10;
// console. log (resultado3);
// //true

// let resultado4 = 10 !== '10';
// console. log (resultado4);
// //true - js enterprete string

// let resultado5 = 10 === '10';
// console. log (resultado5);
// //false - esrtictamente. con if siempre usamos ESTE

// let resultado9 = 10 != 12;
// console. log (resultado9);
// //true

// let resultado6 = 10 != 10;
// console. log (resultado6);
// //false

// let resultado7 = 10 != '10';
// console. log (resultado7);
// //false

// let resultado8 = 10 !== '10';
// console. log (resultado8);
// //true - - con if siempre usar ESTE --- != will only check value regardless of operands type. but !== is used to compare both value & type of 2 operands that are being compared to each other.

// let resultado = true && false;
// console.log(resultado);
// //ampersand -- si existe un falso - devuelve falso

// let resultado1 = false || true || false;
// console.log(resultado1);
// // -- si existe un true - devuelve true

// let resultado2 = !false;
// console.log(resultado2);

// if

// let stringUsuario = prompt('Escriba "JS"');

// if (stringUsuario === "JS") {
// console.log("Correcto");
// }
// else {
//     console.log("False");
// }

// let numUsuario = prompt("Ingrese numero de 1 al 10");

// console.log(numUsuario + " Es: " + typeof numUsuario);

// console.log(parseInt(numUsuario));

// if (parseInt(numUsuario) <= 10) {
//     console.log("Genial!");
// }
// else {
//     console.log("Mal!");
// }

// switch

// let opcionUsuario = prompt(`
//     Elija una opción:
//     1: Libros
//     2: Películas
//     3: Juegos
//     `);

// console.log(opcionUsuario);

// switch(opcionUsuario) {
//   case "1":
//     console.log("principito");
//     break;
//   case "2":
//     console.log("Matriz");
//     break;
//   case "3":
//     console.log("NFS");
//     break;
//   default:
//     console.log("Opcion no valida");
//     break;
// }

// while

// let numero = 1;

// while(numero <= 10) {
//   console.log(numero);
//   // numero = numero + 1;
//   // se llama incrementador
//   numero++;
// }

// console.log("Fin numero: " + numero);
// // console.log(numero);

// Math.random

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3;

let numeroUsuario = parseInt(prompt("Adivine el numero del 1 al 10"));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
  //   if (numeroMaquina < numeroUsuario) {
  //     console.log("Es más bajo");
  //   } else {
  //     console.log("Es más alto");
  //   }

  let mensaje =
    numeroMaquina > numeroUsuario
      ? "El numeroMaquina es mayor"
      : "El numeroMaquina es menor";

  console.log("Te equivocaste!" + mensaje);
  numeroUsuario = parseInt(prompt("numero del 1 al 10"));

  vidas--;
}

if (numeroMaquina === numeroUsuario) {
  console.log("Ganaste 🥳");
} else {
  console.log("Perdiste 😟");
}
