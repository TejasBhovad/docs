"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[6819],{134:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"os/journal/4","title":"fork system call","description":"C Program for fork system call","source":"@site/docs/four/os/journal/4.mdx","sourceDirName":"os/journal","slug":"/os/journal/4","permalink":"/docs/four/os/journal/4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"fork system call","sidebar_position":4,"description":"C Program for fork system call"},"sidebar":"tutorialSidebar","previous":{"title":"C Program for MOV LS","permalink":"/docs/four/os/journal/3"},"next":{"title":"Consumer Producer Problem","permalink":"/docs/four/os/journal/5"}}');var s=i(4848),o=i(8453),t=i(8731);const d={title:"fork system call",sidebar_position:4,description:"C Program for fork system call"},p="Operating System",c={},l=[];function a(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"operating-system",children:(0,s.jsx)(t.A,{name:"banner",description:"C programs for fork system call",children:"Operating System"})})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <sys/types.h>\n#include <unistd.h>\nint main() {\nfork();\nprintf("Hello world!\\n");\nreturn 0;\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <sys/types.h>\n#include <unistd.h>\n\nint main() {\n    pid_t pid, mypid, myppid;\n    pid = getpid();\n    printf("Before fork: Process id is %d\\n", pid);\n    pid = fork();\n    \n    if (pid < 0) {\n        perror("fork() failure\\n");\n        return 1;\n    }\n    \n    // Child process\n    if (pid == 0) {\n        printf("This is child process\\n");\n        mypid = getpid();\n        myppid = getppid();\n        printf("Process id is %d and PPID is %d\\n", mypid, myppid);\n    } else { // Parent process\n        sleep(2);\n        printf("This is parent process\\n");\n        mypid = getpid();\n        myppid = getppid();\n        printf("Process id is %d and PPID is %d\\n", mypid, myppid);\n        printf("Newly created process id or child pid is %d\\n", pid);\n    }\n    \n    return 0;\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8731:(n,e,i)=>{i.d(e,{A:()=>o});i(6540);var r=i(6025),s=i(4848);const o=n=>{let{name:e,description:i,children:o}=n;const t=(0,r.Ay)(`/images/${e}.jpg`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:t,alt:t,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:o}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:i})]})}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>d});var r=i(6540);const s={},o=r.createContext(s);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);