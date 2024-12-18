"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[4529],{1993:(r,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>e,toc:()=>h});const e=JSON.parse('{"id":"java/other/ArSort","title":"Sort Array","description":"Sorting Array in Java","source":"@site/docs/three/java/other/ArSort.mdx","sourceDirName":"java/other","slug":"/java/other/ArSort","permalink":"/docs/three/java/other/ArSort","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"Sorting Array in Java"},"sidebar":"tutorialSidebar","previous":{"title":"Search in Array","permalink":"/docs/three/java/other/ArSearch"},"next":{"title":"Transpose Matrix","permalink":"/docs/three/java/other/Transpose"}}');var a=t(4848),i=t(8453),o=t(1432);const s='// WAP to sort user defined array\n\nimport java.util.Scanner;\n\npublic class ArSort {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n, temp;\n        System.out.println("Enter the number of elements: ");\n        n = sc.nextInt();\n        int ar[] = new int[n];\n\n        System.out.println("Enter the elements: ");\n        for (int i = 0; i < n; i++)\n            ar[i] = sc.nextInt();\n\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < (n - i - 1); j++) {\n                if (ar[j] > ar[j + 1]) {\n                    temp = ar[j];\n                    ar[j] = ar[j + 1];\n                    ar[j + 1] = temp;\n                }\n            }\n        }\n\n        System.out.println("Sorted array: ");\n        for (int i = 0; i < n; i++)\n            System.out.print(ar[i] + " ");\n\n    }\n}\n',c={sidebar_position:10,description:"Sorting Array in Java"},d="Sort Array",l={},h=[{value:"CODE",id:"code",level:2}];function p(r){const n={h1:"h1",h2:"h2",header:"header",...(0,i.R)(),...r.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"sort-array",children:"Sort Array"})}),"\n",(0,a.jsx)(n.h2,{id:"code",children:"CODE"}),"\n",(0,a.jsx)(o.A,{language:"java",children:s})]})}function u(r={}){const{wrapper:n}={...(0,i.R)(),...r.components};return n?(0,a.jsx)(n,{...r,children:(0,a.jsx)(p,{...r})}):p(r)}}}]);