(this["webpackJsonpreact-anime-yt"]=this["webpackJsonpreact-anime-yt"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),i=n.n(c),s=(n(11),n(5)),o=n(3),j=n(2),u=n.n(j),l=(n(13),n(0));var h=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Ala-Too_International_University_Seal.png/220px-Ala-Too_International_University_Seal.png",width:100,height:100}),Object(l.jsxs)("h1",{className:"anime-base",children:["The",Object(l.jsx)("strong",{className:"strong",children:"Anime"}),"Database"]})]})};var b=function(e){var t=e.topAnime;return Object(l.jsx)("aside",{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("h3",{children:"Top Anime"}),t.map((function(e){return Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title},e.mal_id)}))]})})};n(15);var m=function(e){var t=e.anime;return Object(l.jsx)("article",{className:"anime-card",children:Object(l.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("figure",{children:Object(l.jsx)("img",{src:t.image_url,alt:"Anime Image"})}),Object(l.jsx)("h3",{children:t.title})]})})};n(16);var d=function(e){return Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"main-head",children:Object(l.jsx)("form",{className:"search-box",onSubmit:e.HandleSearch,children:Object(l.jsx)("input",{className:"input-search",type:"search",placeholder:"Search for an anime...",required:!0,value:e.search,onChange:function(t){return e.SetSearch(t.target.value)}})})}),Object(l.jsx)("div",{className:"anime-list",children:e.animeList.map((function(e){return Object(l.jsx)(m,{anime:e},e.mal_id)}))})]})};n(17);var f=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("h1",{className:"text",children:"2022 MAT20/Alina Bakytbek/Akbiike Toktosunova"})})};var p=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(o.a)(c,2),j=i[0],m=i[1],p=Object(r.useState)(""),O=Object(o.a)(p,2),x=O[0],v=O[1],g=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()}));case 2:t=e.sent,m(t.top.slice(0,10));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:n=e.sent,a(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"content-wrap",children:[Object(l.jsx)(b,{topAnime:j}),Object(l.jsx)(d,{HandleSearch:function(e){e.preventDefault(),k(x)},search:x,SetSearch:v,animeList:n})]}),Object(l.jsx)(f,{})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f696926e.chunk.js.map