"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[7299],{42:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(5893),l=i(1151),a=i(9163);const r={title:"Basics",sidebar_position:2,description:"variables declaration and more"},t="Python",c={id:"python/Basics",title:"Basics",description:"variables declaration and more",source:"@site/docs/four/python/Basics.mdx",sourceDirName:"python",slug:"/python/Basics",permalink:"/docs/four/python/Basics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basics",sidebar_position:2,description:"variables declaration and more"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/four/category/python"}},o={},d=[{value:"Variables",id:"variables",level:2},{value:"Comments",id:"comments",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Casting",id:"casting",level:2},{value:"Strings",id:"strings",level:2},{value:"If statement",id:"if-statement",level:2},{value:"Elif",id:"elif",level:2},{value:"Loops",id:"loops",level:2},{value:"While loop",id:"while-loop",level:3},{value:"For loop",id:"for-loop",level:3},{value:"Nested loop",id:"nested-loop",level:3},{value:"Break statement",id:"break-statement",level:3},{value:"Functions",id:"functions",level:2},{value:"Functions with arguments",id:"functions-with-arguments",level:3},{value:"Functions with return",id:"functions-with-return",level:3}];function h(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"python",children:(0,s.jsx)(a.Z,{name:"banner",description:"Basics",children:"Python"})}),"\n",(0,s.jsx)(e.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"x = 10\ny = 15\nprint(x + y)\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"25\n"})}),"\n",(0,s.jsx)(e.h2,{id:"comments",children:"Comments"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# This is a comment\nprint("Hello, World!")\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"Hello, World!\n"})}),"\n",(0,s.jsx)(e.h2,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"x = 5\nprint(type(x))\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"<class 'int'>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"casting",children:"Casting"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'x = int(1)   # x will be 1\ny = int(2.8) # y will be 2\nz = int("3") # z will be 3\n'})}),"\n",(0,s.jsx)(e.h2,{id:"strings",children:"Strings"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'a = "Hello, World!"\nprint(a)\nprint(a[1]) # print character at index 1\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"Hello, World!\ne\n"})}),"\n",(0,s.jsx)(e.h2,{id:"if-statement",children:"If statement"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'a = 33\nb = 200\nif b > a:\n  print("b is greater than a")\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"b is greater than a\n"})}),"\n",(0,s.jsx)(e.h2,{id:"elif",children:"Elif"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'a = 33\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"a and b are equal\n"})}),"\n",(0,s.jsx)(e.h2,{id:"loops",children:"Loops"}),"\n",(0,s.jsx)(e.h3,{id:"while-loop",children:"While loop"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"i = 1\nwhile i < 6:\n  print(i)\n  i += 1\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"1\n2\n3\n4\n5\n"})}),"\n",(0,s.jsx)(e.h3,{id:"for-loop",children:"For loop"}),"\n",(0,s.jsxs)(e.p,{children:["syntax: ",(0,s.jsx)(e.code,{children:"for x in range(start,stop,step)"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"i = 1\nfor i in range(6):\n  print(i)\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"1\n2\n3\n4\n5\n"})}),"\n",(0,s.jsx)(e.h3,{id:"nested-loop",children:"Nested loop"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"i = 1\nj = 1\nfor i in range(2):\n  for j in range(2):\n    print(i, j)\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"0 0\n0 1\n1 0\n1 1\n"})}),"\n",(0,s.jsx)(e.h3,{id:"break-statement",children:"Break statement"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"i = 1\nwhile i < 6:\n  print(i)\n  if i == 3:\n    break\n  i += 1\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"1\n2\n3\n"})}),"\n",(0,s.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def my_function():\n  print("Hello from a function")\n\nmy_function()\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"Hello from a function\n"})}),"\n",(0,s.jsx)(e.h3,{id:"functions-with-arguments",children:"Functions with arguments"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def my_function(fname):\n  print("Hello "+fname)\n\nmy_function("Name")\n\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"Hello Name\n"})}),"\n",(0,s.jsx)(e.h3,{id:"functions-with-return",children:"Functions with return"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def my_function(x):\n  return 5 * x\n\nprint(my_function(3))\n\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"15\n"})})]})}function p(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},9163:(n,e,i)=>{i.d(e,{Z:()=>a});i(7294);var s=i(4996),l=i(5893);const a=n=>{let{name:e,description:i,children:a}=n;const r=(0,s.Z)(`/images/${e}.png`);return(0,l.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,l.jsx)("img",{src:r,alt:r,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,l.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:a}),(0,l.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:i})]})}}}]);