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
        if (empleado) {
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`)
    } catch (error) {
        throw error;
    }
}

const getSueldoById = async (id) => {
    try {
        const sueldo = sueldos.find((s) => s.id === id );
        if (sueldo) {
            return sueldo;
        }
        throw new Error (`el sueldo con id ${id} no existe`)
    } catch (error) {
        throw error;
    }
}


const id = 1;

const getDatosEmpleados = async(id) => {
    try{
    const empleado = await getEmpleadoById(id);
    const sueldo = await getSueldoById(id);
    return(`El empleado con id ${id} se llama ${empleado.nombre} y tiene un sueldo de ${sueldo.sueldo}`);}
    catch(err){
        throw(err);
    }

}

getDatosEmpleados(id)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err.message));
