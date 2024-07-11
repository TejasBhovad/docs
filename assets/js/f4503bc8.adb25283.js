"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5577],{8847:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=i(5893),e=i(1151),o=i(9286);const a='#include <stdio.h>\n\n// FUNCTION PROTOTYPES\nvoid push(int *ptr);\nvoid pop(int *ptr);\nvoid display(int *ptr);\nvoid peek(int *ptr);\n\n// GLOBAL VARIABLES\nint top = -1;\nint N;\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N], choice;\n    do\n    {\n        printf("\\nEnter Choice:");\n        printf("\\n1. Push");\n        printf("\\n2. Pop");\n        printf("\\n3. Peek");\n        printf("\\n4. Display");\n        printf("\\n5. Exit\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            push(ar);\n            break;\n        }\n        case 2:\n        {\n            pop(ar);\n            break;\n        }\n        case 3:\n        {\n            peek(ar);\n            break;\n        }\n        case 4:\n        {\n            display(ar);\n            break;\n        }\n        case 5:\n        {\n            printf("\\nExited from Loop");\n            break;\n        }\n        default:\n        {\n            printf("\\nInvalid choice");\n            break;\n        }\n        }\n\n    } while (choice != 5);\n    printf("\\n");\n\n    return 0;\n}\n\n// INPUT STACK ELEMENTS\nvoid push(int *ptr)\n{\n    // STACK OVERFLOW\n    if (top == N - 1)\n    {\n        printf("\\nStack Overflow");\n    }\n    else\n    {\n        top++;\n        printf("\\nEnter Element Stack[%d]: ", top + 1);\n        scanf("%d", &*(ptr + top));\n        // *(ptr + top) = x;\n    }\n}\n\n// REMOVE STACK ELEMENT\nvoid pop(int *ptr)\n{\n    // STACK UNDERFLOW\n    if (top == -1)\n    {\n        printf("\\nNo Element to POP");\n    }\n    else\n    {\n        printf("\\nRemoved Element: %d", *(ptr + top));\n        top--;\n    }\n}\n\n// DISPLAY THE STACK\nvoid display(int *ptr)\n{\n    printf("\\nElements in Stack:\\n");\n    for (int i = 0; i <= top; i++)\n    {\n        printf(" %d", *(ptr + i));\n    }\n}\n\n// PEEK: DISPLAY TOPMOST ELEMENT\nvoid peek(int *ptr)\n{\n    // STACK UNDERFLOW\n    if (top == -1)\n    {\n        printf("\\nNo Element to PEEK");\n    }\n    else\n    {\n        printf("\\nTopmost element: %d", *(ptr + top));\n    }\n}',s={sidebar_position:2,description:"Stacks with operations"},p="Stacks",c={id:"Data Structures/journal/stack",title:"Stacks",description:"Stacks with operations",source:"@site/docs/two/Data Structures/journal/stack.mdx",sourceDirName:"Data Structures/journal",slug:"/Data Structures/journal/stack",permalink:"/docs/two/Data Structures/journal/stack",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Stacks with operations"},sidebar:"tutorialSidebar",previous:{title:"Tower of Hanoi",permalink:"/docs/two/Data Structures/journal/hanoi"},next:{title:"Infix to Postfix",permalink:"/docs/two/Data Structures/journal/infix-postfix"}},d={},u=[];function l(n){const t={h1:"h1",...(0,e.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"stacks",children:"Stacks"}),"\n",(0,r.jsx)(o.Z,{language:"c",children:a})]})}function f(n={}){const{wrapper:t}={...(0,e.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}}}]);