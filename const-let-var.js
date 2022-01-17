// var = es una variable de forma global.

var nombre = 'Mateo';

if(true) {
    
    var nombre = 'Luis'
};


console.log(nombre);


// let = es una variable que se limita al scope.

let nombre = 'Mateo';

if(true) {
    
    let nombre = 'Luis'
    console.log(nombre);

};


console.log(nombre);


// const = es una constante.

const nombre = 'Mateo';

if(true) {
    
    const nombre = 'Luis'
    console.log(nombre);

};


console.log(nombre);

