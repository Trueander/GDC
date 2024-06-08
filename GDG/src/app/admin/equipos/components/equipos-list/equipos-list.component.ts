import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {Equipo} from "../../models/equipo.model";
import {Button} from "primeng/button";
import {EquipoService} from "../../services/equipo.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-equipos-list',
  standalone: true,
  imports: [
    TableModule,
    Button,
    NgIf,
    AsyncPipe,
    RouterLink,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './equipos-list.component.html',
  styleUrl: './equipos-list.component.scss'
})
export class EquiposListComponent implements OnInit{
  teams$!: Observable<Equipo[]>;

  constructor(private teamService: EquipoService,private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
  }

  eliminarEquipo(idEquipo: number): void {
    this.teamService.deleteTeamById(idEquipo)
      .subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Equipo eliminado con éxito' });
        this.teams$ = this.teamService.getTeams();
      })
  }
}
