(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{509:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},543:function(t,e,n){},822:function(t,e,n){"use strict";n(543)},823:function(t,e,n){},829:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(76),n(517)),l=n.n(o),c=n(526),d=n.n(c),f=n(129),h=Object(f.createClient)(),m=l()({breaks:!0,langPrefix:"",highlight:function(t,e){if(e&&d.a.getLanguage(e))try{return'<pre class="hljs"><code>'+d.a.highlight(t,{language:e,ignoreIllegals:!0}).value+"</code></pre>"}catch(t){}return'<pre class="hljs"><code>'+m.utils.escapeHtml(t)+"</code></pre>"}}),v={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.env,t.params,e.next=3,h.getEntries({content_type:n.CTF_BLOG_HOME_TYPE_ID});case 3:return r=e.sent,e.abrupt("return",{entry:r.items.pop()});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{entry:null}},computed:{compiled:function(){var t,e;return m.render(null!==(t=null===(e=this.entry)||void 0===e?void 0:e.fields.body)&&void 0!==t?t:"# EMPTY")},title:function(){var t,e;return null!==(t=null===(e=this.entry)||void 0===e?void 0:e.fields.header)&&void 0!==t?t:"AAAA"}}},w=(n(822),n(77)),y=n(97),O=n.n(y),j=(n(10),n(11),n(22),n(23),n(3)),x=(n(40),n(13),n(32),n(52),n(529),n(17),n(45),n(530),n(531),n(532),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(540),n(541),n(542),n(50),n(68),n(12),n(54),n(237),n(0)),S=n(102),P=n(1);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E=["sm","md","lg","xl"],H=E.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),k=E.reduce((function(t,e){return t["offset"+Object(P.o)(e)]={type:[String,Number],default:null},t}),{}),D=E.reduce((function(t,e){return t["order"+Object(P.o)(e)]={type:[String,Number],default:null},t}),{}),T={col:Object.keys(H),offset:Object.keys(k),order:Object.keys(D)};function B(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var L=new Map,N=x.a.extend({name:"v-col",functional:!0,props:C(C(C(C({cols:{type:[Boolean,String,Number],default:!1}},H),{},{offset:{type:[String,Number],default:null}},k),{},{order:{type:[String,Number],default:null}},D),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var l in n)o+=String(n[l]);var c=L.get(o);return c||function(){var t,e;for(e in c=[],T)T[e].forEach((function(t){var r=n[t],o=B(e,t,r);o&&c.push(o)}));var r=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!r||!n.cols},Object(j.a)(t,"col-".concat(n.cols),n.cols),Object(j.a)(t,"offset-".concat(n.offset),n.offset),Object(j.a)(t,"order-".concat(n.order),n.order),Object(j.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),L.set(o,c)}(),t(n.tag,Object(S.a)(data,{class:c}),r)}}),$=(n(823),x.a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),M=n(29),A=Object(M.a)($).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),R=n(827),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noselect",staticStyle:{"min-height":"3000px!important"}},[n("v-parallax",{attrs:{dark:"",src:"/img/hero1.jpg",id:"main-hero",height:"400"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1),t._v(" "),n("div",{staticClass:"md-content",domProps:{innerHTML:t._s(t.compiled)}})],1)}),[],!1,null,"296bcd78",null);e.default=component.exports;O()(component,{VCol:N,VParallax:A,VRow:R.a})}}]);