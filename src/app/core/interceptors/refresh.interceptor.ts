import { AuthEndPoint } from '@/modules/auth/service/auth.endpoint';
import { AuthService } from '@/modules/auth/service/auth.service';
import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, concatMap, EMPTY, finalize, from, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenUser } from '../models/usuario/usuario.interface';

export const refreshInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService)
  let cookieService:CookieService =  inject(CookieService)
  const router : Router =  inject(Router)
  let endpoint = environment.apiUrl
  let URI  = AuthEndPoint

  if(req.url === endpoint+URI.login){
    return next(req)
  }

  return next(req).pipe(
    finalize(()=>authService.isRefreshing = false),
    catchError((error:HttpErrorResponse)=>{
    const ligthList = endpoint + URI.postRefreshToken
      if(req.url == ligthList  && error.status == 401){
        authService.logOutSystem().subscribe((res)=>{
          router.navigateByUrl("/auth/login")
          cookieService.deleteAll("/")
          authService.logOutSystem().subscribe((res)=>{
          })
        })
        return EMPTY
      }
      if(error.status === HttpStatusCode.Unauthorized){
        authService.isRefreshing = true

          return authService.refreshToken().pipe(
            concatMap( (response:TokenUser)=>{
             return from(authService.updateToken(response)).pipe(
                concatMap(()=>{
                const requestClone:any =  authService.addTokenHeader(req)
                return next(requestClone)
                })
              )

            }),
            catchError((err)=>{
              router.navigateByUrl("/landing")
              return EMPTY
            })
          )
      }
      return throwError(()=>error)
    })
  );
};
