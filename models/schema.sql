CREATE DATABASE IF NOT EXISTS `FilmSnob Login` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `FilmSnob Login`;

CREATE TABLE IF NOT EXISTS `credentials` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `first name` varchar(50) NOT NULL,
  `last name` varchar(50) NOT NULL,
  `birthday` varchar(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `credentials` (`username`, `password`, `email`,`first name`,`last name`,`birthday`) VALUES ('test', 'test', 'test@test.com', 'test','test','01/01/01');

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `film_title` varchar(100) NOT NULL,
  `film_rating` varchar(20) NOT NULL,
  `director` varchar(50) NOT NULL,
  `actors` varchar(500) NOT NULL,
  `release_date` varchar(50) NOT NULL,
  `plot_summary` varchar(10000) NOT NULL,
  `account_status` varchar(100) NOT NULL,
  `awards` varchar(20) NOT NULL,
  'poster' varchar (1000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;