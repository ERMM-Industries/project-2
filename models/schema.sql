CREATE DATABASE IF NOT EXISTS `FilmSnob Login` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `FilmSnob Login`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `film_title` varchar(100),
  `film_rating` varchar(20),
  `director` varchar(50) ,
  `actors` varchar(500) ,
  `release_date` varchar(50) ,
  `movie_status` varchar(100) ,
  `awards` varchar(20) ,
  `watch_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `review_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `plot_summary` TEXT ,
  `poster` varchar (1000)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

INSERT INTO `accounts` (`username`, `password`, `email`,`first_name`,`last_name`,`birthday`) VALUES ('test', 'test', 'test@test.com', 'test','test','01/01/01');