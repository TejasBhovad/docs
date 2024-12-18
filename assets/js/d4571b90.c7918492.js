"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8049],{1446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>E});const i=JSON.parse('{"id":"advanced-databases/objects","title":"Experiment 1","description":"Creating objects and tables in SQL","source":"@site/docs/five/advanced-databases/objects.mdx","sourceDirName":"advanced-databases","slug":"/advanced-databases/objects","permalink":"/docs/five/advanced-databases/objects","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Experiment 1","sidebar_position":1,"description":"Creating objects and tables in SQL"},"sidebar":"tutorialSidebar","previous":{"title":"References","permalink":"/docs/five/advanced-databases/mongodb/"},"next":{"title":"Data analytics","permalink":"/docs/five/category/data-analytics"}}');var s=t(4848),a=t(8453),o=t(8731);const d={title:"Experiment 1",sidebar_position:1,description:"Creating objects and tables in SQL"},c="Experiment 1",r={},E=[];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"experiment-1",children:(0,s.jsx)(o.A,{name:"banner",description:"Objects and Tables in SQL",children:"Experiment 1"})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Write a SQL query to show usage of objects and their members in SQL."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TYPE EMPLOYEE_TY AS OBJECT\n(\n  EMPLOYEE_ID   NUMBER(6),\n  FIRST_NAME   VARCHAR2(20),\n  LAST_NAME    VARCHAR2(25),\n  EMAIL        VARCHAR2(65),\n  SALARY       NUMBER(8,2),\n  DOB          DATE,\n  MEMBER FUNCTION GET_AGE RETURN NUMBER\n)\n/\n\nCREATE TYPE BODY EMPLOYEE_TY AS\n  MEMBER FUNCTION GET_AGE RETURN NUMBER\n  IS\n  BEGIN\n    RETURN TRUNC(MONTHS_BETWEEN(SYSDATE, DOB) / 12);\n  END GET_AGE;\nEND;\n/\n\nCREATE TABLE EMPLOYEES OF EMPLOYEE_TY;\n\nINSERT INTO EMPLOYEES VALUES\n(EMPLOYEE_TY(100, 'John', 'Doe', 'john.doe@example.com', 5000.00, DATE '1985-01-01'));\n\nINSERT INTO EMPLOYEES VALUES\n(EMPLOYEE_TY(101, 'Jane', 'Smith', 'jane.smith@example.com', 4000.00, DATE '1990-03-15'));\n\nINSERT INTO EMPLOYEES VALUES\n(EMPLOYEE_TY(102, 'Michael', 'Johnson', 'michael.johnson@example.com', 6000.00, DATE '1980-06-30'));\n\nINSERT INTO EMPLOYEES VALUES\n(EMPLOYEE_TY(103, 'Emily', 'Davis', 'emily.davis@example.com', 3500.00, DATE '1995-09-01'));\n\nSELECT e.FIRST_NAME, e.LAST_NAME, e.SALARY, e.GET_AGE() AS AGE\nFROM EMPLOYEES e;\n\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To compile and run the program, either use ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/in/database/technologies/appdev/xe.html",children:"Oracle XE"})," or ",(0,s.jsx)(n.a,{href:"https://onecompiler.com/plsql",children:"OneCompiler"})]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Output",src:t(6427).A+"",width:"1531",height:"941"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Output",src:t(8784).A+"",width:"898",height:"582"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Output",src:t(5033).A+"",width:"1006",height:"753"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Output",src:t(1990).A+"",width:"979",height:"606"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8731:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(6025),s=t(4848);const a=e=>{let{name:n,description:t,children:a}=e;const o=(0,i.Ay)(`/images/${n}.jpg`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:o,alt:o,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:a}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:t})]})}},6427:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_1-703f09b9882708af73c22119d5bd3b3b.png"},8784:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_2-9164e130a5a185dff2e05b519c3a4b46.png"},5033:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_3-b92c8b3919e0b62a8185be67964a3023.png"},1990:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_4-a4caf8508ec2174e705253ddfca2dfae.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);