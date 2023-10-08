"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9130],{2357:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=t(7462),i=(t(7294),t(3905));const n=t.p+"assets/images/exp_1a-8ae16b0c31eea228416b8f77abbaf5f3.png",s=t.p+"assets/images/exp_1b-3fbcdaab79fdb891bb19e5ff59b16a45.png",o=t.p+"assets/images/exp_1c-f6edbc293dfd5ddceb1ec842affe85e7.png";var l=t(814);const c={sidebar_position:2,description:"Basic plotting in R"},p="Experiment 1",d={unversionedId:"R/Experiment_1",id:"R/Experiment_1",title:"Experiment 1",description:"Basic plotting in R",source:"@site/docs/R/Experiment_1.mdx",sourceDirName:"R",slug:"/R/Experiment_1",permalink:"/docs/R/Experiment_1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Basic plotting in R"},sidebar:"tutorialSidebar",previous:{title:"R Scripts",permalink:"/docs/category/r-scripts"},next:{title:"Experiment 2",permalink:"/docs/R/Experiment_2"}},m={},g=[{value:"CODE",id:"code",level:2},{value:"Pie Chart",id:"pie-chart",level:3},{value:"Bar Chart",id:"bar-chart",level:3},{value:"Histogram",id:"histogram",level:3}],b={toc:g};function h(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"experiment-1"},"Experiment 1"),(0,i.kt)("p",null,"Basic plotting in R"),(0,i.kt)("h2",{id:"code"},"CODE"),(0,i.kt)("h3",{id:"pie-chart"},"Pie Chart"),(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},'# Sample data for the pie chart\nlabels <- c("Category 1", "Category 2", "Category 3", "Category 4", "Category 5")\nvalues <- c(30, 20, 15, 10, 25)\n\n# Create a pie chart\npie(values, labels = labels, col = rainbow(length(labels)), main = "Sample Pie Chart")\n\n'),(0,i.kt)("img",{src:n,width:500}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"bar-chart"},"Bar Chart"),(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},'# Sample data for the bar chart\ncategories <- c("Category 1", "Category 2", "Category 3", "Category 4", "Category 5")\nvalues <- c(40, 10, 35, 10, 15)\n\n# Create a bar chart\nbarplot(values, names.arg = categories, col = "blue", main = "Sample Bar Chart", xlab = "Categories", ylab = "Values")\n\n'),(0,i.kt)("img",{src:s,width:500}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},'# Sample data for the histogram\ndata <- c(23, 45, 34, 26, 33, 13, 12, 55, 67, 39, 54, 17, 35, 23, 56, 78, 90, 34, 67, 78)\n\n# Create a histogram\nhist(data, breaks = "FD", col = "lightgreen", main = "Sample Histogram", xlab = "Values", ylab = "Frequency")'),(0,i.kt)("img",{src:o,width:500}))}h.isMDXComponent=!0}}]);