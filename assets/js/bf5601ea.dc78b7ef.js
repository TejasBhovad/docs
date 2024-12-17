"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[5229],{2403:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>x,frontMatter:()=>p,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Data Structures/stacks/postfix-evaluate","title":"Postfix Evaluation","description":"Postfix Expressions Evaluation","source":"@site/docs/two/Data Structures/stacks/postfix-evaluate.mdx","sourceDirName":"Data Structures/stacks","slug":"/Data Structures/stacks/postfix-evaluate","permalink":"/docs/two/Data Structures/stacks/postfix-evaluate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Postfix Expressions Evaluation"},"sidebar":"tutorialSidebar","previous":{"title":"Infix to Postfix Conversion","permalink":"/docs/two/Data Structures/stacks/postfix-convert"},"next":{"title":"Queues","permalink":"/docs/two/category/queues"}}');var r=e(4848),i=e(8453),o=e(1432);const a="#include <stdio.h>\n#include <ctype.h>\n\nchar stack[100];\nint top = -1;\n\nvoid push(char x)\n{\n    top++;\n    stack[top] = x;\n}\n\nchar pop()\n{\n    if (top == -1)\n    {\n        printf(\"\\nUnderflow Error\");\n        return -1;\n    }\n\n    else\n    {\n\n        return stack[top--];\n    }\n}\n\nint priority(char x)\n{\n    if (x == '(')\n    {\n        return 0;\n    }\n\n    if (x == '+' || x == '-')\n    {\n        return 1;\n    }\n\n    if (x == '*' || x == '/')\n    {\n        return 2;\n    }\n    return 0;\n}\n\nint main()\n{\n    char exp[100];\n    char *e, x;\n    int num;\n    printf(\"Enter the expression : \");\n    scanf(\"%s\", exp);\n    printf(\"\\n\");\n    e = exp;\n\n    while (*e != '\\0')\n    {\n        if (isdigit(*e))\n        {\n            // typecasting\n            num = *e - '0';\n            push(num);\n        }\n        else\n        {\n            int result;\n            int op1 = (int)pop();\n            int op2 = (int)pop();\n            if (*e == '+')\n            {\n                result = op2 + op1;\n            }\n            else if (*e == '-')\n            {\n                result = op2 - op1;\n            }\n            else if (*e == '*')\n            {\n                result = op2 * op1;\n            }\n            else if (*e == '/')\n            {\n                result = op2 / op1;\n            }\n            else if (*e == '%')\n            {\n                result = op2 % op1;\n            }\n            else if (*e == '^')\n            {\n                result = op2 ^ op1;\n            }\n            push((char)result);\n        }\n        e++;\n    }\n\n    printf(\"\\nThe result of expression %s  =  %d\\n\\n\", exp, pop());\n    printf(\"\\n\");\n    return 0;\n}",p={sidebar_position:4,description:"Postfix Expressions Evaluation"},u="Postfix Evaluation",c={},l=[];function f(n){const t={h1:"h1",header:"header",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"postfix-evaluation",children:"Postfix Evaluation"})}),"\n",(0,r.jsx)(o.A,{language:"c",children:a})]})}function x(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(f,{...n})}):f(n)}}}]);