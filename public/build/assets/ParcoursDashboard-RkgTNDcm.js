import{j as e,d as l,y as a}from"./app-ra6Hzr2T.js";import{B as c}from"./Button-FgR1WbKQ.js";import{D as i}from"./DashboardLayout-Vg0KakCV.js";const o=({parcours:r})=>{const s=t=>{confirm("Are you sure?")&&a.delete(route("parcours.destroy",t))};return e.jsxs("section",{className:"mt-10 container mx-auto text-white",children:[e.jsx(c,{route:route("parcours.create"),children:"Ajouter un parcours"}),e.jsx("div",{class:"mt-10 relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left rtl:text-right text-gray-400",children:[e.jsx("thead",{class:"text-xs  uppercase bg-gray-700 text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",class:"px-6 py-3",children:"Titre"}),e.jsx("th",{scope:"col",class:"px-6 py-3",children:"Date de debut"}),e.jsx("th",{scope:"col",class:"px-6 py-3",children:"Date de fin"}),e.jsx("th",{scope:"col",class:"px-6 py-3",children:"Modifié le :"}),e.jsx("th",{scope:"col",class:"px-6 py-3",children:"Edit"})]})}),e.jsx("tbody",{children:r.map(t=>e.jsxs("tr",{class:" border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[e.jsx("td",{class:"px-6 py-4",children:t.titre}),e.jsx("td",{class:"px-6 py-4",children:t.date_debut}),e.jsx("td",{class:"px-6 py-4",children:t.date_fin}),e.jsx("td",{class:"px-6 py-4",children:t.updated_at}),e.jsxs("td",{class:"px-6 py-4 text-right flex gap-x-3",children:[e.jsx(l,{href:route("parcours.edit",t.id),class:"font-medium text-blue-500 hover:underline",children:"Edit"}),e.jsx(l,{href:`/portfolio/parcours/${t.id}_${t.titre}`,class:"font-medium text-blue-500 hover:underline",children:"Show"}),e.jsx(l,{as:"button",onClick:d=>(d.preventDefault(),s(t.id)),class:"font-medium text-blue-500 hover:underline",children:"Delete"})]})]},t.id))})]})})]})},p=({parcours:r,success:s})=>e.jsxs(i,{children:[s&&e.jsx("div",{className:"alert alert-success",role:"alert",children:s}),e.jsx(o,{parcours:r})]});export{p as default};
