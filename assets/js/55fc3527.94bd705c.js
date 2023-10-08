"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{7861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),d=(t(7294),t(3905)),a=t(814),l=t(4253);const i={sidebar_position:1,description:"Singly Linked List in C"},o="Singly Linked List",s={unversionedId:"c/linkedlist/singly",id:"c/linkedlist/singly",title:"Singly Linked List",description:"Singly Linked List in C",source:"@site/docs/c/linkedlist/singly.mdx",sourceDirName:"c/linkedlist",slug:"/c/linkedlist/singly",permalink:"/docs/c/linkedlist/singly",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Singly Linked List in C"},sidebar:"tutorialSidebar",previous:{title:"LinkedList",permalink:"/docs/category/linkedlist"},next:{title:"Singly Circular Linked List",permalink:"/docs/c/linkedlist/singly-circular"}},c={},u=[{value:"CASES IN INSERTION",id:"cases-in-insertion",level:2},{value:"CASES IN DELETION",id:"cases-in-deletion",level:2},{value:"THEORY",id:"theory",level:2},{value:"Display",id:"display",level:3},{value:"Create Node",id:"create-node",level:3},{value:"Add Node at Start",id:"add-node-at-start",level:3},{value:"Add Node at End",id:"add-node-at-end",level:3},{value:"CODE",id:"code",level:2}],k={toc:u};function p(e){let{components:n,...t}=e;return(0,d.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"singly-linked-list"},"Singly Linked List"),(0,d.kt)("h2",{id:"cases-in-insertion"},"CASES IN INSERTION"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"At Start of linkedlist"),(0,d.kt)("li",{parentName:"ol"},"At End of linkedlist"),(0,d.kt)("li",{parentName:"ol"},"After a defined(key) element"),(0,d.kt)("li",{parentName:"ol"},"Before a defined(key) element")),(0,d.kt)("h2",{id:"cases-in-deletion"},"CASES IN DELETION"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"Delete Elements from Start"),(0,d.kt)("li",{parentName:"ol"},"Delete Elements from End"),(0,d.kt)("li",{parentName:"ol"},"Delete Inputted Elements")),(0,d.kt)("h2",{id:"theory"},"THEORY"),(0,d.kt)("h3",{id:"display"},"Display"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"use a temporary variable","[*current]"," to store value of head in it"),(0,d.kt)("li",{parentName:"ul"},"print the value of data of temporary variable ","[current->data]"),(0,d.kt)("li",{parentName:"ul"},"set temporary variable to next address of temporary variable")),(0,d.kt)("h3",{id:"create-node"},"Create Node"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"a new node is created and required memory is allocated"),(0,d.kt)("li",{parentName:"ul"},"set the next address of this created element to null"),(0,d.kt)("li",{parentName:"ul"},"IF (HEAD==0) ",(0,d.kt)("br",null),"\n-> set head to new node",(0,d.kt)("br",null),"\n-> set temp to new node",(0,d.kt)("br",null)),(0,d.kt)("li",{parentName:"ul"},"INPUT value of data of new node"),(0,d.kt)("li",{parentName:"ul"},"RETURN new node")),(0,d.kt)("h3",{id:"add-node-at-start"},"Add Node at Start"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"IF (HEAD==0)",(0,d.kt)("br",null),"\n-> throw error that linked list is not defined"),(0,d.kt)("li",{parentName:"ul"},"ELSE",(0,d.kt)("br",null),"\n-> set new node to function call to create function",(0,d.kt)("br",null),"\n-> set next address of new node to head",(0,d.kt)("br",null),"\n-> set head to new node",(0,d.kt)("br",null)),(0,d.kt)("li",{parentName:"ul"},"RETURN head")),(0,d.kt)("h3",{id:"add-node-at-end"},"Add Node at End"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"IF (HEAD==0)",(0,d.kt)("br",null),"\n-> throw error that linked list is not defined"),(0,d.kt)("li",{parentName:"ul"},"ELSE",(0,d.kt)("br",null),"\n-> set new node to function call to create function",(0,d.kt)("br",null),"\n-> use a temporary variable and store value of head in it",(0,d.kt)("br",null),"\n-> iterate through the list till you find the last element",(0,d.kt)("br",null),"\n-> set next address of current variable to new node",(0,d.kt)("br",null),"\n-> set temp to new node",(0,d.kt)("br",null)),(0,d.kt)("li",{parentName:"ul"},"RETURN head")),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"More to come...")),(0,d.kt)("h2",{id:"code"},"CODE"),(0,d.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},l.Z))}p.isMDXComponent=!0},4253:(e,n,t)=>{t.d(n,{Z:()=>r});const r='#include <stdio.h>\n#include <stdlib.h>\nstruct NODE\n{\n    int data;\n    struct NODE *next;\n} typedef NODE;\nNODE *head = 0, *newNode;\n\nvoid display()\n{\n    if (head != 0)\n    {\n        NODE *current = head;\n        printf("List: ");\n        while (current != 0)\n        {\n            printf("%d ", current->data);\n            current = current->next;\n        }\n        printf("\\n");\n    }\n}\n\nvoid createNode()\n{\n    newNode = (NODE *)malloc(sizeof(NODE));\n    newNode->next = 0;\n    printf("\\nEnter Value to be Added: ");\n    scanf("%d", &(newNode->data));\n}\n\nvoid addNodeStart()\n{\n    createNode();\n    newNode->next = head;\n    head = newNode;\n}\n\nvoid addNodeEnd()\n{\n    createNode();\n    if (head == 0)\n    {\n        head = newNode;\n    }\n\n    NODE *current = head;\n    while (current->next != 0)\n    {\n        current = current->next;\n    }\n    current->next = newNode;\n    newNode->next = 0;\n}\n\nvoid addNodeAfter()\n{\n    int key;\n    printf("\\nEnter Value to be added after: ");\n    scanf("%d", &key);\n    createNode();\n    NODE *current = head;\n    while (current->data != key)\n    {\n        current = current->next;\n    }\n    newNode->next = current->next;\n    current->next = newNode;\n}\n\nvoid addNodeBefore()\n{\n    int key;\n    printf("\\nEnter Value to be added before: ");\n    scanf("%d", &key);\n    createNode();\n    NODE *current = head, *prev;\n    while (current->data != key)\n    {\n        prev = current;\n        current = current->next;\n    }\n    newNode->next = prev->next;\n    prev->next = newNode;\n}\n\nvoid deleteNodeEnd()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        NODE *current = head, *prev = 0;\n        while (current->next != 0)\n        {\n            prev = current;\n            current = current->next;\n        }\n        printf("\\nRemoved Element: %d\\n", current->data);\n        prev->next = 0;\n        free(current);\n    }\n}\n\nvoid deleteNodeStart()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        printf("\\nRemoved Element: %d\\n", head->data);\n        NODE *current = head;\n        head = current->next;\n        free(current);\n    }\n}\n\nvoid deleteNodeAt()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        int key, ctr = 0;\n        printf("\\nEnter Value to be removed: ");\n        scanf("%d", &key);\n        NODE *current = head, *prev;\n\n        while (current->data != key && current->next != 0)\n        {\n            prev = current;\n            current = current->next;\n            ctr++;\n        }\n        if (ctr == 0)\n        {\n            head = 0;\n            free(current);\n        }\n        else\n        {\n            prev->next = current->next;\n            free(current);\n        }\n    }\n}\n\nint main()\n{\n    int choice;\n    do\n    {\n        printf("\\nENTER CHOICE:");\n        printf("\\n1. Add Node at Start of List");\n        printf("\\n2. Add Node at End of List");\n        printf("\\n3. Add Node after key element");\n        printf("\\n4. Add Node before key element");\n        printf("\\n5. Delete Element from Start");\n        printf("\\n6. Delete Element from End");\n        printf("\\n7. Delete key Element");\n        printf("\\n8. EXIT\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            addNodeStart();\n            display();\n            break;\n        }\n        case 2:\n        {\n            addNodeEnd();\n            display();\n            break;\n        }\n        case 3:\n        {\n            addNodeAfter();\n            display();\n            break;\n        }\n        case 4:\n        {\n            addNodeBefore();\n            display();\n            break;\n        }\n        case 5:\n        {\n            deleteNodeStart();\n            display();\n            break;\n        }\n        case 6:\n        {\n            deleteNodeEnd();\n            display();\n            break;\n        }\n        case 7:\n        {\n            deleteNodeAt();\n            display();\n            break;\n        }\n        case 8:\n        {\n            printf("\\nExited.\\n");\n            break;\n        }\n        default:\n        {\n            printf("\\nInvalid Choice, Try again.\\n");\n            continue;\n        }\n        }\n    } while (choice != 8);\n    return 0;\n}'}}]);