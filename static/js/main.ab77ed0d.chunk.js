(this["webpackJsonpodin-shopping-cart"]=this["webpackJsonpodin-shopping-cart"]||[]).push([[0],{59:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(31),n=c.n(a),r=c(25),l=c.n(r),j=c(32),o=c(20),d=c(10),b=c(6),u=c(4),x=c(15),h=c(17),O=c(7),m=c(28),p=c(3),f=(c(59),c.p+"static/media/ALAT.cf138455.png"),g=c(35),v=c(0);function y(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)({height:window.innerHeight,width:window.innerWidth}),n=Object(d.a)(a,2),r=n[0],l=n[1],j=function(){var e=document.querySelector(".hamburger-menu"),t=document.querySelector(".nav-item");l({height:window.innerHeight,width:window.innerWidth}),r.width>800?(e.style.display="none",t.style.display="grid"):(e.style.display="grid",t.style.display="none")};Object(i.useEffect)((function(){return j(),console.log(r.width),window.addEventListener("resize",j()),j(),function(){window.removeEventListener("resize",j())}}),[]),Object(i.useEffect)((function(){var e=document.querySelector(".hamburger-item");document.querySelector(".header-div"),document.querySelector(".carousel");c?(e.style.display="grid",e.style.transform="translateX(0)"):e.style.display="none"}));var o=function(){s(!c)};return Object(v.jsxs)("div",{className:"header-div",children:[Object(v.jsx)("div",{className:"logo-div",children:Object(v.jsx)(b.b,{to:"/",children:Object(v.jsx)("img",{src:f,alt:"logo"})})}),Object(v.jsxs)("div",{className:"nav-item",children:[Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/catalog",children:"Catalog"})}),Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/popular",children:"Popular"})}),Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/about",children:"About"})}),Object(v.jsx)("li",{children:Object(v.jsx)(b.b,{to:"/news",children:"News"})})]})}),Object(v.jsxs)("div",{className:"header-icon-div",children:[Object(v.jsx)(b.b,{to:"/cart",children:Object(v.jsx)(p.a,{size:"2x",icon:["fas","shopping-bag"]})}),Object(v.jsx)(p.a,{size:"2x",icon:["fas","user"]})]})]}),Object(v.jsxs)("div",{className:"hamburger-menu",children:[Object(v.jsx)("div",{className:"hamburger",children:Object(v.jsx)(g.a,{className:"hamburger",toggled:c,toggle:s})}),Object(v.jsxs)("div",{className:"hamburger-item",children:[Object(v.jsx)("div",{children:Object(v.jsx)(b.b,{onClick:o,to:"/catalog",children:"Catalog"})}),Object(v.jsx)("div",{children:Object(v.jsx)(b.b,{onClick:o,to:"/popular",children:"Popular"})}),Object(v.jsx)("div",{children:Object(v.jsx)(b.b,{onClick:o,to:"/about",children:"About"})}),Object(v.jsx)("div",{children:Object(v.jsx)(b.b,{onClick:o,to:"/news",children:"News"})}),Object(v.jsxs)("div",{className:"hamburger-icon",children:[Object(v.jsx)(b.b,{onClick:o,to:"/cart",children:Object(v.jsx)(p.a,{size:"2x",icon:["fas","shopping-bag"]})}),Object(v.jsx)(p.a,{size:"2x",icon:["fas","user"]})]})]})]})]})}c(63),c(64),c(98);var N=c(34),w=c.n(N),C={post:null,error:"",description:""},z=function(e,t){switch(t.type){case"success":return{post:t.payload};case"error":return{post:"",error:"somethin went wrong"};default:return e}};function S(e){e.post,e.imgCarousel;var t=e.images,c=Object(i.useReducer)(z,C),s=Object(d.a)(c,2);s[0],s[1],Object(i.useRef)();return Object(v.jsxs)("div",{className:"home-div",children:[Object(v.jsx)("div",{className:"home-div-header",children:Object(v.jsx)("h2",{children:Object(v.jsx)("i",{children:"Thollexy"})})}),Object(v.jsx)("div",{className:"carousel",children:Object(v.jsx)(w.a,{className:"carousel",items:t,autoPlay:!0,showBullets:!0,slideDuration:1e3,thumbnailHeight:"100px"})}),Object(v.jsx)("button",{className:"home-btn",children:Object(v.jsxs)(b.b,{to:"/catalog",children:["See Catalog",Object(v.jsx)(p.a,{className:"home-arrow",size:"2x",icon:["fas","arrow-right"]})]})})]})}var k=s.a.memo(S);function q(e){var t=e.catalog;return Object(v.jsx)("div",{className:"catalog-div",children:t})}var E=s.a.memo(q);function T(e){var t=e.cart,c=Object(i.useState)([]),s=Object(d.a)(c,2),a=s[0],n=s[1];Object(i.useEffect)((function(){var e=Object.assign(t,[]);e.map((function(e){return e[0].qty=1,e[0].total=e[0].price*e[0].qty,e}));var c=e.map((function(e){return e[0]}));n(c)}),[t]);var r=function(){var e=0;if(a.length>0)for(var t=0;t<a.length;t++)e+=a[t].total;return e};Object(i.useEffect)((function(){r()}),[a]);var l=a.map((function(e){var t=[Object(v.jsx)(p.a,{size:"1x",icon:["fas","star"]}),Object(v.jsx)(p.a,{size:"1x",icon:["fas","star"]}),Object(v.jsx)(p.a,{size:"1x",icon:["fas","star"]}),Object(v.jsx)(p.a,{size:"1x",icon:["fas","star"]}),Object(v.jsx)(p.a,{size:"1x",icon:["fas","star"]})],c=Math.floor(e.rating.rate);t.splice(0,c);for(var i=0;i<c;i++)t.push(Object(v.jsx)(p.a,{size:"1x",icon:["far","star"]}));var s=t.map((function(e){return e}));return Object(v.jsxs)("div",{className:"cart-item-div",children:[Object(v.jsx)("span",{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));n(t)}(e.id)},className:"cart-item-div-first",children:Object(v.jsx)(p.a,{size:"2x",icon:["far","window-close"]})}),Object(v.jsxs)("div",{className:"cart-item-details-div",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"item-image",children:Object(v.jsx)("img",{src:e.image,style:{width:"100px"},alt:"item-image"})}),Object(v.jsxs)("div",{className:"item-prop",children:[Object(v.jsx)("p",{style:{fontStyle:"uppercase"},children:e.title}),Object(v.jsx)("div",{children:s}),Object(v.jsxs)("div",{style:{color:"rgba(182,185,190,1)",display:"grid",gridTemplateColumns:"auto auto",placeItems:"center",justifyContent:"start",alignItems:"center"},children:[Object(v.jsx)("p",{children:"Excellent Protection"}),Object(v.jsx)(p.a,{style:{paddingBottom:"25px"},size:"3x",icon:["fas","angle-right"]})]})]})]}),Object(v.jsxs)("div",{style:{display:"grid",gridGap:"25px",gridTemplateColumns:"auto auto",justifyContent:"center",alignItems:"center"},children:[Object(v.jsxs)("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"auto 1fr auto",placeItems:"center",justifyContent:"center",alignItems:"center"},children:[Object(v.jsx)("button",{style:{fontSize:"1px"},onClick:function(){return function(e){var t=a.filter((function(t){return t.id===e}));if(1!==t[0].qty){var c=t[0];c.qty=c.qty-=1,c.total=c.price*c.qty;var i=a.map((function(e){return e})),s=i.findIndex((function(t){return t.id===e}));i.splice(s,1,c),n(i),console.log(i)}}(e.id)},children:Object(v.jsx)(p.a,{size:"7x",icon:["fas","minus"]})}),Object(v.jsx)("p",{style:{paddingTop:"15px"},children:e.qty}),Object(v.jsx)("button",{style:{fontSize:"1px"},onClick:function(){return function(e){var t=a.filter((function(t){return t.id===e}))[0];t.qty=t.qty+=1,t.total=t.price*t.qty;var c=a.map((function(e){return e})),i=c.findIndex((function(t){return t.id===e}));c.splice(i,1,t),n(c),console.log(c)}(e.id)},children:Object(v.jsx)(p.a,{size:"7x",icon:["fas","plus"]})})]}),Object(v.jsx)("div",{style:{padding:"0px 70px 12px 0px",fontSize:"3.1vmin"},children:Object(v.jsxs)("b",{className:"pricee",children:[e.total,"$"]})})]})]})]},e.id)}));return Object(v.jsxs)("div",{className:"cart-div",children:[Object(v.jsxs)("div",{className:"cart-item",children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Thol"}),"lexy."]}),Object(v.jsx)("p",{style:{fontStyle:"4vmin"},children:"Shopping cart"}),Object(v.jsx)("div",{className:"cart-item-div-container",children:l}),Object(v.jsxs)("div",{className:"cart-footer",children:[Object(v.jsxs)("div",{className:"cart-back-div",children:[Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{size:"1x",icon:["fas","arrow-left"]})}),Object(v.jsx)("p",{children:Object(v.jsx)(b.b,{to:"/catalog",children:"Back to catalog"})})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("p",{style:{paddingTop:"10px"},children:["Total:",Object(v.jsxs)("b",{style:{letterSpacing:".2vmin",fontSize:"5vmin"},children:["$",Math.floor(r())]})]})})]})]}),Object(v.jsxs)("div",{className:"card-div",children:[Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsx)(p.a,{size:"2x",icon:["far","window-close"]}),Object(v.jsx)(p.a,{size:"2x",icon:["fas","user"]})]}),Object(v.jsx)("p",{children:"Card Details"}),Object(v.jsxs)("form",{className:"form-grp",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Card Number"}),Object(v.jsx)("input",{type:"password",placeholder:"*** *** *** *** ***"})]}),Object(v.jsx)("div",{className:"card-logo",children:Object(v.jsx)(p.a,{size:"2x",icon:["fab","cc-mastercard"]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Name on Card"}),Object(v.jsx)("input",{type:"text"})]}),Object(v.jsxs)("div",{className:"expiry-div",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Expiry Date"}),Object(v.jsx)("input",{type:"month"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"CVV"}),Object(v.jsx)("input",{type:"password",placeholder:"***"})]})]}),Object(v.jsx)("input",{value:"CHECK OUT",type:"submit"})]})]})]})}var I=s.a.memo(T);x.b.add(h.f,m.a,h.a,O.a,O.k,O.l,O.i,O.h,O.c,O.b,O.n,m.b,O.g,O.d,O.j,O.e,O.m,O.f,h.b,h.e,h.d,h.c);var H=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(d.a)(a,2),r=n[0],x=n[1],h=Object(i.useRef)(),O=(Object.assign(c,[]),function(e){var t=Number(e.target.parentNode.id),i=c.filter((function(e){return e.id===t}));r.some((function(e){return e[0].id===i[0].id}))||x((function(e){return[i].concat(Object(o.a)(e))}))}),m=([].map((function(e){return Object(v.jsx)("img",{src:e.image,alt:"cart-image"})})),c.map((function(e){return Object(v.jsx)("img",{src:e.image,id:e.id})}))),p=c.map((function(e){return{original:e.image,thumbnail:e.image,thumbnailClass:"thumbnail-carousel",originalClass:"img-carousel",thumbnailHeight:"height=500px",thumbnailWidth:"width=100px",originalHeight:"height=100px",originalWidth:"width=100px"}})),f=Object(o.a)(p),g=c.map((function(e){return Object(v.jsxs)("div",{className:"catalog-item",id:e.id,ref:h,children:[Object(v.jsx)("img",{src:e.image}),Object(v.jsxs)("div",{className:"caption",children:[Object(v.jsx)("div",{className:"catalog-item-title",children:e.title}),Object(v.jsxs)("div",{className:"catalog-item- price",children:["$",e.price]})]}),Object(v.jsx)("button",{onClick:O,children:"Add To Cart"})]},e.id)}));return Object(i.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s((function(e){return[].concat(Object(o.a)(e),Object(o.a)(c))}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsx)(b.a,{children:Object(v.jsxs)("div",{className:"full-container",children:[Object(v.jsx)(y,{}),Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/",exact:!0,children:Object(v.jsx)(k,{imgCarousel:m,post:c,images:f})}),Object(v.jsx)(u.a,{path:"/catalog",exact:!0,children:Object(v.jsx)(E,{catalog:g})}),Object(v.jsx)(u.a,{path:"/cart",exact:!0,children:Object(v.jsx)(I,{cart:r,post:c})})]})]})})};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ab77ed0d.chunk.js.map