(this["webpackJsonppoc-react-base-table"]=this["webpackJsonppoc-react-base-table"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),l=(n(19),n(10)),i=n(9),u=n(8);n(23),n(24);function s(e){var t=e.columns,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row-";return new Array(t).fill(0).map((function(t,a){return e.reduce((function(e,t,n){return e[t.dataKey]="Row ".concat(a," - Col ").concat(n),e}),{id:"".concat(n).concat(a),parentId:null})}))}(t,500),o={key:"column-0",order:u.b.ASC},r=Object(a.useState)(n),l=Object(i.a)(r,2),s=l[0],d=l[1],m=Object(a.useState)(o),f=Object(i.a)(m,2),h=f[0],v=f[1],p=Object(a.useRef)(null);return c.a.createElement(u.c,{ref:p,columns:t,data:s,width:1e3,height:400,sortBy:h,onColumnSort:function(e){v(e),d(s.reverse())},cellProps:function(e){var t=e.columnIndex;return{"data-col-idx":t,onMouseEnter:function(){p.current.getDOMNode().classList.add("active-col-".concat(t))},onMouseLeave:function(){p.current.getDOMNode().classList.remove("active-col-".concat(t))}}},headerCellProps:function(e){return{"data-col-idx":e.columnIndex}},fixed:!0})}n(25);function d(e){var t=e.columns,n=e.onChange;function a(e){n(e)}return c.a.createElement("div",{className:"filter"},c.a.createElement("h3",null,"Filter"),c.a.createElement("ul",{className:"filter-list"},t.map((function(e){return c.a.createElement("li",{key:e.key,className:"filter-elem"},c.a.createElement("label",{className:"filter-label"},c.a.createElement("input",{type:"checkbox",checked:e.hidden,onChange:function(){return a(e.key)}}),e.title))}))))}n(26);var m=function(){var e=Object(a.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"column-",n=arguments.length>2?arguments[2]:void 0;return new Array(e).fill(0).map((function(e,a){return Object(l.a)({},n,{key:"".concat(t).concat(a),dataKey:"".concat(t).concat(a),title:"Column ".concat(a),width:150})}))}(10)),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useMemo)((function(){return n.map((function(e,t){var n;return t<1&&(n=u.a.FrozenDirection.LEFT),Object(l.a)({},e,{frozen:n,hidden:e.hidden,resizable:!0,sortable:!0,maxWidth:300})}))}),[n]);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-filter"},c.a.createElement(d,{columns:n,onChange:function(e,t){var a=n.map((function(t){var n=t;return n.key===e&&(n.hidden=!n.hidden),n}));o(a)}})),c.a.createElement("div",{className:"App-table"},c.a.createElement(s,{columns:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.86102a60.chunk.js.map