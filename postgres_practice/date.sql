SHOW timezone;

SELECT now();

create table timeZ (ts TIMESTAMP without time zone,tsz TIMESTAMP with time zone)

INSERT into timeZ VALUES('2024-01-12 10:33:00','2024-01-12 10:45:00');

SELECT * FROM timeZ;

SELECT now();

SELECT CURRENT_DATE;


SELECT now()::date;
SELECT now()::time;

SELECT to_char(now(),'yyyy/mm/dd');

