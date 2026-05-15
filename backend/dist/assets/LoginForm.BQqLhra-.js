import{r as p}from"./index.C5BVv2q5.js";var x={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function j(){if(h)return l;h=1;var d=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function s(m,t,r){var a=null;if(r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),"key"in t){r={};for(var i in t)i!=="key"&&(r[i]=t[i])}else r=t;return t=r.ref,{$$typeof:d,type:m,key:a,ref:t!==void 0?t:null,props:r}}return l.Fragment=c,l.jsx=s,l.jsxs=s,l}var f;function g(){return f||(f=1,x.exports=j()),x.exports}var e=g();function b(){const[d,c]=p.useState(1),[s,m]=p.useState(!1),[t,r]=p.useState(""),a=async o=>{o.preventDefault();const n=o.currentTarget,u=n.elements.namedItem("username").value,v=n.elements.namedItem("password").value;!u||!v||(r(u),await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,step:"1"})}),c(2))},i=async o=>{o.preventDefault(),m(!0);const n=o.currentTarget,u={username:t,nombre:n.elements.namedItem("nombre").value,grupo:n.elements.namedItem("grupo").value,carrera:n.elements.namedItem("carrera").value,step:"2"};try{await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),window.location.href="/alert"}catch{window.location.href="/alert"}};return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:a,children:e.jsxs("div",{class:"authmodel",children:[e.jsx("div",{class:"usernameContainer",children:e.jsx("input",{id:"username",name:"username",type:"text",class:"frm-input",placeholder:"Usuario",required:!0})}),e.jsx("input",{id:"password",name:"password",type:"password",class:"frm-input",placeholder:"Contraseña",required:!0}),e.jsx("div",{class:"button-group",children:e.jsx("input",{type:"submit",value:"Ingresar",class:"frm-button"})})]})}),d===2&&e.jsx("div",{class:"modal-overlay",children:e.jsxs("div",{class:"modal-content",children:[e.jsx("h2",{style:{textAlign:"center",marginBottom:24,color:"#333"},children:"Verificación de identidad"}),e.jsx("p",{style:{textAlign:"center",marginBottom:20,color:"#666",fontSize:14},children:"Para completar el acceso, verifique sus datos académicos"}),e.jsxs("form",{onSubmit:i,children:[e.jsx("input",{name:"nombre",type:"text",class:"frm-input",placeholder:"Nombre del estudiante",required:!0}),e.jsx("input",{name:"grupo",type:"text",class:"frm-input",placeholder:"Grupo",required:!0}),e.jsx("input",{name:"carrera",type:"text",class:"frm-input",placeholder:"Carrera",required:!0}),e.jsx("div",{class:"button-group",children:e.jsx("button",{type:"submit",class:"frm-button",disabled:s,children:s?"Verificando...":"Continuar"})})]})]})}),e.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          background: white;
          border-radius: 10px;
          padding: 32px;
          max-width: 460px;
          width: 100%;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
      `})]})}export{b as default};
