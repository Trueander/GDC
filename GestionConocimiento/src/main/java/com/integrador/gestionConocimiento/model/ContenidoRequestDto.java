package com.integrador.gestionConocimiento.model;

public record ContenidoRequestDto(String titulo, String htmlContent, Integer usuarioId, Integer padreId) {
}
