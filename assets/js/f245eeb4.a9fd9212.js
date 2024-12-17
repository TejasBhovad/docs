"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8318],{553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"Data Structures/basics/arrays","title":"Arrays","description":"collection of elements","source":"@site/docs/two/Data Structures/basics/arrays.mdx","sourceDirName":"Data Structures/basics","slug":"/Data Structures/basics/arrays","permalink":"/docs/two/Data Structures/basics/arrays","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"collection of elements"},"sidebar":"tutorialSidebar","previous":{"title":"Basics","permalink":"/docs/two/category/basics"},"next":{"title":"Recursion","permalink":"/docs/two/Data Structures/basics/recursion"}}');var r=t(4848),s=t(8453),a=t(1432);const l='#include <stdio.h>\nint main()\n{\n    int ar[5];\n    for (int i = 0; i < 5; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n    return 0;\n}',c='#include <stdio.h>\nint main()\n{\n    int ar[5];\n\n    // INPUT\n    for (int i = 0; i < 5; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n\n    // OUTPUT\n    for (int i = 0; i < 5; i++)\n    {\n        printf("%d", ar[i]);\n    }\n    return 0;\n}',d={sidebar_position:1,description:"collection of elements"},o="Arrays",h={},x=[{value:"Definition",id:"definition",level:2},{value:"Declaration",id:"declaration",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Referencing",id:"referencing",level:2},{value:"Looping",id:"looping",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"arrays",children:"Arrays"})}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.p,{children:"An Array is a collection of elements of the same data type."}),"\n",(0,r.jsx)(n.h2,{id:"declaration",children:"Declaration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:" int ar[10];\n char ch[10];\n"})}),"\n",(0,r.jsx)(n.h2,{id:"initialisation",children:"Initialisation"}),"\n",(0,r.jsx)(n.p,{children:"Initialisation refers to giving an initial value to a variable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int ar[5] = { 10, 20, 30, 40, 50};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"referencing",children:"Referencing"}),"\n",(0,r.jsx)(n.p,{children:"Every element in an array can be referenced by its index. Index numbers range from 0 to ( length of array - 1 )."}),"\n",(0,r.jsx)(n.p,{children:"Following is an example of indexes of the array declared above."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"ELEMENTS"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"30"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"40"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"50"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"INDEX"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"4"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ar[3]"})," --\x3e 40"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ar[0]"})," --\x3e 10"]}),"\n",(0,r.jsx)(n.h2,{id:"looping",children:"Looping"}),"\n",(0,r.jsx)(n.p,{children:"To reference each element of the array we use loops."}),"\n",(0,r.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,r.jsx)(a.A,{language:"c",children:l}),"\n",(0,r.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,r.jsx)(a.A,{language:"c",children:c}),"\n",(0,r.jsxs)(n.p,{children:["Find Arrays programs here:",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/TejasBhovad/c-programs/blob/master/arrays/programs.md",children:"https://github.com/TejasBhovad/c-programs/arrays"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);