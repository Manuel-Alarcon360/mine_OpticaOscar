import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioEndPoint } from './usuario.endpoint';
import { Empleado, Rol_ } from '@/core/models/usuario/usuario.interface';
import { DetalleRespuesta } from '@/core/models/respuestas_detalle/detalle_respuesta';
import { PaginatorData } from '@/core/models/general/general.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);
  private readonly endpoints = UsuarioEndPoint;

  registrarColaborador(usuario: Empleado): Observable<DetalleRespuesta> {
    const url = `${this.baseUrl}${this.endpoints.registro}`;
    return this.httpClient.post<DetalleRespuesta>(url, usuario);
  }

  getListEmpleados(): Observable<PaginatorData<Empleado>> {
    const url = `${this.baseUrl}${this.endpoints.list_colaboradores}`;
    return this.httpClient.get<PaginatorData<Empleado>>(url);
  }

  changeEstadoUpdate(empleadoData: Partial<Empleado> & { id: number }): Observable<Empleado> {
    const url = `${this.baseUrl}${this.endpoints.changeStatusEmployee}${empleadoData.id}/`;
    return this.httpClient.patch<Empleado>(url, empleadoData);
  }

  UpdateEmpleado(id: number, data: Partial<Empleado>): Observable<Empleado> {
    const url = `${this.baseUrl}${this.endpoints.updated_empleado}${id}/`;
    return this.httpClient.put<Empleado>(url, data);
  }
  changePassword(empleadoData: Partial<Empleado> & { id: number }): Observable<Empleado> {
    const url = `${this.baseUrl}${this.endpoints.update_contrasenia}${empleadoData.id}/`;
    return this.httpClient.put<Empleado>(url, empleadoData);
  }

  getListGroups(): Observable<Rol_> {
    const url = `${this.baseUrl}${this.endpoints.list_groups}`;
    return this.httpClient.get<Rol_>(url);
  }

  getFirmaEmpleado():Observable<any>{
    const url = `${this.baseUrl}${this.endpoints.firma_empleado}`;
    return this.httpClient.get<any>(url);
  }

  PostControllerEmpleado(data:any):Observable<any>{
    const url = `${this.baseUrl}${this.endpoints.post_controller_empleado}`;
    return this.httpClient.post<any>(url, data);
    }
  }
