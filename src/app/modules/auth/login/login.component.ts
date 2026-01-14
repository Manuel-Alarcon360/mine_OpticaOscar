import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '@/modules/layaut/service/layout.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AuthService } from '../service/auth.service';
import { PasswordModule } from 'primeng/password';
import { Credencial } from '@/core/models/usuario/usuario.interface';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    InputTextModule,
    RouterModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    ReactiveFormsModule,
    DividerModule,
    ToastModule,
    ErrorMessagesComponent,
    PasswordModule
  ],
  providers: [MessageService],
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  rememberMe = signal(false);
  isLoading = signal(false);
  private layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  private fb = inject(NonNullableFormBuilder);

  isDarkTheme = computed(() => this.layoutService.isDarkTheme());

  formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  onSubmit(): void {
    if (this.formLogin.valid) {
      this.isLoading.set(true);
      const credentials = this.formLogin.getRawValue() as Credencial;

      this.authService.login(credentials).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Correcto',
            detail: 'Inicio de sesión válido'
          });
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard/home');
            this.isLoading.set(false);
          }, 500);
        },
        error: (err) => {
          this.isLoading.set(false);
          if (err.status === 401) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Credenciales inválidas'
            });
          }
        }
      });
    }
  }
    navigate(uri:string){
      this.router.navigateByUrl(`${uri}`);
    }

}
