package com.integrador.gestionConocimiento.controller;

import com.integrador.gestionConocimiento.dao.ContenidoDao;
import com.integrador.gestionConocimiento.model.Contenido;
import com.integrador.gestionConocimiento.model.ContenidoRequestDto;
import com.integrador.gestionConocimiento.model.ContenidoTreeDto;
import com.integrador.gestionConocimiento.services.ContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/contenidos")
@CrossOrigin
@RequiredArgsConstructor
public class ContenidoController {
    private final ContenidoService contenidoService;

    @PostMapping
    public void saveContent(@RequestBody ContenidoRequestDto contenido) {
        contenidoService.crearContenido(contenido);
    }

    @GetMapping
    public List<ContenidoTreeDto> contenidos() {
        return contenidoService.listarContenidos();
    }

    @GetMapping("/{id}")
    public Contenido get(@PathVariable Integer id) {
        return contenidoService.buscarPorId(id);
    }
}
