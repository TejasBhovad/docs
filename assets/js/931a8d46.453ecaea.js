"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8457],{665:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(7462),r=(n(7294),n(3905)),o=n(814);const i={sidebar_position:4,description:"Method Overloading in Java"},d="Overloading Area Method",l={unversionedId:"java/Overload",id:"java/Overload",title:"Overloading Area Method",description:"Method Overloading in Java",source:"@site/docs/java/Overload.mdx",sourceDirName:"java",slug:"/java/Overload",permalink:"/docs/java/Overload",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Method Overloading in Java"},sidebar:"tutorialSidebar",previous:{title:"Rectangle area and perimeter",permalink:"/docs/java/Rectangle"},next:{title:"Other",permalink:"/docs/category/other"}},s={},c=[{value:"CODE",id:"code",level:2}],u={toc:c};function v(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overloading-area-method"},"Overloading Area Method"),(0,r.kt)("h2",{id:"code"},"CODE"),(0,r.kt)(o.Z,{language:"java",mdxType:"CodeBlock"},'public class Area {\n    public static void main(String[] args) {\n        GetArea g=new GetArea();\n        System.out.println("Circle:"+g.area(12.0));\n        System.out.println("Triangle:"+g.area(12.0,2.0));\n        System.out.println("Square:"+g.area(5));\n        System.out.println("Rectangle:"+g.area(12,5));\n\n    }\n\n}\nclass GetArea{\n    double area(double r){\n        return 3.14*r*r;\n    }\n    double area(double base,double height){\n        return 0.5*base*height;\n    }\n    int area(int len,int wid){\n        return len*wid;\n    }\n    int area(int  a){\n        return a*a;\n    }\n\n}'))}v.isMDXComponent=!0}}]);