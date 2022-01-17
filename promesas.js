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

const getEmpleadoById = (id) => {
    return new Promise((resolve, reject)=>{
        const empleado = empleados.find((e) => e.id === id );
        if (empleado){
            resolve(empleado);
            return;
        }
        reject('El empleado no existe');
    
    });
}

const getSueldoById = (id) => {
    return new Promise((resolve, reject)=>{
        const sueldo = sueldos.find((s) => s.id === id );
        if (sueldo){
            resolve(sueldo);
            return;
        }
        reject('El sueldo no existe');
    
    });
}

const id = 1;
let nombre;

/*
getEmpleadoById(id).then(empleado => {
    console.log(`El empleado con ${id} es ${empleado.nombre}`);
}).catch(err => console.log(err));

getSueldoById(id).then(sueldo => {
    console.log(`El sueldo con ${id} es ${sueldo.sueldo}`);
}).catch(err => console.log(err));
*/

getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSueldoById (id);
    })

    .then (sueldo => {
        console.log(`El empleado ${nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })
    .catch (err => console.log(err));