import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContenidoTree} from "../models/contenidoTree";
import {ContenidoRequest} from "../models/contenido-request";

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  baseUrl: string = `${environment.apiUrl}/contenidos`;
  constructor(private http: HttpClient) { }

  saveContent(contenido: ContenidoRequest) {

    return this.http.post(this.baseUrl, contenido);
  }

  get(id: number) {
    return this.http.get(this.baseUrl+'/'+id);
  }

  getContenidosTree(): Observable<ContenidoTree[]> {
    return this.http.get<ContenidoTree[]>(this.baseUrl);
  }
}
