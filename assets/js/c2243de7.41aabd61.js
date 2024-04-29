"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6657],{8024:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var t=i(5893),s=i(1151),o=i(9163);const d={title:"Disk Partition",sidebar_position:10,description:"Disk Partition"},r="Operating System",a={id:"os/disk",title:"Disk Partition",description:"Disk Partition",source:"@site/docs/four/os/disk.mdx",sourceDirName:"os",slug:"/os/disk",permalink:"/docs/four/os/disk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Disk Partition",sidebar_position:10,description:"Disk Partition"},sidebar:"tutorialSidebar",previous:{title:"Partitioning Algorithms",permalink:"/docs/four/os/partition"},next:{title:"Banker's Algorithm",permalink:"/docs/four/os/bankers"}},h={},l=[{value:"Disk Partition",id:"disk-partition",level:2},{value:"Types of Disk Partitioning",id:"types-of-disk-partitioning",level:3},{value:"FCFS (First Come First Serve)",id:"fcfs-first-come-first-serve",level:3},{value:"SSTF (Shortest Seek Time First)",id:"sstf-shortest-seek-time-first",level:3},{value:"SCAN",id:"scan",level:3},{value:"C-SCAN (Circular SCAN)",id:"c-scan-circular-scan",level:3},{value:"LOOK",id:"look",level:3},{value:"C-LOOK (Circular LOOK)",id:"c-look-circular-look",level:3},{value:"Questions",id:"questions",level:3}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"operating-system",children:(0,t.jsx)(o.Z,{name:"banner",description:"Disk Partitioning Algorithm",children:"Operating System"})}),"\n",(0,t.jsx)(e.h2,{id:"disk-partition",children:"Disk Partition"}),"\n",(0,t.jsx)(e.p,{children:"Disk partitioning is the process of dividing the disk into multiple logical storage units called partitions. Each partition can be used to store data and files. Disk partitioning is done to organize the data and improve the performance of the disk."}),"\n",(0,t.jsx)(e.h3,{id:"types-of-disk-partitioning",children:"Types of Disk Partitioning"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"FCFS"}),"\n",(0,t.jsx)(e.li,{children:"SSTF"}),"\n",(0,t.jsx)(e.li,{children:"SCAN"}),"\n",(0,t.jsx)(e.li,{children:"C-SCAN"}),"\n",(0,t.jsx)(e.li,{children:"LOOK"}),"\n",(0,t.jsx)(e.li,{children:"C-LOOK"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"fcfs-first-come-first-serve",children:"FCFS (First Come First Serve)"}),"\n",(0,t.jsx)(e.p,{children:"In the FCFS disk scheduling algorithm, the disk head moves from one end of the disk to the other end, serving the requests in the order they arrive. The disk head moves in the direction of the request and serves the requests in the order they arrive."}),"\n",(0,t.jsx)(e.h3,{id:"sstf-shortest-seek-time-first",children:"SSTF (Shortest Seek Time First)"}),"\n",(0,t.jsx)(e.p,{children:"In the SSTF disk scheduling algorithm, the disk head moves to the request that is closest to the current position of the disk head. The disk head moves to the request that is closest to the current position of the disk head."}),"\n",(0,t.jsx)(e.h3,{id:"scan",children:"SCAN"}),"\n",(0,t.jsx)(e.p,{children:"In the SCAN disk scheduling algorithm, the disk head moves from one end of the disk to the other end, serving the requests in the order they arrive. When the disk head reaches the end of the disk, it reverses direction and moves to the other end of the disk."}),"\n",(0,t.jsx)(e.h3,{id:"c-scan-circular-scan",children:"C-SCAN (Circular SCAN)"}),"\n",(0,t.jsx)(e.p,{children:"In the C-SCAN disk scheduling algorithm, the disk head moves from one end of the disk to the other end, serving the requests in the order they arrive. When the disk head reaches the end of the disk, it moves to the other end of the disk without serving any requests."}),"\n",(0,t.jsx)(e.h3,{id:"look",children:"LOOK"}),"\n",(0,t.jsx)(e.p,{children:"In the LOOK disk scheduling algorithm, the disk head moves to the request that is closest to the current position of the disk head. The disk head moves to the request that is closest to the current position of the disk head."}),"\n",(0,t.jsx)(e.h3,{id:"c-look-circular-look",children:"C-LOOK (Circular LOOK)"}),"\n",(0,t.jsx)(e.p,{children:"In the C-LOOK disk scheduling algorithm, the disk head moves to the request that is closest to the current position of the disk head. The disk head moves to the request that is closest to the current position of the disk head."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n\nint abs(int x) {\n    return x > 0 ? x : -x;\n}\n\nvoid fcfs(int requests[], int n, int head) {\n    int total = 0;\n    for (int i = 0; i < n; i++) {\n        total += abs(head - requests[i]);\n        head = requests[i];\n    }\n    printf("Total head movement (FCFS): %d\\n", total);\n}\n\nvoid sstf(int requests[], int n, int head) {\n    int total = 0;\n    int done[n];\n    for (int i = 0; i < n; i++) {\n        done[i] = 0;\n    }\n    for (int i = 0; i < n; i++) {\n        int min_dist = 1e9;\n        int min_idx = -1;\n        for (int j = 0; j < n; j++) {\n            if (!done[j] && abs(head - requests[j]) < min_dist) {\n                min_dist = abs(head - requests[j]);\n                min_idx = j;\n            }\n        }\n        total += min_dist;\n        head = requests[min_idx];\n        done[min_idx] = 1;\n    }\n    printf("Total head movement (SSTF): %d\\n", total);\n}\n\nvoid scan(int requests[], int n, int head, int max_cylinder) {\n    int total = 0;\n    int done[n];\n    for (int i = 0; i < n; i++) {\n        done[i] = 0;\n    }\n    int direction = 1;\n    for (int i = 0; i < n; i++) {\n        int min_dist = 1e9;\n        int min_idx = -1;\n        for (int j = 0; j < n; j++) {\n            if (!done[j] && abs(head - requests[j]) < min_dist) {\n                if (direction == 1 && requests[j] >= head) {\n                    min_dist = abs(head - requests[j]);\n                    min_idx = j;\n                } else if (direction == -1 && requests[j] <= head) {\n                    min_dist = abs(head - requests[j]);\n                    min_idx = j;\n                }\n            }\n        }\n        if (min_idx == -1) {\n            direction *= -1;\n            continue;\n        }\n        total += min_dist;\n        head = requests[min_idx];\n        done[min_idx] = 1;\n    }\n    total += abs(head - (direction == 1 ? max_cylinder : 0));\n    printf("Total head movement (SCAN): %d\\n", total);\n}\n\nvoid cscan(int requests[], int n, int head, int max_cylinder) {\n    int total = 0;\n    int done[n];\n    for (int i = 0; i < n; i++) {\n        done[i] = 0;\n    }\n    for (int i = 0; i < n; i++) {\n        int min_dist = 1e9;\n        int min_idx = -1;\n        for (int j = 0; j < n; j++) {\n            if (!done[j] && abs(head - requests[j]) < min_dist) {\n                min_dist = abs(head - requests[j]);\n                min_idx = j;\n            }\n        }\n        total += min_dist;\n        head = requests[min_idx];\n        done[min_idx] = 1;\n    }\n    total += abs(head - max_cylinder) + max_cylinder;\n    printf("Total head movement (C-SCAN): %d\\n", total);\n}\n\nvoid look(int requests[], int n, int head) {\n    int total = 0;\n    int done[n];\n    for (int i = 0; i < n; i++) {\n        done[i] = 0;\n    }\n    int direction = 1;\n    for (int i = 0; i < n; i++) {\n        int min_dist = 1e9;\n        int min_idx = -1;\n        for (int j = 0; j < n; j++) {\n            if (!done[j] && abs(head - requests[j]) < min_dist) {\n                if (direction == 1 && requests[j] >= head) {\n                    min_dist = abs(head - requests[j]);\n                    min_idx = j;\n                } else if (direction == -1 && requests[j] <= head) {\n                    min_dist = abs(head - requests[j]);\n                    min_idx = j;\n                }\n            }\n        }\n        if (min_idx == -1) {\n            direction *= -1;\n            continue;\n        }\n        total += min_dist;\n        head = requests[min_idx];\n        done[min_idx] = 1;\n    }\n    printf("Total head movement (LOOK): %d\\n", total);\n}\n\nvoid clook(int requests[], int n, int head) {\n    int total = 0;\n    int done[n];\n    for (int i = 0; i < n; i++) {\n        done[i] = 0;\n    }\n    for (int i = 0; i < n; i++) {\n        int min_dist = 1e9;\n        int min_idx = -1;\n        for (int j = 0; j < n; j++) {\n            if (!done[j] && abs(head - requests[j]) < min_dist) {\n                min_dist = abs(head - requests[j]);\n                min_idx = j;\n            }\n        }\n        total += min_dist;\n        head = requests[min_idx];\n        done[min_idx] = 1;\n    }\n    printf("Total head movement (C-LOOK): %d\\n", total);\n}\n\nint main() {\n    int n, head, max_cylinder;\n    printf("Enter number of requests: ");\n    scanf("%d", &n);\n    int requests[n];\n    printf("Enter requests: ");\n    for (int i = 0; i < n; i++) {\n        scanf("%d", &requests[i]);\n    }\n    printf("Enter head position: ");\n    scanf("%d", &head);\n    printf("Enter maximum cylinder: ");\n    scanf("%d", &max_cylinder);\n    fcfs(requests, n, head);\n    sstf(requests, n, head);\n    scan(requests, n, head, max_cylinder);\n    cscan(requests, n, head, max_cylinder);\n    look(requests, n, head);\n    clook(requests, n, head);\n    return 0;\n}\n\n## Compiling and Running\n\n```bash\n$ gcc disk.c -o disk\n$ ./disk\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\n### Output\n\n```bash\nEnter number of requests: 5\nEnter requests: 98 183 37 122 14\nEnter head position: 53\nEnter maximum cylinder: 199\nTotal head movement (FCFS): 640\nTotal head movement (SSTF): 236\nTotal head movement (SCAN): 208\nTotal head movement (C-SCAN): 236\nTotal head movement (LOOK): 208\nTotal head movement (C-LOOK): 236\n"})}),"\n",(0,t.jsx)(e.h3,{id:"questions",children:"Questions"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"What is the use of disk partitioning?"}),(0,t.jsx)("div",{children:(0,t.jsx)(e.p,{children:"Disk partitioning is done to organize the data and improve the performance\nof the disk."})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"What are the types of disk partitioning algorithms?"}),(0,t.jsx)("div",{children:"FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK"})]})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},9163:(n,e,i)=>{i.d(e,{Z:()=>o});i(7294);var t=i(4996),s=i(5893);const o=n=>{let{name:e,description:i,children:o}=n;const d=(0,t.Z)(`/images/${e}.png`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:d,alt:d,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:o}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:i})]})}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>d});var t=i(7294);const s={},o=t.createContext(s);function d(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);