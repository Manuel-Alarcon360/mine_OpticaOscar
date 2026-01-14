import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, {
...appConfig,
  providers: [
    ...(appConfig.providers || [])
  ]
})
  .catch((err) => console.error(err));


if (environment.production) {
  enableProdMode()
}


