"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3144],{2142:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>f,toc:()=>m});var t=i(5893),o=i(1151),r=i(9286);const d="#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct NODE\n{\n    char data;\n    int freq;\n    struct NODE *left;\n    struct NODE *right;\n};\n\ntypedef struct NODE NODE;\n\nNODE *createNode(char data, int freq)\n{\n    NODE *node = (NODE *)malloc(sizeof(NODE));\n    node->data = data;\n    node->freq = freq;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\n\nNODE *buildHuffmanTree(char data[], int freq[], int n)\n{\n    NODE *nodes[n];\n    for (int i = 0; i < n; i++)\n    {\n        nodes[i] = createNode(data[i], freq[i]);\n    }\n\n    while (n > 1)\n    {\n        int min1 = 0, min2 = 1;\n        if (nodes[min1]->freq > nodes[min2]->freq)\n        {\n            int temp = min1;\n            min1 = min2;\n            min2 = temp;\n        }\n\n        for (int i = 2; i < n; i++)\n        {\n            if (nodes[i]->freq < nodes[min1]->freq)\n            {\n                min2 = min1;\n                min1 = i;\n            }\n            else if (nodes[i]->freq < nodes[min2]->freq)\n            {\n                min2 = i;\n            }\n        }\n\n        NODE *newNode = createNode('\\0', nodes[min1]->freq + nodes[min2]->freq);\n        newNode->left = nodes[min1];\n        newNode->right = nodes[min2];\n\n        nodes[min1] = newNode;\n        nodes[min2] = nodes[n - 1];\n        n--;\n    }\n\n    return nodes[0];\n}\n\nvoid printHuffmanCodes(NODE *root, char code[], int top)\n{\n    if (root->left)\n    {\n        code[top] = '0';\n        printHuffmanCodes(root->left, code, top + 1);\n    }\n\n    if (root->right)\n    {\n        code[top] = '1';\n        printHuffmanCodes(root->right, code, top + 1);\n    }\n\n    if (!root->left && !root->right)\n    {\n        code[top] = '\\0';\n        printf(\"%c: %s\\n\", root->data, code);\n    }\n}\n\nint main()\n{\n    char data[] = {'a', 'b', 'c', 'd'};\n    int freq[] = {5, 1, 6, 3};\n    int n = sizeof(data) / sizeof(data[0]);\n\n    NODE *root = buildHuffmanTree(data, freq, n);\n\n    char code[n];\n    printf(\"Huffman Codes:\\n\");\n    printHuffmanCodes(root, code, 0);\n\n    return 0;\n}\n",a={sidebar_position:10,description:"Huffman Coding in C"},s="Huffman Coding",f={id:"algorithms/huffman",title:"Huffman Coding",description:"Huffman Coding in C",source:"@site/docs/three/algorithms/huffman.mdx",sourceDirName:"algorithms",slug:"/algorithms/huffman",permalink:"/docs/three/algorithms/huffman",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Huffman Coding in C"},sidebar:"tutorialSidebar",previous:{title:"Dijkstras Alogrithm",permalink:"/docs/three/algorithms/dijkstras"},next:{title:"Bellman Ford",permalink:"/docs/three/algorithms/bellmanFord"}},c={},m=[{value:"CODE",id:"code",level:2}];function l(n){const e={h1:"h1",h2:"h2",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"huffman-coding",children:"Huffman Coding"}),"\n",(0,t.jsx)(e.h2,{id:"code",children:"CODE"}),"\n",(0,t.jsx)(r.Z,{language:"c",children:d})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}}}]);