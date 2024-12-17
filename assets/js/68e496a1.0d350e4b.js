"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3493],{8285:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"os/Shellscript","title":"Shell script","description":"scripting language for Linux","source":"@site/docs/four/os/Shellscript.mdx","sourceDirName":"os","slug":"/os/Shellscript","permalink":"/docs/four/os/Shellscript","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Shell script","sidebar_position":3,"description":"scripting language for Linux"},"sidebar":"tutorialSidebar","previous":{"title":"Linux Commands","permalink":"/docs/four/os/Basics"},"next":{"title":"MOV file","permalink":"/docs/four/os/mov"}}');var l=s(4848),r=s(8453),t=s(8731);const c={title:"Shell script",sidebar_position:3,description:"scripting language for Linux"},a="Operating System",h={},o=[{value:"Shell script",id:"shell-script",level:2},{value:"Shell Script Example",id:"shell-script-example",level:2},{value:"Executing Shell Scripts",id:"executing-shell-scripts",level:2},{value:"Shell Variables",id:"shell-variables",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"operating-system",children:(0,l.jsx)(t.A,{name:"banner",description:"Shellscript",children:"Operating System"})})}),"\n",(0,l.jsx)(n.h2,{id:"shell-script",children:"Shell script"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shell script is a computer program designed to be run by the Unix/Linux shell which could be one of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The Bourne Shell"}),"\n",(0,l.jsx)(n.li,{children:"The C Shell"}),"\n",(0,l.jsx)(n.li,{children:"The Korn Shell"}),"\n",(0,l.jsx)(n.li,{children:"The GNU Bourne-Again Shell"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A shell is a command-line interpreter and typical operations performed by shell scripts include file manipulation, program execution, and printing text."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shell scripts are also employed extensively in the default installations of Unix-like operating systems."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shell scripts are executed by a shell process."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shell scripts often serve as convenient wrappers around UNIX commands."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"They automate sequences of UNIX commands that would otherwise be time-consuming to type into the keyboard."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A shell script is a text file containing shell commands."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"shell-script-example",children:"Shell Script Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"# This is a comment!\necho Hello World        # This is a comment, too!\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The first line tells Unix that the file is to be executed by /bin/bash."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"This is a comment. The second line is also a comment."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The third line actually does something. It asks that the words Hello World be printed."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The #! characters are magic to Unix. They are the characters that tell Unix that what follows is the name of the program (or programs in the case of a pipeline)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The # character begins a comment, and Unix ignores the rest of the line."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'The echo command prints its arguments, in this case, the words "Hello World".'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The echo command is one of the most basic and frequently used commands in Linux."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"executing-shell-scripts",children:"Executing Shell Scripts"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"To execute the script from the current directory, you can run:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"$ ./hello.sh\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"this wont run unless you give it permission to run"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"$ chmod +x hello.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"shell-variables",children:"Shell Variables"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A shell variable is a special variable that is set by the shell and is required by the shell in order to function correctly."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Some of these variables are environment variables whereas others are local variables."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A local variable is a variable that is present within the current instance of the shell."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"It is not available to programs that are started by the shell."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"They are set at the command prompt."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To set a local variable, use the following syntax \u2212"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"variable_name=variable_value\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"To access a local variable, use the following syntax \u2212"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"$variable_name\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'NAME="Zara Ali"\necho $NAME\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8731:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var i=s(6025),l=s(4848);const r=e=>{let{name:n,description:s,children:r}=e;const t=(0,i.Ay)(`/images/${n}.jpg`);return(0,l.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,l.jsx)("img",{src:t,alt:t,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,l.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,l.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:s})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);