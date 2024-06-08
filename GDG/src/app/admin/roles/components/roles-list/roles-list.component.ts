import { Component } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {Equipo} from "../../../equipos/models/equipo.model";
import {EquipoService} from "../../../equipos/services/equipo.service";
import {Rol} from "../../models/rol.model";
import {RolService} from "../../services/rol.service";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [
    AsyncPipe,
    Button,
    NgIf,
    PrimeTemplate,
    TableModule,
    RouterLink,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.scss'
})
export class RolesListComponent {
  roles$!: Observable<Rol[]>;

  constructor(private roleService: RolService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.roles$ = this.roleService.getRoles();
  }

  eliminarRol(idRol: number): void {
    this.roleService.deleteRoleById(idRol)
      .subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Equipo eliminado con éxito' });
        this.roles$ = this.roleService.getRoles();
      })
  }
}
