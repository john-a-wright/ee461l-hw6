(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(4),r=n.n(i),a=(n(9),n(3)),s=(n(10),n(0));var u=function(){var t=o.a.useState(""),e=Object(a.a)(t,2),n=e[0],c=e[1],i=o.a.useState(""),r=Object(a.a)(i,2),u=r[0],h=r[1];return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("p",{children:"Enter first name"}),Object(s.jsx)("input",{onChange:function(t){return c(t.target.value)}}),Object(s.jsx)("button",{type:"button",onClick:function(){fetch("http://127.0.0.1:5000/"+n).then((function(t){t.ok&&(h(t),console.log(t))})).catch((function(t){console.log(t)}))},children:"Submit"}),Object(s.jsx)("p",{children:u})]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7f4d00c9.chunk.js.map