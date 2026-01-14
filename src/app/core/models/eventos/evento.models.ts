import { Data } from "@angular/router"

export interface Evento{
    true :  boolean
    creado_por:number,
    descripcion: string
    fecha_actualizacio:string
    fecha_creacion:string
    fecha_fin: Date | null;
    fecha_inicio: Date | null;
    es_principal:boolean
    id:Number
    imagen_evento:any
    mostrar_en_landing:boolean
    tipo_evento:any
    titulo:String
}

export interface TipoEvento{
    label:string,
    value:string
}
export interface DetalleEventoResponse {
  evento: Evento;}