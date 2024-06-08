import {Equipo} from "../../equipos/models/equipo.model";
import {Rol} from "./rol.model";

export class Usuario {
  constructor(public id: number,
              public nombres: string,
              public apellidos: string,
              public correo: string,
              public password: string,
              public equipo: Equipo,
              public rol: Rol,
              ) {
  }
}
