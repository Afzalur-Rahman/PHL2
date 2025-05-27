SELECT * FROM employees;


CREATE or REPLACE Function DEL_emp_count(p_emp_id int)
RETURNS VOID
LANGUAGE SQL 
AS 
$$
-- SELECT count(*) from employees;
DELETE FROM employees WHERE employee_id = p_emp_id;



$$

SELECT DEL_emp_count(29);


CREATE Procedure remove_emp_var()
LANGUAGE plpgsql
AS 
$$
DECLARE
 test_val INT

BEGIN
SELECT employee_id INTO test_val FROM employees WHERE employee_id = 26;
       DELETE FROM employees WHERE employee_id = employee_id;

END

$$

CALL remove_emp_var();