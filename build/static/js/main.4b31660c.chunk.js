(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{15:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(17),r=a.n(n),s=a(11),i=(a(15),a(18).a.initializeApp({apiKey:"AIzaSyCx0fwcaeryny9OedZwUhJY7jevXHxVZ8o",authDomain:"form-fcdbf.firebaseapp.com",projectId:"form-fcdbf",storageBucket:"form-fcdbf.appspot.com",messagingSenderId:"28280338251",appId:"1:28280338251:web:be3bbe97a0eb94e7ed9ace"}).firestore()),b=a(4),j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),j=Object(s.a)(r,2),l=j[0],o=j[1],u=Object(c.useState)(""),d=Object(s.a)(u,2),p=d[0],h=d[1],m=Object(c.useState)(""),O=Object(s.a)(m,2),f=O[0],x=O[1],g=Object(c.useState)(!1),v=Object(s.a)(g,2),y=v[0],S=v[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),S(!0),i.collection("contacts").add({name:a,email:l,message:p,phone:f}).then((function(){S(!1),alert("Your message has been submitted\ud83d\udc4d")})).catch((function(e){alert(e.message),S(!1)})),n(""),o(""),h(""),x("")},children:[Object(b.jsx)("h1",{children:"Registration Form \ud83e\udd33"}),Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("span",{children:"*"})]}),Object(b.jsx)("input",{type:"text",placeholder:"Name",value:a,onChange:function(e){return n(e.target.value)},required:!0}),Object(b.jsxs)("label",{children:["Phone",Object(b.jsx)("span",{children:"*"})]}),Object(b.jsx)("input",{type:"text",placeholder:"Mobile",value:f,maxLength:"10",onChange:function(e){return x(e.target.value)},required:!0}),Object(b.jsxs)("label",{children:["Email",Object(b.jsx)("span",{children:"*"})]}),Object(b.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:function(e){return o(e.target.value)},required:!0}),Object(b.jsxs)("label",{children:["Message",Object(b.jsx)("span",{children:"*"})]}),Object(b.jsx)("textarea",{type:"text",placeholder:"Message",value:p,onChange:function(e){return h(e.target.value)},required:!0}),Object(b.jsx)("button",{type:"submit",style:{background:y?"#ccc":" rgb(2, 2, 110)"},children:"Submit"})]})})},l=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(j,{})})})};r.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4b31660c.chunk.js.map