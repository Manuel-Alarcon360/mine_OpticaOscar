const controller = 'integracion/';
const controllerPacientes = 'paciente/';
export enum ClienteEndpoint {
    consultarClientes = controller + 'obtener_clientes_externos/',
    crearCliente = controller + 'crear_cliente/',
    getPaciente = controllerPacientes + 'get_pacientes/',
    searchCliente =  controller + "buscar_cliente/",

}
