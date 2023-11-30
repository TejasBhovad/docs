"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1596],{961:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=a(7462),o=(a(7294),a(3905)),r=a(814);const t={sidebar_position:5,description:"Complex number addition"},m="Complex Number Addition",l={unversionedId:"java/Complex",id:"java/Complex",title:"Complex Number Addition",description:"Complex number addition",source:"@site/docs/java/Complex.mdx",sourceDirName:"java",slug:"/java/Complex",permalink:"/docs/java/Complex",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Complex number addition"},sidebar:"tutorialSidebar",previous:{title:"Overloading Area Method",permalink:"/docs/java/Overload"},next:{title:"Matrix",permalink:"/docs/java/Matrix"}},s={},d=[{value:"CODE",id:"code",level:2}],c={toc:d};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"complex-number-addition"},"Complex Number Addition"),(0,o.kt)("h2",{id:"code"},"CODE"),(0,o.kt)(r.Z,{language:"java",mdxType:"CodeBlock"},"class Complex {\n    int real,imaginary;\n    char c='+';\n    Complex(){\n        real=imaginary=0;\n    }\n    Complex(int r,int i){\n        real=r;\n        imaginary=i;\n        c='+';\n    }\n    void show(){\n        if(imaginary<0)\n            c='-';\n\n        System.out.println(real+\" \"+c+\" \" +imaginary+\"i\");\n    }\n    Complex add(Complex c1,Complex c2){\n        Complex sum=new Complex();\n        sum.imaginary=c1.imaginary+c2.imaginary;\n        sum.real=c1.real+c2.real;\n        return sum;\n    }\n}\nclass ComplexNumber{\n    public static void main(String[] args) {\n        Complex c1=new Complex(1,2);\n        Complex c2=new Complex(3,5);\n        c1.show();\n        c2.show();\n        Complex sum;\n        sum=c1.add(c1,c2);\n        sum.show();\n    }\n}\n"))}p.isMDXComponent=!0}}]);