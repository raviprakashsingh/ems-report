(this["webpackJsonpems-report"]=this["webpackJsonpems-report"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/power-station.abf69411.jpg"},148:function(e,t,a){e.exports=a.p+"static/media/venlite-logo.f4ab1678.png"},169:function(e,t,a){e.exports=a(241)},174:function(e,t,a){},175:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(174),a(20)),o=(a(175),a(71)),s=a(284),m=a(283),u=a(278),p=a(295),d=a(293),g=a(286),f=a(282),E=a(116),b=a(279),x=a(280),h=a(139),v=a.n(h),y=a(144),w=a.n(y),j=a(285),O=a(93),S=a(281),k=a(140),C=a.n(k),N=a(141),D=a.n(N),M=a(142),I=a.n(M),L=a(143),P=a.n(L),R=a(276),W=a(15),T=a(81),z=a.n(T),B=Object(R.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),nested:{paddingLeft:e.spacing(4)},appBar:(t={},Object(o.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(300,"px)"),marginLeft:300}),Object(o.a)(t,"background","#0dc5c2"),t),menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(3)}}}));var H=function(e){var t=e.window,a=B(),n=Object(W.a)(),l=r.a.useState(!1),c=Object(i.a)(l,2),o=c[0],h=c[1],y=r.a.useState(!1),k=Object(i.a)(y,2),N=k[0],M=k[1],L=function(){h(!o)},R=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar,style:{justifyContent:"center",display:"flex",padding:"10px"}},r.a.createElement("img",{style:{maxHeight:"80px",borderRadius:"5px"},src:z.a,alt:"User Login"})),r.a.createElement(u.a,null),r.a.createElement(E.a,{button:!0,onClick:function(){M(!N)}},r.a.createElement(b.a,null,r.a.createElement(v.a,null)),r.a.createElement(x.a,{primary:"Reports"}),N?r.a.createElement(C.a,null):r.a.createElement(D.a,null)),r.a.createElement(S.a,{in:N,timeout:"auto",unmountOnExit:!0},r.a.createElement(f.a,{component:"div",disablePadding:!0},r.a.createElement(E.a,{button:!0,className:a.nested},r.a.createElement(b.a,null,r.a.createElement(I.a,null)),r.a.createElement(x.a,{primary:"Historical Data"})),r.a.createElement(E.a,{button:!0,className:a.nested},r.a.createElement(b.a,null,r.a.createElement(P.a,null)),r.a.createElement(x.a,{primary:"Report By Interval"}))))),T=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:a.root},r.a.createElement(m.a,null),r.a.createElement(s.a,{position:"fixed",className:a.appBar},r.a.createElement(j.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:L,className:a.menuButton},r.a.createElement(w.a,null)),r.a.createElement(O.a,{variant:"h6",noWrap:!0},"Welcome ",e.user.userName))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(d.a,{smUp:!0,implementation:"css"},r.a.createElement(p.a,{container:T,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:o,onClose:L,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},R)),r.a.createElement(d.a,{xsDown:!0,implementation:"css"},r.a.createElement(p.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},R))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(e.page,null)))},U=a(63),J=a.n(U),G=a(88),q=a(245),V=a(288),A=a(151),F=a(103),K=a(290),Q=a(16),X=a(291),Y=a(145),Z=a.n(Y),$=a(64),_=a.n($),ee=(a(199),Object(R.a)((function(e){return{root:{"& > *":{padding:e.spacing(2)}}}}))),te=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=r.a.useState([]),o=Object(i.a)(c,2),s=o[0],m=o[1],u=r.a.useState([]),p=Object(i.a)(u,2),d=p[0],g=p[1],f=r.a.useState([]),E=Object(i.a)(f,2),b=E[0],x=E[1],h=r.a.useState(new Date(Date.now()).setHours(0,0,0,0)),v=Object(i.a)(h,2),y=v[0],w=v[1],j=r.a.useState(Date.now()),S=Object(i.a)(j,2),k=S[0],C=S[1],N=Object(n.useState)(!1),D=Object(i.a)(N,2),M=D[0],I=D[1],L=Object(n.useState)(),P=Object(i.a)(L,2),R=P[0],W=P[1],T=ee();Object(n.useEffect)((function(){_.a.get("https://ems-dev.azurewebsites.net/api/meter").then((function(e){g(e.data.map((function(e){return e.meterName})))})),_.a.get("https://ems-dev.azurewebsites.net/api/parameter").then((function(e){x(e.data)}))}),[]);var z=function(){var e=Object(G.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={startDate:new Date(y).toJSON(),endDate:new Date(k).toJSON(),meter:a,parameter:s},console.log(JSON.stringify(n)),e.next=4,_.a.post("https://ems-dev.azurewebsites.net/api/Report/HistoricalData",n);case 4:r=e.sent,console.log(r.data),W(r.data),I(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:T.root,style:{display:"flex",justifyContent:"center"}},r.a.createElement(q.a,{style:{maxWidth:"500px"}},r.a.createElement(O.a,{variant:"h4",gutterBottom:!0},"Historical Data"),r.a.createElement(Q.a,{utils:A.a},r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{xs:6,item:!0},r.a.createElement(X.a,{label:"Start Date",value:y,onChange:w,format:"dd MMM yyyy  hh:mm a",fullWidth:!0})),r.a.createElement(V.a,{xs:6,item:!0},r.a.createElement(X.a,{label:"End Date",value:k,onChange:C,format:"dd MMM yyyy  hh:mm a",fullWidth:!0})))),r.a.createElement(F.MultipleSelect,{style:{marginTop:"10px"},label:"Select Meters",values:a,options:d,onChange:function(e){l(e)}}),r.a.createElement(F.MultipleSelect,{style:{marginTop:"10px"},label:"Select Parameters",values:s,options:b,onChange:function(e){m(e)}}),r.a.createElement(K.a,{variant:"contained",style:{marginTop:"10px"},color:"primary",onClick:z},"Generate Report"))),M&&r.a.createElement(Z.a,{columns:s.map((function(e){return{name:e,key:e}})),objects:R}))},ae=a(147),ne=a.n(ae),re=a(148),le=a.n(re),ce=a(292),ie=a(149),oe=a.n(ie),se=a(150),me=a.n(se),ue={height:"100vh",background:"url('".concat(ne.a,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"flex-start",justifyContent:"center"},pe={marginLeft:"10px",marginRight:"10px",marginTop:"150px",borderRadius:"10px",background:"rgba(255,255,255,.7)",color:"rgba(35, 42, 61)",minWidth:"400px",padding:"25px"},de=function(e){var t=e.setLoggedIn,a=e.setUser,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),d=p[0],g=p[1],f=function(){var e=Object(G.a)(J.a.mark((function e(n){var r,l;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={userName:o,userPassword:d},e.next=4,_.a.post("https://ems-dev.azurewebsites.net/api/Login/Create",r);case 4:l=e.sent,t(!0),a(l.data),console.log(l.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:ue},r.a.createElement("a",{href:"http://www.venlite.website/"},r.a.createElement("img",{src:le.a,alt:"Venlite",style:{position:"fixed",top:"10px",left:"30px",width:"100px"}})),r.a.createElement("div",{style:pe},r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement("img",{style:{maxHeight:"80px",borderRadius:"5px"},src:z.a,alt:"User Login"})),r.a.createElement(u.a,{variant:"fullWidth",style:{height:"3px",background:"rgba(35, 42, 61)",marginTop:"10px"}}),r.a.createElement("form",{onSubmit:f,style:{width:"100%"}},r.a.createElement(V.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(V.a,{item:!0},r.a.createElement(oe.a,null)),r.a.createElement(V.a,{item:!0,style:{flexGrow:1}},r.a.createElement(ce.a,{label:"Username",fullWidth:!0,required:!0,value:o,onChange:function(e){s(e.target.value)},style:{marginTop:"30px"}}))),r.a.createElement(V.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(V.a,{item:!0},r.a.createElement(me.a,null)),r.a.createElement(V.a,{item:!0,style:{flexGrow:1}},r.a.createElement(ce.a,{label:"Password",type:"password",fullWidth:!0,value:d,onChange:function(e){g(e.target.value)},required:!0,style:{marginTop:"10px"}}))),r.a.createElement(K.a,{size:"large",variant:"contained",type:"submit",style:{marginTop:"30px",background:"rgba(35, 42, 61)",fontSize:"1.2rem",color:"#fff",width:"100%"}},"Login"),r.a.createElement("p",{style:{padding:"10px"}},r.a.createElement("small",null,"Forgot Password")))),r.a.createElement("footer",{style:{color:"#fff",width:"100%",position:"fixed",fontWeight:"500",bottom:"0",padding:"30px",textAlign:"center"}},r.a.createElement("p",null,"\xa9Venlite Industry Limited ESTD 2017. Crafted with Care In India")))};var ge=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(i.a)(c,2),s=o[0],m=o[1];return a?null!=s?r.a.createElement("div",null,r.a.createElement(H,{page:te,user:s})):"loading":r.a.createElement(de,{setLoggedIn:l,setUser:m})};c.a.render(r.a.createElement(ge,null),document.getElementById("root"))},81:function(e,t,a){e.exports=a.p+"static/media/smart-fi.c74a4a94.png"}},[[169,1,2]]]);
//# sourceMappingURL=main.ca11d360.chunk.js.map