(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},a=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"189eb40c"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=o[t]=[e,s]}));e.push(n[2]=s);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/ftable-client/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("flash-message",{staticClass:"flashpool",attrs:{transitionName:"flash"}})],1)},a=[],i=(n("5c0b"),n("5c64"),n("2877")),r={},l=Object(i["a"])(r,o,a,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"px-16 mb-20"},[n("header",{staticClass:"py-4 tracking-widest text-purple-700"},[t._v(" This page doesn't have a title ")]),n("hr",{staticClass:"mb-10"}),n("div",{staticClass:"flex items-center justify-between"},[n("div",{staticClass:"w-1/4"}),n("div",{staticClass:"w-1/4 mx-4"},[n("small",{staticClass:"font-light"},[t._v("That cute little button let's you select a random item. It helps you choose from one of those seemingly useless boxes below. There really isn't that much to it. ")]),n("a",{staticClass:"my-5 inline-block text-purple-500",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.getRandomItem(e)}}},[t._v(" Play "),n("i",{staticClass:"material-icons align-middle"},[t._v("arrow_forward")])])]),n("div",{staticClass:"w-1/3"},[n("div",{staticClass:"bg-gray-200 rounded-full"},[n("div",{staticClass:"px-16 py-8 text-center"},[null==t.randomNumber?n("i",{staticClass:"material-icons text-gray-700",staticStyle:{"font-size":"90px"}},[t._v("help")]):n("div",{staticClass:"inline-flex justify-center rounded-full w-24 h-24 bg-gray-700 text-white"},[n("span",{staticClass:"self-center text-6xl"},[t._v(t._s(t.randomNumber+1))])]),t.randomContent.name?n("h5",{staticClass:"my-2 text-purple-500"},[t._v(t._s(t.randomContent.name))]):n("h5",{staticClass:"my-2 text-purple-500"},[t._v("Did you?")]),t.randomContent.description?n("small",{staticClass:"font-light"},[t._v(" "+t._s(t.randomContent.description)+" ")]):n("small",{staticClass:"font-light"},[t._v(" No really. Did you read the instruction to the left. If you did it's expected you'd have tried it at least. ")])])])])]),n("div",{staticClass:"flex px-4 my-6 mt-10 items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"rounded-full border border-gray-400 w-1/4 bg-transparent h-10 px-4",attrs:{placeholder:"Search"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),n("hr",{staticClass:"ml-5 flex-1"})]),n("div",{staticClass:"flex flex-row flex-wrap content-start"},[n("div",{staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"bg-gray-200"},[n("a",{staticClass:"p-8 text-center",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContentForm=!0}}},[n("i",{staticClass:"material-icons text-gray-700",staticStyle:{"font-size":"90px"}},[t._v("add_circle")]),n("h5",{staticClass:"font-normal my-2 text-purple-500"},[t._v("Add New")]),n("small",{staticClass:"font-light"},[t._v(" There's no context. Just add anything that comes to mind. There are no rules. ")])])])],1),t._l(t.filteredContents,(function(e,s){return n("div",{key:s,staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"bg-white border border-purple-200",attrs:{content:e},on:{view:function(e){return t.handleViewAction(s)},edit:function(e){return t.handleEditAction(s)},delete:function(e){return t.deleteContent(s)}}})],1)}))],2),t._m(0),n("div",{staticClass:"flex flex-row flex-wrap content-start"},[n("div",{staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"border bg-green-200"},[n("a",{staticClass:"p-8 text-center",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContentForm=!0}}},[n("h5",{staticClass:"font-normal my-2 text-purple-500"},[t._v("New on client")]),n("small",{staticClass:"font-light"},[t._v(" CRUD, Modal, Search, ")])])])],1),n("div",{staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"border bg-red-200"},[n("a",{staticClass:"p-8 text-center",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContentForm=!0}}},[n("h5",{staticClass:"font-normal my-2 text-purple-500"},[t._v("Coming in client")]),n("small",{staticClass:"font-light"},[t._v(" CRUD, Lightbox, Test, Alerts(With transition), Animation ")])])])],1),n("div",{staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"border bg-yellow-200"},[n("a",{staticClass:"p-8 text-center",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContentForm=!0}}},[n("h5",{staticClass:"font-normal my-2 text-purple-500"},[t._v("New on server")]),n("small",{staticClass:"font-light"},[t._v(" CRUD, Lightbox, Test, Alerts(With transition), Animation ")])])])],1),n("div",{staticClass:"px-4 my-6 w-1/4"},[n("ContentCard",{staticClass:"border bg-blue-200"},[n("a",{staticClass:"p-8 yellow-center",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContentForm=!0}}},[n("h5",{staticClass:"font-normal my-2 text-purple-500"},[t._v("Coming in server")]),n("small",{staticClass:"font-light"},[t._v(" CRUD, Lightbox, Test, Alerts(With transition), Animation ")])])])],1)])]),n("Modal",{model:{value:t.showContentForm,callback:function(e){t.showContentForm=e},expression:"showContentForm"}},[n("div",{staticClass:"bg-white rounded p-5"},[n("h4",[t._v("Add a new content "+t._s(t.editIndex))]),n("form",{on:{submit:function(e){e.preventDefault(),null==t.editIndex?t.addContent():t.editContent()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"my-4 w-full border rounded p-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"my-4 w-full border rounded p-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link,expression:"form.link"}],staticClass:"my-4 w-full border rounded p-2",attrs:{type:"text",placeholder:"link"},domProps:{value:t.form.link},on:{input:function(e){e.target.composing||t.$set(t.form,"link",e.target.value)}}}),n("button",{staticClass:"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"},[t._v(" Save ")])])])]),n("SideBox",{attrs:{title:"View Details"},model:{value:t.showContentDetails,callback:function(e){t.showContentDetails=e},expression:"showContentDetails"}},[n("div",{staticClass:"py-6"},[t._v(" Name: "+t._s(t.contentDetails.name)+" "),n("hr",{staticClass:"my-4"}),t._v(" Description: "+t._s(t.contentDetails.description)+" "),n("hr",{staticClass:"my-4"}),t._v(" Link: "+t._s(t.contentDetails.link)+" ")])])],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex px-4 my-6 mt-10 items-center"},[n("span",{staticClass:"text-lg text-gray-400"},[t._v(" Features ")]),n("hr",{staticClass:"ml-5 flex-1"})])}],m=(n("4de4"),n("caad"),n("b0c0"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-card  rounded overflow-hidden shadow-md flex flex-col justify-between"},[t._t("default",[t.content?[n("div",{staticClass:"p-5"},[n("h5",{staticClass:"font-bold text-md my-2 text-gray-500"},[t._v(t._s(t.content.name))]),n("small",{staticClass:"font-light"},[t._v(t._s(t.content.description)+" ")])]),n("div",{staticClass:"border-t p-4"},[n("div",{staticClass:"flex justify-between items-center"},[t._e(),n("a",{staticClass:"text-purple-300 underline text-sm",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$emit("view")}}},[t._v(" View ")]),n("div",{staticClass:"text-gray-500"},[t.content.link?n("a",{attrs:{href:t.content.link,target:"_blank"}},[n("i",{staticClass:"material-icons"},[t._v("link")])]):t._e(),n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$emit("edit")}}},[n("i",{staticClass:"material-icons"},[t._v("edit")])]),n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$emit("delete")}}},[n("i",{staticClass:"material-icons"},[t._v("delete")])])])])])]:t._e()])],2)}),p=[],h={name:"ContentCard",props:{content:Object}},v=h,C=(n("cba6"),Object(i["a"])(v,m,p,!1,null,"ada046f6",null)),g=C.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value?n("div",{staticClass:"w-screen h-screen inset-0 fixed"},[n("div",{staticClass:"mx-64 my-20 relative h-full overflow-scroll"},[n("div",{staticClass:"z-10 absolute w-full"},[t._t("default")],2)]),n("div",{staticClass:"opacity-25 bg-gray-700 w-screen h-screen absolute inset-0",on:{click:function(e){t.$emit("input",!1),t.$emit("close")}}})]):t._e()},y=[],x={name:"Modal",props:{value:Boolean}},w=x,_=Object(i["a"])(w,b,y,!1,null,"12fdf7d7",null),k=_.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value?n("div",{staticClass:"w-screen h-screen inset-0 fixed"},[n("div",{staticClass:"h-full w-full flex"},[n("div",{staticClass:"w-4/12 relative h-full overflow-scroll bg-white"},[n("div",{staticClass:"absolute w-full p-4"},[t._t("header",[n("div",{staticClass:"my-4 flex"},[n("button",{on:{click:function(e){return e.preventDefault(),t.closeBox(e)}}},[n("i",{staticClass:"material-icons text-blue-700"},[t._v("arrow_back")])]),n("div",{staticClass:"mx-4"},[t._v(t._s(t.title))])])]),t._t("default")],2)]),n("div",{staticClass:"opacity-25 bg-gray-700 h-full flex-1",on:{click:t.closeBox}})])]):t._e()},$=[],j={name:"SideBox",props:{value:Boolean,title:String},methods:{closeBox:function(){this.$emit("input",!1),this.$emit("close")}}},N=j,S=Object(i["a"])(N,D,$,!1,null,"7e0a10ac",null),O=S.exports,A={name:"home",components:{SideBox:O,Modal:k,ContentCard:g},data:function(){return{contents:[],showContentForm:!1,form:{name:"",description:"",link:""},searchQuery:"",randomNumber:null,randomContent:{},editIndex:null,contentDetails:{},showContentDetails:!1}},mounted:function(){this.getContents()},computed:{filteredContents:function(){var t=this;return this.contents.filter((function(e){return e.name.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},methods:{getContents:function(){var t=this;this.$store.dispatch("content/getContents").then((function(e){t.contents=e.data.data}))},addContent:function(){var t=this;this.$store.dispatch("content/addContent",this.form).then((function(e){t.flash("Item created successfully","success"),t.form={},t.contents.push(e.data.data),t.showContentForm=!1})).catch((function(){t.flash("Sorry! We couldn't process your request","error",{timeout:3})}))},handleEditAction:function(t){this.showContentForm=!0,this.form=this.contents[t],this.editIndex=t},handleViewAction:function(t){this.showContentDetails=!0,this.contentDetails=this.contents[t]},editContent:function(){var t=this;this.$store.dispatch("content/editContent",this.form).then((function(e){t.flash("Item updated successfully","success"),t.form={},t.$set(t.contents[t.editIndex],e.data.data),t.showContentForm=!1,t.editIndex=null})).catch((function(){t.flash("Sorry! We couldn't process your request","error",{timeout:3})}))},deleteContent:function(t){var e=this,n=this.contents[t];this.$dialogs.alert("Are you sure you want to delete?",{title:"Delete?",size:"sm"}).then((function(t){t.ok&&e.$store.dispatch("content/deleteContent",n._id).then((function(){e.flash("Item deleted successfully","success"),e.getContents()})).catch((function(){e.flash("Sorry! We couldn't process your request","error",{timeout:3})}))}))},getRandomItem:function(){var t=this.contents.length;t&&(this.randomNumber=Math.floor(Math.random()*t),this.randomContent=this.contents[this.randomNumber])}}},F=A,P=Object(i["a"])(F,d,f,!1,null,null,null),I=P.exports;s["a"].use(u["a"]);var T=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new u["a"]({mode:"history",base:"/ftable-client/",routes:T}),M=E,B=n("2f62"),L=n("bc3a"),R=n.n(L),Q={namespaced:!0,state:{saving:!1,fetching:!1,deleting:!1},mutations:{saving:function(t,e){t.saving=e},fetching:function(t,e){t.fetching=e},deleting:function(t,e){t.deleting=e}},actions:{getContents:function(t){return t.commit("fetching",!0),R.a.get("/contents").finally((function(){t.commit("fetching",!1)}))},addContent:function(t,e){return t.commit("saving",!0),R.a.post("/contents/create",e).finally((function(){t.commit("saving",!1)}))},editContent:function(t,e){return t.commit("saving",!0),R.a.put("/contents/".concat(e._id,"/edit"),e).finally((function(){t.commit("saving",!1)}))},deleteContent:function(t,e){return t.commit("deleting",!0),R.a.put("/contents/".concat(e,"/delete"),e).finally((function(){t.commit("deleting",!1)}))}},getters:{}},W=Q;s["a"].use(B["a"]);var q=new B["a"].Store({state:{},mutations:{},actions:{},modules:{content:W}}),U=n("9483");Object(U["a"])("".concat("/ftable-client/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("62bb"),n("f59c");var z=n("1aa0"),V=n.n(z),J=n("d00d"),G=n.n(J);R.a.defaults.baseURL="http://localhost:9000/api",s["a"].config.productionTip=!1,s["a"].prototype.$axios=R.a,s["a"].use(V.a),s["a"].use(G.a),new s["a"]({router:M,store:q,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),o=n.n(s);o.a},"5c64":function(t,e,n){"use strict";var s=n("d32a"),o=n.n(s);o.a},"9c0c":function(t,e,n){},b0a1:function(t,e,n){},cba6:function(t,e,n){"use strict";var s=n("b0a1"),o=n.n(s);o.a},d32a:function(t,e,n){}});
//# sourceMappingURL=app.0d692acb.js.map