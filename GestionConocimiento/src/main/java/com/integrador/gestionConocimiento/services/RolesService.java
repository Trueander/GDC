package com.integrador.gestionConocimiento.services;

import com.integrador.gestionConocimiento.model.Roles;

import java.util.List;


public interface RolesService {
    List<Roles> getAll();

    Roles getById(Integer idRol);

    Roles insert(Roles roles);

    Boolean delete(Integer idRol);
}
