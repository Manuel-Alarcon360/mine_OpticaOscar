const controller = 'integracion/';
const controllerPacientes = 'paciente/';
const BASE_URL_TEMP = 'https://25951a85fe9b.ngrok-free.app/api/';

export enum ClienteEndpoint {
    // consultarClientes = controller + 'obtener_clientes_externos/',
    // crearCliente = controller + 'crear_cliente/',
    consultarClientes = BASE_URL_TEMP + 'integracion/obtener_clientes_externos/',
    crearCliente =  BASE_URL_TEMP + 'integracion/crear_cliente/',
    getPaciente = controllerPacientes + 'get_pacientes/',
    searchCliente =  controller + "buscar_cliente/",

}
