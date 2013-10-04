
# Dump of table j_manager_tokens
# ------------------------------------------------------------

DROP TABLE IF EXISTS `j_manager_tokens`;

CREATE TABLE `j_manager_tokens` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `userID` int(11) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `expirationDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `j_manager_tokens` WRITE;
/*!40000 ALTER TABLE `j_manager_tokens` DISABLE KEYS */;

INSERT INTO `j_manager_tokens` (`id`, `userID`, `token`, `expirationDate`)
VALUES
	(7,1,'3b1b2d25d517a2ab5a0bb17104cd5cb7','2013-09-17 17:34:14');

/*!40000 ALTER TABLE `j_manager_tokens` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table j_manager_users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `j_manager_users`;

CREATE TABLE `j_manager_users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `j_manager_users` WRITE;
/*!40000 ALTER TABLE `j_manager_users` DISABLE KEYS */;

INSERT INTO `j_manager_users` (`id`, `name`, `email`, `username`, `password`, `active`)
VALUES
	(1,'Joy Interactive','dev@joy-interactive.com','joy','202cb962ac59075b964b07152d234b70',1);

/*!40000 ALTER TABLE `j_manager_users` ENABLE KEYS */;
UNLOCK TABLES;
