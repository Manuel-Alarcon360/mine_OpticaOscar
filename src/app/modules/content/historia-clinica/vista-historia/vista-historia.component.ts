import { Component, inject, OnDestroy } from '@angular/core';
import { FormularioService } from '@/modules/content/formulario/service/formulario.service';
import { FormArray, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, takeUntil, switchMap, catchError, of, EMPTY, finalize } from 'rxjs';
import { CampoDinamico, Formulario } from '@/core/models/formulario/formulario.models';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { MessageType } from '@/core/models/general/general.models';
import { FluidModule } from 'primeng/fluid';
import { HistoriaClinicaService } from '@/modules/content/historia-clinica/service/historia-clinica.service';
import { EstadosCiviles, HistoriaClinicaRequest } from '@/core/models/historia-clinica/historia-clinica.models';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';
import { Toast } from 'primeng/toast';
import { Cliente } from '@/core/models/cliente/cliente.models';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientesService } from '@/modules/content/clientes/service/clientes.service';
import { TabsModule } from 'primeng/tabs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import generatePDF from '../pdf-historia-clinica/pdf';
import { UsuarioService } from '../../usuario/service/usuario.service';

@Component({
  selector: 'app-vista-historia',
  standalone: true,
  imports: [
    InputIconModule,
    InputGroupAddonModule,
    Toast,
    FloatLabelModule,
    ButtonModule,
    InputGroupModule,
    InputNumberModule,
    CheckboxModule,
    SelectModule,
    DividerModule,
    CommonModule,
    InputTextModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    FluidModule,
    TabsModule,
    ErrorMessagesComponent
  ],
  providers: [MessageService],
  templateUrl: './vista-historia.component.html',
  styleUrl: './vista-historia.component.scss'
})
export class VistaHistoriaComponent implements OnDestroy {

  readonly ERROR_TITLE = 'Error';
  private readonly destroy$ = new Subject<void>();
  tabs: any[] = [];
  camposDinamicos: CampoDinamico[] = [];
  id: number = 0;
  historia: Formulario | null = null;
  estadosCiviles: EstadosCiviles[] = [];
  clientSelect !: Cliente | any;
  today: Date = new Date();
  cliente_id !: number | string | null;
  historia_clinica !: any;
  rolUsuario:string=""

  private readonly formularioService = inject(FormularioService);
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly historiaClinicaService = inject(HistoriaClinicaService);
  private readonly usuarioService = inject(UsuarioService);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly ClienteService = inject(ClientesService);
  public cookieService:CookieService = inject(CookieService)


  informacionPrincipal = this.fb.group({
    historia_clinica: [{ value: '', disabled: true }],
    fecha: [{ value: '', disabled: true }],
    nombre_completo: [{ value: '', disabled: true }, Validators.required],
    fecha_nacimiento: ['', Validators.required],
    edad: [{ value: '', disabled: true }],
    estado_civil: [null, Validators.required],
    eps: ['', Validators.required],
    vinculacion: ['', Validators.required],
    direccion: [{ value: '', disabled: true }, Validators.required],
    telefono: [{ value: '', disabled: true }, Validators.required],
    ocupacion: ['', Validators.required],
    responsable: [''],
    tel_responsable: [''],
    motivo_consulta: ['', Validators.required]
  })

  form = this.fb.group({
    detalle_principal: this.informacionPrincipal,
    campos: this.fb.array([])
  });

  ngOnInit(): void {
    this.cargarDatosFormulario();
    this.loadEstados();
    this.getPaciente();
    this.configurarCalculoEdad();
    this.infoUser()
  }

  private configurarCalculoEdad(): void {
    this.informacionPrincipal.get('fecha_nacimiento')?.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((fechaNacimiento: any) => {
      if (fechaNacimiento) {
        const fecha = fechaNacimiento instanceof Date ? fechaNacimiento : new Date(fechaNacimiento);
        const edad = this.calcularEdad(fecha);
        this.informacionPrincipal.get('edad')?.setValue(edad.toString());
      } else {
        this.informacionPrincipal.get('edad')?.setValue('');
      }
    });
  }

  private calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    // Ajustar la edad si no ha cumplido años este año
    if (mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  }


  get camposFormArray(): FormArray {
    return this.form.get('campos') as FormArray;
  }

