USE qevzd1149n9d7zlk;

DROP TABLE IF EXISTS paninis;


CREATE TABLE paninis
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
