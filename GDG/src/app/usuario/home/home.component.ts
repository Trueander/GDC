import {Component, OnInit} from '@angular/core';
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {MenuItem} from "primeng/api";
import {TreeModule} from "primeng/tree";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {DividerModule} from "primeng/divider";
import {QuillConfigModule} from "./quill-config";
import {ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AsyncPipe, NgClass, NgIf, NgStyle} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {tap} from "rxjs";
import {ContenidoService} from "../documentacion/services/contenido.service";
import {ProgressBarModule} from "primeng/progressbar";
import {SpinnerService} from "../spinner.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SplitButtonModule,
    ToolbarModule,
    InputTextModule,
    TreeModule,
    AvatarModule,
    MenuModule,
    BadgeModule,
    DividerModule,
    QuillConfigModule,
    ReactiveFormsModule,
    NgIf,
    Ripple,
    AsyncPipe,
    NgClass,
    NgStyle,
    ProgressBarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;
  user!: string | null;
  treeData: any;
  resourceId!: number | undefined;
  previousNode: any;
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private contenidoService: ContenidoService,
              private router: Router,
              private route: ActivatedRoute,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    const url = this.router.url;
    const index = url.indexOf('/contenido/');
    if (index !== -1) {
      this.resourceId = +url.substring(index + '/contenido/'.length);
    } else {
      this.resourceId = undefined;
    }

    this.contenidoService.getContenidosTree()
      .pipe(tap((response) => {
        this.treeData = response;
        this.markActiveNode(this.treeData);
      }))
      .subscribe();
    this.loadUserData();

    console.log(this.resourceId)
    this.items = [
      {
        label: 'Configuración',
        icon: 'pi pi-cog'
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  private loadUserData(): void {
    const user = localStorage.getItem('usuario');
    if(user) {
      let siglas = user.split(' ');
      this.user = siglas[0][0] + (siglas[1][0] || '');
    }
  }

  nodeSelect(nodo: any, element: any): void {
    this.router.navigate(['/contenido', nodo.node.id]);
    // console.log(element.value.find((item: any) => item.id === this.previousNode.id))
    if(this.previousNode) {
      // console.log(this.previousNode)
      this.previousNode.styleClass = '';
    }
  }

  markActiveNode(treeData: any): void {
    if(this.resourceId) {
      this.nodos(treeData);
    }
  }

  goToForm(): void {
    this.router.navigate(['contenido/form']);
  }

  nodos(treeData: any) {
    if(treeData.length === 0) {
      return;
    }

    treeData.forEach((node: any) => {

      node.expanded = true;
      if(this.isNodeActive(node)) {
        this.previousNode = node;
        this.previousNode.styleClass = 'text-primary font-w-600'
      }

      this.nodos(node.children);
    });
  }

  isNodeActive(node: any): boolean {
    return node.id === this.resourceId;
  }

  private logout(): void {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
