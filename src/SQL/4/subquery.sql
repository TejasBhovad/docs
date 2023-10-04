DROP TABLE tejas_bank;
DROP TABLE tejas_loan;
-- creating a table
CREATE TABLE tejas_bank(
    cust_id number(5), 
    name varchar(30), 
    balance number(10)
    );
CREATE TABLE tejas_loan(
    cust_id number(5), 
    name varchar(30),
    loan number(8)
    );
DESC tejas_bank;
DESC tejas_loan;
INSERT INTO tejas_bank VALUES(1,'Vjay',4000);
INSERT INTO tejas_bank VALUES(2,'Vjay',1000);
INSERT INTO tejas_loan VALUES(2,'Vjay',5000);
INSERT INTO tejas_loan VALUES(3,'Riyal',100);
-- all customers having record in tejas_loan and in tejas_bank
SELECT DISTINCT name,cust_id FROM tejas_loan
    WHERE name IN(SELECT name FROM tejas_bank);
-- all customers having record in tejas_loan and not in tejas_bank
SELECT DISTINCT name,cust_id FROM tejas_loan
    WHERE name NOT IN(SELECT name FROM tejas_bank);