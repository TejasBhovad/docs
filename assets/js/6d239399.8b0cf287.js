"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[342],{3028:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=r(7462),t=(r(7294),r(3905)),a=r(814),u=r(7738);const o={sidebar_position:5,description:"Linear Queues Operations"},s="Linear Queues",p={unversionedId:"journal/linear-queues",id:"journal/linear-queues",title:"Linear Queues",description:"Linear Queues Operations",source:"@site/docs/journal/linear-queues.mdx",sourceDirName:"journal",slug:"/journal/linear-queues",permalink:"/docs/journal/linear-queues",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Linear Queues Operations"},sidebar:"tutorialSidebar",previous:{title:"Postfix Evaluation",permalink:"/docs/journal/postfix-evaluate"},next:{title:"Circular Queues",permalink:"/docs/journal/circular-queues"}},d={},c=[],l={toc:c};function f(n){let{components:e,...r}=n;return(0,t.kt)("wrapper",(0,i.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"linear-queues"},"Linear Queues"),(0,t.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},u.Z))}f.isMDXComponent=!0},7738:(n,e,r)=>{r.d(e,{Z:()=>i});const i='#include <stdio.h>\n\n// GLOBAL VARIABLES\nint front = -1, rear = -1;\nint N;\n\n// FUNCTION PROTOTYPE\nvoid enqueue(int *ptr, int x);\nvoid dequeue(int *ptr);\nvoid display(int *ptr);\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N], choice;\n    do\n    {\n        printf("\\nEnter Choice:");\n        printf("\\n1. Queue");\n        printf("\\n2. Dequeue");\n        printf("\\n3. Display");\n        printf("\\n4. Exit\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            int x;\n            printf("\\nEnter Element to Queue: ");\n            scanf("%d", &x);\n            enqueue(ar, x);\n            break;\n        }\n        case 2:\n        {\n            dequeue(ar);\n            break;\n        }\n        case 3:\n        {\n            display(ar);\n            break;\n        }\n        case 4:\n        {\n            printf(" ");\n            break;\n        }\n\n        default:\n        {\n            printf("\\nInvalid choice");\n            break;\n        }\n        }\n    } while (choice != 4);\n    printf("\\n");\n    return 0;\n}\n\n// ENQUEUE FUNCTION\nvoid enqueue(int *ptr, int x)\n{\n    if (rear == N - 1)\n    {\n        printf("\\nOverflow Error");\n    }\n    else\n    {\n        if (rear == -1 && front == -1)\n        {\n            front = 0;\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else\n        {\n            rear++;\n            *(ptr + rear) = x;\n        }\n    }\n}\n\n// DEQUEUE FUNCTION\nvoid dequeue(int *ptr)\n{\n    if (front > rear || front == -1 && rear == -1)\n    {\n        printf("\\nUnderflow Error");\n    }\n    else\n    {\n        printf("\\n%d is Dequeued", *(ptr + front));\n        front++;\n    }\n}\n\n// DISPLAY FUNCTION\nvoid display(int *ptr)\n{\n    printf("\\nElements in Queue: \\n");\n    for (int i = front; i <= rear; i++)\n    {\n        printf(" %d", *(ptr + i));\n    }\n}'}}]);