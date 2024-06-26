import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'equipos',
        loadChildren: () => import('./equipos/equipos.routes').then(m => m.EQUIPOS_ROUTES)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES)
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.routes').then(m => m.ROLES_ROUTES)
      }
    ]
  },
];
