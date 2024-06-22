package com.integrador.gestionConocimiento.services.impl;

import com.integrador.gestionConocimiento.dao.ContenidoDao;
import com.integrador.gestionConocimiento.model.Contenido;
import com.integrador.gestionConocimiento.model.ContenidoRequestDto;
import com.integrador.gestionConocimiento.model.ContenidoTreeDto;
import com.integrador.gestionConocimiento.model.Usuarios;
import com.integrador.gestionConocimiento.services.ContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ContenidoServiceImpl implements ContenidoService {
    private final ContenidoDao contenidoDao;

    @Override
    public List<ContenidoTreeDto> listarContenidos() {
        List<Contenido> contenidos = contenidoDao.findByPadreIsNull();
        List<ContenidoTreeDto> contenidoNodos = new ArrayList<>();
        for (int i = 0; i < contenidos.size(); i++) {
            Contenido contenido = contenidos.get(i);
            String key = String.valueOf(i);
            contenido.setKey(key);
            ContenidoTreeDto dto = mapContenidoToContenidoTreeDto(contenido, key);
            contenidoNodos.add(dto);
        }
        return contenidoNodos;
    }

    private ContenidoTreeDto mapContenidoToContenidoTreeDto(Contenido contenido, String key) {
        List<ContenidoTreeDto> childrenDtos = new ArrayList<>();
        for (int i = 0; i < contenido.getContenidosHijos().size(); i++) {
            Contenido child = contenido.getContenidosHijos().get(i);
            String childKey = key + "-" + i;
            child.setKey(childKey);
            childrenDtos.add(mapContenidoToContenidoTreeDto(child, childKey));
        }
        return new ContenidoTreeDto(
                contenido.getId(),
                contenido.getKey(),
                contenido.getTitulo(),
                childrenDtos
        );
    }

    @Override
    public Contenido buscarPorId(Integer contenidoId) {
        return contenidoDao.getReferenceById(contenidoId);
    }

    @Override
    public void crearContenido(ContenidoRequestDto contenido) {
        contenidoDao.save(mapContendioRequestToContenido(contenido));
    }

    private Contenido mapContendioRequestToContenido(ContenidoRequestDto contenido) {
        Usuarios usuario = new Usuarios();
        usuario.setIdUsuario(contenido.usuarioId());
        Contenido contenidoPadre = null;
        if(Objects.nonNull(contenido.padreId())) {
            contenidoPadre = contenidoDao.getReferenceById(contenido.padreId());
        }

        return new Contenido(null, null, contenido.titulo(), contenido.htmlContent(), LocalDateTime.now(), usuario, null, contenidoPadre);
    }
}
