"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[528],{7126:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=e(7462),s=(e(7294),e(3905)),o=e(814);const r={sidebar_position:2,description:"function calls itself"},c="Recursion",a={unversionedId:"basics/recursion",id:"basics/recursion",title:"Recursion",description:"function calls itself",source:"@site/docs/basics/recursion.mdx",sourceDirName:"basics",slug:"/basics/recursion",permalink:"/docs/c/basics/recursion",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"function calls itself"},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/docs/c/basics/arrays"},next:{title:"Stacks",permalink:"/docs/c/category/stacks"}},u={},l=[{value:"Definintion",id:"definintion",level:2}],d={toc:l};function p(i){let{components:n,...e}=i;return(0,s.kt)("wrapper",(0,t.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"recursion"},"Recursion"),(0,s.kt)("h2",{id:"definintion"},"Definintion"),(0,s.kt)("p",null,"when a function calls itself from its body, the function is said to be a recursive function."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Recursive functions should always have a termination condition else the function calls itself infinitely.")),(0,s.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},"#include <stdio.h>\nvoid recurse()\n{\n    // Body that will contain the termination condition\n    recurse();\n}\nint main()\n{\n    recurse();\n    return 0;\n}"),(0,s.kt)("p",null,"Find Recursion programs here:",(0,s.kt)("br",null),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/TejasBhovad/c-programs/blob/master/recursion/recursion.md"},"https://github.com/TejasBhovad/c-programs/recursion")))}p.isMDXComponent=!0}}]);