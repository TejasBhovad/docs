"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4008],{4126:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var e=t(7462),r=(t(7294),t(3905)),o=t(814);const s={sidebar_position:3,description:"Selection Sort in C"},a="Selection Sort",d={unversionedId:"algorithms/selectionSort",id:"algorithms/selectionSort",title:"Selection Sort",description:"Selection Sort in C",source:"@site/docs/algorithms/selectionSort.mdx",sourceDirName:"algorithms",slug:"/algorithms/selectionSort",permalink:"/docs/algorithms/selectionSort",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Selection Sort in C"},sidebar:"tutorialSidebar",previous:{title:"Bubble Sort",permalink:"/docs/algorithms/bubbleSort"},next:{title:"Insertion Sort",permalink:"/docs/algorithms/insertionSort"}},l={},c=[{value:"CODE",id:"code",level:2}],p={toc:c};function m(n){let{components:i,...t}=n;return(0,r.kt)("wrapper",(0,e.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selection-sort"},"Selection Sort"),(0,r.kt)("h2",{id:"code"},"CODE"),(0,r.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\nint i, j, k, ar[5], N = 5;\nvoid read()\n{\n    printf("\\n");\n    for (i = 0; i < N; i++)\n    {\n        printf("Enter [%d] Element: ", i);\n        scanf("%d", &ar[i]);\n    }\n}\nvoid display()\n{\n    printf("\\n");\n    for (k = 0; k < N; k++)\n    {\n        printf("%d ", ar[k]);\n    }\n}\nvoid sort()\n{\n    int tmp, index;\n    for (i = 0; i < N; i++)\n    {\n        index = i;\n        for (j = i + 1; j < N; j++)\n        {\n\n            if (ar[index] > ar[j])\n            {\n                index = j;\n            }\n        }\n        tmp = ar[i];\n        ar[i] = ar[index];\n        ar[index] = tmp;\n        printf("\\nPass %d: ", i + 1);\n        display();\n    }\n}\nint main()\n{\n    read();\n    printf("\\nOriginal Array:");\n    display();\n    sort();\n    printf("\\nSorted Array:");\n    display();\n    printf("\\n");\n    return 0;\n}'))}m.isMDXComponent=!0}}]);