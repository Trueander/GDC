package com.integrador.gestionConocimiento.services;

import com.integrador.gestionConocimiento.model.Contenido;
import com.integrador.gestionConocimiento.model.ContenidoRequestDto;
import com.integrador.gestionConocimiento.model.ContenidoTreeDto;

import java.util.List;

public interface ContenidoService {
    List<ContenidoTreeDto> listarContenidos();
    Contenido buscarPorId(Integer contenidoId);
    void crearContenido(ContenidoRequestDto contenido);
}
