(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cee9f2b"],{"057f":function(t,e,n){var a=n("fc6a"),o=n("241c").f,i={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==i.call(t)?c(t):o(a(t))}},"37a8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"left"},[n("span",[t._v(t._s(t.$t("sidebar.group")))])]),n("div",{staticClass:"right"},[n("span",{staticClass:"button-warp",on:{click:t.handleModalSwitch}},[n("Icon",{attrs:{type:"md-add"}})],1)])]),n("div",{staticClass:"input"},[n("Input",{staticStyle:{width:"300px"},attrs:{suffix:"ios-search",placeholder:t.$t("modal.placeholder")},model:{value:t.param,callback:function(e){t.param=e},expression:"param"}})],1),n("Table",{attrs:{border:"",columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.row;return t._l(t.promptContent,(function(e,o){return n("Tooltip",{key:o,attrs:{content:e.content,placement:"top-start"}},[n("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(a,o+1)}}},[n("Icon",{attrs:{type:e.icon}})],1)])}))}}])}),n("div",{staticClass:"page"},[n("Page",{attrs:{"prev-text":t.$t("page.prev_text"),"next-text":t.$t("page.next_text"),"show-elevator":"","show-total":!0,total:t.total,"show-sizer":""},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}})],1),n("Modal",{attrs:{title:t.$t("modal.template_title"),"ok-text":t.$t("modal.ok_text"),"cancel-text":t.$t("modal.cancel_text")},on:{"on-ok":t.handletSetEmplate},model:{value:t.isTemplateOpen,callback:function(e){t.isTemplateOpen=e},expression:"isTemplateOpen"}},[n("div",{staticClass:"modal-warp"},[n("div",{staticClass:"item"},[n("Input",{attrs:{placeholder:t.$t("modal.placeholder")},model:{value:t.templateName,callback:function(e){t.templateName=e},expression:"templateName"}})],1)])]),n("Modal",{attrs:{title:t.id?t.$t("group_columns.update_title"):t.$t("group_columns.create_title"),"ok-text":t.$t("modal.ok_text"),"cancel-text":t.$t("modal.cancel_text")},on:{"on-ok":t.handleSaveUpdateData},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("div",{staticClass:"modal-warp"},[n("div",{staticClass:"item"},[n("label",[t._v(t._s(t.$t("group_columns.group_name"))+"：")]),n("Input",{staticStyle:{width:"350px"},attrs:{"show-word-limit":"",maxlength:"100",placeholder:t.$t("modal.placeholder")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("div",{staticClass:"item"},[n("label",{staticClass:"self"},[t._v(t._s(t.$t("group_columns.description"))+"：")]),n("Input",{staticStyle:{width:"350px"},attrs:{type:"textarea",rows:4,placeholder:t.$t("modal.placeholder")},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)])])],1)},o=[],i=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),{name:"group",components:{},data:function(){return{isOpen:!1,isTemplateOpen:!1,page:1,limit:10,total:0,tableData:[],param:"",templateName:"",row:null,id:"",name:"",description:"",promptContent:[{content:"Enter",icon:"ios-redo"},{content:"Edit",icon:"ios-create-outline"},{content:"Run",icon:"ios-play"},{content:"Delete",icon:"ios-trash"},{content:"Save Template",icon:"md-checkbox-outline"}]}},watch:{isOpen:function(t){t||this.handleReset()},param:function(t){this.page=1,this.limit=10,this.getTableData()}},computed:{columns:function(){return[{title:this.$t("group_columns.name"),key:"name",sortable:!0},{title:this.$t("group_columns.description"),key:"description"},{title:this.$t("group_columns.CreateTime"),key:"crtDttmString",sortable:!0},{title:this.$t("group_columns.action"),slot:"action",width:350,align:"center"}]}},created:function(){this.getTableData()},methods:{handleReset:function(){this.page=1,this.limit=10,this.id="",this.row=null,this.name="",this.description=""},handleButtonSelect:function(t,e){switch(e){case 1:this.$event.emit("crumb",[{name:"Group",path:"/group"},{name:"drawingBoard",path:"/drawingBoard"}]),this.$router.push({path:"/drawingBoard",query:{src:"/drawingBoard/page/flowGroup/mxGraph/index.html?drawingBoardType=GROUP&load=".concat(t.id)}});break;case 2:this.getRowData(t);break;case 3:this.handleRun(t);break;case 4:this.handleDeleteRow(t);break;case 5:this.row=t,this.isTemplateOpen=!0;break;default:break}},handleSaveUpdateData:function(){var t=this,e={name:this.name,description:this.description};this.id?(e.id=this.id,this.$axios.get("/flowGroup/saveOrUpdateFlowGroup",{params:e}).then((function(e){200===e.data.code?(t.$Modal.success({title:t.$t("tip.title"),content:"".concat(t.name," ")+t.$t("tip.update_success_content")}),t.isOpen=!1,t.handleReset(),t.getTableData()):t.$Message.error({content:"".concat(t.name," ")+t.$t("tip.update_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))):this.$axios.get("/flowGroup/saveOrUpdateFlowGroup",{params:e}).then((function(e){200===e.data.code?(t.$router.push({path:"/drawingBoard",query:{src:"/drawingBoard/page/flowGroup/mxGraph/index.html?drawingBoardType=GROUP&load=".concat(e.data.flowGroupId)}}),t.isOpen=!1,t.handleReset(),t.getTableData()):t.$Message.error({content:"".concat(t.name," ")+t.$t("tip.add_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},handletSetEmplate:function(){var t=this,e={load:this.row.id,name:this.templateName,templateType:"GROUP"};this.$axios.post("/flowTemplate/saveFlowTemplate",this.$qs.stringify(e)).then((function(e){200===e.data.code?(t.$Modal.success({title:t.$t("tip.title"),content:"".concat(t.templateName," ")+t.$t("tip.save_success_content")}),t.templateName="",t.row=null):t.$Message.error({content:"".concat(t.templateName," ")+t.$t("tip.save_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},handleRun:function(t){var e=this,n={flowGroupId:t.id};this.$event.emit("loading",!0),this.$axios.post("/flowGroup/runFlowGroup",this.$qs.stringify(n)).then((function(n){200===n.data.code?(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.run_success_content"),onOk:function(){var t="";t="/drawingBoard/page/processGroup/mxGraph/index.html?drawingBoardType=PROCESS&load=".concat(n.data.processGroupId),e.$router.push({path:"/drawingBoard",query:{src:t}})}})):(e.$event.emit("loading",!1),e.$Message.error({content:"".concat(t.name," ")+e.$t("tip.run_fail_content"),duration:3}))})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},getRowData:function(t){var e=this,n={load:t.id};this.$event.emit("loading",!0),this.$axios.post("/flowGroup/queryFlowGroupData",this.$qs.stringify(n)).then((function(t){if(200===t.data.code){var n=t.data.flowGroupVo;e.id=n.id,e.name=n.name,e.description=n.description,e.$event.emit("loading",!1),e.isOpen=!0}else e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.get_fail_content"),duration:3})})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleDeleteRow:function(t){var e=this;this.$Modal.confirm({title:this.$t("tip.title"),okText:this.$t("modal.confirm"),cancelText:this.$t("modal.cancel_text"),content:"".concat(this.$t("modal.delete_content")," ").concat(t.name,"?"),onOk:function(){var n={id:t.id};e.$axios.get("/flowGroup/deleteFlowGroup",{params:n}).then((function(n){200===n.data.code?(e.handleReset(),e.getTableData(),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.delete_success_content")})):e.$Message.error({content:e.$t("tip.delete_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))}})},getTableData:function(){var t=this,e={page:this.page,limit:this.limit};this.param&&(e.param=this.param),this.$axios.get("/flowGroup/getFlowGroupListPage",{params:e}).then((function(e){200===e.data.code?(t.tableData=e.data.data,t.total=e.data.count):t.$Message.error({content:t.$t("tip.request_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},onPageChange:function(t){this.page=t,this.getTableData()},onPageSizeChange:function(t){this.limit=t,this.getTableData()},handleModalSwitch:function(){this.isOpen=!this.isOpen}}}),r=i,c=(n("9579"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"7e64660a",null);e["default"]=s.exports},"746f":function(t,e,n){var a=n("428f"),o=n("5135"),i=n("e538"),r=n("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});o(e,t)||r(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var a=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?o.f(t,r,i(0,n)):t[r]=n}},9579:function(t,e,n){"use strict";var a=n("d9d2"),o=n.n(a);o.a},"99af":function(t,e,n){"use strict";var a=n("23e7"),o=n("d039"),i=n("e8b5"),r=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),p=n("b622"),f=n("2d00"),h=p("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=d("concat"),$=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},w=!v||!b;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,a,o,i,r=c(this),d=u(r,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?r:arguments[e],$(i)){if(o=s(i.length),p+o>m)throw TypeError(g);for(n=0;n<o;n++,p++)n in i&&l(d,p,i[n])}else{if(p>=m)throw TypeError(g);l(d,p++,i)}return d.length=p,d}})},a4d3:function(t,e,n){"use strict";var a=n("23e7"),o=n("da84"),i=n("d066"),r=n("c430"),c=n("83ab"),s=n("4930"),l=n("fdbf"),u=n("d039"),d=n("5135"),p=n("e8b5"),f=n("861d"),h=n("825a"),m=n("7b0b"),g=n("fc6a"),v=n("c04e"),b=n("5c6c"),$=n("7c73"),w=n("df75"),y=n("241c"),_=n("057f"),x=n("7418"),S=n("06cf"),O=n("9bf2"),k=n("d1e7"),T=n("9112"),G=n("6eeb"),M=n("5692"),C=n("f772"),D=n("d012"),P=n("90e3"),R=n("b622"),B=n("e538"),N=n("746f"),j=n("d44e"),E=n("69f3"),F=n("b727").forEach,I=C("hidden"),q="Symbol",U="prototype",z=R("toPrimitive"),J=E.set,A=E.getterFor(q),L=Object[U],Q=o.Symbol,V=i("JSON","stringify"),W=S.f,H=O.f,K=_.f,X=k.f,Y=M("symbols"),Z=M("op-symbols"),tt=M("string-to-symbol-registry"),et=M("symbol-to-string-registry"),nt=M("wks"),at=o.QObject,ot=!at||!at[U]||!at[U].findChild,it=c&&u((function(){return 7!=$(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,n){var a=W(L,e);a&&delete L[e],H(t,e,n),a&&t!==L&&H(L,e,a)}:H,rt=function(t,e){var n=Y[t]=$(Q[U]);return J(n,{type:q,tag:t,description:e}),c||(n.description=e),n},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,n){t===L&&st(Z,e,n),h(t);var a=v(e,!0);return h(n),d(Y,a)?(n.enumerable?(d(t,I)&&t[I][a]&&(t[I][a]=!1),n=$(n,{enumerable:b(0,!1)})):(d(t,I)||H(t,I,b(1,{})),t[I][a]=!0),it(t,a,n)):H(t,a,n)},lt=function(t,e){h(t);var n=g(e),a=w(n).concat(ht(n));return F(a,(function(e){c&&!dt.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?$(t):lt($(t),e)},dt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===L&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,I)&&this[I][e])||n)},pt=function(t,e){var n=g(t),a=v(e,!0);if(n!==L||!d(Y,a)||d(Z,a)){var o=W(n,a);return!o||!d(Y,a)||d(n,I)&&n[I][a]||(o.enumerable=!0),o}},ft=function(t){var e=K(g(t)),n=[];return F(e,(function(t){d(Y,t)||d(D,t)||n.push(t)})),n},ht=function(t){var e=t===L,n=K(e?Z:g(t)),a=[];return F(n,(function(t){!d(Y,t)||e&&!d(L,t)||a.push(Y[t])})),a};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===L&&n.call(Z,t),d(this,I)&&d(this[I],e)&&(this[I][e]=!1),it(this,e,b(1,t))};return c&&ot&&it(L,e,{configurable:!0,set:n}),rt(e,t)},G(Q[U],"toString",(function(){return A(this).tag})),G(Q,"withoutSetter",(function(t){return rt(P(t),t)})),k.f=dt,O.f=st,S.f=pt,y.f=_.f=ft,x.f=ht,B.f=function(t){return rt(R(t),t)},c&&(H(Q[U],"description",{configurable:!0,get:function(){return A(this).description}}),r||G(L,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),F(w(nt),(function(t){N(t)})),a({target:q,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),a({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:pt}),a({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ft,getOwnPropertySymbols:ht}),a({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),V){var mt=!s||u((function(){var t=Q();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));a({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var a,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(a=e,(f(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ct(e))return e}),o[1]=e,V.apply(null,o)}})}Q[U][z]||T(Q[U],z,Q[U].valueOf),j(Q,q),D[I]=!0},b0c0:function(t,e,n){var a=n("83ab"),o=n("9bf2").f,i=Function.prototype,r=i.toString,c=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},d9d2:function(t,e,n){},e01a:function(t,e,n){"use strict";var a=n("23e7"),o=n("83ab"),i=n("da84"),r=n("5135"),c=n("861d"),s=n("9bf2").f,l=n("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var f=p.prototype=u.prototype;f.constructor=p;var h=f.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(r(d,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var a=n("b622");e.f=a}}]);