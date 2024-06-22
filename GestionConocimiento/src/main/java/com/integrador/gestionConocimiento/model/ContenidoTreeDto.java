package com.integrador.gestionConocimiento.model;

import java.util.List;

public record ContenidoTreeDto(Integer id, String key, String label, List<ContenidoTreeDto> children) {
}
