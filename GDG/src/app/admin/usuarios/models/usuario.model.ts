import {Equipo} from "../../equipos/models/equipo.model";
import {Rol} from "../../roles/models/rol.model";

export class Usuario {
  constructor(
              public nombres: string,
              public apellidos: string,
              public correo: string,
              public password: string,
              private idEquipo: number,
              private idRol: number,
              public equipos: Equipo,
              public roles: Rol,
              public idUsuario?: number
              ) {
  }
}
