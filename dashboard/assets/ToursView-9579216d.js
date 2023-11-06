import{a as m,b as n,c as v,d as u,e as C}from"./axios-c6e3d1be.js";import{s as S}from"./dialog.esm-7deba7cf.js";import{g as r,h as x,o as D,c as I,i as a,j as _,k as t,a as e,p as T}from"./index-af987e7b.js";import{s as M}from"./textarea.esm-4cf91f21.js";const z={class:"table-header"},A={class:"p-input-icon-left"},F=e("i",{class:"pi pi-search"},null,-1),L={class:"table-actions"},N={class:"form-row"},P={class:"form-column"},B={class:"p-float-label"},R=e("label",{for:"title"},"Titlu",-1),E={class:"p-float-label p-input-icon-right"},O=e("i",{class:"pi pi-euro"},null,-1),j=e("label",{for:"price"},"Pret",-1),G={class:"form-column"},H={class:"p-float-label p-input-icon-left"},W=e("i",{class:"pi pi-map-marker"},null,-1),Z=e("label",{for:"location"},"Locatie",-1),q={class:"p-float-label p-input-icon-left"},J=e("i",{class:"pi pi-map-marker"},null,-1),K=e("label",{for:"country"},"Tara",-1),Q={class:"form-row"},X={class:"form-column"},Y={class:"p-float-label p-input-icon-left"},ee=e("i",{class:"pi pi-sun"},null,-1),le=e("label",{for:"duration"},"Zile",-1),oe={class:"p-float-label p-input-icon-left"},ae=e("i",{class:"pi pi-users"},null,-1),te=e("label",{for:"adults"},"Locuri",-1),se={class:"form-column"},ie={class:"p-float-label p-input-icon-left"},ne=e("i",{class:"pi pi-star"},null,-1),ue=e("label",{for:"rating"},"Stele",-1),re={class:"form-column"},de={class:"p-float-label p-input-icon-left"},ce=e("i",{class:"pi pi-angle-double-right"},null,-1),pe=e("label",{for:"departure"},"Plecare",-1),me={class:"form-row"},ve={class:"form-column"},fe={class:"p-float-label p-input-icon-left"},_e=e("i",{class:"pi pi-angle-double-left"},null,-1),be=e("label",{for:"arrival"},"Sosire",-1),he={class:"form-column"},ge={class:"p-float-label",style:{width:"100%"}},Ve=e("label",{for:"description"},"Descriere",-1),Te={class:"form-column form-image"},$e=e("label",{for:"img"},"Imagine",-1),we={class:"image-preview"},ye=["src"],De={__name:"ToursView",setup(Ue){const g=r([]),s=r({}),d=r(!1),b=r(!1),c=window.location.origin,f=r({global:{value:null,matchMode:T.CONTAINS},title:{value:null,matchMode:T.STARTS_WITH}});function p(){m.get(`${c}/tours`).then(i=>{g.value=i.data})}x(()=>{p()});const h=r(null),V=r(""),$=i=>{h.value=i.target.files[0];let o=`${c}/images/${h.value.name}`;s.value.img=o,V.value=o},w=i=>{m.delete(`${c}/tours/${i.id}`).then(()=>{p()})},y=i=>{s.value=i,b.value=!0,d.value=!0},U=i=>{if(i.preventDefault(),b.value===!0)m.put(`${c}/tours/${s.value.id}`,s.value).then(()=>{d.value=!1,b.value=!1,p()});else{m.post(`${c}/newTour`,s.value).then(l=>{d.value=!1,p()}).catch(l=>{console.log(l)});let o=new FormData;o.append("offerImage",h.value),m.post(`${c}/imageOffers`,o,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{l.status===200&&console.log("Success")}).catch(l=>{console.log(l)})}};return(i,o)=>(D(),I("div",null,[a(t(C),{filters:f.value,"onUpdate:filters":o[3]||(o[3]=l=>f.value=l),value:g.value,paginator:"",rows:6,filterDisplay:"row",removableSort:""},{header:_(()=>[e("div",z,[e("span",A,[F,a(t(n),{modelValue:f.value.global.value,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value.global.value=l),placeholder:"Cautare globala"},null,8,["modelValue"])]),a(t(v),{icon:"pi pi-plus",class:"p-button-success",label:"Adauga circuit nou",onClick:o[1]||(o[1]=l=>d.value=!0)}),a(t(v),{icon:"pi pi-refresh",class:"p-button-warning",label:"Actualizare",onClick:o[2]||(o[2]=l=>p())})])]),default:_(()=>[a(t(u),{field:"title",header:"Titlu"}),a(t(u),{field:"price",header:"Pret"}),a(t(u),{field:"country",header:"Tara"}),a(t(u),{field:"duration",header:"Durata"}),a(t(u),{field:"available",header:"Disponibilitate"}),a(t(u),{field:"rating",header:"Stele"}),a(t(u),{field:"departure",header:"Plecare"}),a(t(u),{field:"arrival",header:"Sosire"}),a(t(u),null,{body:_(l=>[e("div",L,[a(t(v),{icon:"pi pi-pencil",class:"p-button-rounded p-button-success",onClick:k=>y(l.data)},null,8,["onClick"]),a(t(v),{icon:"pi pi-trash",class:"p-button-rounded p-button-danger",onClick:k=>w(l.data)},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"]),a(t(S),{class:"tour-dialog",modal:"",visible:d.value,"onUpdate:visible":o[14]||(o[14]=l=>d.value=l),header:"Creeaza circuit",maximizable:""},{default:_(()=>[e("form",null,[e("div",N,[e("div",P,[e("span",B,[a(t(n),{id:"title",modelValue:s.value.title,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.title=l)},null,8,["modelValue"]),R]),e("span",E,[O,a(t(n),{id:"price",modelValue:s.value.price,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.price=l),type:"number"},null,8,["modelValue"]),j])]),e("div",G,[e("span",H,[W,a(t(n),{id:"location",modelValue:s.value.location,"onUpdate:modelValue":o[6]||(o[6]=l=>s.value.location=l)},null,8,["modelValue"]),Z]),e("span",q,[J,a(t(n),{id:"country",modelValue:s.value.country,"onUpdate:modelValue":o[7]||(o[7]=l=>s.value.country=l)},null,8,["modelValue"]),K])])]),e("div",Q,[e("div",X,[e("span",Y,[ee,a(t(n),{id:"duration",modelValue:s.value.duration,"onUpdate:modelValue":o[8]||(o[8]=l=>s.value.duration=l)},null,8,["modelValue"]),le]),e("span",oe,[ae,a(t(n),{id:"adults",type:"number",modelValue:s.value.available,"onUpdate:modelValue":o[9]||(o[9]=l=>s.value.available=l)},null,8,["modelValue"]),te])]),e("div",se,[e("span",ie,[ne,a(t(n),{id:"rating",type:"number",min:1,max:5,modelValue:s.value.rating,"onUpdate:modelValue":o[10]||(o[10]=l=>s.value.rating=l)},null,8,["modelValue"]),ue])]),e("div",re,[e("span",de,[ce,a(t(n),{id:"departure",modelValue:s.value.departure,"onUpdate:modelValue":o[11]||(o[11]=l=>s.value.departure=l)},null,8,["modelValue"]),pe])])]),e("div",me,[e("div",ve,[e("span",fe,[_e,a(t(n),{id:"arrival",modelValue:s.value.arrival,"onUpdate:modelValue":o[12]||(o[12]=l=>s.value.arrival=l)},null,8,["modelValue"]),be])])]),e("div",he,[e("span",ge,[a(t(M),{id:"description",modelValue:s.value.description,"onUpdate:modelValue":o[13]||(o[13]=l=>s.value.description=l)},null,8,["modelValue"]),Ve])]),e("div",Te,[$e,e("input",{id:"img",type:"file",accept:"image/*",onInput:$},null,32)]),e("div",we,[e("img",{src:V.value},null,8,ye)]),a(t(v),{type:"submit",label:"Salveaza",class:"p-button-success",onClick:U})])]),_:1},8,["visible"])]))}};export{De as default};