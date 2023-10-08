"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1895],{7338:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905)),e=t(814);const a={sidebar_position:7,description:"Quick Sort in C"},s="Quick Sort",c={unversionedId:"algorithms/quickSort",id:"algorithms/quickSort",title:"Quick Sort",description:"Quick Sort in C",source:"@site/docs/algorithms/quickSort.mdx",sourceDirName:"algorithms",slug:"/algorithms/quickSort",permalink:"/docs/algorithms/quickSort",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Quick Sort in C"},sidebar:"tutorialSidebar",previous:{title:"Merge Sort",permalink:"/docs/algorithms/mergeSort"},next:{title:"Knapsack problem",permalink:"/docs/algorithms/knapsack"}},d={},l=[{value:"CODE",id:"code",level:2}],p={toc:l};function u(n){let{components:i,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-sort"},"Quick Sort"),(0,o.kt)("h2",{id:"code"},"CODE"),(0,o.kt)(e.Z,{language:"c",mdxType:"CodeBlock"},'// wap to implement quick sort\n#include <stdio.h>\nint ar[100], i, j, k, n, mid;\n\nvoid swap(int i, int j)\n{\n    int temp = ar[i];\n    ar[i] = ar[j];\n    ar[j] = temp;\n}\nint partition(int low, int high)\n{\n    int pivot = ar[low];\n    i = low;\n    j = high;\n    while (i <= j)\n    {\n        while (ar[i] <= pivot && i <= high)\n            i++;\n        while (ar[j] > pivot)\n            j--;\n        if (i < j)\n        {\n            swap(i, j);\n        }\n    }\n    swap(low, j);\n    return j;\n}\nvoid qSort(int low, int high)\n{\n    if (low < high)\n    {\n        mid = partition(low, high);\n        qSort(low, mid - 1);\n        qSort(mid + 1, high);\n    }\n}\nint main()\n{\n    printf("Enter N: ");\n    scanf("%d", &n);\n    printf("Enter Array Elements: \\n");\n    for (i = 0; i < n; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n    qSort(0, n - 1);\n    printf("Sorted Array: \\n");\n    for (i = 0; i < n; i++)\n    {\n        printf("%d ", ar[i]);\n    }\n    printf("\\n");\n    return 0;\n}'))}u.isMDXComponent=!0}}]);