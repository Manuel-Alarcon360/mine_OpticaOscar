import { Routes } from '@angular/router';
import { AppLayout } from '@/modules/layaut/components/app.layout';
import { loginGuard } from '@/core/guard/login.guard';
import { rolGuard } from '@/core/guard/rol.guard';
export const routes: Routes = [

    { path: 'landing', loadComponent: () => import('@/modules/content/landing/landing-page/landing-page.component').then(m => m.LandingPageComponent) },
    {
        path: 'auth',
        loadChildren: () => import('@/modules/auth/auth.routes'),
    },
    {
        path: '',
        component: AppLayout,
        canActivate:[loginGuard],
        children: [
            {
              path: 'dashboard',
              canActivate:[loginGuard],
              loadChildren: () => import('@/modules/content/dashboard/dashboard.routes'),
            },
             {
                path: 'usuario',
                canActivate:[loginGuard,rolGuard],
                loadChildren: () => import('@/modules/content/usuario/usuario.routes'),
             },
             {
              path: 'formulario',
              canActivate:[loginGuard],
              loadChildren: () => import('@/modules/content/formulario/formulario.routes'),
             },
            {
                path: 'integraciones',
                canActivate:[loginGuard,rolGuard],
                loadChildren: () => import('@/modules/content/integracion/integraciones.routes'),
            },
              {
                path: 'historia',
                canActivate:[loginGuard],
                loadChildren: () => import('@/modules/content/historia-clinica/historia-clinica.routes'),
            },
            {
                path: 'clientes',
                canActivate:[loginGuard],
                loadChildren: () => import('@/modules/content/clientes/clientes.routes'),
            },
            {
                path: 'eventos',
                canActivate:[loginGuard],
                loadChildren: () => import('@/modules/content/evento/evento.routes'),
            },
            {
                path:"**",
                redirectTo:"dashboard"
            }
        ],
    },
    {
        path:"**",
        redirectTo:"landing"
    }

];
