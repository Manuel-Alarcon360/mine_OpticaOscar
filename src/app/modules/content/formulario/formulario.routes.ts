import { Routes } from '@angular/router';
export default [
  {
    path: 'crear',
    data: { breadcrumb: 'Crear formulario' },
    loadComponent:()=> import('./crear-formulario/crear-formulario.component').then(c=>c.CrearFormularioComponent)
  },
  {
    path: 'listado',
    data: { breadcrumb: 'Mis formularios' },
    loadComponent:()=> import('./consulta-form/consulta-form.component').then(c=>c.ConsultaFormComponent)
  },
  {
    path: 'editar/:id',
    data: { breadcrumb: 'Editar formulario' },
    loadComponent:()=> import('./editar-formulario/editar-formulario.component').then(c=>c.EditarFormularioComponent)
  }
] as Routes;
