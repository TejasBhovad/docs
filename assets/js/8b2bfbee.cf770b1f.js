"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3543],{7326:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"java/Prime","title":"Prime Numbers from 1 to 1000","description":"Prime Numbers in Java","source":"@site/docs/three/java/Prime.mdx","sourceDirName":"java","slug":"/java/Prime","permalink":"/docs/three/java/Prime","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Prime Numbers in Java"},"sidebar":"tutorialSidebar","previous":{"title":"Grades in Java","permalink":"/docs/three/java/Grades"},"next":{"title":"Rectangle Square Area","permalink":"/docs/three/java/Rectangle"}}');var a=r(4848),t=r(8453),s=r(1432);const o="public class Prime {\n\n    public static void main(String[] args) {\n        int N = 1000;\n        for (int i = 2; i < N; i++) {\n            int flag = 0;\n            for (int j = 2; j < i; j++) {\n                if (i % j == 0) {\n                    // increment flag if divisible\n                    flag++;\n                    break;\n                }\n            }\n            if (flag == 0) {\n                System.out.println(i);\n            }\n        }\n\n    }\n}",c={sidebar_position:2,description:"Prime Numbers in Java"},d="Prime Numbers from 1 to 1000",l={},m=[{value:"CODE",id:"code",level:2}];function u(e){const i={h1:"h1",h2:"h2",header:"header",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"prime-numbers-from-1-to-1000",children:"Prime Numbers from 1 to 1000"})}),"\n",(0,a.jsx)(i.h2,{id:"code",children:"CODE"}),"\n",(0,a.jsx)(s.A,{language:"java",children:o})]})}function f(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);