import{w as Y,o as m,c as v,m as d,z as w,E as O,a as h,h as x,U as W,i as nt,D as C,g as j,A as K,B as G,F as D,f as Q,u as ut,r as ht,G as F,e as J,t as V,b as X,d as E,V as dt,s as ft,v as mt,x as pt}from"./index-074619c1.js";var gt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},vt={name:"BaseCard",extends:Y,css:{classes:gt}},it={name:"Card",extends:vt};function yt(e,t,n,s,a,i){return m(),v("div",d({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(m(),v("div",d({key:0,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header")],16)):O("",!0),h("div",d({class:e.cx("body")},e.ptm("body")),[e.$slots.title?(m(),v("div",d({key:0,class:e.cx("title")},e.ptm("title")),[w(e.$slots,"title")],16)):O("",!0),e.$slots.subtitle?(m(),v("div",d({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[w(e.$slots,"subtitle")],16)):O("",!0),h("div",d({class:e.cx("content")},e.ptm("content")),[w(e.$slots,"content")],16),e.$slots.footer?(m(),v("div",d({key:2,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):O("",!0)],16)],16)}it.render=yt;var st={name:"BanIcon",extends:x,computed:{pathId:function(){return"pv_icon_clip_".concat(W())}}},Ct=["clipPath"],It=h("path",{d:"M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",fill:"currentColor"},null,-1),wt=[It],St=["id"],zt=h("rect",{width:"14",height:"14",fill:"white"},null,-1),bt=[zt];function Lt(e,t,n,s,a,i){return m(),v("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[h("g",{clipPath:"url(#".concat(i.pathId,")")},wt,8,Ct),h("defs",null,[h("clipPath",{id:"".concat(i.pathId)},bt,8,St)])],16)}st.render=Lt;var ot={name:"StarIcon",extends:x,computed:{pathId:function(){return"pv_icon_clip_".concat(W())}}},Bt=["clipPath"],Pt=h("path",{d:"M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",fill:"currentColor"},null,-1),Ot=[Pt],$t=["id"],Vt=h("rect",{width:"14",height:"14",fill:"white"},null,-1),Tt=[Vt];function Ht(e,t,n,s,a,i){return m(),v("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[h("g",{clipPath:"url(#".concat(i.pathId,")")},Ot,8,Bt),h("defs",null,[h("clipPath",{id:"".concat(i.pathId)},Tt,8,$t)])],16)}ot.render=Ht;var at={name:"StarFillIcon",extends:x,computed:{pathId:function(){return"pv_icon_clip_".concat(W())}}},Rt=["clipPath"],Ft=h("path",{d:"M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",fill:"currentColor"},null,-1),kt=[Ft],Wt=["id"],At=h("rect",{width:"14",height:"14",fill:"white"},null,-1),Nt=[At];function Mt(e,t,n,s,a,i){return m(),v("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[h("g",{clipPath:"url(#".concat(i.pathId,")")},kt,8,Rt),h("defs",null,[h("clipPath",{id:"".concat(i.pathId)},Nt,8,Wt)])],16)}at.render=Mt;var _t=`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.p-rating.p-readonly .p-rating-item {
    cursor: default;
}
`,Et={root:function(t){var n=t.props;return["p-rating",{"p-readonly":n.readonly,"p-disabled":n.disabled}]},cancelItem:function(t){var n=t.instance;return["p-rating-item p-rating-cancel-item",{"p-focus":n.focusedOptionIndex===0}]},cancelIcon:"p-rating-icon p-rating-cancel",item:function(t){var n=t.instance,s=t.props,a=t.value;return["p-rating-item",{"p-rating-item-active":a<=s.modelValue,"p-focus":a===n.focusedOptionIndex}]},onIcon:"p-rating-icon",offIcon:"p-rating-icon"},jt=nt(_t,{name:"rating",manual:!0}),Dt=jt.load,Zt={name:"BaseRating",extends:Y,props:{modelValue:{type:Number,default:null},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},cancel:{type:Boolean,default:!0},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0}},css:{classes:Et,loadStyle:Dt},provide:function(){return{$parentInstance:this}}},rt={name:"Rating",extends:Zt,emits:["update:modelValue","change","focus","blur"],data:function(){return{name:this.$attrs.name,focusedOptionIndex:-1}},watch:{"$attrs.name":function(t){this.name=t||W()}},mounted:function(){this.name=this.name||W()},methods:{getPTOptions:function(t,n){return this.ptm(n,{context:{active:t<=this.modelValue,focused:t===this.focusedOptionIndex}})},onOptionClick:function(t,n){if(!this.readonly&&!this.disabled){this.onOptionSelect(t,n);var s=C.getFirstFocusableElement(t.currentTarget);s&&C.focus(s)}},onFocus:function(t,n){this.focusedOptionIndex=n,this.$emit("focus",t)},onBlur:function(t){this.focusedOptionIndex=-1,this.$emit("blur",t)},onChange:function(t,n){this.onOptionSelect(t,n)},onOptionSelect:function(t,n){this.focusedOptionIndex=n,this.updateModel(t,n||null)},updateModel:function(t,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:t,value:n})},cancelAriaLabel:function(){return this.$primevue.config.locale.clear},starAriaLabel:function(t){return t===1?this.$primevue.config.locale.aria.star:this.$primevue.config.locale.aria.stars.replace(/{star}/g,t)}},components:{StarFillIcon:at,StarIcon:ot,BanIcon:st}},Ut=["data-p-focused"],qt=["name","checked","disabled","readonly","aria-label"],Kt=["onClick","data-p-active","data-p-focused"],Gt=["value","name","checked","disabled","readonly","aria-label","onFocus","onChange"];function Jt(e,t,n,s,a,i){return m(),v("div",d({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"rating"}),[e.cancel?(m(),v("div",d({key:0,class:e.cx("cancelItem"),onClick:t[3]||(t[3]=function(o){return i.onOptionClick(o,0)})},e.ptm("cancelItem"),{"data-p-focused":a.focusedOptionIndex===0}),[h("span",d({class:"p-hidden-accessible"},e.ptm("hiddenCancelInputWrapper"),{"data-p-hidden-accessible":!0}),[h("input",d({type:"radio",value:"0",name:a.name,checked:e.modelValue===0,disabled:e.disabled,readonly:e.readonly,"aria-label":i.cancelAriaLabel(),onFocus:t[0]||(t[0]=function(o){return i.onFocus(o,0)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(o){return i.onChange(o,0)})},e.ptm("hiddenCancelInput")),null,16,qt)],16),w(e.$slots,"cancelicon",{class:G(e.cx("cancelIcon"))},function(){return[(m(),j(K(e.cancelIcon?"span":"BanIcon"),d({class:[e.cx("cancelIcon"),e.cancelIcon]},e.ptm("cancelIcon")),null,16,["class"]))]})],16,Ut)):O("",!0),(m(!0),v(D,null,Q(e.stars,function(o){return m(),v("div",d({key:o,class:e.cx("item",{value:o}),onClick:function(r){return i.onOptionClick(r,o)}},i.getPTOptions(o,"item"),{"data-p-active":o<=e.modelValue,"data-p-focused":o===a.focusedOptionIndex}),[h("span",d({class:"p-hidden-accessible"},e.ptm("hiddenItemInputWrapper"),{"data-p-hidden-accessible":!0}),[h("input",d({type:"radio",value:o,name:a.name,checked:e.modelValue===o,disabled:e.disabled,readonly:e.readonly,"aria-label":i.starAriaLabel(o),onFocus:function(r){return i.onFocus(r,o)},onBlur:t[4]||(t[4]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:function(r){return i.onChange(r,o)}},e.ptm("hiddenItemInput")),null,16,Gt)],16),o<=e.modelValue?w(e.$slots,"onicon",{key:0,value:o,class:G(e.cx("onIcon"))},function(){return[(m(),j(K(e.onIcon?"span":"StarFillIcon"),d({class:[e.cx("onIcon"),e.onIcon]},e.ptm("onIcon")),null,16,["class"]))]}):w(e.$slots,"officon",{key:1,value:o,class:G(e.cx("offIcon"))},function(){return[(m(),j(K(e.offIcon?"span":"StarIcon"),d({class:[e.cx("offIcon"),e.offIcon]},e.ptm("offIcon")),null,16,["class"]))]})],16,Kt)}),128))],16)}rt.render=Jt;const Qt=["src"],Xt={class:"offer-price"},Yt={class:"offer-price-container"},xt=h("div",{class:"price-text"},"Incepand de la",-1),te={class:"price-value"},ee=h("span",{class:"currency"},"€",-1),ne=h("div",{class:"price-text"},"per pers.",-1),ie={class:"price-specification"},ve={__name:"OfferCard",props:{offer:{type:Object,required:!0,default:()=>({})}},setup(e){const t=e,n=ut();let s=ht(0);function a(o){n.setRezervationVisible(!0),n.setOffer(o)}function i(){s.value=parseInt(t.offer.rating,10)}return i(),(o,c)=>(m(),j(E(it),null,{header:F(()=>[h("img",{src:e.offer.img,alt:""},null,8,Qt)]),title:F(()=>[J(V(e.offer.title),1)]),subtitle:F(()=>[h("div",null,V(e.offer.country)+" "+V(e.offer.location),1),X(E(rt),{modelValue:E(s),"onUpdate:modelValue":c[0]||(c[0]=r=>dt(s)?s.value=r:s=r),stars:5,readonly:"",cancel:!1},null,8,["modelValue"])]),content:F(()=>[J(V(e.offer.description),1)]),footer:F(()=>[X(E(ft),{label:"Rezervă",onClick:c[1]||(c[1]=r=>a(e.offer))}),h("div",Xt,[h("div",Yt,[xt,h("div",te,[J(V(parseFloat(e.offer.price).toLocaleString("ro-RO"))+" ",1),ee]),ne]),h("div",ie,V(e.offer.duration)+" nopti",1)])]),_:1}))}},se={class:"offers-title"},oe=h("div",{class:"offers-title-bg"},null,-1),ae={class:"offers-title-text"},ye={__name:"Title",props:{text:{type:String,default:""}},setup(e){return(t,n)=>(m(),v("div",se,[oe,h("div",ae,V(e.text),1)]))}};var re=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,le=nt(re,{name:"virtualscroller"}),ce=le.load,ue={name:"BaseVirtualScroller",extends:Y,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},css:{loadStyle:ce},provide:function(){return{$parentInstance:this}}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(s){lt(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function lt(e,t,n){return t=he(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e){var t=de(e,"string");return A(t)==="symbol"?t:String(t)}function de(e,t){if(A(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(A(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fe={name:"VirtualScroller",extends:ue,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t){this.d_loading=t},items:function(t,n){(!n||n.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){C.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=C.getWidth(this.element),this.defaultHeight=C.getHeight(this.element),this.defaultContentWidth=C.getWidth(this.content),this.defaultContentHeight=C.getHeight(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",a=this.isBoth(),i=this.isHorizontal(),o=this.first,c=this.calculateNumItems(),r=c.numToleratedItems,l=this.getContentPosition(),u=this.itemSize,p=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,L=arguments.length>1?arguments[1]:void 0;return S<=L?0:S},g=function(S,L,H){return S*L+H},I=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:S,top:L,behavior:s})},f=a?{rows:0,cols:0}:0,z=!1;a?(f={rows:p(t[0],r[0]),cols:p(t[1],r[1])},I(g(f.cols,u[1],l.left),g(f.rows,u[0],l.top)),z=f.rows!==o.rows||f.cols!==o.cols):(f=p(t,r),i?I(g(f,u,l.left),0):I(0,g(f,u,l.top)),z=f!==o),this.isRangeChanged=z,this.first=f},scrollInView:function(t,n){var s=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(n){var i=this.isBoth(),o=this.isHorizontal(),c=this.getRenderedRange(),r=c.first,l=c.viewport,u=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return s.scrollTo({left:P,top:S,behavior:a})},p=n==="to-start",g=n==="to-end";if(p){if(i)l.first.rows-r.rows>t[0]?u(l.first.cols*this.itemSize[1],(l.first.rows-1)*this.itemSize[0]):l.first.cols-r.cols>t[1]&&u((l.first.cols-1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.first-r>t){var I=(l.first-1)*this.itemSize;o?u(I,0):u(0,I)}}else if(g){if(i)l.last.rows-r.rows<=t[0]+1?u(l.first.cols*this.itemSize[1],(l.first.rows+1)*this.itemSize[0]):l.last.cols-r.cols<=t[1]+1&&u((l.first.cols+1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.last-r<=t+1){var f=(l.first+1)*this.itemSize;o?u(f,0):u(0,f)}}}else this.scrollToIndex(t,a)},getRenderedRange:function(){var t=function(p,g){return Math.floor(p/(g||p))},n=this.first,s=0;if(this.element){var a=this.isBoth(),i=this.isHorizontal(),o=this.element.scrollTop,c=o.scrollTop,r=o.scrollLeft;if(a)n={rows:t(c,this.itemSize[0]),cols:t(r,this.itemSize[1])},s={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{var l=i?r:c;n=t(l,this.itemSize),s=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:s}}},calculateNumItems:function(){var t=this.isBoth(),n=this.isHorizontal(),s=this.itemSize,a=this.getContentPosition(),i=this.element?this.element.offsetWidth-a.left:0,o=this.element?this.element.offsetHeight-a.top:0,c=function(g,I){return Math.ceil(g/(I||g))},r=function(g){return Math.ceil(g/2)},l=t?{rows:c(o,s[0]),cols:c(i,s[1])}:c(n?i:o,s),u=this.d_numToleratedItems||(t?[r(l.rows),r(l.cols)]:r(l));return{numItemsInViewport:l,numToleratedItems:u}},calculateOptions:function(){var t=this,n=this.isBoth(),s=this.first,a=this.calculateNumItems(),i=a.numItemsInViewport,o=a.numToleratedItems,c=function(u,p,g){var I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(u+p+(u<g?2:3)*g,I)},r=n?{rows:c(s.rows,i.rows,o[0]),cols:c(s.cols,i.cols,o[1],!0)}:c(s,i,o);this.last=r,this.numItemsInViewport=i,this.d_numToleratedItems=o,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=n?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){t.lazyLoadState={first:t.step?n?{rows:0,cols:s.cols}:0:s,last:Math.min(t.step?t.step:r,t.items.length)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var n=t.isBoth(),s=t.isHorizontal(),a=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var i=[C.getWidth(t.content),C.getHeight(t.content)],o=i[0],c=i[1];o!==t.defaultContentWidth&&(t.element.style.width=""),c!==t.defaultContentHeight&&(t.element.style.height="");var r=[C.getWidth(t.element),C.getHeight(t.element)],l=r[0],u=r[1];(n||s)&&(t.element.style.width=l<t.defaultWidth?l+"px":t.scrollWidth||t.defaultWidth+"px"),(n||a)&&(t.element.style.height=u<t.defaultHeight?u+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(n?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),n=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),s=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),a=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),i=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:n,right:s,top:a,bottom:i,x:n+s,y:a+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var n=this.isBoth(),s=this.isHorizontal(),a=this.element.parentElement,i=this.scrollWidth||"".concat(this.element.offsetWidth||a.offsetWidth,"px"),o=this.scrollHeight||"".concat(this.element.offsetHeight||a.offsetHeight,"px"),c=function(l,u){return t.element.style[l]=u};n||s?(c("height",o),c("width",i)):c("height",o)}},setSpacerSize:function(){var t=this,n=this.items;if(n){var s=this.isBoth(),a=this.isHorizontal(),i=this.getContentPosition(),o=function(r,l,u){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=k(k({},t.spacerStyle),lt({},"".concat(r),(l||[]).length*u+p+"px"))};s?(o("height",n,this.itemSize[0],i.y),o("width",this.columns||n[1],this.itemSize[1],i.x)):a?o("width",this.columns||n,this.itemSize,i.x):o("height",n,this.itemSize,i.y)}},setContentPosition:function(t){var n=this;if(this.content&&!this.appendOnly){var s=this.isBoth(),a=this.isHorizontal(),i=t?t.first:this.first,o=function(u,p){return u*p},c=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.contentStyle=k(k({},n.contentStyle),{transform:"translate3d(".concat(u,"px, ").concat(p,"px, 0)")})};if(s)c(o(i.cols,this.itemSize[1]),o(i.rows,this.itemSize[0]));else{var r=o(i,this.itemSize);a?c(r,0):c(0,r)}}},onScrollPositionChange:function(t){var n=this,s=t.target,a=this.isBoth(),i=this.isHorizontal(),o=this.getContentPosition(),c=function(y,b){return y?y>b?y-b:y:0},r=function(y,b){return Math.floor(y/(b||y))},l=function(y,b,R,M,B,$){return y<=B?B:$?R-M-B:b+B-1},u=function(y,b,R,M,B,$,_){return y<=$?0:Math.max(0,_?y<b?R:y-$:y>b?R:y-2*$)},p=function(y,b,R,M,B,$){var _=b+M+2*B;return y>=B&&(_+=B+1),n.getLast(_,$)},g=c(s.scrollTop,o.top),I=c(s.scrollLeft,o.left),f=a?{rows:0,cols:0}:0,z=this.last,P=!1,S=this.lastScrollPos;if(a){var L=this.lastScrollPos.top<=g,H=this.lastScrollPos.left<=I;if(!this.appendOnly||this.appendOnly&&(L||H)){var T={rows:r(g,this.itemSize[0]),cols:r(I,this.itemSize[1])},tt={rows:l(T.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],L),cols:l(T.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],H)};f={rows:u(T.rows,tt.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],L),cols:u(T.cols,tt.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],H)},z={rows:p(T.rows,f.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:p(T.cols,f.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},P=f.rows!==this.first.rows||z.rows!==this.last.rows||f.cols!==this.first.cols||z.cols!==this.last.cols||this.isRangeChanged,S={top:g,left:I}}}else{var Z=i?I:g,U=this.lastScrollPos<=Z;if(!this.appendOnly||this.appendOnly&&U){var q=r(Z,this.itemSize),ct=l(q,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,U);f=u(q,ct,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,U),z=p(q,f,this.last,this.numItemsInViewport,this.d_numToleratedItems),P=f!==this.first||z!==this.last||this.isRangeChanged,S=Z}}return{first:f,last:z,isRangeChanged:P,scrollPos:S}},onScrollChange:function(t){var n=this.onScrollPositionChange(t),s=n.first,a=n.last,i=n.isRangeChanged,o=n.scrollPos;if(i){var c={first:s,last:a};if(this.setContentPosition(c),this.first=s,this.last=a,this.lastScrollPos=o,this.$emit("scroll-index-change",c),this.lazy&&this.isPageChanged(s)){var r={first:this.step?Math.min(this.getPageByFirst(s)*this.step,this.items.length-this.step):s,last:Math.min(this.step?(this.getPageByFirst(s)+1)*this.step:a,this.items.length)},l=this.lazyLoadState.first!==r.first||this.lazyLoadState.last!==r.last;l&&this.$emit("lazy-load",r),this.lazyLoadState=r}}},onScroll:function(t){var n=this;if(this.$emit("scroll",t),this.delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){var s=this.onScrollPositionChange(t),a=s.isRangeChanged,i=a||(this.step?this.isPageChanged():!1);i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){n.onScrollChange(t),n.d_loading&&n.showLoader&&(!n.lazy||n.loading===void 0)&&(n.d_loading=!1,n.page=n.getPageByFirst())},this.delay)}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(C.isVisible(t.element)){var n=t.isBoth(),s=t.isVertical(),a=t.isHorizontal(),i=[C.getWidth(t.element),C.getHeight(t.element)],o=i[0],c=i[1],r=o!==t.defaultWidth,l=c!==t.defaultHeight,u=n?r||l:a?r:s?l:!1;u&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=o,t.defaultHeight=c,t.defaultContentWidth=C.getWidth(t.content),t.defaultContentHeight=C.getHeight(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(t){var n=(this.items||[]).length,s=this.isBoth()?this.first.rows+t:this.first+t;return{index:s,count:n,first:s===0,last:s===n-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions:function(t,n){var s=this.loaderArr.length;return k({index:t,count:s,first:t===0,last:t===s-1,even:t%2===0,odd:t%2!==0},n)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||C.findSingle(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(n){return t.columns?n:n.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),n=this.isHorizontal();if(t||n)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:mt}},me=["tabindex"];function pe(e,t,n,s,a,i){var o=pt("SpinnerIcon");return e.disabled?(m(),v(D,{key:1},[w(e.$slots,"default"),w(e.$slots,"content",{items:e.items,rows:e.items,columns:i.loadedColumns})],64)):(m(),v("div",d({key:0,ref:i.elementRef,class:i.containerClass,tabindex:e.tabindex,style:e.style,onScroll:t[0]||(t[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},e.ptm("root"),{"data-pc-name":"virtualscroller"}),[w(e.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:a.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:e.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:a.spacerStyle,contentStyle:a.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},function(){return[h("div",d({ref:i.contentRef,class:i.contentClass,style:a.contentStyle},e.ptm("content")),[(m(!0),v(D,null,Q(i.loadedItems,function(c,r){return w(e.$slots,"item",{key:r,item:c,options:i.getOptions(r)})}),128))],16)]}),e.showSpacer?(m(),v("div",d({key:0,class:"p-virtualscroller-spacer",style:a.spacerStyle},e.ptm("spacer")),null,16)):O("",!0),!e.loaderDisabled&&e.showLoader&&a.d_loading?(m(),v("div",d({key:1,class:i.loaderClass},e.ptm("loader")),[e.$slots&&e.$slots.loader?(m(!0),v(D,{key:0},Q(a.loaderArr,function(c,r){return w(e.$slots,"loader",{key:r,options:i.getLoaderOptions(r,i.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):O("",!0),w(e.$slots,"loadingicon",{},function(){return[X(o,d({spin:"",class:"p-virtualscroller-loading-icon"},e.ptm("loadingIcon")),null,16)]})],16)):O("",!0)],16,me))}fe.render=pe;export{ye as _,ve as a,fe as b,rt as s};
