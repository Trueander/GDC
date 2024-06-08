package com.integrador.gestionConocimiento.services;

import com.integrador.gestionConocimiento.model.Equipos;

import java.util.List;

public interface EquiposService {
    List<Equipos> getAll();

    Equipos getById(Integer idEquipo);

    Equipos insert(Equipos equipos);

    Boolean delete(Integer idEquipo);
}
