(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,n,t){"use strict";t.r(n);var i,r,c,o,a,s,b,d,l,j,u,p,x,h,O,f,g,m,v,w,y,k,z,S,C,E,I,A,N,P,T,F,R,D,L,M=t(1),J=t.n(M),B=t(75),H=t.n(B),V=(t(91),t(6)),U=t(85),X=t(124),G=t(59),_=t(138),q=t.p+"static/media/loginBackground.ec0c46ff.jpg",K=t(4),Y=t(125),Q=t(126),W=t(28),Z=t(8),$=t(9),ee=$.a.img(i||(i=Object(Z.a)(["\n    width : 100%;\n    height : 100vh;\n    position : fixed;\n    z-index : -1;\n    opacity : 0.7;\n    filter : blur(4px);\n"]))),ne=$.a.div(r||(r=Object(Z.a)(["\n    position : relative;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    width : 350px;\n    height : 410px;\n    padding : 40px 30px;\n    margin : 100px auto;\n    border-radius : 4px;\n    background : rgba(28, 28, 28, 0.9);\n"]))),te=$.a.div(c||(c=Object(Z.a)(["\n    position : absolute;\n    bottom : 12px;\n    left : 0;\n    width : 100%;\n    display : flex;\n    justify-content: space-between;\n    font-size : 12px;\n    padding : 0px 15px;\n    box-sizing: border-box;\n    color : gray;\n  \n    a {\n      color : gray;\n      text-decoration: none;\n    }\n  \n    a:hover{\n      color : white;\n    }\n"]))),ie=$.a.div(o||(o=Object(Z.a)(["\n    font-size : 32px;\n    color : white;\n    margin-bottom : 22px;\n"]))),re=$.a.input(a||(a=Object(Z.a)(["\n  width: 90%;\n  height: 33px;\n  background: #333333;\n  padding: 6px 18px;\n  color: #dedede;\n  border-radius: 4px;\n  font-size: 15px;\n  margin : 10px 0px;\n  border : 0;\n  \n  &:focus{\n    outline: none;\n  }\n"]))),ce=$.a.div(s||(s=Object(Z.a)(["\n  border-radius: 4px;\n  background: red;\n  height: 40px;\n  width: 100%;\n  margin: 18px auto;\n  text-align: center;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 4px 0px;\n  cursor: pointer;\n  user-select: none;\n  \n  display : flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background: #ff4e4e;\n  }\n\n  &:active {\n    background: #910000;\n  }\n"]))),oe=$.a.div(b||(b=Object(Z.a)(["\n    float : right;\n    color : gray;\n    font-size : 11px;\n    cursor : pointer;\n"]))),ae=t(79),se=$.a.div(d||(d=Object(Z.a)(["\n    position : fixed;\n    top : 30px;\n    left : 50px;\n    text-decoration: none;\n    font-size: 1.6em;\n    color: #e50914;\n    display: inline-block;\n    vertical-align: middle;\n    cursor: pointer;\n    margin-right: 5px;\n    font-weight: 600;\n    z-index : 100;\n;\n"]))),be=t(2),de=new U.a,le=new U.a,je=function(){var e=Object(K.n)(),n=Object(M.useRef)(null),t=Object(M.useState)(""),i=Object(V.a)(t,2),r=i[0],c=i[1],o=Object(M.useState)(""),a=Object(V.a)(o,2),s=a[0],b=a[1],d=Object(M.useState)(!1),l=Object(V.a)(d,2),j=l[0],u=l[1];return Object(M.useEffect)((function(){var n=Object(X.a)(de,le).pipe(Object(Y.a)((function(e){return u(!e)})),Object(Q.a)((function(e){return e?G.a:Object(_.a)({url:"https://netflixcloneapi.onrender.com/login",responseType:"text"})})),Object(W.a)((function(e){return null===e||void 0===e?void 0:e.response})),Object(Y.a)((function(){u(!1),e("/browse")}))).subscribe((function(e){return console.log("Logged In",e)}));return function(){n.unsubscribe()}}),[e]),Object(be.jsxs)("div",{style:{overflow:"auto"},children:[Object(be.jsx)(se,{children:Object(be.jsx)("img",{alt:"logo",style:{width:"110px"},src:"https://fontmeme.com/permalink/211110/e87c8a1e2bbb91c5a9ee56f8152b5125.png"})}),Object(be.jsx)(ee,{style:{background:"url(".concat(q,")")}}),Object(be.jsxs)(ne,{ref:n,children:[Object(be.jsx)(ie,{children:"Sign In"}),Object(be.jsx)(re,{value:r,onChange:function(e){return c(e.target.value)},placeholder:"Email or phone number",type:"text"}),Object(be.jsx)(re,{value:s,onChange:function(e){return b(e.target.value)},placeholder:"Password",type:"password"}),Object(be.jsx)(ce,{onClick:function(){return r&&s&&de.next(!1)},children:j?Object(be.jsx)(ae.BeatLoader,{css:"margin-bottom: 2px",size:10,color:"white"}):"Sign in"}),Object(be.jsx)(oe,{onClick:function(){return le.next(!0)},children:"Cancel Request"}),Object(be.jsx)("div",{style:{width:"100%",color:"white",textAlign:"center",fontSize:"12px"},children:j&&Object(be.jsx)("span",{children:"Please allow at least 20s-30s for the service to start. Thank you!"})}),Object(be.jsxs)(te,{children:[Object(be.jsx)("span",{children:"NetRXIS \xa9 2021"}),Object(be.jsx)("span",{children:Object(be.jsx)("a",{href:"http://localhost:3000/rxJS-netflix-clone/browse",children:"Need Help?"})})]})]})]})},ue=t(43),pe=t(18),xe=$.a.div(l||(l=Object(Z.a)(["\n    width : 100%;\n    height : 70px;\n    padding : 10px 42px;\n    box-sizing: border-box;\n    display : flex;\n    align-items: center;\n    color : white;\n    justify-content: space-between;\n    box-shadow: inset 0px 50px 22px -11px rgba(0,0,0,0.29);\n"]))),he=$.a.img(j||(j=Object(Z.a)(["\n    width : 100px;\n    margin-right : 35px;\n"]))),Oe=$.a.div(u||(u=Object(Z.a)(["\n  margin: 0px 12px;\n  font-size: 14px;\n  font-weight: ",";\n  color: white;\n  cursor: pointer;\n\n  &:hover {\n    color: #dedede;\n  }\n"])),(function(e){return e.isActive?800:600})),fe=$.a.div(p||(p=Object(Z.a)(["\n    display : flex;\n    align-items: center;\n"]))),ge=$.a.video(x||(x=Object(Z.a)(["\n    width : 100%;\n    position : absolute;\n    top : 0;\n    z-index: -1;\n    object-fit: cover;\n"]))),me=$.a.img(h||(h=Object(Z.a)(["\n    cursor : pointer;\n    transition: transform 0.1s;\n    \n    &:hover{\n      transform : scale(1.1);\n    }\n"]))),ve=$.a.div(O||(O=Object(Z.a)(["\n    width : 100%;\n    height : 300px;\n    padding-left : 50px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n"]))),we=$.a.div(f||(f=Object(Z.a)(["\n    height : 200px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]))),ye=$.a.div(g||(g=Object(Z.a)(["\n    font-size : 70px;\n    opacity: 0.94;\n    color : white;\n    font-weight: 700;\n    display: flex;\n    margin-bottom: 25px;\n"]))),ke=$.a.div(m||(m=Object(Z.a)(["\n  border-radius: 3px;\n  margin: 0px 10px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 44px;\n  font-size: 18px;\n  font-weight: 700;\n\n  &:hover {\n    background: #dbdbdb !important;\n  }\n"]))),ze=$.a.div(v||(v=Object(Z.a)(["\n    margin : 10px 0px;\n    box-sizing: border-box;\n    width : 100%;\n    padding : 20px 32px;\n"]))),Se=$.a.div(w||(w=Object(Z.a)(["\n    display : flex;\n    flex-direction: row;\n    margin-bottom : 35px;\n"]))),Ce=$.a.div(y||(y=Object(Z.a)(["\n    font-size : 28px;\n    color : white;\n    font-weight: 600;\n"]))),Ee=$.a.select(k||(k=Object(Z.a)(["\n  margin-left : 50px;\n  display: block;\n  font-size: 13px;\n  font-family: sans-serif;\n  font-weight: 700;\n  color: #efefef;\n  line-height: 1.3;\n  padding: .6em 1.4em .5em .8em;\n  width: 120px;\n  max-width: 100%;\n  box-sizing: border-box;\n  border: 1px solid white;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);\n  border-radius: 1px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  height: 30px;\n  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n  linear-gradient(to bottom, #1d1d1d 0%, #2d2d2d 100%);\n  background-repeat: no-repeat, repeat;\n  background-position: right .7em top 50%, 0 0;\n  background-size: .65em auto, 100%;\n\n  &:hover {\n    border-color: #888;\n  }\n\n  &:focus {\n    border-color: #aaa;\n    outline: none;\n  }\n\n  option {\n    font-weight: normal;\n  }\n"]))),Ie=$.a.div(z||(z=Object(Z.a)(["\n  width: 260px;\n  height: ",";\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background: #1d1d1d;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  position: absolute;\n  transform: ",";\n  z-index: 101;\n  opacity: ",";\n\n  transition: ease-in opacity 0.1s, ease-in height 0.1s, ease-in transform 0.1s;\n  transition-delay: 100ms;\n"])),(function(e){return e.expanded?"120px":"1px"}),(function(e){return e.expanded?"scale(1.4)":"scale(1)"}),(function(e){return e.expanded?1:0})),Ae=$.a.div(S||(S=Object(Z.a)(["\n  border: 1px solid white;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px 5px;\n  color: white;\n  background: #353535;\n  cursor: pointer;\n\n  &:hover {\n    background: #919191;;\n  }\n\n  &:active {\n    background: #292929;\n  }\n"]))),Ne=$.a.div(C||(C=Object(Z.a)(["\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    z-index: ",";\n    visibility: ",";\n    background: ",";\n    transition: linear background 1.3s;\n"])),(function(e){return e.timer<4?302:-2}),(function(e){return e.timer<4?"visible":"hidden"}),(function(e){return e.timer<4?"rgba(0,0,0,1)":"rgba(0,0,0,0)"})),Pe=$.a.div(E||(E=Object(Z.a)(["\n  position: fixed;\n  right: 50px;\n  top: 30px;\n  font-size: 34px;\n  color: white;\n  cursor : pointer;\n  \n  &:hover {\n    color: #c3c3c3;\n  }\n"]))),Te=$.a.img(I||(I=Object(Z.a)(["\n    border-radius: 6px;\n    width : 260px;\n    height : 180px;\n    object-fit: cover;\n    transition : ease-in transform 0.2s;\n    transform : ",";\n    box-shadow: ",";\n    z-index : ",";\n    position : relative;\n    cursor : pointer;\n"])),(function(e){return e.expanded?"scale(1.4)":"scale(1)"}),(function(e){return e.expanded?"rgba(0, 0, 0, 0.95) 0px 5px 15px":null}),(function(e){return e.expanded?99:1})),Fe=$.a.h1(A||(A=Object(Z.a)(["\n  position: absolute;\n  left: 20px;\n  top: 34px;\n  margin: 0;\n  color: white;\n  font-size: 22px;\n  transform : ",";\n  transition : ease-in transform 0.2s;\n  z-index : ",";\n  width: 80px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #3b3b3b;\n  font-family : ",";\n"])),(function(e){return e.expanded?"scale(1.4)":"scale(1)"}),(function(e){return e.expanded?101:98}),(function(e){return e.font})),Re=$.a.div(N||(N=Object(Z.a)(["\n    margin : 10px 12px;\n    position : relative;\n"]))),De=t.p+"static/media/userIcon.b36331ae.jpg",Le=t(81),Me=t(80),Je=t(128),Be=t(139),He=t(130),Ve=t(140),Ue=t(131),Xe=t(132),Ge=t(133),_e=t(84),qe=t(129),Ke=t(13),Ye=t(24),Qe=t(127),We="/actions/IS_LOADING",Ze=function(e){return{type:We,payload:e}},$e="/actions/SET_PREFERENCE",en=function(e,n){return{type:$e,payload:{movieName:e,preference:n}}},nn={isLoading:!1,moviePreference:{}},tn="netrxis",rn=new Qe.a(localStorage.getItem(tn)?JSON.parse(localStorage.getItem(tn)):nn),cn=function(e){var n,t=e.type,i=e.payload,r=rn.getValue();switch(t){case We:n=Object(Ye.a)(Object(Ye.a)({},r),{},{isLoading:i});break;case $e:var c=i.movieName,o=i.preference;n=Object(Ye.a)(Object(Ye.a)({},r),{},{moviePreference:Object(Ye.a)(Object(Ye.a)({},r.moviePreference),{},Object(Ke.a)({},c,o))});break;default:n=Object(Ye.a)({},r)}localStorage.setItem(tn,JSON.stringify(n)),rn.next(n)},on=new U.a,an=new U.a,sn=new U.a,bn=on.pipe(Object(W.a)((function(e){return e.target.value})),Object(Je.a)(1e3),Object(Be.a)("")),dn=an.pipe(Object(W.a)((function(e){return e.target.value})),Object(Be.a)("")),ln=sn.pipe(Object(Be.a)("movies")),jn=Object(_e.a)([bn,dn,ln]).pipe(Object(Y.a)((function(){return cn(Ze(!0))})),Object(Q.a)((function(e){var n=Object(V.a)(e,3),t=n[0],i=n[1],r=n[2];return _.a.getJSON("https://netflixcloneapi.onrender.com/video/list?term=".concat(t,"&select=").concat(i,"&type=").concat(r))})),Object(Y.a)((function(){return cn(Ze(!1))}))),un=new U.a,pn=new U.a,xn=un.pipe(Object(Q.a)((function(){return Object(qe.a)(1e3)})),Object(He.a)(-1),Object(Ve.a)((function(e,n){return e+n}),4),Object(Ue.a)((function(e){return e>=0})),Object(Be.a)(4),Object(Xe.a)(pn),Object(Ge.a)()),hn=$.a.input(P||(P=Object(Z.a)(["\n  width: ",";\n  height: 21px;\n  color: #eeeeee;\n  opacity: ",";\n  background: #292929;\n  outline: none;\n  border: 1px solid white;\n  margin-right: 12px;\n  padding: 6px 10px 6px 30px;\n  transition: ease width 1s, ease opacity 0.6s;\n  float : right;\n  border-radius: 1px;\n"])),(function(e){return e.isActive?"100%":"0%"}),(function(e){return e.isActive?"1":"0"})),On=function(){var e=Object(M.useState)(!1),n=Object(V.a)(e,2),t=n[0],i=n[1],r=Object(M.useState)(""),c=Object(V.a)(r,2),o=c[0],a=c[1];return Object(be.jsxs)("div",{style:{width:t?"220px":"80px",position:"relative"},children:[Object(be.jsx)(hn,{value:o,onChange:function(e){a(e.target.value),bn.next(e)},placeholder:"Titles, peoples, genres",isActive:t}),Object(be.jsx)(Me.a,{onClick:function(){return i(!t)},style:{position:"absolute",top:"7px",marginRight:"24px",cursor:"pointer",right:"12px",transform:t?"translateX(-211px)":null,transition:"ease transform 1s",transitionDelay:"20ms"},size:"1.3em"})]})},fn=function(){var e=Object(M.useState)("Movies"),n=Object(V.a)(e,2),t=n[0],i=n[1],r=Object(M.useState)(""),c=Object(V.a)(r,2),o=c[0],a=c[1],s=Object(K.n)(),b=function(e){i(e),ln.next(e)};return Object(be.jsxs)(be.Fragment,{children:[Object(be.jsxs)(xe,{children:[Object(be.jsxs)(fe,{children:[Object(be.jsx)(he,{alt:"NetRXis",src:"https://fontmeme.com/permalink/211110/e87c8a1e2bbb91c5a9ee56f8152b5125.png"}),Object(be.jsx)(Oe,{onClick:function(){return b("Movies")},isActive:"Movies"===t,children:"Movies"}),Object(be.jsx)(Oe,{onClick:function(){return b("TVShows")},isActive:"TV Shows"===t,children:"TV Shows"}),Object(be.jsx)(Oe,{onClick:function(){return b("New-Popular")},isActive:"New&Popular"===t,children:"New&Popular"})]}),Object(be.jsxs)(fe,{children:[Object(be.jsx)(On,{}),Object(be.jsx)(Oe,{children:"Kids"}),Object(be.jsx)("div",{style:{margin:"0px 22px",position:"relative",top:"2px"},children:Object(be.jsx)(Le.a,{size:"1.3em"})}),Object(be.jsx)(me,{onClick:function(){return s("/user")},alt:"User Icon",style:{width:"30px",borderRadius:"6px"},src:De})]})]}),Object(be.jsx)("div",{style:{marginLeft:"50px"},children:Object(be.jsxs)(we,{style:{height:"100px",marginBottom:"80px"},children:[Object(be.jsx)("h1",{style:{color:"white"},children:"Movies"}),Object(be.jsxs)(Ee,{value:o,onChange:function(e){a(e.target.value),dn.next(e)},children:[Object(be.jsx)("option",{value:"",children:"Genres"}),Object(be.jsx)("option",{value:"comedy",children:"Comedy"}),Object(be.jsx)("option",{value:"adventure",children:"Adventure"}),Object(be.jsx)("option",{value:"romance",children:"Romance"}),Object(be.jsx)("option",{value:"scifi",children:"SciFi"}),Object(be.jsx)("option",{value:"horror",children:"Horror"}),Object(be.jsx)("option",{value:"drama",children:"Drama"})]})]})})]})},gn=t(83),mn=t(23),vn=t(82),wn=t(134),yn=t(135),kn=t(136),zn=t(137),Sn=function(){var e=Object(M.useState)(null),n=Object(V.a)(e,2),t=n[0],i=n[1];return Object(M.useEffect)((function(){var e=rn.subscribe((function(e){i(Object(Ye.a)({},e))}));return function(){return e.unsubscribe()}}),[]),[t,cn]},Cn=function(e){var n=e.movie,t=Sn(),i=Object(V.a)(t,2),r=(i[0],i[1]),c=Object(M.useRef)(null),o=Object(M.useState)(!1),a=Object(V.a)(o,2),s=a[0],b=a[1];return Object(M.useEffect)((function(){var e=Object(wn.a)(c.current,"mouseenter"),n=Object(wn.a)(c.current,"mouseleave"),t=Object(wn.a)(c.current,"mousemove"),i=e.pipe(Object(W.a)((function(e){return!0})),Object(yn.a)(n.pipe(Object(W.a)((function(e){return!1}))))),r=t.pipe(Object(kn.a)(i),Object(Je.a)(500),Object(zn.a)((function(e){var n=Object(V.a)(e,2);n[0];return n[1]})),Object(W.a)((function(e){var n=Object(V.a)(e,2),t=n[0];n[1];return t}))).subscribe((function(e){b(!0)})),o=n.subscribe((function(){return b(!1)}));return function(){o.unsubscribe(),r.unsubscribe()}}),[b]),Object(be.jsxs)(Re,{expanded:s,ref:c,children:[Object(be.jsx)(Fe,{font:n.font,expanded:s,children:n.name}),Object(be.jsx)(Te,{expanded:s,loading:"lazy",src:n.image}),Object(be.jsxs)(Ie,{expanded:s,children:[Object(be.jsxs)("div",{children:[Object(be.jsx)(Ae,{style:{background:"white",color:"black"},onClick:function(){xn.next()},children:Object(be.jsx)(mn.c,{})}),Object(be.jsx)(Ae,{onClick:function(){return r(en(n.name,!0))},children:Object(be.jsx)(mn.b,{})}),Object(be.jsx)(Ae,{onClick:function(){return r(en(n.name,!1))},children:Object(be.jsx)(mn.a,{})}),Object(be.jsx)(Ae,{children:Object(be.jsx)(mn.d,{})})]}),Object(be.jsxs)("div",{style:{color:"white",fontSize:"13px",marginTop:"5px"},children:[Object(be.jsx)("span",{style:{color:"green"},children:Object(be.jsx)("strong",{children:"97% Match  "})}),Object(be.jsx)("span",{children:"1h45m "}),Object(be.jsx)("span",{children:" HD "})]}),Object(be.jsx)("div",{style:{color:"white",fontSize:"11px",marginTop:"8px"},children:Object(be.jsx)("span",{children:" *Comedy *Irrevent *New"})})]})]})},En=Object($.b)(T||(T=Object(Z.a)(["\n  0% {\n    background-position: -468px 0;\n  }\n\n  100% {\n    background-position: 468px 0;\n  }\n"]))),In=$.a.div(F||(F=Object(Z.a)(["\n  width: 260px;\n  height: 150px;\n  margin: 10px 6px;\n\n  background: #1c1c1c;\n  background-image: linear-gradient(to right, #1c1c1c 0%, #2b2929 20%, #1c1c1c 40%, #1c1c1c 100%);\n  background-repeat: no-repeat;\n  background-size: 800px 204px;\n  display: inline-block;\n  position: relative;\n  border-radius: 4px;\n\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: ",";\n  -webkit-animation-timing-function: linear;\n"])),En),An=function(){return Object(be.jsx)(In,{})},Nn=function(){var e,n,t=Sn(),i=Object(V.a)(t,1)[0],r=Object(M.useState)(null),c=Object(V.a)(r,2),o=c[0],a=c[1],s=Object(M.useState)(4),b=Object(V.a)(s,2),d=b[0],l=b[1],j=Object(M.useRef)(null),u=Object(K.n)(),p=i&&!(null!==i&&void 0!==i&&i.isLoading);return Object(M.useEffect)((function(){var e=xn.subscribe((function(e){l(e),0===e&&(console.log("Loading movie"),u("/watch"))}));return function(){return e.unsubscribe()}}),[u]),Object(M.useEffect)((function(){var e=null,n=jn.subscribe((function(n){a(n),setTimeout((function(){return j.current.play()}),500);var t=Object(wn.a)(j.current,"timeupdate");e=t.subscribe((function(e){e.target.currentTime>84&&(j.current.poster=n.main.image,j.current.src="")}))}));return function(){var t;n.unsubscribe(),null===(t=e)||void 0===t||t.unsubscribe()}}),[]),Object(M.useEffect)((function(){j.current&&j.current.load()}),[o]),Object(be.jsxs)("div",{children:[Object(be.jsx)(Ne,{timer:d,children:Object(be.jsx)(Pe,{onClick:function(){return pn.next()},children:Object(be.jsx)(vn.a,{})})}),Object(be.jsx)(fn,{}),o&&Object(be.jsxs)(ge,{style:{display:o.hasOwnProperty("main")&&p?"block":"none"},muted:!0,loop:!0,ref:j,poster:null===o||void 0===o||null===(e=o.main)||void 0===e?void 0:e.image,controls:!1,children:[Object(be.jsx)("source",{src:null===o||void 0===o||null===(n=o.main)||void 0===n?void 0:n.url}),"/>"]}),p&&o?Object(be.jsxs)(be.Fragment,{children:[o.main&&Object(be.jsxs)(ve,{children:[Object(be.jsx)("div",{children:Object(be.jsx)(ye,{children:null===o||void 0===o?void 0:o.main.title})}),Object(be.jsxs)("div",{children:[Object(be.jsxs)(ke,{onClick:function(){return xn.next()},style:{width:"110px",background:"white",color:"black"},children:[Object(be.jsx)(mn.c,{size:"1.4em"})," Play"]}),Object(be.jsxs)(ke,{style:{width:"170px",background:"gray",color:"white",opacity:"0.9"},children:[Object(be.jsx)(gn.a,{size:"1.4em"})," More Info"]})]})]}),Object(be.jsx)(ze,{children:o.lists.map((function(e){return Object(be.jsxs)(be.Fragment,{children:[Object(be.jsx)(Ce,{children:e.title}),Object(be.jsx)(Se,{children:e.movies.map((function(e){return Object(be.jsx)(Cn,{movie:e})}))})]})}))})]}):Object(be.jsx)(Se,{style:{marginTop:"50px"},children:Object(pe.a)(Array(6).keys()).map((function(){return Object(be.jsx)(An,{})}))})]})},Pn=$.a.div(R||(R=Object(Z.a)(["\n    width : 100%;\n    padding : 20px 50px;\n    color : white;\n"]))),Tn=function(){var e=Sn(),n=Object(V.a)(e,1)[0];return Object(be.jsxs)(Pn,{children:[Object(be.jsx)("h2",{children:"Hello, User! Your movie preference is :"}),n&&(null===n||void 0===n?void 0:n.moviePreference)&&Object.keys(n.moviePreference).map((function(e){return Object(be.jsxs)("div",{children:[e,n.moviePreference[e]?Object(be.jsx)(mn.b,{}):Object(be.jsx)(mn.a,{})]})}))]})},Fn=$.a.div(D||(D=Object(Z.a)(["\n    width : 100%;\n"]))),Rn=$.a.video(L||(L=Object(Z.a)(["\n    width : 100%;\n    height : 99vh;\n    object-fit: cover;\n"]))),Dn=function(){return Object(be.jsx)(Fn,{children:Object(be.jsx)(Rn,{controls:!0,src:"https://netflixcloneapi.onrender.com/video/watch"})})};var Ln=function(){return Object(be.jsx)(ue.a,{basename:"/rxJS-netflix-clone",children:Object(be.jsxs)(K.c,{children:[Object(be.jsx)(K.a,{exact:!0,path:"/",element:Object(be.jsx)(je,{})}),Object(be.jsx)(K.a,{path:"/browse",element:Object(be.jsx)(Nn,{})}),Object(be.jsx)(K.a,{path:"/user",element:Object(be.jsx)(Tn,{})}),Object(be.jsx)(K.a,{path:"/watch",element:Object(be.jsx)(Dn,{})})]})})};H.a.render(Object(be.jsx)(J.a.StrictMode,{children:Object(be.jsx)(Ln,{})}),document.getElementById("root"))},91:function(e,n,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.0816d5c2.chunk.js.map