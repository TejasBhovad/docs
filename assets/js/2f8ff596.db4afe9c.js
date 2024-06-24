"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3044],{6077:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var a=s(5893),o=s(1151);const i={slug:"docusaurus-search",title:"Building a Searchable Docs Site with Docusaurus",keywords:["docusaurus","search","docs","documentation","tutorial","article","tejas"],authors:["tejas"],tags:["tutorial","article"]},c=void 0,n={permalink:"/docs/blog/docusaurus-search",source:"@site/blog/2023-12-30/index.mdx",title:"Building a Searchable Docs Site with Docusaurus",description:"Thumbnail",date:"2023-12-30T00:00:00.000Z",tags:[{inline:!0,label:"tutorial",permalink:"/docs/blog/tags/tutorial"},{inline:!0,label:"article",permalink:"/docs/blog/tags/article"}],readingTime:1.37,hasTruncateMarker:!1,authors:[{name:"Tejas Bhovad",title:"Docs maintainer",url:"https://github.com/TejasBhovad",imageURL:"https://github.com/TejasBhovad.png",key:"tejas"}],frontMatter:{slug:"docusaurus-search",title:"Building a Searchable Docs Site with Docusaurus",keywords:["docusaurus","search","docs","documentation","tutorial","article","tejas"],authors:["tejas"],tags:["tutorial","article"]},unlisted:!1,prevItem:{title:"Docs v3.0 | Semester in Review",permalink:"/docs/blog/docs-v3"},nextItem:{title:"Annoucing Docs v2.0",permalink:"/docs/blog/docs-v2-release"}},r={authorsImageUrls:[void 0]},l=[{value:"Step 1: Basic Docs Setup",id:"step-1-basic-docs-setup",level:2},{value:"Step 2: Setting up Local Search",id:"step-2-setting-up-local-search",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Thumbnail",src:s(1128).Z+"",width:"1280",height:"720"})}),"\n",(0,a.jsx)(t.p,{children:"Docusaurous is an easy to use documentation tool bey Meta. In this article we will look into how to build a basic Docusaurous site and add Search bar to it."}),"\n",(0,a.jsx)(t.p,{children:"If you prefer a video tutorial, I have a 3 minute video on the same"}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fIJxcaqeUBE?si=R5y9xwdtubzuITAy",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,a.jsx)(t.h2,{id:"step-1-basic-docs-setup",children:"Step 1: Basic Docs Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Head to ",(0,a.jsx)(t.a,{href:"https://docusaurus.io/docs#fast-track",children:"https://docusaurus.io/docs#fast-track"}),"\nCopy the installation command from the above page."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"website",src:s(1414).Z+"",width:"1814",height:"1038"})}),"\n",(0,a.jsx)(t.p,{children:"Open VS Code, and open the terminal, paste the copied command and let the site build"}),"\n",(0,a.jsxs)(t.p,{children:["If the installation doesn't proceed and is stuck, press ",(0,a.jsx)(t.code,{children:"ctr+c"})," to terminate current session and run ",(0,a.jsx)(t.code,{children:"npm i"})," to install the node modules"]}),"\n",(0,a.jsxs)(t.p,{children:["run ",(0,a.jsx)(t.code,{children:"npm run start"})," to start development server, a window will automatically appear in your default web browser"]}),"\n",(0,a.jsx)(t.h2,{id:"step-2-setting-up-local-search",children:"Step 2: Setting up Local Search"}),"\n",(0,a.jsxs)(t.p,{children:["Now, Docusaurous doesn't have a built in search bar, it does officially have partnership with Algolia search, but it requires a particular checklist to be satisfied. We will be using an open source alternative: ",(0,a.jsx)(t.a,{href:"https://github.com/easyops-cn/docusaurus-search-local",children:"https://github.com/easyops-cn/docusaurus-search-local"}),"\n",(0,a.jsx)(t.img,{alt:"repository",src:s(6255).Z+"",width:"1780",height:"1012"}),"\nHead to ",(0,a.jsx)(t.a,{href:"https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#installation",children:"https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#installation"})," and copy installation code, and paste it in the terminal"]}),"\n",(0,a.jsxs)(t.p,{children:["Now in the usage section ",(0,a.jsx)(t.a,{href:"https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#usage",children:"https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#usage"}),", copy the following code"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'  plugins: [\n      require.resolve("@easyops-cn/docusaurus-search-local"),\n      ({\n        hashed: true,\n      }),\n    ],\n'})}),"\n",(0,a.jsxs)(t.p,{children:["And paste it into the config section in ",(0,a.jsx)(t.code,{children:"docusaurus.config.js"})," file\nRestart the dev server and search bar should appear in the top right"]}),"\n",(0,a.jsx)(t.p,{children:"The Search will not work in development server, to test it, you need to build the site."}),"\n",(0,a.jsx)(t.p,{children:"Build the site"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm run build\n"})}),"\n",(0,a.jsx)(t.p,{children:"Serve the site"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm run serve\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Thanks for reading."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1414:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/image_1-70d44c45960cff05cc6e99045008ac19.jpeg"},6255:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/image_2-ab02abcd6c5c4619c9dee2e8c5d8bfe9.jpeg"},1128:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/image_3-c6beb1d926b03051f8ddc50c87bc8a0b.jpeg"},1151:(e,t,s)=>{s.d(t,{Z:()=>n,a:()=>c});var a=s(7294);const o={},i=a.createContext(o);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);