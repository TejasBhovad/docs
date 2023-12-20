"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5761],{6303:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=i(5893),t=i(1151),a=i(9286);const s='#include <stdio.h>\n#define N 10\nint i, ar[N];\nvoid read()\n{\n    printf("\\n");\n    for (i = 0; i < N; i++)\n    {\n        printf("Enter %d Element: ", i);\n        scanf("%d", &ar[i]);\n    }\n}\nint find(int key)\n{\n    for (i = 0; i < N; i++)\n    {\n        if (ar[i] == key)\n        {\n            return i;\n        }\n    }\n    return -1;\n}\nint main()\n{\n    int key, index;\n    read();\n    printf("\\nEnter Key Element: ");\n    scanf("%d", &key);\n    index = find(key);\n    if (index == -1)\n    {\n        printf("\\nKey Element not Found");\n    }\n    else\n    {\n        printf("\\nKey Element found at %d", index);\n    }\n    printf("\\n");\n    return 0;\n}',o={sidebar_position:1,description:"Linear Search in C"},d="Linear Search",c={id:"algorithms/linearSearch",title:"Linear Search",description:"Linear Search in C",source:"@site/docs/three/algorithms/linearSearch.mdx",sourceDirName:"algorithms",slug:"/algorithms/linearSearch",permalink:"/docs/three/algorithms/linearSearch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Linear Search in C"},sidebar:"tutorialSidebar",previous:{title:"Algorithms",permalink:"/docs/three/category/algorithms"},next:{title:"Bubble Sort",permalink:"/docs/three/algorithms/bubbleSort"}},l={},h=[{value:"CODE",id:"code",level:2}];function u(n){const e={h1:"h1",h2:"h2",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"linear-search",children:"Linear Search"}),"\n",(0,r.jsx)(e.h2,{id:"code",children:"CODE"}),"\n",(0,r.jsx)(a.Z,{language:"c",children:s})]})}function f(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}}}]);