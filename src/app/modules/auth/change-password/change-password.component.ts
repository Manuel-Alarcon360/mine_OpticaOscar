import { LayoutService } from '@/modules/layaut/service/layout.service';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { AbstractControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../service/auth.service';
import { ErrorMessagesComponent } from '@/modules/content/errors/error.component';

@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    Dialog,
    FloatLabelModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    IconFieldModule,
    PasswordModule,
    ErrorMessagesComponent
    
  ],
  providers: [MessageService],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  showChangePassword = signal(false);
  form: FormGroup;
  usuario:any
  errorPassword:boolean= false

   private readonly messageService = inject(MessageService);
   public layoutService: LayoutService = inject(LayoutService);
   private readonly formBuilder = inject(NonNullableFormBuilder);
   public cookieService:CookieService = inject(CookieService)
   private authService = inject(AuthService);


  constructor() {
    this.form = this.initializeForm()
    
  }
  ngOnInit(){
    this.infoUser()
  }
  private initializeForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmaPassword: ['', Validators.required],
    });
  }
  visible_1 = computed(
        () => this.layoutService.layoutState().changePaswordVisible,
  );
  closeDialog() {
    this.layoutService.layoutState.update(state => ({
      ...state,
      changePaswordVisible: false
    }));
    this.form.reset()
  }
  verificacionPassword(){
      const password = this.form.get('password')?.value
      const confirm = this.form.get('confirmaPassword')?.value
      this.errorPassword = password == confirm ?  false : true
  }
  changePassword(){
    const credenciales = {
        password :this.form.value.password,
        id: this.usuario
  }
    this.authService.changePasword(credenciales).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',summary: 'Correcto',detail: 'Cambio de contraseña exitoso'
          });
          this.closeDialog();
        },
        error: (err) => {
          console.log(err)
        }
      });
  }
      infoUser(){
          let resfresh = this.cookieService.check("refreshOptica")
          if(resfresh){
            const decoded_refresh:any = jwtDecode(this.cookieService.get("refreshOptica"))
            this.usuario = decoded_refresh.user_id
          }else{
            window.location.reload()
      }
    }

}
