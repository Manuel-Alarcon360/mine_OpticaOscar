export interface CampoDinamico {
    id: string;
    nombre_campo: string;
    tipo: string;
    requerido: boolean;
    opciones?: string[];
    estado_campo ?: boolean;
    fecha_creacion?: string;
    fecha_actualizacion?: string;
    formulario_FK?: number;
}


export interface Formulario {
  id: number;
  nombre_formulario: string;
  principal: boolean | undefined;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

export interface DetalleFormularioResponse {
  formulario: Formulario;
  campos: CampoDinamico[];
}

export interface Campo {
  id: number;
  nombre_campo: string;
  tipo: string;
  requerido: boolean;
  estado_campo: boolean;
  opciones: null;
  fecha_creacion: string;
  fecha_actualizacion: string;
  formulario_FK: number;
}
