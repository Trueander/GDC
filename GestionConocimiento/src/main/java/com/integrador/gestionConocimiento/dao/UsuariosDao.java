package com.integrador.gestionConocimiento.dao;

import com.integrador.gestionConocimiento.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosDao extends JpaRepository<Usuarios,Integer> {

}