  private valorInicialCampo(campo: CampoDinamico): any {
    switch (campo.tipo) {
      case 'checkbox':
        return false;
      case 'number':
        return null;
      default:
        return null;
    }
  }

  agregarCamposDinamicos(): void {
    this.camposFormArray.clear();
    this.camposDinamicos.forEach(campo => {
      let valorInicial = this.valorInicialCampo(campo);
      const controles = this.fb.group({
        id: [campo.id],
        respuesta_campo: [
          valorInicial,
          campo.requerido ? Validators.required : []],
        formulario_fk: this.id
      });
      this.camposFormArray.push(controles);
    });
  }

  private cargarDatosFormulario(): void {

      this.formularioService.$consultarFormularioById('principal').pipe(
        takeUntil(this.destroy$),
        catchError((e) => {
          this.messageService.add({
            severity: MessageType.ERROR,
            summary: this.ERROR_TITLE,
            detail: e.error.errors || 'Error al cargar el formulario'
          });
          return of(null);
        })
      ).subscribe({   //consulta de identificadores de campos por formulario
        next: (respuesta) => {
          if (respuesta) {
            this.id = respuesta.data.formulario.id;
            this.historia = respuesta.data.formulario;
            this.camposDinamicos = respuesta.data.campos.map((campo: any) => ({
              ...campo,
              opciones: this.procesarOpciones(campo.tipo, campo.opciones)
            }));
            this.agregarCamposDinamicos();
          }
        }
      });

  }
  loadEstados() {
    this.historiaClinicaService.getListEstadosCiviles().pipe(
      takeUntil(this.destroy$),
      catchError((error) => {
        console.log('Error cargando estados civiles:', error);
        return of([]);
      })
    ).subscribe((response) => {
      this.estadosCiviles = response;
    });
  }

  handleError(error: any): void {
    const errorMessage = error?.error || 'Ha ocurrido un error inesperado';
    this.showErrorMessage(errorMessage);
  }
  private showErrorMessage(message: string): void {
    this.messageService.add({
      severity: MessageType.ERROR,
      summary: this.ERROR_TITLE,
      detail: message
    });
  }
  private procesarOpciones(tipo: string, opciones: any): string[] | undefined {
    if (tipo === 'select' && opciones) {
      return typeof opciones === 'string' ? opciones.split(',') : opciones;
    }
    return opciones;
  }
  getOpcionesSelect(opciones?: string[]): any[] {
    if (!opciones) return [];
    return opciones.map(opcion => ({
      label: opcion,
      value: opcion
    }));
  }

