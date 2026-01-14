import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators ,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';
import { InputTextModule } from 'primeng/inputtext';
import { IntegracionesService } from '@/modules/content/integracion/service/integraciones.service';
import { MessageType } from '@/core/models/general/general.models';
import { IntegracionResponse, Rsta_integracion } from '@/core/models/integraciones/integraciones';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-integraciones',
  imports: [
    FloatLabelModule,
    TableModule,
    CommonModule,
    ButtonModule,
    Toast,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    FluidModule,
    ReactiveFormsModule,
    ErrorMessagesComponent,
    InputTextModule,
    ConfirmDialog,
    FormsModule,
    

  ],
  providers: [MessageService,ConfirmationService],
  templateUrl: './integraciones.component.html',
  styleUrl: './integraciones.component.scss'
})
export class IntegracionesComponent implements OnInit {

  readonly NO_APLICATION_MESSAGE = 'Aún no tiene aplicaciones registradas';
  readonly SUCCESS_UPDATE_MESSAGE = 'Se actualizó aplicación correctamente';
  readonly SUCCESS_REGISTER_MESSAGE = 'Aplicación registrada correctamente';
  readonly SUCCESS_DELETE_MESSAGE = 'Aplicación eliminada correctamente';
  readonly ERROR_TITLE = 'Error';
  readonly SUCCESS_TITLE = 'Correcto';

  menuItems: MenuItem[] = [];
  dialogVisible:boolean = false;
  updateApp: boolean = false;
  aplicacionForm: FormGroup;
  aplicaciones: Rsta_integracion[] = [];

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly integracionService = inject(IntegracionesService);
  private readonly confirmationService = inject(ConfirmationService);

  constructor() {
    this.aplicacionForm = this.initializeForm();
  }
  ngOnInit(): void {
    this.listAplicaciones();
  }
  private initializeForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre_aplicacion: ['', Validators.required],
      token_aplicacion: ['',Validators.required],
    });
  }
  listAplicaciones(): void {
    this.integracionService.getListAplicaciones().subscribe({
      next: (response:IntegracionResponse) => {
        this.aplicaciones = response.results;
      },error: (error) => this.handleError(error)
    })   
  }
  closeDialog(): void {
    this.updateApp = false
    this.dialogVisible = false;
    this.aplicacionForm.reset();
  }
  openUpdateAppDialog(aplicacion: any): void {
    this.updateApp = true
    this.dialogVisible = true;
    this.aplicacionForm.patchValue(aplicacion);
  }
  saveAplicacion(data:any): void {
    const isUpdate = data.value.id != null && data.value.id !== '';
    if (isUpdate) {
     this.updateExistingAplication(data.value);  
    } else {
      this.createNewAplication(data.value);
    }
    this.closeDialog();
  } 
  createNewAplication(data:any): void {
    this.integracionService.registrarColaborador(data).subscribe({
      next: (response) => {
        this.listAplicaciones();
        this.showSuccessMessage(response.detail || this.SUCCESS_REGISTER_MESSAGE);
      },
      error: (error) => this.handleError(error)
    });
  } 
  updateExistingAplication(data:any): void {
        this.integracionService.UpdateEmpleado(data).subscribe({
      next: (response) => { 
        this.listAplicaciones();
        this.showSuccessMessage(response.detail || this.SUCCESS_UPDATE_MESSAGE);
      },
      error: (error) => this.handleError(error)
    });
  }
  deleteAplicacion(aplicacion: any): void {
        this.integracionService.deleteAplicacion(aplicacion.id).subscribe({
      next: () => {
        this.listAplicaciones();
      },
      error: (error) => this.handleError(error)
    });
  }
  private showSuccessMessage(message: string): void {
    this.messageService.add({
      severity: MessageType.SUCCESS,
      summary: this.SUCCESS_TITLE,
      detail: message
    });
  }
  private handleError(error: any): void {
    this.messageService.add({
      severity: MessageType.ERROR,
      summary: this.ERROR_TITLE,
      detail: error?.message || 'Ocurrió un error inesperado'
    });
  }
  confirm(aplicacion: any): void {
        this.confirmationService.confirm({
            header: '¿Eliminar integración?',
            message: 'Por favor confirma si deseas eliminar la integración con la aplicación',
            icon: 'pi pi-trash',
            accept: () => {
              this.deleteAplicacion(aplicacion);
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Proceso cancelado', life: 3000 });
            }
        });
  }
}
