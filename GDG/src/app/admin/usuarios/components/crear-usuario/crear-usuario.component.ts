import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsuarioService} from "../../services/usuario.service";
import {Usuario} from "../../models/usuario.model";
import {Equipo} from "../../../equipos/models/equipo.model";
import {Rol} from "../../../roles/models/rol.model";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {EquipoService} from "../../../equipos/services/equipo.service";
import {RolService} from "../../../roles/services/rol.service";
import {Observable, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    Button,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    AsyncPipe,
    NgIf,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.scss'
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;
  roles$!: Observable<Rol[]>;
  teams$!: Observable<Equipo[]>;

  constructor(private userService: UsuarioService,
              private teamService: EquipoService,
              private roleService: RolService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      nombres: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      idEquipo: new FormControl(null),
      idRol: new FormControl(null),
      equipos: new FormControl<Equipo | null>(null, Validators.required),
      roles: new FormControl<Rol | null>(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.roles$ = this.roleService.getRoles();
    this.teams$ = this.teamService.getTeams();

    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      let id: number | null = +param.get('id');

      if(id) {
        this.userService.getUserById(id).subscribe(response => {
          this.form.get('nombres')?.setValue(response.nombres)
          this.form.get('apellidos')?.setValue(response.apellidos)
          this.form.get('correo')?.setValue(response.correo)
          this.form.get('password')?.setValue(response.password)
          this.form.get('equipos')?.setValue(response.equipos)
          this.form.get('roles')?.setValue(response.roles)
        })
      }
    })
  }

  createUser(): void {
    if(this.form.valid) {
      this.form.get('idRol')?.setValue(this.form.get('roles')?.value.idRol);
      this.form.get('idEquipo')?.setValue(this.form.get('equipos')?.value.idEquipo);
      this.userService.createUser(this.form.value)
        .pipe(
          tap(() => {
            this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Usuario creado con éxito' });
            setTimeout(() => this.router.navigate(['/admin/usuarios']), 1000)
          })
        )
        .subscribe();
    }
  }
}
