"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[148],{4628:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(885),a=t(5861),i=t(4687),o=t.n(i),d=t(1044),l=t(2791),s=t(5243),c=t(168),p=t(4313),x=t(8629);var h,u,f=t.p+"static/media/currency-bg.79c23c3b7292d14148dba4e0343c8ea9.svg",g=p.ZP.div(h||(h=(0,c.Z)(["\n  height: 174px;\n  position: relative;\n\n  color: #ffffff;\n  border-radius: 30px;\n  overflow: hidden;\n  background: #4a56e2 url(",");\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  @media "," {\n    margin: 0 auto;\n    margin-top: 28px;\n  }\n\n  @media "," {\n    height: 182px;\n    width: 336px;\n  }\n\n  @media "," {\n    height: 331px;\n    width: 393px;\n  }\n"])),f,x.U.tabletBefore,x.U.tablet,x.U.desktop),m=p.ZP.table(u||(u=(0,c.Z)(["\n  width: 100%;\n  height: max-content;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  & thead {\n    font-weight: 700;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  & th {\n    padding-bottom: 12px;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 17px;\n      padding-top: 17px;\n    }\n  }\n\n  & td {\n    text-align: center;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 4px;\n      padding-top: 20px;\n    }\n  }\n\n  & th:first-child,\n  td:first-child {\n    padding-left: 20px;\n    padding-right: 24px;\n\n    @media "," {\n      padding-left: 20px;\n      padding-right: 42px;\n    }\n\n    @media "," {\n      padding-left: 44px;\n      padding-right: 40px;\n      text-align: center;\n    }\n  }\n\n  & th:last-child,\n  td:last-child {\n    padding-right: 17px;\n    padding-left: 38px;\n\n    @media "," {\n      text-align: left;\n      padding-right: 25px;\n      padding-left: 70px;\n    }\n\n    @media "," {\n      padding-right: 44px;\n      padding-left: 70px;\n    }\n  }\n\n  & th,\n  td {\n    @media "," {\n      text-align: left;\n    }\n  }\n"])),x.U.tabletBefore,x.U.desktop,x.U.desktop,x.U.tabletOnly,x.U.desktop,x.U.tabletOnly,x.U.desktop,x.U.tabletBefore),b=t(184);function j(){return(j=(0,a.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Z.get("https://api.monobank.ua/bank/currency");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function y(){return JSON.parse(localStorage.getItem("keyCurrency"))}var Z=function(){var n=(0,l.useState)([]),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,l.useEffect)((function(){if(y()&&(new Date).getTime()-JSON.parse(localStorage.getItem("keyDate"))<36e5)return a(y());(function(){return j.apply(this,arguments)})().then((function(n){var e,t=n.filter((function(n){return(840===n.currencyCodeA||978===n.currencyCodeA)&&980===n.currencyCodeB}));return e=t,localStorage.removeItem("keyCurrency"),localStorage.removeItem("keyDate"),localStorage.setItem("keyCurrency",JSON.stringify(e)),localStorage.setItem("keyDate",JSON.stringify((new Date).getTime())),a(t)}))}),[a]),(0,b.jsxs)(g,{children:[0===t.length&&(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)"},children:(0,b.jsx)(s.g4,{height:"80",width:"80",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),(0,b.jsxs)(m,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Currency"}),(0,b.jsx)("th",{children:"Purchase"}),(0,b.jsx)("th",{children:"Sale"})]})}),(0,b.jsx)("tbody",{children:t.length>0&&t.map((function(n){return(0,b.jsxs)("tr",{children:[840===n.currencyCodeA?(0,b.jsx)("td",{children:"USD"}):(0,b.jsx)("td",{children:"EUR"}),(0,b.jsx)("td",{children:n.rateBuy.toFixed(2)}),(0,b.jsx)("td",{children:n.rateSell.toFixed(2)})]},n.currencyCodeA)}))})]})]})}},5584:function(n,e,t){t.r(e),t.d(e,{default:function(){return pn}});var r,a,i,o,d,l,s,c,p,x,h,u,f,g,m,b,j,y=t(4805),Z=t(885),v=t(2791),C=t(168),w=t(4313),k=t(8629),S=w.ZP.button(r||(r=(0,C.Z)(["\n  width: 44px;\n  height: 44px;\n  background-image: linear-gradient(122deg, rgba(0, 255, 205, 0.95), #24cca7);\n  transition: transform 300ms linear;\n  border: none;\n  border-radius: 50%;\n  font-size: 30px;\n  font-family: 'Montserrat';\n  color: #fff;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  outline: none;\n  cursor: pointer;\n  box-shadow: rgba(0, 75, 144, 0.35) 0px 8px 10px 0px;\n  &:hover {\n    background-image: linear-gradient(122deg, #24cca7, rgba(0, 255, 205, 0.95));\n    transform: scale(1.1);\n  }\n\n  @media "," {\n    right: 40px;\n    bottom: 20px;\n    z-index: 10;\n  }\n\n  @media "," {\n    right: 85px;\n  }\n"])),k.U.tablet,k.U.desktop),P=t(9434),U=t(4323),D=t(7842),B=t(1799),z=t.n(B),I=(t(1778),t(2426)),O=t.n(I),T=t(5705),M=t(1724),A=w.ZP.div(a||(a=(0,C.Z)(["\n  padding: 20px 9px 60px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px 73px 60px;\n  }\n"]))),F=w.ZP.form(i||(i=(0,C.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),E=(w.ZP.input(o||(o=(0,C.Z)(["\n"]))),w.ZP.label(d||(d=(0,C.Z)(["\n"])))),J=w.ZP.input(l||(l=(0,C.Z)([""]))),N=(w.ZP.select(s||(s=(0,C.Z)([""]))),w.ZP.h2(c||(c=(0,C.Z)(["\n  font-size: 24px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 36px;\n  text-align: center;\n  color: #000000;\n\n  @media screen and (min-width: 768px) {\n    font-size: 30px;\n    line-height: 45px;\n  }\n"])))),V=w.ZP.button(p||(p=(0,C.Z)(["\n  width: 300px;\n  height: 50px;\n  background: #ffffff;\n  border: 1px transparent;\n  border-radius: 20px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #4a56e2;\n  background: #24cca7;\n"]))),Y=w.ZP.button(x||(x=(0,C.Z)(["\n  width: 300px;\n  height: 50px;\n  background: #ffffff;\n  border: 1px solid #4a56e2;\n  border-radius: 20px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #4a56e2;\n"]))),q=t(184),L=[{value:"main expenses",label:"Main expenses"},{value:"products",label:"Products"},{value:"car",label:"Car"},{value:"salfe care",label:"Salfe care"},{value:"child care",label:"Child care"},{value:"household products",label:"Household products"},{value:"education",label:"Education"},{value:"leisure",label:"Leisure"},{value:"other expenses",label:"Other expenses"},{value:"enterteintmen",label:"Enterteintmen"}],R=function(n){var e=n.toogleModalCancel,t=(0,v.useState)(!1),r=(0,Z.Z)(t,2),a=r[0],i=r[1],o=(0,v.useState)(null),d=(0,Z.Z)(o,2),l=d[0],s=d[1],c=(0,v.useState)(""),p=(0,Z.Z)(c,2),x=p[0],h=p[1],u=(0,v.useState)(""),f=(0,Z.Z)(u,2),g=f[0],m=f[1],b=(0,v.useState)(new Date),j=(0,Z.Z)(b,2),y=j[0],C=j[1],w=(0,P.I0)(),k=function(n){var e=n.target.value;"sum"===n.target.name&&m(e),"comment"===n.target.name&&h(e)},S=O()().subtract(1,"day");function B(n){return n.isAfter(S)}var I=M.Ry().shape({date:M.hT().required(),type:M.Z_().required,category:M.Z_(),comment:M.Z_(),sum:M.Rx().required()});return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(A,{children:[(0,q.jsx)(N,{children:"Add transaction"}),(0,q.jsx)(D.Z,{onChange:function(){i(!a)},checked:a}),(0,q.jsx)(T.J9,{initialValues:{category:"",sum:"",date:""},validationSchema:I,onSubmit:function(n){w()},children:function(){return(0,q.jsxs)(F,{children:[!a&&(0,q.jsxs)(E,{children:["select a category",(0,q.jsx)(U.ZP,{name:"category",defaultValue:l,onChange:s,options:L})]}),(0,q.jsx)(E,{children:(0,q.jsx)(J,{type:"text",placeholder:"0.00",name:"sum",value:g,onChange:k})}),(0,q.jsx)(z(),{name:"date",dateFormat:"DD.MM.YYYY",inputProps:{style:{color:"red"}},timeFormat:!1,initialValue:y,isValidDate:B,value:y,onChange:C}),(0,q.jsx)(E,{children:(0,q.jsx)(J,{type:"text",name:"comment",placeholder:"comment",value:x,onChange:k})}),(0,q.jsx)(V,{children:"add"})]})}}),(0,q.jsx)(Y,{type:"button",onClick:function(){return e()},children:"cancel"})]})})},_=t(2658),W=function(){var n=(0,v.useState)(!1),e=(0,Z.Z)(n,2),t=e[0],r=e[1],a=function(){r(!t)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(S,{type:"button",onClick:function(){return a()},children:"+"}),t&&(0,q.jsx)(_.Z,{toogleModal:a,children:(0,q.jsx)(R,{toogleModalCancel:a})})]})},G=t(9869),H=w.ZP.div(h||(h=(0,C.Z)(["\n  height: 80px;\n  min-width: 280px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 8px;\n  padding-left: 32px;\n  padding-right: 73px;\n  padding-bottom: 12px;\n  background-color: #ffffff;\n  border-radius: 30px;\n\n  @media "," {\n    margin-top: 12px;\n  }\n\n  @media "," {\n    min-width: 336px;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  @media "," {\n    margin-top: 32px;\n    margin-bottom: 32px;\n    min-width: 395px;\n  }\n\n  & p:first-child {\n    font-size: 12px;\n    color: #a6a6a6;\n  }\n\n  & p:last-child {\n    font-family: Poppins, Circe;\n    font-size: 30px;\n  }\n"])),k.U.tabletBefore,k.U.tablet,k.U.desktop),Q=function(){var n=(0,P.v9)(G.sb);return(0,q.jsxs)(H,{children:[(0,q.jsx)("p",{children:"YOUR BALANCE"}),(0,q.jsxs)("p",{children:[(0,q.jsx)("span",{children:"\u20b4 "}),(0,q.jsx)("span",{children:n})]})]})},X=t(4628),K=t(9167),$=t(5672),nn=w.ZP.table(u||(u=(0,C.Z)(["\n  margin-top: 15px;\n\n  @media "," {\n    margin-top: 40px;\n    width: 280px;\n    height: 300px;\n  }\n\n  @media "," {\n    width: 704px;\n    height: 312px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),k.U.tabletBefore,k.U.tablet),en=w.ZP.thead(f||(f=(0,C.Z)(["\n  margin-bottom: 15px;\n"]))),tn=w.ZP.th(g||(g=(0,C.Z)(["\n  padding: 15px;\n  background-color: #ffffff;\n  font-size: 18px;\n  margin-top: 15px;\n\n  &:first-child {\n    width: 100px;\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n  }\n\n  &:last-child {\n    width: 120px;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n  }\n"]))),rn=w.ZP.th(m||(m=(0,C.Z)(["\n  color: #24cca7;\n  align-items: center;\n"]))),an=w.ZP.th(b||(b=(0,C.Z)(["\n  color: #ff6596;\n"]))),on=w.ZP.th(j||(j=(0,C.Z)(["\n  padding: 15px;\n  font-size: 16px;\n  font-weight: 400;\n"]))),dn=[{id:"1",Date:"04.01.19",Type:"-",Category:"Other",Comment:"Gift for your wife",Sum:"300.00",Balance:"6 900.00"},{id:"2",Date:"05.01.19",Type:"+",Category:"Income",Comment:"January bonus",Sum:"8 000.00",Balance:"14 900.00"},{id:"3",Date:"07.01.19",Type:"-",Category:"Car",Comment:"Oil",Sum:"1000.00",Balance:"13 900.00"},{id:"4",Date:"07.01.19",Type:"-",Category:"Products",Comment:"Vegetables for the week",Sum:"280.00",Balance:"13 870.00"},{id:"5",Date:"07.01.19",Type:"+",Category:"Income",Comment:"Gift",Sum:"1 000.00",Balance:"14870.00"}],ln=function(){var n=(0,y.useMediaQuery)({minWidth:768});return(0,q.jsxs)(q.Fragment,{children:[n&&(0,q.jsxs)(nn,{children:[(0,q.jsx)(en,{children:(0,q.jsxs)("tr",{children:[(0,q.jsx)(tn,{children:"Date"}),(0,q.jsx)(tn,{children:"Type"}),(0,q.jsx)(tn,{children:"Category"}),(0,q.jsx)(tn,{children:"Comment"}),(0,q.jsx)(tn,{children:"Sum"}),(0,q.jsx)(tn,{children:"Balance"})]})}),(0,q.jsx)("tbody",{children:dn.map((function(n){var e=n.id,t=n.Date,r=n.Type,a=n.Category,i=n.Comment,o=n.Sum,d=n.Balance;return(0,q.jsxs)("tr",{children:[(0,q.jsx)(on,{children:t}),(0,q.jsx)(on,{children:r}),(0,q.jsx)(on,{children:a}),(0,q.jsx)(on,{children:i}),"+"===r?(0,q.jsx)(rn,{children:o}):(0,q.jsx)(an,{children:o}),(0,q.jsx)(on,{children:d})]},e)}))})]}),!n&&(0,q.jsx)("div",{})]})},sn=t(3387),cn=t(6587),pn=function(){var n=(0,y.useMediaQuery)({minWidth:768});return(0,q.jsxs)(cn.H_,{children:[(0,q.jsxs)(cn.L,{children:[(0,q.jsx)(K.Z,{}),(0,q.jsxs)(sn.W2,{children:[(0,q.jsxs)(cn.kC,{children:[(0,q.jsxs)(cn.Eq,{children:[(0,q.jsx)($.Z,{current:"home"}),(0,q.jsx)(Q,{})]}),n&&(0,q.jsx)(X.Z,{})]}),(0,q.jsx)(ln,{})]})]}),(0,q.jsx)(W,{})]})}}}]);
//# sourceMappingURL=148.721d83da.chunk.js.map