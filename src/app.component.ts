import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxUiLoaderComponent, NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, NgxUiLoaderModule],
    template: `
      <ngx-ui-loader></ngx-ui-loader>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {}
