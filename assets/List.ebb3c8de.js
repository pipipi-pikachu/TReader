import{d as f,a as O,D as P,S as R,_ as K,b as j,c as H,e as J,f as X,g as q,O as G}from"./coreSfc.9a94c9d2.js";import{_ as Q,d as W,r as l,o as Y,c as Z,a as r,b as h,e as a,w as d,f as L,g as n,t as g,F as ee,h as te,u as B,i as se,j as D,p as oe,k as ae,l as ne}from"./index.e20698b8.js";const ue=y=>(oe("data-v-1bca3536"),y=y(),ae(),y),le={class:"list"},ie=D(),re={class:"modify-popup"},de={class:"btns"},ce=D("\u53D6\u6D88"),pe=D("\u786E\u8BA4"),ve=ue(()=>n("div",{class:"divider"},null,-1)),_e={class:"content"},me=["onClick"],fe={class:"title"},he={class:"info"},ge={class:"left"},ye={class:"create-time"},Fe={class:"size"},we={class:"progress"},Se={key:0,class:"empty"},xe={key:1,class:"empty"},Te=W({__name:"List",setup(y){const u=l([]);Y(()=>{f.txtList.toArray().then(e=>u.value=e),localStorage.getItem("txt_reader_setting")||localStorage.setItem("txt_reader_setting",JSON.stringify(O))});const k={access:"\u6700\u540E\u9605\u8BFB\u65F6\u95F4",create:"\u6700\u540E\u6DFB\u52A0\u65F6\u95F4"},F=l("access"),A=l(!1),b=[{key:"access",name:k.access},{key:"create",name:k.create}],V=s=>{F.value=s.key},i=l(),C=l(!1),v=l(!1),I=[{key:"modify",name:"\u4FEE\u6539",handler:()=>{c.value=i.value.title,v.value=!0}},{key:"delete",name:"\u5220\u9664",handler:()=>{P(`\u662F\u5426\u5220\u9664\u3010${i.value.title}\u3011\uFF1F`).then(s=>{s==="confirm"&&(u.value=u.value.filter(e=>e.id!==i.value.id),f.txtList.delete(i.value.id))})}}],$=s=>{i.value=s,C.value=!0},c=l(""),U=()=>{f.txtList.update(i.value.id,{title:c.value}).then(()=>{u.value=u.value.map(s=>s.id===i.value.id?{...s,title:c.value}:s),c.value="",v.value=!1})},_=l(""),E=Z(()=>{const s=u.value.filter(e=>e.title.indexOf(_.value)!==-1);return F.value==="access"&&s.sort((e,o)=>o.accessTime-e.accessTime),F.value==="create"&&s.sort((e,o)=>o.createTime-e.createTime),s}),z=async s=>{const e=s.file;if(!e)return;if(e.type!=="text/plain"){R("\u4E0D\u652F\u6301\u8BE5\u6587\u4EF6\u7C7B\u578B\uFF01");return}const o=new FileReader;o.readAsArrayBuffer(e),o.addEventListener("load",()=>{const w=o.result,S=["utf-8","gbk","big5"],m=t=>{const p=new TextDecoder(t,{fatal:!0});try{return p.decode(w)}catch{return null}};let x="";for(const t of S){const p=m(t);if(p){x=p;break}}const T={id:""+new Date().getTime()+Math.floor(Math.random()*1e6),title:e.name,createTime:new Date().getTime(),accessTime:0,size:e.size,content:x,progress:0,progressText:""};u.value.push(T),f.txtList.add(T)})},M=s=>{const e=s/1024;return e<1024?`${e.toFixed(1)}KB`:`${(e/1024).toFixed(2)}MB`},N=s=>{const e=new Date().getTime();f.txtList.update(s.id,{accessTime:e}).then(()=>ne.push(s.id))};return(s,e)=>{const o=K,w=j,S=H,m=J,x=X,T=q;return r(),h("div",le,[a(w,{class:"search",placeholder:"\u641C\u7D22",modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=t=>_.value=t),hint:!1},{"append-icon":d(()=>[_.value?(r(),L(o,{key:0,name:"window-close",onClick:e[0]||(e[0]=t=>_.value="")})):(r(),L(o,{key:1,name:"magnify"}))]),_:1},8,["modelValue"]),n("div",{class:"sort",onClick:e[2]||(e[2]=t=>A.value=!0)},[n("span",null,"\u6392\u5E8F\uFF1A"+g(k[F.value]),1),ie,a(o,{name:"chevron-down"})]),a(S,{title:"\u9009\u62E9\u6392\u5E8F\u65B9\u5F0F",actions:b,show:A.value,"onUpdate:show":e[3]||(e[3]=t=>A.value=t),onSelect:e[4]||(e[4]=t=>V(t))},null,8,["show"]),a(S,{title:"\u64CD\u4F5C",actions:I,show:C.value,"onUpdate:show":e[5]||(e[5]=t=>C.value=t),onSelect:e[6]||(e[6]=t=>t.handler())},null,8,["show"]),a(x,{show:v.value,"onUpdate:show":e[10]||(e[10]=t=>v.value=t)},{default:d(()=>[n("div",re,[a(w,{hint:!1,placeholder:"\u8BF7\u8F93\u5165\u65B0\u6807\u9898",modelValue:c.value,"onUpdate:modelValue":e[7]||(e[7]=t=>c.value=t)},null,8,["modelValue"]),n("div",de,[a(m,{text:"",type:"primary",onClick:e[8]||(e[8]=t=>v.value=!1)},{default:d(()=>[ce]),_:1}),a(m,{text:"",type:"primary",onClick:e[9]||(e[9]=t=>U())},{default:d(()=>[pe]),_:1})])])]),_:1},8,["show"]),ve,n("div",_e,[(r(!0),h(ee,null,te(B(E),t=>(r(),h("div",{class:"list-item",key:t.id,onClick:p=>N(t)},[a(B(G),{onTrigger:p=>$(t)},{default:d(()=>[n("div",fe,g(t.title),1),n("div",he,[n("div",ge,[n("div",ye,g(new Date(t.createTime).toLocaleDateString()),1),n("div",Fe,g(M(t.size)),1)]),n("div",we,g((t.progress*100).toFixed(2))+"%",1)])]),_:2},1032,["onTrigger"])],8,me))),128)),u.value.length?B(E).length?se("",!0):(r(),h("div",xe,"\u641C\u7D22\u7ED3\u679C\u4E3A\u7A7A (\u2299\uFE4F\u2299)")):(r(),h("div",Se,"\u4E66\u67B6\u7A7A\u7A7A\u5982\u4E5F \u2511(~\u0414 ~)\u250D"))]),a(T,{accept:"text/plain",onAfterRead:z},{default:d(()=>[a(m,{class:"upload-btn",type:"primary",round:""},{default:d(()=>[a(o,{name:"plus",size:28})]),_:1})]),_:1})])}}});var Ce=Q(Te,[["__scopeId","data-v-1bca3536"]]);export{Ce as default};
