import { Routes } from '@angular/router';
export default [
//   {
//     path: 'crear',
//     data: { breadcrumb: 'Crear formulario' },
//     loadComponent:()=> import('./crear-formulario/crear-formulario.component').then(c=>c.CrearFormularioComponent)
//   },
  {
    path: 'listado',
    data: { breadcrumb: 'Mis eventos' },
    loadComponent:()=> import('./consulta-evento/consulta-evento.component').then(c=>c.ConsultaEventoComponent)
  },
//   {
//     path: 'editar/:id',
//     data: { breadcrumb: 'Editar formulario' },
//     loadComponent:()=> import('./editar-formulario/editar-formulario.component').then(c=>c.EditarFormularioComponent)
//   }
] as Routes;