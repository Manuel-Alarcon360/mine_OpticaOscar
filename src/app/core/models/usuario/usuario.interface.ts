import { PaginatorData } from "../general/general.models";

export interface Usuario {
    username: string;
    password: string;
    is_active: boolean;
    first_name: string;
    last_name: string;
    email: string;
    token ?:string;
    refresh_token ?:string;
  }

export interface TokenUser {
  details ?: string;
  access : string;
  refresh : string;
}

export interface Credencial{
  username:string;
  password:string;
}

export interface Empleado{
  id:number
  email:string
  first_name:string
  last_name:string
  password:string
  name_group:string
  rol:number
  user:string
  last_login:Date
  username:string
}



export enum EstadoEmpleado {
  ACTIVO = 'Activo',
  INACTIVO = 'Inactivo'
}



export interface EmpleadoExtendido extends Empleado {
  nombre_completo: string;
  fechaUltimoIngreso: string;
  estado: EstadoEmpleado;
}

export interface Rol {
  readonly name: string;
  readonly id: number;
}
export interface Rol_ {

  count: number;
  next: string | null;
  previous: string | null;
  results: Rol[];
}
