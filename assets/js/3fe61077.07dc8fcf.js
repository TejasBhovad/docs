"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[659],{5198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(814);const l={sidebar_position:1,description:"collection of elements"},o="Arrays",s={unversionedId:"basics/arrays",id:"basics/arrays",title:"Arrays",description:"collection of elements",source:"@site/docs/basics/arrays.mdx",sourceDirName:"basics",slug:"/basics/arrays",permalink:"/docs/basics/arrays",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"collection of elements"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Recursion",permalink:"/docs/basics/recursion"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"Declaration",id:"declaration",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Referencing",id:"referencing",level:2},{value:"Looping",id:"looping",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays"},"Arrays"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An Array is a collection of elements of the same data type."),(0,r.kt)("h2",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"}," int ar[10];\n char ch[10];\n")),(0,r.kt)("h2",{id:"initialisation"},"Initialisation"),(0,r.kt)("p",null,"Initialisation refers to giving an initial value to a variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int ar[5] = { 10, 20, 30, 40, 50};\n")),(0,r.kt)("h2",{id:"referencing"},"Referencing"),(0,r.kt)("p",null,"Every element in an array can be referenced by its index. Index numbers range from 0 to ( length of array - 1 )."),(0,r.kt)("p",null,"Following is an example of indexes of the array declared above."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ELEMENTS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"10"),(0,r.kt)("th",{parentName:"tr",align:"center"},"20"),(0,r.kt)("th",{parentName:"tr",align:"center"},"30"),(0,r.kt)("th",{parentName:"tr",align:"center"},"40"),(0,r.kt)("th",{parentName:"tr",align:"center"},"50"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"INDEX"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ar[3]")," --\x3e 40"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ar[0]")," --\x3e 10"),(0,r.kt)("h2",{id:"looping"},"Looping"),(0,r.kt)("p",null,"To reference each element of the array we use loops."),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)(i.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\nint main()\n{\n    int ar[5];\n    for (int i = 0; i < 5; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n    return 0;\n}'),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)(i.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\nint main()\n{\n    int ar[5];\n\n    // INPUT\n    for (int i = 0; i < 5; i++)\n    {\n        scanf("%d", &ar[i]);\n    }\n\n    // OUTPUT\n    for (int i = 0; i < 5; i++)\n    {\n        printf("%d", ar[i]);\n    }\n    return 0;\n}'),(0,r.kt)("p",null,"Find Arrays programs here:",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TejasBhovad/c-programs/blob/master/arrays/programs.md"},"https://github.com/TejasBhovad/c-programs/arrays")))}u.isMDXComponent=!0}}]);