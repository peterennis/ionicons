System.register(["./p-177439b1.system.js"],function(t){"use strict";var e;return{setters:[function(t){e=t.f}],execute:function(){var n,r,c,i,o,s;t("a",(n={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},r=function(t,n){return e("context-consumer",{subscribe:t,renderer:n})},c=new Map,i=n,o=function(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=i[t]}):e[t]=Object.assign({},i)},s=function(t,e){return c.has(t)||(c.set(t,e),o(e,t)),function(){c.has(t)&&c.delete(t)}},{Provider:function(t,e){return i=t.state,c.forEach(o),e},Consumer:function(t,e){return r(s,e[0])},injectProps:function(t,e){var n=t.prototype,r=n.connectedCallback,i=n.disconnectedCallback;n.connectedCallback=function(){if(s(this,e),r)return r.call(this)},n.disconnectedCallback=function(){c.delete(this),i&&i.call(this)}}}))}}});