"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3461],{5695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"python/practicals/18","title":"function overriding","description":"Implement function overriding in Python, where a child class provides its own implementation of a method that is already defined in the parent class.","source":"@site/docs/four/python/practicals/18.mdx","sourceDirName":"python/practicals","slug":"/python/practicals/18","permalink":"/docs/four/python/practicals/18","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"function overriding","sidebar_position":18,"description":"Implement function overriding in Python, where a child class provides its own implementation of a method that is already defined in the parent class."},"sidebar":"tutorialSidebar","previous":{"title":"function overloading","permalink":"/docs/four/python/practicals/17"},"next":{"title":"function overriding","permalink":"/docs/four/python/practicals/19"}}');var o=t(4848),r=t(8453),s=t(8731);const d={title:"function overriding",sidebar_position:18,description:"Implement function overriding in Python, where a child class provides its own implementation of a method that is already defined in the parent class."},a="Python",c={},l=[];function p(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"python",children:(0,o.jsx)(s.A,{name:"banner",description:"Function overriding",children:"Python"})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Implement function overriding in Python, where a child class provides its own implementation of a method that is already defined in the parent class."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Parent:\n    def method(self):\n        print("Parent Method")\n\nclass Child(Parent):\n    def method(self):\n        print("Child Method")\n\nchild = Child()\nchild.method()\n\n# Output:\n    # Child Method\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"To compile and run the program, you can use the following commands:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python3 foo.py\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8731:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var i=t(6025),o=t(4848);const r=e=>{let{name:n,description:t,children:r}=e;const s=(0,i.Ay)(`/images/${n}.jpg`);return(0,o.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,o.jsx)("img",{src:s,alt:s,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,o.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,o.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:t})]})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);