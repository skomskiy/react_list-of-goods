(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s,r=n(5),a=n.n(r),c=n(1),i=n(6),o=n(7),u=n(10),l=n(8),h=n(9),b=n(2),j=n.n(b),p=(n(15),n(16),n(3)),d=n.n(p),O=n(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function g(t,e){var n=e.sortType,r=e.isReversed,a=Object(h.a)(t);return n===s.ALPHABET&&a.sort((function(t,e){return t.localeCompare(e)})),n===s.LENGTH&&a.sort((function(t,e){return t.length-e.length})),console.log(n,r),r?a.reverse():a}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isReversed:!1,sortType:s.NONE},t}return Object(o.a)(n,[{key:"changeSatate",value:function(t,e){return"sort"===t?"alpha"===e?this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{sortType:s.ALPHABET})})):this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{sortType:s.LENGTH})})):"reverse"!==t||e?this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{sortType:s.NONE,isReversed:!1})})):this.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isReversed:!t.isReversed})}))}},{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{className:"section content",children:[Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("button",{onClick:function(){return t.changeSatate("sort","alpha")},className:d()("button is-info",{"is-light":this.state.sortType!==s.ALPHABET}),type:"button",children:"Sort alphabetically"}),Object(O.jsx)("button",{onClick:function(){return t.changeSatate("sort","length")},className:d()("button is-info",{"is-light":this.state.sortType!==s.LENGTH}),type:"button",children:"Sort by length"}),Object(O.jsx)("button",{onClick:function(){return t.changeSatate("reverse")},className:d()("button is-warning",{"is-light":!this.state.isReversed}),type:"button",children:"Reverse"}),this.state.sortType||this.state.isReversed?Object(O.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.changeSatate()},children:"Reset"}):""]}),Object(O.jsx)("ul",{children:g(f,this.state).map((function(t){return Object(O.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(j.a.PureComponent);a.a.render(Object(O.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.095360cf.chunk.js.map