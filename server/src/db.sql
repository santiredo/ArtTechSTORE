CREATE DATABASE atechstore;

\l

\c artechstore;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(40),
    mail VARCHAR(40),
    password VARCHAR(40),
    birthdate DATE,
    rolId INT,
    direction VARCHAR,
);

INSERT INTO users (name, mail, password, birthdate, direction)
    VALUES ('Gaston', 'gaston@ibm.com', 'gaston', '2000-01-01', 'CABA'), ('Santi', 'santi@ibm.com', 'santi', '2000-01-01', 'CABA'), 
    ('Luis', 'luis@ibm.com', 'luis', '2000-01-01', 'CABA'), ('Joan', 'joan@ibm.com', 'joan', '2000-01-01', 'CABA'),
    ('Yami', 'yami@ibm.com', 'yami', '2000-01-01', 'CABA'), ('Joaquin', 'joaquin@ibm.com', 'joaquin', '2000-01-01', 'CABA'), 
    ('Bryam', 'bryam@ibm.com', 'bryam', '2000-01-01', 'CABA');

select * from users;