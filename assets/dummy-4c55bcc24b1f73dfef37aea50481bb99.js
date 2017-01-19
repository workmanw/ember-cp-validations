"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,r,n){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),(0,r["default"])(d,n["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var r=a["default"].APP.name,n=a["default"].APP.version;e["default"]=t["default"].extend({version:n,name:r})}),define("dummy/components/validated-input",["exports","ember"],function(e,t){var a=t["default"].computed,r=t["default"].defineProperty;e["default"]=t["default"].Component.extend({classNames:["validated-input"],classNameBindings:["showErrorClass:has-error","isValid:has-success"],model:null,value:null,type:"text",valuePath:"",placeholder:"",validation:null,isTyping:!1,init:function(){this._super.apply(this,arguments);var e=this.get("valuePath");r(this,"validation",a.oneWay("model.validations.attrs."+e)),r(this,"value",a.alias("model."+e))},notValidating:a.not("validation.isValidating"),didValidate:a.oneWay("targetObject.didValidate"),hasContent:a.notEmpty("value"),isValid:a.and("hasContent","validation.isValid","notValidating"),isInvalid:a.oneWay("validation.isInvalid"),showErrorClass:a.and("notValidating","showMessage","hasContent","validation"),showMessage:a("validation.isDirty","isInvalid","didValidate",function(){return(this.get("validation.isDirty")||this.get("didValidate"))&&this.get("isInvalid")})})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({showAlert:!1,isRegistered:!1,showCode:!1,didValidate:!1,actions:{showCode:function(){this.toggleProperty("showCode")},submit:function(){var e=this,t=this.get("model");t.validate().then(function(t){var a=(t.model,t.validations);a.get("isValid")?e.setProperties({showAlert:!1,isRegistered:!0,showCode:!1}):e.set("showAlert",!0),e.set("didValidate",!0)},function(e){})},dismissAlert:function(){this.set("showAlert",!1)}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/moment-calendar",["exports","ember-moment/helpers/moment-calendar"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"momentCalendar",{enumerable:!0,get:function(){return t.momentCalendar}})}),define("dummy/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/helpers/moment-format",["exports","ember","dummy/config/environment","ember-moment/helpers/moment-format"],function(e,t,a,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(a["default"],"moment.allowEmpty")})}),define("dummy/helpers/moment-from-now",["exports","ember","dummy/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,a,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(a["default"],"moment.allowEmpty")})}),define("dummy/helpers/moment-to-now",["exports","ember","dummy/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,a,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(a["default"],"moment.allowEmpty")})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function r(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var r,n=a["default"].exportApplicationGlobal;r="string"==typeof n?n:t["default"].String.classify(a["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/models/signup",["exports","ember-data","ember-cp-validations"],function(e,t,a){var r=(0,a.buildValidations)({name:(0,a.validator)("presence",!0),acceptTerms:(0,a.validator)(function(e){return e||"You must accept the terms."})});e["default"]=t["default"].Model.extend(r,{name:t["default"].attr("string",{defaultValue:""}),acceptTerms:t["default"].attr("boolean",{defaultValue:!1})})}),define("dummy/models/user-detail",["exports","ember","ember-data","moment","ember-cp-validations"],function(e,t,a,r,n){var d=a["default"].attr,l=(0,n.buildValidations)({firstName:(0,n.validator)("presence",!0),lastName:(0,n.validator)("presence",!0),dob:{description:"Date of  birth",validators:[(0,n.validator)("presence",!0),(0,n.validator)("date",{before:"now",after:function(){return(0,r["default"])().subtract(120,"years").format("M/D/YYYY")},format:"M/D/YYYY",message:function(e,t,a){return"before"===e?"Are you from the future?":"after"===e?"There is no way you are "+(0,r["default"])().diff(t,"years")+" years old":void 0}})]},phone:[(0,n.validator)("format",{allowBlank:!0,type:"phone"})],url:[(0,n.validator)("format",{allowBlank:!0,type:"url"})]},{debounce:500});e["default"]=a["default"].Model.extend(l,{firstName:d("string"),lastName:d("string"),dob:d("date"),phone:d("string"),url:d("string")})}),define("dummy/models/user",["exports","ember","ember-data","ember-cp-validations"],function(e,t,a,r){var n=a["default"].attr,d=(0,r.buildValidations)({username:{description:"Username",validators:[(0,r.validator)("presence",!0),(0,r.validator)("length",{max:15})]},password:{description:"Password",validators:[(0,r.validator)("presence",!0),(0,r.validator)("length",{min:4,max:8}),(0,r.validator)("format",{regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,message:"{description} must include at least one upper case letter, one lower case letter, and a number"})]},email:{validators:[(0,r.validator)("presence",!0),(0,r.validator)("format",{type:"email"})]},emailConfirmation:(0,r.validator)("confirmation",{on:"email",message:"Email addresses do not match"}),details:(0,r.validator)("belongs-to")},{debounce:500});e["default"]=a["default"].Model.extend(d,{username:n("string"),password:n("string"),email:n("string"),details:a["default"].belongsTo("user-detail")})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.store.createRecord("user",{details:this.store.createRecord("user-detail")})}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/moment",["exports","ember","dummy/config/environment","ember-moment/services/moment"],function(e,t,a,r){e["default"]=r["default"].extend({defaultFormat:t["default"].get(a["default"],"moment.outputFormat")})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/validated-input",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:3,column:2},end:{line:5,column:2}},moduleName:"dummy/templates/components/validated-input.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","valid-input fa fa-check"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:8,column:6},end:{line:12,column:6}},moduleName:"dummy/templates/components/validated-input.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("          ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","error");var r=e.createTextNode("\n              ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n          ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[1]),1,1),r},statements:[["inline","get",[["subexpr","get",[["get","model.validations.attrs",[]],["get","valuePath",["loc",[null,[10,28],[10,37]]]]],[],[]],"message"],[],["loc",[null,[10,14],[10,49]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:14,column:6}},moduleName:"dummy/templates/components/validated-input.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","form-group");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","input-error");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[0]),n=new Array(3);return n[0]=e.createMorphAt(r,1,1),n[1]=e.createMorphAt(r,3,3),n[2]=e.createMorphAt(e.childAt(r,[5]),1,1),n},statements:[["inline","input",[],["type",["subexpr","@mut",[["get","type",["loc",[null,[2,15],[2,19]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[2,26],[2,31]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[2,44],[2,55]]]]],[],[]],"class","form-control","name",["subexpr","@mut",[["get","valuePath",["loc",[null,[2,82],[2,91]]]]],[],[]]],["loc",[null,[2,2],[2,93]]]],["block","if",[["get","isValid",["loc",[null,[3,8],[3,15]]]]],[],0,null,["loc",[null,[3,2],[5,9]]]],["block","if",[["get","showMessage",["loc",[null,[8,12],[8,23]]]]],[],1,null,["loc",[null,[8,6],[12,13]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:13,column:8},end:{line:18,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","alert");var r=e.createTextNode("\n              ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","fa fa-times icon-remove"),e.appendChild(a,r);var r=e.createTextNode("\n              Please fix all the errors below before continuing.\n            ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1,1]),n=new Array(1);return n[0]=e.createElementMorph(r),n},statements:[["element","action",["dismissAlert"],[],["loc",[null,[15,51],[15,76]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:9,column:8},end:{line:50,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","register"),e.setAttribute(a,"style","display: block;");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("h2"),n=e.createTextNode("Create an Account");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("        ");e.appendChild(a,r);var r=e.createElement("form"),n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","section");var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","section-info left");var l=e.createTextNode("\n                  These form inputs are bound to the ");e.appendChild(d,l);var l=e.createElement("strong"),i=e.createTextNode("User");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" model which is created in the route's model hook. Each one of these fields has validations to make sure we we recieve the data we want.\n              ");e.appendChild(d,l),e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n            ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n            ");e.appendChild(r,n);var n=e.createElement("h4"),d=e.createTextNode(" About Me");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n            ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","section");var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","section-info right");var l=e.createTextNode("\n                  We have a secondary model, ");e.appendChild(d,l);var l=e.createElement("strong"),i=e.createTextNode("User Details");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(", which holds extra information about our user. This model is part of the ");e.appendChild(d,l);var l=e.createElement("strong"),i=e.createTextNode("User");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" model via a belongsTo relationship.\n              ");e.appendChild(d,l),e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n            ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","section");var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","section-info left last");var l=e.createTextNode("\n                  On submit, a manual validation is run which will validate both the ");e.appendChild(d,l);var l=e.createElement("strong"),i=e.createTextNode("User");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" and  ");e.appendChild(d,l);var l=e.createElement("strong"),i=e.createTextNode("User Details");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" models. If both are valid, then the user can continue to the next screen.\n              ");e.appendChild(d,l),e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createElement("button");e.setAttribute(d,"id","signup");var l=e.createTextNode("Sign Up");e.appendChild(d,l),e.appendChild(n,d);var d=e.createTextNode("\n            ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n        ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1]),n=e.childAt(r,[5]),d=e.childAt(n,[1]),l=e.childAt(n,[5]),i=e.childAt(n,[7,3]),o=new Array(11);return o[0]=e.createMorphAt(r,3,3),o[1]=e.createMorphAt(d,3,3),o[2]=e.createMorphAt(d,5,5),o[3]=e.createMorphAt(d,7,7),o[4]=e.createMorphAt(d,9,9),o[5]=e.createMorphAt(l,3,3),o[6]=e.createMorphAt(l,5,5),o[7]=e.createMorphAt(l,7,7),o[8]=e.createMorphAt(l,9,9),o[9]=e.createMorphAt(l,11,11),o[10]=e.createElementMorph(i),o},statements:[["block","if",[["get","showAlert",["loc",[null,[13,14],[13,23]]]]],[],0,null,["loc",[null,[13,8],[18,15]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[24,38],[24,43]]]]],[],[]],"valuePath","username","placeholder","Username"],["loc",[null,[24,14],[24,89]]]],["inline","validated-input",[],["type","password","model",["subexpr","@mut",[["get","model",["loc",[null,[25,54],[25,59]]]]],[],[]],"valuePath","password","placeholder","Password"],["loc",[null,[25,14],[25,105]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[26,38],[26,43]]]]],[],[]],"valuePath","email","placeholder","Email"],["loc",[null,[26,14],[26,83]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[27,38],[27,43]]]]],[],[]],"valuePath","emailConfirmation","placeholder","Verify Email"],["loc",[null,[27,14],[27,102]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model.details",["loc",[null,[36,38],[36,51]]]]],[],[]],"valuePath","firstName","placeholder","First Name"],["loc",[null,[36,14],[36,100]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model.details",["loc",[null,[37,38],[37,51]]]]],[],[]],"valuePath","lastName","placeholder","Last Name"],["loc",[null,[37,14],[37,98]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model.details",["loc",[null,[38,38],[38,51]]]]],[],[]],"valuePath","dob","placeholder","Date of Birth"],["loc",[null,[38,14],[38,97]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model.details",["loc",[null,[39,38],[39,51]]]]],[],[]],"valuePath","phone","placeholder","Phone #"],["loc",[null,[39,14],[39,93]]]],["inline","validated-input",[],["model",["subexpr","@mut",[["get","model.details",["loc",[null,[40,38],[40,51]]]]],[],[]],"valuePath","url","placeholder","URL"],["loc",[null,[40,14],[40,87]]]],["element","action",["submit"],[],["loc",[null,[46,34],[46,53]]]]],locals:[],templates:[e]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:50,column:6},end:{line:56,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","registered"),e.setAttribute(a,"style","display: block;");var r=e.createTextNode("\n            ");e.appendChild(a,r);var r=e.createElement("img");e.setAttribute(r,"class","tomster"),e.setAttribute(r,"src","images/tomsterzilla.jpeg"),e.setAttribute(r,"alt",""),e.appendChild(a,r);var r=e.createTextNode("\n            ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","fa fa-check-circle icon-success"),e.appendChild(a,r);var r=e.createTextNode("\n            ");e.appendChild(a,r);var r=e.createElement("h2");e.setAttribute(r,"class","success");var n=e.createTextNode("Success");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:58,column:8},end:{line:60,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("          ");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"class","show-code bottom");var r=e.createElement("i");e.setAttribute(r,"class","fa fa-code"),e.appendChild(a,r);var r=e.createTextNode(" ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-code"),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1]),n=new Array(2);return n[0]=e.createElementMorph(r),n[1]=e.createMorphAt(r,2,2),n},statements:[["element","action",["showCode"],[],["loc",[null,[59,38],[59,59]]]],["inline","if",[["get","showCode",["loc",[null,[59,92],[59,100]]]],"Hide Code","Show Code"],[],["loc",[null,[59,87],[59,126]]]]],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:60,column:8},end:{line:62,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("          ");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","http://offirgolan.github.io/ember-cp-validations/docs");var r=e.createTextNode("Need Help?");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:71,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("a");e.setAttribute(a,"href","https://github.com/offirgolan/ember-cp-validations");var r=e.createElement("img");e.setAttribute(r,"style","position: absolute; top: 0; right: 0; border: 0;"),e.setAttribute(r,"src","https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"),e.setAttribute(r,"alt","Fork me on GitHub"),e.setAttribute(r,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"),e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","info");var n=e.createTextNode("\n        ");e.appendChild(r,n);var n=e.createElement("img");e.setAttribute(n,"src","images/ember-logo-96cc57a28066aa60c12df89c146c07d5.png"),e.setAttribute(n,"alt","Ember"),e.setAttribute(n,"width","250px"),e.appendChild(r,n);var n=e.createTextNode("\n      ");e.appendChild(r,n);var n=e.createElement("h1"),d=e.createTextNode("CP Validations");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","form");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("      ");e.appendChild(r,n);var n=e.createElement("footer"),d=e.createTextNode("\n");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("      ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("pre");e.setAttribute(r,"class","prettyprint");var n=e.createTextNode("\n// models/user.js");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("import Ember from 'ember';");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("import DS from 'ember-data';");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("import { validator, buildValidations } from 'ember-cp-validations';");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("var attr = DS.attr;");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("var Validations = buildValidations({");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  username: {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    debounce: 500,");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    validators: [");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('presence', true),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('length', {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        max: 15");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      })");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    ]");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  },");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  password: {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    description: 'Password',");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    debounce: 500,");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    validators: [");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('presence', true),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('length', {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        min: 4,");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        max: 8");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      }),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('format', {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        message: '{description} must include at least...'");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      })");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    ]");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  },");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  email: {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    debounce: 500,");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    validators: [");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('presence', true),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      validator('format', {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("        type: 'email'");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("      })");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    ]");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  },");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  emailConfirmation: validator('confirmation', {");e.appendChild(r,n);var n=e.createElement("br");
e.appendChild(r,n);var n=e.createTextNode("    on: 'email',");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    message: 'Email addresses do not match',");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("    debounce: 500");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  }),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  details: validator('belongs-to')");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("});");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("export default DS.Model.extend(Validations, {");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  'username': attr('string'),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  'password': attr('string'),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  'email': attr('string'),");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("  'details': DS.belongsTo('user-detail')");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("});\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[2,3]),n=e.childAt(t,[4]),d=new Array(3);return d[0]=e.createMorphAt(r,1,1),d[1]=e.createMorphAt(e.childAt(r,[3]),1,1),d[2]=e.createAttrMorph(n,"class"),d},statements:[["block","unless",[["get","isRegistered",["loc",[null,[9,18],[9,30]]]]],[],0,1,["loc",[null,[9,8],[56,17]]]],["block","unless",[["get","isRegistered",["loc",[null,[58,18],[58,30]]]]],[],2,3,["loc",[null,[58,8],[62,19]]]],["attribute","class",["concat",["section-info bottom code ",["subexpr","if",[["get","showCode",["loc",[null,[67,42],[67,50]]]],"show"],[],["loc",[null,[67,37],[67,59]]]]]]]],locals:[],templates:[e,t,a,r]}}())}),define("dummy/validators/belongs-to",["exports","ember-cp-validations/validators/belongs-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/collection",["exports","ember-cp-validations/validators/collection"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/confirmation",["exports","ember-cp-validations/validators/confirmation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/date",["exports","ember-cp-validations/validators/date"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/dependent",["exports","ember-cp-validations/validators/dependent"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/ds-error",["exports","ember-cp-validations/validators/ds-error"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/exclusion",["exports","ember-cp-validations/validators/exclusion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/format",["exports","ember-cp-validations/validators/format"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/has-many",["exports","ember-cp-validations/validators/has-many"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/inclusion",["exports","ember-cp-validations/validators/inclusion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/length",["exports","ember-cp-validations/validators/length"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/messages",["exports","ember-cp-validations/validators/messages"],function(e,t){e["default"]=t["default"].extend({test:"Test error message"})}),define("dummy/validators/number",["exports","ember-cp-validations/validators/number"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/validators/presence",["exports","ember-cp-validations/validators/presence"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-cp-validations",version:"v2.7.1"});