import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {Equipo} from "../../models/equipo.model";
import {Button} from "primeng/button";

@Component({
  selector: 'app-equipos-list',
  standalone: true,
  imports: [
    TableModule,
    Button
  ],
  templateUrl: './equipos-list.component.html',
  styleUrl: './equipos-list.component.scss'
})
export class EquiposListComponent {
  teams: Equipo[];

  constructor() {
    this.teams = [
      new Equipo(1, 'Nexus'),
      new Equipo(2, 'Club de promociones'),
      new Equipo(3, 'Club BackOffice'),
      new Equipo(4, 'Fenix'),
      new Equipo(1, 'Testing'),
    ]
  }
}
