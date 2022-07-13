import{p as _e,g as ke,L as Le,I as Pe,h as Ve,i as xe,j as Se,k as Ne,m as ze,l as He,n as je,o as Me,C as Ue,t as Ce,O as qe,D as Re,_ as de,b as Je,q as Ye,a as se,r as Ge,e as Ke,f as We,d as oe,s as Xe}from"./DialogSfc.17635b18.js";import{d as G,r as f,c as q,E as re,o as Z,O as le,H as Qe,K as Ze,a as i,b as h,g as r,L as M,Q as ee,j as A,t as J,f as T,i as B,M as K,e as k,w as $,I as ue,T as et,J as tt,m as pe,D as nt,a0 as at,_ as te,F as x,h as N,u as U,p as Oe,k as Ee,a1 as ot,l as st,B as he}from"./index.ed9065de.js";function rt(e){var s=["top","center","bottom"];return s.includes(e)}function lt(e){return ve.includes(e)}var $e={type:{type:String,validator:lt},position:{type:String,default:"top",validator:rt},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:_e(ke,"type"),loadingSize:_e(ke,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}},{n:ut,classes:it}=Se("snackbar"),ct={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""};function dt(e,s){var n=le("var-icon"),o=le("var-loading");return Qe((i(),h("div",{class:M(e.n()),style:K({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[r("div",{class:M(e.classes(e.n("wrapper"),e.n("wrapper-"+e.position),"var-elevation--4",[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n("wrapper-"+e.type)])),style:K({zIndex:e.zIndex})},[r("div",{class:M([e.n("content"),e.contentClass])},[ee(e.$slots,"default",{},()=>[A(J(e.content),1)])],2),r("div",{class:M(e.n("action"))},[e.iconName?(i(),T(n,{key:0,name:e.iconName},null,8,["name"])):B("v-if",!0),e.type==="loading"?(i(),T(o,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):B("v-if",!0),ee(e.$slots,"action")],2)],6)],6)),[[Ze,e.show]])}var we=G({render:dt,name:"VarSnackbarCore",components:{VarLoading:Le,VarIcon:Pe},props:$e,setup(e){var s=f(null),{zIndex:n}=Ve(()=>e.show,1);xe(()=>e.show,()=>e.lockScroll);var o=q(()=>e.type==="loading"||e.forbidClick),c=q(()=>e.type?ct[e.type]:""),v=()=>{s.value=setTimeout(()=>{var d;e.type!=="loading"&&((d=e["onUpdate:show"])==null||d.call(e,!1))},e.duration)};return re(()=>e.show,d=>{d?(e.onOpen==null||e.onOpen(),v()):d===!1&&(clearTimeout(s.value),e.onClose==null||e.onClose())}),re(()=>e._update,()=>{clearTimeout(s.value),v()}),Z(()=>{e.show&&(e.onOpen==null||e.onOpen(),v())}),{SNACKBAR_TYPE:ve,n:ut,classes:it,zIndex:n,iconName:c,isForbidClick:o}}}),{n:pt}=Se("snackbar");function vt(e,s){var n=le("var-snackbar-core");return i(),T(tt,{to:e.teleport,disabled:e.disabled},[k(et,{name:e.n()+"-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:$(()=>[k(n,ue(e.$props,{class:e.n("transition")}),{action:$(()=>[ee(e.$slots,"action")]),default:$(()=>[ee(e.$slots,"default",{},()=>[A(J(e.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var R=G({render:vt,name:"VarSnackbar",components:{VarSnackbarCore:we},props:$e,setup(){var{disabled:e}=Ne();return{n:pt,disabled:e}}});function W(){return W=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},W.apply(this,arguments)}function ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!nt(e)}var ve=["loading","success","warning","info","error"],be=0,ie=!1,ce,Y=!1,w=pe([]),gt={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},mt={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},_t={setup(){return()=>{var e=w.map(n=>{var{id:o,reactiveSnackOptions:c,_update:v}=n,d=document.querySelector(".var-transition-group");c.forbidClick||c.type==="loading"?d.classList.add("var-pointer-auto"):d.classList.remove("var-pointer-auto"),Y&&(c.position="top");var y=Y?"relative":"absolute",g=W({position:y},St(c.position));return k(we,ue(c,{key:o,style:g,"data-id":o,_update:v,show:c.show,"onUpdate:show":m=>c.show=m}),null)}),s=Ue.zIndex;return k(at,ue(mt,{style:{zIndex:s},onAfterEnter:kt,onAfterLeave:ht}),ft(e)?e:{default:()=>[e]})}}},z=function(e){var s=je(e)||Me(e)?{content:String(e)}:e,n=pe(W({},gt,s));n.show=!0,ie||(ie=!0,ce=ze(_t).unmountInstance);var{length:o}=w,c={id:be++,reactiveSnackOptions:n};if(o===0||Y)bt(c);else{var v="update-"+be;yt(n,v)}return{clear(){!Y&&w.length?w[0].reactiveSnackOptions.show=!1:n.show=!1}}};ve.forEach(e=>{z[e]=s=>(He(s)?s.type=e:s={content:s,type:e},z(s))});z.install=function(e){e.component(R.name,R)};z.allowMultiple=function(e){e===void 0&&(e=!1),e!==Y&&(w.forEach(s=>{s.reactiveSnackOptions.show=!1}),Y=e)};z.clear=function(){w.forEach(e=>{e.reactiveSnackOptions.show=!1})};z.Component=R;function kt(e){var s=e.getAttribute("data-id"),n=w.find(o=>o.id===Ce(s));n&&(n.reactiveSnackOptions.onOpened==null||n.reactiveSnackOptions.onOpened())}function ht(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");var s=e.getAttribute("data-id"),n=w.find(c=>c.id===Ce(s));n&&(n.animationEnd=!0,n.reactiveSnackOptions.onClosed==null||n.reactiveSnackOptions.onClosed());var o=w.every(c=>c.animationEnd);o&&(ce==null||ce(),w=pe([]),ie=!1)}function bt(e){w.push(e)}function yt(e,s){var[n]=w;n.reactiveSnackOptions=W({},n.reactiveSnackOptions,e),n._update=s}function St(e){return e===void 0&&(e="top"),e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}R.install=function(e){e.component(R.name,R)};var ye=z;const Ct={class:"bookmark"},Ot={class:"bookmark-list"},Et=["onClick"],$t=G({__name:"Bookmark",props:{bookmarks:{type:Array,required:!0}},emits:["jump","update"],setup(e,{emit:s}){const n=o=>{Re("\u662F\u5426\u5220\u9664\u8BE5\u4E66\u7B7E\uFF1F").then(c=>{if(c==="confirm"){const v=localStorage.getItem("txt_reader_bookmarks"),y=(v?JSON.parse(v):[]).filter(g=>g!==o);localStorage.setItem("txt_reader_bookmarks",JSON.stringify(y)),s("update",y)}})};return(o,c)=>(i(),h("div",Ct,[r("div",Ot,[(i(!0),h(x,null,N(e.bookmarks,(v,d)=>(i(),h("div",{class:"item",key:d,onClick:y=>s("jump",v)},[k(U(qe),{onTrigger:y=>n(v)},{default:$(()=>[r("p",null,J(v),1)]),_:2},1032,["onTrigger"])],8,Et))),128))])]))}});var wt=te($t,[["__scopeId","data-v-0c6d625c"]]);const Ft={class:"search"},Bt={key:0,class:"result-info"},Tt={key:0},Dt={key:1},At={class:"result-list"},It=["innerHTML","onClick"],Lt=G({__name:"Search",props:{paragraphsData:{type:Object,required:!0}},emits:["jump"],setup(e,{emit:s}){const n=e,o=f(""),c=f(!1),v=f([]),d=q(()=>v.value.length>300?[]:v.value.map(m=>{const b=m.content.replaceAll(o.value,`<span style="background-color: #ffff3a;">${o.value}</span>`);return{...m,contentHTML:b}})),y=()=>{v.value=n.paragraphsData.filter(m=>m.content.indexOf(o.value)!==-1),c.value=!0},g=()=>{v.value.length&&(v.value=[]),c.value=!1,o.value=""};return(m,b)=>{const I=de,L=Je;return i(),h("div",Ft,[k(L,{class:"search-input",placeholder:"\u641C\u7D22",modelValue:o.value,"onUpdate:modelValue":b[2]||(b[2]=O=>o.value=O),hint:!1},{"append-icon":$(()=>[o.value?(i(),T(I,{key:0,name:"window-close",onClick:b[0]||(b[0]=O=>g()),style:{"margin-right":"10px"}})):B("",!0),k(I,{name:"magnify",onClick:b[1]||(b[1]=O=>y())})]),_:1},8,["modelValue"]),c.value?(i(),h("div",Bt,[A(" \u68C0\u7D22\u5230\u7ED3\u679C "+J(v.value.length)+" \u6761\u3002 ",1),v.value.length>300?(i(),h("span",Tt,"\u5339\u914D\u7ED3\u679C\u8FC7\u591A\uFF0C\u8BF7\u66F4\u6362\u5173\u952E\u8BCD\u641C\u7D22\u3002")):v.value.length>0?(i(),h("span",Dt,"\u70B9\u51FB\u8DF3\u8F6C\u5230\u5BF9\u5E94\u4F4D\u7F6E\u3002")):B("",!0)])):B("",!0),r("div",At,[(i(!0),h(x,null,N(U(d),O=>(i(),h("p",{class:"item",key:O.start,innerHTML:O.contentHTML,onClick:H=>s("jump",O.content)},null,8,It))),128))])])}}});var Pt=te(Lt,[["__scopeId","data-v-6dbadbdd"]]);const X=e=>(Oe("data-v-ea550f0a"),e=e(),Ee(),e),Vt={class:"setting"},xt={class:"setting-item"},Nt=X(()=>r("div",{class:"label"},"\u9605\u8BFB\u6A21\u5F0F",-1)),zt={class:"setting-item"},Ht=X(()=>r("div",{class:"label"},"\u4E3B\u9898",-1)),jt={class:"theme-options"},Mt=["onClick"],Ut=A("Aa "),qt={key:0},Rt={class:"setting-item"},Jt=X(()=>r("div",{class:"label"},"\u5B57\u53F7",-1)),Yt={class:"setting-item"},Gt=X(()=>r("div",{class:"label"},"\u884C\u9AD8",-1)),Kt={class:"setting-item"},Wt=X(()=>r("div",{class:"label"},"\u6BB5\u95F4\u8DDD",-1)),Xt=G({__name:"Setting",props:{setting:{type:Object,required:!0}},emits:["update"],setup(e,{emit:s}){const n=e,o=f(n.setting.color),c=f(n.setting.background),v=[{color:"#111",background:"#fff"},{color:"#eee",background:"#222"},{color:"#000",background:"#f1f1f1"},{color:"#111",background:"#e9d8bc"},{color:"#111",background:"#c5e7cf"}],d=f(n.setting.fontSize),y=f([13,14,15,16,18,20,22]),g=f(n.setting.lineHight),m=f([1,1.2,1.5,1.75,2]),b=f(n.setting.paragraphSpacing),I=f([10,12,15,18,20,25]),L=f(n.setting.model),O=f([{key:"scroll",label:"\u6EDA\u52A8"},{key:"click",label:"\u70B9\u51FB"}]);return re([o,c,d,g,b,L],()=>{const H=localStorage.getItem("txt_reader_setting"),D={...H?JSON.parse(H):se,color:o.value,background:c.value,fontSize:d.value,lineHight:g.value,paragraphSpacing:b.value,model:L.value};localStorage.setItem("txt_reader_setting",JSON.stringify(D)),s("update",D)}),(H,F)=>{const D=Ge,V=Ye,fe=de;return i(),h("div",Vt,[r("div",xt,[Nt,k(V,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:L.value,"onUpdate:modelValue":F[0]||(F[0]=p=>L.value=p)},{default:$(()=>[(i(!0),h(x,null,N(O.value,p=>(i(),T(D,{label:p.label,value:p.key},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),r("div",zt,[Ht,r("div",jt,[(i(),h(x,null,N(v,(p,ne)=>r("div",{class:"theme-option",key:ne,style:K({color:p.color,backgroundColor:p.background}),onClick:()=>{o.value=p.color,c.value=p.background}},[Ut,o.value===p.color&&c.value===p.background?(i(),h("span",qt,[k(fe,{name:"check",size:12})])):B("",!0)],12,Mt)),64))])]),r("div",Rt,[Jt,k(V,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:d.value,"onUpdate:modelValue":F[1]||(F[1]=p=>d.value=p)},{default:$(()=>[(i(!0),h(x,null,N(y.value,p=>(i(),T(D,{label:p,value:p},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),r("div",Yt,[Gt,k(V,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:g.value,"onUpdate:modelValue":F[2]||(F[2]=p=>g.value=p)},{default:$(()=>[(i(!0),h(x,null,N(m.value,p=>(i(),T(D,{label:p,value:p},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),r("div",Kt,[Wt,k(V,{hint:!1,placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",modelValue:b.value,"onUpdate:modelValue":F[3]||(F[3]=p=>b.value=p)},{default:$(()=>[(i(!0),h(x,null,N(I.value,p=>(i(),T(D,{label:p,value:p},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])])])}}});var Qt=te(Xt,[["__scopeId","data-v-ea550f0a"]]);const Q=e=>(Oe("data-v-136a6078"),e=e(),Ee(),e),Zt={class:"title"},en={class:"progress"},tn=["innerHTML"],nn=A(),an=Q(()=>r("span",null,"\u8FD4\u56DE",-1)),on=A(),sn=Q(()=>r("span",null,"\u4E66\u7B7E",-1)),rn=A(),ln=Q(()=>r("span",null,"\u67E5\u627E",-1)),un=A(),cn=Q(()=>r("span",null,"\u8BBE\u7F6E",-1)),dn={key:0,class:"util-panel"},pn={class:"util-panel-header"},vn=Q(()=>r("span",null,"\u8FD4\u56DE",-1)),fn={class:"bookmark-popup"},gn=A("\u6DFB\u52A0\u4E66\u7B7E"),mn=A("\u67E5\u770B\u4E66\u7B7E"),_n=G({__name:"index",setup(e){const{params:s}=ot(),n=f(!1),o=f(se),c=q(()=>({"--lineHight":`${o.value.lineHight}`,"--paragraphSpacing":`${o.value.paragraphSpacing}px`}));Z(()=>{const a=localStorage.getItem("txt_reader_setting");o.value=a?JSON.parse(a):se});const d=f(""),y=f(!1),g=f(),m=f(),b=f([]),I=f(0),L=f(""),O=q(()=>{var a;return((a=g.value)==null?void 0:a.progress)||0}),H=q(()=>{var a;return((a=g.value)==null?void 0:a.progressText)||""}),F=a=>{const t=a.replace(/[\n\r]+/g,"<br>").split("<br>"),u=[];for(const _ of t){const S=u[u.length-1],l=S?S.end+1:0,E=l+_.length;u.push({start:l,end:E,content:_})}b.value=u},D=()=>{const a=O.value*I.value,t=5e3,u=a-t<0?0:a-t,_=a+t,S=[];let l=!1;for(const E of b.value)if(l||E.start<=u&&u<=E.end&&(l=!0),l&&S.push(E),E.start<=_&&_<=E.end)break;return S},V=()=>{const a=D();let t="";for(const u of a)t+=`<p data-range="${u.start}~${u.end}">${u.content}</p>`;L.value=t,he(()=>{const u=Array.from(m.value.querySelectorAll("p")).find(_=>{var S;return(S=_.textContent)==null?void 0:S.includes(H.value)});u&&u.scrollIntoView()})};Z(()=>{oe.txtList.where("id").equals(s.id).toArray().then(a=>{g.value=a[0],F(g.value.content),I.value=g.value.content.replace(/[\n\r]+/g,"").length,V()})});const p=()=>{const a=D(),t=a[0],u=a[a.length-1],_=m.value.querySelectorAll("p");_.forEach(C=>{const[P,Ie]=C.dataset.range.split("~");+Ie<t.start&&m.value.removeChild(C),+P>u.end&&m.value.removeChild(C)});const l=_[_.length-1].dataset.range.split("~")[1],me=_[0].dataset.range.split("~")[0];if(t.start>=+me){for(const C of a)if(C.start>+l){const P=document.createElement("p");P.setAttribute("data-range",`${C.start}~${C.end}`),P.innerHTML=C.content,m.value.appendChild(P)}}else for(const C of a.reverse())if(C.end<+me){const P=document.createElement("p");P.setAttribute("data-range",`${C.start}~${C.end}`),P.innerHTML=C.content,m.value.insertBefore(P,m.value.children[0])}},ne=Xe(()=>{const a=document.elementFromPoint(20,n.value?35:5);if(!a)return;const t=a.innerHTML.replace(/<[^>]+>/g,""),_=+(g.value.content.replace(/[\n\r]+/g,"").indexOf(t)/I.value).toFixed(4);oe.txtList.update(s.id,{progress:_,progressText:t}).then(()=>{g.value={...g.value,progress:_,progressText:t},p()})},1e3,{maxWait:1e4}),Fe=a=>{const t=document.body.clientWidth,u=document.body.clientHeight,_=a.pageX,S=a.pageY;if(o.value.model==="scroll"){const l=u*.35,E=u*.65;n.value?n.value=!1:S>=l&&S<=E&&(n.value=!0)}else{const l=t*.35,E=t*.65;_<l?m.value.scrollTop=m.value.scrollTop-(u-30):_>E?m.value.scrollTop=m.value.scrollTop+(u-30):n.value=!n.value}},Be=a=>{o.value.model==="click"&&a.preventDefault()},ge=a=>{d.value="",he(()=>{const u=+(g.value.content.replace(/[\n\r]+/g,"").indexOf(a)/I.value).toFixed(4);oe.txtList.update(s.id,{progress:u,progressText:a}).then(()=>{g.value={...g.value,progress:u,progressText:a},V()})})},j=f([]);Z(()=>{const a=localStorage.getItem("txt_reader_bookmarks");a&&(j.value=JSON.parse(a))});const ae=f(""),Te=()=>{const a=document.elementFromPoint(20,n.value?35:5);!a||(ae.value=a.innerHTML.replace(/<[^>]+>/g,""),y.value=!0)},De=()=>{y.value=!1,d.value="bookmark"},Ae=()=>{if(j.value.includes(ae.value)){ye("\u8BF7\u52FF\u91CD\u590D\u6DFB\u52A0\u4E66\u7B7E\uFF01");return}const a=localStorage.getItem("txt_reader_bookmarks"),t=a?JSON.parse(a):[];j.value=[...t,ae.value],localStorage.setItem("txt_reader_bookmarks",JSON.stringify(j.value)),y.value=!1,ye("\u5DF2\u6DFB\u52A0\u5F53\u524D\u4F4D\u7F6E\u5230\u4E66\u7B7E\uFF01")};return(a,t)=>{const u=de,_=Ke,S=We;return g.value?(i(),h("div",{key:0,class:"reader",style:K(U(c))},[r("div",{class:M(["header",{show:n.value}])},[r("span",Zt,J(g.value.title),1),r("span",en,J((U(O)*100).toFixed(2))+"%",1)],2),r("div",{class:"content",ref_key:"contentRef",ref:m,innerHTML:L.value,onClick:t[0]||(t[0]=l=>Fe(l)),onScroll:t[1]||(t[1]=l=>U(ne)()),onTouchmove:t[2]||(t[2]=l=>Be(l)),style:K({color:o.value.color,backgroundColor:o.value.background,fontSize:o.value.fontSize+"px"})},null,44,tn),r("div",{class:M(["menu",{show:n.value}])},[r("div",{class:"menu-item",onClick:t[3]||(t[3]=l=>U(st).push("/"))},[k(u,{name:"chevron-left"}),nn,an]),r("div",{class:"menu-item",onClick:t[4]||(t[4]=l=>Te())},[k(u,{name:"star-outline"}),on,sn]),r("div",{class:"menu-item",onClick:t[5]||(t[5]=l=>d.value="search")},[k(u,{name:"magnify"}),rn,ln]),r("div",{class:"menu-item",onClick:t[6]||(t[6]=l=>d.value="setting")},[k(u,{name:"menu"}),un,cn])],2),d.value?(i(),h("div",dn,[r("div",pn,[r("div",{class:"btn",onClick:t[7]||(t[7]=l=>d.value="")},[k(u,{name:"chevron-left"}),vn])]),d.value==="bookmark"?(i(),T(wt,{key:0,bookmarks:j.value,onJump:t[8]||(t[8]=l=>ge(l)),onUpdate:t[9]||(t[9]=l=>j.value=l)},null,8,["bookmarks"])):B("",!0),d.value==="search"?(i(),T(Pt,{key:1,paragraphsData:b.value,onJump:t[10]||(t[10]=l=>ge(l))},null,8,["paragraphsData"])):B("",!0),d.value==="setting"?(i(),T(Qt,{key:2,setting:o.value,onUpdate:t[11]||(t[11]=l=>o.value=l)},null,8,["setting"])):B("",!0)])):B("",!0),k(S,{show:y.value,"onUpdate:show":t[14]||(t[14]=l=>y.value=l)},{default:$(()=>[r("div",fn,[k(_,{class:"btn",type:"primary",onClick:t[12]||(t[12]=l=>Ae())},{default:$(()=>[gn]),_:1}),k(_,{class:"btn",type:"primary",onClick:t[13]||(t[13]=l=>De())},{default:$(()=>[mn]),_:1})])]),_:1},8,["show"])],4)):B("",!0)}}});var yn=te(_n,[["__scopeId","data-v-136a6078"]]);export{yn as default};
