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

const getEmpleadoById = async (id) => {
    try {
        const empleado = empleados.find((e) => e.id === id );
        if (empleado){
            return(empleado);
        }
    } catch (error){
        throw error;
    }
}

const getSueldoById = async (id) => {
    try {
        const sueldo = sueldos.find((s) => s.id === id );
        if (sueldo){
            return(sueldo);
        }
    } catch (error){
        throw error;
    }
}


const id = 1;

const getDatosEmpleados = async(id) => {
    const empleado = await getEmpleadoById(id);
    console.log(`El empleado con id ${id} es ${empleado.nombre}`);
    const sueldo = await getSueldoById(id);
    console.log(`El empleado con id ${id} tiene un sueldo de ${sueldo.sueldo}`);
}

getDatosEmpleados(id);
