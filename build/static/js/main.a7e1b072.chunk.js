(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{19:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(12),r=c.n(a),i=(c(19),c(7)),l=c(13),o=c(1),j=[{id:1,url:"https://twitter.com/MoralesZuarez28",icon:Object(o.jsx)(i.a,{})},{id:2,url:"https://www.facebook.com/manuel.moraleszuarez/",icon:Object(o.jsx)(i.d,{})},{id:3,url:"https://www.linkedin.com/in/manuel-esteban-morales-zuarez-68573b189/",icon:Object(o.jsx)(i.b,{})},{id:4,url:"https://github.com/Angstromico",icon:Object(o.jsx)(l.a,{})}],b=function(){var e=(new Date).getFullYear();return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("nav",{className:"nav navbar",children:Object(o.jsx)("div",{className:"nav-center",children:Object(o.jsx)("ul",{className:"social-icons",children:j.map((function(e){var t=e.id,c=e.url,s=e.icon;return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:c,children:s})},t)}))})})}),Object(o.jsxs)("p",{className:"copyright",children:["Manuel Morales Web Develper All the Rights Reserve ",e,Object(o.jsx)(i.c,{})]})]})},d=c(6),u=c(3),h=c(14),m=function(e){var t=e.image,c=e.name,s=e.id,n=e.info,a=e.glass;return Object(o.jsxs)("article",{className:"cocktail",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{src:t,alt:c})}),Object(o.jsxs)("div",{className:"cocktail-footer",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("h4",{children:a}),Object(o.jsx)("p",{children:n}),Object(o.jsx)(d.b,{to:"/cocktail/".concat(s),className:"btn btn-primary btn-details",children:"More Details"})]})]})},O=function(){return Object(o.jsx)("div",{className:"loader"})},x=c(8),p=c.n(x),f=c(9),v=c(4),g=n.a.createContext(),k=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(v.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)("b"),l=Object(v.a)(i,2),j=l[0],b=l[1],d=Object(s.useState)([]),u=Object(v.a)(d,2),h=u[0],m=u[1],O=Object(s.useCallback)(Object(f.a)(p.a.mark((function e(){var t,c,s,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(j));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,(s=c.drinks)?(n=s.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,strGlass:e.strGlass}})),m(n)):m([]),r(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),r(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[j]);return Object(s.useEffect)((function(){O()}),[j,O]),Object(o.jsx)(g.Provider,{value:{loading:a,cocktails:h,setSearch:b},children:t})},N=function(){return Object(s.useContext)(g)},w=function(){var e=N(),t=e.cocktails;return e.loading?Object(o.jsx)(O,{}):t.length<1?Object(o.jsx)("h2",{className:"section-title",children:"no cocktails matched your search criteria"}):Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("h2",{className:"section-title",children:"coktails"}),Object(o.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(o.jsx)(m,Object(h.a)({},e),e.id)}))})]})},y=function(){var e=N().setSearch,t=n.a.useRef("");n.a.useEffect((function(){t.current.focus()}),[]);return Object(o.jsx)("section",{className:"section search",children:Object(o.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Search your favorite cocktail"}),Object(o.jsx)("input",{type:"text",id:"name",ref:t,onChange:function(){e(t.current.value)}})]})})})},S=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(y,{}),Object(o.jsx)(w,{})]})},D=function(){return Object(o.jsxs)("section",{className:"section about-section",children:[Object(o.jsx)("h1",{className:"section-title",children:"about us"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum tempore ducimus inventore ullam placeat repellendus, blanditiis nesciunt asperiores quia repellat mollitia dolor quaerat architecto sequi voluptas modi totam assumenda!"})]})},I="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",z=function(){var e=Object(u.g)().id,t=Object(s.useState)(!1),c=Object(v.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(null),l=Object(v.a)(i,2),j=l[0],b=l[1];if(n.a.useEffect((function(){function t(){return(t=Object(f.a)(p.a.mark((function t(){var c,s,n,a,i,l,o,j,d,u,h,m,O,x;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(I).concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(s=t.sent).drinks?(n=s.drinks[0],a=n.strDrink,i=n.strDrinkThumb,l=n.strAlcoholic,o=n.strCategry,j=n.strGlass,d=n.strInstructions,u=n.strIngredient1,h=n.strIngredient2,m=n.strIngredient3,O=n.strIngredient4,x=n.strIngredient5,b({name:a,image:i,info:l,category:o,glass:j,instructions:d,ingredients:[u,h,m,O,x]})):b(null),r(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),r(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}r(!0),function(){t.apply(this,arguments)}()}),[e]),a)return Object(o.jsx)(O,{});if(!j)return Object(o.jsx)("h2",{className:"section-title",children:"No cocktail found for this one"});var h=j.name,m=j.image,x=j.info,g=j.category,k=j.glass,N=j.instructions,w=j.ingredients;return Object(o.jsxs)("section",{className:"section cocktail-section",children:[Object(o.jsx)(d.b,{to:"/",className:"btn btn-primary",children:"back homepage"}),Object(o.jsxs)("h2",{className:"section-title",children:[h," "]}),Object(o.jsxs)("div",{className:"drink",children:[Object(o.jsx)("img",{src:m,alt:h,className:"img-transform"}),Object(o.jsxs)("div",{className:"drink-info",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"name:"}),h]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"info:"}),x]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"category:"}),g]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"glass:"}),k]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"instructions:"}),N]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"ingredients:"}),w.map((function(e,t){return e?Object(o.jsx)("span",{children:e},t):null}))]})]})]})]})},A=function(){return Object(o.jsx)("section",{className:"section error-page",children:Object(o.jsxs)("div",{className:"error-container",children:[Object(o.jsx)("h1",{children:"ooopss! This is a Wrong Patch"}),Object(o.jsx)(d.b,{to:"/",className:"btn btn-primary",children:"back to home"})]})})},C=c.p+"static/media/logo.5bb3b58e.svg",M=function(){return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"nav-center",children:[Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("img",{src:C,alt:"cocktails",className:"logo"})}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/about",children:"About"})})]})]})})};var E=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsx)(M,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",element:Object(o.jsx)(S,{})}),Object(o.jsx)(u.a,{path:"/about",element:Object(o.jsx)(D,{})}),Object(o.jsx)(u.a,{path:"/cocktail/:id",element:Object(o.jsx)(z,{})}),Object(o.jsx)(u.a,{path:"/*",element:Object(o.jsx)(A,{})})]})]}),Object(o.jsx)(b,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(k,{children:Object(o.jsx)(E,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a7e1b072.chunk.js.map