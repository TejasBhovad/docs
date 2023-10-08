"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5716],{2368:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905)),i=t(814);const o={sidebar_position:9,description:"Searching Array in Java"},s="Search in Array",c={unversionedId:"java/other/ArSearch",id:"java/other/ArSearch",title:"Search in Array",description:"Searching Array in Java",source:"@site/docs/java/other/ArSearch.mdx",sourceDirName:"java/other",slug:"/java/other/ArSearch",permalink:"/docs/java/other/ArSearch",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Searching Array in Java"},sidebar:"tutorialSidebar",previous:{title:"Count Digits",permalink:"/docs/java/other/Digits"},next:{title:"Sort Array",permalink:"/docs/java/other/ArSort"}},d={},l=[{value:"CODE",id:"code",level:2}],h={toc:l};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-in-array"},"Search in Array"),(0,a.kt)("h2",{id:"code"},"CODE"),(0,a.kt)(i.Z,{language:"java",mdxType:"CodeBlock"},'// WAP to search an element in array\nimport java.util.Scanner;\n\npublic class ArSearch {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int key, n;\n        System.out.println("Enter the number of elements: ");\n        n = sc.nextInt();\n        int ar[] = new int[n];\n        System.out.println("Enter the elements: ");\n        for (int i = 0; i < n; i++)\n            ar[i] = sc.nextInt();\n        System.out.println("Enter the element to be searched: ");\n        key = sc.nextInt();\n        for (int i = 0; i < n; i++) {\n            if (ar[i] == key) {\n                System.out.println("Element found at index " + i);\n                break;\n            }\n            if (i == n - 1)\n                System.out.println("Element not found");\n        }\n    }\n}\n'))}u.isMDXComponent=!0}}]);