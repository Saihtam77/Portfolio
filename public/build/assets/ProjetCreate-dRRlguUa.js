import{W as g,j as e}from"./app-m4qZWMZN.js";import{L as l,I as d,T as x}from"./Label-GaMokzCF.js";import{I as i}from"./InputError-28XBhG71.js";import{D as v}from"./DashboardLayout-rm2Bfy66.js";const N=({technologies:c})=>{const{data:o,setData:n,post:j,reset:y,processing:k,errors:r}=g({titre:"",intro:"",presentation:"",technologies:[],objectifs:[""]}),u=()=>{n(t=>({...t,objectifs:[...t.objectifs,""]}))},h=(t,s)=>{const a=[...o.objectifs];a[s]=t.target.value,n(m=>({...m,objectifs:a}))},f=t=>{n(s=>({...s,objectifs:s.objectifs.filter((a,m)=>m!==t)}))},b=t=>{const s=Array.from(t.target.selectedOptions,a=>a.value);n(a=>({...a,technologies:s}))},p=t=>{t.preventDefault(),j(route("projets.store",o),{forceFormData:!0})};return e.jsx("section",{className:"bg-gunMetal text-white",children:e.jsxs("div",{className:"py-8 px-4 mx-auto max-w-2xl lg:py-16",children:[e.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Ajouter un projet"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 sm:gap-6",children:[e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx(l,{htmlfor:"titre",value:"Titre",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}),e.jsx(d,{value:o.titre,type:"text",name:"titre",id:"titre",placeholder:"Intitulé de la formation",onChange:t=>n("titre",t.target.value)}),e.jsx(i,{message:r.titre})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx(l,{htmlfor:"intro",value:"Introduction",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}),e.jsx(x,{value:o.intro,name:"intro",id:"intro",placeholder:"Introduction",onChange:t=>n("intro",t.target.value)}),e.jsx(i,{message:r.intro})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx(l,{htmlfor:"presentation",value:"Présentation",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}),e.jsx(x,{value:o.presentation,name:"presentation",id:"presentation",placeholder:"Présentation",onChange:t=>n("presentation",t.target.value)}),e.jsx(i,{message:r.presentation})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx(l,{htmlfor:"objectifs",value:"Objectifs",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}),e.jsxs("div",{className:"flex flex-col justify-between lg:gap-x-2 gap-y-3",children:[o.objectifs.map((t,s)=>e.jsxs("div",{className:"flex items-center gap-x-3 w-full ",children:[e.jsx("button",{type:"button",onClick:()=>f(s),className:"flex items-center justify-center w-1/6 p-2 rounded-lg bg-red-600 text-black hvr-grow",children:"X"}),e.jsx(d,{value:t,type:"text",name:"objectif",id:"objectif",placeholder:"Objectif ...",onChange:a=>h(a,s)})]},s)),e.jsx(i,{message:r.objectifs}),e.jsx("button",{type:"button",onClick:u,className:"flex items-center justify-center lg:w-1/3 p-2 rounded-lg bg-jonquil text-black hvr-grow",children:"+ Plus"})]})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx(l,{htmlfor:"technologies",value:"Technologies",className:"block mb-2 text-sm font-medium "}),e.jsx("select",{value:o.technologies,name:"technologies",id:"technologies",multiple:!0,onChange:b,className:"block w-full p-2 text-black bg-white rounded-md",children:c.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"px-4 py-2 mt-4 text-black hvr-grow bg-jonquil rounded-md",children:"Ajouter"})})]})]})})},T=({technologies:c})=>e.jsx("section",{children:e.jsx(v,{children:e.jsx(N,{technologies:c})})});export{T as default};
