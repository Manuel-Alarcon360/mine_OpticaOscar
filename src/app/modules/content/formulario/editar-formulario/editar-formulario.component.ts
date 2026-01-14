import { Component, inject, model, OnInit, OnDestroy } from '@angular/core';
import {FluidModule} from 'primeng/fluid';
import {InputTextModule} from 'primeng/inputtext';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectModule} from 'primeng/select';
import {DatePickerModule} from 'primeng/datepicker';
import {TextareaModule} from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { ErrorMessagesComponent } from '@modules/content/errors/error.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CampoDinamico } from '@/core/models/formulario/formulario.models';
import { FormularioService } from '../service/formulario.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-formulario',
  imports: [
      FluidModule,
    ErrorMessagesComponent,
    MenuModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    TooltipModule,
    IconFieldModule,
    FloatLabelModule,
    DividerModule,
    InputIconModule,
    CommonModule,
    Toast,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    TextareaModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  templateUrl: './editar-formulario.component.html',
  styleUrl: './editar-formulario.component.scss'
})
export class EditarFormularioComponent implements OnInit, OnDestroy{
    showSidePanel = false;
    campo_seleccionado !: string;
    opciones: string[] = [];
    nuevaOpcion = '';
    camposDinamicos: CampoDinamico[] = [];
    elementosInactivar: (string | number)[] = [];
    elementosEditados:  CampoDinamico[]  = [];
    id : number = 0;
    listOptionsInputMain = [{label: 'Si', value: true}, {label: 'No', value: false}];
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly formularioService = inject(FormularioService);
    private readonly messageService = inject(MessageService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);

    form = this.fb.group({
        id: [''],
        nombre_campo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
        requerido:[true, [Validators.required]],
        opciones: [''],
        estado_campo: [],
        fecha_creacion: [],
        fecha_actualizacion: [],
        formulario_FK: [],
    });

    formNombre = this.fb.group({
      principal: [false, [Validators.required]],
      nombre_formulario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
    });

    ngOnInit(): void {
      this.cargarDatosFormulario();
    }

    private cargarDatosFormulario(): void {

      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.id = id;
      if (id) {
        this.formularioService.$consultarFormularioById(id).subscribe({
          next: (respuesta) => {
            this.formNombre.patchValue({
              nombre_formulario: respuesta.data.formulario.nombre_formulario,
              principal: respuesta.data.formulario.principal
            });

            this.camposDinamicos = respuesta.data.campos.map((campo: any) => ({
              ...campo,
              tipo: this.mapearTipoCampo(campo.tipo),
              opciones: this.procesarOpciones(campo.tipo, campo.opciones)
            }));
          },
          error: (error) => {
            console.error('Error al cargar los datos del formulario:', error);
          }
        });
      }
    }

    private mapearTipoCampo(tipo: string): string {
      const mapeoTipos: { [key: string]: string } = {
        'text': 'Agregar campo de texto',
        'textarea': 'Agregar área de texto',
        'number': 'Agregar campo numérico',
        'select': 'Agregar lista desplegable',
        'checkbox': 'Agregar casilla de verificación'
      };

      return mapeoTipos[tipo] || tipo;
    }

    private procesarOpciones(tipo: string, opciones: any): string[] | undefined {
      if (tipo === 'select' && opciones) {
        return typeof opciones === 'string' ? opciones.split(',') : opciones;
      }
      return opciones;
    }

    notificacion(severity: string, summary: string, detail: string): void {
      this.messageService.add({ severity, summary, detail });
    }

    onSubmit(): void {
        // Validar que para lista desplegable existan opciones
        if ((this.campo_seleccionado === 'Agregar lista desplegable' || this.campo_seleccionado === 'Editar lista desplegable') && this.opciones.length === 0) {
            this.notificacion('warn', 'Advertencia', 'Debe agregar al menos una opción para la lista desplegable');
            return;
        }

        if (this.form.valid) {
            if(this.campo_seleccionado.includes('Editar')){
                // Editar campo existente
                const campoExistenteIndex = this.camposDinamicos.findIndex(campo =>String(campo.id) === String(this.form.value.id));
                if (campoExistenteIndex !== -1) {
                    // Actualizar el campo existente
                    this.camposDinamicos[campoExistenteIndex] = {
                        ...this.camposDinamicos[campoExistenteIndex],
                        nombre_campo: this.form.value.nombre_campo || '',
                        requerido: this.form.value.requerido || false,
                        opciones: this.form.value.opciones ? this.opciones : this.camposDinamicos[campoExistenteIndex].opciones
                    };
                    const nuevoElemento = this.camposDinamicos[campoExistenteIndex];
                    const indexExistente = this.elementosEditados.findIndex((item) => item.id === nuevoElemento.id);

                   if (indexExistente !== -1) {
                      this.elementosEditados[indexExistente] = nuevoElemento;
                    } else {
                      this.elementosEditados.push(nuevoElemento);
                    }
                  this.notificacion('success', 'Éxito', 'Campo actualizado correctamente');
                }
            } else {
                // Crear nuevo campo
                const nuevoCampo: CampoDinamico = {
                    id: this.generarId(),
                    nombre_campo: this.form.value.nombre_campo || '',
                    tipo: this.campo_seleccionado,
                    requerido: this.form.value.requerido || false,
                    opciones: this.campo_seleccionado === 'Agregar lista desplegable' ? [...this.opciones] : undefined
                };
                this.camposDinamicos.push(nuevoCampo);
                this.notificacion('success', 'Éxito', 'Campo agregado correctamente');
            }

            this.resetearFormulario();
        } else {
            // Marca todos los campos como tocados para mostrar errores
            this.form.markAllAsTouched();
            this.notificacion('error', 'Error', 'Por favor complete todos los campos requeridos');
            console.log('Formulario inválido');
        }
    }

