"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[1226],{2735:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Data Structures/journal/hash","title":"Hash Tables","description":"Hash Tables","source":"@site/docs/two/Data Structures/journal/hash.mdx","sourceDirName":"Data Structures/journal","slug":"/Data Structures/journal/hash","permalink":"/docs/two/Data Structures/journal/hash","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"Hash Tables"},"sidebar":"tutorialSidebar","previous":{"title":"Binary Search","permalink":"/docs/two/Data Structures/journal/BinarySearch"},"next":{"title":"Graphs Traversal","permalink":"/docs/two/Data Structures/journal/DFS_BFS"}}');var r=t(4848),i=t(8453),s=t(1432),c=t(3107);const l={sidebar_position:7,description:"Hash Tables"},o="Hash Tables",d={},h=[];function u(n){const e={h1:"h1",header:"header",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"hash-tables",children:"Hash Tables"})}),"\n",(0,r.jsx)(s.A,{language:"c",children:c.A})]})}function f(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},3107:(n,e,t)=>{t.d(e,{A:()=>a});const a='#include <stdio.h>\nint main()\n{\n    int N;\n    printf("\\nEnter Value of N:");\n    scanf("%d", &N);\n    int ar[N];\n    for (int i = 0; i < N; i++)\n    {\n        ar[i] = 0;\n    }\n\n    int index, ch;\n\n    do\n    {\n        printf("\\nEnter choice:");\n        printf("\\n1. Insert:");\n        printf("\\n2. Display:");\n        printf("\\n3. Search:");\n        printf("\\n4. Exit:\\n");\n        scanf("%d", &ch);\n        switch (ch)\n        {\n        case 1:\n        {\n            int key, flag = 0;\n            printf("\\nEnter the Key Element:");\n            scanf("%d", &key);\n            int h_key = key % N;\n            for (int i = 0; i < N; i++)\n            {\n                index = (h_key + i) % N;\n                if (ar[index] == 0)\n                {\n                    ar[index] = key;\n                    flag = 1;\n                    break;\n                }\n            }\n            if (flag == 0)\n            {\n                printf("\\nHash Table is Full");\n            }\n\n            break;\n        }\n        case 2:\n        {\n            for (int i = 0; i < N; i++)\n            {\n                printf("\\n%d ", ar[i]);\n            }\n            break;\n        }\n        case 3:\n        {\n            int key, flag = 0;\n            printf("\\nEnter the Key Element:");\n            scanf("%d", &key);\n            int h_key = key % N;\n            for (int i = 0; i < N; i++)\n            {\n                index = (h_key + i) % N;\n                if (ar[index] == key)\n                {\n                    printf("\\nElement %d found at index %d", key, index);\n                    flag = 1;\n                    break;\n                }\n            }\n            if (flag == 0)\n            {\n                printf("\\nHash Table is Full");\n            }\n            break;\n        }\n        default:\n            break;\n        }\n    } while (ch != 4);\n\n    return 0;\n}\n'}}]);