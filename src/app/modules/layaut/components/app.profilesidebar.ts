import { Component, computed, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge';
import { LayoutService } from '@/modules/layaut/service/layout.service';
import { AuthService } from '@/modules/auth/service/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { ChangePasswordComponent } from '@/modules/auth/change-password/change-password.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
    selector: '[app-profilesidebar]',
    imports: [
    ButtonModule,
    DrawerModule,
    BadgeModule,
    ToastModule,
    
],
    providers: [MessageService] ,
    template: `
        <p-drawer
            [visible]="visible()"
            (onHide)="onDrawerHide()"
            position="right"
            [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
            styleClass="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div class="flex flex-col mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Bienvenido</span>
                <span
                    class="text-surface-500 dark:text-surface-400 font-medium mb-8"
                    >
                    {{nombreUsuario}}
                    </span>

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150" (click)="changePassword()"
                        >
                            <span>
                                <i class="pi pi-user text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Configuración</span>
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    Cambiar contraseña
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150" (click)="logOut()">
                            <span>
                                <i
                                    class="pi pi-power-off text-xl text-primary"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Cerrar sessión</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">
                                    Salir del sistema
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
    `,
})
export class AppProfileSidebar {
    private authService = inject(AuthService)
    private messageService : MessageService = inject(MessageService)
    private router :Router = inject(Router)
    private cookieService:CookieService =  inject(CookieService)
    public layoutService: LayoutService = inject(LayoutService);
    nombreUsuario = "";
    showChangePassword = signal(false);
    ngOnInit(){
      this.infoUser()
    }
    visible = computed(
        () => this.layoutService.layoutState().profileSidebarVisible,
        
    );

    onDrawerHide() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: false,
        }));
    }
    logOut(){
      this.authService.logOutSystem().subscribe(res=>{
        this.messageService.add({severity:"success", summary:"Correcto", detail:"Cierre de sesión exitoso"})
        this.router.navigateByUrl("/landing")
        this.cookieService.deleteAll("/")
      },err=>{
        this.messageService.add({severity:"warning", summary:"Correcto", detail:"Cierre de sesión forzado"})
        this.router.navigateByUrl("auth/login")
        this.cookieService.deleteAll("/")
      })
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
   changePassword() {
        this.layoutService.layoutState.update((state) => ({
                ...state,
                profileSidebarVisible: false,
            }));
        this.layoutService.showChangePassword();
    }

}
