import { Component } from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Usuario} from "../../models/usuario.model";
import {Equipo} from "../../../equipos/models/equipo.model";
import {Rol} from "../../models/rol.model";
import {Button} from "primeng/button";

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    Button
  ],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {
  usuarios: Usuario[] = [];

  constructor() {
    const equipo1 = new Equipo(1, 'Club de promociones');
    const equipo2 = new Equipo(2, 'Fenix');

    const rol1 = new Rol(1, 'ADMIN');
    const rol2 = new Rol(2, 'USUARIO');

    this.usuarios = [
      new Usuario(1, 'John', 'Doe', 'john.doe@example.com', 'password123', equipo1, rol1),
      new Usuario(2, 'Jane', 'Smith', 'jane.smith@example.com', 'password456', equipo2, rol2),
      new Usuario(3, 'Emily', 'Johnson', 'emily.johnson@example.com', 'password789', equipo1, rol2),
      new Usuario(4, 'Michael', 'Brown', 'michael.brown@example.com', 'password101', equipo2, rol1)
    ]
  }
}
