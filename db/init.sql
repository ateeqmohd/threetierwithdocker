CREATE DATABASE appdb;

USE appdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO users (name) VALUES
('Ateeq'),
('Rajesh'),
('DevOps Engineer');
