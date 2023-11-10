SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `tp46` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tp46`;


CREATE TABLE `Jugadores`(
    `id_jugadores` int PRIMARY KEY AUTO_INCREMENT,
    `nombre` text,
    `POS` text,
    `Edad` int,
    `Est` float,
    `P` float,
    `nac` text,
    `Ap` int,
    `Sub` int,
    `A` int,
    `GA` int,
    `G` int,
    `FC` int,
    `FS` int,
    `TA` int,
    `TR` int
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `Jugadores`(nombre,POS,Edad,Est,P,nac,Ap,Sub,G,GA,A,FC,FS,TA,TR) VALUES 
('Fabio1','G',43,1.88,86,'Brasil',28,0,84,34,0,0,2,3,0),
('Marlon4','D',28,1.83,78,'Brasil',13,2,0,0,4,1,16,1,5),
('Marcelo12','D',35,1.73,72,'Brasil',15,1,1,1,25,8,5,24,3),
('Nino33','D',26,1.88,82,'Brasil',21,0,2,0,12,4,22,22,4),
('JhonKennedy9','A',21,1.73,71,'Brasil',20,11,4,1,35,16,19,24,8),
('Keno11','A',34,1.78,72,'Brasil',19,4,2,4,37,15,15,23,5),
('German Cano14','A',35,1.78,81,'Argentina',26,2,7,1,55,22,23,10,6);




