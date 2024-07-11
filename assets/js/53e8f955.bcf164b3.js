"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6794],{3021:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var i=r(5893),t=r(1151),a=r(9286);const s='#include <stdio.h>\nint N, key, ar[100];\nint beg, mid, end;\nint bSearch(int key, int beg, int end)\n{\n    mid = (beg + end) / 2;\n    if (end >= beg)\n    {\n        if (key == ar[mid])\n        {\n            return mid;\n        }\n        else if (key > ar[mid])\n        {\n            return bSearch(key, mid + 1, end);\n        }\n        else\n        {\n            return bSearch(key, beg, mid - 1);\n        }\n    }\n    return -1;\n}\nint main()\n{\n    printf("\\nEnter Size of Array: \\n");\n    scanf("%d", &N);\n    for (int i = 0; i < N; i++)\n    {\n        printf("Enter Element(%d): ", i);\n        scanf("%d", &ar[i]);\n    }\n    printf("\\nEnter Element to be searched: ");\n    scanf("%d", &key);\n    beg = 0;\n    end = N;\n    int result = bSearch(key, beg, end);\n    if (result == -1)\n    {\n        printf("\\nElement not found");\n    }\n    else\n    {\n        printf("\\nElement found at index %d\\n", result);\n    }\n    return 0;\n}',d={sidebar_position:5,description:"Binary Search in C"},o="Binary Search",c={id:"algorithms/binarySearch",title:"Binary Search",description:"Binary Search in C",source:"@site/docs/three/algorithms/binarySearch.mdx",sourceDirName:"algorithms",slug:"/algorithms/binarySearch",permalink:"/docs/three/algorithms/binarySearch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Binary Search in C"},sidebar:"tutorialSidebar",previous:{title:"Insertion Sort",permalink:"/docs/three/algorithms/insertionSort"},next:{title:"Merge Sort",permalink:"/docs/three/algorithms/mergeSort"}},h={},l=[{value:"CODE",id:"code",level:2}];function m(n){const e={h1:"h1",h2:"h2",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"binary-search",children:"Binary Search"}),"\n",(0,i.jsx)(e.h2,{id:"code",children:"CODE"}),"\n",(0,i.jsx)(a.Z,{language:"c",children:s})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}}}]);