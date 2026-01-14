import { Routes } from '@angular/router';

export default [
  {
    path: 'historia-clinica',
    data: { breadcrumb: 'Historia clinica' },
    loadComponent: () => import('@/modules/content/historia-clinica/vista-historia/vista-historia.component').then(c => c.VistaHistoriaComponent)
  },
  {
    path:'lentes',
    loadComponent: () => import('@/modules/content/historia-clinica/prueba-lentes/prueba-lentes.component').then(c => c.PruebaLentesComponent)
  }
] as Routes;
