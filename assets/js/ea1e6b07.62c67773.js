"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7220],{5622:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>m,contentTitle:()=>h,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=e(5893),t=e(1151),o=e(9286);const s='// wap to implement merge sort\n#include <stdio.h>\nint ar[100], i, j, k, n;\nvoid merge(int low, int mid, int high)\n{\n    int temp[100];\n    i = low;\n    j = mid + 1;\n    k = low;\n    while (i <= mid && j <= high)\n    {\n        if (ar[i] <= ar[j])\n        {\n            temp[k] = ar[i];\n            i++;\n            k++;\n        }\n        else\n        {\n            temp[k] = ar[j];\n            j++;\n            k++;\n        }\n    }\n    while (i <= mid)\n    {\n        temp[k] = ar[i];\n        i++;\n        k++;\n    }\n    while (j <= high)\n    {\n        temp[k] = ar[j];\n        j++;\n        k++;\n    }\n    for (i = low; i <= high; i++)\n    {\n        ar[i] = temp[i];\n    }\n}\n\nvoid mergeSort(int low, int high)\n{\n    int mid;\n    if (low < high)\n    {\n        mid = (low + high) / 2;\n        mergeSort(low, mid);\n        mergeSort(mid + 1, high);\n        merge(low, mid, high);\n    }\n}\n\nint main()\n{\n    printf("Enter N: ");\n    scanf("%d", &n);\n    printf("Enter Array Elements: \\n");\n    for (i = 0; i < n; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n    mergeSort(0, n - 1);\n    printf("Sorted Array: \\n");\n    for (i = 0; i < n; i++)\n    {\n        printf("%d ", ar[i]);\n    }\n    printf("\\n");\n    return 0;\n}',a={sidebar_position:6,description:"Merge Sort in C"},h="Merge Sort",d={id:"algorithms/mergeSort",title:"Merge Sort",description:"Merge Sort in C",source:"@site/docs/three/algorithms/mergeSort.mdx",sourceDirName:"algorithms",slug:"/algorithms/mergeSort",permalink:"/docs/three/algorithms/mergeSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Merge Sort in C"},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/docs/three/algorithms/binarySearch"},next:{title:"Quick Sort",permalink:"/docs/three/algorithms/quickSort"}},m={},l=[{value:"CODE",id:"code",level:2}];function c(n){const i={h1:"h1",h2:"h2",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"merge-sort",children:"Merge Sort"}),"\n",(0,r.jsx)(i.h2,{id:"code",children:"CODE"}),"\n",(0,r.jsx)(o.Z,{language:"c",children:s})]})}function g(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}}}]);