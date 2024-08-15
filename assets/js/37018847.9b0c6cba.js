"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7522],{1864:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(5893),a=s(1151),d=s(9163);const o={title:" Nested Tables in SQL",sidebar_position:2,description:"Creating Tables objects in SQL"},i="RDBMS",r={id:"advanced-databases/rdbms/tables",title:" Nested Tables in SQL",description:"Creating Tables objects in SQL",source:"@site/docs/five/advanced-databases/rdbms/tables.mdx",sourceDirName:"advanced-databases/rdbms",slug:"/advanced-databases/rdbms/tables",permalink:"/docs/five/advanced-databases/rdbms/tables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:" Nested Tables in SQL",sidebar_position:2,description:"Creating Tables objects in SQL"},sidebar:"tutorialSidebar",previous:{title:"Objects and nested Objects in SQL",permalink:"/docs/five/advanced-databases/rdbms/objects"},next:{title:"MongoDB",permalink:"/docs/five/category/mongodb"}},l={},c=[{value:"Write a SQL query to show usage of nested tables in SQL",id:"write-a-sql-query-to-show-usage-of-nested-tables-in-sql",level:2}];function E(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rdbms",children:(0,t.jsx)(d.Z,{name:"banner",description:"Nested Tables",children:"RDBMS"})}),"\n",(0,t.jsx)(n.h2,{id:"write-a-sql-query-to-show-usage-of-nested-tables-in-sql",children:"Write a SQL query to show usage of nested tables in SQL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- (DONT WRITE BEGIN BLOCK IN EXAM)\nBEGIN\n   EXECUTE IMMEDIATE 'DROP TABLE employees';\n   EXECUTE IMMEDIATE 'DROP TYPE address_type';\nEXCEPTION\n   WHEN OTHERS THEN NULL;\nEND;\n/\n\n--- ACTUAL CODE STARTS HERE\n\n-- Define the nested table type\nCREATE OR REPLACE TYPE address_type AS TABLE OF VARCHAR2(100);\n/\n\n-- Create the employees table with a nested table column\nCREATE TABLE employees (\n  id NUMBER PRIMARY KEY,\n  name VARCHAR2(50),\n  addresses address_type\n)\nNESTED TABLE addresses STORE AS addresses_tab;\n\nDESC employees;\n\n-- Insert operation\nINSERT INTO employees VALUES (1, 'John Doe', address_type('123 Main St', '456 Elm St', '789 Oak St'));\n\n-- Select all data before deletion\nSELECT e.id, e.name, a.column_value AS address\nFROM employees e\nCROSS JOIN TABLE(e.addresses) a;\n\n-- Delete operation: remove a specific address using a subquery\nDELETE FROM THE (\n    SELECT addresses\n    FROM employees\n    WHERE id = 1\n) a\nWHERE a.column_value = '456 Elm St';\n\n-- Update operation\nUPDATE THE (\n    SELECT addresses\n    FROM employees\n    WHERE id = 1\n) a\nSET a.column_value = '789 Maple St'\nWHERE a.column_value = '789 Oak St';\n\n-- Final select to show results after deletion\nSELECT e.id, e.name, a.column_value AS address\nFROM employees e\nCROSS JOIN TABLE(e.addresses) a;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}},9163:(e,n,s)=>{s.d(n,{Z:()=>d});s(7294);var t=s(4996),a=s(5893);const d=e=>{let{name:n,description:s,children:d}=e;const o=(0,t.ZP)(`/images/${n}.jpg`);return(0,a.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,a.jsx)("img",{src:o,alt:o,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,a.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:d}),(0,a.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:s})]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(7294);const a={},d=t.createContext(a);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);