/*
setTimeout(() => {
    console.log('Hola Mundo');
},2000);
*/

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Mateo'
    }

    setTimeout(() => callback (user) ,1000);
}

getUsuarioById(10, ({nombre, id}) => {
    console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
});


