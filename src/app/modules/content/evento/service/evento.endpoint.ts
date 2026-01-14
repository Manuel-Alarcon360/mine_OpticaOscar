const controller = 'evento/';
export enum EventoEndpoint {
    listEvento = controller + 'list_eventos/',
    listTipoEvento= controller + 'choices/',
    deleteEvento = controller + 'delete_evento/',
    createEvento = controller + 'create_evento/',
    updateEvento = controller + 'update_evento/',
    detalleEvento = controller + 'detalle_evento/',
    cambioMostrar = controller + 'cambio_mostrar_landing/',
}
