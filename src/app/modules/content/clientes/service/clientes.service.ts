import { Cliente } from '@/core/models/cliente/cliente.models';
import { DetalleResponse, PaginatorData } from '@/core/models/general/general.models';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteEndpoint } from './clientes.endpoint';
import { HttpClient } from '@angular/common/http';
import { PacienteData } from '@/core/models/historia-clinica/historia-clinica.models';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = environment.apiUrl;
  private readonly URI  = ClienteEndpoint
  private readonly http = inject(HttpClient);


  getClient(params: number): Observable<PaginatorData<Cliente>> {
    return this.http
      .get<PaginatorData<Cliente>>(`${this.URI.consultarClientes}`, {  //`${this.API}${this.URI.consultarClientes}`
        params: { page: params.toString() },
      })
      .pipe(
        map((e) => {
          let data: PaginatorData<Cliente> = {
            results: e.results.map((i: any) => {
              i.complete_name = i.nombre + ' ' + i.apellidos;
              return i;
            }),
            count: e.count,
            next: e.next,
            previous: e.previous,
          };
          return data;
        })
      );
  }
  crearCliente(form: any){
    return this.http.post(this.URI.crearCliente, form); //this.API + this.URI.crearCliente, form
  }

  $getpaciente(id_paciente: number | string): Observable<DetalleResponse<PacienteData>>{
    const url = `${this.API}${this.URI.getPaciente}${id_paciente}/`;
    return this.http.get<DetalleResponse<PacienteData>>(url);
  }
    getClientSearch(query: string): Observable<Cliente[]> {
    return this.http.get<PaginatorData<Cliente>>(`${this.API}${this.URI.searchCliente}`, {
      params: { query },
    })
    .pipe(
      map((res) =>
        res.results.map((i) => ({
          ...i,
          complete_name: `${i.nombre} ${i.apellidos}`,
        }))
      )
    );
}
}
