import { Routes } from '@angular/router';
import {RolesListComponent} from "./components/roles-list/roles-list.component";
import {CrearRolComponent} from "./components/crear-rol/crear-rol.component";

export const ROLES_ROUTES: Routes = [
  {
    path: '',
    component: RolesListComponent
  },
  {
    path: 'crear',
    component: CrearRolComponent
  },
  {
    path: 'actualizar/:id',
    component: CrearRolComponent
  }
];
