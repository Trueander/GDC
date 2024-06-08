package com.integrador.gestionConocimiento.controller;

import com.integrador.gestionConocimiento.model.Roles;
import com.integrador.gestionConocimiento.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
public class RolesController {

    private final RolesService rolesService;

    @Autowired
    public RolesController(RolesService rolesService) {
        this.rolesService = rolesService;
    }


    @GetMapping
    public List<Roles> getAll(){
        return rolesService.getAll();
    }

    @GetMapping("/{idRol}")
    public Roles getById(@PathVariable(value = "idRol") Integer idRol){
        return rolesService.getById(idRol);
    }

    @PostMapping
    public Roles insert(@RequestBody Roles roles){
        return rolesService.insert(roles);
    }

    @DeleteMapping("/{idRol}")
    public Boolean delete(@PathVariable(value = "idRol") Integer idRol){
        return rolesService.delete(idRol);
    }




}
