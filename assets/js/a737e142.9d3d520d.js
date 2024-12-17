"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7101],{304:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>u,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Data Structures/journal/DFS_BFS","title":"Graphs Traversal","description":"Graphs in C","source":"@site/docs/two/Data Structures/journal/DFS_BFS.mdx","sourceDirName":"Data Structures/journal","slug":"/Data Structures/journal/DFS_BFS","permalink":"/docs/two/Data Structures/journal/DFS_BFS","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"description":"Graphs in C"},"sidebar":"tutorialSidebar","previous":{"title":"Hash Tables","permalink":"/docs/two/Data Structures/journal/hash"}}');var i=e(4848),s=e(8453),a=e(1432),o=e(1658);const u={sidebar_position:9,description:"Graphs in C"},d="Graphs Traversal",p={},c=[];function f(n){const t={h1:"h1",header:"header",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"graphs-traversal",children:"Graphs Traversal"})}),"\n",(0,i.jsx)(a.A,{language:"c",children:o.A})]})}function l(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(f,{...n})}):f(n)}},1658:(n,t,e)=>{e.d(t,{A:()=>r});const r='#include <stdbool.h>\n#include <stdio.h>\n#include <stdlib.h>\n\n#define MAX_NODES 100\n\nint front = -1;\nint rear = -1;\nint top = -1;\n\nint queue[MAX_NODES];\nint stack[MAX_NODES];\n\nvoid enqueue(int node)\n{\n    if (rear == MAX_NODES - 1)\n    {\n        printf("Queue is full\\n");\n        return;\n    }\n    queue[++rear] = node;\n    if (front == -1)\n    {\n        front = 0;\n    }\n}\n\nvoid push(int node)\n{\n    if (top == MAX_NODES - 1)\n    {\n        printf("Stack is full\\n");\n        return;\n    }\n    stack[++top] = node;\n}\n\nint dequeue()\n{\n    if (front == -1 || front > rear)\n    {\n        printf("Queue is empty\\n");\n        return -1;\n    }\n    return queue[front++];\n}\n\nint pop()\n{\n    if (top == -1)\n    {\n        printf("Stack is empty\\n");\n        return -1;\n    }\n    return stack[top--];\n}\n\nvoid bfs(int graph[MAX_NODES][MAX_NODES], int n)\n{\n    bool visited[MAX_NODES] = {false};\n    enqueue(0);\n    visited[0] = true;\n    while (front <= rear)\n    {\n        int node = dequeue();\n        printf("%d ", node);\n        for (int i = 0; i < n; i++)\n        {\n            if (graph[node][i] == 1 && !visited[i])\n            {\n                visited[i] = true;\n                enqueue(i);\n            }\n        }\n    }\n    printf("\\n");\n}\n\nvoid dfs(int graph[MAX_NODES][MAX_NODES], int n)\n{\n    bool visited[MAX_NODES] = {false};\n    push(0);\n    visited[0] = true;\n    while (top != -1)\n    {\n        int node = pop();\n        printf("%d ", node);\n        for (int i = 0; i < n; i++)\n        {\n            if (graph[node][i] == 1 && !visited[i])\n            {\n                visited[i] = true;\n                push(i);\n            }\n        }\n    }\n    printf("\\n");\n}\n\nint main()\n{\n    int graph[MAX_NODES][MAX_NODES] = {{0, 1, 1, 0, 0, 0, 0, 0},\n                                       {1, 0, 0, 1, 1, 1, 0, 0},\n                                       {1, 0, 0, 0, 0, 1, 1, 1},\n                                       {0, 1, 0, 0, 0, 0, 0, 0},\n                                       {0, 1, 0, 0, 0, 0, 0, 0},\n                                       {0, 1, 1, 0, 0, 0, 0, 0},\n                                       {0, 0, 1, 0, 0, 0, 0, 0},\n                                       {0, 0, 1, 0, 0, 0, 0, 0}};\n    int n = 8;\n    printf("BFS: ");\n    bfs(graph, n);\n    printf("DFS: ");\n    dfs(graph, n);\n    return 0;\n}\n'}}]);