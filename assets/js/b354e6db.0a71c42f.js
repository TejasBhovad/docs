"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8026],{5950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>E});const i=JSON.parse('{"id":"sql/views","title":"Views","description":"Views in SQL","source":"@site/docs/three/sql/views.mdx","sourceDirName":"sql","slug":"/sql/views","permalink":"/docs/three/sql/views","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"description":"Views in SQL"},"sidebar":"tutorialSidebar","previous":{"title":"Triggers","permalink":"/docs/three/sql/triggers"},"next":{"title":"SQL Problems","permalink":"/docs/three/supersecret/00"}}');var r=s(4848),t=s(8453),o=s(1432);const a="DROP TABLE Employees;\n\nCREATE TABLE Employees(\n    emp_id number(3) PRIMARY KEY,\n    name varchar(30),\n    salary number(10)\n);\nINSERT INTO Employees VALUES(1,'Rohit',300);\nINSERT INTO Employees VALUES(2,'Munawar',1200);\n\n-- > CREATING VIEW\nCREATE VIEW Client AS\nSELECT name,salary\nFROM Employees;\n-- SELECTING VIEW\nSELECT * FROM Client;\n-- > DELETING A VIEW \n-- DELETE FROM view_name WHERE condition;\n\n-- > DROP A VIEW\n-- DROP VIEW Client;\n\n-- > UPDATING A VIEW\n-- UPDATE view_name SET column1 = value1 WHERE condition;",l={sidebar_position:8,description:"Views in SQL"},d="Views",c={},E=[{value:"Code",id:"code",level:3}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"views",children:"Views"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"If you get ORA-00955: name is already used by an existing object error, you can use the following command to delete the table."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DROP TABLE table_name;\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,r.jsx)(o.A,{language:"sql",children:a})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);