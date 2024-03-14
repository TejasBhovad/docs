"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[1554],{5926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(5893),i=r(1151),o=r(9163);const a={title:"Cricket Dictionary",sidebar_position:4,description:"WAP to create dictionary to store cricket player names and their scores. The program should be able to retrieve the runs by entering player name."},c="Python",s={id:"python/mse/cricket-dict",title:"Cricket Dictionary",description:"WAP to create dictionary to store cricket player names and their scores. The program should be able to retrieve the runs by entering player name.",source:"@site/docs/four/python/mse/cricket-dict.mdx",sourceDirName:"python/mse",slug:"/python/mse/cricket-dict",permalink:"/docs/four/python/mse/cricket-dict",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Cricket Dictionary",sidebar_position:4,description:"WAP to create dictionary to store cricket player names and their scores. The program should be able to retrieve the runs by entering player name."},sidebar:"tutorialSidebar",previous:{title:"String Sum and Average",permalink:"/docs/four/python/mse/sum-average"},next:{title:"Multiple Inheritance",permalink:"/docs/four/python/mse/multiple-inheritance"}},d={},p=[];function l(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"python",children:(0,n.jsx)(o.Z,{name:"banner",description:"Cricket Dictionary",children:"Python"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Title: WAP to create dictionary to store cricket player names and their scores. The program should be able to retrieve the runs by entering player name."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'# WAP to create dictionary to store cricket player names and their scores. The program should be able to retrieve the runs by entering player name.\n\ncricket_dict = {}\n\nn = int(input("Enter the number of players: "))\nfor i in range(0, n):\n    name = input("Enter player name: ")\n    score = int(input("Enter player score: "))\n    cricket_dict[name] = score\n\nprint("The dictionary is: ", cricket_dict)\n\nsearch = input("Enter the player name to be searched: ")\nif search in cricket_dict:\n    print("The score of", search, "is", cricket_dict[search])\nelse:\n    print("Player not found")\n\n# Output:\n# Enter the number of players: 3\n# Enter player name: Sachin\n# Enter player score: 100\n# Enter player name: Dhoni\n# Enter player score: 50\n# Enter player name: Kohli\n# Enter player score: 75\n# The dictionary is:  {\'Sachin\': 100, \'Dhoni\': 50, \'Kohli\': 75}\n# Enter the player name to be searched: Dhoni\n# The score of Dhoni is 50\n\n\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9163:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var n=r(4996),i=r(5893);const o=e=>{let{name:t,description:r,children:o}=e;const a=(0,n.Z)(`/images/${t}.png`);return(0,i.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,i.jsx)("img",{src:a,alt:a,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,i.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:o}),(0,i.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:r})]})}}}]);