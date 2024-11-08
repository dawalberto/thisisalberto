(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b6cfe68"],{"07bd":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={key:1};function c(e,t,n,c,i,s){const a=Object(o["resolveComponent"])("project-details");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[c.projects.includes(c.project)?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,project:c.project,linkProject:c.linkProject,linkRepository:c.linkRepository,linkRepositoryBack:c.linkRepositoryBack,slidesSrcs:c.slidesSrcs},null,8,["project","linkProject","linkRepository","linkRepositoryBack","slidesSrcs"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",r,"Sorry this project doesn't exist"))])}var i=n("6c02");const s={class:"bg-white w-screen max-w-6xl px-3 mx-auto overflow-x-hidden"},a={class:"text-3xl md:text-5xl mb-2 text-center"},l={class:"w-full text-center mt-10"},u={class:"button-project-details duration-200 transform hover:scale-105 hover:-rotate-3"},d=["href"],f={class:"capitalize"};function p(e,t,n,r,c,i){const p=Object(o["resolveComponent"])("project-details-questions"),m=Object(o["resolveComponent"])("project-details-carousel"),g=Object(o["resolveComponent"])("project-details-repositories");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createElementVNode"])("h1",a,"<"+Object(o["toDisplayString"])(n.project)+" />",1),Object(o["createVNode"])(p,{project:n.project},null,8,["project"]),Object(o["createVNode"])(m,{slidesSrcs:n.slidesSrcs},null,8,["slidesSrcs"]),Object(o["createVNode"])(g,{linkRepository:n.linkRepository},null,8,["linkRepository"]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("button",u,[Object(o["createElementVNode"])("a",{target:"_blank",href:n.linkProject},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("projectDetails.enjoy"))+" ",1),Object(o["createElementVNode"])("span",f,Object(o["toDisplayString"])(n.project),1)],8,d)])]),t[0]||(t[0]=Object(o["createElementVNode"])("p",{class:"text-sm mt-10 text-center"},[Object(o["createTextVNode"])(" Illustrations from "),Object(o["createElementVNode"])("a",{href:"https://absurd.design",target:"_blank"},"absurd.design")],-1))])}var m=n("784b"),g=n.n(m),b=n("9b97"),j=n.n(b),y=n("e04f"),h=n.n(y);const O={class:"flex flex-col space-y-16 md:space-y-20 w-full"},x={class:"flex justify-start"},v={class:"text-2xl underline-title underline-title-yellow"},w={class:"flex flex-row items-center mt-3 md:mt-0"},k={class:"md:py-8 px-2 md:px-10",style:{"white-space":"pre-line"}},E={class:"w-full"},S={class:"flex justify-end"},N={class:"text-2xl underline-title underline-title-yellow"},D={class:"flex flex-row-reverse items-center mt-3 md:mt-0"},V={class:"md:py-8 px-2 md:px-10",style:{"white-space":"pre-line"}},B={class:"flex justify-start"},I={class:"text-2xl underline-title underline-title-yellow"},L={class:"flex flex-row items-center mt-3 md:mt-0"},R=["innerHTML"];function P(e,t,n,r,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",O,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",x,[Object(o["createElementVNode"])("h1",v,Object(o["toDisplayString"])(e.$t("projectDetails.why")),1)]),Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("p",k,Object(o["toDisplayString"])(e.$t(`projectDetails.${n.project}.why`)),1),t[0]||(t[0]=Object(o["createElementVNode"])("div",{class:"hidden md:block w-1/6 flex-shrink-0 flex-grow-0"},[Object(o["createElementVNode"])("img",{src:g.a,class:"w-full",alt:"why img"})],-1))])]),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("h1",N,Object(o["toDisplayString"])(e.$t("projectDetails.whatExactly")),1)]),Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("p",V,Object(o["toDisplayString"])(e.$t(`projectDetails.${n.project}.whatExactly`)),1),t[1]||(t[1]=Object(o["createElementVNode"])("div",{class:"hidden md:block w-1/6 flex-shrink-0 flex-grow-0"},[Object(o["createElementVNode"])("img",{src:j.a,class:"w-full",alt:"what is img"})],-1))])]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("h1",I,Object(o["toDisplayString"])(e.$t("projectDetails.technologies")),1)]),Object(o["createElementVNode"])("div",L,[Object(o["createElementVNode"])("p",{class:"md:py-8 px-2 md:px-10",innerHTML:e.$t(`projectDetails.${n.project}.technologies`)},null,8,R),t[2]||(t[2]=Object(o["createElementVNode"])("div",{class:"hidden md:block w-1/6 flex-shrink-0 flex-grow-0"},[Object(o["createElementVNode"])("img",{src:h.a,class:"w-full",alt:"tecnologies img"})],-1))])])])}var F={name:"ProjectDetailsQuestions",props:{project:{type:String,required:!0}},setup(){return{}}},M=n("6b0d"),A=n.n(M);const T=A()(F,[["render",P]]);var q=T;const z={class:"w-full"},H={class:"flex justify-start"},C={class:"text-2xl underline-title underline-title-yellow"},$={class:"md:py-8 md:px-10"},_={class:"flex items-center gap-4"},U={class:"font-semibold"},G=["href"],J={key:0,class:"flex items-center gap-4"},W=["href"];function Q(e,t,n,r,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",z,[Object(o["createElementVNode"])("div",H,[Object(o["createElementVNode"])("h1",C,Object(o["toDisplayString"])(e.$t("projectDetails.repository")),1)]),Object(o["createElementVNode"])("ul",$,[Object(o["createElementVNode"])("li",_,[Object(o["createElementVNode"])("span",U,"🦊 "+Object(o["toDisplayString"])(e.repoBack?"Front":""+e.$t("projectDetails.code")),1),Object(o["createElementVNode"])("a",{href:n.linkRepository,target:"_blank",class:"text-yellow-500"},Object(o["toDisplayString"])(r.repoLabel),9,G)]),e.repoBack?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",J,[t[0]||(t[0]=Object(o["createElementVNode"])("span",{class:"font-semibold"},"🦊 Back",-1)),Object(o["createElementVNode"])("a",{href:n.linkRepositoryBack,target:"_blank",class:"text-yellow-500"},Object(o["toDisplayString"])(r.repoBackLabel),9,W)])):Object(o["createCommentVNode"])("",!0)])])}const X=e=>e?e.replace(/^https:\/\//,""):"";var Y={name:"ProjectDetailsRepositories",props:{linkRepository:{type:String,required:!0},linkRepositoryBack:{type:String,required:!1}},setup(e){const t=X(e.linkRepository),n=X(e.linkRepositoryBack);return{repoLabel:t,repoBackLabel:n}}};const K=A()(Y,[["render",Q]]);var Z=K;const ee={ref:"emblaNode",class:"embla my-16 md:my-0"},te={class:"embla__container w-full"},ne=["src"];function oe(e,t,n,r,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ee,[Object(o["createElementVNode"])("div",te,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.slidesSrcs,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:e,class:"embla__slide"},[Object(o["createElementVNode"])("img",{src:e,loading:"lazy",style:{filter:"drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))"}},null,8,ne)]))),128))])],512)}function re(e){return"[object Object]"===Object.prototype.toString.call(e)}function ce(e){return re(e)||Array.isArray(e)}function ie(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function se(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const r=JSON.stringify(Object.keys(e.breakpoints||{})),c=JSON.stringify(Object.keys(t.breakpoints||{}));return r===c&&n.every(n=>{const o=e[n],r=t[n];return"function"===typeof o?""+o===""+r:ce(o)&&ce(r)?se(o,r):o===r})}function ae(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function le(e,t){if(e.length!==t.length)return!1;const n=ae(e),o=ae(t);return n.every((e,t)=>{const n=o[t];return se(e,n)})}function ue(e){return"number"===typeof e}function de(e){return"string"===typeof e}function fe(e){return"boolean"===typeof e}function pe(e){return"[object Object]"===Object.prototype.toString.call(e)}function me(e){return Math.abs(e)}function ge(e){return Math.sign(e)}function be(e,t){return me(e-t)}function je(e,t){if(0===e||0===t)return 0;if(me(e)<=me(t))return 0;const n=be(me(e),me(t));return me(n/e)}function ye(e){return we(e).map(Number)}function he(e){return e[Oe(e)]}function Oe(e){return Math.max(0,e.length-1)}function xe(e,t){return t===Oe(e)}function ve(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function we(e){return Object.keys(e)}function ke(e,t){return[e,t].reduce((e,t)=>(we(t).forEach(n=>{const o=e[n],r=t[n],c=pe(o)&&pe(r);e[n]=c?ke(o,r):r}),e),{})}function Ee(e,t){return"undefined"!==typeof t.MouseEvent&&e instanceof t.MouseEvent}function Se(e,t){const n={start:o,center:r,end:c};function o(){return 0}function r(e){return c(e)/2}function c(e){return t-e}function i(o,r){return de(e)?n[e](o):e(t,o,r)}const s={measure:i};return s}function Ne(){let e=[];function t(t,n,r,c={passive:!0}){let i;if("addEventListener"in t)t.addEventListener(n,r,c),i=()=>t.removeEventListener(n,r,c);else{const e=t;e.addListener(r),i=()=>e.removeListener(r)}return e.push(i),o}function n(){e=e.filter(e=>e())}const o={add:t,clear:n};return o}function De(e,t,n,o){const r=Ne(),c=1e3/60;let i=null,s=0,a=0;function l(){r.add(e,"visibilitychange",()=>{e.hidden&&m()})}function u(){p(),r.clear()}function d(e){if(!a)return;i||(i=e);const r=e-i;i=e,s+=r;while(s>=c)n(c),s-=c;const l=s/c;o(l),a&&t.requestAnimationFrame(d)}function f(){a||(a=t.requestAnimationFrame(d))}function p(){t.cancelAnimationFrame(a),i=null,s=0,a=0}function m(){i=null,s=0}const g={init:l,destroy:u,start:f,stop:p,update:()=>n(c),render:o};return g}function Ve(e,t){const n="rtl"===t,o="y"===e,r=o?"y":"x",c=o?"x":"y",i=!o&&n?-1:1,s=u(),a=d();function l(e){const{height:t,width:n}=e;return o?t:n}function u(){return o?"top":n?"right":"left"}function d(){return o?"bottom":n?"left":"right"}function f(e){return e*i}const p={scroll:r,cross:c,startEdge:s,endEdge:a,measureSize:l,direction:f};return p}function Be(e=0,t=0){const n=me(e-t);function o(t){return t<e}function r(e){return e>t}function c(e){return o(e)||r(e)}function i(n){return c(n)?o(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}const a={length:n,max:t,min:e,constrain:i,reachedAny:c,reachedMax:r,reachedMin:o,removeOffset:s};return a}function Ie(e,t,n){const{constrain:o}=Be(0,e),r=e+1;let c=i(t);function i(e){return n?me((r+e)%r):o(e)}function s(){return c}function a(e){return c=i(e),d}function l(e){return u().set(s()+e)}function u(){return Ie(e,s(),n)}const d={get:s,set:a,add:l,clone:u};return d}function Le(e,t,n,o,r,c,i,s,a,l,u,d,f,p,m,g,b,j,y){const{cross:h,direction:O}=e,x=["INPUT","SELECT","TEXTAREA"],v={passive:!1},w=Ne(),k=Ne(),E=Be(50,225).constrain(p.measure(20)),S={mouse:300,touch:400},N={mouse:500,touch:600},D=m?43:25;let V=!1,B=0,I=0,L=!1,R=!1,P=!1,F=!1;function M(e){if(!y)return;function n(t){(fe(y)||y(e,t))&&C(t)}const o=t;w.add(o,"dragstart",e=>e.preventDefault(),v).add(o,"touchmove",()=>{},v).add(o,"touchend",()=>{}).add(o,"touchstart",n).add(o,"mousedown",n).add(o,"touchcancel",_).add(o,"contextmenu",_).add(o,"click",U,!0)}function A(){w.clear(),k.clear()}function T(){const e=F?n:t;k.add(e,"touchmove",$,v).add(e,"touchend",_).add(e,"mousemove",$,v).add(e,"mouseup",_)}function q(e){const t=e.nodeName||"";return x.includes(t)}function z(){const e=m?N:S,t=F?"mouse":"touch";return e[t]}function H(e,t){const n=d.add(-1*ge(e)),o=u.byDistance(e,!m).distance;return m||me(e)<E?o:b&&t?.5*o:u.byIndex(n.get(),0).distance}function C(e){const t=Ee(e,o);F=t,P=m&&t&&!e.buttons&&V,V=be(r.get(),i.get())>=2,t&&0!==e.button||q(e.target)||(L=!0,c.pointerDown(e),l.useFriction(0).useDuration(0),r.set(i),T(),B=c.readPoint(e),I=c.readPoint(e,h),f.emit("pointerDown"))}function $(e){const t=!Ee(e,o);if(t&&e.touches.length>=2)return _(e);const n=c.readPoint(e),i=c.readPoint(e,h),a=be(n,B),u=be(i,I);if(!R&&!F){if(!e.cancelable)return _(e);if(R=a>u,!R)return _(e)}const d=c.pointerMove(e);a>g&&(P=!0),l.useFriction(.3).useDuration(.75),s.start(),r.add(O(d)),e.preventDefault()}function _(e){const t=u.byDistance(0,!1),n=t.index!==d.get(),o=c.pointerUp(e)*z(),r=H(O(o),n),i=je(o,r),s=D-10*i,p=j+i/50;R=!1,L=!1,k.clear(),l.useDuration(s).useFriction(p),a.distance(r,!m),F=!1,f.emit("pointerUp")}function U(e){P&&(e.stopPropagation(),e.preventDefault(),P=!1)}function G(){return L}const J={init:M,destroy:A,pointerDown:G};return J}function Re(e,t){const n=170;let o,r;function c(e){return e.timeStamp}function i(n,o){const r=o||e.scroll,c="client"+("x"===r?"X":"Y");return(Ee(n,t)?n:n.touches[0])[c]}function s(e){return o=e,r=e,i(e)}function a(e){const t=i(e)-i(r),s=c(e)-c(o)>n;return r=e,s&&(o=e),t}function l(e){if(!o||!r)return 0;const t=i(r)-i(o),s=c(e)-c(o),a=c(e)-c(r)>n,l=t/s,u=s&&!a&&me(l)>.1;return u?l:0}const u={pointerDown:s,pointerMove:a,pointerUp:l,readPoint:i};return u}function Pe(){function e(e){const{offsetTop:t,offsetLeft:n,offsetWidth:o,offsetHeight:r}=e,c={top:t,right:n+o,bottom:t+r,left:n,width:o,height:r};return c}const t={measure:e};return t}function Fe(e){function t(t){return e*(t/100)}const n={measure:t};return n}function Me(e,t,n,o,r,c,i){const s=[e].concat(o);let a,l,u=[],d=!1;function f(e){return r.measureSize(i.measure(e))}function p(r){function i(n){for(const c of n){if(d)return;const n=c.target===e,i=o.indexOf(c.target),s=n?l:u[i],a=f(n?e:o[i]),p=me(a-s);if(p>=.5){r.reInit(),t.emit("resize");break}}}c&&(l=f(e),u=o.map(f),a=new ResizeObserver(e=>{(fe(c)||c(r,e))&&i(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>a.observe(e))}))}function m(){d=!0,a&&a.disconnect()}const g={init:p,destroy:m};return g}function Ae(e,t,n,o,r,c){let i=0,s=0,a=r,l=c,u=e.get(),d=0;function f(t){const r=t/1e3,c=a*r,f=o.get()-e.get(),p=!a;let m=0;return p?(i=0,n.set(o),e.set(o),m=f):(n.set(e),i+=f/c,i*=l,u+=i,e.add(i*r),m=u-d),s=ge(m),d=u,x}function p(){const e=o.get()-t.get();return me(e)<.001}function m(){return a}function g(){return s}function b(){return i}function j(){return h(r)}function y(){return O(c)}function h(e){return a=e,x}function O(e){return l=e,x}const x={direction:g,duration:m,velocity:b,seek:f,settled:p,useBaseFriction:y,useBaseDuration:j,useFriction:O,useDuration:h};return x}function Te(e,t,n,o,r){const c=r.measure(10),i=r.measure(50),s=Be(.1,.99);let a=!1;function l(){return!a&&(!!e.reachedAny(n.get())&&!!e.reachedAny(t.get()))}function u(r){if(!l())return;const a=e.reachedMin(t.get())?"min":"max",u=me(e[a]-t.get()),d=n.get()-t.get(),f=s.constrain(u/i);n.subtract(d*f),!r&&me(d)<c&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function d(e){a=!e}const f={shouldConstrain:l,constrain:u,toggleActive:d};return f}function qe(e,t,n,o,r){const c=Be(-t+e,0),i=d(),s=u(),a=f();function l(e,t){return be(e,t)<1}function u(){const e=i[0],t=he(i),n=i.lastIndexOf(e),o=i.indexOf(t)+1;return Be(n,o)}function d(){return n.map((e,t)=>{const{min:o,max:r}=c,i=c.constrain(e),s=!t,a=xe(n,t);return s?r:a||l(o,i)?o:l(r,i)?r:i}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+r)return[c.max];if("keepSnaps"===o)return i;const{min:n,max:a}=s;return i.slice(n,a)}const p={snapsContained:a,scrollContainLimit:s};return p}function ze(e,t,n){const o=t[0],r=n?o-e:he(t),c=Be(r,o),i={limit:c};return i}function He(e,t,n,o){const r=.1,c=t.min+r,i=t.max+r,{reachedMin:s,reachedMax:a}=Be(c,i);function l(e){return 1===e?a(n.get()):-1===e&&s(n.get())}function u(t){if(!l(t))return;const n=e*(-1*t);o.forEach(e=>e.add(n))}const d={loop:u};return d}function Ce(e){const{max:t,length:n}=e;function o(e){const o=e-t;return n?o/-n:0}const r={get:o};return r}function $e(e,t,n,o,r){const{startEdge:c,endEdge:i}=e,{groupSlides:s}=r,a=d().map(t.measure),l=f(),u=p();function d(){return s(o).map(e=>he(e)[i]-e[0][c]).map(me)}function f(){return o.map(e=>n[c]-e[c]).map(e=>-me(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+a[t])}const m={snaps:l,snapsAligned:u};return m}function _e(e,t,n,o,r,c){const{groupSlides:i}=r,{min:s,max:a}=o,l=u();function u(){const o=i(c),r=!e||"keepSnaps"===t;return 1===n.length?[c]:r?o:o.slice(s,a).map((e,t,n)=>{const o=!t,r=xe(n,t);if(o){const e=he(n[0])+1;return ve(e)}if(r){const e=Oe(c)-he(n)[0]+1;return ve(e,he(n)[0])}return e})}const d={slideRegistry:l};return d}function Ue(e,t,n,o,r){const{reachedAny:c,removeOffset:i,constrain:s}=o;function a(e){return e.concat().sort((e,t)=>me(e)-me(t))[0]}function l(n){const o=e?i(n):s(n),r=t.map((e,t)=>({diff:u(e-o,0),index:t})).sort((e,t)=>me(e.diff)-me(t.diff)),{index:c}=r[0];return{index:c,distance:o}}function u(t,o){const r=[t,t+n,t-n];if(!e)return t;if(!o)return a(r);const c=r.filter(e=>ge(e)===o);return c.length?a(c):he(r)-n}function d(e,n){const o=t[e]-r.get(),c=u(o,n);return{index:e,distance:c}}function f(n,o){const i=r.get()+n,{index:s,distance:a}=l(i),d=!e&&c(i);if(!o||d)return{index:s,distance:n};const f=t[s]-a,p=n+u(f,0);return{index:s,distance:p}}const p={byDistance:f,byIndex:d,shortcut:u};return p}function Ge(e,t,n,o,r,c,i){function s(r){const s=r.distance,a=r.index!==t.get();c.add(s),s&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),a&&(n.set(t.get()),t.set(r.index),i.emit("select"))}function a(e,t){const n=r.byDistance(e,t);s(n)}function l(e,n){const o=t.clone().set(e),c=r.byIndex(o.get(),n);s(c)}const u={distance:a,index:l};return u}function Je(e,t,n,o,r,c,i,s){const a={passive:!0,capture:!0};let l=0;function u(u){function f(t){const c=(new Date).getTime(),s=c-l;if(s>10)return;i.emit("slideFocusStart"),e.scrollLeft=0;const a=n.findIndex(e=>e.includes(t));ue(a)&&(r.useDuration(0),o.index(a,0),i.emit("slideFocus"))}s&&(c.add(document,"keydown",d,!1),t.forEach((e,t)=>{c.add(e,"focus",e=>{(fe(s)||s(u,e))&&f(t)},a)}))}function d(e){"Tab"===e.code&&(l=(new Date).getTime())}const f={init:u};return f}function We(e){let t=e;function n(){return t}function o(e){t=i(e)}function r(e){t+=i(e)}function c(e){t-=i(e)}function i(e){return ue(e)?e:e.get()}const s={get:n,set:o,add:r,subtract:c};return s}function Qe(e,t){const n="x"===e.scroll?c:i,o=t.style;let r=!1;function c(e){return`translate3d(${e}px,0px,0px)`}function i(e){return`translate3d(0px,${e}px,0px)`}function s(t){r||(o.transform=n(e.direction(t)))}function a(e){r=!e}function l(){r||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}const u={clear:l,to:s,toggleActive:a};return u}function Xe(e,t,n,o,r,c,i,s,a){const l=.5,u=ye(r),d=ye(r).reverse(),f=j().concat(y());function p(e,t){return e.reduce((e,t)=>e-r[t],t)}function m(e,t){return e.reduce((e,n)=>{const o=p(e,t);return o>0?e.concat([n]):e},[])}function g(e){return c.map((n,r)=>({start:n-o[r]+l+e,end:n+t-l+e}))}function b(t,o,r){const c=g(o);return t.map(t=>{const o=r?0:-n,i=r?n:0,l=r?"end":"start",u=c[t][l];return{index:t,loopPoint:u,slideLocation:We(-1),translate:Qe(e,a[t]),target:()=>s.get()>u?o:i}})}function j(){const e=i[0],t=m(d,e);return b(t,n,!1)}function y(){const e=t-i[0]-1,o=m(u,e);return b(o,-n,!0)}function h(){return f.every(({index:e})=>{const n=u.filter(t=>t!==e);return p(n,t)<=.1})}function O(){f.forEach(e=>{const{target:t,translate:n,slideLocation:o}=e,r=t();r!==o.get()&&(n.to(r),o.set(r))})}function x(){f.forEach(e=>e.translate.clear())}const v={canLoop:h,clear:x,loop:O,loopPoints:f};return v}function Ye(e,t,n){let o,r=!1;function c(c){function i(e){for(const n of e)if("childList"===n.type){c.reInit(),t.emit("slidesChanged");break}}n&&(o=new MutationObserver(e=>{r||(fe(n)||n(c,e))&&i(e)}),o.observe(e,{childList:!0}))}function i(){o&&o.disconnect(),r=!0}const s={init:c,destroy:i};return s}function Ke(e,t,n,o){const r={};let c,i=null,s=null,a=!1;function l(){c=new IntersectionObserver(e=>{a||(e.forEach(e=>{const n=t.indexOf(e.target);r[n]=e}),i=null,s=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(e=>c.observe(e))}function u(){c&&c.disconnect(),a=!0}function d(e){return we(r).reduce((t,n)=>{const o=parseInt(n),{isIntersecting:c}=r[o],i=e&&c,s=!e&&!c;return(i||s)&&t.push(o),t},[])}function f(e=!0){if(e&&i)return i;if(!e&&s)return s;const t=d(e);return e&&(i=t),e||(s=t),t}const p={init:l,destroy:u,get:f};return p}function Ze(e,t,n,o,r,c){const{measureSize:i,startEdge:s,endEdge:a}=e,l=n[0]&&r,u=m(),d=g(),f=n.map(i),p=b();function m(){if(!l)return 0;const e=n[0];return me(t[s]-e[s])}function g(){if(!l)return 0;const e=c.getComputedStyle(he(o));return parseFloat(e.getPropertyValue("margin-"+a))}function b(){return n.map((e,t,n)=>{const o=!t,r=xe(n,t);return o?f[t]+u:r?f[t]+d:n[t+1][s]-e[s]}).map(me)}const j={slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d};return j}function et(e,t,n,o,r,c,i,s,a){const{startEdge:l,endEdge:u,direction:d}=e,f=ue(n);function p(e,t){return ye(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?ye(e).reduce((n,f,p)=>{const m=he(n)||0,g=0===m,b=f===Oe(e),j=r[l]-c[m][l],y=r[l]-c[f][u],h=!o&&g?d(i):0,O=!o&&b?d(s):0,x=me(y-O-(j+h));return p&&x>t+a&&n.push(f),b&&n.push(e.length),n},[]).map((t,n,o)=>{const r=Math.max(o[n-1]||0);return e.slice(r,t)}):[]}function g(e){return f?p(e,n):m(e)}const b={groupSlides:g};return b}function tt(e,t,n,o,r,c,i){const{align:s,axis:a,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:g,slidesToScroll:b,skipSnaps:j,containScroll:y,watchResize:h,watchSlides:O,watchDrag:x,watchFocus:v}=c,w=2,k=Pe(),E=k.measure(t),S=n.map(k.measure),N=Ve(a,l),D=N.measureSize(E),V=Fe(D),B=Se(s,D),I=!d&&!!y,L=d||!!y,{slideSizes:R,slideSizesWithGaps:P,startGap:F,endGap:M}=Ze(N,E,S,n,L,r),A=et(N,D,b,d,E,S,F,M,w),{snaps:T,snapsAligned:q}=$e(N,B,E,S,A),z=-he(T)+he(P),{snapsContained:H,scrollContainLimit:C}=qe(D,z,q,y,w),$=I?H:q,{limit:_}=ze(z,$,d),U=Ie(Oe($),u,d),G=U.clone(),J=ye(n),W=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:o}},r)=>{o||n.constrain(e.pointerDown()),t.seek(r)},Q=({scrollBody:e,translate:t,location:n,offsetLocation:o,scrollLooper:r,slideLooper:c,dragHandler:i,animation:s,eventHandler:a,scrollBounds:l,options:{loop:u}},d)=>{const f=e.settled(),p=!l.shouldConstrain(),m=u?f:f&&p;m&&!i.pointerDown()&&(s.stop(),a.emit("settle")),m||a.emit("scroll");const g=n.get()*d+ee.get()*(1-d);o.set(g),u&&(r.loop(e.direction()),c.loop()),t.to(o.get())},X=De(o,r,e=>W(de,e),e=>Q(de,e)),Y=.68,K=$[U.get()],Z=We(K),ee=We(K),te=We(K),ne=We(K),oe=Ae(Z,te,ee,ne,f,Y),re=Ue(d,$,z,_,ne),ce=Ge(X,U,G,oe,re,ne,i),ie=Ce(_),se=Ne(),ae=Ke(t,n,i,g),{slideRegistry:le}=_e(I,y,$,C,A,J),ue=Je(e,n,le,ce,oe,se,i,v),de={ownerDocument:o,ownerWindow:r,eventHandler:i,containerRect:E,slideRects:S,animation:X,axis:N,dragHandler:Le(N,e,o,r,ne,Re(N,r),Z,X,ce,oe,re,U,i,V,p,m,j,Y,x),eventStore:se,percentOfView:V,index:U,indexPrevious:G,limit:_,location:Z,offsetLocation:te,previousLocation:ee,options:c,resizeHandler:Me(t,i,r,n,N,h,k),scrollBody:oe,scrollBounds:Te(_,te,ne,oe,V),scrollLooper:He(z,_,te,[Z,te,ee,ne]),scrollProgress:ie,scrollSnapList:$.map(ie.get),scrollSnaps:$,scrollTarget:re,scrollTo:ce,slideLooper:Xe(N,D,z,R,P,T,$,te,n),slideFocus:ue,slidesHandler:Ye(t,i,O),slidesInView:ae,slideIndexes:J,slideRegistry:le,slidesToScroll:A,target:ne,translate:Qe(N,t)};return de}function nt(){let e,t={};function n(t){e=t}function o(e){return t[e]||[]}function r(t){return o(t).forEach(n=>n(e,t)),a}function c(e,n){return t[e]=o(e).concat([n]),a}function i(e,n){return t[e]=o(e).filter(e=>e!==n),a}function s(){t={}}const a={init:n,emit:r,off:i,on:c,clear:s};return a}const ot={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function rt(e){function t(e,t){return ke(e,t||{})}function n(n){const o=n.breakpoints||{},r=we(o).filter(t=>e.matchMedia(t).matches).map(e=>o[e]).reduce((e,n)=>t(e,n),{});return t(n,r)}function o(t){return t.map(e=>we(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}const r={mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o};return r}function ct(e){let t=[];function n(n,o){return t=o.filter(({options:t})=>!1!==e.optionsAtMedia(t).active),t.forEach(t=>t.init(n,e)),o.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function o(){t=t.filter(e=>e.destroy())}const r={init:n,destroy:o};return r}function it(e,t,n){const o=e.ownerDocument,r=o.defaultView,c=rt(r),i=ct(c),s=Ne(),a=nt(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=c,{on:f,off:p,emit:m}=a,g=N;let b,j,y,h,O=!1,x=l(ot,it.globalOptions),v=l(x),w=[];function k(){const{container:t,slides:n}=v,o=de(t)?e.querySelector(t):t;y=o||e.children[0];const r=de(n)?y.querySelectorAll(n):n;h=[].slice.call(r||y.children)}function E(t){const n=tt(e,y,h,o,r,t,a);if(t.loop&&!n.slideLooper.canLoop()){const e=Object.assign({},t,{loop:!1});return E(e)}return n}function S(e,t){O||(x=l(x,e),v=u(x),w=t||w,k(),b=E(v),d([x,...w.map(({options:e})=>e)]).forEach(e=>s.add(e,"change",N)),v.active&&(b.translate.to(b.location.get()),b.animation.init(),b.slidesInView.init(),b.slideFocus.init(G),b.eventHandler.init(G),b.resizeHandler.init(G),b.slidesHandler.init(G),b.options.loop&&b.slideLooper.loop(),y.offsetParent&&h.length&&b.dragHandler.init(G),j=i.init(G,w)))}function N(e,t){const n=A();D(),S(l({startIndex:n},e),t),a.emit("reInit")}function D(){b.dragHandler.destroy(),b.eventStore.clear(),b.translate.clear(),b.slideLooper.clear(),b.resizeHandler.destroy(),b.slidesHandler.destroy(),b.slidesInView.destroy(),b.animation.destroy(),i.destroy(),s.clear()}function V(){O||(O=!0,s.clear(),D(),a.emit("destroy"),a.clear())}function B(e,t,n){v.active&&!O&&(b.scrollBody.useBaseFriction().useDuration(!0===t?0:v.duration),b.scrollTo.index(e,n||0))}function I(e){const t=b.index.add(1).get();B(t,e,-1)}function L(e){const t=b.index.add(-1).get();B(t,e,1)}function R(){const e=b.index.add(1).get();return e!==A()}function P(){const e=b.index.add(-1).get();return e!==A()}function F(){return b.scrollSnapList}function M(){return b.scrollProgress.get(b.location.get())}function A(){return b.index.get()}function T(){return b.indexPrevious.get()}function q(){return b.slidesInView.get()}function z(){return b.slidesInView.get(!1)}function H(){return j}function C(){return b}function $(){return e}function _(){return y}function U(){return h}const G={canScrollNext:R,canScrollPrev:P,containerNode:_,internalEngine:C,destroy:V,off:p,on:f,emit:m,plugins:H,previousScrollSnap:T,reInit:g,rootNode:$,scrollNext:I,scrollPrev:L,scrollProgress:M,scrollSnapList:F,scrollTo:B,selectedScrollSnap:A,slideNodes:U,slidesInView:q,slidesNotInView:z};return S(t,n),setTimeout(()=>a.emit("init"),0),G}function st(e={},t=[]){const n=Object(o["isRef"])(e),r=Object(o["isRef"])(t);let c=n?e.value:e,i=r?t.value:t;const s=Object(o["shallowRef"])(),a=Object(o["shallowRef"])();function l(){a.value&&a.value.reInit(c,i)}return Object(o["onMounted"])(()=>{ie()&&s.value&&(it.globalOptions=st.globalOptions,a.value=it(s.value,c,i))}),Object(o["onBeforeUnmount"])(()=>{a.value&&a.value.destroy()}),n&&Object(o["watch"])(e,e=>{se(c,e)||(c=e,l())}),r&&Object(o["watch"])(t,e=>{le(i,e)||(i=e,l())}),[s,a]}it.globalOptions=void 0,st.globalOptions=void 0;const at={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function lt(e={}){let t,n,o,r=!1,c=!0,i=!1,s=0;function a(r,s){n=r;const{mergeOptions:a,optionsAtMedia:l}=s,m=a(at,lt.globalOptions),g=a(m,e);if(t=l(g),n.scrollSnapList().length<=1)return;i=t.jump,o=!1;const{eventStore:b,ownerDocument:j}=n.internalEngine(),y=n.rootNode(),h=t.rootNode&&t.rootNode(y)||y,O=n.containerNode();n.on("pointerDown",d),t.stopOnInteraction||n.on("pointerUp",u),t.stopOnMouseEnter&&(b.add(h,"mouseenter",()=>{c=!1,d()}),t.stopOnInteraction||b.add(h,"mouseleave",()=>{c=!0,u()})),t.stopOnFocusIn&&(n.on("slideFocusStart",d),t.stopOnInteraction||b.add(O,"focusout",u)),b.add(j,"visibilitychange",f),t.playOnInit&&!p()&&u()}function l(){n.off("pointerDown",d).off("pointerUp",u).off("slideFocusStart",d),d(),o=!0,r=!1}function u(){if(o)return;if(!c)return;r||n.emit("autoplay:play");const{ownerWindow:e}=n.internalEngine();e.clearInterval(s),s=e.setInterval(y,t.delay),r=!0}function d(){if(o)return;r&&n.emit("autoplay:stop");const{ownerWindow:e}=n.internalEngine();e.clearInterval(s),s=0,r=!1}function f(){if(p())return c=r,d();c&&u()}function p(){const{ownerDocument:e}=n.internalEngine();return"hidden"===e.visibilityState}function m(e){"undefined"!==typeof e&&(i=e),c=!0,u()}function g(){r&&d()}function b(){r&&m()}function j(){return r}function y(){const{index:e}=n.internalEngine(),o=e.clone().add(1).get(),r=n.scrollSnapList().length-1,c=t.stopOnLastSnap&&o===r;c&&d(),n.canScrollNext()?n.scrollNext(i):n.scrollTo(0,i)}const h={name:"autoplay",options:e,init:a,destroy:l,play:m,stop:g,reset:b,isPlaying:j};return h}lt.globalOptions=void 0;var ut={props:{slidesSrcs:{type:Array,required:!0}},setup(){const[e]=st({align:"center",containScroll:"keepSnaps",dragFree:!0,loop:!0,autoplay:!0},[lt({delay:3e3,playOnInit:!0})]);return{emblaNode:e}}};n("d9c6");const dt=A()(ut,[["render",oe],["__scopeId","data-v-0e5c8ba2"]]);var ft=dt,pt={name:"ProjectDetails",components:{ProjectDetailsQuestions:q,ProjectDetailsRepositories:Z,ProjectDetailsCarousel:ft},props:{project:{type:String,required:!0},linkProject:{type:String,required:!0},linkRepository:{type:String,required:!0},linkRepositoryBack:{type:String,required:!1},slidesSrcs:{type:Array,required:!0}},setup(){return Object(o["onMounted"])(()=>{window.scrollTo(0,0)}),{}}};n("dda5");const mt=A()(pt,[["render",p],["__scopeId","data-v-5b0df783"]]);var gt=mt;const bt=["podcaster","jjoin"],jt={podcaster:"https://dawalberto.github.io/podcaster",jjoin:"https://github.com/dawalberto/Jjoin/releases"},yt={podcaster:"https://github.com/dawalberto/podcaster",jjoin:"https://github.com/dawalberto/Jjoin"},ht={podcaster:"",jjoin:""},Ot={podcaster:[n("dd05"),n("45a2"),n("61e7"),n("3582")],jjoin:[n("74a8"),n("8192"),n("61ed"),n("7d27"),n("39f9")]};var xt={name:"Project",components:{ProjectDetails:gt},setup(){const e=Object(i["c"])(),t=e.params.project;return{project:t,projects:bt,linkProject:jt[t],linkRepository:yt[t],linkRepositoryBack:ht[t],slidesSrcs:Ot[t]}}};const vt=A()(xt,[["render",c]]);t["default"]=vt},"0bc1":function(e,t,n){},3582:function(e,t,n){e.exports=n.p+"img/mobile.40e20ce1.png"},"39f9":function(e,t,n){e.exports=n.p+"img/desktop-4.2c040b60.png"},"45a2":function(e,t,n){e.exports=n.p+"img/desktop-2.e7aaea72.png"},"587e":function(e,t,n){},"61e7":function(e,t,n){e.exports=n.p+"img/desktop-3.96408642.png"},"61ed":function(e,t,n){e.exports=n.p+"img/desktop-2.40d30dda.png"},"74a8":function(e,t,n){e.exports=n.p+"img/desktop.917e6338.png"},"784b":function(e,t,n){e.exports=n.p+"img/absurd-por-que.443e1bf9.png"},"7d27":function(e,t,n){e.exports=n.p+"img/desktop-3.13f3f425.png"},8192:function(e,t,n){e.exports=n.p+"img/desktop-1.a58080e0.png"},"9b97":function(e,t,n){e.exports=n.p+"img/absurd-que-es.fb8013a8.png"},d9c6:function(e,t,n){"use strict";n("0bc1")},dd05:function(e,t,n){e.exports=n.p+"img/desktop.40dcfbf6.png"},dda5:function(e,t,n){"use strict";n("587e")},e04f:function(e,t,n){e.exports=n.p+"img/absurd-tecnologias.02e9dd9e.png"}}]);
//# sourceMappingURL=chunk-3b6cfe68.42483bac.js.map