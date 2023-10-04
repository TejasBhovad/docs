DROP TABLE tejas_emp;
DROP TABLE tejas_sal;
-- creating a table Employees
CREATE TABLE tejas_emp(
    emp_id number(5), 
    name varchar(30) 
    );
DESC tejas_emp;
-- creating a table Salary
CREATE TABLE tejas_sal(
    emp_id number(5),
	bonus number(10),
    salary number(10)
    );
DESC tejas_sal;

INSERT INTO tejas_emp VALUES(
    12,
    'One'
);
INSERT INTO tejas_emp VALUES(
    14,
    'Two'
);
INSERT INTO tejas_emp VALUES(
    19,
    'Three'
);
INSERT INTO tejas_sal VALUES(
    12,
    200,
    2000
);
INSERT INTO tejas_sal VALUES(
    14,
    900,
    2800
);
INSERT INTO tejas_sal VALUES(
    19,
    1200,
    12000
);
SELECT * from tejas_sal;
SELECT * from tejas_emp;

-- CROSS JOIN
PRINT 'CROSS JOIN';
SELECT tejas_emp.emp_id,tejas_emp.name,tejas_sal.salary
FROM tejas_emp
CROSS JOIN tejas_sal;

-- NATURAL JOIN
PRINT 'NATURAL JOIN';
SELECT * FROM 
tejas_emp NATURAL JOIN tejas_sal;

-- EQUI JOIN
PRINT 'EQUI JOIN';
SELECT * FROM 
tejas_emp INNER JOIN tejas_sal
ON tejas_emp.emp_id=tejas_sal.emp_id;

-- OUTER JOINS
INSERT INTO tejas_sal VALUES(
    22,
    200,
    4000
);
INSERT INTO tejas_sal VALUES(
    89,
    1500,
    600
);
INSERT INTO tejas_emp VALUES(
    23,
    'foo'
);

-- LEFT OUTER
PRINT 'LEFT OUTER JOIN';
SELECT * FROM 
tejas_emp LEFT OUTER JOIN tejas_sal
ON tejas_emp.emp_id=tejas_sal.emp_id;

-- RIGHT OUTER
PRINT 'RIGHT OUTER JOIN';
SELECT * FROM 
tejas_emp RIGHT OUTER JOIN tejas_sal
ON tejas_emp.emp_id=tejas_sal.emp_id;

-- FULL OUTER JOIN
PRINT 'FULL OUTER JOIN';
SELECT * FROM 
tejas_emp FULL OUTER JOIN tejas_sal
ON tejas_emp.emp_id=tejas_sal.emp_id;