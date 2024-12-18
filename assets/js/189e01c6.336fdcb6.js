"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7216],{2527:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Data Structures/stacks/stacks","title":"Stack","description":"Stacks in C","source":"@site/docs/two/Data Structures/stacks/stacks.mdx","sourceDirName":"Data Structures/stacks","slug":"/Data Structures/stacks/","permalink":"/docs/two/Data Structures/stacks/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Stacks in C"},"sidebar":"tutorialSidebar","previous":{"title":"Tower of Hanoi","permalink":"/docs/two/Data Structures/stacks/hanoiTower"},"next":{"title":"Infix to Postfix Conversion","permalink":"/docs/two/Data Structures/stacks/postfix-convert"}}');var r=e(4848),i=e(8453),o=e(1432);const a='#include <stdio.h>\n\n// FUNCTION PROTOTYPES\nvoid push(int *ptr);\nvoid pop(int *ptr);\nvoid display(int *ptr);\nint peek(int *ptr);\n\n// GLOBAL VARIABLES\nint top = -1;\nint N;\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N];\n\n    // ACCEPTING N ELEMENTS OF STACK\n    for (int i = 0; i < N; i++)\n    {\n        push(ar);\n    }\n\n    display(ar);\n    pop(ar);\n    pop(ar);\n    display(ar);\n    push(ar);\n    display(ar);\n\n    int topmost = peek(ar);\n    printf("\\nTopmost element: %d", topmost);\n    printf("\\n");\n\n    return 0;\n}\n\n// INPUT STACK ELEMENTS\nvoid push(int *ptr)\n{\n    // STACK OVERFLOW\n    if (top == N - 1)\n    {\n        printf("\\nStack Overflow");\n    }\n    else\n    {\n        top++;\n        printf("\\nEnter Element Stack[%d]: ", top + 1);\n        scanf("%d", &*(ptr + top));\n        // *(ptr + top) = x;\n    }\n}\n\n// REMOVE STACK ELEMENT\nvoid pop(int *ptr)\n{\n    // STACK UNDERFLOW\n    if (top == -1)\n    {\n        printf("\\nNo Element to POP");\n    }\n    else\n    {\n        printf("\\nRemoved Element: %d", *(ptr + top));\n        top--;\n    }\n}\n\n// DISPLAY THE STACK\nvoid display(int *ptr)\n{\n    printf("\\nElements in Stack:\\n");\n    for (int i = 0; i <= top; i++)\n    {\n        printf(" %d", *(ptr + i));\n    }\n}\n\n// PEEK: DISPLAY TOPMOST ELEMENT\nint peek(int *ptr)\n{\n    // STACK UNDERFLOW\n    if (top == -1)\n    {\n        printf("\\nNo Element to PEEK");\n    }\n    else\n    {\n        return *(ptr + top);\n    }\n}\n',p={sidebar_position:2,description:"Stacks in C"},c="Stack",l={},d=[{value:"Operations",id:"operations",level:2},{value:"Errors",id:"errors",level:2},{value:"Code",id:"code",level:2}];function h(n){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"stack",children:"Stack"})}),"\n",(0,r.jsx)(t.p,{children:"A stack has only one entry/exit point."}),"\n",(0,r.jsx)(t.p,{children:"LIFO: Last in First Out. It implies that the element that is inserted last, comes out first."}),"\n",(0,r.jsx)(t.p,{children:"Stack is used for managing order of processes"}),"\n",(0,r.jsx)(t.h2,{id:"operations",children:"Operations"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Push"}),": add an element to the stack ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.strong,{children:"Pop"}),": remove an element from the stack",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.strong,{children:"Peek"}),": display the topmost element of the stack"]}),"\n",(0,r.jsx)(t.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Stack overflow"}),": When user tries to add an element to a already full stack."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Stack underflow"}),": When user tries to remove an element from an empty stack."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(o.A,{language:"c",children:a}),"\n",(0,r.jsxs)(t.p,{children:["Find a visual representation of solution of Stack ",(0,r.jsx)(t.a,{href:"https://yongdanielliang.github.io/animation/web/Stack.html",children:"here"})]})]})}function u(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}}}]);