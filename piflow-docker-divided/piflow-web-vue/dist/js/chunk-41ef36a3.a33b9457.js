(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ef36a3"],{"057f":function(t,e,a){var i=a("fc6a"),n=a("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?r(t):n(i(t))}},"0f28":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.$t("sidebar.testData")))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"button-warp",on:{click:t.handleModalSwitch}},[a("Icon",{attrs:{type:"md-add"}})],1)])]),a("div",{staticClass:"input"},[a("Input",{staticStyle:{width:"300px"},attrs:{suffix:"ios-search",placeholder:t.$t("modal.placeholder")},model:{value:t.param,callback:function(e){t.param=e},expression:"param"}})],1),a("Table",{attrs:{border:"",columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.row;return t._l(t.promptContent,(function(e,n){return a("Tooltip",{key:n,attrs:{content:e.content,placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(i,n+1)}}},[a("Icon",{attrs:{type:e.icon}})],1)])}))}}])}),a("div",{staticClass:"page"},[a("Page",{attrs:{"prev-text":t.$t("page.prev_text"),"next-text":t.$t("page.next_text"),"show-elevator":"","show-total":!0,total:t.total,"show-sizer":""},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}})],1),a("Modal",{attrs:{"mask-closable":!1,title:t.id?t.$t("testData_columns.update_title"):t.$t("testData_columns.create_title"),"ok-text":t.$t("modal.ok_text"),"cancel-text":t.$t("modal.cancel_text")},on:{"on-cancel":t.handleCancelData},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},["init"===t.whatStage?a("div",{staticClass:"modal-warp"},[a("Form",{ref:"formCustom",attrs:{model:t.formCustom,rules:t.ruleCustom,"label-colon":!0,"label-width":80}},[a("FormItem",{attrs:{label:t.$t("testData_columns.testData_name"),prop:"name"}},[a("Input",{staticStyle:{width:"350px"},attrs:{placeholder:t.$t("modal.placeholder")},model:{value:t.formCustom.name,callback:function(e){t.$set(t.formCustom,"name",e)},expression:"formCustom.name"}})],1),a("FormItem",{attrs:{label:t.$t("testData_columns.description")}},[a("Input",{staticStyle:{width:"350px"},attrs:{type:"textarea",rows:4,placeholder:t.$t("modal.placeholder")},model:{value:t.formCustom.description,callback:function(e){t.$set(t.formCustom,"description",e)},expression:"formCustom.description"}})],1),a("FormItem",{attrs:{label:t.$t("testData_columns.methed")}},[a("Select",{staticStyle:{width:"350px"},model:{value:t.Methed,callback:function(e){t.Methed=e},expression:"Methed"}},[a("Option",{attrs:{value:"Manual"}},[t._v("Manual")]),a("Option",{attrs:{value:"csvImport"}},[t._v("Csv Import")])],1)],1)],1)],1):t._e(),"Schema"===t.whatStage?a("div",[t.id&&"edit"===t.saveType?a("div",{staticClass:"updataModal-warp"},[a("Form",{ref:"formCustom",attrs:{model:t.formCustom,"label-colon":!0,"label-width":80}},[a("FormItem",{attrs:{label:t.$t("testData_columns.testData_name")}},[a("Input",{staticStyle:{width:"350px"},attrs:{placeholder:t.$t("modal.placeholder")},model:{value:t.formCustom.name,callback:function(e){t.$set(t.formCustom,"name",e)},expression:"formCustom.name"}})],1),a("FormItem",{attrs:{label:t.$t("testData_columns.description")}},[a("Input",{staticStyle:{width:"350px"},attrs:{type:"textarea",rows:4,placeholder:t.$t("modal.placeholder")},model:{value:t.formCustom.description,callback:function(e){t.$set(t.formCustom,"description",e)},expression:"formCustom.description"}})],1)],1)],1):t._e(),a("div",{staticClass:"item"},[a("label",{staticClass:"self",staticStyle:{"margin-top":"15px"}},[t._v("Schema：")]),a("ul",{staticClass:"relationship"},t._l(t.schemaVoList,(function(e,i){return a("li",{key:"ve"+i},[a("Input",{staticStyle:{width:"170px"},attrs:{"show-word-limit":"",maxlength:"100",placeholder:t.$t("modal.placeholder")},model:{value:e.fieldName,callback:function(a){t.$set(e,"fieldName",a)},expression:"item.fieldName"}}),a("Select",{staticClass:"select_type",attrs:{filterable:"","allow-create":""},on:{"on-create":t.handleCreate},model:{value:e.fieldType,callback:function(a){t.$set(e,"fieldType",a)},expression:"item.fieldType"}},t._l(t.typeList,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1),a("Icon",{attrs:{type:"ios-remove-circle-outline"},on:{click:function(e){return t.handleRemove(i,1===t.schemaVoList.length)}}}),i==t.schemaVoList.length-1?a("Icon",{attrs:{type:"ios-add-circle-outline"},on:{click:t.handleAdd}}):t._e()],1)})),0)])]):t._e(),"SchemaVal"===t.whatStage?a("div",[a("editableForm",{ref:"editable",attrs:{editableData:t.editableData,editableDataId:t.editableDataId,fatherMethod:t.getTableData,tableColumn:t.tableColumn,schemaId:t.schemaId}})],1):t._e(),"csvImport"===t.whatStage?a("div",[a("Form",{ref:"ImportData",attrs:{model:t.ImportData,rules:t.ruleCustom,"label-colon":!0,"label-width":80}},[a("FormItem",{attrs:{label:t.$t("testData_columns.header")}},[a("Select",{staticStyle:{width:"350px"},model:{value:t.ImportData.header,callback:function(e){t.$set(t.ImportData,"header",e)},expression:"ImportData.header"}},[a("Option",{key:"vm",attrs:{value:"true"}},[t._v("true")]),a("Option",{key:"vmq",attrs:{value:"false"}},[t._v("false")])],1)],1),a("FormItem",{attrs:{label:t.$t("testData_columns.delimiter")}},[a("Input",{staticStyle:{width:"350px"},attrs:{placeholder:t.$t("modal.placeholder")},model:{value:t.ImportData.delimiter,callback:function(e){t.$set(t.ImportData,"delimiter",e)},expression:"ImportData.delimiter"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"false"===t.ImportData.header,expression:"ImportData.header==='false'"}],attrs:{label:t.$t("testData_columns.schema")}},[a("Input",{staticStyle:{width:"350px"},attrs:{placeholder:t.$t("modal.schema")},model:{value:t.ImportData.schema,callback:function(e){t.$set(t.ImportData,"schema",e)},expression:"ImportData.schema"}})],1)],1),a("Upload",{ref:"upload",staticStyle:{width:"94%",margin:"auto"},attrs:{action:this.$url+"/testData/uploadCsvFile",data:t.uploadData,headers:{Authorization:t.token},"show-upload-list":!0,"on-success":t.handleSuccess,"on-error":t.handleError,format:["csv"],"before-upload":t.handleBeforeUpload,type:"drag"}},[a("div",{staticStyle:{padding:"20px 0",height:"120px"}},[a("div",[a("Icon",{staticStyle:{color:"#20784b"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v(t._s(t.$t("testData_columns.fileDescription")))]),a("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.$t("testData_columns.uploadPrompt")))])],1)])]),null!==t.file?a("div",[a("Icon",{attrs:{color:!1===t.JarIsShow?"red":"",type:!1===t.JarIsShow?"md-close-circle":""}}),t._v(" Upload file: "+t._s(t.file.name)+" ")],1):t._e()],1):t._e(),a("div",{attrs:{slot:"footer"},slot:"footer"},["init"===t.whatStage?a("div",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formCustom")}}},[t._v("下一步")])],1):t._e(),t.id&&"Schema"===t.whatStage&&"edit"===t.saveType?a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.editSchema}},[t._v("完成")])],1):"Schema"===t.whatStage?a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.delInit}},[t._v("上一步")]),a("Button",{attrs:{type:"primary"},on:{click:t.createSchemaVal}},[t._v("下一步")])],1):t._e(),t.id&&"SchemaVal"===t.whatStage&&"edit"===t.saveType?a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.editSchemaVal}},[t._v("完成")])],1):"SchemaVal"===t.whatStage?a("div",[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.whatStage="Schema"}}},[t._v("上一步")]),a("Button",{attrs:{type:"primary"},on:{click:t.saveSchemaValues}},[t._v("完成")])],1):t._e(),"csvImport"===t.whatStage?a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.delInit}},[t._v("上一步")]),a("Button",{attrs:{type:"primary"},on:{click:t.uploadSuccess}},[t._v("完成")])],1):t._e()])])],1)},n=[],o=(a("a4d3"),a("e01a"),a("99af"),a("4160"),a("baa5"),a("a434"),a("b0c0"),a("b64b"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vxe-grid",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{border:"","show-overflow":"",resizable:"","keep-source":"","max-height":"400",data:t.tableData,loading:t.loading,columns:t.tableColumn,"toolbar-config":t.tableToolbar,"edit-config":{trigger:"click",mode:"row",icon:"fa fa-pencil"}},scopedSlots:t._u([{key:"toolbar_buttons",fn:function(){return[a("div",{staticStyle:{"text-align":"right","margin-right":"12px"}},[a("vxe-button",{attrs:{icon:"fa fa-trash-o",circle:""},on:{click:function(e){return t.$refs.xTable.removeCheckboxRow()}}}),a("vxe-button",{attrs:{icon:"fa fa-plus",circle:""},on:{click:function(e){return t.insertEvent(-1)}}})],1)]},proxy:!0}])})],1)}),s=[],r=(a("96cf"),a("1da1")),c={name:"EditableForm",props:{editableData:Array,editableDataId:Array,schemaId:String,tableColumn:Array,fatherMethod:{type:Function,default:null}},data:function(){return{tableToolbar:{perfect:!0,zoom:!0,custom:!0,slots:{buttons:"toolbar_buttons"}},tableData:[],tableDataId:[],tableTitle:[],loading:!1}},created:function(){0===this.tableData.length&&(this.loading=!0)},watch:{editableData:function(t){var e=this;this.tableData=[],this.tableDataId=[],this.$nextTick((function(){e.tableData=t,e.tableDataId=e.editableDataId,e.loading=!1}))},schemaId:function(t){this.schemaId=t},tableColumn:function(t){}},methods:{insertEvent:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.xTable.insertAt("",t);case 2:return i=a.sent,n=i.row,a.next=6,e.$refs.xTable.setActiveRow(n,"");case 6:case"end":return a.stop()}}),a)})))()},saveSchemaValues:function(){var t=this,e=this.$refs.xTable.getRecordset(),a=e.insertRecords,i=e.removeRecords,n=e.updateRecords,o=[];0!==n.length&&this.tableDataId.forEach((function(t){n.forEach((function(e){if(t.dataRow===e.dataRow){delete e._XID;var a=[],i=[];function n(t,e){for(var a=0;a<e.length;a++)if(t===e[a])return!1;return!0}Object.keys(t).forEach((function(t){a.push(t)})),Object.keys(e).forEach((function(t){i.push(t)}));for(var s=[],r=0;r<i.length;r++)n(i[r],a)&&(s[s.length]=i[r]);s.forEach((function(e){t[e]=""})),Object.keys(t).forEach((function(a){Object.keys(e).forEach((function(i){a===i&&"dataRow"!==i&&o.push({schemaName:i,schemaValue:e[i],schemaValueId:t[a],dataRow:e.dataRow})}))}))}}))})),0!==a.length&&a.forEach((function(e,a){delete e._XID,Object.keys(e).forEach((function(i){o.push({schemaName:i,schemaValue:e[i],schemaValueId:"",dataRow:0!==t.tableData.length?t.tableData.length+a+1:a+1})}))})),0!==i.length&&this.tableDataId.forEach((function(t){i.forEach((function(e){t.dataRow===e.dataRow&&(delete e._XID,Object.keys(t).forEach((function(a){Object.keys(e).forEach((function(i){a===i&&"dataRow"!==i&&o.push({schemaName:i,schemaValue:e[i],schemaValueId:t[a],dataRow:e.dataRow,delete:!0})}))})))}))}));var s={testDataId:this.schemaId};o.forEach((function(t,e){for(var a in t)s["schemaValuesList["+e+"]."+a]=t[a]})),this.$axios.post("/testData/saveOrUpdateTestDataSchemaValues",this.$qs.stringify(s)).then((function(e){var a=e.data;200===a.code?t.$Modal.success({title:"PiFlow system tips",content:a.errorMsg,onOk:function(){t.fatherMethod()}}):(t.$Message.error({content:a.errorMsg,duration:3}),t.fatherMethod&&t.fatherMethod())})).catch((function(t){}))}}},l=c,d=(a("f49e"),a("2877")),h=Object(d["a"])(l,o,s,!1,null,"74525000",null),u=h.exports,f=a("a78e"),m=a.n(f),p={name:"TestData",components:{editableForm:u},data:function(){var t=this,e=function(e,a,i){if(!a)return i(new Error("TestDataName cannot be empty"));t.$axios.post("/testData/checkTestDataName",t.$qs.stringify({testDataName:a})).then((function(t){var e=t.data;200===e.code?i():i(new Error(e.errorMsg))})).catch((function(t){}))};return{isOpen:!1,page:1,limit:10,total:0,tableData:[],param:"",templateName:"",id:"",name:"",description:"",whatStage:"init",schemaVoList:[{fieldName:"",fieldType:"",id:""}],editableData:[],editableDataId:[],schemaId:"",tableColumn:[{type:"checkbox",width:40}],formCustom:{name:"",description:""},Methed:"Manual",ImportData:{header:"true",delimiter:"",schema:""},file:null,JarIsShow:null,token:"",uploadData:{},ruleCustom:{name:[{validator:e,trigger:"blur"}]},typeList:[{value:"String",label:"String"},{value:"Int",label:"Int"},{value:"Float",label:"Float"},{value:"Boolean",label:"Boolean"},{value:"Date",label:"Date"},{value:"Char",label:"Char"},{value:"Double",label:"Double"},{value:"Byte",label:"Byte"},{value:"Short",label:"Short"},{value:"Long",label:"Long"}],saveType:"",promptContent:[{content:"Edit Schema",icon:"ios-brush-outline"},{content:"Edit SchemaValue",icon:"ios-create-outline"},{content:"Delete",icon:"ios-trash"}]}},watch:{isOpen:function(t){t||this.handleReset()},param:function(){this.page=1,this.limit=10,this.getTableData()}},computed:{columns:function(){return[{title:this.$t("testData_columns.name"),key:"name",sortable:!0},{title:this.$t("testData_columns.description"),key:"description"},{title:this.$t("testData_columns.CreateTime"),key:"crtDttm",sortable:!0},{title:this.$t("testData_columns.action"),slot:"action",width:200,align:"center"}]}},created:function(){this.getTableData()},mounted:function(){var t=this.$store.state.variable.token;t||(t="".concat(m.a.get("token"))),this.token="Bearer ".concat(t)},methods:{handleReset:function(){this.page=1,this.limit=10,this.id="",this.name="",this.description="",this.whatStage="init",this.schemaVoList=[{fieldName:"",fieldType:"",id:""}],this.formCustom={name:"",description:""},this.ImportData={header:"true",delimiter:"",schema:""},this.Methed="Manual",this.$refs.formCustom.resetFields()},handleButtonSelect:function(t,e){switch(e){case 1:this.handleEditSchemaPage(t);break;case 2:this.handleEditSchemaValPage(t);break;case 3:this.handleDeleteRow(t);break;default:break}},handleCancelData:function(){var t=this;if(this.id&&"edit"===this.saveType);else{var e={testDataId:this.id};this.$axios.post("/testData/delTestData",this.$qs.stringify(e)).then((function(e){200===e.data.code&&(t.handleReset(),t.getTableData())})).catch((function(t){}))}},handleDeleteRow:function(t){var e=this;this.$Modal.confirm({title:this.$t("tip.title"),okText:this.$t("modal.confirm"),cancelText:this.$t("modal.cancel_text"),content:"".concat(this.$t("modal.delete_content")," ").concat(t.name,"?"),onOk:function(){var a={testDataId:t.id};e.$axios.post("/testData/delTestData",e.$qs.stringify(a)).then((function(a){200===a.data.code?(e.handleReset(),e.getTableData(),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.delete_success_content")})):e.$Message.error({content:e.$t("tip.delete_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))}})},getTableData:function(){var t=this,e={page:this.page,limit:this.limit};this.param&&(e.param=this.param),this.$axios.post("/testData/testDataListPage",this.$qs.stringify(e)).then((function(e){200===e.data.code?(t.tableData=e.data.data,t.total=e.data.count):t.$Message.error({content:t.$t("tip.request_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},onPageChange:function(t){this.page=t,this.getTableData()},onPageSizeChange:function(t){this.limit=t,this.getTableData()},handleModalSwitch:function(){this.isOpen=!this.isOpen},handleAdd:function(){this.schemaVoList.push({fieldName:"",fieldType:""})},handleRemove:function(t,e){e?this.$Modal.warning({title:this.$t("tip.title"),content:"此项不可删除，请重新操作！"}):this.schemaVoList.splice(t,1)},SaveUpdateData:function(){var t=this;this.whatStage="Schema";var e=this.formCustom;this.$axios.post("/testData/saveOrUpdateTestDataSchema",this.$qs.stringify(e)).then((function(e){var a=e.data;200===a.code&&(t.id=a.testDataId)})).catch((function(e){t.$event.emit("loading",!1)}))},createSchema:function(){var t=this,e=this.formCustom,a="";this.id&&(e.id=this.id,a=this.id),this.schemaVoList[0].fieldName&&this.schemaVoList[0].fieldType&&this.schemaVoList.forEach((function(t,a){e["schemaVoList[".concat(a,"].fieldName")]=t.fieldName,e["schemaVoList[".concat(a,"].fieldType")]=t.fieldType,e["schemaVoList[".concat(a,"].fieldSoft")]=a+1,e["schemaVoList[".concat(a,"].id")]=t.id})),this.$axios.post("/testData/saveOrUpdateTestDataSchema",this.$qs.stringify(e)).then((function(e){var i=e.data;200===i.code&&(a&&"edit"===t.saveType?t.getTableData():t.handleEditSchema(i.testDataId))})).catch((function(e){t.$event.emit("loading",!1)}))},createSchemaVal:function(){this.whatStage="SchemaVal",this.createSchema()},delInit:function(){this.whatStage="init";var t={testDataId:this.id};this.$axios.post("/testData/delTestData",this.$qs.stringify(t)).then((function(t){t.data.code})).catch((function(t){}))},handleEditSchema:function(t){var e=this,a={testDataId:t};this.schemaId=t,this.$axios.post("/testData/testDataSchemaValuesList",this.$qs.stringify(a)).then((function(t){200===t.data.code?(e.editableData=[],e.editableDataId=[],e.getTitle(t.data.schema,"create")):e.$Message.error({content:e.$t("tip.request_fail_content"),duration:3})})).catch((function(t){}))},handleEditSchemaPage:function(t){var e=this;this.isOpen=!0,this.whatStage="Schema";var a={page:this.page,limit:this.limit,testDataId:t.id};this.$axios.post("/testData/testDataSchemaListPage",this.$qs.stringify(a)).then((function(t){if(200===t.data.code){var a=t.data;e.id=a.testData.id,e.saveType="edit",e.formCustom.name=a.testData.name,e.formCustom.description=a.testData.description,0===a.data.length?e.schemaVoList=[{fieldName:"",fieldType:"",id:""}]:e.schemaVoList=a.data}else e.$Message.error({content:e.$t("tip.request_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleEditSchemaValPage:function(t){var e=this;this.isOpen=!0,this.whatStage="SchemaVal";var a={testDataId:t.id};this.id=t.id,this.saveType="edit",this.schemaId=this.id,this.param&&(a.param=this.param),this.$axios.post("/testData/testDataSchemaValuesList",this.$qs.stringify(a)).then((function(t){if(200===t.data.code){var a=t.data,i={},n=[];if(0!==a.schemaValue.length){a.schema.forEach((function(t){for(var e in t)"FIELD_NAME"===e&&(i[t[e]]="")})),n.push(i);var o=Object.keys(a.schemaValue[0]),s=Object.keys(n[0]);function r(t,e){for(var a=0;a<e.length;a++)if(t===e[a])return!1;return!0}for(var c=[],l=0;l<s.length;l++)r(s[l],o)&&(c[c.length]=s[l]);a.schemaValue.forEach((function(t){c.forEach((function(e){t[e]=""}))})),e.editableData=a.schemaValue,e.editableDataId=a.schemaValueId,e.getTitle(a.schemaValue,"edit")}else e.editableData=[],e.editableDataId=[],e.getTitle(t.data.schema,"create")}else e.$Message.error({content:e.$t("tip.request_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleEditSchemaVal:function(t){var e=this;this.isOpen=!0,this.whatStage="SchemaVal";var a={testDataId:t};this.id=t,this.param&&(a.param=this.param),this.$axios.post("/testData/testDataSchemaValuesList",this.$qs.stringify(a)).then((function(t){if(200===t.data.code){var a=t.data;e.editableData=a.schemaValue,e.editableDataId=a.schemaValueId,e.getTitle(a.schemaValue,"edit")}else e.$Message.error({content:e.$t("tip.request_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},saveSchemaValues:function(){this.isOpen=!1,this.$refs.editable.saveSchemaValues()},getTitle:function(t,e){var a=[],i={};this.tableColumn=[{type:"checkbox",width:40}],"create"===e?(t.forEach((function(t){for(var e in t)"FIELD_NAME"===e&&(i[t[e]]="")})),a.push(i)):a=t;for(var n=Object.keys(a[0]),o=0;o<n.length;o++)"dataRow"===n[o]||this.tableColumn.push({field:n[o],title:n[o],editRender:{name:"input",defaultValue:""}})},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(t)if("Manual"===e.Methed)e.SaveUpdateData();else if("csvImport"===e.Methed){e.whatStage="csvImport";var a=e.formCustom;e.$axios.post("/testData/saveOrUpdateTestDataSchema",e.$qs.stringify(a)).then((function(t){var a=t.data;200===a.code&&(e.id=a.testDataId)})).catch((function(t){e.$event.emit("loading",!1)}))}}))},handleResetss:function(t){this.$refs.formCustom.resetFields()},handleCreate:function(t){this.typeList.push({value:t,label:t})},editSchema:function(){this.isOpen=!1,this.createSchema()},editSchemaVal:function(){this.isOpen=!1,this.$refs.editable.saveSchemaValues()},handleSuccess:function(t,e){var a=this;this.file=null,this.getTableData(),setTimeout((function(){a.isOpen=!1}),1e3)},handleError:function(t,e){this.JarIsShow=!1},handleBeforeUpload:function(t){var e=t.name.substring(t.name.lastIndexOf(".")+1),a="csv"===e,i=t.size/1024/1024<500;return a?i?(this.file=t,!1):(this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+t.name+" is too large, no more than 500M."}),!1):(this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+t.name+" is incorrect, please select csv."}),!1)},uploadSuccess:function(){var t={testDataId:this.id,header:this.ImportData.header,delimiter:this.ImportData.delimiter,schema:this.ImportData.schema};this.uploadData=t,this.$set(this.$refs.upload.data,"testDataId",this.id),this.$set(this.$refs.upload.data,"header",this.ImportData.header),this.$set(this.$refs.upload.data,"delimiter",this.ImportData.delimiter),this.$set(this.$refs.upload.data,"schema",this.ImportData.schema),this.isOpen=!0,this.$refs.upload.post(this.file)},uploadError:function(){this.isOpen=!1,this.$refs.upload.clearFiles()}}},v=p,b=(a("2109"),Object(d["a"])(v,i,n,!1,null,"24c82432",null));e["default"]=b.exports},1104:function(t,e,a){},"159b":function(t,e,a){var i=a("da84"),n=a("fdbc"),o=a("17c2"),s=a("9112");for(var r in n){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,n=a("a640"),o=a("ae40"),s=n("forEach"),r=o("forEach");t.exports=s&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},2109:function(t,e,a){"use strict";var i=a("ddf7"),n=a.n(i);n.a},4160:function(t,e,a){"use strict";var i=a("23e7"),n=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"746f":function(t,e,a){var i=a("428f"),n=a("5135"),o=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||s(e,t,{value:o.f(t)})}},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var s=i(e);s in t?n.f(t,s,o(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),o=a("e8b5"),s=a("861d"),r=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),h=a("1dde"),u=a("b622"),f=a("2d00"),m=u("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=f>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=h("concat"),y=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},S=!b||!g;i({target:"Array",proto:!0,forced:S},{concat:function(t){var e,a,i,n,o,s=r(this),h=d(s,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?s:arguments[e],y(o)){if(n=c(o.length),u+n>p)throw TypeError(v);for(a=0;a<n;a++,u++)a in o&&l(h,u,o[a])}else{if(u>=p)throw TypeError(v);l(h,u++,o)}return h.length=u,h}})},a434:function(t,e,a){"use strict";var i=a("23e7"),n=a("23cb"),o=a("a691"),s=a("50c4"),r=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),h=a("ae40"),u=d("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,p=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!f},{splice:function(t,e){var a,i,d,h,u,f,g=r(this),y=s(g.length),S=n(t,y),D=arguments.length;if(0===D?a=i=0:1===D?(a=0,i=y-S):(a=D-2,i=p(m(o(e),0),y-S)),y+a-i>v)throw TypeError(b);for(d=c(g,i),h=0;h<i;h++)u=S+h,u in g&&l(d,h,g[u]);if(d.length=i,a<i){for(h=S;h<y-i;h++)u=h+i,f=h+a,u in g?g[f]=g[u]:delete g[f];for(h=y;h>y-i+a;h--)delete g[h-1]}else if(a>i)for(h=y-i;h>S;h--)u=h+i-1,f=h+a-1,u in g?g[f]=g[u]:delete g[f];for(h=0;h<a;h++)g[h+S]=arguments[h+2];return g.length=y-i+a,d}})},a4d3:function(t,e,a){"use strict";var i=a("23e7"),n=a("da84"),o=a("d066"),s=a("c430"),r=a("83ab"),c=a("4930"),l=a("fdbf"),d=a("d039"),h=a("5135"),u=a("e8b5"),f=a("861d"),m=a("825a"),p=a("7b0b"),v=a("fc6a"),b=a("c04e"),g=a("5c6c"),y=a("7c73"),S=a("df75"),D=a("241c"),$=a("057f"),w=a("7418"),I=a("06cf"),x=a("9bf2"),_=a("d1e7"),C=a("9112"),k=a("6eeb"),T=a("5692"),O=a("f772"),E=a("d012"),V=a("90e3"),M=a("b622"),L=a("e538"),R=a("746f"),F=a("d44e"),N=a("69f3"),P=a("b727").forEach,j=O("hidden"),q="Symbol",A="prototype",B=M("toPrimitive"),z=N.set,U=N.getterFor(q),J=Object[A],G=n.Symbol,H=o("JSON","stringify"),X=I.f,Q=x.f,W=$.f,K=_.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),at=T("wks"),it=n.QObject,nt=!it||!it[A]||!it[A].findChild,ot=r&&d((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=X(J,e);i&&delete J[e],Q(t,e,a),i&&t!==J&&Q(J,e,i)}:Q,st=function(t,e){var a=Y[t]=y(G[A]);return z(a,{type:q,tag:t,description:e}),r||(a.description=e),a},rt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,a){t===J&&ct(Z,e,a),m(t);var i=b(e,!0);return m(a),h(Y,i)?(a.enumerable?(h(t,j)&&t[j][i]&&(t[j][i]=!1),a=y(a,{enumerable:g(0,!1)})):(h(t,j)||Q(t,j,g(1,{})),t[j][i]=!0),ot(t,i,a)):Q(t,i,a)},lt=function(t,e){m(t);var a=v(e),i=S(a).concat(mt(a));return P(i,(function(e){r&&!ht.call(a,e)||ct(t,e,a[e])})),t},dt=function(t,e){return void 0===e?y(t):lt(y(t),e)},ht=function(t){var e=b(t,!0),a=K.call(this,e);return!(this===J&&h(Y,e)&&!h(Z,e))&&(!(a||!h(this,e)||!h(Y,e)||h(this,j)&&this[j][e])||a)},ut=function(t,e){var a=v(t),i=b(e,!0);if(a!==J||!h(Y,i)||h(Z,i)){var n=X(a,i);return!n||!h(Y,i)||h(a,j)&&a[j][i]||(n.enumerable=!0),n}},ft=function(t){var e=W(v(t)),a=[];return P(e,(function(t){h(Y,t)||h(E,t)||a.push(t)})),a},mt=function(t){var e=t===J,a=W(e?Z:v(t)),i=[];return P(a,(function(t){!h(Y,t)||e&&!h(J,t)||i.push(Y[t])})),i};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=V(t),a=function(t){this===J&&a.call(Z,t),h(this,j)&&h(this[j],e)&&(this[j][e]=!1),ot(this,e,g(1,t))};return r&&nt&&ot(J,e,{configurable:!0,set:a}),st(e,t)},k(G[A],"toString",(function(){return U(this).tag})),k(G,"withoutSetter",(function(t){return st(V(t),t)})),_.f=ht,x.f=ct,I.f=ut,D.f=$.f=ft,w.f=mt,L.f=function(t){return st(M(t),t)},r&&(Q(G[A],"description",{configurable:!0,get:function(){return U(this).description}}),s||k(J,"propertyIsEnumerable",ht,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),P(S(at),(function(t){R(t)})),i({target:q,stat:!0,forced:!c},{for:function(t){var e=String(t);if(h(tt,e))return tt[e];var a=G(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(h(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!r},{create:dt,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ut}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:d((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),H){var pt=!c||d((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));i({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,a){var i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e,(f(e)||void 0!==t)&&!rt(t))return u(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!rt(e))return e}),n[1]=e,H.apply(null,n)}})}G[A][B]||C(G[A],B,G[A].valueOf),F(G,q),E[j]=!0},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,a){var i=a("83ab"),n=a("9bf2").f,o=Function.prototype,s=o.toString,r=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})},b64b:function(t,e,a){var i=a("23e7"),n=a("7b0b"),o=a("df75"),s=a("d039"),r=s((function(){o(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return o(n(t))}})},baa5:function(t,e,a){var i=a("23e7"),n=a("e58c");i({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},ddf7:function(t,e,a){},e01a:function(t,e,a){"use strict";var i=a("23e7"),n=a("83ab"),o=a("da84"),s=a("5135"),r=a("861d"),c=a("9bf2").f,l=a("e893"),d=o.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var h={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new d(t):void 0===t?d():d(t);return""===t&&(h[e]=!0),e};l(u,d);var f=u.prototype=d.prototype;f.constructor=u;var m=f.toString,p="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=m.call(t);if(s(h,t))return"";var a=p?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:u})}},e538:function(t,e,a){var i=a("b622");e.f=i},e58c:function(t,e,a){"use strict";var i=a("fc6a"),n=a("a691"),o=a("50c4"),s=a("a640"),r=a("ae40"),c=Math.min,l=[].lastIndexOf,d=!!l&&1/[1].lastIndexOf(1,-0)<0,h=s("lastIndexOf"),u=r("indexOf",{ACCESSORS:!0,1:0}),f=d||!h||!u;t.exports=f?function(t){if(d)return l.apply(this,arguments)||0;var e=i(this),a=o(e.length),s=a-1;for(arguments.length>1&&(s=c(s,n(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:l},f49e:function(t,e,a){"use strict";var i=a("1104"),n=a.n(i);n.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);