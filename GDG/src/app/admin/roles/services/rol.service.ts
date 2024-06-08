import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Rol} from "../models/rol.model";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  baseUrl: string = `${environment.apiUrl}/roles`;
  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.baseUrl}`);
  }

  getRoleById(roleId: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.baseUrl}/${roleId}`);
  }

  createRole(role: Rol): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, role);
  }

  updateRole(roleId:number, role: Rol): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${roleId}`, role);
  }

  deleteRoleById(roleId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${roleId}`);
  }
}
