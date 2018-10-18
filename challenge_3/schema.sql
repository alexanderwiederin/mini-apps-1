DROP DATABASE IF EXISTS FORMS;

CREATE DATABASE forms;

USE forms;

CREATE TABLE purchases (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(150) NOT NULL,
  address_line_1 VARCHAR(50) NOT NULL,
  address_line_2 VARCHAR(50) NOT NULL,
  billing_zip_code VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  credit_card_num VARCHAR(50) NOT NULL,
  expiry_date VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip_code VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);




