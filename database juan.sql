-- Generado por Tecnopraxis — Diseñador de BD

CREATE TABLE `estudiantes` (
  `id_estudiantes` INT NOT NULL AUTO_INCREMENT,
  `nombreEstudiante` VARCHAR(32) NOT NULL,
  `apellidoEstudiante` VARCHAR(32),
  `cedula` INT,
  `seccion` VARCHAR(32),
  PRIMARY KEY (`id_estudiantes`),
  UNIQUE KEY `uq_estudiantes_cedula` (`cedula`)
);

CREATE TABLE `libros` (
  `id_libro` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255),
  `autor` VARCHAR(255),
  `categoria` VARCHAR(255),
  `numero_ejemplares` INT,
  PRIMARY KEY (`id_libro`)
);

CREATE TABLE `prestamos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_ejemplar` INT,
  `id_estudiante` INT,
  `fecha_prestamo` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `fecha_entrega_esperada` TIMESTAMP,
  `estado_prestamo` VARCHAR(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `anuncios` (
  `id_anuncio` INT NOT NULL AUTO_INCREMENT,
  `titulo_anuncio` TEXT NOT NULL,
  `contenido_anuncio` TEXT NOT NULL,
  `fecha _anuncios` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `fecha_expiracion` TIMESTAMP,
  `admin_autor` VARCHAR(255),
  PRIMARY KEY (`id_anuncio`)
);

CREATE TABLE `Ejemplares` (
  `id_ejemplar` INT NOT NULL AUTO_INCREMENT,
  `id_libro` VARCHAR(255),
  `estado` VARCHAR(255),
  PRIMARY KEY (`id_ejemplar`)
);

CREATE TABLE `configuracion` (
  `id_config` INT NOT NULL AUTO_INCREMENT,
  `clave_admin` TEXT NOT NULL,
  `max_prestamos_activos` INT DEFAULT 3,
  `dias_prestamos` INT DEFAULT 15,
  PRIMARY KEY (`id_config`)
);

ALTER TABLE `Ejemplares` ADD CONSTRAINT `fk_rel_22` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `prestamos` ADD CONSTRAINT `fk_rel_31` FOREIGN KEY (`id_ejemplar`) REFERENCES `Ejemplares` (`id_ejemplar`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `prestamos` ADD CONSTRAINT `fk_rel_32` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id_estudiantes`) ON DELETE RESTRICT ON UPDATE CASCADE;