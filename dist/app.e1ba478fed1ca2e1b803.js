!function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==u[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},u={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;a.push([21,1]),n()}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.default=(e,t=60)=>{const n=r.useRef();n.current=e;const[u,a]=r.useState(!0),[o,i]=r.useState(0),l=e=>{e-o>=t&&(n.current(),i(e)),u&&window.requestAnimationFrame(l)};r.useEffect(()=>(l(o),()=>a(!1)),[])}},,,,function(e,t,n){e.exports={overlay:"app-components-Header-header__overlay--wB7DY",nav:"app-components-Header-header__nav--KwdLd",group:"app-components-Header-header__group--1Ddbd",links:"app-components-Header-header__links--2edE3",title:"app-components-Header-header__title--1zsg_"}},,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(40)),a=r(n(43)),o=r(n(46)),i=r(n(49));t.default={games:[{title:"circles",url:"/circles",component:u.default},{title:"waveform",url:"/waveform",component:a.default},{title:"spectrum",url:"/spectrum",component:o.default},{title:"animation",url:"/animation",component:i.default}],links:[{title:"github",url:"https://github.com/mayavera"},{title:"linkedin",url:"https://linkedin.com/in/mayavera"},{title:"codewars",url:"https://www.codewars.com/users/mayavera"},{title:"stackoverflow",url:"https://stackexchange.com/users/13452692/maya-vera"}]}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(u,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const u=n(0),a=window.AudioContext||window.webkitAudioContext;t.default=(e=1024)=>{const[t,n]=u.useState();return u.useEffect(()=>{r(void 0,void 0,void 0,(function*(){const t=yield navigator.mediaDevices.getUserMedia({audio:!0}),r=new a({latencyHint:"interactive"}),u=r.createAnalyser();u.fftSize=e,r.createMediaStreamSource(t).connect(u),n(u)}))},[]),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(53);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(22);const u=r(n(0)),a=r(n(24)),o=r(n(28));a.default.render(u.default.createElement(o.default,null),document.getElementById("app"))},function(e,t,n){},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(0)),a=n(8),o=r(n(15)),i=r(n(51)),l=r(n(59));t.default=()=>u.default.createElement(a.HashRouter,null,u.default.createElement("div",{className:l.default.app},u.default.createElement(i.default,null),u.default.createElement("div",{className:l.default.content},o.default.games.map(e=>u.default.createElement(a.Route,{exact:!0,path:e.url,component:e.component})))))},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(41);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return u(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(2)),c=o(n(42));let s=0;function f(){let e="#";for(let t=0;t<6;t+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}t.default=()=>{const e=i.useRef(),[t,n]=i.useState({}),[r,u]=i.useState(!1),[a,o]=i.useState(),[d,p]=i.useState();l.default(()=>{if(void 0!==a&&r){const e=t[a];n(Object.assign(Object.assign({},t),{[a]:Object.assign(Object.assign({},e),{radius:e.radius+1})}))}});return i.default.createElement("svg",{ref:e,className:c.default.display,onMouseDown:r=>{const a=e.current.getBoundingClientRect(),i=r.clientX-a.left,l=r.clientY-a.top,c=r.target;if(r.target===r.currentTarget){const e={id:(s+=1,s),x:i,y:l,radius:10,color:f()};n(Object.assign(Object.assign({},t),{[e.id]:e})),o(e.id),p({x:0,y:0}),u(!0)}else{const e=Number(c.getAttribute("data-circle-id"));u(!1),o(e),p({x:i-t[e].x,y:l-t[e].y})}},onMouseMove:r=>{const u=e.current.getBoundingClientRect(),o=r.clientX-u.left,i=r.clientY-u.top;if(void 0!==a){const e=t[a];n(Object.assign(Object.assign({},t),{[a]:Object.assign(Object.assign({},e),{x:o-d.x,y:i-d.y})}))}},onMouseUp:()=>{o(void 0)}},Object.values(t).map(({id:e,radius:t,x:n,y:r,color:u})=>i.default.createElement("circle",{key:e,"data-circle-id":e,r:t,cx:n,cy:r,style:{cursor:a?"grabbing":void 0,fill:u},opacity:.5})))}},function(e,t,n){e.exports={display:"app-components-Circles-Circles__display--1EcsF"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return u(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(2)),c=o(n(45)),s=o(n(16));t.default=()=>{const e=s.default(),[t,n]=i.useState();i.useEffect(()=>{e&&n(new Uint8Array(e.frequencyBinCount))},[null==e?void 0:e.frequencyBinCount]),l.default(()=>{e&&t&&e.getByteFrequencyData(t)});const r=[];return t&&t.forEach((e,t)=>r.push(i.default.createElement("div",{key:t,style:{height:e}}))),i.default.createElement("div",{className:c.default.waveform},r)}},function(e,t,n){e.exports={waveform:"app-components-Waveform-Waveform__waveform--s_R_J"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return u(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(2)),c=o(n(16)),s=o(n(48));t.default=()=>{const e=c.default(),t=i.useRef(),[n,r]=i.useState();return i.useEffect(()=>{e&&r(new Uint8Array(e.frequencyBinCount))},[e]),l.default(()=>{if(!e||!n)return;const r=t.current.getContext("2d");r.save(),r.translate(1,0),r.drawImage(t.current,0,0),r.restore(),e.getByteFrequencyData(n),n.forEach((e,t)=>{r.fillStyle=`rgb(${e},${e},${e})`,r.fillRect(0,t,1,1)})}),i.default.createElement("canvas",{ref:t,className:s.default.canvas})}},function(e,t,n){e.exports={canvas:"app-components-Spectrum-Spectrum__canvas--27IHj"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(50);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return u(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(n(0)),l=o(n(2));t.default=()=>{const[e,t]=i.useState(0);return l.default(()=>t(e=>e+1)),i.default.createElement("div",null,"step"," ",e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(0)),a=r(n(17)),o=r(n(57)),i=r(n(6));t.default=()=>u.default.createElement("div",{className:i.default.overlay},u.default.createElement("div",null,u.default.createElement(a.default,{to:"/"},"maya vera")),u.default.createElement(o.default,null))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(0)),a=n(8),o=r(n(54)),i=r(n(56)),l=e=>{const{to:t,children:n}=e,r=o.default(t);return""===r.protocol()&&""===r.domain()?u.default.createElement(a.Link,{to:t,className:i.default.link},n):["","http","https"].includes(r.protocol())?u.default.createElement("a",{href:t,className:i.default.link,target:"_blank",rel:"noopener noreferrer"},e.children):u.default.createElement("a",{href:t,className:i.default.link},n)};l.defaultProps={children:void 0},t.default=l},,,function(e,t,n){e.exports={link:"app-components-Link-Link__link--17OD2"}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(0)),a=r(n(15)),o=r(n(58)),i=r(n(6));t.default=()=>u.default.createElement("div",{className:i.default.nav},Object.entries(a.default).map(([e,t])=>u.default.createElement(o.default,{key:e,name:e,group:t})))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=r(n(0)),a=r(n(17)),o=r(n(6));t.default=({name:e,group:t})=>u.default.createElement("div",{className:o.default.group},u.default.createElement("div",{className:o.default.title},e),u.default.createElement("div",{className:o.default.links},t.map(({title:e,url:t})=>u.default.createElement(a.default,{key:e,to:t},e))))},function(e,t,n){e.exports={app:"app-components-App-App__app--Gqefs",content:"app-components-App-App__content--3Btz6"}}]);