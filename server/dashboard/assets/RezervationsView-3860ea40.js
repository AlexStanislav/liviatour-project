import{d as m,e as v,f as h,g as o,h as _}from"./axios-1a06f5ea.js";import{l as f,p as b,o as T,c as S,f as e,w as p,q as a,a as n,x as l}from"./index-c45c5617.js";const M={class:"table-header"},N={class:"p-input-icon-left"},g=n("i",{class:"pi pi-search"},null,-1),I={__name:"RezervationsView",setup(A){const r=f({global:{value:null,matchMode:l.CONTAINS},first_name:{value:null,matchMode:l.STARTS_WITH},last_name:{value:null,matchMode:l.STARTS_WITH},email:{value:null,matchMode:l.CONTAINS},phone:{value:null,matchMode:l.STARTS_WITH},people:{value:null,matchMode:l.EQUALS},offer_duration:{value:null,matchMode:l.CONTAINS},offer_price:{value:null,matchMode:l.EQUALS},offer_name:{value:null,matchMode:l.CONTAINS}}),i=f([]),c=window.location.origin;b(()=>{u()});const u=()=>{m.get(`${c}/rezervations`).then(d=>{i.value=d.data})};return(d,t)=>(T(),S("div",null,[e(a(_),{filters:r.value,"onUpdate:filters":t[2]||(t[2]=s=>r.value=s),value:i.value,paginator:"",rows:6,filterDisplay:"row",removableSort:""},{header:p(()=>[n("div",M,[n("span",N,[g,e(a(v),{modelValue:r.value.global.value,"onUpdate:modelValue":t[0]||(t[0]=s=>r.value.global.value=s),placeholder:"Cautare globala"},null,8,["modelValue"])]),e(a(h),{icon:"pi pi-refresh",class:"p-button-warning",onClick:t[1]||(t[1]=s=>u())})])]),default:p(()=>[e(a(o),{field:"first_name",sortable:"",header:"Prenume"}),e(a(o),{field:"last_name",sortable:"",header:"Nume"}),e(a(o),{field:"email",sortable:"",header:"Email"}),e(a(o),{field:"phone",sortable:"",header:"Telefon"}),e(a(o),{field:"people",sortable:"",header:"Persoane"}),e(a(o),{field:"offer_duration",sortable:"",header:"Durata"}),e(a(o),{field:"offer_price",sortable:"",header:"Pret Oferta"}),e(a(o),{field:"offer_name",sortable:"",header:"Nume Oferta"})]),_:1},8,["filters","value"])]))}};export{I as default};
