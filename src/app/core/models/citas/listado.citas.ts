export interface PaginatorCita {
  results: Calendar[];
  count: number;
  next: null | string;
  previous: null | string;
}


export interface Calendar {
  id ?: number;
  name_client ?: string;
  lastname_client ?: string;
  name_employee ?: string;
  lastname_employee ?: string;
  tag ?: Object
  backgroundColor ?:string
  borderColor ?:string
  textColor ?: string
  fecha_inicio: string | Date;
  fecha_fin: string | Date;
  estado_cita: string;
  comentario_cita: string;
  ubicacion_cita: string;
  sede ?: number | null;
  google_id ?: string | null;
  created_at ?: string;
  updated_at ?: string;
  observacion ?: string | null;
  cliente: number;
  empleado: number;
  dia_semana ?: string | number
  compania: number;
  name_employee_complete ?: string;
  name_client_complete ?: string;
  celery_task_id ?: string

  title ?: string;
  start ?: string | Date;
  end ?: string | Date;
}