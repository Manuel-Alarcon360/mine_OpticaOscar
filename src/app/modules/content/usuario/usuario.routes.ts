import { Routes } from '@angular/router';

export default [
  {
    path: 'colaboradores',
    data: { breadcrumb: 'Mis colaboradores' },
    loadComponent: () => import('./empleado/empleado.component').then(c => c.EmpleadoComponent)
  }
] as Routes;
