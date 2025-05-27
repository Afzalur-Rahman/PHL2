CREATE TABLE employees (
employee_id SERIAL PRIMARY KEY,
employee_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50),
salary DECIMAL(10, 2),
hire_date DATE);


INSERT INTO employees (employee_name, department_name, salary, hire_date) VALUES
('John Doe', 'HR', 60000.00, '2022-01-10'),
('Jane Smith', 'Marketing', 75000.50, '2021-05-22'),
('Bob Johnson', 'Finance', 88089.75, '2020-11-15'),
-- Removed invalid date: ('Alice Willians', 'IT', 90000.25, '2019-88-03'),
-- Fixed quotes and date:
('David Lee', 'Sales', 65000.50, '2020-03-18'),
('Sarah Brown', 'Engineering', 70000.00, '2021-09-28'),
('Mike Miller', 'Customer Support', 55000.75, '2022-02-05'),
('Emily Davis', 'Administration', 95000.00, '2018-12-12'),
('Chris Wilson', 'Research', 72000.50, '2020-06-30'),
('Amy White', 'Quality Assurance', 68000.25, '2021-11-09'),
('John Johnson', 'HR', 62000.00, '2022-01-15'),
('Jessica Thompson', 'Marketing', 78000.50, '2021-06-05'),
('Michael Harris', 'Finance', 85089.75, '2020-11-25'),
('Emma Martinez', 'IT', 92000.25, '2019-09-15'),
('James Taylor', 'Sales', 67000.50, '2020-04-08'),
('Sophia Anderson', 'Engineering', 72000.00, '2021-10-18'),
('William Jackson', 'Customer Support', 56000.75, '2022-02-10'),
('Olivia Nelson', 'Administration', 97000.00, '2018-12-20'),
-- Fixed quotes:
('Daniel White', 'Research', 73000.50, '2020-07-05'),
('Ava Wilson', 'Quality Assurance', 69080.25, '2021-11-15'),
('Matthew Brown', 'HR', 63000.00, '2022-01-20'),
('Sara Brown', 'Engineering', 70000.00, '2021-09-28'),
-- Removed invalid salary: ('Mike Miller', 'Customer Support', 55ee0.75, '2022-02-05'),
('Emily Davis', 'Administration', 95000.00, '2018-12-12'),
-- Removed invalid date: ('Chris Wilson', 'Research', 72000.50, '2020-06-38'),
('Amy White', 'Quality Assurance', 68000.25, '2021-11-09'),
('John Johnson', 'HR', 62000.00, '2022-01-15'),
('Jessica Thompson', 'Marketing', 78000.50, '2021-06-05'),
('Michael Harris', 'Finance', 85089.75, '2020-11-25'),
('Emma Martinez', 'IT', 92000.25, '2019-09-15'),
('James Taylor', 'Sales', 67000.50, '2020-04-08'),
-- Removed invalid salary: ('Sophia Anderson', 'Engineering', 72eee.00, '2021-10-18'),
('William Jackson', 'Customer Support', 56000.75, '2022-02-10'),
('Olivia Nelson', 'Administration', 97000.00, '2018-12-20'),
-- Fixed quotes and department spelling:
('Daniel White', 'Research', 73000.50, '2020-07-05'),
('Ava Wilson', 'Quality Assurance', 69080.25, '2021-11-15'),
('Matthem Brown', 'HR', 63000.00, '2022-01-20');


SELECT * FROM employees WHERE salary > (SELECT max(salary) FROM employees WHERE department_name = 'HR');
-- SELECT max(salary) FROM employees WHERE department_name = 'HR' ;


SELECT * ,(select SUM(salary)from employees)FROM employees;


SELECT * FROM(SELECT department_name, sum(salary) from employees GROUP BY department_name) as total_salary;
SELECT department_name, sum(salary) from employees GROUP BY department_name;