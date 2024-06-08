import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Usuario} from "../../models/usuario.model";
import {Equipo} from "../../../equipos/models/equipo.model";
import {Rol} from "../../../roles/models/rol.model";
import {Button} from "primeng/button";
import {UsuarioService} from "../../services/usuario.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    Button,
    AsyncPipe,
    NgIf,
    RouterLink,
    ToastModule
  ],
  providers:[MessageService],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent implements OnInit{
  users$!: Observable<Usuario[]>;

  constructor(private userService: UsuarioService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  eliminarUsuario(idUsuario: number): void {
    this.userService.deleteUserById(idUsuario)
      .subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Usuario eliminado con éxito' });
        this.users$ = this.userService.getUsers();
    })
  }
}
