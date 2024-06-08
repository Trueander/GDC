import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "primeng/card";
import {UsuarioService} from "../../../admin/usuarios/services/usuario.service";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FloatLabelModule, ReactiveFormsModule, CardModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  errorMessage: boolean = false;

  constructor(private userService: UsuarioService,
              private router: Router) {
    this.form = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  register(): void {
    if(this.form.valid) {
      this.errorMessage = false;
      this.userService.login(this.form.value).subscribe(response => {
        this.errorMessage = false;
        this.router.navigate(['/admin'])
      }, error => {
        this.errorMessage = true;
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
