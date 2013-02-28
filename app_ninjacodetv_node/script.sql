CREATE TABLE IF NOT EXISTS `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO `news` (`id`, `title`, `content`, `date`) VALUES
(1, 'Ola ke ase?', 'contenido', '2013-02-21 03:27:11'),
(2, 'La ley de los medios se votaría en mayo', 'Este contenido ha sido publicado originalmente por Diario EL COMERCIO en la siguiente dirección: http://elcomercio.com/politica/ley-medios-votaria-mayo-Asamblea-Cordero-asambleistas_0_869313275.html. Si está pensando en hacer uso del mismo, por favor, cite la fuente y haga un enlace hacia la nota original de donde usted ha tomado este contenido. ElComercio.com', '2013-02-21 04:08:55');

CREATE TABLE IF NOT EXISTS `ninjacodetv_noticias`.`contactme` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` VARCHAR( 120 ) NULL ,
`email` VARCHAR( 60 ) NULL ,
`comment` LONGTEXT NULL ,
`contact` VARCHAR( 1 ) NOT NULL ,
`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
UNIQUE (
`email`
)
) ENGINE = INNODB;