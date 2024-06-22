package com.integrador.gestionConocimiento.dao;

import com.integrador.gestionConocimiento.model.Contenido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContenidoDao extends JpaRepository<Contenido, Integer> {
    List<Contenido> findByPadreIsNull();
}
