-- Adminer 4.3.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS incridea;

CREATE DATABASE incridea;
use incridea;

DROP TABLE IF EXISTS `details`;
CREATE TABLE `details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_name` varchar(255) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `team_id` varchar(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `participant`;
CREATE TABLE `participant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `usn` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `team_id` varchar(255) NOT NULL,
  `pid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1,	'admin',	'password123'),
(2,	'nittearch11',	'alpha@incridea'),
(3,	'mcops12',	'bravo@incridea'),
(4,	'burnice13',	'echo@incridea'),
(5,	'glam14',	'tango@incridea'),
(6,	'smvit15',	'tour@incridea'),
(7,	'joseph16',	'walk@incridea'),
(8,	'fashion',	'fashion@incridea'),
(9,	'incridea',	'delta@incridea');

-- 2018-02-09 20:59:08
