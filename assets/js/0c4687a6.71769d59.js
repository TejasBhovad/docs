"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6536],{4918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>j,frontMatter:()=>u,metadata:()=>i,toc:()=>f});const i=JSON.parse('{"id":"R/Experiment_3","title":"Experiment 3","description":"Correlation in R","source":"@site/docs/three/R/Experiment_3.mdx","sourceDirName":"R","slug":"/R/Experiment_3","permalink":"/docs/three/R/Experiment_3","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Correlation in R"},"sidebar":"tutorialSidebar","previous":{"title":"Experiment 2","permalink":"/docs/three/R/Experiment_2"},"next":{"title":"Experiment 4","permalink":"/docs/three/R/Experiment_4"}}');var s=t(4848),r=t(8453),a=t(3942),o=t(1432);const c='# Taking two numeric\n# Vectors with same length\nx = c(1, 2, 3, 4, 5, 6, 7)\ny = c(1, 3, 6, 2, 7, 4, 5)\n# Calculating Correlation coefficient\n# Using cor() method\nresult = cor(x, y, method = "pearson") \nplot(x,y)\n# Print the result\ncat("Pearson correlation coefficient is:", result)',d=t.p+"assets/images/exp3a-c3de3a409c8b036b15b12d9bc93beba4.png",l=t.p+"assets/images/exp_3a-ea7f190ef94e54e7fff77431ad9089d7.png",p='# importing csv file\ndf= read.csv("data.csv")\n\n# selecting columns from csv file\nx = df$weight\ny = df$value\n\nplot(x,y)\n\n# calculating correlation\nresult = cor(x,y,method="pearson")\n\ncat("Pearson correlation coefficient is:", result)',h=t.p+"assets/images/exp3b-4090e8d169a75c80e0cc9f3924a15dd8.png",x=t.p+"assets/images/exp_3b-17b2cb0a24c8c3894216639561295a1c.png",u={sidebar_position:4,description:"Correlation in R"},m="Experiment 3",g={},f=[{value:"CODE",id:"code",level:2},{value:"Without using Dataset",id:"without-using-dataset",level:3},{value:"Using Dataset",id:"using-dataset",level:3}];function b(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"experiment-3",children:"Experiment 3"})}),"\n",(0,s.jsx)(n.p,{children:"Implementing Correlation in R"}),"\n",(0,s.jsx)(n.h2,{id:"code",children:"CODE"}),"\n",(0,s.jsx)(n.h3,{id:"without-using-dataset",children:"Without using Dataset"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:c}),"\n",(0,s.jsx)("img",{src:l,width:500}),"\n",(0,s.jsx)("img",{src:d,width:500}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"using-dataset",children:"Using Dataset"}),"\n",(0,s.jsx)(a.A,{filename:"data.csv",children:"Download CSV"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:p}),"\n",(0,s.jsx)("img",{src:x,width:500}),"\n",(0,s.jsx)("img",{src:h,width:500}),"\n"]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},3942:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(6025),s=t(4848);const r={backgroundColor:"#8001c5",color:"#FFFFFF",padding:"10px 20px",borderRadius:"5px",textDecoration:"none",display:"inline-block",margin:"10px 0"},a=e=>{let{filename:n,children:t}=e;const a=(0,i.Ay)(`/assets/${n}`);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("a",{href:a,download:!0,style:r,children:t})})}}}]);