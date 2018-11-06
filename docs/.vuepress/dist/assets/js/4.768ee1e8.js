(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return u});n(13),n(23),n(24),n(90);var a=n(68),r=(n(91),n(22),n(153)),o=n.n(r),i=n(154),l=n.n(i);function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.map(function(t){var n,r=Object(a.a)(t);if("object"!==r&&"string"!==r||Array.isArray(t))throw new TypeError("Only string or object is accepted as columns item.");if("object"===r){if(!t.title&&!t.children)throw new Error("Title is required.");n=Object.assign({},t),t.children&&(n.children=s(t.children,e))}else n={},e?(n.title=o()(t),n.key=t):(n.title=t,n.key=l()(t));return n})}function u(t){for(var e,n=[[]],a=0;a<t.length;a+=1)if((e=t[a]).children){n[0].push({data:{title:e.title},attrs:{colspan:e.children.length}}),n[1]||(n[1]=[]);for(var r=0,o=e.children[r];r<e.children.length;r+=1,o=e.children[r])n[1].push({data:{title:o.title}})}else n[0].push({data:{title:e.title},attrs:{rowspan:2}});return n}},148:function(t,e,n){"use strict";n(22),n(146),n(147),n(155),n(91),n(90),n(51);var a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";return e.indexOf(n)?(Array.isArray(e)?e:e.split(n)).reduce(function(t,e){return t&&t[e]},t):t[e]},r=function(t){for(var e,n=[],a=Math.ceil(t/6),r=0;r<a;r+=1){e=Math.random().toString();for(var o=0;o<6;o+=1)n.push(e.substring(2+o,12+o))}return n};var o={name:"BaseTableBody",mixins:[{props:{rows:{type:Array,required:!0},map:{type:Array,required:!0},rowComponent:{type:Object,required:!0}},computed:{processedRows:function(){return function(t,e){for(var n=[],o=r(t.length),i=function(r){var i=e.map(function(e){return a(t[r],e)});n.push({uid:o[r],data:i})},l=0;l<t.length;l+=1)i(l);return n}(this.rows,this.map)}},methods:{onRowEvent:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit.apply(this,["row-event"].concat(e))}}}]},i=n(0),l=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",t._l(t.processedRows,function(e,a){return n(t.rowComponent,{key:e.uid,tag:"component",attrs:{data_old:e.data,row:e,index:a},on:{"row-event":t.onRowEvent}})}))},[],!1,null,null,null);l.options.__file="BaseTableBody.vue";e.a=l.exports},149:function(t,e,n){"use strict";n(13),n(23);var a=n(145),r={name:"BaseTableHead",props:{columns:{type:Array,required:!0}},render:function(t){var e=this,n=this,r=[];return Object(a.a)(this.columns).forEach(function(a){var o=[];e.$slots.left&&o.push(e.$slots.left),a.forEach(function(e){var a={attrs:e.attrs};e.data.sortable&&(a.on||(a.on={}),a.on.click=function(t){n.$emit("click",t,e.data)}),o.push(t("th",a,e.data.title))}),e.$slots.right&&o.push(e.$slots.right),r.push(t("tr",{},o))}),t("thead",{},r)}},o=n(0),i=Object(o.a)(r,void 0,void 0,!1,null,null,null);i.options.__file="BaseTableHead.vue";e.a=i.exports},150:function(t,e,n){"use strict";var a=n(9);n(23),n(22),n(13),n(18),n(25),n(146),n(147);var r=n(145);e.a={props:{data:{type:Array,required:!0},columns:{type:Array,default:null},map:{type:Array,default:null}},computed:{normalizedColumns:function(){return this.columns?Object(r.b)(this.columns):Object(r.b)(Object.keys(this.data[0]),!0)},dataMap:function(){if(this.map)return this.map;var t=[];return this.normalizedColumns.forEach(function(e){t=Object(a.a)(t).concat(Object(a.a)(function t(e,n,a){return e.children?e.children.map(function(a){return t(a,n,e[n])}):""===e[n]?[]:void 0===a?[e[n]]:""===a?e[n]:"".concat(a,".").concat(e[n])}(e,"key")))}),t}},methods:{onRowEvent:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.$emit.apply(this,[t].concat(n))}}}},151:function(t,e,n){"use strict";var a={name:"BaseTableRow",mixins:[{props:{row:{type:Object,required:!0}},methods:{emit:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.$emit.apply(this,["row-event",t,this.row.uid].concat(n))}}}]},r=n(0),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",t._l(t.row.data,function(e){return n("td",{key:e},[t._v(t._s(e))])}))},[],!1,null,null,null);o.options.__file="BaseTableRow.vue";e.a=o.exports},152:function(t,e,n){"use strict";var a=n(149),r=n(148),o=n(151),i=n(150),l={name:"BaseTable",components:{BaseTableHead:a.a,BaseTableBody:r.a},mixins:[i.a],computed:{rowComponent:function(){return o.a}}},s=n(0),u=Object(s.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("base-table-head",{attrs:{columns:this.normalizedColumns}}),this._v(" "),e("base-table-body",{attrs:{rows:this.data,map:this.dataMap,"row-component":this.rowComponent}})],1)},[],!1,null,null,null);u.options.__file="BaseTable.vue";e.a=u.exports},174:function(t,e,n){"use strict";n.r(e);var a={components:{BaseTable:n(152).a},data:function(){return{tableData:[{fullName:"John Doe",age:42,placeOfBirth:"Hamburg"},{fullName:"Jane Doe",age:36,placeOfBirth:"Salvador"},{fullName:"Johnny Doe",age:15,placeOfBirth:"Jinan"},{fullName:"John Roe",age:42,placeOfBirth:"Belgrade"},{fullName:"Jane Roe",age:36,placeOfBirth:"Patna"},{fullName:"Richard Roe",age:78,placeOfBirth:"Nanjing"}],tableColumns:["Full Name","Age","Place of Birth"]}}},r=n(0),o=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("base-table",{attrs:{data:this.tableData,columns:this.tableColumns}})},[],!1,null,null,null);o.options.__file="columns.vue";e.default=o.exports}}]);