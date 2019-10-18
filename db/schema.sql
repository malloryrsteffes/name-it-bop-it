-- MySQL Database ==========================================
DROP DATABASE IF EXISTS bopit_db;

CREATE DATABASE bopit_db;

USE bopit_db;

-- MySQL Tables ==========================================
CREATE TABLE baby
(
    id INT NOT NULL AUTO_INCREMENT,
    birthYear VARCHAR(225) NOT NULL,
    gender VARCHAR(225) NOT NULL,
    origin VARCHAR(225) NOT NULL,
    name VARCHAR(225) NOT NULL,
    popularity INT(128),
    value INT(128) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE pet
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ducky
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE boat
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);