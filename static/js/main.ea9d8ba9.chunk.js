(this["webpackJsonpiarani-notes"]=this["webpackJsonpiarani-notes"]||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},25:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(25),n(4)),s=n(3),u=(n(31),function(e){return r.a.createElement("div",{className:"userBack"},r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"userBox"},r.a.createElement("h2",null,"Enter Your Name"),r.a.createElement("form",{className:"form-group",onSubmit:e.onsubmit},r.a.createElement("input",{className:"form-control",type:"text",name:"name"}),r.a.createElement("button",{className:"btn btn-outline-primary mt-5",type:"submit"},"Submit")))))}),i=n(15),m=n.n(i),E=Object(s.a)([function(e){return e.user}],(function(e){return e.currentUser})),b=Object(s.a)([function(e){return e.Notes}],(function(e){return e.allnotes})),d=n(18),f=(n(33),function(e){var t=Object(a.useState)("none"),n=Object(d.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"addForm"},r.a.createElement("form",{className:"form-group",onSubmit:e.onsubmit},r.a.createElement("h3",{className:"form-heading"},"Add a note here..."),r.a.createElement("input",{text:"text",name:"title",className:"form-control",placeholder:"Note title*",onClick:function(){c("block")},required:!0,autoComplete:"off"}),r.a.createElement("textarea",{name:"content",id:"",cols:"30",rows:"4",className:"form-control mt-2",placeholder:"Note Content*",style:{display:"".concat(l)},required:!0}),r.a.createElement("button",{className:"btn btn-outline-success mt-3 mx-auto",style:{display:"".concat(l)},onClick:function(){c("none")}},"ADD")))}),N=(n(34),function(e){var t=e.title,n=e.content,a=e.id,l=e.onclick;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"NoteToDisplay mx-5"},r.a.createElement("h3",{className:"NoteTitle"},t),r.a.createElement("hr",null),r.a.createElement("p",{className:"NoteContent"},n),r.a.createElement("button",{onClick:function(){return l(a)},className:"btn btn-warning btn-sm"},"Remove")))}),p=(n(35),Object(s.b)({currentUser:E,allNotes:b})),v=Object(o.b)(p,(function(e){return{setAllNotes:function(t){return e(function(e){return{type:"ADD_NEW_NOTE",payload:e}}(t))},NoteToBeDelete:function(t){return e({type:"DELETE_A_NOTE",payload:t})},RemoveCurrentUser:function(){e({type:"LOGOUT_CURRENT_USER"}),e({type:"DELETE_ALL_NOTE"})}}}))((function(e){var t=e.currentUser,n=e.setAllNotes,a=e.allNotes,l=e.NoteToBeDelete,c=e.RemoveCurrentUser,o=function(e){console.log(e),l(e)};return r.a.createElement("div",null,r.a.createElement("div",{className:"notes"},r.a.createElement("div",{className:"inner"},t?r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"User-Name"},"Hello! ",t)," ",r.a.createElement("span",{className:" btn btn-danger btn-sm float-right m-2",onClick:c},"LogOut")):null,r.a.createElement(f,{onsubmit:function(e){e.preventDefault();var t={id:m()(),title:e.target[0].value,content:e.target[1].value};n(t),e.target[0].value="",e.target[1].value=""}}),r.a.createElement("div",{className:"row text-center"},a.length>0?a.map((function(e){return r.a.createElement(N,{key:e.id,title:e.title,content:e.content,id:e.id,onclick:o})})):null))),r.a.createElement("footer",null,"\u24b8 Copyright: 2020: All Rights Reserved ",r.a.createElement("br",null)," Made with ",r.a.createElement("span",null,"\u2764 "),"By"," ",r.a.createElement("a",{href:"https://gyanendra.tech",target:"_blank",rel:"noopener noreferrer"},"Gyanendra")))}));n(36),n(37);var O=Object(s.b)({currentUser:E}),y=Object(o.b)(O,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))((function(e){var t=e.setCurrentUser,n=e.currentUser;return r.a.createElement("div",{className:"App"},n?null:r.a.createElement(u,{onsubmit:function(e){e.preventDefault();var n=e.target[0].value;t(n)}}),n?r.a.createElement(v,null):null)})),h=n(2),g=(n(38),n(11)),j=n(16),U=n.n(j),T=n(1),_={currentUser:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_USER"===t.type?Object(T.a)(Object(T.a)({},e),{},{currentUser:t.payload}):"LOGOUT_CURRENT_USER"===t.type?Object(T.a)(Object(T.a)({},e),{},{currentUser:""}):e},C=n(19),D={allnotes:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return"ADD_NEW_NOTE"===t.type?Object(T.a)(Object(T.a)({},e),{},{allnotes:[].concat(Object(C.a)(e.allnotes),[Object(T.a)({},t.payload)])}):"DELETE_A_NOTE"===t.type?Object(T.a)(Object(T.a)({},e),{},{allnotes:e.allnotes.filter((function(e){return e.id!==t.payload}))}):"DELETE_ALL_NOTE"===t.type?Object(T.a)(Object(T.a)({},e),{},{allnotes:[]}):e},A=Object(h.c)({user:R,Notes:k}),L={key:"root",storage:U.a,whitelist:["user","Notes"]},S=Object(g.a)(L,A);var x=Object(h.d)(S,h.a.apply(void 0,[])),w=Object(g.b)(x),B=n(17);c.a.render(r.a.createElement(o.a,{store:x},r.a.createElement(B.a,{persistor:w},r.a.createElement(y,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ea9d8ba9.chunk.js.map