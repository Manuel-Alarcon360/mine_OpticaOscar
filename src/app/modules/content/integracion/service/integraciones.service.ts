import { IntegracionResponse, Rsta_integracion } from '@/core/models/integraciones/integraciones';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { integracionesEndPoint } from '@/modules/content/integracion/service/integraciones.endpoint';
import { DetalleRespuesta } from '@/core/models/respuestas_detalle/detalle_respuesta';

@Injectable({
  providedIn: 'root'
})
export class IntegracionesService {

  private readonly baseUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);
  private readonly endpoints = integracionesEndPoint;

  constructor() { }

  getListAplicaciones(): Observable<IntegracionResponse> {
    const url = `${this.baseUrl}${this.endpoints.list_integraciones}`;
    return this.httpClient.get<IntegracionResponse>(url);
  }
  registrarColaborador(data: Rsta_integracion): Observable<DetalleRespuesta> {
      const url = `${this.baseUrl}${this.endpoints.crear_integracion}`;
      return this.httpClient.post<DetalleRespuesta>(url, data);
  }
  UpdateEmpleado(data: Partial<Rsta_integracion>): Observable<DetalleRespuesta> {
    const url = `${this.baseUrl}${this.endpoints.editar_integracion}${data.id}/`;
    return this.httpClient.put<DetalleRespuesta>(url, data);
  }
  deleteAplicacion(id: number): Observable<DetalleRespuesta> {
    const url = `${this.baseUrl}${this.endpoints.eliminar_integracion}${id}/`;
    return this.httpClient.delete<DetalleRespuesta>(url);
  } 
  getUrlClient(): Observable<any> {
    const url = `${this.baseUrl}${this.endpoints.get_url_client}`;
    return this.httpClient.get<any>(url);
  }
}
