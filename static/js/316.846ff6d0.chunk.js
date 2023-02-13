"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[316],{4628:function(n,t,e){e.d(t,{Z:function(){return k}});var r=e(9439),i=e(5861),a=e(4687),l=e.n(a),o=e(1044),c=e(2791),d=e(5243),p=e(168),u=e(4313),s=e(8629);var f,g,h,x,b=e.p+"static/media/currency-bg.79c23c3b7292d14148dba4e0343c8ea9.svg",m=u.ZP.div(f||(f=(0,p.Z)(["\n  height: 174px;\n  position: relative;\n  width: 280px;\n\n  color: #ffffff;\n  border-radius: 30px;\n  overflow: hidden;\n  background: #4a56e2 url(",");\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  @media "," {\n    margin: 0 auto;\n    margin-top: 28px;\n  }\n\n  @media "," {\n    height: 182px;\n    width: 336px;\n  }\n\n  @media "," {\n    height: 331px;\n    width: 393px;\n  }\n"])),b,s.U.tabletBefore,s.U.tablet,s.U.desktop),y=u.ZP.div(g||(g=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),v=u.ZP.div(h||(h=(0,p.Z)(["\n  align-items: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n"]))),C=u.ZP.table(x||(x=(0,p.Z)(["\n  width: 100%;\n  height: max-content;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  & thead {\n    font-weight: 700;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  & th {\n    padding-bottom: 12px;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 17px;\n      padding-top: 17px;\n    }\n  }\n\n  & td {\n    text-align: center;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 4px;\n      padding-top: 20px;\n    }\n  }\n\n  & th:first-child,\n  td:first-child {\n    padding-left: 20px;\n    padding-right: 24px;\n\n    @media "," {\n      padding-left: 20px;\n      padding-right: 42px;\n    }\n\n    @media "," {\n      padding-left: 44px;\n      padding-right: 40px;\n      text-align: center;\n    }\n  }\n\n  & th:last-child,\n  td:last-child {\n    padding-right: 17px;\n    padding-left: 38px;\n\n    @media "," {\n      text-align: left;\n      padding-right: 25px;\n      padding-left: 70px;\n    }\n\n    @media "," {\n      padding-right: 44px;\n      padding-left: 70px;\n    }\n  }\n\n  & th,\n  td {\n    @media "," {\n      text-align: left;\n    }\n  }\n"])),s.U.tabletBefore,s.U.desktop,s.U.desktop,s.U.tabletOnly,s.U.desktop,s.U.tabletOnly,s.U.desktop,s.U.tabletBefore),j=e(9230),w=e(184);function Z(){return(Z=(0,i.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.monobank.ua/bank/currency");case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function O(){return JSON.parse(localStorage.getItem("keyCurrency"))}var k=function(){var n=(0,j.$G)().t,t=(0,c.useState)([]),e=(0,r.Z)(t,2),i=e[0],a=e[1],l=(0,c.useState)(!1),o=(0,r.Z)(l,2),p=o[0],u=o[1],s=(0,c.useState)(null),f=(0,r.Z)(s,2),g=f[0],h=f[1];return(0,c.useEffect)((function(){if(O()&&(new Date).getTime()-JSON.parse(localStorage.getItem("keyDate"))<36e5)return a(O());u(!0),function(){return Z.apply(this,arguments)}().then((function(n){var t,e=n.filter((function(n){return(840===n.currencyCodeA||978===n.currencyCodeA)&&980===n.currencyCodeB}));return t=e,localStorage.removeItem("keyCurrency"),localStorage.removeItem("keyDate"),localStorage.setItem("keyCurrency",JSON.stringify(t)),localStorage.setItem("keyDate",JSON.stringify((new Date).getTime())),h(null),a(e)})).catch((function(n){return h(n.message)})).finally((function(){return u(!1)}))}),[a]),(0,w.jsxs)(m,{children:[p&&(0,w.jsx)(y,{children:(0,w.jsx)(d.g4,{height:"80",width:"80",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),g&&(0,w.jsx)(v,{children:(0,w.jsxs)(j.cC,{i18nKey:"currency.wrapError",children:[(0,w.jsx)("p",{children:"Currency is not available now."}),(0,w.jsx)("p",{children:"Please check later."})]})}),(0,w.jsxs)(C,{children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:n("currency.table.currency")}),(0,w.jsx)("th",{children:n("currency.table.purchase")}),(0,w.jsx)("th",{children:n("currency.table.sale")})]})}),(0,w.jsx)("tbody",{children:i.length>0&&i.map((function(n){return(0,w.jsxs)("tr",{children:[840===n.currencyCodeA?(0,w.jsx)("td",{children:"USD"}):(0,w.jsx)("td",{children:"EUR"}),(0,w.jsx)("td",{children:n.rateBuy.toFixed(2)}),(0,w.jsx)("td",{children:n.rateSell.toFixed(2)})]},n.currencyCodeA)}))})]})]})}},5672:function(n,t,e){e.d(t,{Z:function(){return G}});var r,i=e(4805),a=e(9230),l=e(168),o=e(4313),c=e(1087),d=e(8629),p=e(2791),u=["title","titleId"];function s(){return s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},s.apply(this,arguments)}function f(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function g(n,t){var e=n.title,i=n.titleId,a=f(n,u);return p.createElement("svg",s({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),e?p.createElement("title",{id:i},e):null,r||(r=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.9333 24.3594V32.5555H12.1V21.6274H8L21.6667 9.33325L35.3333 21.6274H31.2333V32.5555H24.4V24.3594H18.9333Z"})))}var h,x=p.forwardRef(g),b=(e.p,["title","titleId"]);function m(){return m=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},m.apply(this,arguments)}function y(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function v(n,t){var e=n.title,r=n.titleId,i=y(n,b);return p.createElement("svg",m({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?p.createElement("title",{id:r},e):null,h||(h=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM32.5 19.5555C33.7833 19.5555 34.8333 18.4555 34.8333 17.1111C34.8333 15.7666 33.7833 14.6666 32.5 14.6666C31.2166 14.6666 30.1666 15.7666 30.1666 17.1111C30.1666 17.3311 30.19 17.5389 30.2483 17.7344L26.1066 22.0855C25.92 22.0244 25.71 22 25.5 22C25.29 22 25.08 22.0244 24.8933 22.0855L21.9183 18.9689C21.9766 18.7733 22 18.5533 22 18.3333C22 16.9889 20.95 15.8889 19.6666 15.8889C18.3833 15.8889 17.3333 16.9889 17.3333 18.3333C17.3333 18.5533 17.3566 18.7733 17.415 18.9689L12.095 24.53C11.9083 24.4689 11.71 24.4444 11.5 24.4444C10.2166 24.4444 9.16664 25.5444 9.16664 26.8889C9.16664 28.2333 10.2166 29.3333 11.5 29.3333C12.7833 29.3333 13.8333 28.2333 13.8333 26.8889C13.8333 26.6689 13.81 26.4611 13.7516 26.2655L19.06 20.6922C19.2466 20.7533 19.4566 20.7778 19.6666 20.7778C19.8766 20.7778 20.0866 20.7533 20.2733 20.6922L23.2483 23.8089C23.19 24.0044 23.1666 24.2244 23.1666 24.4444C23.1666 25.7889 24.2166 26.8889 25.5 26.8889C26.7833 26.8889 27.8333 25.7889 27.8333 24.4444C27.8333 24.2244 27.81 24.0044 27.7516 23.8089L31.905 19.47C32.0916 19.5311 32.29 19.5555 32.5 19.5555Z"})))}var C,j=p.forwardRef(v),w=(e.p,["title","titleId"]);function Z(){return Z=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Z.apply(this,arguments)}function O(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function k(n,t){var e=n.title,r=n.titleId,i=O(n,w);return p.createElement("svg",Z({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?p.createElement("title",{id:r},e):null,C||(C=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.7523 18.5989C18.7523 19.7809 19.6607 20.5399 22.4852 21.2741C25.3096 22.0082 28.3332 23.2151 28.3332 26.7489C28.3332 29.2996 26.4046 30.7056 23.9783 31.166V33.8412H20.2455V31.1411C17.8565 30.631 15.8159 29.1005 15.6666 26.3756H18.4039C18.5408 27.8438 19.5487 28.9885 22.1119 28.9885C24.8617 28.9885 25.4714 27.6198 25.4714 26.7613C25.4714 25.6041 24.8493 24.5092 21.7386 23.7626C18.2671 22.9289 15.8905 21.498 15.8905 18.6238C15.8905 16.2223 17.8316 14.6546 20.2455 14.132V11.4443H23.9783V14.1693C26.5788 14.8039 27.8853 16.7698 27.9724 18.91H25.2225C25.1479 17.3546 24.3267 16.297 22.1119 16.297C20.0091 16.297 18.7523 17.2426 18.7523 18.5989Z"})))}var P,S,U,E,H,I,V,L,B,R=p.forwardRef(k),M=(e.p,o.ZP.div(P||(P=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n\n  @media "," {\n    margin-top: 0px;\n    flex-direction: column;\n  }\n"])),d.U.tablet)),D=(0,o.ZP)(c.OL)(S||(S=(0,l.Z)(["\n  padding: 0px;\n  background-color: transparent;\n  border: none;\n  height: 44px;\n  font-family: 'Poppins', \"Montserrat\";\n  font-size: 18px;\n  color: ",";\n\n  &:not(:last-child) {\n    margin-right: 32px;\n  }\n\n  &:hover svg,\n  &:focus svg{\n    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));\n    fill: #4a56e2;\n  }\n\n  @media "," {\n    display: flex;\n    align-items: center;\n    height: auto;\n\n    &:not(:last-child) {\n    margin-right: 0px;\n    margin-bottom: 12px;\n  }\n  }\n"])),(function(n){return n.theme.reverseBlack}),d.U.tablet),T=o.ZP.span(U||(U=(0,l.Z)(["\n  ","\n"])),(function(n){return n.current&&(0,o.iv)(E||(E=(0,l.Z)(["\n      font-weight: 700;\n    "])))})),N=(0,o.iv)(H||(H=(0,l.Z)(["\n  fill: #6e78e8;\n  transition: 0.2s ease-in-out;\n\n  ","\n\n    @media "," {\n      width: 24px;\n      height: 24px;\n      margin-right: 20px;\n    }\n"])),(function(n){return n.current&&(0,o.iv)(I||(I=(0,l.Z)(["\n      fill: #4a56e2;\n    "])))}),d.U.tablet),z=(0,o.ZP)(x)(V||(V=(0,l.Z)(["\n  ","\n"])),N),A=(0,o.ZP)(j)(L||(L=(0,l.Z)(["\n  ","\n"])),N),J=(0,o.ZP)(R)(B||(B=(0,l.Z)(["\n  ","\n"])),N),F=e(184),G=function(n){var t=n.current,e=(0,a.$G)().t,r=(0,i.useMediaQuery)({minWidth:768});return(0,F.jsxs)(M,{children:[(0,F.jsxs)(D,{type:"button",to:"/home",children:["home"===t?(0,F.jsx)(z,{current:"true"}):(0,F.jsx)(z,{}),r?"home"===t?(0,F.jsx)(T,{current:"true",children:e("navigation.navigateText.home")}):(0,F.jsx)(T,{children:e("navigation.navigateText.home")}):null]}),(0,F.jsxs)(D,{type:"button",to:"/statistics",children:["statistics"===t?(0,F.jsx)(A,{current:"true"}):(0,F.jsx)(A,{}),r?"statistics"===t?(0,F.jsx)(T,{current:"true",children:e("navigation.navigateText.statistics")}):(0,F.jsx)(T,{children:e("navigation.navigateText.statistics")}):null]}),!r&&(0,F.jsx)(D,{type:"button",to:"/currency",children:"currency"===t?(0,F.jsx)(J,{current:"true"}):(0,F.jsx)(J,{})})]})}},6587:function(n,t,e){e.d(t,{Eq:function(){return h},H_:function(){return s},L:function(){return f},kC:function(){return g}});var r,i,a,l,o=e(168),c=e(4313),d=e(8629),p=e(1082),u=e(3995),s=c.ZP.div(r||(r=(0,o.Z)(["\n  min-height: 100vh;\n  background-color: ",";\n\n  @media "," {\n    background: top 0% right 0% no-repeat url(","),\n      bottom 0% left 0% no-repeat url(","), ",";\n  }\n"])),(function(n){return n.theme.bgPrimary1}),d.U.tablet,u,p,(function(n){return n.theme.bgPrimary1})),f=c.ZP.div(i||(i=(0,o.Z)(["\n  min-height: 100vh;\n\n  @media "," {\n    background-color: ",";\n    backdrop-filter: blur(25px);\n  }\n"])),d.U.tablet,(function(n){return n.theme.bgBlurColor})),g=c.ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  @media "," {\n    padding-top: 32px;\n    padding-bottom: 20px;\n\n    /* & > div {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-right: 32px;\n    } */\n  }\n\n  @media "," {\n    min-height: calc(100vh - 85px);\n    display: block;\n    padding-right: 70px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    border-right: 2px solid rgba(0, 0, 0, 0.05);\n  }\n"])),d.U.tabletOnly,d.U.desktop),h=c.ZP.div(l||(l=(0,o.Z)(["\n  @media "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 32px;\n  }\n"])),d.U.tabletOnly)}}]);
//# sourceMappingURL=316.846ff6d0.chunk.js.map