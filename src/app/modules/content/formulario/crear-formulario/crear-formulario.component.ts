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
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-formulario',
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
  templateUrl: './crear-formulario.component.html',
  styleUrl: './crear-formulario.component.scss'
})

export class CrearFormularioComponent implements OnDestroy {
    showSidePanel = false;
    campo_seleccionado !: string;
    opciones: string[] = [];
    nuevaOpcion = '';
    camposDinamicos: CampoDinamico[] = [];

    private readonly fb = inject(NonNullableFormBuilder);
    private readonly formularioService = inject(FormularioService);
    private readonly messageService = inject(MessageService);
    private readonly router = inject(Router);
    listOptionsInputMain = [{label: 'Si', value: true}, {label: 'No', value: false}];
    form = this.fb.group({
        nombre_campo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
        requerido:[true, [Validators.required]],
        opciones: [''],
    });

    formNombre = this.fb.group({
      principal: [false, [Validators.required]],
      nombre_formulario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
    });

    notificacion(severity: string, summary: string, detail: string): void {
      this.messageService.add({ severity, summary, detail });
    }

    onSubmit(): void {
        // Validar que para lista desplegable existan opciones
        if (this.campo_seleccionado === 'Agregar lista desplegable' && this.opciones.length === 0) {
            console.log('Debe agregar al menos una opción para la lista desplegable');
            return;
        }

        if (this.form.valid) {

            // Crear nuevo campo dinámico
            const nuevoCampo: CampoDinamico = {
                id: this.generarId(),
                nombre_campo: this.form.value.nombre_campo || '',
                tipo: this.campo_seleccionado,
                requerido: this.form.value.requerido || false,
                opciones: this.campo_seleccionado === 'Agregar lista desplegable' ? [...this.opciones] : undefined
            };

            // Agregar al array de campos dinámicos
            this.camposDinamicos.push(nuevoCampo);

            this.resetearFormulario();
        } else {
            // Marca todos los campos como tocados para mostrar errores
            this.form.markAllAsTouched();
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
        nombre_formulario: this.formNombre.value.nombre_formulario,
        campos: this.camposDinamicos,
        principal: this.formNombre.value.principal,
      }
      this.formularioService.$crearFormulario(formulario).subscribe({
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
          console.log(e);
          if (e.status === 400) {
            this.notificacion('error', 'Error',  e.error.errors);
            return;
          }
          this.notificacion('error', 'Error', 'Error al guardar formulario');
        }
      });
    }

    ngOnDestroy(): void {
      console.log("destruir");
      this.formNombre.reset();
      this.form.reset();
      this.camposDinamicos = [];
      this.showSidePanel = false;
    }
}
