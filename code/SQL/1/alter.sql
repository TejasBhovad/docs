-- creating a table
CREATE TABLE tejas_emp(
    emp_id number(5), 
    name varchar(30), 
    salary number(10)
    );
DESC tejas_emp;
-- adding columns
ALTER TABLE tejas_emp ADD(
    department varchar(30),
    contact_no number(10)
);
DESC tejas_emp;
-- dropping contact_no column
ALTER TABLE tejas_emp DROP COLUMN contact_no;
DESC tejas_emp;
-- renaming department -> dep
ALTER TABLE tejas_emp MODIFY(department char(20));
DESC tejas_emp;