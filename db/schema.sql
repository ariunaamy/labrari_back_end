DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev; 

\c books_dev; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    author VARCHAR(255) NULL,
    image_url VARCHAR(255) NULL,
    year_published INTEGER NULL,
    status VARCHAR(50) NOT NULL,
    reader_notes TEXT NULL,
    recommend_to VARCHAR(255) NULL,
    user_id INT REFERENCES users(id)
);



-- entity relationship diagramming 
-- what data looks like 
-- user experiences and features 
-- user experiences 
-- how to structure backend? 
-- sql scheema (data structures) 
