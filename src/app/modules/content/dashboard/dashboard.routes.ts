import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    data: { breadcrumb: 'Inicio' },
    loadComponent: () => import('@/modules/content/dashboard/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
] as Routes;
