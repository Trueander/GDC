package com.integrador.gestionConocimiento.services;

import com.integrador.gestionConocimiento.model.Usuarios;

import java.util.List;

public interface UsuariosService {

    List<Usuarios> getAll();

    Usuarios getById(Integer idUsuario);

    Usuarios insert(Usuarios usuarios);

    Boolean delete(Integer idUsuario);
}
