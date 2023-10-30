"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8004],{3785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var n=r(7462),o=(r(7294),r(3905)),s=r(814);const i={sidebar_position:7,description:"Triggers in SQL"},a="Triggers",d={unversionedId:"sql/triggers",id:"sql/triggers",title:"Triggers",description:"Triggers in SQL",source:"@site/docs/sql/triggers.mdx",sourceDirName:"sql",slug:"/sql/triggers",permalink:"/docs/sql/triggers",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Triggers in SQL"},sidebar:"tutorialSidebar",previous:{title:"Joins",permalink:"/docs/sql/joins"},next:{title:"Views",permalink:"/docs/sql/views"}},l={},g=[{value:"Code",id:"code",level:3}],c={toc:g};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"triggers"},"Triggers"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you get ORA-00955: name is already used by an existing object error, you can use the following command to delete the table."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE table_name;\n"))),(0,o.kt)("h3",{id:"code"},"Code"),(0,o.kt)(s.Z,{language:"sql",mdxType:"CodeBlock"},"drop table words;\n-- Step 1: Create the table\ncreate table words (\n    word varchar(10)\n);\n\n-- Step 2: Create the trigger\ncreate or replace trigger trim_word\nbefore insert on words\nfor each row\nbegin\n  :new.word := trim(:new.word);  \nend;\n/\n\n-- Step 3: Insert data into the table\ninsert into words values (' Hello ');\n\n-- Step 4: Query the data\nselect word, length(word) from words;\n"))}p.isMDXComponent=!0}}]);