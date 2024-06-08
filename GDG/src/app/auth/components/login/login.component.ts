import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "primeng/card";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule,FloatLabelModule, ReactiveFormsModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      usuario: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
    });
  }

  register(): void {
    if(this.form.valid) {
      console.log(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
