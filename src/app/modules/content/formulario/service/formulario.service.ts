import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormularioEndpoint } from './formulario.endpoint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleResponse, PaginatorData } from '@/core/models/general/general.models';
import { DetalleFormularioResponse, Formulario } from '@/core/models/formulario/formulario.models';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private readonly API = environment.apiUrl;
  private readonly URI = FormularioEndpoint
  private readonly http = inject(HttpClient);


  $crearFormulario(form: any){
    return this.http.post(this.API + this.URI.crearFormulario, form);
  }

  $consultarFormularios():Observable<PaginatorData<Formulario>>{
    return this.http.get<PaginatorData<Formulario>>(this.API + this.URI.consultarFormularios);
  }

  $deleteFormulario(id:number){
    return this.http.delete(this.API + this.URI.deleteFormulario + `${id}/`);
  }

  $consultarFormularioById(id:string | number | null):Observable<DetalleResponse<DetalleFormularioResponse>>{
    return this.http.get<DetalleResponse<DetalleFormularioResponse>>(this.API + this.URI.detalleFormulario + `${id}/`);
  }

  $actualizarFormulario(id:number, form:any){
    return this.http.put(this.API + this.URI.actualizarFormulario + `${id}/`, form);
  }
}
