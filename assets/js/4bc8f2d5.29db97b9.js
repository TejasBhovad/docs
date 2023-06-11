"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[569],{9234:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var i=r(7462),a=(r(7294),r(3905)),t=r(814),o=r(235);const d={sidebar_position:7,description:"Binary Search Tree Operations"},s="Binary Search",c={unversionedId:"journal/BinarySearch",id:"journal/BinarySearch",title:"Binary Search",description:"Binary Search Tree Operations",source:"@site/docs/journal/BinarySearch.mdx",sourceDirName:"journal",slug:"/journal/BinarySearch",permalink:"/docs/c/journal/BinarySearch",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Binary Search Tree Operations"},sidebar:"tutorialSidebar",previous:{title:"Binary Search Tree",permalink:"/docs/c/journal/BST"},next:{title:"Hash Tables",permalink:"/docs/c/journal/hash"}},l={},u=[],p={toc:u};function f(n){let{components:e,...r}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-search"},"Binary Search"),(0,a.kt)(t.Z,{language:"c",mdxType:"CodeBlock"},o.Z))}f.isMDXComponent=!0},235:(n,e,r)=>{r.d(e,{Z:()=>i});const i='#include <stdio.h>\nint N, key, ar[100];\nint bSearch()\n{\n    int beg, mid, end;\n    beg = 0;\n    end = N;\n    int flag = 0;\n    mid = (beg + end) / 2;\n    while (end >= mid)\n    {\n\n        if (key == ar[mid])\n        {\n            flag = 1;\n            printf("Index: %d", mid);\n            return 1;\n        }\n        else if (key > ar[mid])\n        {\n            beg = mid + 1;\n            mid = (beg + end) / 2;\n        }\n        else\n        {\n            end = mid-1;\n            mid = (beg + end) / 2;\n        }\n    }\n    return flag;\n}\nint main()\n{\n    printf("\\nEnter Size of Array: \\n");\n    scanf("%d", &N);\n    for (int i = 0; i < N; i++)\n    {\n        printf("Enter Element(%d): ", i);\n        scanf("%d", &ar[i]);\n    }\n    printf("\\nEnter Element to be searched: ");\n    scanf("%d", &key);\n    if (bSearch())\n    {\n        printf("\\nElement found\\n");\n    }\n    else\n    {\n        printf("\\nElement Not found\\n");\n    }\n    return 0;\n}\n'}}]);