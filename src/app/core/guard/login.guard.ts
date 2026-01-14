import { AuthService } from '@/modules/auth/service/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = async (route, state) => {
    const router = inject(Router);
  const cookie = inject(CookieService);
  const authService = inject(AuthService);
  let refresh = cookie.check("refreshOptica");
  let token = cookie.check("tokenOptica");

  if (!(refresh && token)) {
      if (!token) {
          try {
              const res = await authService.refreshTokenAsync();
              if (res) {
                  await authService.updateToken(res);
                  refresh = cookie.check("refreshOptica");
                  token = cookie.check("tokenOptica");
                  if (!(refresh && token)) {
                      router.navigateByUrl("auth/login");
                      return false;
                  }
              } else {
                  router.navigateByUrl("auth/login");
                  return false;
              }
          } catch (err) {
              router.navigateByUrl("auth/login");
              return false;
          }
      } else {
          router.navigateByUrl("auth/login");
          return false;
      }
  }
  return true;
};
