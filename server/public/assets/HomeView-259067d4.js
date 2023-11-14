import{u as C,a as $,o as d,c as v,b as e,t as n,d as f,e as l,f as u,s as h,r as g,g as w,h as y,n as R,F as V,i as O,j as k,_ as q,k as S,l as b,w as T,m as L}from"./index-c94be3fb.js";import{_ as z}from"./OfferCard-91d08642.js";import{s as D}from"./rating.esm-c1d0277b.js";import{_ as x}from"./Title-b3ff6067.js";import{s as H}from"./dropdown.esm-6551d8f0.js";import"./virtualscroller.esm-972c326f.js";const U={class:"tour-card"},B=["src"],N={class:"tour-info"},j={class:"tour-title"},A={class:"tour-country"},F={class:"tour-location"},I={class:"tour-departure"},P={class:"tour-arrival"},E={class:"tour-duration"},J={class:"tour-price"},M=e("h3",null,"Detalii",-1),Q={class:"tour-description"},Z={__name:"TourCard",props:{tour:{type:Object,default:function(){return{title:"Demo Tour",country:"Romania",location:"Cluj Napoca si Transilvania Nord",departure:"06:00 Bucuresti",arrival:"22:00 Bucuresti",duration:"3",price:"750",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae in atque quam nisi, soluta voluptate libero a obcaecati aspernatur quas possimus odit voluptas iste adipisci. Sunt ipsam tenetur eligendi temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae in atque quam nisi, soluta voluptate libero a obcaecati aspernatur quas possimus odit voluptas iste adipisci. Sunt ipsam tenetur eligendi temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae in atque quam nisi, soluta voluptate libero a obcaecati aspernatur quas possimus odit voluptas iste adipisci. Sunt ipsam tenetur eligendi temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae in atque quam nisi, soluta voluptate libero a obcaecati aspernatur quas possimus odit voluptas iste adipisci. Sunt ipsam tenetur eligendi temporibus?",rating:4,available:25,img:"http://localhost:3000/images/chuttersnap-JH0wCegJsrQ-unsplash.jpg"}}}},setup(r){const i=C(),t=$();function m(p){t.setTour(p),t.setOfferType("tour"),i.push({name:"offer"})}return(p,_)=>(d(),v("section",U,[e("img",{src:r.tour.img,alt:"",class:"tour-img"},null,8,B),e("section",N,[e("div",j,n(r.tour.title),1),e("div",A,n(r.tour.country),1),e("div",F,n(r.tour.location),1),e("div",I,[f(" Plecare: "),e("span",null,n(r.tour.departure),1)]),e("div",P,[f(" Intoarcere: "),e("span",null,n(r.tour.arrival),1)]),e("div",E,[f(" Durata: "),e("span",null,n(r.tour.duration)+" zile",1)]),e("div",J,[e("span",null,n(r.tour.price)+" €",1),f(" per adult ")]),M,e("div",Q,n(r.tour.description),1),l(u(h),{label:"Mai multe",onClick:_[0]||(_[0]=s=>m(r.tour))})])]))}};const G={class:"home-offers"},K={id:"special-offer",class:"special-offer-container"},W=e("h4",{class:"ribbon"},"Oferta Zilei!",-1),X={class:"special-offer-info"},Y=e("div",{class:"bg"},null,-1),ee={class:"special-offer-details"},te={class:"offer-details"},oe={class:"special-offer-price"},se=e("span",{class:"currency"},"€",-1),ae={class:"price-specification"},ie={id:"offers",class:"offers-container"},le={id:"tours",class:"tours-container"},ne={__name:"HomeOffers",setup(r){const i=$(),t=g({}),m=g([]),p=g([]);w(async()=>{y.get(`${i.url}/offers`).then(s=>{i.setOffers(s.data.offers)}).then(()=>{for(const s of i.offers)if(s.is_special===!0){t.value=s;break}t.value.rating=parseFloat(t.value.rating,10),m.value=i.offers.filter(s=>s.rating>=4)}).then(()=>{y.get(`${i.url}/tours`).then(s=>{i.setTours(s.data)}).then(()=>{p.value=i.tours.filter(s=>s.rating>=4)}).then(()=>{i.togglePreloader(!1)}).catch(s=>{console.log(s)})}).catch(s=>{console.log(s)})});function _(s){i.setRezervationVisible(!0),i.setOffer(s)}return(s,c)=>(d(),v("div",G,[e("div",K,[e("div",{class:"special-offer",style:R({backgroundImage:`url(${t.value.img})`})},[W,e("div",X,[Y,e("div",ee,[e("h1",null,n(t.value.title),1),e("h2",null,n(t.value.country),1),e("h5",null,n(t.value.location),1),l(u(D),{modelValue:t.value.rating,"onUpdate:modelValue":c[0]||(c[0]=o=>t.value.rating=o),stars:5,readonly:"",cancel:!1},null,8,["modelValue"]),e("p",null,n(t.value.description),1)]),e("div",te,[l(u(h),{label:"Rezervă",onClick:c[1]||(c[1]=o=>_(t.value))}),e("div",oe,[e("div",null,[f(n(parseFloat(t.value.price).toLocaleString("ro-RO"))+" ",1),se]),e("div",ae,n(t.value.duration)+" nopti ",1)])])])],4)]),l(x,{text:"Oferte Recomandate"}),e("div",ie,[(d(!0),v(V,null,O(m.value,o=>(d(),k(z,{key:o.id,offer:o},null,8,["offer"]))),128))]),l(x,{text:"Circuite Recomandate"}),e("div",le,[(d(!0),v(V,null,O(p.value,o=>(d(),k(Z,{key:o.id,tour:o},null,8,["tour"]))),128))])]))}};const re={class:"home-container"},ue=e("div",{class:"home-filter"},null,-1),ce=["src"],de={class:"home-card"},pe=e("h2",null,"Noua ta aventura incepe aici!",-1),me={class:"call-to-action-container"},_e={class:"cta-box"},fe=e("h3",null,"Oferta zilei!",-1),ve=e("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eveniet nihil aperiam, velit illo cupiditate dolorum minima fugiat optio! ",-1),he={class:"cta-box"},ge=e("h3",null,"Oferte populare!",-1),be=e("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eveniet nihil aperiam, velit illo cupiditate dolorum minima fugiat optio! ",-1),$e={class:"home-search-container"},ye={class:"home-search-bg"},Ve=e("i",{class:"pi pi-map-marker"},null,-1),Oe={class:"p-input-icon-left p-float-label"},ke=e("i",{class:"pi pi-home"},null,-1),xe=e("label",{for:"rooms"},"Camere",-1),Ce={class:"p-input-icon-left p-float-label"},we=e("i",{class:"pi pi-user"},null,-1),Re=e("label",{for:"rooms"},"Adulti",-1),qe={class:"p-input-icon-left p-float-label"},Se=e("i",{class:"pi pi-users"},null,-1),Te=e("label",{for:"rooms"},"Copii",-1),Le={__name:"HomeTop",setup(r){const i=$(),t=g({location:"",date:"",rooms:"",adults:"",children:""});function m(){let c=new Set;for(const a of i.offers)c.add(a.country);return[...c].map(a=>({label:a,value:a}))}let p=`${new URL("/assets/frank-mckenna-OD9EOzfSOh0-unsplash-51ec5306.jpg",self.location).href}`;function _(){i.setSearchParams(t.value),L.push({name:"offers"})}function s(c){window.location.href=c}return(c,o)=>(d(),v("div",re,[ue,e("img",{src:u(p),class:"home-image"},null,8,ce),e("div",de,[l(q,{bg:"var(--color-3)",plane:"#fff"},null,8,["bg"]),pe,e("div",me,[e("div",_e,[fe,ve,l(u(h),{label:"Vizioneaza oferta",onClick:o[0]||(o[0]=a=>s("#special-offer"))})]),e("div",he,[ge,be,l(u(h),{label:"Rasfoieste ofertele",onClick:o[1]||(o[1]=a=>s("#offers"))})])])]),e("div",$e,[e("div",ye,[Ve,l(u(H),{modelValue:t.value.location,"onUpdate:modelValue":o[2]||(o[2]=a=>t.value.location=a),options:m(),optionLabel:"label",optionValue:"value",placeholder:"Locatie",showClear:""},null,8,["modelValue","options"]),l(u(S),{modelValue:t.value.date,"onUpdate:modelValue":o[3]||(o[3]=a=>t.value.date=a),dateFormat:"dd/mm/yy",showIcon:"",placeholder:"Data plecare",showClear:""},null,8,["modelValue"]),e("span",Oe,[ke,l(u(b),{modelValue:t.value.rooms,"onUpdate:modelValue":o[4]||(o[4]=a=>t.value.rooms=a),type:"number"},null,8,["modelValue"]),xe]),e("span",Ce,[we,l(u(b),{modelValue:t.value.adults,"onUpdate:modelValue":o[5]||(o[5]=a=>t.value.adults=a),type:"number"},null,8,["modelValue"]),Re]),e("span",qe,[Se,l(u(b),{modelValue:t.value.children,"onUpdate:modelValue":o[6]||(o[6]=a=>t.value.children=a),type:"number"},null,8,["modelValue"]),Te]),l(u(h),{class:"home-search-button",type:"button",onClick:o[7]||(o[7]=a=>_())},{default:T(()=>[f("Cauta")]),_:1})])])]))}};const ze={class:"home"},Ae={__name:"HomeView",setup(r){return(i,t)=>(d(),v("div",ze,[l(Le),l(ne)]))}};export{Ae as default};