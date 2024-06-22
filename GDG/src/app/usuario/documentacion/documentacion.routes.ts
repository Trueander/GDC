import {Routes} from "@angular/router";
import {FormularioComponent} from "./components/formulario/formulario.component";

export const DOCUMENTACION_ROUTES: Routes = [
  {
    path: '', component: FormularioComponent,
  },
  {
    path: ':resourceId', component: FormularioComponent,
  },
];
