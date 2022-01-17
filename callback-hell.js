const empleados = [
    {
        id: 1,
        nombre: 'Mateo'
    },
    {
        id: 2,
        nombre: 'Gonzalo'
    },
    {
        id: 3,
        nombre: 'Santiago'
    },
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id );
    if (empleado){
        callback(null, empleado);
        return;
    }
    callback('El empleado no existe');

}

const getSueldoById = (id, callback) => {
    const sueldo = sueldos.find((e) => e.id === id );
        if (sueldo){
            callback(null, sueldo);
            return;
        }
        callback(`El sueldo con id ${id} no existe`)
}

const id = 3;

getEmpleadoById(id, (error, empleado) => {

    if (error){
        console.log('ERROR!!....');
        console.log(error);
        return;
    }

getSueldoById(id, (error, sueldo) => {

    if (error) {
        console.log('ERROR!!....');
        console.log(error);
        return;
        }

    console.log(`El empleado: ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo}`);
    });
    
    
})