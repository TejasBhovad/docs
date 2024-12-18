"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[9447],{4419:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"java/other/Digits","title":"Count Digits","description":"Digit Count in Java","source":"@site/docs/three/java/other/Digits.mdx","sourceDirName":"java/other","slug":"/java/other/Digits","permalink":"/docs/three/java/other/Digits","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"description":"Digit Count in Java"},"sidebar":"tutorialSidebar","previous":{"title":"Fibonacci series","permalink":"/docs/three/java/other/Fibonnaci"},"next":{"title":"Search in Array","permalink":"/docs/three/java/other/ArSearch"}}');var r=e(4848),s=e(8453),a=e(1432);const o='// WAP to count the digits of a given number using recursion\npublic class Digits {\n    int count(int n) {\n        if (n == 0)\n            return 0;\n        else\n            return 1 + count(n / 10);\n    }\n    public static void main(String[] args) {\n        Digits d = new Digits();\n        System.out.println("Number of digits: " + d.count(12345));\n    }\n}\n',c={sidebar_position:8,description:"Digit Count in Java"},d="Count Digits",u={},h=[{value:"CODE",id:"code",level:2}];function l(i){const t={h1:"h1",h2:"h2",header:"header",...(0,s.R)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"count-digits",children:"Count Digits"})}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"CODE"}),"\n",(0,r.jsx)(a.A,{language:"java",children:o})]})}function g(i={}){const{wrapper:t}={...(0,s.R)(),...i.components};return t?(0,r.jsx)(t,{...i,children:(0,r.jsx)(l,{...i})}):l(i)}}}]);