(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{478:function(t,e,n){"use strict";var r=n(480),j=n.n(r),c="Asia/Seoul";function o(t){return j.a.isMoment(t)?t.tz(c):j()(t).tz(c)}e.a={TimeZone:c,toKST:o,formatDate:function(t){return o(null!=t?t:new Date(0)).format("YYYY MM DD HH:mm:ss (zz)")}}},481:function(t,e,n){var map={"./af":343,"./af.js":343,"./ar":344,"./ar-dz":345,"./ar-dz.js":345,"./ar-kw":346,"./ar-kw.js":346,"./ar-ly":347,"./ar-ly.js":347,"./ar-ma":348,"./ar-ma.js":348,"./ar-sa":349,"./ar-sa.js":349,"./ar-tn":350,"./ar-tn.js":350,"./ar.js":344,"./az":351,"./az.js":351,"./be":352,"./be.js":352,"./bg":353,"./bg.js":353,"./bm":354,"./bm.js":354,"./bn":355,"./bn-bd":356,"./bn-bd.js":356,"./bn.js":355,"./bo":357,"./bo.js":357,"./br":358,"./br.js":358,"./bs":359,"./bs.js":359,"./ca":360,"./ca.js":360,"./cs":361,"./cs.js":361,"./cv":362,"./cv.js":362,"./cy":363,"./cy.js":363,"./da":364,"./da.js":364,"./de":365,"./de-at":366,"./de-at.js":366,"./de-ch":367,"./de-ch.js":367,"./de.js":365,"./dv":368,"./dv.js":368,"./el":369,"./el.js":369,"./en-au":370,"./en-au.js":370,"./en-ca":371,"./en-ca.js":371,"./en-gb":372,"./en-gb.js":372,"./en-ie":373,"./en-ie.js":373,"./en-il":374,"./en-il.js":374,"./en-in":375,"./en-in.js":375,"./en-nz":376,"./en-nz.js":376,"./en-sg":377,"./en-sg.js":377,"./eo":378,"./eo.js":378,"./es":379,"./es-do":380,"./es-do.js":380,"./es-mx":381,"./es-mx.js":381,"./es-us":382,"./es-us.js":382,"./es.js":379,"./et":383,"./et.js":383,"./eu":384,"./eu.js":384,"./fa":385,"./fa.js":385,"./fi":386,"./fi.js":386,"./fil":387,"./fil.js":387,"./fo":388,"./fo.js":388,"./fr":389,"./fr-ca":390,"./fr-ca.js":390,"./fr-ch":391,"./fr-ch.js":391,"./fr.js":389,"./fy":392,"./fy.js":392,"./ga":393,"./ga.js":393,"./gd":394,"./gd.js":394,"./gl":395,"./gl.js":395,"./gom-deva":396,"./gom-deva.js":396,"./gom-latn":397,"./gom-latn.js":397,"./gu":398,"./gu.js":398,"./he":399,"./he.js":399,"./hi":400,"./hi.js":400,"./hr":401,"./hr.js":401,"./hu":402,"./hu.js":402,"./hy-am":403,"./hy-am.js":403,"./id":404,"./id.js":404,"./is":405,"./is.js":405,"./it":406,"./it-ch":407,"./it-ch.js":407,"./it.js":406,"./ja":408,"./ja.js":408,"./jv":409,"./jv.js":409,"./ka":410,"./ka.js":410,"./kk":411,"./kk.js":411,"./km":412,"./km.js":412,"./kn":413,"./kn.js":413,"./ko":414,"./ko.js":414,"./ku":415,"./ku.js":415,"./ky":416,"./ky.js":416,"./lb":417,"./lb.js":417,"./lo":418,"./lo.js":418,"./lt":419,"./lt.js":419,"./lv":420,"./lv.js":420,"./me":421,"./me.js":421,"./mi":422,"./mi.js":422,"./mk":423,"./mk.js":423,"./ml":424,"./ml.js":424,"./mn":425,"./mn.js":425,"./mr":426,"./mr.js":426,"./ms":427,"./ms-my":428,"./ms-my.js":428,"./ms.js":427,"./mt":429,"./mt.js":429,"./my":430,"./my.js":430,"./nb":431,"./nb.js":431,"./ne":432,"./ne.js":432,"./nl":433,"./nl-be":434,"./nl-be.js":434,"./nl.js":433,"./nn":435,"./nn.js":435,"./oc-lnc":436,"./oc-lnc.js":436,"./pa-in":437,"./pa-in.js":437,"./pl":438,"./pl.js":438,"./pt":439,"./pt-br":440,"./pt-br.js":440,"./pt.js":439,"./ro":441,"./ro.js":441,"./ru":442,"./ru.js":442,"./sd":443,"./sd.js":443,"./se":444,"./se.js":444,"./si":445,"./si.js":445,"./sk":446,"./sk.js":446,"./sl":447,"./sl.js":447,"./sq":448,"./sq.js":448,"./sr":449,"./sr-cyrl":450,"./sr-cyrl.js":450,"./sr.js":449,"./ss":451,"./ss.js":451,"./sv":452,"./sv.js":452,"./sw":453,"./sw.js":453,"./ta":454,"./ta.js":454,"./te":455,"./te.js":455,"./tet":456,"./tet.js":456,"./tg":457,"./tg.js":457,"./th":458,"./th.js":458,"./tk":459,"./tk.js":459,"./tl-ph":460,"./tl-ph.js":460,"./tlh":461,"./tlh.js":461,"./tr":462,"./tr.js":462,"./tzl":463,"./tzl.js":463,"./tzm":464,"./tzm-latn":465,"./tzm-latn.js":465,"./tzm.js":464,"./ug-cn":466,"./ug-cn.js":466,"./uk":467,"./uk.js":467,"./ur":468,"./ur.js":468,"./uz":469,"./uz-latn":470,"./uz-latn.js":470,"./uz.js":469,"./vi":471,"./vi.js":471,"./x-pseudo":472,"./x-pseudo.js":472,"./yo":473,"./yo.js":473,"./zh-cn":474,"./zh-cn.js":474,"./zh-hk":475,"./zh-hk.js":475,"./zh-mo":476,"./zh-mo.js":476,"./zh-tw":477,"./zh-tw.js":477};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=481},482:function(t,e,n){"use strict";n(13),n(10),n(12),n(21),n(11),n(22);var r=n(3);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"article-preview",props:["entity"],filters:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n(478).a),computed:{createdAt:function(){var t;return null===(t=this.entity)||void 0===t?void 0:t.sys.createdAt},updatedAt:function(){var t;return null===(t=this.entity)||void 0===t?void 0:t.sys.updatedAt}},methods:{viewPost:function(t){this.$router.push("/posts/".concat(t))}}},o=n(73),l=n(94),f=n.n(l),d=n(501),m=n(341),v=n(714),h=n(484),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:"",elevation:"0"},on:{click:function(e){return t.viewPost(t.entity.fields.slug)}}},[n("v-card-title",[t._v(t._s(t.entity.fields.title))]),t._v(" "),t.createdAt?n("v-card-subtitle",[t._v("\n        "+t._s(t._f("formatDate")(t.createdAt))+"\n    ")]):n("v-card-subtitle",[t._v("\n        "+t._s(t._f("formatDate")(t.updatedAt))+"\n    ")]),t._v(" "),t.entity.fields.tags?n("v-card-actions",t._l(t.entity.fields.tags,(function(e){return n("v-chip",{key:e},[n("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("\n            "+t._s(e)+"\n        ")],1)})),1):t._e()],1)}),[],!1,null,"4026fab9",null);e.a=component.exports;f()(component,{VCard:d.a,VCardActions:m.a,VCardSubtitle:m.b,VCardTitle:m.c,VChip:v.a,VIcon:h.a})},718:function(t,e,n){"use strict";n.r(e);var r=n(19),j=(n(82),n(482)),c=n(124),o=Object(c.createClient)(),l={components:{articlePreview:j.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.env,t.params,e.next=3,o.getEntries({content_type:n.CTF_BLOG_POST_TYPE_ID});case 3:return r=e.sent,e.abrupt("return",{entries:r.items});case 5:case"end":return e.stop()}}),e)})))()}},f=n(73),d=n(94),m=n.n(d),v=n(339),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex flex-wrap noselect",attrs:{fluid:""}},t._l(t.entries,(function(t){return n("article-preview",{key:t.sys.id,staticClass:"mr-5 mb-3",attrs:{entity:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:v.a})}}]);