package com.integrador.gestionConocimiento.controller;

import com.integrador.gestionConocimiento.model.LoginDTO;
import com.integrador.gestionConocimiento.model.Usuarios;
import com.integrador.gestionConocimiento.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuariosController {
    private final UsuariosService usuariosService;

    @Autowired
    public UsuariosController(UsuariosService usuariosService) {
        this.usuariosService = usuariosService;
    }

    @GetMapping
    public List<Usuarios> getAll(){
        return usuariosService.getAll();
    }

    @GetMapping("/{idUsuario}")
    public Usuarios getById(@PathVariable(value = "idUsuario") Integer idUsuario){
        return usuariosService.getById(idUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
        Usuarios usuario = usuariosService.login(loginDTO.correo(), loginDTO.password());
        if(Objects.nonNull(usuario)) {
            return ResponseEntity.ok(usuario);
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Usuarios insert(@RequestBody Usuarios usuarios){
        return usuariosService.insert(usuarios);
    }

    @DeleteMapping("/{idUsuario}")
    public Boolean delete(@PathVariable(value = "idUsuario") Integer idUsuario){
        return usuariosService.delete(idUsuario);
    }

}
