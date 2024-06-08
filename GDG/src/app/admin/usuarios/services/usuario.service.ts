import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Usuario} from "../models/usuario.model";
import {LoginDTO} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: string = `${environment.apiUrl}/usuarios`;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  getUserById(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${userId}`);
  }

  createUser(user: Usuario): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, user);
  }

  login(login: LoginDTO): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/login`, login);
  }

  updateUser(userId:number, User: Usuario): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}`, User);
  }

  deleteUserById(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${userId}`);
  }
}
