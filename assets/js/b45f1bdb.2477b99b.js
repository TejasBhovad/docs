"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6838],{9087:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=t(5893),o=t(1151),e=t(9286);const s='// wap to implement quick sort\n#include <stdio.h>\nint ar[100], i, j, k, n, mid;\n\nvoid swap(int i, int j)\n{\n    int temp = ar[i];\n    ar[i] = ar[j];\n    ar[j] = temp;\n}\nint partition(int low, int high)\n{\n    int pivot = ar[low];\n    i = low;\n    j = high;\n    while (i <= j)\n    {\n        while (ar[i] <= pivot && i <= high)\n            i++;\n        while (ar[j] > pivot)\n            j--;\n        if (i < j)\n        {\n            swap(i, j);\n        }\n    }\n    swap(low, j);\n    return j;\n}\nvoid qSort(int low, int high)\n{\n    if (low < high)\n    {\n        mid = partition(low, high);\n        qSort(low, mid - 1);\n        qSort(mid + 1, high);\n    }\n}\nint main()\n{\n    printf("Enter N: ");\n    scanf("%d", &n);\n    printf("Enter Array Elements: \\n");\n    for (i = 0; i < n; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n    qSort(0, n - 1);\n    printf("Sorted Array: \\n");\n    for (i = 0; i < n; i++)\n    {\n        printf("%d ", ar[i]);\n    }\n    printf("\\n");\n    return 0;\n}',a={sidebar_position:7,description:"Quick Sort in C"},c="Quick Sort",l={id:"algorithms/quickSort",title:"Quick Sort",description:"Quick Sort in C",source:"@site/docs/three/algorithms/quickSort.mdx",sourceDirName:"algorithms",slug:"/algorithms/quickSort",permalink:"/docs/three/algorithms/quickSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Quick Sort in C"},sidebar:"tutorialSidebar",previous:{title:"Merge Sort",permalink:"/docs/three/algorithms/mergeSort"},next:{title:"Knapsack problem",permalink:"/docs/three/algorithms/knapsack"}},d={},h=[{value:"CODE",id:"code",level:2}];function p(n){const i={h1:"h1",h2:"h2",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"quick-sort",children:"Quick Sort"}),"\n",(0,r.jsx)(i.h2,{id:"code",children:"CODE"}),"\n",(0,r.jsx)(e.Z,{language:"c",children:s})]})}function u(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}}}]);