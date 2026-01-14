import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '@/modules/layaut/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppBreadcrumb, InputTextModule, ButtonModule, IconFieldModule, InputIconModule],
    template: `<div class="layout-topbar">
        <div class="topbar-start">
            <button #menubutton type="button" class="topbar-menubutton p-link p-trigger" (click)="onMenuButtonClick()">
                <i class="pi pi-bars"></i>
            </button>
            <nav app-breadcrumb class="topbar-breadcrumb"></nav>
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu">
              <li>
               <span><i class="pi pi-user mr-2"></i> {{nombreUsuario}}</span>
              </li>
                <li class="topbar-profile">
                    <p-button [rounded]="true" [outlined]="true"(click)="onProfileButtonClick()">
                         <i class="pi pi-power-off" style="font-size: 1.5rem"></i>
                </p-button>
                </li>
            </ul>
        </div>
    </div>`
})
export class AppTopbar {
    @ViewChild('menubutton') menuButton!: ElementRef;
    nombreUsuario = "";
    constructor(public layoutService: LayoutService, private cookieService:CookieService) {
      this.infoUser();
    }


    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
    infoUser(){
        let resfresh = this.cookieService.check("refreshOptica")
        if(resfresh){
          const decoded_refresh:any = jwtDecode(this.cookieService.get("refreshOptica"))
          this.nombreUsuario = decoded_refresh.usuario.first_name
        }else{
          window.location.reload()
    }
  }
}
