package com.integrador.gestionConocimiento.services.impl;

import com.integrador.gestionConocimiento.dao.UsuariosDao;
import com.integrador.gestionConocimiento.model.Usuarios;
import com.integrador.gestionConocimiento.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuariosServiceImpl implements UsuariosService {

    private final UsuariosDao usuariosDao;

    @Autowired
    public UsuariosServiceImpl(UsuariosDao usuariosDao) {
        this.usuariosDao = usuariosDao;
    }

    @Override
    public List<Usuarios> getAll() {
        return this.usuariosDao.findAll();
    }

    @Override
    public Usuarios getById(Integer idUsuario) {
        return this.usuariosDao.findById(idUsuario).orElse(null);
    }

    @Override
    public Usuarios insert(Usuarios usuarios) {
        return this.usuariosDao.save(usuarios);
    }

    @Override
    public Boolean delete(Integer idUsuario) {
        Boolean statusDelete;
        try{
            this.usuariosDao.deleteById(idUsuario);
            statusDelete=true;
        }catch (Exception ex){
            statusDelete=false;
        }

        return statusDelete;
    }
}
