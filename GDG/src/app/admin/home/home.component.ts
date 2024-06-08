import {Component, OnInit} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuItem} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, MenubarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/admin'
      },
      {
        label: 'Equipos',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Listar equipos',
            icon: 'pi pi-list',
            routerLink: '/admin/equipos'
          },
          {
            label: 'Crear equipo',
            icon: 'pi pi-plus',
            routerLink: '/admin/equipos/crear'
          }
        ]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Listar usuarios',
            icon: 'pi pi-list',
            routerLink: '/admin/usuarios'
          },
          {
            label: 'Crear usuario',
            icon: 'pi pi-plus',
            routerLink: '/admin/usuarios/crear'
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ];
  }
}
