package com.integrador.gestionConocimiento.controller;

import com.integrador.gestionConocimiento.model.Equipos;
import com.integrador.gestionConocimiento.services.EquiposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipos")
@CrossOrigin
public class EquiposController {
    private final EquiposService equiposService;


    @Autowired
    public EquiposController(EquiposService equiposService) {
        this.equiposService = equiposService;
    }

    @GetMapping
    public List<Equipos> getAll(){
        return equiposService.getAll();
    }

    @GetMapping("/{idEquipo}")
    public Equipos getById(@PathVariable(value = "idEquipo") Integer idEquipo){
        return equiposService.getById(idEquipo);
    }

    @PostMapping
    public Equipos insert(@RequestBody Equipos equipos){
        return equiposService.insert(equipos);
    }

    @DeleteMapping("/{idEquipo}")
    public Boolean delete(@PathVariable(value = "idEquipo") Integer idEquipo){
        return equiposService.delete(idEquipo);
    }
}
