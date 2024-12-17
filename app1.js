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


//-----Array

// const frutas = ['sandia', 'pera'];
// frutas.push('banana');
// console.log(frutas);
// //Array(3) [ "sandia", "pera", "banana" ]

// frutas.unshift('manzana');
// console.log(frutas);
// //Array(4) [ "manzana", "sandia", "pera", "banana" ]


// frutas.pop();
// console.log(frutas);
// //Array(3) [ "manzana", "sandia", "pera" ]

// const frutaEliminada = frutas.pop();
// console.log(frutaEliminada);
// //pera
// console.log(frutas);
// //[ "manzana", "sandia" ]

// frutas.shift();
// console.log(frutas);
// //Array [ "sandia" ]


// console.clear();

// Práctica: carrito de compras

// const frutas1 = [];

// const fruta = prompt('🍒 Feria Market 🍉 Qué fruta desea comprar?')
// frutas1.push(fruta);

// while(confirm('Desea agregar otro elemento al 🛒 ?')){
//    const fruta = prompt('Qué fruta desea comprar?');
//    frutas1.push(fruta);
// }

// console.log('Compraste:');
// for (const fruta of frutas1) {
//     console.log(fruta); 
// }


//funccion declarativa
// function numeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(10, 21));

// //función expresada:
// //Anónima(expresada en una variable):

// const miNumero = function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(miNumero(100, 200));

//dferencia declarativa vs expresada
// в первом случае если разместить вызов функции вверху, проихойдет всплытие - хоистинг - ошибки не будет
// а во втором выдаст ошибку - 
// funciones declaradad siempre estan disponibles en tiempo de ejecucion
// funciones expresadas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo qual puede generar errores en arquitecturas muy anidadas.

//funciones de flecha - arrow functions
// son alternativas compactas a unos expresiones de fincion tradicional

// const miNumeroFlecha = (max) => {
//     return Math.floor(Math.random() * (max-1)) +1;
// }

// console.log(miNumeroFlecha(11));

// con funcion de flecha podemos realizar un atajo - en 1 linea 
// const miNumeroFlecha = max => Math.floor(Math.random() * (max-1)) +1;

// console.log(miNumeroFlecha(11));

// const miNumeroFlecha = (max = 2) => Math.floor(Math.random() * (max-1)) +1;

// console.log(miNumeroFlecha());

//Arrow and forEach

const frutas1 = [];

const fruta = prompt('🍒 Feria Market 🍉 Qué fruta desea comprar?')
frutas1.push(fruta);

while(confirm('Desea agregar otro elemento al 🛒 ?')){
   const fruta = prompt('Qué fruta desea comprar?');
   frutas1.push(fruta);
}

console.log('Compraste:');
// for (const fruta of frutas1) {
//     console.log(fruta); 
// }

frutas1.forEach((fruta) => console.log(fruta));
