"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6980],{4740:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=e(5893),n=e(1151),o=e(9163);const r={title:"Partitioning Algorithms",sidebar_position:9,description:"Partitioning Algorithm"},l="Operating System",c={id:"os/partition",title:"Partitioning Algorithms",description:"Partitioning Algorithm",source:"@site/docs/four/os/partition.mdx",sourceDirName:"os",slug:"/os/partition",permalink:"/docs/four/os/partition",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Partitioning Algorithms",sidebar_position:9,description:"Partitioning Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Page replacenent Algorithm",permalink:"/docs/four/os/page"},next:{title:"Disk Partition",permalink:"/docs/four/os/disk"}},a={},d=[{value:"Partitioning Algorithms",id:"partitioning-algorithms",level:2},{value:"First Fit",id:"first-fit",level:3},{value:"Best Fit",id:"best-fit",level:3},{value:"Worst Fit",id:"worst-fit",level:3},{value:"Questions",id:"questions",level:2}];function h(i){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...i.components},{Details:e}=t;return e||function(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"operating-system",children:(0,s.jsx)(o.Z,{name:"banner",description:"Partitioning Algorithm",children:"Operating System"})}),"\n",(0,s.jsx)(t.h2,{id:"partitioning-algorithms",children:"Partitioning Algorithms"}),"\n",(0,s.jsx)(t.p,{children:"Partitioning algorithms are used to divide the memory into partitions to allocate memory to processes. There are two types of partitioning algorithms:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"First Fit"}),"\n",(0,s.jsx)(t.li,{children:"Best Fit"}),"\n",(0,s.jsx)(t.li,{children:"Worst Fit"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"first-fit",children:"First Fit"}),"\n",(0,s.jsx)(t.p,{children:"In the first fit algorithm, the memory is divided into partitions and the first partition that is large enough to fit the process is allocated to the process. The process is allocated to the first partition that is large enough to fit the process."}),"\n",(0,s.jsx)(t.h3,{id:"best-fit",children:"Best Fit"}),"\n",(0,s.jsx)(t.p,{children:"In the best fit algorithm, the memory is divided into partitions and the partition that is closest in size to the process is allocated to the process. The process is allocated to the partition that is closest in size to the process."}),"\n",(0,s.jsx)(t.h3,{id:"worst-fit",children:"Worst Fit"}),"\n",(0,s.jsx)(t.p,{children:"In the worst fit algorithm, the memory is divided into partitions and the largest partition that is large enough to fit the process is allocated to the process. The process is allocated to the largest partition that is large enough to fit the process."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n\n#define MAX_PROCESSES 10\n#define MAX_MEMORY 100\n\nvoid firstFit(int processSizes[], int processIDs[], int n, int memory[], int m) {\n    for (int i = 0; i < n; i++) {\n        int found = 0;\n        for (int j = 0; j < m; j++) {\n            if (memory[j] >= processSizes[i]) {\n                memory[j] -= processSizes[i];\n                printf("Process %d allocated to memory block %d\\n", processIDs[i], j);\n                found = 1;\n                break;\n            }\n        }\n        if (!found) {\n            printf("Process %d not allocated (no fit)\\n", processIDs[i]);\n        }\n    }\n}\n\nvoid bestFit(int processSizes[], int processIDs[], int n, int memory[], int m) {\n    int best_idx = -1;\n    for (int i = 0; i < n; i++) {\n        best_idx = -1;\n        for (int j = 0; j < m; j++) {\n            if (memory[j] >= processSizes[i]) {\n                if (best_idx == -1 || memory[j] < memory[best_idx]) {\n                    best_idx = j;\n                }\n            }\n        }\n        if (best_idx != -1) {\n            memory[best_idx] -= processSizes[i];\n            printf("Process %d allocated to memory block %d\\n", processIDs[i], best_idx);\n        } else {\n            printf("Process %d not allocated (no fit)\\n", processIDs[i]);\n        }\n    }\n}\n\nvoid worstFit(int processSizes[], int processIDs[], int n, int memory[], int m) {\n    int worst_idx = -1;\n    for (int i = 0; i < n; i++) {\n        worst_idx = -1;\n        for (int j = 0; j < m; j++) {\n            if (memory[j] >= processSizes[i]) {\n                if (worst_idx == -1 || memory[j] > memory[worst_idx]) {\n                    worst_idx = j;\n                }\n            }\n        }\n        if (worst_idx != -1) {\n            memory[worst_idx] -= processSizes[i];\n            printf("Process %d allocated to memory block %d\\n", processIDs[i], worst_idx);\n        } else {\n            printf("Process %d not allocated (no fit)\\n", processIDs[i]);\n        }\n    }\n}\n\nint main() {\n    int processSizes[] = {20, 15, 10, 30};\n    int processIDs[] = {1, 2, 3, 4};\n    int n = sizeof(processSizes) / sizeof(processSizes[0]);\n\n    int memory[MAX_MEMORY];\n    for (int i = 0; i < MAX_MEMORY; i++) {\n        memory[i] = 10; // Simulate memory blocks of size 10\n    }\n    int m = sizeof(memory) / sizeof(memory[0]);\n\n    printf("** First Fit Allocation **\\n");\n    firstFit(processSizes, processIDs, n, memory, m);\n\n    for (int i = 0; i < m; i++) {\n        memory[i] = 10; // Reset memory for next algorithm\n    }\n\n    printf("\\n** Best Fit Allocation **\\n");\n    bestFit(processSizes, processIDs, n, memory, m);\n\n    for (int i = 0; i < m; i++) {\n        memory[i] = 10; // Reset memory for next algorithm\n    }\n\n    printf("\\n** Worst Fit Allocation **\\n");\n    worstFit(processSizes, processIDs, n, memory, m);\n\n    return 0;\n}\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To compile and run the program, use the following commands(dont copy the ",(0,s.jsx)(t.code,{children:"$"})," sign, it represents the terminal prompt):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ gcc partition.c -o partition\n$ ./partition\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This program demonstrates the first fit, best fit, and worst fit partitioning algorithms to allocate memory to processes."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"questions",children:"Questions"}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsx)("summary",{children:"What is the use of partitioning algorithms?"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Partitioning algorithms are used to divide the memory into partitions to\nallocate memory to processes."})})]}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(t.p,{children:"What is the difference between first fit, best fit, and worst fit\nalgorithms?"})}),(0,s.jsx)("div",{children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"First Fit: The first partition that is large enough to fit the process is\nallocated to the process. - Best Fit: The partition that is closest in size\nto the process is allocated to the process. - Worst Fit: The largest\npartition that is large enough to fit the process is allocated to the\nprocess."}),"\n"]})})]}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsx)("summary",{children:"What is the output of the program?"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"The program will allocate memory to processes using first fit, best fit, and\nworst fit algorithms."})})]}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(t.code,{children:"memory"})," array?"]}),(0,s.jsxs)("div",{children:["The ",(0,s.jsx)(t.code,{children:"memory"})," array is used to simulate memory blocks of size 10."]})]}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(t.code,{children:"processes"})," array?"]}),(0,s.jsx)("div",{children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"processes"})," array contains the processes to be allocated memory."]})})]}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(t.code,{children:"n"})," and ",(0,s.jsx)(t.code,{children:"m"})," variables?"]}),(0,s.jsx)("div",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"n"})," is the number of processes and ",(0,s.jsx)(t.code,{children:"m"})," is the number of memory blocks."]})})]})]})}function m(i={}){const{wrapper:t}={...(0,n.a)(),...i.components};return t?(0,s.jsx)(t,{...i,children:(0,s.jsx)(h,{...i})}):h(i)}},9163:(i,t,e)=>{e.d(t,{Z:()=>o});e(7294);var s=e(4996),n=e(5893);const o=i=>{let{name:t,description:e,children:o}=i;const r=(0,s.Z)(`/images/${t}.png`);return(0,n.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,n.jsx)("img",{src:r,alt:r,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,n.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:o}),(0,n.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:e})]})}},1151:(i,t,e)=>{e.d(t,{Z:()=>l,a:()=>r});var s=e(7294);const n={},o=s.createContext(n);function r(i){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof i?i(t):{...t,...i}}),[t,i])}function l(i){let t;return t=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:r(i.components),s.createElement(o.Provider,{value:t},i.children)}}}]);