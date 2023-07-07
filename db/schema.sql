DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;
\c books_dev; 
-- post insert user upon sign up 
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(16) NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(16) NOT NULL,
  last_name  VARCHAR(30) NOT NULL,
  profile_photo BYTEA
);

CREATE TABLE books (
    bookApi_id VARCHAR(30) NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NULL,
    image_url VARCHAR(255) NULL,
    year_published INTEGER NULL
);

-- POST when insert book into collection will insert into this table Many to Many
-- collection  is intermediate table 
CREATE TABLE collections (
  --  user_id INT NOT NULL,
  --  bookApi_id TEXT NOT NULL,
  user_id INT REFERENCES users(user_id),
  bookApi_id TEXT REFERENCES books(bookApi_id),
   notes TEXT,
   rating INT CHECK (rating >= 0 AND rating <= 10),
   recommend_to TEXT[],
   status VARCHAR(16) NOT NULL
) 

-- joins data of users and books 






-- entity relationship diagramming 
-- what data looks like 
-- user experiences and features 
-- user experiences 
-- how to structure backend? 
-- sql scheema (data structures) 
