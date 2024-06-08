import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EquipoService} from "../../services/equipo.service";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {MessageService} from "primeng/api";
import {tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Ripple} from "primeng/ripple";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [
    Button,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    Ripple,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './crear-equipo.component.html',
  styleUrl: './crear-equipo.component.scss'
})
export class CrearEquipoComponent {
  form: FormGroup;

  constructor(private teamService: EquipoService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      let id: number | null = +param.get('id');
      console.log(id)
      if (id) {
        this.teamService.getTeamById(id).subscribe(response => {
          this.form.get('nombre')?.setValue(response.nombre)
        })
      }
    })
  }

  createTeam(): void {
    if(this.form.valid) {
      this.teamService.createTeam(this.form.value)
        .pipe(
          tap(() => {
            this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Equipo creado con éxito' });
            setTimeout(() => this.router.navigate(['/admin/equipos']), 1000)
          })
        )
        .subscribe();
    }
  }
}
