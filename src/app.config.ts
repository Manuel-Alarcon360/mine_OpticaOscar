import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import Lara from '@primeng/themes/lara';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@/core/interceptors/auth.interceptor';
import { refreshInterceptor } from '@/core/interceptors/refresh.interceptor';
import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { customPreset } from 'mypreset';
const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#00efff",
  "bgsOpacity": 1,
  "bgsPosition": "center-center",
  "bgsSize": 50,
  "bgsType": "ball-spin-fade-rotating",
  "blur": 3,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#09adbb",
  "fgsPosition": "center-center",
  "fgsSize": 50,
  "fgsType": "ball-spin-clockwise-fade-rotating",
  "gap": 150,
  "logoPosition": "center-center",
  "logoSize": 60,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(101,97,97,0)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#ff0000",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 100
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: customPreset,
        options: {
          darkModeSelector: '.app-dark',
        }
      }
    }),
    provideHttpClient(
      withInterceptors([authInterceptor,refreshInterceptor])
    ),
    importProvidersFrom(
      NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
      NgxUiLoaderRouterModule.forRoot({showForeground: true}),
      NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    ),

  ]
};
