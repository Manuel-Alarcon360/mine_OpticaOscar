import { Component, inject, signal } from '@angular/core';
import { FormularioService } from '../service/formulario.service';
import { PaginatorData } from '@/core/models/general/general.models';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { Formulario } from '@/core/models/formulario/formulario.models';
import { Tooltip } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-consulta-form',
  imports: [
    ButtonModule,
    TableModule,
    Toast,
    Tooltip,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './consulta-form.component.html',
  styleUrl: './consulta-form.component.scss'
})
export class ConsultaFormComponent {
    formularioService = inject(FormularioService);
    router = inject(Router);
    listadoFormularios = signal<Formulario[]>([]);
    rolUsuario:string=""
    private readonly messageService = inject(MessageService);
    private readonly confirmationService = inject(ConfirmationService);
    public cookieService:CookieService = inject(CookieService)
    ngOnInit() {
      this.loadFormularios();
      this.infoUser()
    }

    loadFormularios() {
      this.formularioService.$consultarFormularios().subscribe({
        next: (data: PaginatorData<Formulario>) => {
          this.listadoFormularios.set(data.results);
        },
        error: (error) => {
          console.error('Error fetching formularios:', error);
        }
      });
    }

    deleteFormulario(id: number) {
      this.formularioService.$deleteFormulario(id).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Formulario eliminado correctamente' });
          this.loadFormularios();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el formulario'});
        }
      });
    }

    navigate(uri:string, params = null){
      if(params){
        this.router.navigateByUrl(`${uri}/${params}`);
        return;
      }
      this.router.navigateByUrl(`${uri}`);
    }

    confirm(id: number): void {
        this.confirmationService.confirm({
            header: 'Confirmación',
            message: 'Por favor confirme la eliminación del formulario',
            icon: 'pi pi-trash',
            accept: () => {
              this.deleteFormulario(id);
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Proceso cancelado'});
            }
        });
  }
      infoUser(){
          let resfresh = this.cookieService.check("refreshOptica")
          if(resfresh){
            const decoded_refresh:any = jwtDecode(this.cookieService.get("refreshOptica"))
            this.rolUsuario = decoded_refresh.usuario.name_group
          }else{
            window.location.reload()
      }
    }
}
