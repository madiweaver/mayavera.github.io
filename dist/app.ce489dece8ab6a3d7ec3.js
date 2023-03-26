(()=>{"use strict";var e,t={471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={container:"app-components-App-App__container--y4eZv",app:"app-components-App-App__app--qyY2_",content:"app-components-App-App__content--NOXrI"}},148:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={container:"app-components-Circles-Circles__container--TcKeg",display:"app-components-Circles-Circles__display--mXlv9"}},523:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={container:"app-components-Circles-OptionsPanel__container--GG9rF",title:"app-components-Circles-OptionsPanel__title--TuRDi"}},340:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={overlay:"app-components-Header-header__overlay--Cda3g",nav:"app-components-Header-header__nav--mqu3v",group:"app-components-Header-header__group--o9bMJ",links:"app-components-Header-header__links--ByAqH",title:"app-components-Header-header__title--yfv4X"}},749:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={link:"app-components-Link-Link__link--RFFc9"}},481:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={canvas:"app-components-Spectrum-Spectrum__canvas--BMmYY"}},385:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={waveform:"app-components-Waveform-Waveform__waveform--RGYLx"}},562:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={}},474:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(114)),i=l(n(990));t.default=()=>{const[e,t]=(0,o.useState)(0);return(0,i.default)((()=>t((e=>e+1)))),o.default.createElement("div",null,"step"," ",e)}},617:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(474);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},755:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(114)),u=n(452),l=a(n(741)),o=a(n(143)),i=a(n(471));t.default=()=>r.default.createElement(u.HashRouter,null,r.default.createElement("div",{className:i.default.container},r.default.createElement("div",{className:i.default.app},r.default.createElement(o.default,null),r.default.createElement("div",{className:i.default.content},r.default.createElement(u.Routes,null,l.default.games.map((e=>r.default.createElement(u.Route,{key:e.url,path:e.url,Component:e.component}))))))))},367:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(755);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},65:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(114)),i=l(n(477)),c=l(n(778)),d=l(n(990)),f=l(n(148)),s=n(567),p=l(n(961));let _=0;const m=1;t.default=()=>{const e=(0,o.useRef)(),[t,n]=(0,o.useState)({}),[a,r]=(0,o.useState)(!1),[u,l]=(0,o.useState)(),[v,y]=(0,o.useState)(),[h,b]=(0,o.useState)(s.defaultOptions),[g,O]=(0,o.useState)(void 0),[j,M]=(0,o.useState)(!0),[P,w]=(0,o.useState)(!1),E=h.parallax&&g?.1*(e.current.getBoundingClientRect().width/2-g.x):0,x=h.parallax&&g?.1*(e.current.getBoundingClientRect().height/2-g.y):0;return(0,d.default)((()=>{if(j){if(void 0!==u&&a){const e=t[u];n(Object.assign(Object.assign({},t),{[u]:Object.assign(Object.assign({},e),{radius:e.radius+1})}))}h.gravity&&n((e=>i.default.mapValues(e,((t,n)=>{if(u===Number(n)&&P)return t;let a=0,r=0;i.default.forOwn(e,((e,u)=>{if(u===n)return;const l=function(e,t){const n=m*e.radius*t.radius/Math.pow(function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}(e,t),2);return{x:n*(t.x-e.x),y:n*(t.y-e.y)}}(t,e);a+=l.x,r+=l.y}));const l={x:a/t.radius,y:r/t.radius},o={x:t.velocity.x+l.x,y:t.velocity.y+l.y};return Object.assign(Object.assign({},t),{x:t.x+o.x,y:t.y+o.y,acceleration:l,velocity:o})}))))}})),o.default.createElement("div",{className:f.default.container},o.default.createElement("svg",{ref:e,className:f.default.display,onMouseDown:a=>{const u=e.current.getBoundingClientRect(),o=a.clientX-u.left,i=a.clientY-u.top,d=a.target;if(w(!0),a.target===a.currentTarget){const e=(f={x:o,y:i},Object.assign({x:0,y:0,radius:10,id:(_+=1,_),color:c.default.random().brighten(2).css(),velocity:{x:0,y:0},acceleration:{x:0,y:0}},f));n(Object.assign(Object.assign({},t),{[e.id]:e})),l(e.id),y({x:0,y:0}),r(!0)}else if(d.hasAttribute("data-circle-id")){const e=Number(d.getAttribute("data-circle-id"));r(!1),l(e),y({x:o-t[e].x,y:i-t[e].y})}var f},onMouseMove:a=>{const r=e.current.getBoundingClientRect(),l=a.clientX-r.left,o=a.clientY-r.top;if(O({x:l,y:o}),void 0!==u&&P){const e=t[u];n(Object.assign(Object.assign({},t),{[u]:Object.assign(Object.assign({},e),{x:l-v.x,y:o-v.y})}))}},onMouseLeave:()=>{O(void 0),r(!1)},onMouseUp:()=>{r(!1),w(!1)}},Object.values(t).map((({id:e,radius:t,x:n,y:a,color:r,acceleration:l})=>o.default.createElement(o.Fragment,{key:e},o.default.createElement("circle",{"data-circle-id":e,r:t,cx:n+E,cy:a+x,stroke:"cyan",strokeWidth:u===e?3:0,style:{cursor:u?"grabbing":void 0,fill:r}}),h.accelerationLines&&o.default.createElement("line",{x1:n+E,y1:a+x,x2:n+E+100*l.x,y2:a+x+100*l.y,style:{stroke:"red",strokeWidth:2}}))))),o.default.createElement(p.default,{options:h,running:j,onChange:b,onClear:()=>n({}),onStart:()=>M(!0),onStop:()=>M(!1)}))}},567:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={gravity:!0,parallax:!1,accelerationLines:!1}},961:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(114)),i=l(n(523));t.default=e=>{const{options:t,running:n,onChange:a,onClear:r,onStart:u,onStop:l}=e,[c,d]=(0,o.useState)(!1);function f(e){a(Object.assign(Object.assign({},t),{[e.target.name]:e.target.checked}))}const s=()=>d((e=>!e));return o.default.createElement("div",{className:i.default.container},o.default.createElement("div",{className:i.default.title,onClick:s,onKeyPress:s,role:"button",tabIndex:0},o.default.createElement("h2",null,"Options"," ",c?"-":"+")),c&&o.default.createElement(o.default.Fragment,null,[["gravity","Gravity"],["parallax","Parallax"],["accelerationLines","Show Acceleration Lines"]].map((([e,n])=>o.default.createElement("p",{key:e},o.default.createElement("label",{htmlFor:e},o.default.createElement("input",{type:"checkbox",name:e,checked:t[e],onChange:f})," ",n)))),o.default.createElement("p",null,o.default.createElement("button",{onClick:r,type:"button"},"Clear")),o.default.createElement("p",null,o.default.createElement("button",{onClick:n?l:u,type:"button"},n?"Stop":"Start"))))}},885:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(65);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},379:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(114)),u=a(n(399)),l=a(n(286)),o=a(n(340));t.default=()=>r.default.createElement("div",{className:o.default.overlay},r.default.createElement("div",null,r.default.createElement(u.default,{to:"/"},"maya vera")),r.default.createElement(l.default,null))},286:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(114)),u=a(n(741)),l=a(n(721)),o=a(n(340));t.default=()=>r.default.createElement("div",{className:o.default.nav},Object.entries(u.default).map((([e,t])=>r.default.createElement(l.default,{key:e,name:e,group:t}))))},721:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(114)),u=a(n(399)),l=a(n(340));t.default=({name:e,group:t})=>r.default.createElement("div",{className:l.default.group},r.default.createElement("div",{className:l.default.title},e),r.default.createElement("div",{className:l.default.links},t.map((({title:e,url:t})=>r.default.createElement(u.default,{key:e,to:t},e)))))},143:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(379);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},368:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(114)),u=n(452),l=a(n(554)),o=a(n(749)),i=e=>{const{to:t,children:n}=e,a=(0,l.default)(t);return""===a.protocol()&&""===a.domain()?r.default.createElement(u.Link,{to:t,className:o.default.link},n):["","http","https"].includes(a.protocol())?r.default.createElement("a",{href:t,className:o.default.link,target:"_blank",rel:"noopener noreferrer"},e.children):r.default.createElement("a",{href:t,className:o.default.link},n)};i.defaultProps={children:void 0},t.default=i},399:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(368);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},48:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(114)),i=l(n(990)),c=l(n(212)),d=l(n(481));t.default=()=>{const e=(0,c.default)(),t=(0,o.useRef)(),[n,a]=(0,o.useState)();return(0,o.useEffect)((()=>{e&&a(new Uint8Array(e.frequencyBinCount))}),[e]),(0,i.default)((()=>{if(!e||!n)return;const a=t.current.getContext("2d");a.save(),a.translate(1,0),a.drawImage(t.current,0,0),a.restore(),e.getByteFrequencyData(n),n.forEach(((e,t)=>{a.fillStyle=`rgb(${e},${e},${e})`,a.fillRect(0,t,1,1)}))})),o.default.createElement("canvas",{ref:t,className:d.default.canvas})}},199:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(48);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},763:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(n(114)),i=l(n(990)),c=l(n(385)),d=l(n(212));t.default=()=>{const e=(0,d.default)(),[t,n]=(0,o.useState)();(0,o.useEffect)((()=>{e&&n(new Uint8Array(e.frequencyBinCount))}),[null==e?void 0:e.frequencyBinCount]),(0,i.default)((()=>{e&&t&&e.getByteFrequencyData(t)}));const a=[];return t&&t.forEach(((e,t)=>a.push(o.default.createElement("div",{key:t,style:{height:e}})))),o.default.createElement("div",{className:c.default.waveform},a)}},256:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(763);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},990:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=n(114);t.default=(e,t=60)=>{const n=(0,a.useRef)();n.current=e;const[r,u]=(0,a.useState)(!0),[l,o]=(0,a.useState)(0),i=e=>{e-l>=t&&(n.current(),o(e)),r&&window.requestAnimationFrame(i)};(0,a.useEffect)((()=>(i(l),()=>u(!1))),[])}},212:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,u){function l(e){try{i(a.next(e))}catch(e){u(e)}}function o(e){try{i(a.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}i((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(114),u=window.AudioContext||window.webkitAudioContext;t.default=(e=1024)=>{const[t,n]=(0,r.useState)();return(0,r.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){const t=yield navigator.mediaDevices.getUserMedia({audio:!0}),a=new u({latencyHint:"interactive"}),r=a.createAnalyser();r.fftSize=e,a.createMediaStreamSource(t).connect(r),n(r)}))}),[]),t}},229:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(562);const r=a(n(114)),u=a(n(357)),l=a(n(367));u.default.render(r.default.createElement(l.default,null),document.getElementById("app"))},741:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(885)),u=a(n(256)),l=a(n(199)),o=a(n(617));t.default={games:[{title:"circles",url:"/circles",component:r.default},{title:"waveform",url:"/waveform",component:u.default},{title:"spectrum",url:"/spectrum",component:l.default},{title:"animation",url:"/animation",component:o.default}],links:[{title:"github",url:"https://github.com/mayavera"},{title:"linkedin",url:"https://linkedin.com/in/mayavera"},{title:"codewars",url:"https://www.codewars.com/users/mayavera"},{title:"stackoverflow",url:"https://stackexchange.com/users/13452692/maya-vera"}]}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var u=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(u.exports,u,u.exports,a),u.loaded=!0,u.exports}a.m=t,e=[],a.O=(t,n,r,u)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,u]=e[d],o=!0,i=0;i<n.length;i++)(!1&u||l>=u)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(o=!1,u<l&&(l=u));if(o){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[n,r,u]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,u,[l,o,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(i)var d=i(a)}for(t&&t(n);c<l.length;c++)u=l[c],a.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return a.O(d)},n=self.webpackChunkmayavera_github_io=self.webpackChunkmayavera_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[73],(()=>a(229)));r=a.O(r)})();