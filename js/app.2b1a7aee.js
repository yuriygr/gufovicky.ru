(function(t){function e(e){for(var i,a,c=e[0],u=e[1],s=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11a9":function(t,e,n){"use strict";n("b1be")},"15ce":function(t,e,n){t.exports=n.p+"img/twitch.0f006f25.png"},"4bfb":function(t,e,n){"use strict";n("d51c")},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("5530"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Logo"),n("div",{staticClass:"card__row"},t._l(t.cards,(function(t,e){return n("Card",{key:e,attrs:{card:t}})})),1)],1)},a=[],c=[{type:"twitch",size:"big",title:"Gufovicky",information:"Потрясающие трансляции лайк подписка",link:"https://www.twitch.tv/gufovicky",cover:n("15ce")},{type:"tiktok",size:"medium",title:"TikTok",information:"Он тикток",link:"https://www.tiktok.com/@gufoviki/"},{type:"zen",size:"medium",title:"Дзен",information:"Смешные обзоры смешных(?) фильмов",link:"https://zen.yandex.ru/id/6107eefd01cdee27073752b9"},{type:"telegram",size:"big",title:"Гуфен Говорит",information:"Канал в телеграме",link:"https://t.me/GGufen"},{type:"youtube",size:"medium",title:"Гуфовский",information:"Основной Youtube канал",link:"https://www.youtube.com/user/AleXDarkstalker98"},{type:"youtube",size:"medium",title:"Гуфовске Лайф",information:"Дополнительный Youtube канал",link:"https://www.youtube.com/user/Gufovicky"},{type:"youtube",size:"medium",title:"Гуфошортики",information:"ШОРТЫ",link:"https://www.youtube.com/channel/UCUuCBbGLiuyrZLxANBpIF9g"},{type:"youtube",size:"medium",title:"Гуфовики",information:"Это не видео",link:"https://www.youtube.com/channel/UCAmDOiECS2c0J-YHluR1ZTg"},{type:"vk",size:"medium",title:"Alexey Gufovsky",information:"Личный Вконтактик",link:"https://vk.com/alexdarkstalker98"},{type:"vk",size:"medium",title:"Игрожук",information:"Паблик про игры и жуков",link:"https://vk.com/igrabug"},{type:"donate",size:"big",title:"Поддержать",information:"Поддержать автора денюжкой",link:"http://www.donationalerts.ru/r/gufovicky"}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo",style:{backgroundImage:"url("+n("b640")+")"}})},s=[],l={name:"Logo"},d=l,f=(n("11a9"),n("2877")),p=Object(f["a"])(d,u,s,!1,null,null,null),m=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:["--type_"+t.card.type,"--size_"+t.card.size]},[n("a",{staticClass:"card__link",attrs:{href:t.card.link,target:"_blank",rel:"noreferrer noopener"}}),n("div",{staticClass:"card__hover-mask"}),n("div",{staticClass:"card__content"},[n("div",{staticClass:"card__title",domProps:{textContent:t._s(t.card.title)}}),n("div",{staticClass:"card__information",domProps:{innerHTML:t._s(t.card.information)}})]),t.card.cover?n("div",{staticClass:"card__cover",style:{"background-image":"url("+t.card.cover+")"}}):t._e()])},y=[],v={name:"Card",props:["card"]},k=v,h=(n("4bfb"),Object(f["a"])(k,b,y,!1,null,"b622dd4c",null)),g=h.exports,w={name:"App",components:{Logo:m,Card:g},data:function(){return{cards:c}}},_=w,C=(n("9993"),Object(f["a"])(_,o,a,!1,null,null,null)),x=C.exports,O=(n("b059"),n("7d05"),new r["a"](Object(i["a"])({},x)));O.$mount("#app")},"7d05":function(t,e,n){},"7dad":function(t,e,n){},9993:function(t,e,n){"use strict";n("7dad")},b059:function(t,e,n){},b1be:function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.02c1d3ea.jpg"},d51c:function(t,e,n){}});