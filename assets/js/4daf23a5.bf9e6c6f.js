"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[2485],{347:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var i=t(5893),r=t(1151);const d={},o="Patterns in C",c={id:"c/patterns/programs",title:"Patterns in C",description:"1. WAP to print the given pattern",source:"@site/docs/one/c/patterns/programs.md",sourceDirName:"c/patterns",slug:"/c/patterns/programs",permalink:"/docs/one/c/patterns/programs",draft:!1,unlisted:!1,editUrl:"https://github.com/TejasBhovad/docs/docs/one/c/patterns/programs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Array Programs",permalink:"/docs/one/c/arrays/programs"},next:{title:"Pointers in C",permalink:"/docs/one/c/pointers/"}},a={},l=[{value:"1. WAP to print the given pattern",id:"1-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code",level:4},{value:"2. WAP to print the given pattern",id:"2-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-1",level:4},{value:"3. WAP to print the given pattern",id:"3-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-2",level:4},{value:"4. WAP to print the given pattern",id:"4-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-3",level:4},{value:"5. WAP to print the given pattern",id:"5-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-4",level:4},{value:"6. WAP to print the given pattern",id:"6-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-5",level:4},{value:"7. WAP to print the given pattern",id:"7-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-6",level:4},{value:"8. WAP to print the given pattern",id:"8-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-7",level:4},{value:"9. WAP to print the given pattern",id:"9-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-8",level:4},{value:"10. WAP to print the given pattern",id:"10-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-9",level:4},{value:"11. WAP to print the given pattern",id:"11-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-10",level:4},{value:"12. WAP to print the given pattern",id:"12-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-11",level:4},{value:"13. WAP to print the given pattern",id:"13-wap-to-print-the-given-pattern",level:3},{value:"Code:",id:"code-12",level:4},{value:"14. WAP to print the given pattern [Floyd&#39;s Triangle]",id:"14-wap-to-print-the-given-pattern-floyds-triangle",level:3},{value:"Code:",id:"code-13",level:4}];function p(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"patterns-in-c",children:"Patterns in C"}),"\n",(0,i.jsx)(e.h3,{id:"1-wap-to-print-the-given-pattern",children:"1. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1\n12\n123\n1234\n12345\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"2-wap-to-print-the-given-pattern",children:"2. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"12345\n1234\n123\n12\n1\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-1",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = n; i >= 1; i--)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"3-wap-to-print-the-given-pattern",children:"3. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1\n21\n321\n4321\n54321\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-2",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = i; j >= 1; j--)\n        {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"4-wap-to-print-the-given-pattern",children:"4. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"54321\n4321\n321\n21\n1\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-3",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = n; i >= 1; i--)\n    {\n        for (int j = i; j >= 1; j--)\n        {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"5-wap-to-print-the-given-pattern",children:"5. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1\n22\n333\n4444\n55555\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-4",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%d", i);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"6-wap-to-print-the-given-pattern",children:"6. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"55555\n4444\n333\n22\n1\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-5",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = n; i >= 1; i--)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%d", i);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"7-wap-to-print-the-given-pattern",children:"7. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"*\n**\n***\n****\n*****\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-6",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"8-wap-to-print-the-given-pattern",children:"8. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    *\n   **\n  ***\n ****\n*****\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-7",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= n - i; j++)\n        {\n            printf(" ");\n        }\n        for (int k = 1; k <= i; k++)\n        {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"9-wap-to-print-the-given-pattern",children:"9. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    *\n   ***\n  *****\n *******\n*********\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-8",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= n - i; j++)\n        {\n            printf(" ");\n        }\n        for (int k = 1; k <= i; k++)\n        {\n            printf("*");\n        }\n        for (int m = 1; m <= i - 1; m++)\n        {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"10-wap-to-print-the-given-pattern",children:"10. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"A\nAB\nABC\nABCD\nABCDE\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-9",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        char ch = \'A\';\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%c", ch);\n            ch++;\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"11-wap-to-print-the-given-pattern",children:"11. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"A\nBB\nCCC\nDDDD\nEEEEE\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-10",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    char ch = \'A\';\n    for (int i = 1; i <= n; i++)\n    {\n\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%c", ch);\n        }\n        ch++;\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"12-wap-to-print-the-given-pattern",children:"12. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    1\n   121\n  12321\n 1234321\n123454321\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-11",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= n - i; j++)\n        {\n            printf(" ");\n        }\n        for (int k = 1; k <= i; k++)\n        {\n            printf("%d", k);\n        }\n        for (int m = i - 1; m >= 1; m--)\n        {\n            printf("%d", m);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"13-wap-to-print-the-given-pattern",children:"13. WAP to print the given pattern"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    *\n   * *\n  * * *\n * * * *\n* * * * *\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-12",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= n - i; j++)\n        {\n            printf(" ");\n        }\n        for (int k = 1; k <= i; k++)\n        {\n            printf("* ");\n        }\n\n        printf("\\n");\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"14-wap-to-print-the-given-pattern-floyds-triangle",children:"14. WAP to print the given pattern [Floyd's Triangle]"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1\n23\n456\n78910\n"})}),"\n",(0,i.jsx)(e.h4,{id:"code-13",children:"Code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\nint main()\n{\n    int n = 5, ctr = 1;\n    for (int i = 1; i <= n; i++)\n    {\n        for (int j = 1; j <= i; j++)\n        {\n            printf("%d", ctr);\n            ctr++;\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>o});var i=t(7294);const r={},d=i.createContext(r);function o(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);