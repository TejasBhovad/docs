"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[432],{251:(n,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(7462),e=(t(7294),t(3905)),a=t(814);const i={sidebar_position:1,description:"Stack based Puzzle"},s="Tower of Hanoi",c={unversionedId:"journal/hanoi",id:"journal/hanoi",title:"Tower of Hanoi",description:"Stack based Puzzle",source:"@site/docs/journal/hanoi.mdx",sourceDirName:"journal",slug:"/journal/hanoi",permalink:"/docs/c/journal/hanoi",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Stack based Puzzle"},sidebar:"tutorialSidebar",previous:{title:"Journal",permalink:"/docs/c/category/journal"},next:{title:"Stacks",permalink:"/docs/c/journal/stack"}},d={},u=[],l={toc:u};function p(n){let{components:o,...t}=n;return(0,e.kt)("wrapper",(0,r.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"tower-of-hanoi"},"Tower of Hanoi"),(0,e.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\nint N;\n\n// HANOI FUNCTION\nvoid Hanoi(int N, char src, char dest, char aux)\n{\n    // CHECK IF ONE DISK PRESENT\n    if (N == 1)\n    {\n        printf("\\nMove disk 1 from rod %c to rod %c", src, dest);\n        return;\n    }\n    Hanoi(N - 1, src, aux, dest);\n    printf("\\nMove disk %d from rod %c to rod %c", N, src, dest);\n    Hanoi(N - 1, aux, dest, src);\n}\nint main()\n{\n    printf("Enter the number of Disks: ");\n    scanf("%d", &N);\n    printf("\\n");\n    printf("Moves:");\n    Hanoi(N, \'A\', \'C\', \'B\');\n    printf("\\n");\n\n    return 0;\n}\n'))}p.isMDXComponent=!0}}]);