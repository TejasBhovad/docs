"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5593],{2918:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=n(5893),r=n(1151),t=n(9163);const d={title:"LS file",sidebar_position:5,description:"List files in directory"},o="Operating System",l={id:"os/ls",title:"LS file",description:"List files in directory",source:"@site/docs/four/os/ls.mdx",sourceDirName:"os",slug:"/os/ls",permalink:"/docs/four/os/ls",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"LS file",sidebar_position:5,description:"List files in directory"},sidebar:"tutorialSidebar",previous:{title:"MOV file",permalink:"/docs/four/os/mov"},next:{title:"Fork",permalink:"/docs/four/os/fork"}},c={},a=[{value:"LS",id:"ls",level:2},{value:"Questions",id:"questions",level:2}];function h(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"operating-system",children:(0,s.jsx)(t.Z,{name:"banner",description:"LS command",children:"Operating System"})}),"\n",(0,s.jsx)(i.h2,{id:"ls",children:"LS"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"ls"})," - list files in folder"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"ls\n"})}),"\n",(0,s.jsx)(i.p,{children:"We use C program to list files in a directory. The program is as follows:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'#include <stdio.h>\n#include <dirent.h>\n#include <sys/types.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n    char *dir_path = argv[1];\n    DIR *dir = opendir(dir_path);\n    if (dir == NULL) {\n        perror("opendir failed");\n        return 1;\n    }\n    struct dirent *entry;\n    while ((entry = readdir(dir)) != NULL) {\n        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {\n            continue;\n        }\n        printf("%s\\n", entry->d_name);\n    }\n    closedir(dir);\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["To compile and run the program, use the following commands(dont copy the ",(0,s.jsx)(i.code,{children:"$"})," sign, it represents the terminal prompt):"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"$ gcc ls.c -o ls\n$ ./ls /path/to/directory\n"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"This will list all the files in the directory specified."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"questions",children:"Questions"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(i.code,{children:"ls"})," command?"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.code,{children:"ls"})," command is used to list files in a directory."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["What is the difference between ",(0,s.jsx)(i.code,{children:"ls"})," and ",(0,s.jsx)(i.code,{children:"ls -a"})," command?"]}),(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"ls"})," command lists all files in a directory whereas ",(0,s.jsx)(i.code,{children:"ls -a"})," lists all files\nincluding hidden files."]})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(i.code,{children:"opendir"})," function?"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.code,{children:"opendir"})," function is used to open a directory stream."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["What is the use of ",(0,s.jsx)(i.code,{children:"readdir"})," function?"]}),(0,s.jsx)("div",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"readdir"})," function is used to read the next entry in the directory stream."]})})]})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9163:(e,i,n)=>{n.d(i,{Z:()=>t});n(7294);var s=n(4996),r=n(5893);const t=e=>{let{name:i,description:n,children:t}=e;const d=(0,s.Z)(`/images/${i}.png`);return(0,r.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,r.jsx)("img",{src:d,alt:d,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,r.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:t}),(0,r.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:n})]})}}}]);