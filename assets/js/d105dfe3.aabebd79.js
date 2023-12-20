"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[2727],{3960:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(5893),e=t(1151),o=t(9286);const s='#include <stdio.h>\nint i, j, k, ar[5], N = 5;\nvoid read()\n{\n    printf("\\n");\n    for (i = 0; i < N; i++)\n    {\n        printf("Enter [%d] Element: ", i);\n        scanf("%d", &ar[i]);\n    }\n}\nvoid display()\n{\n    printf("\\n");\n    for (k = 0; k < N; k++)\n    {\n        printf("%d ", ar[k]);\n    }\n}\nvoid sort()\n{\n    int tmp, index;\n    for (i = 0; i < N; i++)\n    {\n        index = i;\n        for (j = i + 1; j < N; j++)\n        {\n\n            if (ar[index] > ar[j])\n            {\n                index = j;\n            }\n        }\n        tmp = ar[i];\n        ar[i] = ar[index];\n        ar[index] = tmp;\n        printf("\\nPass %d: ", i + 1);\n        display();\n    }\n}\nint main()\n{\n    read();\n    printf("\\nOriginal Array:");\n    display();\n    sort();\n    printf("\\nSorted Array:");\n    display();\n    printf("\\n");\n    return 0;\n}',a={sidebar_position:3,description:"Selection Sort in C"},d="Selection Sort",l={id:"algorithms/selectionSort",title:"Selection Sort",description:"Selection Sort in C",source:"@site/docs/three/algorithms/selectionSort.mdx",sourceDirName:"algorithms",slug:"/algorithms/selectionSort",permalink:"/docs/three/algorithms/selectionSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Selection Sort in C"},sidebar:"tutorialSidebar",previous:{title:"Bubble Sort",permalink:"/docs/three/algorithms/bubbleSort"},next:{title:"Insertion Sort",permalink:"/docs/three/algorithms/insertionSort"}},c={},p=[{value:"CODE",id:"code",level:2}];function h(n){const i={h1:"h1",h2:"h2",...(0,e.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"selection-sort",children:"Selection Sort"}),"\n",(0,r.jsx)(i.h2,{id:"code",children:"CODE"}),"\n",(0,r.jsx)(o.Z,{language:"c",children:s})]})}function f(n={}){const{wrapper:i}={...(0,e.a)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}}}]);