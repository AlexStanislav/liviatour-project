import{a as v,b,c as m,d as l,e as _}from"./axios-c6e3d1be.js";import{g as h,h as T,o as g,c as S,i as e,j as d,k as a,a as u,p as r}from"./index-af987e7b.js";const M={class:"table-header"},C={class:"p-input-icon-left"},R=u("i",{class:"pi pi-search"},null,-1),N={__name:"TourRezervationsView",setup($){const s=h({global:{value:null,matchMode:r.CONTAINS},first_name:{value:null,matchMode:r.STARTS_WITH},last_name:{value:null,matchMode:r.STARTS_WITH},email:{value:null,matchMode:r.CONTAINS},phone:{value:null,matchMode:r.STARTS_WITH},people:{value:null,matchMode:r.EQUALS}}),c=h([]),p=window.location.origin;T(()=>{i()});const i=()=>{v.get(`${p}/tourRezervations`).then(n=>{c.value=n.data})},f=n=>{v.delete(`${p}/tourRezervations/${n.id}`).then(()=>{i()})};return(n,t)=>(g(),S("div",null,[e(a(_),{filters:s.value,"onUpdate:filters":t[2]||(t[2]=o=>s.value=o),value:c.value,paginator:"",rows:6,filterDisplay:"row",removableSort:""},{header:d(()=>[u("div",M,[u("span",C,[R,e(a(b),{modelValue:s.value.global.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.global.value=o),placeholder:"Cautare globala"},null,8,["modelValue"])]),e(a(m),{icon:"pi pi-refresh",class:"p-button-warning",onClick:t[1]||(t[1]=o=>i())})])]),default:d(()=>[e(a(l),{field:"first_name",sortable:"",header:"Prenume"}),e(a(l),{field:"last_name",sortable:"",header:"Nume"}),e(a(l),{field:"email",sortable:"",header:"Email"}),e(a(l),{field:"phone",sortable:"",header:"Telefon"}),e(a(l),{field:"adults",sortable:"",header:"Adulti"}),e(a(l),{field:"children",sortable:"",header:"Copii"}),e(a(l),{field:"price",sortable:"",header:"Pret"}),e(a(l),null,{body:d(o=>[e(a(m),{icon:"pi pi-trash",class:"p-button-rounded p-button-danger",onClick:w=>f(o.data)},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value"])]))}};export{N as default};