    private resetearFormulario(): void {
        this.form.reset({
            nombre_campo: '',
            requerido: true,
            opciones: ''
        });
        this.opciones = [];
        this.nuevaOpcion = '';
        this.showSidePanel = false;
    }

    toggleSidePanel(label: string): void {
        this.campo_seleccionado = label;
        if (!this.showSidePanel) {
            this.showSidePanel = true;
        }
        this.opciones = [];
        this.nuevaOpcion = '';
    }

    edicionCampo(campo: any, accion: string): void {
      this.form.patchValue(campo);
      this.toggleSidePanel(accion);
      if (accion === 'Editar lista desplegable' && campo.opciones) {
        this.opciones = Array.isArray(campo.opciones) ? [...campo.opciones] : [];
        this.actualizarFormularioOpciones();
      }
    }

    cerrarSidePanel(): void {
        this.showSidePanel = false;
        this.resetearFormulario();
    }

    agregarOpcion(): void {
        const opcionTrimmed = this.nuevaOpcion.trim();
        if (opcionTrimmed && !this.existeOpcion(opcionTrimmed)) {
            this.opciones.push(opcionTrimmed);
            this.nuevaOpcion = '';
            this.actualizarFormularioOpciones();
        }
    }

    private existeOpcion(opcion: string): boolean {
        return this.opciones.some(op => op.toLowerCase() === opcion.toLowerCase());
    }

    eliminarOpcion(index: number): void {
        if (index >= 0 && index < this.opciones.length) {
            this.opciones.splice(index, 1);
            this.actualizarFormularioOpciones();
        }
    }

    private actualizarFormularioOpciones(): void {
        this.form.patchValue({
            opciones: this.opciones.join(',')
        });
    }

    private generarId(): string {
        return 'campo_' + Math.random().toString(36).substr(2, 9);
    }

    eliminarCampo(id: string): void {
        this.camposDinamicos = this.camposDinamicos.filter(campo => campo.id !== id);
        this.elementosInactivar.push(id)
        this.cerrarSidePanel();
    }


    getOpcionesSelect(opciones?: string[]): any[] {
        if (!opciones) return [];
        return opciones.map(opcion => ({
            label: opcion,
            value: opcion
        }));
    }

    saveForm(): void {

      if (this.formNombre.invalid) {
        this.formNombre.markAllAsTouched();
        this.notificacion('error', 'Error', 'El nombre del formulario es inválido');
        return;
      }
      let formulario = {
        nombre_formulario: this.formNombre.value.nombre_formulario ,
        principal: this.formNombre.value.principal,
        campos_datos: this.camposDinamicos,
        campos_inactivar: this.elementosInactivar,
        campos_editados: this.elementosEditados,
      }
      this.formularioService.$actualizarFormulario(this.id, formulario).subscribe({
        next: (response) => {
          this.notificacion('success', 'Correcto', 'Formulario guardado exitosamente');
          this.formNombre.reset();
          this.camposDinamicos = [];
          this.showSidePanel = false;
          setTimeout(() => {
            this.router.navigateByUrl('/formulario/listado');
          }, 1000);
        },
        error: (e) => {
          if (e.status === 400) {
            this.notificacion('error', 'Error',  e.error.errors);
            return;
          }
          this.notificacion('error', 'Error', 'Error al guardar formulario');
        }
      });
    }

    ngOnDestroy(): void {
      this.elementosInactivar = []
      this.formNombre.reset();
      this.form.reset();
      this.camposDinamicos = [];
      this.showSidePanel = false;
    }
}
