import { Credencial, TokenUser, Usuario } from '@/core/models/usuario/usuario.interface';


import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthEndPoint } from './auth.endpoint';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private http = inject(HttpClient)
  private cookieService = inject(CookieService);
  private URI  = AuthEndPoint
  private endpoint = environment.apiUrl
  private _isRefreshing = false

  get isRefreshing(){
    return this._isRefreshing
  }
  set isRefreshing(value:any){
    this._isRefreshing = value
  }
  login(credenciales:Credencial):Observable<TokenUser>{
    return this.http.post<TokenUser>(`${this.endpoint}${this.URI.login}`,credenciales).pipe(
        tap((data:TokenUser)=>{
            const token =  data.access
            const decoded =  jwtDecode(token)
            const decoded_refresh = jwtDecode(data.refresh)

            let num : number | any = decoded?.exp
            let fecha = new Date(num * 1000)

            let num_dos : number | any =  decoded_refresh.exp
            let fecha_dos =  new Date(num_dos * 1000)
            this.cookieService.set("tokenOptica",data.access,{expires:fecha, path:"/"})
            this.cookieService.set("refreshOptica",data.refresh, {expires:fecha_dos, path:"/"})
        })
    )
  }
  logOutSystem():Observable<any>{
    let refresh  =  {"refresh":this.cookieService.get("refreshOptica")}
    return this.http.post<any>(`${this.endpoint}${this.URI.logOut}`, refresh)
  }
  addTokenHeader(request : HttpRequest<unknown>){
    let token = this.cookieService.get("tokenOptica")
    return  request.clone({headers: request.headers.set('Authorization', 'Bearer '+token)})
  }

  async refreshTokenAsync(): Promise<TokenUser | null> {
    try {
        let refresh = { "refresh": this.cookieService.get("refreshOptica") };
        const response = await firstValueFrom(this.http.post<TokenUser>(`${this.endpoint}${this.URI.postRefreshToken}`, refresh));
        return response;
      } catch (error) {
         console.error('Error al refrescar el token:', error);
        return null;
      }
  }
  refreshToken():Observable<TokenUser>{
    let refresh  =  {"refresh":this.cookieService.get("refreshOptica")}
    return this.http.post<TokenUser>(`${this.endpoint}${this.URI.postRefreshToken}`, refresh)
  }

  async updateToken(data: TokenUser) {
    try {
      if (!data.access) {
        console.error("Error al actualizar el token:", data);
        return;
      }
      const decoded = jwtDecode<any>(data.access);
      let fecha = new Date(decoded.exp * 1000);
      this.cookieService.set("tokenOptica", data.access, { expires: fecha, path: "/" });
      if (data.refresh) {
        const decoded_refresh = jwtDecode<any>(data.refresh);
        let fecha_dos = new Date(decoded_refresh.exp * 1000);
        this.cookieService.set("refreshOptica", data.refresh, { expires: fecha_dos, path: "/" });
      }
    } catch (err) {
      console.error("Error en updateToken:", err, data);
    }
  }
  changePasword(data: any): Observable<any> {
      const url = `${this.endpoint}${this.URI.update_contrasenia}/${data.id}/`
      return this.http.put<any>(url, data);
    }

}
