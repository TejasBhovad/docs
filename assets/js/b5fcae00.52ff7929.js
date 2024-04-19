"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6437],{4922:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var i=n(5893),t=n(1151),r=n(9163);const a={title:"Banker's Algorithm",sidebar_position:11,description:"fork command"},o="Operating System",h={id:"os/bankers",title:"Banker's Algorithm",description:"fork command",source:"@site/docs/four/os/bankers.mdx",sourceDirName:"os",slug:"/os/bankers",permalink:"/docs/four/os/bankers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Banker's Algorithm",sidebar_position:11,description:"fork command"},sidebar:"tutorialSidebar",previous:{title:"Consumer Producer Problem",permalink:"/docs/four/os/journal/5"},next:{title:"Python",permalink:"/docs/four/category/python"}},d={},c=[{value:"Banker&#39;s Algorithm",id:"bankers-algorithm",level:2},{value:"Compiling and Running the Banker&#39;s Algorithm",id:"compiling-and-running-the-bankers-algorithm",level:2},{value:"Output",id:"output",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"operating-system",children:(0,i.jsx)(r.Z,{name:"banner",description:"Banker's Algo",children:"Operating System"})}),"\n",(0,i.jsx)(s.h2,{id:"bankers-algorithm",children:"Banker's Algorithm"}),"\n",(0,i.jsx)(s.p,{children:"The Banker's algorithm is a deadlock avoidance algorithm that is used to prevent deadlock in a system. The Banker's algorithm is used to allocate resources to processes in a way that prevents deadlock. The Banker's algorithm is based on the concept of a safe state. A safe state is a state in which the system can allocate resources to processes in such a way that no process will be left waiting indefinitely for resources."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    int need[2][3] = {{3, 2, 2}, {2, 1, 1}};\n    int max[2][3] = {{7, 5, 3}, {4, 3, 2}};\n    int avail[3] = {3, 2, 2};\n\n    int safe = 1;\n    for (int i = 0; i < 2; i++) {\n        int can_finish = 1;\n        for (int j = 0; j < 3; j++) {\n            if (need[i][j] > avail[j]) {\n                can_finish = 0;\n                break;\n            }\n        }\n        if (can_finish) {\n            printf("Process %d can finish safely.\\n", i + 1);\n            for (int j = 0; j < 3; j++) {\n                avail[j] += max[i][j];\n            }\n        } else {\n            safe = 0;\n        }\n    }\n\n    if (safe) {\n        printf("The system is in a safe state.\\n");\n    } else {\n        printf("The system is in an unsafe state (deadlock possible).\\n");\n    }\n\n    return 0;\n}\n\n'})}),"\n",(0,i.jsx)(s.h2,{id:"compiling-and-running-the-bankers-algorithm",children:"Compiling and Running the Banker's Algorithm"}),"\n",(0,i.jsx)(s.p,{children:"To compile and run the Banker's algorithm, you can use the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"gcc -o banker banker.c\n./banker\n"})}),"\n",(0,i.jsx)(s.h3,{id:"output",children:"Output"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"Process 1 can finish safely.\nProcess 2 can finish safely.\nThe system is in a safe state.\n"})}),"\n",(0,i.jsx)(s.p,{children:"The output of the program shows that the system is in a safe state and that both processes can finish safely. This means that the system can allocate resources to the processes in such a way that no process will be left waiting indefinitely for resources."}),"\n",(0,i.jsx)(s.h1,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"What is the Banker's algorithm?"}),(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"The Banker's algorithm is a deadlock avoidance algorithm that is used to\nprevent deadlock in a system."})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"What is a safe state?"}),(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"A safe state is a state in which the system can allocate resources to\nprocesses in such a way that no process will be left waiting indefinitely\nfor resources."})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"What is the output of the program?"}),(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"The output of the program shows that the system is in a safe state and that both processes can finish safely."})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the purpose of the ",(0,i.jsx)(s.code,{children:"safe"})," variable?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"safe"})," variable is used to determine whether the system is in a safe state or not."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"can_finish"})," variable?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"can_finish"})," variable is used to determine whether a process can finish\nsafely or not."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"need"})," array?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"need"})," array is used to store the resource needs of processes."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"max"})," array?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"max"})," array is used to store the maximum resource requirements of\nprocesses."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"avail"})," array?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"avail"})," array is used to store the available resources in the system."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"i"})," and ",(0,i.jsx)(s.code,{children:"j"})," variables in the loops?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"i"})," variable is used to iterate over the processes, and the ",(0,i.jsx)(s.code,{children:"j"})," variable\nis used to iterate over the resources."]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["What is the use of the ",(0,i.jsx)(s.code,{children:"break"})," statement in the loop?"]}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"break"})," statement is used to exit the loop early if a condition is met."]})})]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9163:(e,s,n)=>{n.d(s,{Z:()=>r});n(7294);var i=n(4996),t=n(5893);const r=e=>{let{name:s,description:n,children:r}=e;const a=(0,i.Z)(`/images/${s}.png`);return(0,t.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,t.jsx)("img",{src:a,alt:a,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,t.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,t.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:n})]})}}}]);