(this["webpackJsonppoc-react-base-table"]=this["webpackJsonppoc-react-base-table"]||[]).push([[0],{14:function(e,n,t){e.exports=t(26)},19:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),a=t(12),r=t.n(a),i=(t(19),t(10)),l=t(8),u=t(9);t(23),t(24);function s(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"column-",t=arguments.length>2?arguments[2]:void 0;return new Array(e).fill(0).map((function(e,o){return Object(l.a)({},t,{key:"".concat(n).concat(o),dataKey:"".concat(n).concat(o),title:"Column ".concat(o),width:150})}))}(10),n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row-";return new Array(n).fill(0).map((function(n,o){return e.reduce((function(e,n,t){return e[n.dataKey]="Row ".concat(o," - Col ").concat(t),e}),{id:"".concat(t).concat(o),parentId:null})}))}(e,500),t=e.map((function(e,n){var t;return n<1&&(t=u.a.FrozenDirection.LEFT),Object(l.a)({},e,{frozen:t,resizable:!0,sortable:!0,maxWidth:300})})),a={key:"column-0",order:u.b.ASC},r=Object(o.useState)(n),s=Object(i.a)(r,2),d=s[0],f=s[1],m=Object(o.useState)(a),v=Object(i.a)(m,2),h=v[0],b=v[1],p=Object(o.useRef)(null);return c.a.createElement(u.c,{ref:p,fixed:!0,columns:t,data:d,width:1e3,height:400,sortBy:h,onColumnSort:function(e){b(e),f(d.reverse())},cellProps:function(e){var n=e.columnIndex;return{"data-col-idx":n,onMouseEnter:function(){p.current.getDOMNode().classList.add("active-col-".concat(n))},onMouseLeave:function(){p.current.getDOMNode().classList.remove("active-col-".concat(n))}}},headerCellProps:function(e){return{"data-col-idx":e.columnIndex}}})}t(25);var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1dd8270.chunk.js.map