-- Active: 1747481715592@@127.0.0.1@5432@b5_psql_cs@public

                     --LEARNING ALTER and SELECT
ALTER TABLE books ADD COLUMN genre TEXT;

ALTER TABLE books DROP COLUMN genre;

ALTER TABLE books ADD COLUMN in_stock BOOLEAN DEFAULT true;


ALTER TABLE books RENAME COLUMN author_name TO author;
SELECT * FROM books;

SELECT title,price FROM books;


SELECT * FROM books WHERE in_stock = false;

SELECT * FROM books WHERE author= 'George Orwell';

SELECT title, LENGTH(title) FROM books;

SELECT COUNT(*) FROM books;

SELECT AVG(price) FROM books;

SELECT MAX(price), MIN(price) FROM books;


                 --LEARNING BETWEEN,LIKE,ILIKE,IN,LIMIT,OFFSET

SELECT * FROM books WHERE price BETWEEN 150 AND 200;

SELECT * FROM books WHERE author LIKE '%Orwell';

SELECT * FROM books WHERE author ILIKE '%orwell';

SELECT title,author,price FROM books WHERE author IN ('George Orwell','J.K. Rowling');


SELECT * FROM books LIMIT 3;
SELECT * FROM books  OFFSET 3;

            -- Learning Update operator


UPDATE books SET price = price*1.10;

SELECT * FROM books;

                     --Grouping

SELECT author, COUNT(*) FROM books GROUP BY author; 

SELECT author, COUNT(*) FROM books GROUP BY author HAVING COUNT(*)>1;

                     --learning foreign key 


ALTER TABLE books DROP CONSTRAINT books_publisher_id_fkey;


ALTER TABLE books ADD CONSTRAINT books_publisher_id_fkey FOREIGN KEY (publisher_id) REFERENCES publishers(id)
ON DELETE CASCADE;
 DELETE FROM publishers WHERE id = 9;                    

                       --LEARNING JOIN

    SELECT b.title, p.name AS publisher FROM   books b INNER JOIN publishers p ON b.publisher_id =  p.id;               
   
   
    SELECT b.title, p.name AS publisher FROM   books b LEFT JOIN publishers p ON b.publisher_id =  p.id;               
   
   
    SELECT b.title, p.name AS publisher FROM   books b RIGHT JOIN publishers p ON b.publisher_id =  p.id;               
    
    
    SELECT b.title, p.name AS publisher FROM   books b FULL JOIN publishers p ON b.publisher_id =  p.id;               


                            --date time

   SELECT EXTRACT(YEAR FROM CURRENT_DATE )AS  yr ,                       
   EXTRACT(MONTH FROM CURRENT_DATE ) AS mnt,                         
   EXTRACT(DAY FROM CURRENT_DATE ) AS dy;                         