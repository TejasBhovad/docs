"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2170],{3899:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>e,toc:()=>h});var s=t(7462),r=(t(7294),t(3905)),l=t(814);const o={sidebar_position:13,description:"Warshall Algo in C"},a="Floyd Warshall Algorithm",e={unversionedId:"algorithms/warshall",id:"algorithms/warshall",title:"Floyd Warshall Algorithm",description:"Warshall Algo in C",source:"@site/docs/algorithms/warshall.mdx",sourceDirName:"algorithms",slug:"/algorithms/warshall",permalink:"/docs/algorithms/warshall",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"Warshall Algo in C"},sidebar:"tutorialSidebar",previous:{title:"Longest Common Subsequence",permalink:"/docs/algorithms/lcs"},next:{title:"8 Queens in C",permalink:"/docs/algorithms/8queens"}},d={},h=[{value:"CODE",id:"code",level:2}],c={toc:h};function m(n){let{components:i,...t}=n;return(0,r.kt)("wrapper",(0,s.Z)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"floyd-warshall-algorithm"},"Floyd Warshall Algorithm"),(0,r.kt)("h2",{id:"code"},"CODE"),(0,r.kt)(l.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\n#include <limits.h>\n\n#define V 4\n\nvoid floydWarshall(int graph[V][V])\n{\n    int dist[V][V];\n\n    for (int i = 0; i < V; i++)\n    {\n        for (int j = 0; j < V; j++)\n        {\n            dist[i][j] = graph[i][j];\n        }\n    }\n\n    for (int k = 0; k < V; k++)\n    {\n        for (int i = 0; i < V; i++)\n        {\n            for (int j = 0; j < V; j++)\n            {\n                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX &&\n                    dist[i][j] > dist[i][k] + dist[k][j])\n                {\n                    dist[i][j] = dist[i][k] + dist[k][j];\n                }\n            }\n        }\n    }\n\n    for (int i = 0; i < V; i++)\n    {\n        for (int j = 0; j < V; j++)\n        {\n            if (dist[i][j] == INT_MAX)\n            {\n                printf("INF ");\n            }\n            else\n            {\n                printf("%d ", dist[i][j]);\n            }\n        }\n        printf("\\n");\n    }\n}\n\nint main()\n{\n    int graph[V][V] = {\n        {0, 3, INT_MAX, 5},\n        {2, 0, INT_MAX, 4},\n        {INT_MAX, 1, 0, INT_MAX},\n        {INT_MAX, INT_MAX, 2, 0}};\n\n    floydWarshall(graph);\n\n    return 0;\n}\n'))}m.isMDXComponent=!0}}]);