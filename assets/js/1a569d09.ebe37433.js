"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6430],{7124:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Data Structures/stacks/hanoiTower","title":"Tower of Hanoi","description":"Stack based Puzzle","source":"@site/docs/two/Data Structures/stacks/hanoiTower.mdx","sourceDirName":"Data Structures/stacks","slug":"/Data Structures/stacks/hanoiTower","permalink":"/docs/two/Data Structures/stacks/hanoiTower","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Stack based Puzzle"},"sidebar":"tutorialSidebar","previous":{"title":"Stacks","permalink":"/docs/two/category/stacks"},"next":{"title":"Stack","permalink":"/docs/two/Data Structures/stacks/"}}');var s=e(4848),a=e(8453),o=e(1432);const i='#include <stdio.h>\nint N;\n\n// HANOI FUNCTION\nvoid Hanoi(int N, char src, char dest, char aux)\n{\n    // CHECK IF ONE DISK PRESENT\n    if (N == 1)\n    {\n        printf("\\nMove disk 1 from rod %c to rod %c", src, dest);\n        return;\n    }\n    Hanoi(N - 1, src, aux, dest);\n    printf("\\nMove disk %d from rod %c to rod %c", N, src, dest);\n    Hanoi(N - 1, aux, dest, src);\n}\nint main()\n{\n    printf("Enter the number of Disks: ");\n    scanf("%d", &N);\n    printf("\\n");\n    printf("Moves:");\n    Hanoi(N, \'A\', \'C\', \'B\');\n    printf("\\n");\n\n    return 0;\n}',c={sidebar_position:1,description:"Stack based Puzzle"},d="Tower of Hanoi",u={},l=[];function h(n){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tower-of-hanoi",children:"Tower of Hanoi"})}),"\n",(0,s.jsxs)(t.p,{children:["Find a visual representation of solution of Tower of Hanoi ",(0,s.jsx)(t.a,{href:"https://yongdanielliang.github.io/animation/web/TowerOfHanoi.html",children:"here"})]}),"\n",(0,s.jsx)(o.A,{language:"c",children:i})]})}function f(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}}}]);