  onSubmit() {
    const detalles: any[] = this.camposFormArray.controls.map((control, i) => {
      const respuesta_campo = control.get('respuesta_campo')?.value;
      if (respuesta_campo !== null && respuesta_campo !== undefined && respuesta_campo !== '') {
        return {
          campo_fk: control.get('id')?.value,
          respuesta_campo: respuesta_campo
        };
      }
      return null;
    })
      .filter(item => item !== null);
    return detalles;
  }
  construccionDatosEnvio(): void {
    if (this.form.invalid || this.informacionPrincipal.invalid) {
      this.form.markAllAsTouched();
      this.informacionPrincipal.markAllAsTouched();
      return;
    }
    const detalles = this.onSubmit();
    const data: HistoriaClinicaRequest = {
      historia_clinica: {
        motivo_consulta: this.informacionPrincipal.get('motivo_consulta')?.value || '',
        doctor: ""
      },
      detalle_historia: {
        campos: detalles,
        formulario_fk: this.id
      },
      paciente: {
        ...this.informacionPrincipal.value,
        cliente_FK: this.cliente_id
      } as any
    };

    if (this.historia_clinica) {
      data.historia_clinica.id = this.historia_clinica.id;
    }
    this.historiaClinicaService.$createHistoria(data).pipe(
      takeUntil(this.destroy$),
      catchError((error) => {
        this.handleError(error);
        return EMPTY;
      })
    ).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: MessageType.SUCCESS,
          summary: 'Éxito',
          detail: 'Historia clínica creada exitosamente'
        });
        this.form.reset();
        this.cliente_id = null
        this.historia_clinica = null;
        this.informacionPrincipal.reset();
        this.clearNavigationState();
        this.navigateCliente();
      }
    });

  }

  patchValoresCliente(datos_cliente: any) {
    this.informacionPrincipal.patchValue({
      historia_clinica: datos_cliente.numero_identificacion,
      nombre_completo: datos_cliente.complete_name || '',
      direccion: datos_cliente.direccion || '',
      telefono: datos_cliente.telefono || '',
      fecha_nacimiento: datos_cliente.fecha_nacimiento || '',
      edad: datos_cliente.edad || '',
      estado_civil: datos_cliente.estado_civil || '',
      eps: datos_cliente.eps || '',
      vinculacion: datos_cliente.vinculacion || '',
      ocupacion: datos_cliente.ocupacion || '',
      responsable: datos_cliente.responsable || '',
      tel_responsable: datos_cliente.tel_responsable || ''
    });
  }


  private getPaciente() {
    const cliente = this.consumeNavigationState();
    if (!cliente?.id) {
      this.navigateCliente();
      return;
    }

    this.cliente_id = cliente.id;
  //     if (this.cliente_id) {
  //   this.getDetalleHistoriaClinica(this.cliente_id);
  // }
    this.ClienteService.$getpaciente(cliente.id).pipe(
      takeUntil(this.destroy$),
      switchMap((resp: any) => {
        const datos = { ...resp.data, ...cliente };
        this.patchValoresCliente(datos);
        return this.historiaClinicaService.$getHistoriaClinica(resp.data.id);
      }),
      switchMap((respHistoria: any) => {
        this.historia_clinica = respHistoria.data;
        this.informacionPrincipal.get('motivo_consulta')?.setValue(this.historia_clinica.motivo_consulta);
        this.informacionPrincipal.get('motivo_consulta')?.disable();
        this.getDetalleHistoriaClinica(this.historia_clinica.id);
        return of(respHistoria.data);
      }),
      catchError((error) => {
        if (error.status === 404) {
          this.patchValoresCliente(cliente);
// SE REVISA TEMPORALMENTE PARA VERIFICAR PORQUE NO MUESTRA LA HISTORIA CLINICA --- OK ACA
//revisar el campo de fecha de nacimiento que esta obligatoria pora el guardado de la historia clinica
                if (this.cliente_id) {
                  this.getDetalleHistoriaClinica(this.cliente_id);
                }
        } else {
          console.error('Error en getPaciente:', error);
        }
        return EMPTY;
      })
    ).subscribe({
      next: (historiaFinal) => {
        console.log('Proceso completado exitosamente');
      }
    });
  }


  private clearNavigationState(): void {
    this.location.replaceState(this.router.url, '', {});
  }

  private consumeNavigationState(): Cliente | null {
    const cliente = history.state?.cliente || null;
    if (cliente) {
      this.clearNavigationState();
    }
    return cliente;
  }

  private getDetalleHistoriaClinica(id_historia: number | string) {
    this.historiaClinicaService.$getDetalleHistoria(id_historia).pipe(
      takeUntil(this.destroy$),
      ).subscribe({
          next: (respuesta) => {
            if (this.rolUsuario === 'DOCTOR') {
              this.tabs.push({ title: 'Formulario', value: 1, content: 1 })
            }
            Object.keys(respuesta.results).forEach(key => {
              this.tabs.push({ title: key, value: key, content: respuesta.results[key] })
            });
          },
          error: (error) => {
            console.error('Error al obtener detalle de historia clínica:', error);
          }
      });
  }

  navigateCliente() {
    this.router.navigate(['clientes/listado-clientes']);
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.cliente_id = null;
    this.historia_clinica = null;
  }
  private filterInput(respuestas: any[], searchInput: string[]): any[] {
    return respuestas.filter(item => searchInput.includes(item.label_input));
  }

  onGeneratePDF(fecha:string, respuestas:any[]){
    let searchInput = ["RX Final - O.D","RX Final - O.I", "RX Final - ADD","A.V.L. - O.D", "A.V.L. - O.I", "A.V.P. - O.D", "A.V.P. - O.I"];
    let resp = this.filterInput(respuestas, searchInput);
    let observaciones = this.filterInput(respuestas, ["Observaciones"]);
    let datos_paciente = {...this.informacionPrincipal.getRawValue(), fecha, observaciones};
    this.usuarioService.getFirmaEmpleado().pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (firma) => {
        let firma_ = firma.data.imagen
        generatePDF(resp, datos_paciente, firma_);
      },
      error: (error) => {
        let e  = {error:"No se encontró la firma del doctor."}
        this.handleError(e);
        console.error('Error al obtener la firma del doctor:', error);
      }
    });
  }

}
