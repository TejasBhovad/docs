"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7466],{796:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=i(5893),e=i(1151),r=i(9286);const o='\n// WAP to perform addition of diagonal elements of a matrix \nimport java.util.Scanner;\n\npublic class DiagSum {\n    public static void main(String[] args) {\n        int m, n;\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter the number of rows: ");\n        m = sc.nextInt();\n        System.out.println("Enter the number of columns: ");\n        n = sc.nextInt();\n        int mat[][] = new int[m][n];\n        for (int i = 0; i < m; i++) {\n            System.out.println("Enter the elements of row " + (i + 1) + ": ");\n            for (int j = 0; j < n; j++)\n                mat[i][j] = sc.nextInt();\n        }\n        System.out.println("Original matrix: ");\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++)\n                System.out.print(mat[i][j] + " ");\n            System.out.println();\n        }\n        System.out.println("Sum of diagonal elements: ");\n        int sum = 0;\n        for (int i = 0; i < m; i++)\n            for (int j = 0; j < n; j++)\n                if (i == j)\n                    sum += mat[i][j];\n        System.out.println(sum);\n    }\n}\n',s={sidebar_position:13,description:"Diagonal Sum Matrix in Java"},m="Diagonal Sum Matrix",u={id:"java/other/DiagSum",title:"Diagonal Sum Matrix",description:"Diagonal Sum Matrix in Java",source:"@site/docs/three/java/other/DiagSum.mdx",sourceDirName:"java/other",slug:"/java/other/DiagSum",permalink:"/docs/three/java/other/DiagSum",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"Diagonal Sum Matrix in Java"},sidebar:"tutorialSidebar",previous:{title:"Column Sum Matrix",permalink:"/docs/three/java/other/ColSum"},next:{title:"Matrix Product",permalink:"/docs/three/java/other/ProdMat"}},l={},c=[{value:"CODE",id:"code",level:2}];function d(n){const t={h1:"h1",h2:"h2",...(0,e.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"diagonal-sum-matrix",children:"Diagonal Sum Matrix"}),"\n",(0,a.jsx)(t.h2,{id:"code",children:"CODE"}),"\n",(0,a.jsx)(r.Z,{language:"java",children:o})]})}function h(n={}){const{wrapper:t}={...(0,e.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}}}]);