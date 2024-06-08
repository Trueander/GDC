import { Routes } from '@angular/router';
import {UsuariosListComponent} from "./components/usuarios-list/usuarios-list.component";
import {CrearUsuarioComponent} from "./components/crear-usuario/crear-usuario.component";

export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: UsuariosListComponent
  },
  {
    path: 'crear',
    component: CrearUsuarioComponent
  },
  {
    path: 'actualizar/:id',
    component: CrearUsuarioComponent
  }
];
