import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoriaEndPoint } from './historia.endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf, of } from 'rxjs';
import { EstadosCiviles, HistoriaClinica, HistoriaClinicaRequest } from '@/core/models/historia-clinica/historia-clinica.models';
import { DetalleResponse } from '@/core/models/general/general.models';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

private estadosCiviles = [
  { id: 'soltero', name_estado: 'Soltero/a' },
  { id: 'casado', name_estado: 'Casado/a' },
  { id: 'union_libre', name_estado: 'Unión Libre' },
  { id: 'divorciado', name_estado: 'Divorciado/a' },
  { id: 'viudo', name_estado: 'Viudo/a' },
  { id: 'separado', name_estado: 'Separado/a' },
];

  private readonly baseUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);
  private readonly endpoints = HistoriaEndPoint;


   getListEstadosCiviles(): Observable<EstadosCiviles[]> {
      // const url = `${this.baseUrl}${this.endpoints.list_groups}`;
      // return this.httpClient.get<Rol_>(url);
      return of(this.estadosCiviles);
    }


  $createHistoria(form: HistoriaClinicaRequest):Observable<any>{
    const url = `${this.baseUrl}${this.endpoints.createHistoria}`;
    return this.httpClient.post(url, form);
  }

  $getHistoriaClinica(id_paciente: number | string): Observable<DetalleResponse<HistoriaClinica>>{
    const url = `${this.baseUrl}${this.endpoints.getHistoriaClinica}${id_paciente}/`;
    return this.httpClient.get<DetalleResponse<HistoriaClinica>>(url);
  }

  $getDetalleHistoria(id_historia: number | string): Observable<any> {
    const url = `${this.baseUrl}${this.endpoints.getDetalleHistoria}${id_historia}/`;
    return this.httpClient.get<any>(url);
  }

}
