"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5863],{1522:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=i(7462),t=(i(7294),i(3905)),a=i(814);const o={sidebar_position:1,description:"Linear Search in C"},s="Linear Search",d={unversionedId:"algorithms/linearSearch",id:"algorithms/linearSearch",title:"Linear Search",description:"Linear Search in C",source:"@site/docs/algorithms/linearSearch.mdx",sourceDirName:"algorithms",slug:"/algorithms/linearSearch",permalink:"/docs/algorithms/linearSearch",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Linear Search in C"},sidebar:"tutorialSidebar",previous:{title:"Algorithms",permalink:"/docs/category/algorithms"},next:{title:"Bubble Sort",permalink:"/docs/algorithms/bubbleSort"}},c={},l=[{value:"CODE",id:"code",level:2}],h={toc:l};function m(n){let{components:e,...i}=n;return(0,t.kt)("wrapper",(0,r.Z)({},h,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"linear-search"},"Linear Search"),(0,t.kt)("h2",{id:"code"},"CODE"),(0,t.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\n#define N 10\nint i, ar[N];\nvoid read()\n{\n    printf("\\n");\n    for (i = 0; i < N; i++)\n    {\n        printf("Enter %d Element: ", i);\n        scanf("%d", &ar[i]);\n    }\n}\nint find(int key)\n{\n    for (i = 0; i < N; i++)\n    {\n        if (ar[i] == key)\n        {\n            return i;\n        }\n    }\n    return -1;\n}\nint main()\n{\n    int key, index;\n    read();\n    printf("\\nEnter Key Element: ");\n    scanf("%d", &key);\n    index = find(key);\n    if (index == -1)\n    {\n        printf("\\nKey Element not Found");\n    }\n    else\n    {\n        printf("\\nKey Element found at %d", index);\n    }\n    printf("\\n");\n    return 0;\n}'))}m.isMDXComponent=!0}}]);