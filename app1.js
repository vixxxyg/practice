// array

// for

// [] - corchetes
// let frutas = ["manzana", "uva", "piña", "pera"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]);

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// // for of - para objetos itterados

// for (let fruta of frutas) {
//     console.log(fruta);
// }

// let nombreUsuario = "Ignacio";

// for (letra of nombreUsuario) {
//     console.log(letra);
// }

// // frutas[Symbol.iterator]

// //for in

// for (let fruta in frutas) {
//   console.log(fruta);
// }

//function

//Hoisting!
// saludar();
// function saludar() {
//     console.log("Bienvenido");
// }

// function saludar(nombreUsuario) {
//     return "Bienvenido " + nombreUsuario;
// }

// console.log(saludar("Jose"));

// function sumar (n1, n2) {
//     return parseInt(n1) + parseInt(n2);
// }

// console.log(sumar(2, 5));

// let numUno = prompt("Ingrese num1");
// let numDos = prompt("Ingrese num2");
// console.log(sumar (numUno, numDos));

// var, let, const, arrow functions

// let nombreUsuario = "vix";

// console.log("hola \n" + nombreUsuario);

// console.log("hola " + nombreUsuario);

// console.log(`hola + 
//     ${nombreUsuario}`);

// console.log(`hola + ${nombreUsuario}`);

// [Log] hola 
//vix   

// [Log] hola vix (app1.js, line 63)
    
// [Log] hola +  (app1.js, line 64)
// vix
    
// [Log] hola + vix


// let---------------

// let nombreUsuario = "Vix";
// let estado = true;
// console.log('Bienvenido \n' + nombreUsuario);
// console.log(`Bienvenido
// ${nombreUsuario}`);
// console.log(`Bienvenido
// ${nombreUsuario.toUpperCase()}`);
// console.log(`
//     ${estado ? "en linea" : "offline"}
//     `);


// var---------------

// var nombreUsuario = "Vix";
// var nombreUsuario = "Max";
// console.log(nombreUsuario);
// Max
// y let no permite declarar la misma variable

// var estado = true;

// if (estado){
//     console.log('Entró al if');
// }
// console.log(estado); --- true

// var estado = true;

// if (estado){
//     console.log('Entró al if');
//     var estado = false;
// }
// console.log(estado); --- false

// let estado = true;

// if (estado){
//     console.log('Entró al if');
//     let estado = false;
// }
// console.log(estado); --- true (segunda let esta enserrada entre el skope, y var - NO)

// const---------------
// no se puede reasignar
// // no se permite
// const estado = true;
// estado = false;
// //  Uncaught TypeError: invalid assignment to const 'estado'
// //     <anonymous>

// const estado = true;

// if (estado) {
//     const estado = false
//     console.log(estado);
// }

// console.log(estado);

// - false app1.js:140:13
//  - true app1.js:143:9


// const frutas = [];
// const frutas = ["sandía"]; - error

// const frutas = [];
// frutas = ["sandía"]; - error

// const frutas = [];
// frutas[0] = "sandia";

// console.log(frutas); - Array [ "sandia" ]