!function(e){function t(t){for(var a,l,o=t[0],i=t[1],c=t[2],f=0,d=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(s&&s(t);d.length;)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},u=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=i;u.push([22,1]),n()}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(0);t.default=(e,t=60)=>{const n=a.useRef();n.current=e;const[r,u]=a.useState(!0),[l,o]=a.useState(0),i=e=>{e-l>=t&&(n.current(),o(e)),r&&window.requestAnimationFrame(i)};a.useEffect(()=>(i(l),()=>u(!1)),[])}},,,,,function(e,t,n){e.exports={overlay:"app-components-Header-header__overlay--wB7DY",nav:"app-components-Header-header__nav--KwdLd",group:"app-components-Header-header__group--1Ddbd",links:"app-components-Header-header__links--2edE3",title:"app-components-Header-header__title--1zsg_"}},,,,,,,,function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(41)),u=a(n(49)),l=a(n(52)),o=a(n(55));t.default={games:[{title:"circles",url:"/circles",component:r.default},{title:"waveform",url:"/waveform",component:u.default},{title:"spectrum",url:"/spectrum",component:l.default},{title:"animation",url:"/animation",component:o.default}],links:[{title:"github",url:"https://github.com/mayavera"},{title:"linkedin",url:"https://linkedin.com/in/mayavera"},{title:"codewars",url:"https://www.codewars.com/users/mayavera"},{title:"stackoverflow",url:"https://stackexchange.com/users/13452692/maya-vera"}]}},,function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,u){function l(e){try{i(a.next(e))}catch(e){u(e)}}function o(e){try{i(a.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}i((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),u=window.AudioContext||window.webkitAudioContext;t.default=(e=1024)=>{const[t,n]=r.useState();return r.useEffect(()=>{a(void 0,void 0,void 0,(function*(){const t=yield navigator.mediaDevices.getUserMedia({audio:!0}),a=new u({latencyHint:"interactive"}),r=a.createAnalyser();r.fftSize=e,a.createMediaStreamSource(t).connect(r),n(r)}))},[]),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(59);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},,,,function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(23);const r=a(n(0)),u=a(n(25)),l=a(n(29));u.default.render(r.default.createElement(l.default,null),document.getElementById("app"))},function(e,t,n){},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(30);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),u=n(9),l=a(n(15)),o=a(n(57)),i=a(n(64));t.default=()=>r.default.createElement(u.HashRouter,null,r.default.createElement("div",{className:i.default.container},r.default.createElement("div",{className:i.default.app},r.default.createElement(o.default,null),r.default.createElement("div",{className:i.default.content},l.default.games.map(e=>r.default.createElement(u.Route,{exact:!0,key:e.url,path:e.url,component:e.component}))))))},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(42);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(0)),i=l(n(43)),c=l(n(44)),s=l(n(2)),f=l(n(45)),d=n(46),p=l(n(47));let _=0;function m(e,t){const n=1*e.radius*t.radius/Math.pow(function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}(e,t),2);return{x:n*(t.x-e.x),y:n*(t.y-e.y)}}t.default=()=>{const e=o.useRef(),[t,n]=o.useState({}),[a,r]=o.useState(!1),[u,l]=o.useState(),[v,y]=o.useState(),[b,h]=o.useState(d.defaultOptions),[O,g]=o.useState(void 0),[j,M]=o.useState(!0),[P,x]=o.useState(!1),E=b.parallax&&O?.1*(e.current.getBoundingClientRect().width/2-O.x):0,w=b.parallax&&O?.1*(e.current.getBoundingClientRect().height/2-O.y):0;s.default(()=>{if(j){if(void 0!==u&&a){const e=t[u];n(Object.assign(Object.assign({},t),{[u]:Object.assign(Object.assign({},e),{radius:e.radius+1})}))}b.gravity&&n(e=>i.default.mapValues(e,(t,n)=>{if(u===Number(n)&&P)return t;let a=0,r=0;i.default.forOwn(e,(e,u)=>{if(u===n)return;const l=m(t,e);a+=l.x,r+=l.y});const l={x:a/t.radius,y:r/t.radius},o={x:t.velocity.x+l.x,y:t.velocity.y+l.y};return Object.assign(Object.assign({},t),{x:t.x+o.x,y:t.y+o.y,acceleration:l,velocity:o})}))}});return o.default.createElement("div",{className:f.default.container},o.default.createElement("svg",{ref:e,className:f.default.display,onMouseDown:a=>{const u=e.current.getBoundingClientRect(),o=a.clientX-u.left,i=a.clientY-u.top,s=a.target;if(x(!0),a.target===a.currentTarget){const e=(f={x:o,y:i},Object.assign({x:0,y:0,radius:10,id:(_+=1,_),color:c.default.random().brighten(2).css(),velocity:{x:0,y:0},acceleration:{x:0,y:0}},f));n(Object.assign(Object.assign({},t),{[e.id]:e})),l(e.id),y({x:0,y:0}),r(!0)}else if(s.hasAttribute("data-circle-id")){const e=Number(s.getAttribute("data-circle-id"));r(!1),l(e),y({x:o-t[e].x,y:i-t[e].y})}var f},onMouseMove:a=>{const r=e.current.getBoundingClientRect(),l=a.clientX-r.left,o=a.clientY-r.top;if(g({x:l,y:o}),void 0!==u&&P){const e=t[u];n(Object.assign(Object.assign({},t),{[u]:Object.assign(Object.assign({},e),{x:l-v.x,y:o-v.y})}))}},onMouseLeave:()=>{g(void 0),r(!1)},onMouseUp:()=>{r(!1),x(!1)}},Object.values(t).map(({id:e,radius:t,x:n,y:a,color:r,acceleration:l})=>o.default.createElement(o.Fragment,{key:e},o.default.createElement("circle",{"data-circle-id":e,r:t,cx:n+E,cy:a+w,stroke:"cyan",strokeWidth:u===e?3:0,style:{cursor:u?"grabbing":void 0,fill:r}}),b.accelerationLines&&o.default.createElement("line",{x1:n+E,y1:a+w,x2:n+E+100*l.x,y2:a+w+100*l.y,style:{stroke:"red",strokeWidth:2}})))),o.default.createElement(p.default,{options:b,running:j,onChange:h,onClear:()=>n({}),onStart:()=>M(!0),onStop:()=>M(!1)}))}},,,function(e,t,n){e.exports={container:"app-components-Circles-Circles__container--Yc7Vv",display:"app-components-Circles-Circles__display--1EcsF"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={gravity:!0,parallax:!1,accelerationLines:!1}},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(0)),i=l(n(48));t.default=e=>{const{options:t,running:n,onChange:a,onClear:r,onStart:u,onStop:l}=e,[c,s]=o.useState(!1);function f(e){a(Object.assign(Object.assign({},t),{[e.target.name]:e.target.checked}))}const d=()=>s(e=>!e);return o.default.createElement("div",{className:i.default.container},o.default.createElement("div",{className:i.default.title,onClick:d,onKeyPress:d,role:"button",tabIndex:0},o.default.createElement("h2",null,"Options"," ",c?"-":"+")),c&&o.default.createElement(o.default.Fragment,null,[["gravity","Gravity"],["parallax","Parallax"],["accelerationLines","Show Acceleration Lines"]].map(([e,n])=>o.default.createElement("p",{key:e},o.default.createElement("label",{htmlFor:e},o.default.createElement("input",{type:"checkbox",name:e,checked:t[e],onChange:f})," ",n))),o.default.createElement("p",null,o.default.createElement("button",{onClick:r,type:"button"},"Clear")),o.default.createElement("p",null,o.default.createElement("button",{onClick:n?l:u,type:"button"},n?"Stop":"Start"))))}},function(e,t,n){e.exports={container:"app-components-Circles-OptionsPanel__container--2tROI",title:"app-components-Circles-OptionsPanel__title--3_TsB"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(50);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(0)),i=l(n(2)),c=l(n(51)),s=l(n(17));t.default=()=>{const e=s.default(),[t,n]=o.useState();o.useEffect(()=>{e&&n(new Uint8Array(e.frequencyBinCount))},[null==e?void 0:e.frequencyBinCount]),i.default(()=>{e&&t&&e.getByteFrequencyData(t)});const a=[];return t&&t.forEach((e,t)=>a.push(o.default.createElement("div",{key:t,style:{height:e}}))),o.default.createElement("div",{className:c.default.waveform},a)}},function(e,t,n){e.exports={waveform:"app-components-Waveform-Waveform__waveform--s_R_J"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(53);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(0)),i=l(n(2)),c=l(n(17)),s=l(n(54));t.default=()=>{const e=c.default(),t=o.useRef(),[n,a]=o.useState();return o.useEffect(()=>{e&&a(new Uint8Array(e.frequencyBinCount))},[e]),i.default(()=>{if(!e||!n)return;const a=t.current.getContext("2d");a.save(),a.translate(1,0),a.drawImage(t.current,0,0),a.restore(),e.getByteFrequencyData(n),n.forEach((e,t)=>{a.fillStyle=`rgb(${e},${e},${e})`,a.fillRect(0,t,1,1)})}),o.default.createElement("canvas",{ref:t,className:s.default.canvas})}},function(e,t,n){e.exports={canvas:"app-components-Spectrum-Spectrum__canvas--27IHj"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(56);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(0)),i=l(n(2));t.default=()=>{const[e,t]=o.useState(0);return i.default(()=>t(e=>e+1)),o.default.createElement("div",null,"step"," ",e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(58);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}})},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),u=a(n(18)),l=a(n(62)),o=a(n(7));t.default=()=>r.default.createElement("div",{className:o.default.overlay},r.default.createElement("div",null,r.default.createElement(u.default,{to:"/"},"maya vera")),r.default.createElement(l.default,null))},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),u=n(9),l=a(n(60)),o=a(n(61)),i=e=>{const{to:t,children:n}=e,a=l.default(t);return""===a.protocol()&&""===a.domain()?r.default.createElement(u.Link,{to:t,className:o.default.link},n):["","http","https"].includes(a.protocol())?r.default.createElement("a",{href:t,className:o.default.link,target:"_blank",rel:"noopener noreferrer"},e.children):r.default.createElement("a",{href:t,className:o.default.link},n)};i.defaultProps={children:void 0},t.default=i},,function(e,t,n){e.exports={link:"app-components-Link-Link__link--17OD2"}},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),u=a(n(15)),l=a(n(63)),o=a(n(7));t.default=()=>r.default.createElement("div",{className:o.default.nav},Object.entries(u.default).map(([e,t])=>r.default.createElement(l.default,{key:e,name:e,group:t})))},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),u=a(n(18)),l=a(n(7));t.default=({name:e,group:t})=>r.default.createElement("div",{className:l.default.group},r.default.createElement("div",{className:l.default.title},e),r.default.createElement("div",{className:l.default.links},t.map(({title:e,url:t})=>r.default.createElement(u.default,{key:e,to:t},e))))},function(e,t,n){e.exports={container:"app-components-App-App__container--3umdZ",app:"app-components-App-App__app--Gqefs",content:"app-components-App-App__content--3Btz6"}}]);