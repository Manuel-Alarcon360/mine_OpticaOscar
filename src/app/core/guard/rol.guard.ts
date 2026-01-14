import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

export const rolGuard: CanActivateFn = (route, state) => {
    const cookieService = inject(CookieService)
    const router =  inject(Router)
    if (cookieService.check("refreshOptica")){
      let cookie =  cookieService.get("refreshOptica")
      const decode:any =  jwtDecode(cookie)
      if(decode?.usuario.name_group === "DOCTOR"){
        return true
      }else {
        router.navigateByUrl("redirect")
        return false
      }
    }
    return false;
};
