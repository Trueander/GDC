CREATE DATABASE gestion_conocimiento;
use gestion_conocimiento;

CREATE TABLE roles(
idRol int NOT NULL AUTO_INCREMENT,
nombre VARCHAR(150) NOT null,
PRIMARY KEY (idRol)
);


CREATE TABLE Usuarios(
idUsuario int NOT NULL AUTO_INCREMENT,
nombres VARCHAR(150) NOT NULL,
apellidos VARCHAR(150) NOT NULL,
correo VARCHAR(150) NOT NULL,
`password` VARCHAR(150) NOT NULL,
idEquipo  int NOT NULL,
IdRol   int NOT null,
PRIMARY KEY (idUsuario)
);


CREATE TABLE Equipos(
idEquipo int NOT NULL AUTO_INCREMENT,
nombre VARCHAR(150) NOT NULL,
PRIMARY KEY (idEquipo)
);




