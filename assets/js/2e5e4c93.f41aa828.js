"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5800],{1368:(t,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var e=n(7462),o=(n(7294),n(3905)),a=n(814);const s={sidebar_position:8,description:"Digit Count in Java"},r="Count Digits",c={unversionedId:"java/other/Digits",id:"java/other/Digits",title:"Count Digits",description:"Digit Count in Java",source:"@site/docs/java/other/Digits.mdx",sourceDirName:"java/other",slug:"/java/other/Digits",permalink:"/docs/java/other/Digits",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Digit Count in Java"},sidebar:"tutorialSidebar",previous:{title:"Fibonacci series",permalink:"/docs/java/other/Fibonnaci"},next:{title:"Search in Array",permalink:"/docs/java/other/ArSearch"}},u={},d=[{value:"CODE",id:"code",level:2}],g={toc:d};function l(t){let{components:i,...n}=t;return(0,o.kt)("wrapper",(0,e.Z)({},g,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"count-digits"},"Count Digits"),(0,o.kt)("h2",{id:"code"},"CODE"),(0,o.kt)(a.Z,{language:"java",mdxType:"CodeBlock"},'// WAP to count the digits of a given number using recursion\npublic class Digits {\n    int count(int n) {\n        if (n == 0)\n            return 0;\n        else\n            return 1 + count(n / 10);\n    }\n    public static void main(String[] args) {\n        Digits d = new Digits();\n        System.out.println("Number of digits: " + d.count(12345));\n    }\n}\n'))}l.isMDXComponent=!0}}]);