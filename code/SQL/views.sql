DROP TABLE Employees;

CREATE TABLE Employees(
    emp_id number(3) PRIMARY KEY,
    name varchar(30),
    salary number(10)
);
INSERT INTO Employees VALUES(1,'Rohit',300);
INSERT INTO Employees VALUES(2,'Munawar',1200);

-- > CREATING VIEW
CREATE VIEW Client AS
SELECT name,salary
FROM Employees;
-- SELECTING VIEW
SELECT * FROM Client;
-- > DELETING A VIEW 
-- DELETE FROM view_name WHERE condition;

-- > DROP A VIEW
-- DROP VIEW Client;

-- > UPDATING A VIEW
-- UPDATE view_name SET column1 = value1 WHERE condition;