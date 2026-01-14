import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../modules/auth/service/auth.service';
import { EMPTY } from 'rxjs';
import { AuthEndPoint } from '@/modules/auth/service/auth.endpoint';
import { environment } from '../../../environments/environment';
import { integracionesEndPoint } from '@/modules/content/integracion/service/integraciones.endpoint';
import { LandingEndpoint } from '@/modules/content/landing/service/landing.endpoint';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const serviceAutenticacion =  inject(AuthService)
  let URI  = AuthEndPoint
  let URI_Landing = LandingEndpoint
  let URI_Integraciones  = integracionesEndPoint
  let endpoint = environment.apiUrl

  const ligthList = ["https://accounts.google.com/.well-known/openid-configuration","https://www.googleapis.com/oauth2/v3/certs",endpoint + URI.login, endpoint + URI.postRefreshToken, endpoint + URI_Integraciones.get_url_client, endpoint + URI_Landing.listEvento]

  for (let index = 0; index < ligthList.length; index++) {
    if(req.url.includes(ligthList[index])){
      return next(req)
    }
  }

  if(serviceAutenticacion.isRefreshing){
        return EMPTY
    }
  let requestClone : any = ""
  requestClone = serviceAutenticacion.addTokenHeader(req)

  return next(requestClone);
};
