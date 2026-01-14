export interface EstadosCiviles {
    name_estado: string;
    id: string;
}

export interface HistoriaClinicaData {
    id ?: number | null;
    motivo_consulta: string;
    doctor: string;
}

export interface CampoRespuesta {
    campo_fk: number;
    respuesta_campo: any;
}

export interface DetalleHistoria {
    campos: CampoRespuesta[];
    formulario_fk: number;
}

export interface PacienteData {
    id ?: number | null;
    historia_clinica?: string;
    fecha?: string;
    nombre_completo: string;
    fecha_nacimiento: string;
    edad?: string;
    estado_civil: string | null;
    eps: string;
    vinculacion: string;
    direccion: string;
    telefono: string;
    ocupacion: string;
    responsable?: string;
    tel_responsable?: string;
    motivo_consulta: string;
}

export interface HistoriaClinicaRequest {
    historia_clinica: HistoriaClinicaData;
    detalle_historia: DetalleHistoria;
    paciente: PacienteData;
}

export interface HistoriaClinica {
    id?: number;
    motivo_consulta: string;
    doctor: string;
    fecha_creacion?: Date;
    paciente_id?: number;
}
