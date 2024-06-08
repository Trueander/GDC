import { Routes } from '@angular/router';
import {EquiposListComponent} from "./components/equipos-list/equipos-list.component";
import {CrearEquipoComponent} from "./components/crear/crear-equipo.component";

export const EQUIPOS_ROUTES: Routes = [
  {
    path: '',
    component: EquiposListComponent
  },
  {
    path: 'crear',
    component: CrearEquipoComponent
  }
];
