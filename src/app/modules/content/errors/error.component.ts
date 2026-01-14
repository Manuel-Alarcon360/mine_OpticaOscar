import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  standalone: true,
  imports:[CommonModule],
  template: `
    <ng-container *ngIf="control.invalid && (control.dirty || control.touched)">
      <small *ngFor="let error of errors" id="username-help" class="p-error">{{error}}</small>
    </ng-container>
  `
})
export class ErrorMessagesComponent {
  @Input() control!: AbstractControl | any;

  get errors(): string[] {
    const controlErrors: ValidationErrors | null = this.control.errors;
    if (!controlErrors) return [];
    return Object.keys(controlErrors).map((key) => this.getErrorMessage(key, controlErrors[key]));
  }

  private getErrorMessage(key: string, value: any): string {
    const errorMessages: { [key: string]: string } = {
      required: 'Este campo es obligatorio',
      minlength: `Este campo debe tener al menos ${value.requiredLength} caracteres`,
      maxlength: `Este campo no debe tener más de ${value.requiredLength} caracteres`,
      email: 'Debe ser una dirección de correo electrónico válida',
      min: `Debe ser un valor superior ${value.min}`,
      pattern: 'Este campo no es válido',
      telefonoInvalido : "Número de teléfono inválido"
    };
    return errorMessages[key];
  }
}
