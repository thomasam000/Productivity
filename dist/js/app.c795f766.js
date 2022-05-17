(function(){"use strict";var e={3516:function(e,t,r){var n=r(9242),o=r(3396);function i(e,t,r,n,i,u){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a,{key:`${e.$route.path}${JSON.stringify(e.$route.query)}`})}var u={name:"App",components:{}},a=r(89);const s=(0,a.Z)(u,[["render",i]]);var c=s,l=r(678);const d=[{path:"/",name:"Home",component:()=>r.e(268).then(r.bind(r,6197))}],f=(0,l.p7)({history:(0,l.PO)(),routes:d,scrollBehavior(e){const t={};return e.meta.toTop&&(t.top=0),e.meta.smoothScroll&&(t.behavior="smooth"),t}});var p=f,g=r(65),m=JSON.parse('{"taskCategory":[{"taskIds":["-KsjPjasLh0TFtZmffEo"],"name":"Self Care","slug":"self-care","id":"-KpR7vRkiRPpbUd_TVAR"},{"taskIds":["-KpOx5Y4AqRr3sB4Ybwj","-KsjO4_W3W9Q2Z2UmuPr","-KsjPat5MWCx-dkjNVg8"],"name":"Spiritual","slug":"spritual","id":"-KsjPKA6hDuHlQK_lJWO"},{"taskIds":["-Kvclvu_Qd9QdS9ciqUl"],"name":"Around The House","slug":"around-the-house","id":"-KvclpNRjpI5W-j0JQGU"}],"tasks":[{"categoryId":"-KsjPKA6hDuHlQK_lJWO","description":"Time spend in minutes studying the scriptures each day.","createdOn":1594035908,"name":"Scripture Study","slug":"scripture-study","id":"-KpOx5Y4AqRr3sB4Ybwj","type":"minutes","goal":30},{"categoryId":"-KsjPKA6hDuHlQK_lJWO","description":"pray before going to work in the morning","createdOn":1594035908,"name":"Morning Prayer","slug":"morning-prayer","id":"-KsjO4_W3W9Q2Z2UmuPr","type":"boolean","goal":true},{"categoryId":"-KsjPKA6hDuHlQK_lJWO","description":"pray before going to sleep","createdOn":1594035908,"name":"Nightly Prayer","slug":"nightly-prayer","id":"-KsjPat5MWCx-dkjNVg8","type":"boolean","goal":true},{"categoryId":"-KpR7vRkiRPpbUd_TVAR","description":"time (in minutes) spent each day doing physical activity","createdOn":1594035908,"name":"Exercise","slug":"exercise","id":"-KsjPjasLh0TFtZmffEo","type":"minutes","goal":60},{"categoryId":"-KvclpNRjpI5W-j0JQGU","description":"Made bed in the morning before work","createdOn":1594035908,"name":"Make the bed","slug":"make-the-bed","id":"-Kvclvu_Qd9QdS9ciqUl","type":"boolean","goal":true}],"dailyAgenda":[{"date":1594035908,"tasks":[{"taskID":"-KpOx5Y4AqRr3sB4Ybwj","result":20},{"taskID":"-KsjO4_W3W9Q2Z2UmuPr","result":true},{"taskID":"-KsjPat5MWCx-dkjNVg8","result":false},{"taskID":"-KsjPjasLh0TFtZmffEo","result":0},{"taskID":"-Kvclvu_Qd9QdS9ciqUl","result":true}]},{"date":1594122308,"tasks":[{"taskID":"-KpOx5Y4AqRr3sB4Ybwj","result":20},{"taskID":"-KsjO4_W3W9Q2Z2UmuPr","result":true},{"taskID":"-KsjPat5MWCx-dkjNVg8","result":false},{"taskID":"-KsjPjasLh0TFtZmffEo","result":0},{"taskID":"-Kvclvu_Qd9QdS9ciqUl","result":true}]}]}'),v=(0,g.MT)({options:{state:m}});const h=(0,n.ri)(c);h.use(p),h.use(v),h.mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<n.length;s++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/Home.a42f8058.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="productivity:";r.l=function(n,o,i,u){if(e[n])e[n].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[o];var f=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var u=r.p+r.u(t),a=new Error,s=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};r.l(u,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,u=n[0],a=n[1],s=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(t&&t(n);c<u.length;c++)i=u[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkproductivity"]=self["webpackChunkproductivity"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3516)}));n=r.O(n)})();
//# sourceMappingURL=app.c795f766.js.map