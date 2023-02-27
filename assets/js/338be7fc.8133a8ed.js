"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[132],{117:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=r(7462),i=(r(7294),r(3905)),a=r(814),u=r(7738);const s={sidebar_position:1,description:"Linear Queues Operations Program"},o="Linear Queues",l={unversionedId:"queues/linear-queues",id:"queues/linear-queues",title:"Linear Queues",description:"Linear Queues Operations Program",source:"@site/docs/queues/linear-queues.mdx",sourceDirName:"queues",slug:"/queues/linear-queues",permalink:"/docs/queues/linear-queues",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Linear Queues Operations Program"},sidebar:"tutorialSidebar",previous:{title:"Queues",permalink:"/docs/category/queues"},next:{title:"Circular Queues",permalink:"/docs/queues/circular-queues"}},d={},p=[{value:"Operations",id:"operations",level:3},{value:"Errors",id:"errors",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Code",id:"code",level:2}],c={toc:p};function f(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linear-queues"},"Linear Queues"),(0,i.kt)("p",null,"Elements in queues are added from one end and deleted from other.",(0,i.kt)("br",null),(0,i.kt)("br",null),"\nThe end from which elements are added is called ",(0,i.kt)("strong",{parentName:"p"},"rear end"),", and the end from where elements are deleted is called ",(0,i.kt)("strong",{parentName:"p"},"front end"),".\nTherefore Queues are ",(0,i.kt)("strong",{parentName:"p"},"First in First Out")),(0,i.kt)("h3",{id:"operations"},"Operations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Enqueue"),": Adding elements to the queue"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Dequeue"),": Removing elements from the queue")),(0,i.kt)("h3",{id:"errors"},"Errors"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Overflow"),": When the queue is full but user tries to enqueue an element.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// condition:\nrear == N - 1\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Underflow"),": When the queue is empty but user tried to denqueue an element.")),(0,i.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,i.kt)("p",null,"When elements are popped the size of queue decreases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// condition:\n(front > rear) OR (front == -1 && rear == -1)\n")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},u.Z))}f.isMDXComponent=!0},7738:(e,n,r)=>{r.d(n,{Z:()=>t});const t='#include <stdio.h>\n\n// GLOBAL VARIABLES\nint front = -1, rear = -1;\nint N;\n\n// FUNCTION PROTOTYPE\nvoid enqueue(int *ptr, int x);\nvoid dequeue(int *ptr);\nvoid display(int *ptr);\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N], choice;\n    do\n    {\n        printf("\\nEnter Choice:");\n        printf("\\n1. Queue");\n        printf("\\n2. Dequeue");\n        printf("\\n3. Display");\n        printf("\\n4. Exit\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            int x;\n            printf("\\nEnter Element to Queue: ");\n            scanf("%d", &x);\n            enqueue(ar, x);\n            break;\n        }\n        case 2:\n        {\n            dequeue(ar);\n            break;\n        }\n        case 3:\n        {\n            display(ar);\n            break;\n        }\n        case 4:\n        {\n            printf(" ");\n            break;\n        }\n\n        default:\n        {\n            printf("\\nInvalid choice");\n            break;\n        }\n        }\n    } while (choice != 4);\n    printf("\\n");\n    return 0;\n}\n\n// ENQUEUE FUNCTION\nvoid enqueue(int *ptr, int x)\n{\n    if (rear == N - 1)\n    {\n        printf("\\nOverflow Error");\n    }\n    else\n    {\n        if (rear == -1 && front == -1)\n        {\n            front = 0;\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else\n        {\n            rear++;\n            *(ptr + rear) = x;\n        }\n    }\n}\n\n// DEQUEUE FUNCTION\nvoid dequeue(int *ptr)\n{\n    if (front > rear || front == -1 && rear == -1)\n    {\n        printf("\\nUnderflow Error");\n    }\n    else\n    {\n        printf("\\n%d is Dequeued", *(ptr + front));\n        front++;\n    }\n}\n\n// DISPLAY FUNCTION\nvoid display(int *ptr)\n{\n    printf("\\nElements in Queue: \\n");\n    for (int i = front; i <= rear; i++)\n    {\n        printf(" %d", *(ptr + i));\n    }\n}'}}]);