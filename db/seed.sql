\c books_dev; 
INSERT INTO users (user_name, email, first_name, last_name)
VALUES ('ariunaa1990', 'ariun.myagmar@gmail.com', 'Ariunaa', 'Myagmar'),
('keyrod2001', 'keyrod@gmail.com', 'Keeanu', 'Rodriguez');

INSERT INTO books (bookApi_id, title)
VALUES ('bOqMDQAAQBAJ', 'DSA'),
('2OqMDQAAQBAJ', 'mice'),
('3OqMDQAAQBAJ', 'cats');

INSERT INTO collections (user_id, bookApi_id, notes, rating, recommend_to, status)
VALUES (1,'bOqMDQAAQBAJ','bad book', 1, ARRAY['Keeanu'], 'reading'),
(2,'bOqMDQAAQBAJ','good book', 7, ARRAY['Vandhana'], 'wish'),
(1,'2OqMDQAAQBAJ','not bad', 3, ARRAY['Keeanu'], 'reading'),
(2,'3OqMDQAAQBAJ','so so', 2, ARRAY['Keeanu'], 'read');

-- database class SQL 
--SELECT * FROM (collections JOIN books ON bookApi_id=bookApi_id) WHERE bookApi_id='bOqMDQAAQBAJ';