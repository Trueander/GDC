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

CREATE TABLE contenidos(
	id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
	html_content longtext NOT NULL,
	created_at TIMESTAMP NOT NULL,
	usuario_id int NOT NULL,
	padre_id int,
	foreign key (usuario_id) references Usuarios(idUsuario),
	foreign key (padre_id) references contenidos(id)
);

ALTER TABLE Usuarios
ADD FOREIGN KEY (IdRol) REFERENCES roles(idRol);

ALTER TABLE Usuarios
ADD FOREIGN KEY (idEquipo) REFERENCES Equipos(idEquipo);

insert into roles values(1, 'ADMIN');
insert into roles values(2, 'USUARIO');

insert into equipos values(1, 'Fenix');
insert into equipos values(2, 'Club de Promociones');
insert into equipos values(3, 'BackOffice');
insert into equipos values(4, 'Data Integration');

INSERT INTO usuarios VALUES
(1, 'Anderson', 'Bengolea', 'ander@gmail.com','12345678',1,2),
(2, 'John', 'Doe', 'john.doe@example.com', '12345678', 2, 2),
(3, 'Jane', 'Smith', 'jane.smith@example.com', '12345678', 2, 2),
(4, 'Alice', 'Johnson', 'alice.johnson@example.com', '12345678', 3, 2),
(5, 'Bob', 'Brown', 'bob.brown@example.com', '12345678', 4, 2),
(6, 'Charlie', 'Davis', 'charlie.davis@example.com', '12345678', 1, 2);

INSERT INTO contenidos (titulo, html_content, created_at, usuario_id, padre_id) VALUES
('Root Node 1', 'Root HTML Content 1', NOW(), 1, NULL),
('Root Node 2', 'Root HTML Content 2', NOW(), 2, NULL);

-- Insert child nodes for Root Node 1
INSERT INTO contenidos (titulo, html_content, created_at, usuario_id, padre_id) VALUES
('Child Node 1.1', 'Child HTML Content 1.1', NOW(), 3, 1),
('Child Node 1.2', 'Child HTML Content 1.2', NOW(), 4, 1);

-- Insert child nodes for Root Node 2
INSERT INTO contenidos (titulo, html_content, created_at, usuario_id, padre_id) VALUES
('Child Node 2.1', 'Child HTML Content 2.1', NOW(), 5, 2),
('Child Node 2.2', 'Child HTML Content 2.2', NOW(), 6, 2);

-- Insert grandchild nodes for Child Node 1.1
INSERT INTO contenidos (titulo, html_content, created_at, usuario_id, padre_id) VALUES
('Grandchild Node 1.1.1', 'Grandchild HTML Content 1.1.1', NOW(), 1, 1),
('Grandchild Node 1.1.2', 'Grandchild HTML Content 1.1.2', NOW(), 2, 2);


