"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[965],{14:(n,e,t)=>{t.d(e,{A:()=>o});var i=t(475),r=t(579);const o=n=>{let{movies:e}=n;return(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:e.map((n=>{let{title:e,id:t}=n;return(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/movies/".concat(t),children:e})},t)}))})})}},965:(n,e,t)=>{t.r(e),t.d(e,{default:()=>k});var i,r,o,a,s=t(686),p=t(14),l=t(598),c=t(528),d=t(197);const u=d.Ay.header(i||(i=(0,c.A)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow:\n    0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),x=d.Ay.form(r||(r=(0,c.A)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),h=d.Ay.button(o||(o=(0,c.A)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=d.Ay.input(a||(a=(0,c.A)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])));var f=t(579);const b=n=>{let{value:e,onChange:t,onSubmit:i}=n;return(0,f.jsx)(u,{children:(0,f.jsxs)(x,{onSubmit:i,children:[(0,f.jsx)(g,{type:"text",placeholder:"Search movie...",name:"value",value:e,onChange:t}),(0,f.jsx)(h,{type:"submit",children:(0,f.jsx)("span",{children:(0,f.jsx)(l.cwG,{size:"40"})})})]})})};var m=t(43),v=t(401),y=t(475);function k(){var n;const[e,t]=(0,m.useState)(""),[i,r]=(0,m.useState)([]),[o,a]=(0,m.useState)(!1),[l,c]=(0,y.ok)(),d=null!==(n=l.get("query"))&&void 0!==n?n:"";return(0,m.useEffect)((()=>{""!==d.trim()?async function(){try{a(!0);const{results:n}=await(0,s.XW)(d);r(n)}catch(n){v.oR.error("Opps! Somathing went wrong! Please try reloading this page")}finally{a(!1)}}():v.oR.error("\u0429\u043e\u0441\u044c \u043d\u0430\u043f\u0438\u0448\u0438")}),[d]),(0,f.jsxs)("div",{children:[(0,f.jsx)(b,{value:e,onChange:n=>{t(n.currentTarget.value.toLowerCase())},onSubmit:n=>{n.preventDefault(),c({query:e}),t("")}}),o&&(0,f.jsx)("b",{children:"Loding ..."}),(0,f.jsx)(p.A,{movies:i})]})}}}]);
//# sourceMappingURL=965.639c7c49.chunk.js.map