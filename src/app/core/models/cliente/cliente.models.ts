export interface Cliente {
  id ?: number | string
  nombre : string
  apellidos :  string
  numero_identificacion : string
  tipo_documento : string
  correo : string
  telefono : string
  direccion ?: string
  tipo_registro :string
  compania : number | number
  complete_name ?: string | undefined
  created_at ?: string
  updated_at ?: string
}