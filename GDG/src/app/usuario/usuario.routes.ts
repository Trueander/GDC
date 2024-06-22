import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const USUARIO_ROUTES: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'contenido',
        loadChildren: () => import('./documentacion/documentacion.routes').then(m => m.DOCUMENTACION_ROUTES)
      }
    ]
  },
];
