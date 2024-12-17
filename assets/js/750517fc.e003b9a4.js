"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[9415],{181:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Data Structures/queues/circular-queues","title":"Circular Queues","description":"Circular Queues Operations Program","source":"@site/docs/two/Data Structures/queues/circular-queues.mdx","sourceDirName":"Data Structures/queues","slug":"/Data Structures/queues/circular-queues","permalink":"/docs/two/Data Structures/queues/circular-queues","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Circular Queues Operations Program"},"sidebar":"tutorialSidebar","previous":{"title":"Linear Queues","permalink":"/docs/two/Data Structures/queues/linear-queues"},"next":{"title":"LinkedList","permalink":"/docs/two/category/linkedlist"}}');var i=r(4848),s=r(8453),u=r(1432),o=r(4584);const a={sidebar_position:2,description:"Circular Queues Operations Program"},c="Circular Queues",l={},d=[{value:"Operations",id:"operations",level:3},{value:"Errors",id:"errors",level:3},{value:"Code",id:"code",level:2}];function f(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"circular-queues",children:"Circular Queues"})}),"\n",(0,i.jsx)(e.h3,{id:"operations",children:"Operations"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Enqueue"}),": Adding elements to the queue"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Dequeue"}),": Removing elements from the queue"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"errors",children:"Errors"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Overflow"}),": When the queue is full but user tries to enqueue an element."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"// condition:\n(front == 0 && rear == N - 1) || (rear == front - 1)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Underflow"}),": When the queue is empty but user tried to denqueue an element."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"// condition:\n(front == -1 && rear == -1)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,i.jsx)(u.A,{language:"c",children:o.A})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(f,{...n})}):f(n)}},4584:(n,e,r)=>{r.d(e,{A:()=>t});const t='#include <stdio.h>\n\n// GLOBAL VARIABLES\nint front = -1, rear = -1;\nint N;\n\n// FUNCTION PROTOTYPE\nvoid enqueue(int *ptr, int x);\nvoid dequeue(int *ptr);\nvoid display(int *ptr);\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N], choice;\n    do\n    {\n        printf("\\nEnter Choice:");\n        printf("\\n1. Queue");\n        printf("\\n2. Dequeue");\n        printf("\\n3. Display");\n        printf("\\n4. Exit\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            int x;\n            printf("\\nEnter Element to Queue: ");\n            scanf("%d", &x);\n            enqueue(ar, x);\n            break;\n        }\n        case 2:\n        {\n            dequeue(ar);\n            break;\n        }\n        case 3:\n        {\n            display(ar);\n            break;\n        }\n        case 4:\n        {\n            printf(" ");\n            break;\n        }\n\n        default:\n        {\n            printf("\\nInvalid choice");\n            break;\n        }\n        }\n    } while (choice != 4);\n    printf("\\n");\n    return 0;\n}\n\n// ENQUEUE FUNCTION\nvoid enqueue(int *ptr, int x)\n{\n    if ((front == 0 && rear == N - 1) || (rear == front - 1))\n    {\n        printf("\\nOverflow Error");\n    }\n    else\n    {\n        if (rear == -1 && front == -1)\n        {\n            front = 0;\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else if (rear == N - 1 && front != 0)\n        {\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else\n        {\n            rear++;\n            *(ptr + rear) = x;\n        }\n    }\n}\n\n// DEQUEUE FUNCTION\nvoid dequeue(int *ptr)\n{\n    if (front == -1 && rear == -1)\n    {\n        printf("\\nUnderflow Error");\n    }\n    else\n    {\n        if (front == rear)\n        {\n            printf("\\n%d is Dequeued", *(ptr + front));\n            front = -1;\n            rear = -1;\n        }\n        else\n        {\n            if (front == N - 1)\n            {\n                printf("\\n%d is Dequeued", *(ptr + front));\n                front = 0;\n            }\n\n            else\n            {\n                printf("\\n%d is Dequeued", *(ptr + front));\n                front = front + 1;\n            }\n        }\n    }\n}\n\n// DISPLAY FUNCTION\nvoid display(int *ptr)\n{\n    printf("\\nElements in Queue: \\n");\n    if (front == -1 && rear == -1)\n    {\n        printf("Queue is empty");\n        return;\n    }\n    printf("Queue elements : ");\n    if (front <= rear)\n    {\n        for (int i = front; i <= rear; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n    }\n    else\n    {\n        for (int i = front; i < N; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n        for (int i = 0; i <= rear; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n    }\n}'}}]);