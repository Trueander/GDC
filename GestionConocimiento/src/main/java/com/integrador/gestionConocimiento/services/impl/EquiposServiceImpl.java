package com.integrador.gestionConocimiento.services.impl;

import com.integrador.gestionConocimiento.dao.EquiposDao;
import com.integrador.gestionConocimiento.model.Equipos;
import com.integrador.gestionConocimiento.services.EquiposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquiposServiceImpl implements EquiposService {

    private final EquiposDao equiposDao;

    @Autowired
    public EquiposServiceImpl(EquiposDao equiposDao) {
        this.equiposDao = equiposDao;
    }

    @Override
    public List<Equipos> getAll() {
        return this.equiposDao.findAll();
    }

    @Override
    public Equipos getById(Integer idEquipo) {
        return this.equiposDao.findById(idEquipo).orElse(null);
    }

    @Override
    public Equipos insert(Equipos equipos) {
        return this.equiposDao.save(equipos);
    }

    @Override
    public Boolean delete(Integer idEquipo) {
        Boolean statusDelete;
        try{
            this.equiposDao.deleteById(idEquipo);
            statusDelete=true;
        }catch (Exception ex){
            statusDelete=false;
        }

        return statusDelete;
    }
}
