import{j as e,d as t}from"./app-KsrKm7DI.js";import{L as l}from"./GuestLayout-Uqvv8_Zz.js";const i=({projet:s})=>e.jsx(e.Fragment,{children:e.jsxs("article",{className:"flex flex-col h-auto items-center justify-between text-white  lg:flex-row p-7 lg:gap-x-5",children:[e.jsx("img",{src:s.thumbnail,className:"w-[20rem] ",alt:""}),e.jsxs("div",{className:"w-full h-full flex flex-col gap-y-3",children:[e.jsx("div",{className:"flex gap-x-5 justify-center",children:e.jsx("h3",{children:e.jsx("b",{children:s.titre})})}),e.jsx("hr",{className:"border-white border w-full"}),e.jsx("p",{children:s.intro}),e.jsx("div",{className:"self-center lg:self-start",children:e.jsxs(t,{href:`portfolio/projets/${id}_${titre}`,class:"hvr-icon-forward hvr-grow hvr-sweep-to-right inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg focus:z-10",children:["En savoir plus"," ",e.jsx("svg",{class:"w-3 h-3 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})})]})]},s.id)}),a=({projets:s})=>e.jsx(l,{children:e.jsx("section",{className:"container flex flex-col mx-auto gap-y-20    ",children:s.map(r=>e.jsx(i,{projet:r}))})});export{a as default};