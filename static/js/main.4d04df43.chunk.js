(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{2:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return b})),n.d(e,"d",(function(){return j})),n.d(e,"j",(function(){return d}));var c=n(5),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),u=Object(c.b)("contacts/fetchContactError"),i=Object(c.b)("contacts/addContactRequest"),o=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),b=Object(c.b)("contacts/deleteContactSuccess"),j=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/filterContact")},25:function(t,e,n){t.exports={link:"Navigation_link__3I9qM",activeLink:"Navigation_activeLink__HZuEh"}},26:function(t,e,n){t.exports={link:"AuthNav_link__1QVjm",activeLink:"AuthNav_activeLink__Yq24b"}},31:function(t,e,n){t.exports={container:"UserMenu_container__1Xc5y",avatar:"UserMenu_avatar__3Ctlz",name:"UserMenu_name__23qZ0"}},35:function(t,e,n){"use strict";var c=n(22),r=function(t){return t.contacts.item},a=function(t){return t.contacts.filter},u={getContacts:r,getFilter:a,getError:function(t){return t.contacts.error},getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(c.a)([r,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))};e.a=u},37:function(t,e,n){"use strict";var c=n(10),r=n.n(c),a=n(18),u=n(16),i=n.n(u),o=n(2),s={fetchContacts:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.h)()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(o.i)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(o.g)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(a.a)(r.a.mark((function t(c){var a,u,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(Object(o.b)()),t.prev=2,t.next=5,i.a.post("/contacts",a);case 5:u=t.sent,s=u.data,c(Object(o.c)(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(Object(o.a)(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(o.e)()),e.prev=1,e.next=4,i.a.delete("/contacts/".concat(t));case 4:n(Object(o.f)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(o.d)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}};e.a=s},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return u.a})),n.d(e,"c",(function(){return i.a})),n.d(e,"d",(function(){return o.j})),n.d(e,"b",(function(){return p}));var c,r,a,u=n(37),i=n(35),o=n(2),s=n(3),l=n(29),b=n(9),j=n(5),d=Object(j.d)([],(c={},Object(s.a)(c,o.i,(function(t,e){return e.payload})),Object(s.a)(c,o.c,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(s.a)(c,o.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),f=Object(j.d)("",Object(s.a)({},o.j,(function(t,e){return e.payload}))),O=Object(j.d)(!1,(r={},Object(s.a)(r,o.h,(function(){return!0})),Object(s.a)(r,o.i,(function(){return!1})),Object(s.a)(r,o.g,(function(){return!1})),Object(s.a)(r,o.b,(function(){return!0})),Object(s.a)(r,o.c,(function(){return!1})),Object(s.a)(r,o.a,(function(){return!1})),Object(s.a)(r,o.f,(function(){return!1})),Object(s.a)(r,o.e,(function(){return!0})),Object(s.a)(r,o.d,(function(){return!1})),r)),h=Object(j.d)(null,(a={},Object(s.a)(a,o.h,(function(){return null})),Object(s.a)(a,o.g,(function(t,e){return e.payload.response.data})),Object(s.a)(a,o.b,(function(){return null})),Object(s.a)(a,o.a,(function(t,e){return e.payload.response.data})),Object(s.a)(a,o.e,(function(){return null})),Object(s.a)(a,o.d,(function(t,e){return e.payload.response.data})),a)),p=Object(b.b)({item:d,filter:f,loading:O,error:h})},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var c=n(49),r=n.n(c),a=n(1),u=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},49:function(t,e,n){t.exports={container:"Container_container__zH1DT"}},51:function(t,e,n){t.exports={header:"AppBar_header__3FCay"}},60:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return p}));var c=n(10),r=n.n(c),a=n(18),u=n(16),i=n.n(u),o=n(5);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),d=Object(o.c)("ayth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f={register:j,logOut:Object(o.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:b(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:d,fetchCurrentUser:Object(o.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},O={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getIsFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},h=n(3),p=Object(o.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(s={},Object(h.a)(s,f.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(h.a)(s,f.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(h.a)(s,f.logOut.fulfilled,(function(t){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(h.a)(s,f.fetchCurrentUser.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(h.a)(s,f.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(h.a)(s,f.fetchCurrentUser.rejected,(function(t){t.isFetchingCurrentUser=!1})),s)}).reducer},85:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(27),u=n.n(a),i=n(17),o=n(7),s=n(48),l=(n(60),n(6)),b=n(47),j=n(8),d=n(25),f=n.n(d),O=n(1);function h(){var t=Object(o.c)(j.c.getIsLoggedIn);return Object(O.jsxs)("nav",{children:[Object(O.jsx)(i.b,{to:"/",exact:!0,className:f.a.link,activeClassName:f.a.activeLink,children:"Home page"}),t&&Object(O.jsx)(i.b,{to:"/contacts",exact:!0,className:f.a.link,activeClassName:f.a.activeLink,children:"Contacts"})]})}var p=n.p+"static/media/defaultAvatar.1b18c63f.png",g=n(31),v=n.n(g);function x(){var t=Object(o.b)(),e=Object(o.c)(j.c.getUsername),n=Object(c.useCallback)((function(){return t(j.a.logOut())}),[t]);return Object(O.jsxs)("div",{style:v.a.container,children:[Object(O.jsx)("img",{src:p,alt:"avatar",width:"32",style:v.a.avatar}),Object(O.jsxs)("span",{style:v.a.name,children:["Welcome, ",e]}),Object(O.jsx)("button",{type:"button",onClick:n,children:"Exit"})]})}var k=n(26),m=n.n(k);function C(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(i.b,{to:"/register",exact:!0,style:m.a.link,activeStyle:m.a.activeLink,children:"Sign up"}),Object(O.jsx)(i.b,{to:"/login",exact:!0,style:m.a.link,activeStyle:m.a.activeLink,children:"Sign in"})]})}var y=n(51),_=n.n(y);function L(){var t=Object(o.c)(j.c.getIsLoggedIn);return Object(O.jsxs)("header",{style:_.a.header,children:[Object(O.jsx)(h,{}),t?Object(O.jsx)(x,{}):Object(O.jsx)(C,{})]})}var w=n(21),I=n(30),U=["children","redirectTo"];function S(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,r=Object(I.a)(t,U),a=Object(o.c)(j.c.getIsLoggedIn);return Object(O.jsx)(l.b,Object(w.a)(Object(w.a)({},r),{},{children:a?e:Object(O.jsx)(l.a,{to:c})}))}var F=["children","restricted","redirectTo"];function z(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,u=Object(I.a)(t,F),i=Object(o.c)(j.c.getIsLoggedIn)&&c;return Object(O.jsx)(l.b,Object(w.a)(Object(w.a)({},u),{},{children:i?Object(O.jsx)(l.a,{to:a}):e}))}var N=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,93))})),E=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,94))})),T=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,95))})),A=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,96))}));function q(){var t=Object(o.b)(),e=Object(o.c)(j.c.getIsFetchingCurrent);return Object(c.useEffect)((function(){t(j.a.fetchCurrentUser())}),[t]),Object(O.jsx)(b.a,{children:e?Object(O.jsx)("h1",{children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c React Skeleton"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L,{}),Object(O.jsx)(l.d,{children:Object(O.jsxs)(c.Suspense,{fallback:Object(O.jsx)("h2",{children:"Loading..."}),children:[Object(O.jsx)(z,{exact:!0,path:"/",children:Object(O.jsx)(N,{})}),Object(O.jsx)(z,{exact:!0,path:"/register",restricted:!0,children:Object(O.jsx)(E,{})}),Object(O.jsx)(z,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(S,{path:"/contacts",redirectTo:"/login",children:Object(O.jsx)(A,{})})]})})]})})}var R=n(29),M=n(5),B=n(19),H=n(52),V=n.n(H),J=n(38),W=Object(R.a)(Object(M.f)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),Z={key:"auth",storage:V.a,whitelist:["token"]},D=Object(M.a)({reducer:{auth:Object(B.g)(Z,j.b),contacts:J.b},middleware:W,devTools:!1}),Q=Object(B.h)(D);u.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(o.a,{store:D,children:Object(O.jsx)(s.a,{loading:null,persistor:Q,children:Object(O.jsx)(i.a,{children:Object(O.jsx)(q,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.4d04df43.chunk.js.map