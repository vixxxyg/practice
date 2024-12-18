// ----programacion orientada a objetos
// un objeto es una colección de propiedades. y una propiedad es una asociación entre un nombre (o clave) y un valor.
//objeto literal - el objeto cuyas propiedades estan declaradas textualmente en el código

const gato = {
    nombre: 'Valiente',
    duerme: 'true',
    edad: '10',
    enemigos: ["agua", "perros"],
};

console.log(gato);
console.log(gato.enemigos[0]);
console.log(gato['enemigos'][0]);


// ----CRUD 
// CRUD es un acrónimo que se refiere a las cuatro operaciones básicas que se pueden realizar en una base de datos o sistema de gestión de información. Cada letra representa una operación específica:

// C - Create (Crear):
// Crear nuevos registros en la base de datos o sistema.
// Ejemplo: Agregar un nuevo usuario o producto.

gato.color = 'Azul';

// R - Read (Leer):
// Consultar o recuperar datos existentes.
// Ejemplo: Mostrar una lista de usuarios o detalles de un producto.

console.log(gato);

// U - Update (Actualizar):
// Modificar o actualizar registros existentes.
// Ejemplo: Cambiar la dirección de un usuario o actualizar el precio de un producto.

gato.edad = 5;

// D - Delete (Eliminar):
// Borrar registros de la base de datos o sistema.
// Ejemplo: Eliminar un usuario o un producto obsoleto.

delete gato.duerme;
console.log(gato);

// > Object { nombre: "Valiente", edad: 5, enemigos: (2) […], color: "Azul" }
// color: "Azul"
// edad: 5
// enemigos: Array [ "agua", "perros" ]
// nombre: "Valiente"


// ----hasOwnProperty - .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no
// console.log(gato.hasOwnProperty('nombre')); -true
// console.log(gato.hasOwnProperty('salud'));  -false

if (gato.hasOwnProperty('nombre')) {
    gato.nombre = 'Michi';
}

console.log(gato.nombre);


// ----- Objetos anidados

const perro = {
    nonbre: 'Luna',
    duerme: 'true',
    edad: 3,
    enemigos: ['gatos'],
    otros: {
        amigos: ['Cobarde', 'Rex'],
        favoritos: {
            comida: {
                fria: 'carne',
                caliente: 'pollo',
            }
        }
    }
}

console.log(perro.otros.amigos[0]);