import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Equipo} from "../models/equipo.model";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  baseUrl: string = `${environment.apiUrl}/equipos`;
  constructor(private http: HttpClient) { }

  getTeams(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.baseUrl}`);
  }

  getTeamById(teamId: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.baseUrl}/${teamId}`);
  }

  createTeam(Team: Equipo): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, Team);
  }

  updateTeam(teamId:number, Team: Equipo): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${teamId}`, Team);
  }

  deleteTeamById(teamId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${teamId}`);
  }
}
