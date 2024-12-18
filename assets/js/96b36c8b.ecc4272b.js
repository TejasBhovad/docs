"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6104],{8279:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>S,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"Data Structures/BinarySearch/recursion","title":"Binary Search [ RECURSION ]","description":"Binary Search [ RECURSION ]","source":"@site/docs/two/Data Structures/BinarySearch/recursion.mdx","sourceDirName":"Data Structures/BinarySearch","slug":"/Data Structures/BinarySearch/recursion","permalink":"/docs/two/Data Structures/BinarySearch/recursion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Binary Search [ RECURSION ]"},"sidebar":"tutorialSidebar","previous":{"title":"Binary Search [ WHILE ]","permalink":"/docs/two/Data Structures/BinarySearch/BS"},"next":{"title":"Hash Tables","permalink":"/docs/two/category/hash-tables"}}');var a=r(4848),i=r(8453),s=r(1432);const c='#include <stdio.h>\nint N, key, ar[100];\nint flag = 0;\nint beg, mid, end;\nint bSearch()\n{\n\n    mid = (beg + end) / 2;\n    if (end >= mid)\n    {\n        if (key == ar[mid])\n        {\n            flag = 1;\n            printf("Index: %d", mid);\n            return 1;\n        }\n        else if (key > ar[mid])\n        {\n            beg = mid + 1;\n            bSearch();\n        }\n        else\n        {\n            end = mid-1;\n            bSearch();\n        }\n    }\n    return flag;\n}\nint main()\n{\n    printf("\\nEnter Size of Array: \\n");\n    scanf("%d", &N);\n    for (int i = 0; i < N; i++)\n    {\n        printf("Enter Element(%d): ", i);\n        scanf("%d", &ar[i]);\n    }\n    printf("\\nEnter Element to be searched: ");\n    scanf("%d", &key);\n    beg = 0;\n    end = N;\n    if (bSearch())\n    {\n        printf("\\nElement found\\n");\n    }\n    else\n    {\n        printf("\\nElement Not found\\n");\n    }\n    return 0;\n}\n',d={sidebar_position:1,description:"Binary Search [ RECURSION ]"},o="Binary Search [ RECURSION ]",u={},h=[];function l(n){const e={h1:"h1",header:"header",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"binary-search--recursion-",children:"Binary Search [ RECURSION ]"})}),"\n",(0,a.jsx)(s.A,{language:"c",children:c})]})}function S(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}}}]);