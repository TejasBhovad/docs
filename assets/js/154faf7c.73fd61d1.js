"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8061],{5532:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=i(5893),o=i(1151),t=i(9163);const s={title:"C Program for MOV LS",sidebar_position:3,description:"C Program for MOV LS"},d="Operating System",a={id:"os/journal/3",title:"C Program for MOV LS",description:"C Program for MOV LS",source:"@site/docs/four/os/journal/3.mdx",sourceDirName:"os/journal",slug:"/os/journal/3",permalink:"/docs/four/os/journal/3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"C Program for MOV LS",sidebar_position:3,description:"C Program for MOV LS"},sidebar:"tutorialSidebar",previous:{title:"Shell Commands",permalink:"/docs/four/os/journal/2"},next:{title:"fork system call",permalink:"/docs/four/os/journal/4"}},l={},c=[];function p(n){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"operating-system",children:(0,r.jsx)(t.Z,{name:"banner",description:"C programs for file manipulation",children:"Operating System"})}),"\n",(0,r.jsx)(e.h1,{id:"mov",children:"MOV"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'#include<sys/types.h>\n#include<sys/stat.h>\n#include<stdio.h>\n#include<unistd.h>\n#include<fcntl.h>\nint main( int argc,char *argv[] )\n{\nint i,fd1,fd2;\nchar *file1,*file2,buf[2];\nfile1=argv[1];\nfile2=argv[2];\nprintf("file1=%s file2=%s",file1,file2);\nfd1=open(file1,O_RDONLY,0777);\nfd2=creat(file2,0777);\nwhile(i==read(fd1,buf,1)>0)\nwrite(fd2,buf,1);\nremove(file1);\nclose(fd1);\nclose(fd2);\n}\n'})}),"\n",(0,r.jsx)(e.h1,{id:"ls",children:"LS"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <dirent.h>\n#include <errno.h>\n#include <stdlib.h>\n\nvoid _ls(const char *dir, int op_a, int op_l) {\n    // Here we will list the directory\n    struct dirent *d;\n    DIR *dh = opendir(dir);\n\n    if (!dh) {\n        if (errno == ENOENT) {\n            // If the directory is not found\n            perror("Directory doesn\'t exist");\n        } else {\n            // If the directory is not readable then throw error and exit\n            perror("Unable to read directory");\n        }\n        exit(EXIT_FAILURE);\n    }\n\n    // While the next entry is not NULL, we will print directory files\n    while ((d = readdir(dh)) != NULL) {\n        // If hidden files are found and op_a is not set, skip\n        if (!op_a && d->d_name[0] == \'.\')\n            continue;\n\n        printf("%s ", d->d_name);\n        if (op_l) printf("\\n");\n    }\n\n    if (!op_l)\n        printf("\\n");\n\n    closedir(dh);\n}\n\nint main(int argc, const char *argv[]) {\n    if (argc == 1) {\n        _ls(".", 0, 0);\n    } else if (argc == 2) {\n        if (argv[1][0] == \'-\') {\n            // Checking if option is passed\n            // Options supporting: a, l\n            int op_a = 0, op_l = 0;\n            char *p = (char *)(argv[1] + 1);\n\n            while (*p) {\n                if (*p == \'a\') op_a = 1;\n                else if (*p == \'l\') op_l = 1;\n                else {\n                    perror("Option not available");\n                    exit(EXIT_FAILURE);\n                }\n                p++;\n            }\n\n            _ls(".", op_a, op_l);\n        }\n    }\n    return 0;\n}\n\n\n'})})]})}function f(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},9163:(n,e,i)=>{i.d(e,{Z:()=>t});i(7294);var r=i(4996),o=i(5893);const t=n=>{let{name:e,description:i,children:t}=n;const s=(0,r.ZP)(`/images/${e}.png`);return(0,o.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,o.jsx)("img",{src:s,alt:s,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,o.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:t}),(0,o.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:i})]})}},1151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>s});var r=i(7294);const o={},t=r.createContext(o);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);