SELECT * FROM publisher;

SELECT * FROM books;

SELECT b.title, b.author, p.name AS publisher
FROM books b 
CROSS JOIN publishers p;

ALTER TABLE publishers ADD COLUMN publisher_id INT;

SELECT * FROM books NATURAL JOIN publishers;

