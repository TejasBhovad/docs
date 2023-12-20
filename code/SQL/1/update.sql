-- creating a table
CREATE TABLE tejas_students(
    std_id number(5), 
    name varchar(30), 
    marks number(10),
    status varchar(4)
    );
DESC tejas_students;
-- adding some data
INSERT INTO tejas_students VALUES(231,'Himesh',20,'');
INSERT INTO tejas_students VALUES(233,'Raj',32,'');
INSERT INTO tejas_students VALUES(235,'Mohan',65,'');
INSERT INTO tejas_students VALUES(236,'Ayush',75,'');
SELECT * FROM tejas_students;
-- updating status of student
UPDATE tejas_students SET status = 'PASS' WHERE marks >= 40;
UPDATE tejas_students SET status = 'FAIL' WHERE marks < 40;
SELECT * FROM tejas_students;