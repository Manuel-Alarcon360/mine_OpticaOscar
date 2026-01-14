import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model_1; let i = index">
            <li
                app-menuitem
                *ngIf="!item.separator"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
        <ng-container *ngFor="let item of model; let i = index">
            <li
                app-menuitem
                *ngIf="!item.separator"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `,
})
export class AppMenu {
    model: any[] = [];
    model_1: any[] = [];
    public cookieService:CookieService = inject(CookieService)
    private layoutService = inject(LayoutService);

    ngOnInit() {
    this.deactivateSideBar()
    this.checkRole()
    this.model_1 = [
            {
                    label: 'Dashboards',
                    icon: 'pi pi-home',
                    items: [
                        {
                            label: 'Dashboard',
                            icon: 'pi pi-fw pi-home',
                            routerLink: ['/dashboard/home'],
                        },
                    ],
                },
        ]
      }
    checkRole(){
        let resfresh = this.cookieService.check("refreshOptica")
        if(resfresh){
              const decoded_refresh:any = jwtDecode(this.cookieService.get("refreshOptica"))
              let rolUsuario = decoded_refresh.usuario.name_group
            if (rolUsuario == "DOCTOR") {
                        this.model = [
                        {
                            label: 'Configuración',
                            icon: 'pi pi-th-large',
                            items: [
                                
                            {
                                    label: 'Integraciones',
                                    icon: 'pi pi-fw pi-sliders-v',
                                    routerLink: ['/integraciones/aplicaciones']
                                },
                                {
                                    label: 'Colaboradores',
                                    icon: 'pi pi-fw pi-folder',
                                    routerLink: ['/usuario/colaboradores'],
                                },
                                {
                                    label: 'Formulario',
                                    icon: 'pi pi-fw pi-align-justify',
                                    routerLink: ['/formulario/listado']
                                },

                            ],
                        },
                        {
                            label: 'Clínica',
                            icon: 'pi pi-fw pi-star-fill',
                            items: [
                                {
                                    label: 'Clientes',
                                    icon: 'pi pi-fw pi-id-card',
                                    routerLink: ['/clientes/listado-clientes'],
                                },
                            ],
                        },
                        {
                            label: 'Información',
                            icon: 'pi pi-fw pi-star-fill',
                            items: [
                                {
                                    label: 'Eventos',
                                    icon: 'pi pi-fw pi-id-card',
                                    routerLink: ['/eventos/listado'],
                                },
                            ],
                        },


                    ];
            } else {
                this.model = [
                    {
                        label: 'Clínica',
                        icon: 'pi pi-fw pi-star-fill',
                        items: [
                            {
                                label: 'Clientes',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/clientes/listado-clientes'],
                            },
                        ],
                    }, 
                ];
            }

        }else{
              window.location.reload()
        }

    }
deactivateSideBar() {
             this.layoutService.layoutState.update(state => ({
      ...state,
      profileSidebarVisible: false
    }));
  }
}
