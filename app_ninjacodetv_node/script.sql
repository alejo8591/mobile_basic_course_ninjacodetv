CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO `noticias` (`id`, `titulo`, `contenido`, `fecha`) VALUES
(1, 'Ola ke ase?', 'contenido', '2013-02-21 03:27:11'),
(2, 'La ley de los medios se votaría en mayo', 'Este contenido ha sido publicado originalmente por Diario EL COMERCIO en la siguiente dirección: http://elcomercio.com/politica/ley-medios-votaria-mayo-Asamblea-Cordero-asambleistas_0_869313275.html. Si está pensando en hacer uso del mismo, por favor, cite la fuente y haga un enlace hacia la nota original de donde usted ha tomado este contenido. ElComercio.com', '2013-02-21 04:08:55');
