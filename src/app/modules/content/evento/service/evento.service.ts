import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DetalleResponse, PaginatorData } from '@/core/models/general/general.models';
import { Observable } from 'rxjs';
import { EventoEndpoint } from './evento.endpoint';
import { DetalleFormularioResponse } from '@/core/models/formulario/formulario.models';
import { DetalleEventoResponse, Evento } from '@/core/models/eventos/evento.models';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API = environment.apiUrl;
  private readonly URI = EventoEndpoint
  private readonly http = inject(HttpClient);

  constructor() { }

  $listTipoEvento():Observable<PaginatorData<any>>{
      return this.http.get<any>(this.API + this.URI.listTipoEvento);
    }
  $consultaEventos():Observable<PaginatorData<any>>{
        return this.http.get<PaginatorData<any>>(this.API + this.URI.listEvento);
  }
  $crearEvento(form: any){
    return this.http.post(this.API + this.URI.createEvento, form);
  }
  $deleteEvento(id:number){
    return this.http.delete(this.API + this.URI.deleteEvento + `${id}/`);
  }
  $consultarEventoById(id:string | number | null):Observable<DetalleResponse<DetalleEventoResponse>>{
    return this.http.get<DetalleResponse<DetalleEventoResponse>>(this.API + this.URI.detalleEvento + `${id}/`);
  }
  $actualizarEvento(id:number, form:any){
    return this.http.put(this.API + this.URI.updateEvento + `${id}/`, form);
  }
  $cambiarMostrarLanding(id:number, form:any){
    return this.http.put(this.API + this.URI.cambioMostrar + `${id}/`, form);
  }


}
