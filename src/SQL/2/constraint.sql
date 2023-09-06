-- Creating a table for students
CREATE TABLE tejas_students (
    student_id NUMBER(5) PRIMARY KEY, 
    name VARCHAR(30) NOT NULL, 
    marks NUMBER(10),
    email VARCHAR(50) UNIQUE
);

-- Creating a table for courses with a foreign key referencing tejas_students
CREATE TABLE tejas_courses (
    course_id NUMBER(5) PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    student_id NUMBER(5),
    FOREIGN KEY (course_id) REFERENCES tejas_students(student_id)
);

DESC tejas_students;
DESC tejas_courses;