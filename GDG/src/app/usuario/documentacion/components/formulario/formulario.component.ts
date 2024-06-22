import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, NgIf, registerLocaleData} from "@angular/common";
import {QuillEditorComponent} from "ngx-quill";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";
import {filter, map, Observable, of, switchMap, tap} from "rxjs";
import {InputTextModule} from "primeng/inputtext";
import {ContenidoService} from "../../services/contenido.service";
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    NgIf,
    QuillEditorComponent,
    ReactiveFormsModule,
    InputTextModule,
    Button,
    AsyncPipe,
    DividerModule,
    DatePipe,
    RouterLink
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
  form!: FormGroup;
  safeHtml!: SafeHtml;
  resourceId!: number;
  parentId!: number;
  content: any;

  constructor(private contenidoService: ContenidoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    // this.loadForm();
    this.loadContentIfExist();
  }

  saveContent(): void {
    if(this.form.valid) {
      this.contenidoService.saveContent(this.form.value).subscribe();
    }
  }

  goToFormWithParentId(): void {
    this.router.navigate(['/contenido'], {queryParams: {padreId: this.resourceId}})
  }

  private loadContentIfExist(): void {
    this.activatedRoute.paramMap
      .pipe(
        map(this.mapResourceId),
        filter(resourceId => resourceId!==0),
        switchMap(resourceId => this.contenidoService.get(resourceId)),
        tap(this.preloadData)
      ).subscribe();

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.parentId = +queryParams['padreId'];
      console.log(this.parentId)
      this.loadForm();
    });
  }

  private loadForm(): void {
    this.form = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      htmlContent: new FormControl(null, Validators.required),
      usuarioId: new FormControl(localStorage.getItem('idUsuario')),
      padreId: new FormControl(this.parentId),
    });
  }

  mapResourceId = (params: ParamMap): number => {
    let resourceId = params.get('resourceId');

    if(resourceId) {
      return this.resourceId = +resourceId;
    }

    return 0;
  }

  preloadData = (resource: any): void => {
    this.content = resource;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(resource.htmlContent);
  }
}
