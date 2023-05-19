DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev; 

\c books_dev; 
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    author VARCHAR(255) NOT NULL,
    year_published INT,
    status VARCHAR(50),
    reader_notes TEXT,
    recommend_to VARCHAR(255)
);
