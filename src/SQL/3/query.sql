-- Creating tables for the Tejas database
CREATE TABLE tejas_customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    customer_street VARCHAR(100)
);

CREATE TABLE tejas_loan (
    loan_number INT PRIMARY KEY,
    branch_name VARCHAR(50),
    amount DECIMAL(10, 2)
);
-- Insert sample data into the tables
INSERT INTO tejas_customer (customer_id, customer_name, customer_street)
VALUES (1, 'John Doe', '123 Main Street');

INSERT INTO tejas_customer (customer_id, customer_name, customer_street)
VALUES (2, 'Jane Smith', '456 Elm Street');

INSERT INTO tejas_loan (loan_number, branch_name, amount)
VALUES (101, 'Perryridge', 1500.00);

INSERT INTO tejas_loan (loan_number, branch_name, amount)
VALUES (102, 'Perryridge', 1000.00);

INSERT INTO tejas_loan (loan_number, branch_name, amount)
VALUES (103, 'Maplewood', 2000.00);

-- Simple queries
-- Find the names of all branches in the loan relation
SELECT branch_name FROM tejas_loan;

-- Find the names of all branches in the loan relation and remove duplicates
SELECT DISTINCT branch_name FROM tejas_loan;

-- Find the loan numbers for loans made at the Perryridge branch with amounts greater than $1200
SELECT loan_number FROM tejas_loan
WHERE branch_name = 'Perryridge' AND amount > 1200;

-- String manipulation operations
-- Find the names of all customers whose street includes the substring "Main"
SELECT customer_name FROM tejas_customer
WHERE customer_street LIKE '%Main%';

-- Find all customers with a CustomerName starting with "J"
SELECT * FROM tejas_customer
WHERE customer_name LIKE 'J%';

-- Find all customers with a CustomerName that ends with "e"
SELECT * FROM tejas_customer
WHERE customer_name LIKE '%e';

-- Find all customers with a CustomerName that has "Smith" in any position
SELECT * FROM tejas_customer
WHERE customer_name LIKE '%Smith%';

-- Find all customers with a CustomerName that starts with "J" and is at least 8 characters in length
SELECT * FROM tejas_customer
WHERE customer_name LIKE 'J________';

-- Find all customers with a CustomerName that does NOT start with "J"
SELECT * FROM tejas_customer
WHERE customer_name NOT LIKE 'J%';