const controller = 'formulario/';
export enum FormularioEndpoint {
    crearFormulario = controller + 'create_formulario/',
    consultarFormularios = controller + 'list_formularios/',
    deleteFormulario = controller + 'delete_formulario/',
    detalleFormulario = controller + 'obtener_formulario/',
    actualizarFormulario = controller + 'actualizar_campos/',
}
