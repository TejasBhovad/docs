"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5823],{2423:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>T,frontMatter:()=>E,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"advanced-databases/rdbms/tables","title":" Nested Tables in SQL","description":"Creating Tables objects in SQL","source":"@site/docs/five/advanced-databases/rdbms/tables.mdx","sourceDirName":"advanced-databases/rdbms","slug":"/advanced-databases/rdbms/tables","permalink":"/docs/five/advanced-databases/rdbms/tables","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":" Nested Tables in SQL","sidebar_position":2,"description":"Creating Tables objects in SQL"},"sidebar":"tutorialSidebar","previous":{"title":"Objects and nested Objects in SQL","permalink":"/docs/five/advanced-databases/rdbms/objects"},"next":{"title":"MongoDB","permalink":"/docs/five/category/mongodb"}}');var s=a(4848),r=a(8453),i=a(8731);const E={title:" Nested Tables in SQL",sidebar_position:2,description:"Creating Tables objects in SQL"},o="RDBMS",l={},b=[{value:"Write a SQL query to show usage of nested tables in SQL",id:"write-a-sql-query-to-show-usage-of-nested-tables-in-sql",level:2},{value:"Q1",id:"q1",level:2},{value:"Q2",id:"q2",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rdbms",children:(0,s.jsx)(i.A,{name:"banner",description:"Nested Tables",children:"RDBMS"})})}),"\n",(0,s.jsx)(n.h2,{id:"write-a-sql-query-to-show-usage-of-nested-tables-in-sql",children:"Write a SQL query to show usage of nested tables in SQL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- (DONT WRITE BEGIN BLOCK IN EXAM)\nBEGIN\n   EXECUTE IMMEDIATE 'DROP TABLE employees';\n   EXECUTE IMMEDIATE 'DROP TYPE address_type';\nEXCEPTION\n   WHEN OTHERS THEN NULL;\nEND;\n/\n\n--- ACTUAL CODE STARTS HERE\n\n-- Define the nested table type\nCREATE OR REPLACE TYPE address_type AS TABLE OF VARCHAR2(100);\n/\n\n-- Create the employees table with a nested table column\nCREATE TABLE employees (\n  id NUMBER PRIMARY KEY,\n  name VARCHAR2(50),\n  addresses address_type\n)\nNESTED TABLE addresses STORE AS addresses_tab;\n\nDESC employees;\n\n-- Insert operation\nINSERT INTO employees VALUES (1, 'John Doe', address_type('123 Main St', '456 Elm St', '789 Oak St'));\n\n-- Select all data before deletion\nSELECT e.id, e.name, a.column_value AS address\nFROM employees e\nCROSS JOIN TABLE(e.addresses) a;\n\n-- Delete operation: remove a specific address using a subquery\nDELETE FROM THE (\n    SELECT addresses\n    FROM employees\n    WHERE id = 1\n) a\nWHERE a.column_value = '456 Elm St';\n\n-- Update operation\nUPDATE THE (\n    SELECT addresses\n    FROM employees\n    WHERE id = 1\n) a\nSET a.column_value = '789 Maple St'\nWHERE a.column_value = '789 Oak St';\n\n-- Final select to show results after deletion\nSELECT e.id, e.name, a.column_value AS address\nFROM employees e\nCROSS JOIN TABLE(e.addresses) a;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"q1",children:"Q1"}),"\n",(0,s.jsx)(n.p,{children:"A university has a number of books listed as textbooks, each of which may be used by\nmore than one university. A book is published by only one publisher, but one publisher\ncan publish more than one book. Show the implementation of the association\nrelationships above using object references. Assume that there are three object types,\nthat is, University, Book, and Publisher. Add any attribute where necessary."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Drop the types if they already exist (in case of re-execution)\nBEGIN\n   EXECUTE IMMEDIATE 'DROP TYPE Publisher FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE Book FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE University FORCE';\n   EXECUTE IMMEDIATE 'DROP TABLE Publisher_Table';\n   EXECUTE IMMEDIATE 'DROP TABLE Book_Table';\n   EXECUTE IMMEDIATE 'DROP TABLE University_Table';\nEXCEPTION\n   WHEN OTHERS THEN NULL;\nEND;\n/\n\n-- Create the Publisher type\nCREATE OR REPLACE TYPE Publisher AS OBJECT (\n    publisher_id NUMBER,\n    name VARCHAR2(100)\n);\n/\n\n-- Create the Book type with a REF to Publisher\nCREATE OR REPLACE TYPE Book AS OBJECT (\n    book_id NUMBER,\n    title VARCHAR2(100),\n    publisher_ref REF Publisher\n);\n/\n\n-- Create the University type with a REF to Book\nCREATE OR REPLACE TYPE University AS OBJECT (\n    university_id NUMBER,\n    name VARCHAR2(100),\n    books REF Book\n);\n/\n\n-- Create a table for publishers\nCREATE TABLE Publisher_Table OF Publisher;\n\n-- Create a table for books\nCREATE TABLE Book_Table OF Book;\n\n-- Create a table for universities\nCREATE TABLE University_Table OF University;\n\n-- Insert publishers\nINSERT INTO Publisher_Table VALUES (Publisher(1, 'Pearson'));\nINSERT INTO Publisher_Table VALUES (Publisher(2, 'McGraw-Hill'));\n\n-- Insert books with references to publishers\nINSERT INTO Book_Table VALUES (Book(101, 'Introduction to Databases',\n    (SELECT REF(p) FROM Publisher_Table p WHERE p.publisher_id = 1)));\nINSERT INTO Book_Table VALUES (Book(102, 'Advanced SQL Techniques',\n    (SELECT REF(p) FROM Publisher_Table p WHERE p.publisher_id = 2)));\n\n-- Insert universities with references to books\nINSERT INTO University_Table VALUES (University(1, 'Stanford University',\n    (SELECT REF(b) FROM Book_Table b WHERE b.book_id = 101)));\nINSERT INTO University_Table VALUES (University(2, 'MIT',\n    (SELECT REF(b) FROM Book_Table b WHERE b.book_id = 102)));\n\n-- Query to show book titles and their publisher names\nSELECT b.title, p.name AS publisher_name\nFROM Book_Table b, Publisher_Table p\nWHERE b.publisher_ref = REF(p);\n\n-- Query to show university names and their associated book titles\nSELECT u.name AS university_name, b.title AS book_title\nFROM University_Table u, Book_Table b\nWHERE u.books = REF(b);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"q2",children:"Q2"}),"\n",(0,s.jsx)(n.p,{children:"The Victorian state government stores geographic data in the ranking of aggregation.\nData of the state is an aggregation of the area data, and data of the area is an aggregation\nof the suburb data. For the first implementation, each level contains only an ID and a\nname as the attributes. Using a nested table, show the implementation of this case."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Drop types if they already exist\nBEGIN\n   EXECUTE IMMEDIATE 'DROP TYPE Suburb FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE Area FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE State FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE Suburb_NestedTable FORCE';\n   EXECUTE IMMEDIATE 'DROP TYPE Area_NestedTable FORCE';\nEXCEPTION\n   WHEN OTHERS THEN NULL;\nEND;\n/\n\n-- Create the Suburb type\nCREATE OR REPLACE TYPE Suburb AS OBJECT (\n    suburb_id NUMBER,\n    name VARCHAR2(100)\n);\n/\n\n-- Create a nested table type for Suburbs\nCREATE OR REPLACE TYPE Suburb_NestedTable AS TABLE OF Suburb;\n/\n\n-- Create the Area type with a nested table of Suburbs\nCREATE OR REPLACE TYPE Area AS OBJECT (\n    area_id NUMBER,\n    name VARCHAR2(100),\n    suburbs Suburb_NestedTable\n);\n/\n\n-- Create a nested table type for Areas\nCREATE OR REPLACE TYPE Area_NestedTable AS TABLE OF Area;\n/\n\n-- Create the State type with a nested table of Areas\nCREATE OR REPLACE TYPE State AS OBJECT (\n    state_id NUMBER,\n    name VARCHAR2(100),\n    areas Area_NestedTable\n);\n/\n-- Create a table for storing state data\nCREATE TABLE State_Table OF State\nNESTED TABLE areas STORE AS State_Areas_NestedTable\n  (NESTED TABLE suburbs STORE AS Area_Suburbs_NestedTable);\n-- Insert data into the State_Table using nested tables\n\nINSERT INTO State_Table VALUES (\n    State(\n        1,\n        'Victoria',\n        Area_NestedTable(\n            -- Area 1\n            Area(101, 'Melbourne Metropolitan Area',\n                Suburb_NestedTable(\n                    Suburb(1001, 'Melbourne CBD'),\n                    Suburb(1002, 'Richmond'),\n                    Suburb(1003, 'Fitzroy')\n                )\n            ),\n            -- Area 2\n            Area(102, 'Geelong Area',\n                Suburb_NestedTable(\n                    Suburb(2001, 'Geelong'),\n                    Suburb(2002, 'Torquay'),\n                    Suburb(2003, 'Barwon Heads')\n                )\n            )\n        )\n    )\n);\nSELECT s.name AS state_name,\n       a.name AS area_name,\n       t.name AS suburb_name\nFROM State_Table s,\n     TABLE(s.areas) a,\n     TABLE(a.suburbs) t;\nSELECT s.name AS state_name,\n       a.name AS area_name\nFROM State_Table s,\n     TABLE(s.areas) a;\n\n"})})]})}function T(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8731:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var t=a(6025),s=a(4848);const r=e=>{let{name:n,description:a,children:r}=e;const i=(0,t.Ay)(`/images/${n}.jpg`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:i,alt:i,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:a})]})}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>E});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function E(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);