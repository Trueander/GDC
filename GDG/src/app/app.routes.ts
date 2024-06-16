import { Routes } from '@angular/router';
import {USUARIO_ROUTES} from "./usuario/usuario.routes";

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '',
    loadChildren: () => import('./usuario/usuario.routes').then(m => m.USUARIO_ROUTES)
  }
];
