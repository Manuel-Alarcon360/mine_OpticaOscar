import { Calendar, PaginatorCita } from '@/core/models/citas/listado.citas';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { citasEndPoint } from './citas.endpoint';
import { PaginatorData } from '@/core/models/general/general.models';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private readonly baseUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);
  private readonly endpoints = citasEndPoint;

  constructor() { }



  getInformationDashboard():Observable<PaginatorCita>{
    return this.httpClient.get<PaginatorCita>(`${this.baseUrl}${this.endpoints.list_citas}`).pipe(
      map(res=>{
        let citas_agendades = res.results.map((i:Calendar)=>{
          i.name_employee_complete = `${i.name_employee} ${i.lastname_employee}`
          i.name_client_complete = `${i.name_client} ${i.lastname_client}`
          i.title = `${i.name_client_complete} - ${i.comentario_cita}`
          i.start = i.fecha_inicio
          i.end = i.fecha_fin
          i.fecha_inicio = new Date(i.fecha_inicio)
          i.fecha_fin = new Date(i.fecha_fin)
          if (i.estado_cita === "DESHABILITA FORMULARIO"){
            i.title = `Fuera de oficina - ${i.name_employee} ${i.lastname_employee}`
            i.tag =  {"color": "#8FD3F7"}
            i.backgroundColor = "#8FD3F7"
            i.borderColor = "#8FD3F7"
            i.textColor = "#212121"
          }
          return i
        })

        return {
          ...res,
          results: citas_agendades
        }
      }))
  }

}
