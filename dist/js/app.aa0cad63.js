(function(n){function t(t){for(var i,o,r=t[0],s=t[1],u=t[2],f=0,h=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&h.push(l[o][0]),l[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);a&&a(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var n,t=0;t<c.length;t++){for(var e=c[t],i=!0,r=1;r<e.length;r++){var s=e[r];0!==l[s]&&(i=!1)}i&&(c.splice(t--,1),n=o(o.s=e[0]))}return n}var i={},l={app:0},c=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)o.d(e,i,function(t){return n[t]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var a=s;c.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var i=e("85ec"),l=e.n(i);l.a},"43a1":function(n,t,e){"use strict";var i=e("5bdf"),l=e.n(i);l.a},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"warpper"},[e("div",[n._v("第"+n._s(n.n)+"手")]),e("div",{staticClass:"chess"},[e("div",{staticClass:"row"},[e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(0,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(1,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(3,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(4,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(6,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(7,t)}}}),e("cell",{attrs:{n:n.n,finished:n.finished},on:{click:function(t){return n.onclickCell(8,t)}}})],1)]),e("div",[n._v("结果:"+n._s(null==n.result?"胜负未分":"胜方为"+n.result))])])},c=[],o=(e("99af"),e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)])}),r=[],s={props:["n","finished"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""==this.text&&(this.finished||(this.a=!0,this.text=this.n%2==0?"x":"o",this.$emit("click",this.text)))}}},u=s,a=(e("43a1"),e("2877")),f=Object(a["a"])(u,o,r,!1,null,null,null),h=f.exports,d={components:{cell:h},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null,finished:!1}},methods:{onclickCell:function(n,t){console.log("".concat(n,"被点击,内容为：").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)console.log("----------"),console.log(this.map[t][0]),console.log(this.map[t][1]),console.log(this.map[t][2]),console.log("----------"),null!=n[t][0]&&this.map[t][0]==this.map[t][1]&&this.map[t][1]==this.map[t][2]&&(this.result=n[t][0],this.finished=!0,console.log(n[t][0]));for(var e=0;e<2;e++)null!=n[0][e]&&n[0][e]==this.map[1][e]&&n[1][e]==n[2][e]&&(this.result=n[0][e],this.finished=!0);null!=n[0][0]&&n[0][0]==this.map[1][1]&&n[1][1]==n[2][2]&&(this.result=n[0][0],this.finished=!0),null!=n[0][2]&&n[0][2]==this.map[1][1]&&n[1][1]==n[2][1]&&(this.result=n[0][2],this.finished=!0)}}},p=d,v=(e("034f"),Object(a["a"])(p,l,c,!1,null,null,null)),k=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(n){return n(k)}}).$mount("#div1")},"5bdf":function(n,t,e){},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.aa0cad63.js.map