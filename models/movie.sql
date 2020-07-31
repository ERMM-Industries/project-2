CREATE DATABASE IF NOT EXISTS moviesdb;
USE moviesdb;

CREATE TABLE IF NOT EXISTS movies (
  id int NOT NULL AUTO_INCREMENT,
  movie_name varchar(500) DEFAULT NULL,
  movie_poster varchar(500) NOT NULL,
  primary key (id)
);