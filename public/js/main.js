webpackJsonp([1],{"2jmq":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"howTo"}},[n("h2",[t._v("HowTo")]),t._v(" สมมุติงานวิ่งชื่อ soundRun"),n("br"),t._v("\r\n  ก็เปิด browser ไปที่ https://yattaweb.herokuapp.com/"),n("em",{staticClass:"o"},[t._v("soundRun")]),n("br"),t._v("\r\n  ถ้าหลังชื่องานไม่เป็นวงกลมสีเขียวคือ ใช้ net มือถือที่ block socket.io"),n("br"),t._v("\r\n  (เหมือนมี True ได้เจ้าเดียว) หรือไม่ก็ server ล่ม"),n("br"),n("br"),t._v(" "),n("h3",[t._v("post tags")]),t._v(" "),n("em",{staticClass:"r"},[t._v("post")]),t._v(" ไปที่ https://yattaweb.herokuapp.com/"),n("em",{staticClass:"o"},[t._v("soundRun")]),t._v("/addTags"),n("br"),t._v(" postData อยู่ในรูป [[matId,tagId,tStamp],[matId,tagId,tStamp],...]"),n("br"),n("br"),t._v(" เช่น"),n("br"),t._v(" data={'tags': '[[1,1,1000],[1,2,2000]]'}"),n("br"),n("br"),t._v(" "),n("a",{attrs:{href:"test.py",target:"_blank"}},[t._v("(อ้างอิง ตัวอย่าง code python)")]),t._v(" "),n("br"),t._v(" ระบบจะตอบ จำนวน tag ที่ post เข้ามา เช่น data={'tags': '[[1,1,1000],[1,2,2000]]'} จะตอบ 2 ไรงี้\r\n  "),n("h3",[t._v("ลบ tags ทั้งหมดในงานวิ่งนั้นๆ")]),t._v(" "),n("em",{staticClass:"r"},[t._v("post")]),t._v(" ไปที่ https://yattaweb.herokuapp.com/"),n("em",{staticClass:"o"},[t._v("soundRun")]),t._v("/clear"),n("br"),t._v(" postData อยู่ในรูป data={'race': 'กลับทิศชื่องานวิ่ง'}"),n("br"),n("br"),t._v(" เช่น\r\n  "),n("br"),t._v(" post ไปที่ https://yattaweb.herokuapp.com/"),n("em",{staticClass:"o"},[t._v("soundRun")]),t._v("/clear"),n("br"),t._v(" data={'race':'\r\n  "),n("em",{staticClass:"o"},[t._v("nuRdnuos")]),t._v("'} อะไรงี้\r\n  "),n("br"),n("br"),n("br"),t._v(" ก็ไปตั้งชื่องานวิ่งเพื่อ test กันเองตามสะดวกเลย soundRun, poomerRun, icmm2020, ฯลฯ\r\n")])}],s={render:a,staticRenderFns:r};e.a=s},"4vft":function(t,e,n){"use strict";var a=n("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"raceViewer",props:["raceName"],data:function(){return{isUpload:!1}},methods:{sortByTagIdClass:function(){if(1==this.sortBy)return 1==this.sortDi?"up":"down"},sortByMatIdClass:function(){if(0==this.sortBy)return 1==this.sortDi?"up":"down"},sortBytStampClass:function(){if(2==this.sortBy)return 1==this.sortDi?"up":"down"},sortByMatId:function(){this.$store.commit("sortByMatId")},sortByTagId:function(){this.$store.commit("sortByTagId")},sortBytStamp:function(){this.$store.commit("sortBytStamp")}},mounted:function(){console.log("raceview mounted, raceName: "+this.raceName),this.$socket.emit("joinRace",this.raceName)},computed:r({},Object(a.c)({isConnected:function(t){return t.isConnected},tags:function(t){return t.tags},sortBy:function(t){return t.sortBy},sortDi:function(t){return t.di},needInitRaceName:function(t){return t.needInitRaceName}}),Object(a.b)(["sortedTags"])),watch:{needInitRaceName:function(){console.log("need to init race name !!! "+this.needInitRaceName),this.needInitRaceName&&this.$socket.emit("joinRace",this.raceName),this.$store.commit("doneInitRaceName")}},components:{}}},"5yWD":function(t,e){},AyOd:function(t,e,n){"use strict";function a(t){n("F4IQ")}var r=n("uEzm"),s=n("2jmq"),o=n("VU/8"),c=a,i=o(r.a,s.a,!1,c,null,null);e.a=i.exports},BTy9:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[],s={render:a,staticRenderFns:r};e.a=s},F4IQ:function(t,e){},ZuMv:function(t,e,n){"use strict";function a(t){n("5yWD")}var r=n("4vft"),s=n("aC5R"),o=n("VU/8"),c=a,i=o(r.a,s.a,!1,c,null,null);e.a=i.exports},aC5R:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"raceViewer"}},[n("h3",{class:t.isConnected?"connected":""},[t._v("raceName : "+t._s(t.raceName))]),n("br"),t._v(" tags : "+t._s(t.tags.length)+"\r\n  "),n("br"),n("br"),t._v(" "),n("table",{attrs:{border:"1"}},[n("thead",[n("tr",[n("td",[n("span",{class:t.sortByMatIdClass(),on:{click:t.sortByMatId}},[t._v("matId")])]),t._v(" "),n("td",[n("span",{class:t.sortByTagIdClass(),on:{click:t.sortByTagId}},[t._v("tagId")])]),t._v(" "),n("td",[n("span",{class:t.sortBytStampClass(),on:{click:t.sortBytStamp}},[t._v("tStamp")])])])]),t._v(" "),n("tbody",t._l(t.sortedTags,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e[0]))]),t._v(" "),n("td",[t._v(t._s(e[1]))]),t._v(" "),n("td",[t._v(t._s(e[2]))])])}))])])},r=[],s={render:a,staticRenderFns:r};e.a=s},bicQ:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),s=n.n(r),o=n("7+uW"),c=n("NYxO"),i=n("miCF"),u=n("creg"),d=n("hMcO"),m=n.n(d);o.a.use(c.a),o.a.prototype.$http=s.a;var v=new c.a.Store({state:{isConnected:!1,needInitRaceName:!1,sortBy:2,di:1,tags:[]},getters:{sortedTags:function(t){var e=t.sortBy;return t.tags.sort(function(n,a){return n[e]===a[e]?0:n[e]<a[e]?1*t.di:-1*t.di})}},mutations:{SOCKET_CONNECT:function(t,e){t.isConnected=!0,t.needInitRaceName=!0},SOCKET_DISCONNECT:function(t,e){console.log("disconnected"),t.isConnected=!1},SOCKET_TAGS:function(t,e){t.tags=[].concat(a(t.tags),a(e))},SOCKET_CLEARTAGS:function(t,e){console.log("clear tags!!"),t.tags=[]},SOCKET_CURRTAGS:function(t,e){console.log("current tags!!"),t.tags=e},doneInitRaceName:function(t){t.needInitRaceName=!1},sortByMatId:function(t){0!=t.sortBy?(t.sortBy=0,t.di=1):t.di=-1*t.di},sortByTagId:function(t){1!=t.sortBy?(t.sortBy=1,t.di=1):t.di=-1*t.di},sortBytStamp:function(t){2!=t.sortBy?(t.sortBy=2,t.di=1):t.di=-1*t.di}},actions:{}});o.a.use(m.a,"https://yattaweb.herokuapp.com/",v),new o.a({el:"#app",store:v,router:i.a,template:"<App/>",sockets:{},components:{App:u.a}})},creg:function(t,e,n){"use strict";var a=n("wCqm"),r=n("BTy9"),s=n("VU/8"),o=s(a.a,r.a,!1,null,null,null);e.a=o.exports},miCF:function(t,e,n){"use strict";var a=n("7+uW"),r=n("/ocq"),s=n("ZuMv"),o=n("AyOd");a.a.use(r.a),e.a=new r.a({mode:"history",base:"/",routes:[{path:"/:raceName/",name:"raceViewer",component:s.a,props:!0},{path:"/",name:"howTo",component:o.a},{path:"*",redirect:"/"}]})},uEzm:function(t,e,n){"use strict";e.a={name:"raceViewer"}},wCqm:function(t,e,n){"use strict";n("NYxO");e.a={name:"app",data:function(){return{}},methods:{},computed:{foo:function(){return"bar"}}}}},["bicQ"]);
//# sourceMappingURL=main.js.map?db8d31901f150888f62b