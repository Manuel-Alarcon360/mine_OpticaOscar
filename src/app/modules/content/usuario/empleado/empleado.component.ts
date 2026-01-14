import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Empleado, EmpleadoExtendido, EstadoEmpleado, Rol, Rol_ } from '@/core/models/usuario/usuario.interface';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { Toast } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageType, PaginatorData, SeverityType } from '@/core/models/general/general.models';
import { UsuarioService } from '@/modules/content/usuario/service/usuario.service';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { FileUploadModule } from 'primeng/fileupload';



@Component({
  selector: 'app-empleado',
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    Menu,
    DialogModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    ErrorMessagesComponent,
    IconFieldModule,
    InputIconModule,
    DividerModule,
    SelectModule,
    Toast,
    FloatLabelModule,
  ],
  providers: [MessageService],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent implements OnInit {
  // Constants
  private readonly CONSTANTS = {
    NO_LOGIN_MESSAGE: 'Aún no tiene registros',
    SUCCESS_UPDATE_MESSAGE: 'Se actualizó estado',
    SUCCESS_REGISTER_MESSAGE: 'Usuario registrado correctamente',
    SUCCESS_UPDATE_COMPLETE_MESSAGE: 'Actualizado correctamente',
    ERROR_TITLE: 'Error',
    SUCCESS_TITLE: 'Correcto',
    ERROR_MESSAGES: {
      LOAD_EMPLEADOS: 'Se presentó un problema al cargar los empleados',
      LOAD_GROUPS: 'Se presentó un problema al cargar los grupos de selección',
      CHANGE_STATUS: 'Se presentó un problema al cambiar el estado del colaborador',
      CHANGE_PASSWORD: 'Se presentó un problema al cambiar la contraseña del colaborador',
      UPDATE_EMPLEADO: 'Se presentó un problema al modificar el colaborador',
      CREATE_EMPLEADO: 'Se presentó un problema al crear el empleado',
      GET_FIRMA: 'Se presentó un problema al obtener la firma digital'
    }
  } as const;

  // Signals for reactive state management
  readonly empleadosList = signal<EmpleadoExtendido[]>([]);
  readonly roles = signal<Rol[]>([]);
  readonly isDialogVisible = signal<boolean>(false);
  readonly isPasswordVisible = signal<boolean>(false);
  readonly changePassword = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  readonly empleadoSeleccionado = signal<EmpleadoExtendido | null>(null);

  // File upload
  readonly hasFieldUpload = signal<boolean>(false);
  private firmaFile: File | null = null;
  readonly hasFileSelected = signal<boolean>(false);
  readonly selectedFileName = signal<string>('');

  // Computed values
  readonly dialogTitle = computed(() =>
    !this.isPasswordVisible() ? 'Actualización' : 'Registro'
  );

  readonly submitButtonLabel = computed(() =>
    this.isPasswordVisible() ? 'Registrar' : 'Actualizar'
  );

  readonly passwordLabel = computed(() =>
    this.isPasswordVisible() ? 'Contraseña' : 'Nueva contraseña'
  );

  readonly passwordToggleLabel = computed(() =>
    this.changePassword() ? 'Cancelar cambio de contraseña' : 'Restaurar contraseña'
  );

  readonly textButtonUpload = computed(() =>{
    return this.hasFieldUpload() ? 'Cambiar archivo' : 'Seleccionar archivo';
  })

  // Signal para verificar si el rol seleccionado es DOCTOR
  readonly isRolDoctor = signal<boolean>(false);

  menuItems: MenuItem[] = [];
  empleadoForm!: FormGroup;

  // Dependency injection
  private readonly usuarioService = inject(UsuarioService);
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly messageService = inject(MessageService);

  constructor() {
    this.empleadoForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.empleadoForm = this.initializeForm();
    this.loadInitialData();
    this.setupRolChangeListener();
  }

  private setupRolChangeListener(): void {
    this.empleadoForm.get('id_rol')?.valueChanges.subscribe((selectedRolId) => {
      // Actualizar el signal de isRolDoctor
      const selectedRol = this.roles().find(rol => rol.id === selectedRolId);
      const isDoctorRol = selectedRol?.name === 'DOCTOR';
      this.isRolDoctor.set(isDoctorRol);

      // Si el rol cambia y NO es DOCTOR, limpiar el archivo de firma
      if (!isDoctorRol) {
        this.firmaFile = null;
        this.hasFileSelected.set(false);
        this.selectedFileName.set('');
      }
    });
  }

  private loadInitialData(): void {
    this.isLoading.set(true);

    forkJoin({
      empleados: this.usuarioService.getListEmpleados(),
      groups: this.usuarioService.getListGroups()
    }).pipe(
      finalize(() => this.isLoading.set(false)),
      catchError(error => {
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.LOAD_EMPLEADOS);
        return of(null);
      })
    ).subscribe({
      next: (result) => {
        if (result) {
          this.empleadosList.set(this.mapEmpleadosResponse(result.empleados.results));
          this.roles.set(result.groups.results);
        }
      }
    });
  }

  private initializeForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      id_rol: ['', Validators.required]
    });
  }

  private loadEmpleadosList(): void {
    this.isLoading.set(true);
    this.usuarioService.getListEmpleados().pipe(
      finalize(() => this.isLoading.set(false)),
      catchError(() => {
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.LOAD_EMPLEADOS);
        return of({ results: [], count: 0, next: null, previous: null } as PaginatorData<Empleado>);
      })
    ).subscribe({
      next: (response: PaginatorData<Empleado>) => {
        this.empleadosList.set(this.mapEmpleadosResponse(response.results));
      }
    });
  }

  private loadGroups(): void {
    this.usuarioService.getListGroups().pipe(
      catchError(() => {
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.LOAD_GROUPS);
        return of({ results: [], count: 0, next: null, previous: null } as Rol_);
      })
    ).subscribe({
      next: (response: Rol_) => {
        this.roles.set(response.results);
      }
    });
  }

  private mapEmpleadosResponse(empleados: Empleado[]): EmpleadoExtendido[] {
    return empleados.map(empleado => ({
      ...empleado,
      nombre_completo: this.buildFullName(empleado.first_name, empleado.last_name),
      fechaUltimoIngreso: this.formatLastLoginDate(empleado.last_login),
      estado: this.getEmpleadoStatus(empleado)
    }));
  }

  private getEmpleadoStatus(empleado: any): EstadoEmpleado {
    return empleado.is_active ? EstadoEmpleado.ACTIVO : EstadoEmpleado.INACTIVO;
  }

  private buildFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  openMenu(menu: Menu, event: Event, empleado: EmpleadoExtendido): void {
    this.empleadoSeleccionado.set(empleado);
    this.menuItems = this.buildMenuItems(empleado);
    menu.toggle(event);
  }

  private buildMenuItems(empleado: EmpleadoExtendido): MenuItem[] {
    const isActive = empleado.estado === EstadoEmpleado.ACTIVO;

    return [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Actualizar',
            icon: 'pi pi-refresh',
            command: () => this.openUpdateDialog(empleado)
          },
          {
            label: isActive ? 'Desactivar' : 'Activar',
            icon: isActive ? 'pi pi-times' : 'pi pi-check-square',
            command: () => this.toggleEmpleadoStatus(empleado)
          }
        ]
      }
    ];
  }
  getSeverity(status: string): SeverityType {
    switch (status) {
      case EstadoEmpleado.ACTIVO:
        return SeverityType.INFO;
      case EstadoEmpleado.INACTIVO:
        return SeverityType.DANGER;
      default:
        return SeverityType.WARNING;
    }
  }

  private formatLastLoginDate(fecha: string | Date | null): string {
    if (!fecha) {
      return this.CONSTANTS.NO_LOGIN_MESSAGE;
    }

    const date = new Date(fecha);
    const dateStr = date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const timeStr = date.toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    return `${dateStr} - ${timeStr}`;
  }

  private handleError(error: string): void {
    this.showErrorMessage(error);
  }

  private showSuccessMessage(message: string): void {
    this.messageService.add({
      severity: MessageType.SUCCESS,
      summary: this.CONSTANTS.SUCCESS_TITLE,
      detail: message
    });
  }

  private showErrorMessage(message: string): void {
    this.messageService.add({
      severity: MessageType.ERROR,
      summary: this.CONSTANTS.ERROR_TITLE,
      detail: message
    });
  }
  private openUpdateDialog(empleado: EmpleadoExtendido): void {
    this.hasFieldUpload.set(false);
    this.isPasswordVisible.set(false);
    this.populateFormForUpdate(empleado);
    this.removePasswordValidation();
    this.showDialog();

    if (empleado.name_group === 'DOCTOR') {
      this.getFirmaEmpleado();
    }
  }

  private populateFormForUpdate(empleado: EmpleadoExtendido): void {
    this.empleadoForm.patchValue({
      ...empleado,
      id_rol: (empleado as any).groups?.length ? (empleado as any).groups[0] : null
    });

    // Actualizar el signal de isRolDoctor basado en el empleado seleccionado
    this.isRolDoctor.set(empleado.name_group === 'DOCTOR');
  }

  private removePasswordValidation(): void {
    this.changePassword.set(false);
    const passwordControl = this.empleadoForm.get('password');
    passwordControl?.clearValidators();
    passwordControl?.updateValueAndValidity();
  }

  private addPasswordValidation(): void {
    const passwordControl = this.empleadoForm.get('password');
    if (this.changePassword()) {
      passwordControl?.setValidators([Validators.required, Validators.minLength(6)]);
    } else {
      passwordControl?.clearValidators();
      passwordControl?.setValue('');
    }
    passwordControl?.updateValueAndValidity();
  }

  private toggleEmpleadoStatus(empleado: EmpleadoExtendido): void {
    const newStatus = empleado.estado === EstadoEmpleado.INACTIVO;
    const updatedEmpleado = { ...empleado, is_active: newStatus };

    this.isLoading.set(true);
    this.usuarioService.changeEstadoUpdate(updatedEmpleado).pipe(
      finalize(() => this.isLoading.set(false)),
      catchError(() => {
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.CHANGE_STATUS);
        return of(null);
      })
    ).subscribe({
      next: () => {
        this.showSuccessMessage(this.CONSTANTS.SUCCESS_UPDATE_MESSAGE);
        this.loadEmpleadosList();
      }
    });
  }

  closeDialog(): void {
    this.isDialogVisible.set(false);
    this.changePassword.set(false);
    this.firmaFile = null;
    this.hasFileSelected.set(false);
    this.selectedFileName.set('');
    this.isRolDoctor.set(false);
    this.empleadoForm.reset();
  }

  openCreateDialog(): void {
    this.hasFieldUpload.set(false);
    this.empleadoForm.reset();
    this.firmaFile = null;
    this.hasFileSelected.set(false);
    this.selectedFileName.set('');
    this.isRolDoctor.set(false);
    this.isPasswordVisible.set(true);
    this.addPasswordValidation();
    this.showDialog();
  }

  private showDialog(): void {
    this.isDialogVisible.set(true);
  }

  onFileSelect(event: any): void {
    if (event.currentFiles && event.currentFiles.length > 0) {
      this.firmaFile = event.currentFiles[0];
      this.hasFileSelected.set(true);
      this.selectedFileName.set(this.firmaFile?.name || '');
    }
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }

  private async buildEmpleadoDataWithBase64(empleadoData: any): Promise<any> {
    const data: any = {
      first_name: empleadoData.first_name,
      last_name: empleadoData.last_name,
      email: empleadoData.email,
    };

    if (empleadoData.password) {
      data.password = empleadoData.password;
    }

    if (empleadoData.id_rol) {
      data.id_rol = empleadoData.id_rol;
    }

    if (this.firmaFile && this.isRolDoctor()) {
      data.imagen = await this.convertFileToBase64(this.firmaFile);
    }

    return data;
  }

  async submitEmpleadoForm(formData: any): Promise<void> {
    if (this.empleadoForm.invalid) return;

    if (formData.id) {
      if (this.changePassword()) {
        await this.changePasswordEmpleado(formData);
      } else {
        await this.updateExistingEmpleado(formData);
      }
    } else {
      await this.createNewEmpleado(formData);
    }
    this.closeDialog();
  }

  private changePasswordEmpleado(empleadoData: any): void {
    this.isLoading.set(true);
    this.usuarioService.changePassword(empleadoData).pipe(
      finalize(() => this.isLoading.set(false)),
      catchError(() => {
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.CHANGE_PASSWORD);
        return of(null);
      })
    ).subscribe({
      next: () => {
        this.loadEmpleadosList();
        this.empleadoForm.reset();
      }
    });
  }

  private async updateExistingEmpleado(empleadoData: any): Promise<void> {
    this.isLoading.set(true);

    try {
      // Construir datos con base64 si hay firma y es doctor
      const dataToSend = (this.firmaFile && this.isRolDoctor())
        ? await this.buildEmpleadoDataWithBase64(empleadoData)
        : empleadoData;

      this.usuarioService.UpdateEmpleado(empleadoData.id, dataToSend).pipe(
        finalize(() => this.isLoading.set(false)),
        catchError(() => {
          this.handleError(this.CONSTANTS.ERROR_MESSAGES.UPDATE_EMPLEADO);
          return of(null);
        })
      ).subscribe({
        next: () => {
          this.showSuccessMessage(this.CONSTANTS.SUCCESS_UPDATE_COMPLETE_MESSAGE);
          this.loadEmpleadosList();
          this.empleadoForm.reset();
        }
      });
    } catch (error) {
      this.isLoading.set(false);
      this.handleError(this.CONSTANTS.ERROR_MESSAGES.UPDATE_EMPLEADO);
    }
  }

  private async createNewEmpleado(empleadoData: any): Promise<void> {
    this.isLoading.set(true);

    try {
      // Construir datos con base64 si hay firma y es doctor
      const dataToSend = (this.firmaFile && this.isRolDoctor())
        ? await this.buildEmpleadoDataWithBase64(empleadoData)
        : empleadoData;

      this.usuarioService.registrarColaborador(dataToSend).pipe(
        finalize(() => this.isLoading.set(false)),
        catchError(() => {
          this.handleError(this.CONSTANTS.ERROR_MESSAGES.CREATE_EMPLEADO);
          return of(null);
        })
      ).subscribe({
        next: (response) => {
          if (response) {
            this.showSuccessMessage(response.detail || this.CONSTANTS.SUCCESS_REGISTER_MESSAGE);
            this.loadEmpleadosList();
          }
        }
      });
    } catch (error) {
      this.isLoading.set(false);
      this.handleError(this.CONSTANTS.ERROR_MESSAGES.CREATE_EMPLEADO);
    }
  }

  enablePasswordField(): void {
    this.changePassword.update(value => !value);
    this.addPasswordValidation();
  }

  getFirmaEmpleado(): void {
    this.usuarioService.getFirmaEmpleado().pipe(
      catchError(() => {
        this.hasFieldUpload.set(false);
        this.handleError(this.CONSTANTS.ERROR_MESSAGES.GET_FIRMA);
        return of(null);
      })
    ).subscribe({
      next: (response) => {
        if(response.data){
          this.hasFieldUpload.set(true);
          console.log(response);
        }
      }
    });
  }
}
