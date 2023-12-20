"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[4692],{673:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=t(5893),o=t(1151),a=t(9286);const s='import java.util.Scanner;\n\nclass MyExceptionDemo {\n    static void OddNoException() throws OddException {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Enter a number: ");\n        int num = sc.nextInt();\n        if (num % 2 != 0) {\n            throw new OddException(num);\n        } else {\n            System.out.println(num + " is an even number");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            OddNoException();\n        } catch (OddException e) {\n            System.out.println(e);\n        }\n        System.out.println("End of program");\n    }\n}\n\nclass OddException extends Exception {\n    int num;\n    OddException(int x) {\n        num = x;\n    }\n    public String toString() {\n        return "OddException: " + num + " is an odd number";\n    }\n}',r={sidebar_position:10,description:"Exceptions in Java"},c="Exceptions",d={id:"java/Exception",title:"Exceptions",description:"Exceptions in Java",source:"@site/docs/three/java/Exception.mdx",sourceDirName:"java",slug:"/java/Exception",permalink:"/docs/three/java/Exception",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Exceptions in Java"},sidebar:"tutorialSidebar",previous:{title:"Interfaces",permalink:"/docs/three/java/Interface"},next:{title:"Multi Threading",permalink:"/docs/three/java/Multithread"}},p={},u=[{value:"CODE",id:"code",level:2}];function l(n){const e={h1:"h1",h2:"h2",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"exceptions",children:"Exceptions"}),"\n",(0,i.jsx)(e.h2,{id:"code",children:"CODE"}),"\n",(0,i.jsx)(a.Z,{language:"java",children:s})]})}function x(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}}}]);