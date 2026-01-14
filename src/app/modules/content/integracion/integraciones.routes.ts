import { Routes } from '@angular/router';

export default [
  {
    path: 'aplicaciones',
    data: { breadcrumb: 'Integraciones' },
    loadComponent: () => import('@/modules/content/integracion/integraciones/integraciones.component').then(c => c.IntegracionesComponent)
  }
] as Routes;