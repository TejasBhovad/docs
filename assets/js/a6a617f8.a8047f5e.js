"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[245],{3574:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>f,toc:()=>x});var e=i(7462),r=(i(7294),i(3905)),o=i(814),s=i(3542);const p={sidebar_position:3,description:"Convert Infix to Postfix Expression"},a="Infix to Postfix",f={unversionedId:"journal/infix-postfix",id:"journal/infix-postfix",title:"Infix to Postfix",description:"Convert Infix to Postfix Expression",source:"@site/docs/journal/infix-postfix.mdx",sourceDirName:"journal",slug:"/journal/infix-postfix",permalink:"/docs/journal/infix-postfix",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Convert Infix to Postfix Expression"},sidebar:"tutorialSidebar",previous:{title:"Stacks",permalink:"/docs/journal/stack"},next:{title:"Circular Queues",permalink:"/docs/journal/circular-queues"}},c={},x=[],u={toc:x};function l(n){let{components:t,...i}=n;return(0,r.kt)("wrapper",(0,e.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"infix-to-postfix"},"Infix to Postfix"),(0,r.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},s.Z))}l.isMDXComponent=!0},3542:(n,t,i)=>{i.d(t,{Z:()=>e});const e='#include <stdio.h>\n#include <ctype.h>\n\nchar stack[100];\nint top = -1;\n\nvoid push(char x)\n{\n  top++;\n  stack[top] = x;\n}\n\nvoid display(char *ptr)\n{\n  printf("\\nElements in Stack:\\n");\n  for (int i = 0; i <= top; i++)\n  {\n    printf(" %d", *(ptr + i));\n  }\n}\n\nchar pop()\n{\n  if (top == -1)\n  {\n    printf("\\nUnderflow Error");\n    return -1;\n  }\n\n  else\n  {\n\n    return stack[top--];\n  }\n}\n\nint priority(char x)\n{\n  if (x == \'+\' || x == \'-\')\n  {\n    return 1;\n  }\n\n  if (x == \'*\' || x == \'/\' || x == \'%\')\n  {\n    return 2;\n  }\n  return 0;\n}\n\nint main()\n{\n  char exp[100];\n  char *e, x;\n  printf("Enter the expression : ");\n  scanf("%s", exp);\n  printf("\\n");\n  e = exp;\n\n  while (*e != \'\\0\')\n  {\n    if (isalnum(*e))\n    {\n      printf("%c ", *e);\n    }\n\n    else if (*e == \'(\')\n    {\n      push(*e);\n    }\n\n    else if (*e == \')\')\n    {\n      while ((x = pop()) != \'(\')\n      {\n        printf("%c ", x);\n      }\n    }\n    else\n    {\n      if (priority(*e) <= priority(stack[top]))\n      {\n        printf("%c ", pop());\n      }\n\n      push(*e);\n    }\n    e++;\n  }\n  while (top != -1)\n  {\n    printf("%c ", pop());\n  }\n\n  printf("\\n");\n  return 0;\n}\n'}}]);