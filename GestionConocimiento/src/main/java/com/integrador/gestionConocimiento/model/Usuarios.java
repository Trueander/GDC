package com.integrador.gestionConocimiento.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="usuarios")
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idusuario")
    private Integer idUsuario;

    @Column(name = "nombres")
    private String nombres;

    @Column(name = "apellidos")
    private String apellidos;

    @Column(name = "correo")
    private String correo;

    @Column(name = "password")
    private String password;

    @Column(name = "idequipo")
    private Integer idEquipo;

    @Column(name = "Idrol")
    private Integer idRol;

    @ManyToOne
    @JoinColumn(name = "idrol", insertable = false, updatable = false)
    private Roles roles;

    @ManyToOne
    @JoinColumn(name = "idequipo", insertable = false, updatable = false)
    private Equipos equipos;

}
