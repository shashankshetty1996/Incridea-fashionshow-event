-- Adminer 4.3.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE TABLE `details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_name` varchar(255) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `team_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `team_name` (`team_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `participant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `usn` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `team_id` varchar(255) NOT NULL,
  `pid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usn` (`usn`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `pid` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1,	'admin',	'password123'),
(2,	'user1',	'alpha@incridea'),
(3,	'user2',	'bravo@incridea'),
(4,	'user3',	'echo@incridea'),
(5,	'user4',	'tango@incridea'),
(6,	'user5',	'tour@incridea'),
(7,	'user6',	'walk@incridea'),
(8,	'user7',	'fashion@incridea'),
(9,	'user8',	'delta@incridea');

-- 2018-02-09 18:40:49
