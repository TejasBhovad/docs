"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[444],{5001:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var s=t(7462),r=(t(7294),t(3905)),a=t(814);const o={sidebar_position:3,description:"Interface problem"},i="Interface problem",c={unversionedId:"java/assignment/interface",id:"java/assignment/interface",title:"Interface problem",description:"Interface problem",source:"@site/docs/java/assignment/interface.mdx",sourceDirName:"java/assignment",slug:"/java/assignment/interface",permalink:"/docs/java/assignment/interface",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Interface problem"},sidebar:"tutorialSidebar",previous:{title:"Multithread problem",permalink:"/docs/java/assignment/mulithreading"},next:{title:"Exception problem",permalink:"/docs/java/assignment/exception"}},l={},m=[{value:"CODE",id:"code",level:2}],p={toc:m};function u(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,s.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-problem"},"Interface problem"),(0,r.kt)("h2",{id:"code"},"CODE"),(0,r.kt)(a.Z,{language:"java",mdxType:"CodeBlock"},'import java.util.Scanner;\n\npublic class Hybrid {\n    public static void main(String[] args) {\n        Result r = new Result();\n        r.getNumber();\n        r.getMarks();\n        r.putScore();\n        r.display();\n    }\n}\n\nclass Student {\n    int roll_no;\n    Scanner sc = new Scanner(System.in);\n\n    void getNumber() {\n        System.out.println("Enter Roll No: ");\n        roll_no = sc.nextInt();\n    }\n\n    void putNumber() {\n        System.out.println("Roll No: " + roll_no);\n    }\n}\n\nclass Test extends Student {\n    Scanner sc = new Scanner(System.in);\n    int sem1, sem2;\n\n    void getMarks() {\n        System.out.println("Enter Marks 1: ");\n        sem1 = sc.nextInt();\n        System.out.println("Enter Marks 2: ");\n        sem2 = sc.nextInt();\n    }\n\n    void putMarks() {\n        System.out.println("Marks 1: " + sem1);\n        System.out.println("Marks 2: " + sem2);\n    }\n}\n\ninterface Sports {\n    public float score = 90;\n\n    void putScore();\n}\n\nclass Result extends Test implements Sports {\n    Scanner sc = new Scanner(System.in);\n\n    float total;\n\n    public void putScore() {\n        // score = sc.nextFloat();\n    }\n\n    void display() {\n        putNumber();\n        putMarks();\n        putScore();\n        total = score + sem1 + sem2;\n        System.out.println("Total:" + total);\n    }\n\n}\n'))}u.isMDXComponent=!0}}]);