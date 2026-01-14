import { Component, inject } from '@angular/core';
import { EventoService } from '../service/evento.service';
import { Tooltip } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { PaginatorData } from '@/core/models/general/general.models';
import { Evento, TipoEvento } from '@/core/models/eventos/evento.models';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { FloatLabelModule } from "primeng/floatlabel"
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { PrimeNG } from 'primeng/config';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { Select } from 'primeng/select';
import { FluidModule } from 'primeng/fluid';
import { DatePickerModule } from 'primeng/datepicker';
import { ErrorMessagesComponent } from '../../errors/error.component';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
  selector: 'app-consulta-evento',
  imports: [
        ButtonModule,
        TableModule,
        Toast,
        Tooltip,
        ConfirmDialogModule,Dialog, InputTextModule,
        FloatLabelModule, InputTextModule, FormsModule,
        FileUpload,
        BadgeModule,ReactiveFormsModule,
        ProgressBar,MultiSelectModule,Select,DatePickerModule,FluidModule,
        ToastModule, HttpClientModule, CommonModule,TextareaModule,ErrorMessagesComponent,ToggleSwitch
  ],
  templateUrl: './consulta-evento.component.html',
  styleUrl: './consulta-evento.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class ConsultaEventoComponent {

  rolUsuario: string = "DOCTOR" 
  listEventos: Evento[] = [];  // Pendiente de revisar si se usa esta variable para eliminar
  eventos:Evento[] = [];
  visibleDialog: boolean = false;
  tipoEventos:TipoEvento[] = [];
  eventoForm!: FormGroup;
  editEvent:boolean = false
  eventoSel!:any 
  addImage:boolean = false
  //  ********************
  files: File[] = [];
  totalSize : number = 0;
  totalSizePercent : number = 0;
  progress = 0;

  
  router = inject(Router);
  private readonly eventoService = inject(EventoService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly config = inject(PrimeNG)


  constructor( ) { this.eventoForm = this.inicializaForm()}

  ngOnInit() {
    this.listTipoEvento()
    this.loadEventos()
    this.eventoForm = this.inicializaForm()
  }
  loadEventos() {
      this.eventoService.$consultaEventos().subscribe({
        next: (eventos: PaginatorData<Evento>) => {
          this.eventos = eventos.results
        },
        error: (error) => {
          console.error('Error fetching formularios:', error);
        }
      });
  }
  listTipoEvento(){
    this.eventoService.$listTipoEvento().subscribe({
            next: (data: any) => {
              this.tipoEventos = data.tipo_evento
            },
            error: (error:any) => {
              console.error('Error fetching formularios:', error);
            }
          });
  }
  inicializaForm():FormGroup {
    return this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      tipo_evento: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      imagen_evento: [''] 
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
            message: 'Por favor confirme la eliminación del evento.',
            icon: 'pi pi-trash',
            accept: () => {
              this.deleteFormulario(id);
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Proceso cancelado'});
            }
        });
  }
    deleteFormulario(id: number) {
      this.eventoService.$deleteEvento(id).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Evento eliminado correctamente' });
          this.loadEventos();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el Evento'});
        }
      });
    }
    
    saveForm(){
      if(this.eventoForm.invalid ){
        this.eventoForm.markAllAsTouched();
      }else{
          const formData = new FormData();
          if (this.eventoForm.value.id) {
            formData.append('id', this.eventoForm.value.id.toString());
          }
          formData.append('titulo', this.eventoForm.value.titulo);
          formData.append('tipo_evento', this.eventoForm.value.tipo_evento.value);
          formData.append('fecha_inicio', this.changeFormatDate(this.eventoForm.value.fecha_inicio)  );
          formData.append('fecha_fin', this.changeFormatDate(this.eventoForm.value.fecha_fin));
          formData.append('descripcion', this.eventoForm.value.descripcion);
          if (this.files && this.files.length > 0) {
            formData.append('imagen_evento', this.files[0]); // <-- aquí va el archivo real
          }
          this.addImage = false
          if (this.eventoForm.value.id) {
            this.eventoService.$actualizarEvento(this.eventoForm.value.id,formData).subscribe({
              next: (response) => {
                      this.notificacion('success', 'Correcto', 'Formulario editado exitosamente');
                      this.eventoForm.reset();
                      this.visibleDialog = false;
                      this.loadEventos();
                    },
                    error: (e) => {
                      console.log(e);
                      if (e.status === 400) {
                        this.notificacion('error', 'Error',  e.error.errors);
                        return;
                      }
                      this.notificacion('error', 'Error', 'Error al editar el evento');
                    }
            })
          }else{
                    this.eventoService.$crearEvento(formData).subscribe({
                    next: (response) => {
                      this.notificacion('success', 'Correcto', 'Evento guardado exitosamente');
                      this.eventoForm.reset();
                      this.visibleDialog = false;
                      this.loadEventos();

                    },
                    error: (e) => {
                      console.log(e);
                      if (e.status === 400) {
                        this.notificacion('error', 'Error',  e.error.errors);
                        return;
                      }
                      this.notificacion('error', 'Error', 'Error al guardar evento');
                    }
                  });
          }

      }
    }
    changeFormatDate(date: Date | string): string {
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    }
    notificacion(severity: string, summary: string, detail: string): void {
      this.messageService.add({ severity, summary, detail });
    }
    updateEvento(item_id:any): void {
      
      if (item_id) {
        this.eventoService.$consultarEventoById(item_id).subscribe({
          next: (respuesta) => {
            this.eventoSel = respuesta;
            const evento = respuesta.data.evento;
            evento.tipo_evento = this.tipoEventos.find(t => t.value === respuesta.data.evento.tipo_evento);
            evento.fecha_inicio = evento.fecha_inicio? new Date(evento.fecha_inicio): null;
            evento.fecha_fin = evento.fecha_fin ? new Date(evento.fecha_fin) : null;
            this.eventoForm.patchValue(evento);
            this.visibleDialog = true;
            this.editEvent = true;
          },
          error: (error) => {
            console.error('Error al cargar los datos del formulario:', error);
          }
        });
      }
    }
    closeDialog(): void {
      this.visibleDialog = false
      this.eventoForm.reset();
      this.editEvent = false;
      this.addImage = false
      
    }
    openCrearEvento(): void {
      this.visibleDialog = true;
      this.addImage = true;
    }
    changeImage(){
      this.addImage = true
    }
    cambiarMostrarEnLanding(item: any) {
      const estadoAnterior = !item.mostrar_en_landing;
      item.cambiandoSwitch = true;
      this.eventoService.$cambiarMostrarLanding(item.id,{ mostrar_en_landing: item.mostrar_en_landing}).subscribe({
        next: () => {
          const accion = item.mostrar_en_landing ? 'activó' : 'desactivó';
          this.messageService.add({
            severity: 'success',summary: 'Éxito', detail: `El evento se ${accion} en la pagina principal.`
          });
          item.cambiandoSwitch = false;
          console.log(item)
        },
        error: () => {
          item.mostrar_en_landing = estadoAnterior;
          item.cambiandoSwitch = false;
          this.messageService.add({severity: 'error',summary: 'Error',detail: 'No se pudo actualizar el estado. Se revirtió el cambio.'
          });
        }
      });
    }




    //region Carga imagen
    //Carga de imagen / solo una por evento
      choose(event: Event,  callback: () => void) {
        callback();
      }
      onRemoveTemplatingFile(  event: Event,
        file: File,
        removeFileCallback: (event: Event, index: number) => void,
        index: number) {
        removeFileCallback(event, index);
        this.progress = 0;
        this.files = []
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
      }
      clearCallback(clear: () => void) {
        clear();
        this.progress = 0;
        this.totalSize = 0;
        this.totalSizePercent = 0;
      }
      onTemplatedUpload() {
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: 'File Uploaded',
          life: 3000,
        });
      }
      onSelectedFiles(event: any) {
      this.files = event.currentFiles.slice(-1);
      this.progress = 100;
      }
      uploadEvent(callback: () => void) {
        callback();
      }
      formatSize(bytes: number): string {
        const k = 1024;
        const dm = 2;
        const sizes = this.config.translation?.fileSizeTypes ?? ['B', 'KB', 'MB', 'GB'];
        if (bytes === 0) {
          return `0 ${sizes[0]}`;
        }
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
        return `${formattedSize} ${sizes[i]}`;
      }



}
