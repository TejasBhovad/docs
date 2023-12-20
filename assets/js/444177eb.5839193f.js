"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[9214],{7427:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var o=r(5893),a=r(1151),e=r(9286);const s='#include <stdio.h>\nint N;\n\n// HANOI FUNCTION\nvoid Hanoi(int N, char src, char dest, char aux)\n{\n    // CHECK IF ONE DISK PRESENT\n    if (N == 1)\n    {\n        printf("\\nMove disk 1 from rod %c to rod %c", src, dest);\n        return;\n    }\n    Hanoi(N - 1, src, aux, dest);\n    printf("\\nMove disk %d from rod %c to rod %c", N, src, dest);\n    Hanoi(N - 1, aux, dest, src);\n}\nint main()\n{\n    printf("Enter the number of Disks: ");\n    scanf("%d", &N);\n    printf("\\n");\n    printf("Moves:");\n    Hanoi(N, \'A\', \'C\', \'B\');\n    printf("\\n");\n\n    return 0;\n}\n',i={sidebar_position:1,description:"Stack based Puzzle"},c="Tower of Hanoi",u={id:"Data Structures/journal/hanoi",title:"Tower of Hanoi",description:"Stack based Puzzle",source:"@site/docs/two/Data Structures/journal/hanoi.mdx",sourceDirName:"Data Structures/journal",slug:"/Data Structures/journal/hanoi",permalink:"/docs/two/Data Structures/journal/hanoi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Stack based Puzzle"},sidebar:"tutorialSidebar",previous:{title:"Journal",permalink:"/docs/two/category/journal"},next:{title:"Stacks",permalink:"/docs/two/Data Structures/journal/stack"}},d={},l=[];function f(n){const t={h1:"h1",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"tower-of-hanoi",children:"Tower of Hanoi"}),"\n",(0,o.jsx)(e.Z,{language:"c",children:s})]})}function p(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(f,{...n})}):f(n)}}}]);