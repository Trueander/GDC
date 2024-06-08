import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RolService} from "../../services/rol.service";
import {MessageService} from "primeng/api";
import {tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-crear-rol',
  standalone: true,
  imports: [Button, CardModule, InputTextModule, ReactiveFormsModule, ToastModule],
  providers: [RolService, MessageService],
  templateUrl: './crear-rol.component.html',
  styleUrl: './crear-rol.component.scss'
})
export class CrearRolComponent implements OnInit{
  form!: FormGroup;

  constructor(private roleService: RolService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      let id: number | null = +param.get('id');
      console.log(id)
      if(id) {
        this.roleService.getRoleById(id).subscribe(response => {
          this.form.get('nombre')?.setValue(response.nombre)
        })
      } else {

      }
    })



  }

  createRole(): void {
    if(this.form.valid) {
      this.roleService.createRole(this.form.value)
        .pipe(
          tap(() => {
            this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Rol creado con éxito' });
            setTimeout(() => this.router.navigate(['/admin/roles']), 1000)
          })
        )
        .subscribe();
    }
  }
}
