(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),s=(n(9),n(3)),a=(n(10),n(0));var u=function(){var t=o.a.useState(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=o.a.useState(""),i=Object(s.a)(r,2),u=i[0],j=i[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("p",{children:"Enter first name"}),Object(a.jsx)("input",{onChange:function(t){return c(t.target.value)}}),Object(a.jsx)("button",{type:"button",onClick:function(){var t="/"+n;console.log(t),fetch(t).then((function(t){return t.json()})).then((function(t){return j(t.message)})).catch((function(t){console.log(t)}))},children:"Submit"}),Object(a.jsx)("p",{children:u})]})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4cc0a063.chunk.js.map