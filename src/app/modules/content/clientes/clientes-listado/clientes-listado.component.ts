import { Cliente } from '@/core/models/cliente/cliente.models';
import { Column } from '@/core/models/general/general.models';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { Menu } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Tooltip } from 'primeng/tooltip';
import { ClientesService } from '../service/clientes.service';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog, DialogModule } from 'primeng/dialog';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { countries } from '../../../../../assets/list_pais';
import { Select } from 'primeng/select';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-listado',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    ToastModule,
    InputGroupModule,
    Tooltip,
    InputTextModule,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    Select,
    FloatLabel,
    ReactiveFormsModule,
    ErrorMessagesComponent,
    DividerModule


  ],
  providers: [MessageService],
  templateUrl: './clientes-listado.component.html',
  styleUrl: './clientes-listado.component.scss'
})
export class ClientesListadoComponent {

    cols!: Column[];
    tableClient !: Cliente[]
    currentPage:number = 10;
    totalRecords: number = 0;
    modalVisible:boolean = false
    country = countries
    clientForm: FormGroup;
    searchValue !: string

    listDocuments = [
      { label: 'Cédula de ciudadanía', tipo_documento: 'CC' },
      { label: 'Cédula de extranjería', tipo_documento: 'CE' },
      { label: 'Pasaporte', tipo_documento: 'PA' },
      { label: 'Tarjeta de identidad', tipo_documento: 'TI' },
      { label: 'Nit', tipo_documento: 'NIT' }

    ];


  private serviceCliente: ClientesService =  inject(ClientesService)
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly messageService = inject(MessageService);
  private router = inject(Router);

  constructor() {
    this.clientForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeColumns()
  }
  private initializeForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      pais: ['+57', Validators.required],
      tipo_documento: [null,Validators.required],
      numero_identificacion: ['',Validators.required],
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      correo: [''],
      telefono: ['',Validators.required],
      direccion: [''],
    });
  }

  initializeColumns(){
    this.cols = [
      { field: 'actions', header: 'actions' },
      { field: 'numero_identificacion', header: '# identificacion' },
      { field: 'complete_name', header: 'Nombre' },
      { field: 'correo', header: 'Correo' },
      { field: 'telefono', header: 'Teléfono' },

    ];

  }
  viewModal(){
    this.modalVisible = true
  }

  loadLazy(event: any){
    this.currentPage = (event.first ? Math.floor(event.first / (event.rows || 1)):0) + 1
    this.serviceCliente.getClient(this.currentPage).subscribe({
      next:(resp:any)=>{
        this.tableClient = resp.results
        this.totalRecords = resp.count
      },
      error: (error) => {
        this.viewnotificacion('error', 'Error', 'Se presento un problema al cargar los clientes');
      }
    })
  }
  getSearchClient(){
        this.serviceCliente.getClientSearch(this.searchValue).subscribe(res=>{
        this.tableClient = res
      })
  }
  historialCliente(){
  }
  validateForm(){
    if (this.clientForm.valid) {
        this.serviceCliente.crearCliente(this.clientForm.value).subscribe({
        next: () => {
          this.viewnotificacion('success', 'Correcto', 'Cliente guardado correctamente');
          this.clientForm.reset()
        },
        error: (error) => {
          this.viewnotificacion('error', 'Error', 'Error al guardar el cliente');
        }
      });

    }
  }
  closeDialog(): void {
    this.modalVisible = false
    this.clientForm.reset();
  }
  viewnotificacion(severity: string, summary: string, detail: string): void {
      this.messageService.add({ severity, summary, detail });
    }
  viewHistoriaCliente(cliente:any){
      this.router.navigate(['/historia/historia-clinica'], { state: { cliente } });
  }
  clearFiltros() {
    this.searchValue = ''; 
    this.loadLazy({ first: 0, rows: 10 }); 
  }
  newHistoriaCliente(){
      this.router.navigate(['/historia/historia-clinica']);  // Revisar porque en el componente de vista-formulario en el metodo getPaciente()  se encuentra la condicion si hay datos o no para redireccionar nuevamente a clientes confirmar con darguin el esta en ese componente
  }
}
