(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n=a("q1tI"),i=a.n(n),r=(a("pJf4"),a("Wbzz")),l=a("iSRb"),o=a.n(l),c=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:o.a.author},i.a.createElement(r.Link,{to:"/"},i.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:o.a.author__photo,width:"100",height:"100",alt:t.name})),!0===a?i.a.createElement("h1",{className:o.a.author__title},i.a.createElement(r.Link,{className:o.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:o.a.author__title},i.a.createElement(r.Link,{className:o.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:o.a.author__subtitle},t.bio))},m=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("7Qib")),s=a("euHg"),_=a.n(s),u=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:_.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),p=a.n(d),f=function(e){var t=e.contacts;return i.a.createElement("div",{className:p.a.contacts},i.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:p.a["contacts__list-item"],key:e},i.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(m.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(u,{name:e,icon:Object(m.b)(e)}))):null}))))},g=a("Nrk+"),h=a.n(g),v=function(e){var t=e.copyright;return i.a.createElement("div",{className:h.a.copyright},t)},b=function(){return i.a.createElement("div",{className:h.a.copyright},"Site Based on Gatsby ",i.a.createElement("a",{href:"https://github.com/alxshelepenok/gatsby-starter-lumen"},"Lumen Starter."))},E=a("je8k"),k=a.n(E),x=function(e){var t=e.menu;return i.a.createElement("nav",{className:k.a.menu},i.a.createElement("ul",{className:k.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},i.a.createElement(r.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),y=a.n(N),P=a("gGy4"),I=function(e){var t=e.isIndex,a=Object(P.b)(),n=a.author,r=a.copyright,l=a.menu;return i.a.createElement("div",{className:y.a.sidebar},i.a.createElement("div",{className:y.a.sidebar__inner},i.a.createElement(c,{author:n,isIndex:t}),i.a.createElement(x,{menu:l}),i.a.createElement(f,{contacts:n.contacts}),i.a.createElement(v,{copyright:r}),i.a.createElement(b,null)))}},"1xLx":function(e,t,a){e.exports={feed:"Feed-module--feed--37QKH",feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-container":"Feed-module--feed__item-container--3KYkd","feed__item-container-image":"Feed-module--feed__item-container-image--zB3gg","feed__item-container-overlay":"Feed-module--feed__item-container-overlay--2xFdX","feed__item-container-overlay-text":"Feed-module--feed__item-container-overlay-text--1kcgR","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=(a("wd/R"),a("Wbzz")),l=a("1xLx"),o=a.n(l),c=function(e){var t=e.edges;return i.a.createElement("div",{className:o.a.feed},t.map((function(e){return i.a.createElement("div",{className:o.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:o.a["feed__item-container"]},i.a.createElement(r.Link,{to:e.node.fields.slug},i.a.createElement("img",{className:o.a["feed__item-container-image"],src:Object(r.withPrefix)(e.node.frontmatter.cardImage)}),"src=",Object(r.withPrefix)(e.node.frontmatter.cardImage),i.a.createElement("div",{className:o.a["feed__item-container-overlay"]},i.a.createElement("div",{className:o.a["feed__item-container-overlay-text"]},e.node.frontmatter.title)))))})))}},"999l":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("Zttt"),l=a("/d1K"),o=a("6V6j"),c=a("RXmK"),m=(a("v0M6"),a("vTrC")),s=a.n(m),_=function(){return i.a.createElement("div",{className:s.a.hellobox},i.a.createElement("h3",null,"Hello, I'm Sean McCulloch."),"Check out my projects below.")},u=a("gGy4"),d="2592035050";t.default=function(e){var t=e.data,a=e.pageContext,n=Object(u.b)(),m=n.title,s=n.subtitle,d=a.currentPage,p=(a.hasNextPage,a.hasPrevPage,a.prevPagePath,a.nextPagePath,t.allMarkdownRemark.edges),f=d>0?"Posts - Page "+d+" - "+m:m;return i.a.createElement(r.a,{title:f,description:s},i.a.createElement(l.a,{isIndex:!0}),i.a.createElement(c.a,null,i.a.createElement(_,null),i.a.createElement(o.a,{edges:p})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),r=a("RBgx"),l=a.n(r),o=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current.scrollIntoView()})),i.a.createElement("div",{ref:r,className:l.a.page},i.a.createElement("div",{className:l.a.page__inner},t&&i.a.createElement("h1",{className:l.a.page__title},t),i.a.createElement("div",{className:l.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;a("MIFh"),function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(this&&this[l]||l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),r=a("UbMB"),l=a.n(r),o=a("Wbzz"),c=a("WlAH"),m=a("U4DU"),s=a.n(m),_=l.a.bind(s.a),u=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,l=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),m=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(o.Link,{rel:"prev",to:r?t:"/",className:l},c.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(o.Link,{rel:"next",to:n?a:"/",className:m},c.b.NEXT_PAGE)))}},vTrC:function(e,t,a){e.exports={hellobox:"HelloBox-module--hellobox--2sG4Y"}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-dfaec77a1d4a97ffffeb.js.map