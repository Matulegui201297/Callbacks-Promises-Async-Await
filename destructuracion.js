const personaje = {
    nombre = 'Jaimito',
    apellido = 'Perez',
    profesion = 'Desarrollador',
    getDescripcion(){
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;
*/


const imprimirPersonaje = (nombre, apellido, profesion, edad = 50) => {
    console.log(nombre, apellido, profesion, edad);
};

imprimirPersonaje(personaje);

const personajes = ['Eduardo', 'Antonio', 'Jorge'];
const [p1, p2, p3] = personajes;
console.log(p1,p2,p3);