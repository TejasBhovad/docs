"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5094],{9138:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"algorithms/linearSearch","title":"Linear Search","description":"Linear Search in C","source":"@site/docs/three/algorithms/linearSearch.mdx","sourceDirName":"algorithms","slug":"/algorithms/linearSearch","permalink":"/docs/three/algorithms/linearSearch","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Linear Search in C"},"sidebar":"tutorialSidebar","previous":{"title":"Algorithms","permalink":"/docs/three/category/algorithms"},"next":{"title":"Bubble Sort","permalink":"/docs/three/algorithms/bubbleSort"}}');var t=r(4848),a=r(8453),s=r(1432);const o='#include <stdio.h>\n#define N 10\nint i, ar[N];\nvoid read()\n{\n    printf("\\n");\n    for (i = 0; i < N; i++)\n    {\n        printf("Enter %d Element: ", i);\n        scanf("%d", &ar[i]);\n    }\n}\nint find(int key)\n{\n    for (i = 0; i < N; i++)\n    {\n        if (ar[i] == key)\n        {\n            return i;\n        }\n    }\n    return -1;\n}\nint main()\n{\n    int key, index;\n    read();\n    printf("\\nEnter Key Element: ");\n    scanf("%d", &key);\n    index = find(key);\n    if (index == -1)\n    {\n        printf("\\nKey Element not Found");\n    }\n    else\n    {\n        printf("\\nKey Element found at %d", index);\n    }\n    printf("\\n");\n    return 0;\n}',d={sidebar_position:1,description:"Linear Search in C"},c="Linear Search",l={},h=[{value:"CODE",id:"code",level:2}];function f(n){const e={h1:"h1",h2:"h2",header:"header",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"linear-search",children:"Linear Search"})}),"\n",(0,t.jsx)(e.h2,{id:"code",children:"CODE"}),"\n",(0,t.jsx)(s.A,{language:"c",children:o})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(f,{...n})}):f(n)}}}]);