"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5576],{6281:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=o(5893),s=o(1151),a=o(9163);const i={title:"Object and Class",sidebar_position:3,description:"Write a program that demonstrates the creation of objects from a class, and shows how to access and modify the attributes and methods of the objects"},r="Python",d={id:"python/practicals/3",title:"Object and Class",description:"Write a program that demonstrates the creation of objects from a class, and shows how to access and modify the attributes and methods of the objects",source:"@site/docs/four/python/practicals/3.mdx",sourceDirName:"python/practicals",slug:"/python/practicals/3",permalink:"/docs/four/python/practicals/3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Object and Class",sidebar_position:3,description:"Write a program that demonstrates the creation of objects from a class, and shows how to access and modify the attributes and methods of the objects"},sidebar:"tutorialSidebar",previous:{title:"Multiple Inheritance",permalink:"/docs/four/python/practicals/2"},next:{title:"Tkinter button and label",permalink:"/docs/four/python/practicals/4"}},c={},l=[];function h(t){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"python",children:(0,n.jsx)(a.Z,{name:"banner",description:"Object and Classes",children:"Python"})}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"Write a program that demonstrates the creation of objects from a class, and shows how to access and modify the attributes and methods of the objects"}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'class Car:\n    def __init__(self, color, model):\n        self.color = color\n        self.model = model\n    def car_method(self):\n        print("Car Method")\n\nclass Audi(Car):\n    def __init__(self, color, model):\n        print("Audi Constructor")\n        super().__init__(color, model)\n    def audi_method(self):\n        print("Audi Method")\n\naudi = Audi("Black", "A6")\naudi.car_method()\naudi.audi_method()\nprint(audi.color)\nprint(audi.model)\n\n# Output:\n# Audi Constructor\n# Car Method\n# Audi Method\n# Black\n# A6\n\n'})}),"\n",(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.p,{children:"To compile and run the program, you can use the following commands:"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"python3 foo.py\n"})})]})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},9163:(t,e,o)=>{o.d(e,{Z:()=>a});o(7294);var n=o(4996),s=o(5893);const a=t=>{let{name:e,description:o,children:a}=t;const i=(0,n.ZP)(`/images/${e}.jpg`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:i,alt:i,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:a}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:o})]})}},1151:(t,e,o)=>{o.d(e,{Z:()=>r,a:()=>i});var n=o(7294);const s={},a=n.createContext(s);function i(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);