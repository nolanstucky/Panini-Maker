DROP DATABASE panini_db;
CREATE DATABASE panini_db;
USE panini_db;

CREATE TABLE paninis
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
