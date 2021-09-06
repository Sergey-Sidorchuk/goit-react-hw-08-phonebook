(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{86:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(36);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(e,t,n){e.exports={form:"Form_form__15zI-",label:"Form_label__1zX3H",input:"Form_input__2u3cu",btn:"Form_btn__1A_s9"}},88:function(e,t,n){e.exports={label:"Filter_label__vYL6s",input:"Filter_input__1J45Z"}},89:function(e,t,n){e.exports={name:"Contact_name__fSt1S",btn:"Contact_btn__1VrmJ"}},90:function(e,t,n){e.exports={list:"Contacts_list__2AU3e",item:"Contacts_item__1eq9_"}},91:function(e,t,n){e.exports={bar:"Phonebook_bar__1USYd"}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n(0),r=n(7),c=n(47),s=n(37),o=n(35),i=n(86),b=n(87),l=n.n(b),u=n(1);function j(){var e=Object(r.b)(),t=Object(r.c)(o.a.getContacts),n=Object(a.useState)(""),c=Object(i.a)(n,2),b=c[0],j=c[1],m=Object(a.useState)(""),d=Object(i.a)(m,2),f=d[0],O=d[1],h=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":j(a);break;case"number":O(a);break;default:return}};return Object(u.jsxs)("form",{className:l.a.form,onSubmit:function(n){if(n.preventDefault(),b&&f){if(t.map((function(e){return e.name})).includes(b))return alert("".concat(b," is already in contacs."));e(s.a.addContact({name:b,number:f})),j(""),O("")}},children:[Object(u.jsxs)("label",{className:l.a.label,children:["Name",Object(u.jsx)("input",{className:l.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:b,onChange:h})]}),Object(u.jsxs)("label",{className:l.a.label,children:["Number",Object(u.jsx)("input",{className:l.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:f,onChange:h})]}),Object(u.jsx)("button",{className:l.a.btn,typy:"submit",children:"Add contact"})]})}var m=n(38),d=n(88),f=n.n(d),O=function(){var e=Object(r.b)(),t=Object(r.c)(o.a.getFilter);return Object(u.jsxs)("label",{className:f.a.label,children:["Find contacts by name",Object(u.jsx)("input",{className:f.a.input,type:"text",onChange:function(t){return e(Object(m.d)(t.target.value))},value:t,name:"filter"})]})},h=n(89),p=n.n(h),x=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:p.a.name,children:[t,": ",Object(u.jsx)("span",{children:n})]}),Object(u.jsx)("button",{className:p.a.btn,onClick:a,children:"Delete"})]})},_=n(90),v=n.n(_),y=function(){var e=Object(r.b)(),t=Object(r.c)(m.c.getVisibleContacts);return Object(u.jsx)("ul",{className:v.a.list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(u.jsx)("li",{className:v.a.item,children:Object(u.jsx)(x,{name:a,number:r,onDeleteContact:function(){return function(t){return e(m.a.deleteContact(t))}(n)}})},n)}))})},C=function(){return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("div",{style:{borderTopColor:"transparent"},className:"border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20"}),"... Loading"]})},g=n(91),N=n.n(g);function A(){var e=Object(r.b)(),t=Object(r.c)(o.a.getLoading);return Object(a.useEffect)((function(){e(s.a.fetchContacts())}),[e]),Object(u.jsxs)("div",{className:N.a.bar,children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(j,{}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(O,{}),Object(u.jsx)(y,{})]}):Object(u.jsx)(C,{})]})}function F(e){var t=Object(r.b)();return Object(a.useEffect)((function(){return t(m.a.fetchContacts())}),[t]),Object(u.jsx)(c.a,{children:Object(u.jsx)(A,{})})}}}]);
//# sourceMappingURL=3.79061f08.chunk.js.map