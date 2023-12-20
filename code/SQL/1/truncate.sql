-- creating a table
CREATE TABLE tejas_emp(
    emp_id number(5), 
    name varchar(30), 
    salary number(10)
    );
DESC tejas_emp;
-- adding some data
INSERT INTO tejas_emp VALUES(231,'Himesh',20000);
INSERT INTO tejas_emp VALUES(233,'Raj',4000);
SELECT * FROM tejas_emp;
-- truncating the table
TRUNCATE TABLE tejas_emp;
-- checking if structure still exists
DESC tejas_emp;