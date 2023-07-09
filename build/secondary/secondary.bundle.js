(()=>{"use strict";var t,e={348:(t,e,o)=>{var r=o(894),n=o(755),d=o.n(n),i=o(596),c=o(32);var a=o(153);i.GI.setUpProductsPopup(),i.GI.setUpSendFormPopup(),a.E.setUp(),function(){var t,e,o,n,i,c=(n="product",i=window.location.search,new URLSearchParams(i).get(n)),a=r.i.find((function(t,e){return t.id==c}))||r.i[0];d()(".product .product__wrapper").css("background",a.content.bg),d()("#section-breadcrumb .breadcrumb__item--active").html(a.title),d()(".product .product__title").html(a.title),d()(".product .product__subtitle").html(a.subtitle),d()(".product .product__video").html('\n    <source class="product__video" src="'.concat(a.video,'" type="video/mp4">\n  ')),d()(".product .product__right-header-title h1").html((null===(t=a.content)||void 0===t?void 0:t.headerTitle)||""),d()(".product .product__right-header-subtitle p").html((null===(e=a.content)||void 0===e?void 0:e.headerSubtitle)||""),d()(".product .product__right-content-text").html((null===(o=a.content)||void 0===o?void 0:o.textHTML)||""),a.content.dropdown&&function(t){for(var e=t.content.dropdown,o="",r=0;r<e.length;r++){for(var n="",i=e[r].elements,c=0;c<i.length;c++)n+='\n        <div class="dropdown__content-item">\n          <h4>'.concat(i[c].heading,"</h4>\n          <p>").concat(i[c].text,"</p>\n        </div>\n      ");o+='\n      <div class="dropdown__item item--'.concat(r,'"data-no="').concat(r,'">\n        <div class="dropdown__item-heading">\n          <span class="dropdown__item-heading-title">').concat(e[r].title,'</span>\n          <span class="material-symbols-rounded dropdown__item-heading-icon">expand_more</span>\n        </div>\n        <div class="dropdown__content scroll-bar__container">\n          ').concat(n,"\n        </div>\n      </div>\n    ")}d()(".product__dropdown").html(o),d()(".product__dropdown .dropdown__item").click((function(t){var e=t.currentTarget.getAttribute("data-no"),o=d()(".product__dropdown .dropdown__item.item--".concat(e));o.hasClass("dropdown__item--active")?(console.log("isActive"),o.removeClass("dropdown__item--active")):(d()(".product__dropdown .dropdown__item.dropdown__item--active").removeClass("dropdown__item--active"),o.addClass("dropdown__item--active"))}))}(a);var l=d().Deferred(),p=d()("#ProductVideo")[0];d()(p).on("loadeddata",(function(){l.resolve()})),d().when(l).done((function(){console.log("Video loaded"),function(){var t=document.getElementById("ProductVideo"),e=document.createElement("canvas"),o=e.getContext("2d");e.width=t.videoWidth,e.height=t.videoHeight,console.log("seeked"),o.drawImage(t,0,0,e.width,e.height);var r,n,i,c=o.getImageData(e.width-10,Math.floor(e.height/2),1,1).data,a=c[0],l=c[1],p=c[2],s=(r=l,n=p,"#"+(i=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e})(a)+i(r)+i(n));console.log(s),d()(".product").animate({opacity:1},300),d()(".product").addClass(function(t,e,o){return(299*t+587*e+114*o)/1e3<=127}(a,l,p)?"product--dark-theme":"product--light-theme")}()}))}(),(0,c.D)()}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var d=o[t]={exports:{}};return e[t].call(d.exports,d,d.exports,r),d.exports}r.m=e,t=[],r.O=(e,o,n,d)=>{if(!o){var i=1/0;for(p=0;p<t.length;p++){for(var[o,n,d]=t[p],c=!0,a=0;a<o.length;a++)(!1&d||i>=d)&&Object.keys(r.O).every((t=>r.O[t](o[a])))?o.splice(a--,1):(c=!1,d<i&&(i=d));if(c){t.splice(p--,1);var l=n();void 0!==l&&(e=l)}}return e}d=d||0;for(var p=t.length;p>0&&t[p-1][2]>d;p--)t[p]=t[p-1];t[p]=[o,n,d]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!t;)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../"})(),(()=>{var t={441:0};r.O.j=e=>0===t[e];var e=(e,o)=>{var n,d,[i,c,a]=o,l=0;if(i.some((e=>0!==t[e]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(a)var p=a(r)}for(e&&e(o);l<i.length;l++)d=i[l],r.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return r.O(p)},o=self.webpackChunkneurolab_systems=self.webpackChunkneurolab_systems||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var n=r.O(void 0,[592],(()=>r(348)));n=r.O(n)})();