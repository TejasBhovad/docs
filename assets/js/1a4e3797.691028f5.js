"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[2138],{5846:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(6540),a=r(4586);const n=["zero","one","two","few","many","other"];function l(e){return n.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},1283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var s=r(6540),a=r(4586),n=r(7823),l=r(5260),c=r(8774),o=r(1312),u=r(5846),h=r(5391),i=r(6347),d=r(2303);const m=function(){const e=(0,d.A)(),t=(0,i.W6)(),r=(0,i.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,l=n?.get("q")||"",c=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(5891),p=r(2384),f=r(6841),x=r(3810),y=r(7674),j=r(2849),S=r(4471),v=r(1088);const C="searchContextInput_mXoe",w="searchQueryInput_CFBF",A="searchResultItem_U687",P="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",b="searchQueryColumn_q7nx",F="searchContextColumn_oWAF";var R=r(4848);function T(){const{siteConfig:{baseUrl:e}}=(0,a.A)(),{selectMessage:t}=(0,u.W)(),{searchValue:r,searchContext:n,searchVersion:c,updateSearchPath:i,updateSearchContext:d}=m(),[f,x]=(0,s.useState)(r),[y,S]=(0,s.useState)(),[A,P]=(0,s.useState)(),_=`${e}${c}`,T=(0,s.useMemo)((()=>f?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,s.useEffect)((()=>{i(f),y&&(f?y(f,(e=>{P(e)})):P(void 0))}),[f,y]);const I=(0,s.useCallback)((e=>{x(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==f&&x(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.Z)(_,n);S((()=>(0,p.m)(e,t,100)))}()}),[n,_]),(0,R.jsxs)(s.Fragment,{children:[(0,R.jsxs)(l.A,{children:[(0,R.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,R.jsx)("title",{children:T})]}),(0,R.jsxs)("div",{className:"container margin-vert--lg",children:[(0,R.jsx)("h1",{children:T}),(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:(0,h.A)("col",{[b]:Array.isArray(v.Hg),"col--9":Array.isArray(v.Hg),"col--12":!Array.isArray(v.Hg)}),children:(0,R.jsx)("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:I,value:f,autoComplete:"off",autoFocus:!0})}),Array.isArray(v.Hg)?(0,R.jsx)("div",{className:(0,h.A)("col","col--3","padding-left--none",F),children:(0,R.jsxs)("select",{name:"search-context",className:C,id:"context-selector",value:n,onChange:e=>d(e.target.value),children:[(0,R.jsx)("option",{value:"",children:v.dz?(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),v.Hg.map((e=>{let t,r;return"string"==typeof e?t=r=e:({label:t,path:r}=e),(0,R.jsx)("option",{value:r,children:t},r)}))]})}):null]}),!y&&f&&(0,R.jsx)("div",{children:(0,R.jsx)(j.A,{})}),A&&(A.length>0?(0,R.jsx)("p",{children:t(A.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:A.length}))}):(0,R.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,R.jsx)("section",{children:A&&A.map((e=>(0,R.jsx)($,{searchResult:e},e.document.i)))})]})]})}function $(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const l=0===r,o=2===r,u=(l?t.b:s.b).slice(),h=o?t.s:t.t;l||u.push(s.t);let i="";if(v.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,R.jsxs)("article",{className:A,children:[(0,R.jsx)("h2",{children:(0,R.jsx)(c.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.Z)(h,a):(0,x.C)(h,(0,y.g)(n,"t"),a,100)}})}),u.length>0&&(0,R.jsx)("p",{className:P,children:(0,S.$)(u)}),o&&(0,R.jsx)("p",{className:_,dangerouslySetInnerHTML:{__html:(0,x.C)(t.t,(0,y.g)(n,"t"),a,100)}})]})}const I=function(){return(0,R.jsx)(n.A,{children:(0,R.jsx)(T,{})})}}}]);