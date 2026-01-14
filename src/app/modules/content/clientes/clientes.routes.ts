import { Routes } from '@angular/router';

export default [
   {
    path: 'listado-clientes',
    data: { breadcrumb: 'Clientes' },
    loadComponent:()=> import('@/modules/content/clientes/clientes-listado/clientes-listado.component').then(c=>c.ClientesListadoComponent)
  },
]as Routes;