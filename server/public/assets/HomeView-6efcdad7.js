import{u as W,r as B,o as a,c,a as r,n as ne,t as b,b as h,d as I,s as E,e as V,F as U,f as J,g as C,h as ie,U as G,m as l,i as oe,Z as H,O as g,D as m,j as se,C as re,k as le,R as ae,l as ue,p as de,q as pe,v as ce,w as fe,x as R,y as he,z as O,A as _,B as T,E as L,G as x,T as ye,H as me,I as be,_ as ve,J as ge,K as z,L as Oe}from"./index-074619c1.js";import{s as Ie,_ as we,a as Se,b as Fe}from"./virtualscroller.esm-beb4e43b.js";const Ve={class:"home-offers"},Le={id:"special-offer",class:"special-offer-container"},Ce=r("h4",{class:"ribbon"},"Oferta Zilei!",-1),xe={class:"special-offer-info"},ke=r("div",{class:"bg"},null,-1),Ke={class:"offer-info"},De={class:"offer-details"},Me={class:"special-offer-price"},Te=r("span",{class:"currency"},"RON",-1),Ee={class:"price-specification"},Pe={id:"offers",class:"offers-container"},Ae={__name:"HomeOffers",setup(t){const e=W(),n=B({}),o=B([]);setTimeout(()=>{n.value=e.offers[8],n.value.rating=parseFloat(n.value.rating,10),o.value=e.offers.slice(0,6)},300);function s(i){e.setRezervationVisible(!0),e.setOffer(i)}return(i,d)=>(a(),c("div",Ve,[r("div",Le,[r("div",{class:"special-offer",style:ne({backgroundImage:`url(${n.value.img})`})},[Ce,r("div",xe,[ke,r("div",Ke,[r("h1",null,b(n.value.title),1),r("h2",null,b(n.value.country),1),r("h5",null,b(n.value.location),1),h(I(Ie),{modelValue:n.value.rating,"onUpdate:modelValue":d[0]||(d[0]=f=>n.value.rating=f),stars:5,readonly:"",cancel:!1},null,8,["modelValue"]),r("p",null,b(n.value.description),1)]),r("div",De,[h(I(E),{label:"Rezervă",onClick:d[1]||(d[1]=f=>s(n.value))}),r("div",Me,[r("div",null,[V(b(parseFloat(n.value.price).toLocaleString("ro-RO"))+" ",1),Te]),r("div",Ee,b(n.value.duration)+" nopti",1)])])])],4)]),h(we,{text:"Oferte Populare"}),r("div",Pe,[(a(!0),c(U,null,J(o.value,f=>(a(),C(Se,{key:f.id,offer:f},null,8,["offer"]))),128))])]))}};var Q={name:"FilterIcon",extends:ie,computed:{pathId:function(){return"pv_icon_clip_".concat(G())}}},He=["clipPath"],Re=r("path",{d:"M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z",fill:"currentColor"},null,-1),_e=[Re],ze=["id"],Be=r("rect",{width:"14",height:"14",fill:"white"},null,-1),Ue=[Be];function Ge(t,e,n,o,s,i){return a(),c("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),[r("g",{clipPath:"url(#".concat(i.pathId,")")},_e,8,He),r("defs",null,[r("clipPath",{id:"".concat(i.pathId)},Ue,8,ze)])],16)}Q.render=Ge;var je=`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-dropdown-item-group {
    cursor: auto;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-dropdown-filter {
    width: 100%;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`,Ne={root:function(e){var n=e.instance,o=e.props,s=e.state;return["p-dropdown p-component p-inputwrapper",{"p-disabled":o.disabled,"p-dropdown-clearable":o.showClear&&!o.disabled,"p-focus":s.focused,"p-inputwrapper-filled":n.hasSelectedOption,"p-inputwrapper-focus":s.focused||s.overlayVisible,"p-overlay-open":s.overlayVisible}]},input:function(e){var n=e.instance,o=e.props;return["p-dropdown-label p-inputtext",{"p-placeholder":!o.editable&&n.label===o.placeholder,"p-dropdown-label-empty":!o.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-dropdown-clear-icon",trigger:"p-dropdown-trigger",loadingicon:"p-dropdown-trigger-icon",dropdownIcon:"p-dropdown-trigger-icon",panel:function(e){var n=e.instance;return["p-dropdown-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},header:"p-dropdown-header",filterContainer:"p-dropdown-filter-container",filterInput:"p-dropdown-filter p-inputtext p-component",filterIcon:"p-dropdown-filter-icon",wrapper:"p-dropdown-items-wrapper",list:"p-dropdown-items",itemGroup:"p-dropdown-item-group",item:function(e){var n=e.instance,o=e.state,s=e.option,i=e.focusedOption;return["p-dropdown-item",{"p-highlight":n.isSelected(s),"p-focus":o.focusedOptionIndex===i,"p-disabled":n.isOptionDisabled(s)}]},emptyMessage:"p-dropdown-empty-message"},qe=oe(je,{name:"dropdown",manual:!0}),Ze=qe.load,We={name:"BaseDropdown",extends:fe,props:{modelValue:null,options:Array,optionLabel:String||Function,optionValue:String||Function,optionDisabled:String||Function,optionGroupLabel:String||Function,optionGroupChildren:String||Function,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},css:{classes:Ne,loadStyle:Ze},provide:function(){return{$parentInstance:this}}};function k(t){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(t)}function Je(t){return $e(t)||Ye(t)||Xe(t)||Qe()}function Qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(t,e){if(t){if(typeof t=="string")return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}}function Ye(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $e(t){if(Array.isArray(t))return j(t)}function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N(Object(n),!0).forEach(function(o){X(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function X(t,e,n){return e=et(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t){var e=tt(t,"string");return k(e)==="symbol"?e:String(e)}function tt(t,e){if(k(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(k(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Y={name:"Dropdown",extends:We,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data:function(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||G()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||G(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(H.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?g.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?g.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?g.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?g.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return g.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return g.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&m.focus(this.$refs.focusInput)},hide:function(e){var n=this,o=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),e&&m.focus(n.$refs.focusInput)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&g.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput:function(e){var n=e.target.value;this.searchValue="";var o=this.searchOptions(e,n);!o&&(this.focusedOptionIndex=-1),this.updateModel(e,n)},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.tagName==="path"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick:function(e){this.updateModel(e,null)},onFirstHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?m.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;m.focus(n)},onLastHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?m.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;m.focus(n)},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n);this.updateModel(e,s),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onFilterChange:function(e){var n=e.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){se.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var o=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var o=e.currentTarget,s=o.value.length;o.setSelectionRange(s,s),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(m.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){H.set("overlay",e,this.$primevue.config.zIndex.overlay),m.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&m.focus(this.$refs.filterInput)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){H.clear(e)},alignOverlay:function(){this.appendTo==="self"?m.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=m.getOuterWidth(this.$el)+"px",m.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new re(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!m.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements:function(){return m.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption:function(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.isValidOption(e)&&g.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return g.findLastIndex(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?g.findLastIndex(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var o=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(d){return o.isOptionMatched(d)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(d){return o.isOptionMatched(d)}):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(function(d){return o.isOptionMatched(d)}),s!==-1&&(i=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,o=n!==-1?"".concat(this.id,"_").concat(n):this.focusedOptionId,s=m.findSingle(this.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(function(){e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)},0)},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,s,i){o.push({optionGroup:s,group:!0,index:i});var d=n.getOptionGroupChildren(s);return d&&d.forEach(function(f){return o.push(f)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var o=le.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var s=this.options||[],i=[];return s.forEach(function(d){var f=e.getOptionGroupChildren(d),u=f.filter(function(p){return o.includes(p)});u.length>0&&i.push(q(q({},d),{},X({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Je(u))))}),this.flatOptions(i)}return o}return n},hasSelectedOption:function(){return g.isNotEmpty(this.modelValue)},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return g.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:ae},components:{VirtualScroller:Fe,Portal:ue,TimesIcon:de,ChevronDownIcon:pe,SpinnerIcon:ce,FilterIcon:Q}};function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(n),!0).forEach(function(o){nt(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function nt(t,e,n){return e=it(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function it(t){var e=ot(t,"string");return K(e)==="symbol"?e:String(e)}function ot(t,e){if(K(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(K(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var st=["id"],rt=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],lt=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],at=["value","placeholder","aria-owns","aria-activedescendant"],ut=["id"],dt=["id"],pt=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"];function ct(t,e,n,o,s,i){var d=R("SpinnerIcon"),f=R("VirtualScroller"),u=R("Portal"),p=he("ripple");return a(),c("div",l({ref:"container",id:s.id,class:t.cx("root"),onClick:e[15]||(e[15]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptm("root"),{"data-pc-name":"dropdown"}),[t.editable?(a(),c("input",l({key:0,ref:"focusInput",id:t.inputId,type:"text",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:i.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)})},S(S({},t.inputProps),t.ptm("input"))),null,16,rt)):(a(),c("span",l({key:1,ref:"focusInput",id:t.inputId,class:[t.cx("input"),t.inputClass],style:t.inputStyle,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[5]||(e[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},S(S({},t.inputProps),t.ptm("input"))),[O(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[V(b(i.label==="p-emptylabel"?" ":i.label||"empty"),1)]})],16,lt)),t.showClear&&t.modelValue!=null?O(t.$slots,"clearicon",{key:2,class:T(t.cx("clearIcon")),onClick:i.onClearClick},function(){return[(a(),C(_(t.clearIcon?"i":"TimesIcon"),l({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:i.onClearClick},S(S({},t.clearIconProps),t.ptm("clearIcon")),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):L("",!0),r("div",l({class:t.cx("trigger")},t.ptm("trigger")),[t.loading?O(t.$slots,"loadingicon",{key:0,class:T(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(a(),c("span",l({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(a(),C(d,l({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):O(t.$slots,"dropdownicon",{key:1,class:T(t.cx("dropdownIcon"))},function(){return[(a(),C(_(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),h(u,{appendTo:t.appendTo},{default:x(function(){return[h(ye,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:x(function(){return[s.overlayVisible?(a(),c("div",l({key:0,ref:i.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[13]||(e[13]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[14]||(e[14]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},S(S({},t.panelProps),t.ptm("panel"))),[r("span",l({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),O(t.$slots,"header",{value:t.modelValue,options:i.visibleOptions}),t.filter?(a(),c("div",l({key:0,class:t.cx("header")},t.ptm("header")),[r("div",l({class:t.cx("filterContainer")},t.ptm("filterContainer")),[r("input",l({ref:"filterInput",type:"text",value:s.filterValue,onVnodeMounted:e[8]||(e[8]=function(){return i.onFilterUpdated&&i.onFilterUpdated.apply(i,arguments)}),class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":s.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:e[9]||(e[9]=function(){return i.onFilterKeyDown&&i.onFilterKeyDown.apply(i,arguments)}),onBlur:e[10]||(e[10]=function(){return i.onFilterBlur&&i.onFilterBlur.apply(i,arguments)}),onInput:e[11]||(e[11]=function(){return i.onFilterChange&&i.onFilterChange.apply(i,arguments)})},S(S({},t.filterInputProps),t.ptm("filterInput"))),null,16,at),O(t.$slots,"filtericon",{class:T(t.cx("filterIcon"))},function(){return[(a(),C(_(t.filterIcon?"span":"FilterIcon"),l({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16),r("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),b(i.filterResultMessageText),17)],16)):L("",!0),r("div",l({class:t.cx("wrapper"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("wrapper")),[h(f,l({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),me({content:x(function(F){var P=F.styleClass,$=F.contentRef,D=F.items,w=F.getItemOptions,ee=F.contentStyle,M=F.itemSize;return[r("ul",l({ref:function(v){return i.listRef(v,$)},id:s.id+"_list",class:[t.cx("list"),P],style:ee,role:"listbox"},t.ptm("list")),[(a(!0),c(U,null,J(D,function(y,v){return a(),c(U,{key:i.getOptionRenderKey(y,i.getOptionIndex(v,w))},[i.isOptionGroup(y)?(a(),c("li",l({key:0,id:s.id+"_"+i.getOptionIndex(v,w),style:{height:M?M+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[O(t.$slots,"optiongroup",{option:y.optionGroup,index:i.getOptionIndex(v,w)},function(){return[V(b(i.getOptionGroupLabel(y.optionGroup)),1)]})],16,dt)):be((a(),c("li",l({key:1,id:s.id+"_"+i.getOptionIndex(v,w),class:t.cx("item",{option:y,focusedOption:i.getOptionIndex(v,w)}),style:{height:M?M+"px":void 0},role:"option","aria-label":i.getOptionLabel(y),"aria-selected":i.isSelected(y),"aria-disabled":i.isOptionDisabled(y),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(v,w)),onClick:function(A){return i.onOptionSelect(A,y)},onMousemove:function(A){return i.onOptionMouseMove(A,i.getOptionIndex(v,w))},"data-p-highlight":i.isSelected(y),"data-p-focused":s.focusedOptionIndex===i.getOptionIndex(v,w),"data-p-disabled":i.isOptionDisabled(y)},i.getPTOptions(y,w,v,"item")),[O(t.$slots,"option",{option:y,index:i.getOptionIndex(v,w)},function(){return[V(b(i.getOptionLabel(y)),1)]})],16,pt)),[[p]])],64)}),128)),s.filterValue&&(!D||D&&D.length===0)?(a(),c("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[O(t.$slots,"emptyfilter",{},function(){return[V(b(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(a(),c("li",l({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[O(t.$slots,"empty",{},function(){return[V(b(i.emptyMessageText),1)]})],16)):L("",!0)],16,ut)]}),_:2},[t.$slots.loader?{name:"loader",fn:x(function(F){var P=F.options;return[O(t.$slots,"loader",{options:P})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),O(t.$slots,"footer",{value:t.modelValue,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(a(),c("span",l({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),b(i.emptyMessageText),17)):L("",!0),r("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),b(i.selectedMessageText),17),r("span",l({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[12]||(e[12]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):L("",!0)]}),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,st)}Y.render=ct;const ft={class:"home-container"},ht=r("div",{class:"home-filter"},null,-1),yt=["src"],mt={class:"home-card"},bt=r("h2",null,"Noua ta aventura incepe aici!",-1),vt={class:"call-to-action-container"},gt={class:"cta-box"},Ot=r("h3",null,"Oferta zilei!",-1),It=r("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eveniet nihil aperiam, velit illo cupiditate dolorum minima fugiat optio! ",-1),wt={class:"cta-box"},St=r("h3",null,"Oferte populare!",-1),Ft=r("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eveniet nihil aperiam, velit illo cupiditate dolorum minima fugiat optio! ",-1),Vt={class:"home-search-container"},Lt={class:"home-search-bg"},Ct=r("i",{class:"pi pi-map-marker"},null,-1),xt={class:"p-input-icon-left p-float-label"},kt=r("i",{class:"pi pi-home"},null,-1),Kt=r("label",{for:"rooms"},"Camere",-1),Dt={class:"p-input-icon-left p-float-label"},Mt=r("i",{class:"pi pi-user"},null,-1),Tt=r("label",{for:"rooms"},"Adulti",-1),Et={class:"p-input-icon-left p-float-label"},Pt=r("i",{class:"pi pi-users"},null,-1),At=r("label",{for:"rooms"},"Copii",-1),Ht={__name:"HomeTop",setup(t){const e=W(),n=B({location:"",date:"",rooms:"",adults:"",children:""});function o(){let f=new Set;for(const p of e.offers)f.add(p.country);return[...f].map(p=>({label:p,value:p}))}let s=`${new URL("/assets/frank-mckenna-OD9EOzfSOh0-unsplash-51ec5306.jpg",self.location).href}`;function i(){e.setSearchParams(n.value),Oe.push({name:"offers"})}function d(f){window.location.href=f}return(f,u)=>(a(),c("div",ft,[ht,r("img",{src:I(s),class:"home-image"},null,8,yt),r("div",mt,[h(ve,{bg:"var(--color-3)",plane:"#fff"},null,8,["bg"]),bt,r("div",vt,[r("div",gt,[Ot,It,h(I(E),{label:"Vizioneaza oferta",onClick:u[0]||(u[0]=p=>d("#special-offer"))})]),r("div",wt,[St,Ft,h(I(E),{label:"Rasfoieste ofertele",onClick:u[1]||(u[1]=p=>d("#offers"))})])])]),r("div",Vt,[r("div",Lt,[Ct,h(I(Y),{modelValue:n.value.location,"onUpdate:modelValue":u[2]||(u[2]=p=>n.value.location=p),options:o(),optionLabel:"label",optionValue:"value",placeholder:"Locatie",showClear:""},null,8,["modelValue","options"]),h(I(ge),{modelValue:n.value.date,"onUpdate:modelValue":u[3]||(u[3]=p=>n.value.date=p),dateFormat:"dd/mm/yy",showIcon:"",placeholder:"Data plecare",showClear:""},null,8,["modelValue"]),r("span",xt,[kt,h(I(z),{modelValue:n.value.rooms,"onUpdate:modelValue":u[4]||(u[4]=p=>n.value.rooms=p),type:"number"},null,8,["modelValue"]),Kt]),r("span",Dt,[Mt,h(I(z),{modelValue:n.value.adults,"onUpdate:modelValue":u[5]||(u[5]=p=>n.value.adults=p),type:"number"},null,8,["modelValue"]),Tt]),r("span",Et,[Pt,h(I(z),{modelValue:n.value.children,"onUpdate:modelValue":u[6]||(u[6]=p=>n.value.children=p),type:"number"},null,8,["modelValue"]),At]),h(I(E),{class:"home-search-button",type:"button",onClick:u[7]||(u[7]=p=>i())},{default:x(()=>[V("Cauta")]),_:1})])])]))}};const Rt={class:"home"},Bt={__name:"HomeView",setup(t){return(e,n)=>(a(),c("div",Rt,[h(Ht),h(Ae)]))}};export{Bt as default};
