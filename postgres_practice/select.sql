
CREATE TABLE students2 (
student_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT,
grade CHAR(2),
course VARCHAR(50),
email VARCHAR(100),
dob DATE,
blood_group VARCHAR(5),
country VARCHAR(50)
);

INSERT INTO students2 (first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
('John', 'Doe', 20, 'A', 'Math', 'john.doe@example.com', '2004-01-15', 'O+', 'USA'),
('Jane', 'Smith', 21, 'B', 'History', 'jane.smith@example.com', '2003-05-20', 'A-', 'Canada'),
('Alice', 'Johnson', 19, 'A', 'Physics', 'alice.johnson@example.com', '2002-11-08', 'B+', 'UK'),
('Bob', 'Williams', 22, 'C', 'Chemistry', 'bob.williams@example.com', '2001-07-03', 'AB-', 'Australia'),
('Charlie', 'Brown', 20, 'B', 'English', NULL, '2004-03-30', 'A+', 'New Zealand'),
('Emma', 'Jones', 23, 'B', 'Biology', 'emma.jones@example.com', '2000-09-12', 'A+', 'USA'),
('Michael', 'Johnson', 22, 'C', 'Physics', 'michael.johnson@example.com', '2002-04-05', 'O-', 'Canada'),
('Olivia', 'Davis', 21, 'A', 'Math', 'olivia.davis@example.com', '2003-12-18', 'B-', 'UK'),
('William', 'Taylor', 20, 'B', 'Chemistry', NULL, '2004-08-30', 'A+', 'Australia'),
('Sophia', 'Brown', 25, 'A', 'English', 'sophia.brown@example.com', '1999-06-25', 'AB+', 'New Zealand'),
('Liam', 'Miller', 19, 'C', 'History', 'liam.miller@example.com', '2002-02-10', 'A-', 'USA'),
('Ava', 'Anderson', 22, 'B', 'Biology', 'ava.anderson@example.com', '2000-11-15', 'B+', 'Canada'),
('Noah', 'Martinez', 21, 'A', 'Physics', NULL, '2001-04-28', 'O+', 'UK'),
('Isabella', 'Clark', 20, 'C', 'Chemistry', 'isabella.clark@example.com', '2003-10-03', 'A-', 'Australia'),
('Ethan', 'Garcia', 23, 'B', 'Math', 'ethan.garcia@example.com', '2000-07-22', 'B-', 'New Zealand'),
('Sophie', 'Moore', 22, 'A', 'English', 'sophie.moore@example.com', '2002-12-05', 'A+', 'USA'),
('James', 'Taylor', 21, 'C', 'History', 'james.taylor@example.com', '2003-03-14', 'O-', 'Canada');


select * from students2 ORDER BY dob DESC;


SELECT DISTINCT country FROM students2;

SELECT * FROM students2 
   WHERE (grade = 'A' OR course = 'Physics') AND age = 20;

 SELECT * FROM students2   
   WHERE country <> 'USA';

   SELECT concat(first_name,' ',last_name) as first_Lopa, * from students2;


   SELECT count(age) from students2;

   SELECT * FROM students2
   WHERE email IS not NULL;

   SELECT COALESCE(email,'email naaai'),first_name from students2;

   SELECT * FROM students2 where country IN('USA','UK','Canada');
   SELECT * FROM students2 
           where dob BETWEEN '2000-01-01' AND '2004-01-01' ORDER BY dob;


    SELECT * FROM students2
        where first_name ILIKE 'a%';       


        SELECT * FROM students2 LIMIT 5 OFFSET 5 * 0;
        SELECT * FROM students2 LIMIT 5 OFFSET 5 * 1;
        SELECT * FROM students2 LIMIT 5 OFFSET 5 * 2;



        SELECT * FROM students2 ;

       UPDATE students2 
          SET email = 'default@mail.com'
            where student_id = 30; 