import{O as _e,D as ge,_ as Z,b as me,h as ke,a as Q,i as fe,e as he,f as be,d as K,u as Se,S as ne}from"./coreSfc.9a94c9d2.js";import{_ as q,d as W,a as u,b as g,g as n,F as V,h as H,e as k,w as O,t as U,u as j,r,c as z,f as L,i as w,j as P,E as ye,p as le,k as ue,M as N,a1 as xe,o as G,L as ae,l as Ce,B as se}from"./index.e20698b8.js";const $e={class:"bookmark"},Fe={class:"bookmark-list"},Be=["onClick"],Ee=W({__name:"Bookmark",props:{bookmarks:{type:Array,required:!0}},emits:["jump","update"],setup(f,{emit:F}){const d=s=>{ge("\u662F\u5426\u5220\u9664\u8BE5\u4E66\u7B7E\uFF1F").then(S=>{if(S==="confirm"){const _=localStorage.getItem("txt_reader_bookmarks"),h=(_?JSON.parse(_):[]).filter(c=>c!==s);localStorage.setItem("txt_reader_bookmarks",JSON.stringify(h)),F("update",h)}})};return(s,S)=>(u(),g("div",$e,[n("div",Fe,[(u(!0),g(V,null,H(f.bookmarks,(_,v)=>(u(),g("div",{class:"item",key:v,onClick:h=>F("jump",_)},[k(j(_e),{onTrigger:h=>d(_)},{default:O(()=>[n("p",null,U(_),1)]),_:2},1032,["onTrigger"])],8,Be))),128))])]))}});var De=q(Ee,[["__scopeId","data-v-0c6d625c"]]);const Te={class:"search"},we={key:0,class:"result-info"},Oe={key:0},Le={key:1},Pe={class:"result-list"},Ae=["innerHTML","onClick"],Ve=W({__name:"Search",props:{paragraphsData:{type:Object,required:!0}},emits:["jump"],setup(f,{emit:F}){const d=f,s=r(""),S=r(!1),_=r([]),v=z(()=>_.value.length>300?[]:_.value.map(p=>{const m=p.content.replaceAll(s.value,`<span style="background-color: #ffff3a;">${s.value}</span>`);return{...p,contentHTML:m}})),h=()=>{_.value=d.paragraphsData.filter(p=>p.content.indexOf(s.value)!==-1),S.value=!0},c=()=>{_.value.length&&(_.value=[]),S.value=!1,s.value=""};return(p,m)=>{const E=Z,D=me;return u(),g("div",Te,[k(D,{class:"search-input",placeholder:"\u641C\u7D22",modelValue:s.value,"onUpdate:modelValue":m[2]||(m[2]=x=>s.value=x),hint:!1},{"append-icon":O(()=>[s.value?(u(),L(E,{key:0,name:"window-close",onClick:m[0]||(m[0]=x=>c()),style:{"margin-right":"10px"}})):w("",!0),k(E,{name:"magnify",onClick:m[1]||(m[1]=x=>h())})]),_:1},8,["modelValue"]),S.value?(u(),g("div",we,[P(" \u68C0\u7D22\u5230\u7ED3\u679C "+U(_.value.length)+" \u6761\u3002 ",1),_.value.length>300?(u(),g("span",Oe,"\u5339\u914D\u7ED3\u679C\u8FC7\u591A\uFF0C\u8BF7\u66F4\u6362\u5173\u952E\u8BCD\u641C\u7D22\u3002")):_.value.length>0?(u(),g("span",Le,"\u70B9\u51FB\u8DF3\u8F6C\u5230\u5BF9\u5E94\u4F4D\u7F6E\u3002")):w("",!0)])):w("",!0),n("div",Pe,[(u(!0),g(V,null,H(j(v),x=>(u(),g("p",{class:"item",key:x.start,innerHTML:x.contentHTML,onClick:I=>F("jump",x.content)},null,8,Ae))),128))])])}}});var He=q(Ve,[["__scopeId","data-v-6dbadbdd"]]);const J=f=>(le("data-v-ea550f0a"),f=f(),ue(),f),Ie={class:"setting"},Me={class:"setting-item"},je=J(()=>n("div",{class:"label"},"\u9605\u8BFB\u6A21\u5F0F",-1)),Ne={class:"setting-item"},Je=J(()=>n("div",{class:"label"},"\u4E3B\u9898",-1)),Re={class:"theme-options"},ze=["onClick"],Ue=P("Aa "),qe={key:0},We={class:"setting-item"},Xe=J(()=>n("div",{class:"label"},"\u5B57\u53F7",-1)),Ye={class:"setting-item"},Ke=J(()=>n("div",{class:"label"},"\u884C\u9AD8",-1)),Ge={class:"setting-item"},Qe=J(()=>n("div",{class:"label"},"\u6BB5\u95F4\u8DDD",-1)),Ze=W({__name:"Setting",props:{setting:{type:Object,required:!0}},emits:["update"],setup(f,{emit:F}){const d=f,s=r(d.setting.color),S=r(d.setting.background),_=[{color:"#111",background:"#fff"},{color:"#eee",background:"#222"},{color:"#000",background:"#f1f1f1"},{color:"#111",background:"#e9d8bc"},{color:"#111",background:"#c5e7cf"}],v=r(d.setting.fontSize),h=r([13,14,15,16,18,20,22]),c=r(d.setting.lineHight),p=r([1,1.2,1.5,1.75,2]),m=r(d.setting.paragraphSpacing),E=r([10,12,15,18,20,25]),D=r(d.setting.model),x=r([{key:"scroll",label:"\u6EDA\u52A8"},{key:"click",label:"\u70B9\u51FB"}]);return ye([s,S,v,c,m,D],()=>{const I=localStorage.getItem("txt_reader_setting"),B={...I?JSON.parse(I):Q,color:s.value,background:S.value,fontSize:v.value,lineHight:c.value,paragraphSpacing:m.value,model:D.value};localStorage.setItem("txt_reader_setting",JSON.stringify(B)),F("update",B)}),(I,$)=>{const B=fe,A=ke,ee=Z;return u(),g("div",Ie,[n("div",Me,[je,k(A,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:D.value,"onUpdate:modelValue":$[0]||($[0]=l=>D.value=l)},{default:O(()=>[(u(!0),g(V,null,H(x.value,l=>(u(),L(B,{label:l.label,value:l.key},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),n("div",Ne,[Je,n("div",Re,[(u(),g(V,null,H(_,(l,X)=>n("div",{class:"theme-option",key:X,style:N({color:l.color,backgroundColor:l.background}),onClick:()=>{s.value=l.color,S.value=l.background}},[Ue,s.value===l.color&&S.value===l.background?(u(),g("span",qe,[k(ee,{name:"check",size:12})])):w("",!0)],12,ze)),64))])]),n("div",We,[Xe,k(A,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:v.value,"onUpdate:modelValue":$[1]||($[1]=l=>v.value=l)},{default:O(()=>[(u(!0),g(V,null,H(h.value,l=>(u(),L(B,{label:l,value:l},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),n("div",Ye,[Ke,k(A,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:c.value,"onUpdate:modelValue":$[2]||($[2]=l=>c.value=l)},{default:O(()=>[(u(!0),g(V,null,H(p.value,l=>(u(),L(B,{label:l,value:l},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),n("div",Ge,[Qe,k(A,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:m.value,"onUpdate:modelValue":$[3]||($[3]=l=>m.value=l)},{default:O(()=>[(u(!0),g(V,null,H(E.value,l=>(u(),L(B,{label:l,value:l},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])])])}}});var et=q(Ze,[["__scopeId","data-v-ea550f0a"]]);const R=f=>(le("data-v-4c9ed2f4"),f=f(),ue(),f),tt={class:"title"},ot={class:"progress"},nt=["innerHTML"],at=P(),st=R(()=>n("span",null,"\u8FD4\u56DE",-1)),lt=P(),ut=R(()=>n("span",null,"\u4E66\u7B7E",-1)),rt=P(),ct=R(()=>n("span",null,"\u67E5\u627E",-1)),it=P(),dt=R(()=>n("span",null,"\u8BBE\u7F6E",-1)),pt={key:0,class:"util-panel"},vt={class:"util-panel-header"},_t=R(()=>n("span",null,"\u8FD4\u56DE",-1)),gt={class:"bookmark-popup"},mt=P("\u6DFB\u52A0\u4E66\u7B7E"),kt=P("\u67E5\u770B\u4E66\u7B7E"),ft=W({__name:"index",setup(f){const{params:F}=xe(),d=r(!1),s=r(Q),S=z(()=>({"--lineHight":`${s.value.lineHight}`,"--paragraphSpacing":`${s.value.paragraphSpacing}px`}));G(()=>{const t=localStorage.getItem("txt_reader_setting");s.value=t?JSON.parse(t):Q});const v=r(""),h=r(!1),c=r(),p=r(),m=r([]),E=r(0),D=r(""),x=z(()=>{var t;return((t=c.value)==null?void 0:t.progress)||0}),I=z(()=>{var t;return((t=c.value)==null?void 0:t.progressText)||""}),$=t=>{const e=t.replace(/[\n\r]+/g,"<br>").split("<br>"),a=[];for(const i of e){const b=a[a.length-1],o=b?b.end+1:0,C=o+i.length;a.push({start:o,end:C,content:i})}m.value=a},B=()=>{const t=x.value*E.value,e=8e3,a=t-e<0?0:t-e,i=t+e,b=[];let o=!1;for(const C of m.value)if(o||C.start<=a&&a<=C.end&&(o=!0),o&&b.push(C),C.start<=i&&i<=C.end)break;return b},A=()=>{const t=B();let e="";for(const a of t)e+=`<p data-range="${a.start}~${a.end}">${a.content}</p>`;D.value=e,se(()=>{const a=Array.from(p.value.querySelectorAll("p")).find(i=>{var b;return(b=i.textContent)==null?void 0:b.includes(I.value)});a&&a.scrollIntoView()})};G(()=>{K.txtList.where("id").equals(F.id).toArray().then(t=>{c.value=t[0],$(c.value.content),E.value=c.value.content.replace(/[\n\r]+/g,"").length,A()})});const l=()=>{const t=B(),e=t[0],a=t[t.length-1],i=p.value.querySelectorAll("p");i.forEach(y=>{const[T,ve]=y.dataset.range.split("~");+ve<e.start&&p.value.removeChild(y),+T>a.end&&p.value.removeChild(y)});const o=i[i.length-1].dataset.range.split("~")[1],oe=i[0].dataset.range.split("~")[0];if(e.start>=+oe){for(const y of t)if(y.start>+o){const T=document.createElement("p");T.setAttribute("data-range",`${y.start}~${y.end}`),T.innerHTML=y.content,p.value.appendChild(T)}}else for(const y of t.reverse())if(y.end<+oe){const T=document.createElement("p");T.setAttribute("data-range",`${y.start}~${y.end}`),T.innerHTML=y.content,p.value.insertBefore(T,p.value.children[0])}},X=Se(()=>{const t=document.elementFromPoint(20,d.value?35:5);if(!t)return;const e=t.innerHTML.replace(/<[^>]+>/g,""),i=+(c.value.content.replace(/[\n\r]+/g,"").indexOf(e)/E.value).toFixed(4);K.txtList.update(F.id,{progress:i,progressText:e}).then(()=>{c.value={...c.value,progress:i,progressText:e},l()})},1e3,{maxWait:1e4}),re=t=>{const e=document.body.clientWidth,a=document.body.clientHeight,i=t.pageX,b=t.pageY;if(s.value.model==="scroll"){const o=a*.35,C=a*.65;d.value?d.value=!1:b>=o&&b<=C&&(d.value=!0)}else{const o=e*.35,C=e*.65;i<o?p.value.scrollTop=p.value.scrollTop-(a-30):i>C?p.value.scrollTop=p.value.scrollTop+(a-30):d.value=!d.value}},ce=t=>{s.value.model==="click"&&t.preventDefault()},te=t=>{v.value="",se(()=>{const a=+(c.value.content.replace(/[\n\r]+/g,"").indexOf(t)/E.value).toFixed(4);K.txtList.update(F.id,{progress:a,progressText:t}).then(()=>{c.value={...c.value,progress:a,progressText:t},A()})})},M=r([]);G(()=>{const t=localStorage.getItem("txt_reader_bookmarks");t&&(M.value=JSON.parse(t))});const Y=r(""),ie=()=>{const t=document.elementFromPoint(20,d.value?35:5);!t||(Y.value=t.innerHTML.replace(/<[^>]+>/g,""),h.value=!0)},de=()=>{h.value=!1,v.value="bookmark"},pe=()=>{if(M.value.includes(Y.value)){ne("\u8BF7\u52FF\u91CD\u590D\u6DFB\u52A0\u4E66\u7B7E\uFF01");return}const t=localStorage.getItem("txt_reader_bookmarks"),e=t?JSON.parse(t):[];M.value=[...e,Y.value],localStorage.setItem("txt_reader_bookmarks",JSON.stringify(M.value)),h.value=!1,ne("\u5DF2\u6DFB\u52A0\u5F53\u524D\u4F4D\u7F6E\u5230\u4E66\u7B7E\uFF01")};return(t,e)=>{const a=Z,i=he,b=be;return c.value?(u(),g("div",{key:0,class:"reader",style:N(j(S))},[n("div",{class:ae(["header",{show:d.value}]),style:N({color:s.value.color,backgroundColor:s.value.background})},[n("span",tt,U(c.value.title),1),n("span",ot,U((j(x)*100).toFixed(2))+"%",1)],6),n("div",{class:"content",ref_key:"contentRef",ref:p,innerHTML:D.value,onClick:e[0]||(e[0]=o=>re(o)),onScroll:e[1]||(e[1]=o=>j(X)()),onTouchmove:e[2]||(e[2]=o=>ce(o)),style:N({color:s.value.color,backgroundColor:s.value.background,fontSize:s.value.fontSize+"px"})},null,44,nt),n("div",{class:ae(["menu",{show:d.value}]),style:N({color:s.value.color,backgroundColor:s.value.background})},[n("div",{class:"menu-item",onClick:e[3]||(e[3]=o=>j(Ce).push("/"))},[k(a,{name:"chevron-left"}),at,st]),n("div",{class:"menu-item",onClick:e[4]||(e[4]=o=>ie())},[k(a,{name:"star-outline"}),lt,ut]),n("div",{class:"menu-item",onClick:e[5]||(e[5]=o=>v.value="search")},[k(a,{name:"magnify"}),rt,ct]),n("div",{class:"menu-item",onClick:e[6]||(e[6]=o=>v.value="setting")},[k(a,{name:"menu"}),it,dt])],6),v.value?(u(),g("div",pt,[n("div",vt,[n("div",{class:"btn",onClick:e[7]||(e[7]=o=>v.value="")},[k(a,{name:"chevron-left"}),_t])]),v.value==="bookmark"?(u(),L(De,{key:0,bookmarks:M.value,onJump:e[8]||(e[8]=o=>te(o)),onUpdate:e[9]||(e[9]=o=>M.value=o)},null,8,["bookmarks"])):w("",!0),v.value==="search"?(u(),L(He,{key:1,paragraphsData:m.value,onJump:e[10]||(e[10]=o=>te(o))},null,8,["paragraphsData"])):w("",!0),v.value==="setting"?(u(),L(et,{key:2,setting:s.value,onUpdate:e[11]||(e[11]=o=>s.value=o)},null,8,["setting"])):w("",!0)])):w("",!0),k(b,{show:h.value,"onUpdate:show":e[14]||(e[14]=o=>h.value=o)},{default:O(()=>[n("div",gt,[k(i,{class:"btn",type:"primary",onClick:e[12]||(e[12]=o=>pe())},{default:O(()=>[mt]),_:1}),k(i,{class:"btn",type:"primary",onClick:e[13]||(e[13]=o=>de())},{default:O(()=>[kt]),_:1})])]),_:1},8,["show"])],4)):w("",!0)}}});var yt=q(ft,[["__scopeId","data-v-4c9ed2f4"]]);export{yt as default};
