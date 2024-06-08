package com.integrador.gestionConocimiento.services.impl;

import com.integrador.gestionConocimiento.dao.RolesDao;
import com.integrador.gestionConocimiento.model.Roles;
import com.integrador.gestionConocimiento.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesServiceImpl implements RolesService {

    private final RolesDao rolesDao;

    @Autowired
    public RolesServiceImpl(RolesDao rolesDao) {
        this.rolesDao = rolesDao;
    }

    @Override
    public List<Roles> getAll() {
        return this.rolesDao.findAll();
    }

    @Override
    public Roles getById(Integer idRol) {
        return this.rolesDao.findById(idRol).orElse(null);
    }

    @Override
    public Roles insert(Roles roles) {
        return this.rolesDao.save(roles);
    }

    @Override
    public Boolean delete(Integer idRol) {
        Boolean statusDelete;
        try{
            this.rolesDao.deleteById(idRol);
            statusDelete=true;
        }catch (Exception ex){
            statusDelete=false;
        }

        return statusDelete;
    }
}
