"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5470],{9877:(n,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var e=t(5893),a=t(1151),i=t(9286);const o='// WAP to sort user defined array\n\nimport java.util.Scanner;\n\npublic class ArSort {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n, temp;\n        System.out.println("Enter the number of elements: ");\n        n = sc.nextInt();\n        int ar[] = new int[n];\n\n        System.out.println("Enter the elements: ");\n        for (int i = 0; i < n; i++)\n            ar[i] = sc.nextInt();\n\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < (n - i - 1); j++) {\n                if (ar[j] > ar[j + 1]) {\n                    temp = ar[j];\n                    ar[j] = ar[j + 1];\n                    ar[j + 1] = temp;\n                }\n            }\n        }\n\n        System.out.println("Sorted array: ");\n        for (int i = 0; i < n; i++)\n            System.out.print(ar[i] + " ");\n\n    }\n}\n',s={sidebar_position:10,description:"Sorting Array in Java"},c="Sort Array",d={id:"java/other/ArSort",title:"Sort Array",description:"Sorting Array in Java",source:"@site/docs/three/java/other/ArSort.mdx",sourceDirName:"java/other",slug:"/java/other/ArSort",permalink:"/docs/three/java/other/ArSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Sorting Array in Java"},sidebar:"tutorialSidebar",previous:{title:"Search in Array",permalink:"/docs/three/java/other/ArSearch"},next:{title:"Transpose Matrix",permalink:"/docs/three/java/other/Transpose"}},l={},h=[{value:"CODE",id:"code",level:2}];function p(n){const r={h1:"h1",h2:"h2",...(0,a.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h1,{id:"sort-array",children:"Sort Array"}),"\n",(0,e.jsx)(r.h2,{id:"code",children:"CODE"}),"\n",(0,e.jsx)(i.Z,{language:"java",children:o})]})}function u(n={}){const{wrapper:r}={...(0,a.a)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(p,{...n})}):p(n)}}}]);