"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7607],{9880:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>e,toc:()=>l});const e=JSON.parse('{"id":"algorithms/dijkstras","title":"Dijkstras Alogrithm","description":"Dijkstras shortest path in C","source":"@site/docs/three/algorithms/dijkstras.mdx","sourceDirName":"algorithms","slug":"/algorithms/dijkstras","permalink":"/docs/three/algorithms/dijkstras","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"description":"Dijkstras shortest path in C"},"sidebar":"tutorialSidebar","previous":{"title":"Knapsack problem","permalink":"/docs/three/algorithms/knapsack"},"next":{"title":"Huffman Coding","permalink":"/docs/three/algorithms/huffman"}}');var s=t(4848),r=t(8453),a=t(1432);const d='// WAP a program to implement Dijkstra\'s algorithm in c\n#include <stdio.h>\n\n#define INFINITY 9999\n#define MAX 10\n\nvoid dijkstra(int G[MAX][MAX], int n, int startNode);\n\nint main()\n{\n    int G[MAX][MAX], i, j, n, u;\n    printf("Enter the no. of vertices: ");\n    scanf("%d", &n);\n    printf("\\nEnter the adjacency matrix:\\n");\n    for (i = 0; i < n; i++)\n        for (j = 0; j < n; j++)\n            scanf("%d", &G[i][j]);\n    printf("\\nEnter the starting node: ");\n    scanf("%d", &u);\n    dijkstra(G, n, u);\n    return 0;\n}\n\nvoid dijkstra(int G[MAX][MAX], int n, int startNode)\n{\n    int cost[MAX][MAX], distance[MAX], pred[MAX];\n    int visited[MAX], count, minDistance, nextNode, i, j;\n    // Creating cost matrix\n    for (i = 0; i < n; i++)\n        for (j = 0; j < n; j++)\n            if (G[i][j] == 0)\n                cost[i][j] = INFINITY;\n            else\n                cost[i][j] = G[i][j];\n    // Initializing pred[], distance[] and visited[]\n    for (i = 0; i < n; i++)\n    {\n        distance[i] = cost[startNode][i];\n        pred[i] = startNode;\n        visited[i] = 0;\n    }\n    distance[startNode] = 0;\n    visited[startNode] = 1;\n    count = 1;\n    // Finding the shortest path\n    while (count < n - 1)\n    {\n        minDistance = INFINITY;\n        // Next node gives the node at minimum distance\n        for (i = 0; i < n; i++)\n            if (distance[i] < minDistance && !visited[i])\n            {\n                minDistance = distance[i];\n                nextNode = i;\n            }\n        visited[nextNode] = 1;\n        // Updating the distance[] array with minimum distance of the node\n        for (i = 0; i < n; i++)\n            if (!visited[i])\n                if (minDistance + cost[nextNode][i] < distance[i])\n                {\n                    distance[i] = minDistance + cost[nextNode][i];\n                    pred[i] = nextNode;\n                }\n        count++;\n    }\n    for (i = 0; i < n; i++)\n        if (i != startNode)\n        {\n            printf("\\nDistance of node %d = %d", i, distance[i]);\n            printf("\\nPath = %d", i);\n            j = i;\n            do\n            {\n                j = pred[j];\n                printf(" <-%d", j);\n            } while (j != startNode);\n        }\n}\n',o={sidebar_position:9,description:"Dijkstras shortest path in C"},c="Dijkstras Alogrithm",h={},l=[{value:"CODE",id:"code",level:2}];function m(n){const i={h1:"h1",h2:"h2",header:"header",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"dijkstras-alogrithm",children:"Dijkstras Alogrithm"})}),"\n",(0,s.jsx)(i.h2,{id:"code",children:"CODE"}),"\n",(0,s.jsx)(a.A,{language:"c",children:d})]})}function f(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}}}]);