!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequire9432;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequire9432=a),a.register("iE7OH",function(t,n){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var o,r,a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),a("iE7OH").register(JSON.parse('{"EVgbq":"group.f09f0417.js","iz5nZ":"amazon-icon1x.985b1de5.png","etq4A":"amazon-icon2x.b774c146.png","mCCOp":"applebook-icon1x.a9f158e0.png","iZ8qR":"applebook-icon2x.7ba433f7.png","gmnG0":"bookshop-icon1x.95f5821d.png","95GBg":"bookshop-icon2x.2b4b4a60.png","8pDhi":"group.bfdd9aed.js","hgWww":"group.d4556662.js"}')),a("7SQp7"),a("i8Q71"),a("aOrXb");var i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),l=document.querySelector(".books-gallery"),u=new c.APIService;function d(){return(d=(0,i._)(function(e){var t;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return[4,u.fetchBooksByCategory(e)];case 1:return[4,n.sent().data];case 2:var o,r;return t=n.sent(),l.innerHTML='<h1 class="collection-title">'.concat(((o=e.split(" ")).pop(),o.join(" "))," <span>").concat((r=e.trim().split(" "))[r.length-1],'</span></h1>\n    <ul class="top-books rendering-gap js-list-rendering">\n\n    ').concat(t.map(function(e){var t=e.title,n=e.book_image,o=e.author,r=e._id;return'<li class="book-card" data-id="'.concat(r,'">\n        <div class="book-thumb">\n      <img class="book-cover" src="').concat(n,'" alt="').concat(t,'">\n      <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n      <h2 class="book-name">').concat(t,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>")}).join(""),"\n    </ul>\n    \n    "),[2]}})})).apply(this,arguments)}var i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),p=a("bFijQ"),h=a("6JpON"),g=new c.APIService,f=document.querySelector(".books-gallery");function b(){return(b=(0,i._)(function(){var e;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),(0,h.Loading).standard("Loading..."),[4,g.fetchBestSellersBooks()];case 1:return e=t.sent(),(0,h.Loading).remove("Loading..."),[4,e.data];case 2:return[2,t.sent()];case 3:return console.log(t.sent()),(0,h.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=(0,i._)(function(){var e,t,n,o,r,a,i,c,l;return(0,s.__generator)(this,function(s){switch(s.label){case 0:e='<ul class="top-books rendering-gap js-list-rendering">',s.label=1;case 1:return s.trys.push([1,3,,4]),[4,function(){return b.apply(this,arguments)}()];case 2:t=s.sent(),n=!0,o=!1,r=void 0;try{for(a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)c=i.value,e+='\n  \n    <li class="book-category-item">\n      <p class="book-category">'.concat(c.list_name,'</p>\n      <ul class="top-books bestsel-books js-list-rendering">\n        ').concat(c.books.map(function(e){return'\n              <li class="book-card flex-element" data-id="'.concat(e._id,'">\n              <div class="book-thumb">\n                <img class="book-cover" src="').concat(e.book_image,'" alt="').concat(e.title,'"/>\n                <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n                <h2 class="book-name">').concat(e.title,'</h2>\n                <h3 class="book-author">').concat(e.author,"</h3>\n                </div>\n              </li>\n            ")}).join(""),'\n      </ul>\n      <button class="book-card-btn" type="button" data-category="').concat(c.list_name,'">see more</button>\n    </li>\n  ')}catch(e){o=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return e+="</ul>",f.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>',(l=document.createElement("div")).className="books-collection",l.innerHTML=e,l.addEventListener("click",y),f.appendChild(l),[3,4];case 3:return console.log(s.sent()),[3,4];case 4:return[2]}})})).apply(this,arguments)}if(f)try{m()}catch(e){console.log(e)}function y(e){return k.apply(this,arguments)}function k(){return(k=(0,i._)(function(e){var t,n;return(0,s.__generator)(this,function(o){switch(o.label){case 0:if("BUTTON"!==e.target.nodeName)return[2];t=e.target,o.label=1;case 1:var r,a;if(o.trys.push([1,4,,5]),!t.matches("button[data-category]"))return[3,3];return n=t.dataset.category,f.querySelector(".collection-title").innerHTML="".concat(((r=n.split(" ")).pop(),r.join(" "))," <span>").concat((a=n.trim().split(" "))[a.length-1],"</span>"),H(n),[4,function(e){return _.apply(this,arguments)}(n)];case 2:o.sent(),o.label=3;case 3:return[3,5];case 4:return console.log(o.sent()),[3,5];case 5:return[2]}})})).apply(this,arguments)}function _(){return(_=(0,i._)(function(e){var t;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),(0,h.Loading).standard("Loading..."),[4,g.fetchBooksByCategory(e)];case 1:return[4,n.sent().data];case 2:return t=n.sent(),(0,h.Loading).remove("Loading..."),f.querySelector(".books-collection").innerHTML='\n    <ul class="top-books rendering-gap js-list-rendering">\n    '.concat(t.map(function(e){var t=e.title,n=e.book_image,o=e.author,r=e._id;return'\n        <li class="book-card" data-id='.concat(r,'>\n        <div class="book-thumb">\n         <img class="book-cover" src="').concat(n,'" alt="').concat(t,'">\n         <div class="quick-view">\n          <p class="quick-view-text">QUICK VIEW</p>\n         </div>\n        </div>\n        <div class="book-descr">\n      <h2 class="book-name">').concat(t,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>\n  ")}).join(""),"\n    </ul>"),[3,4];case 3:return console.log(n.sent()),(0,h.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books  were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}var p=a("bFijQ"),h=a("6JpON"),L=new c.APIService,S=document.querySelector(".book-category__list");function w(){return(w=(0,i._)(function(){var e;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),(0,h.Loading).standard("Loading..."),[4,L.fetchBooksCategoryList()];case 1:return e=t.sent(),(0,h.Loading).remove("Loading..."),[4,e.data];case 2:return[2,t.sent()];case 3:return console.log(t.sent()),(0,p.reportsFailure)("Sorry, no books 555 were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function E(){return(E=(0,i._)(function(){var e;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,function(){return w.apply(this,arguments)}()];case 1:return e=t.sent().map(function(e){return'<li class="book-category__list-item">'.concat(e.list_name,"</li>")}).join(""),S.insertAdjacentHTML("beforeend",e),[2]}})})).apply(this,arguments)}function q(){return(q=(0,i._)(function(e){var t;return(0,s.__generator)(this,function(n){switch(n.label){case 0:if("LI"!==e.target.nodeName)return[2];if(H(t=e.target.textContent),!("All categories"!==t))return[3,2];return[4,function(e){return d.apply(this,arguments)}(t)];case 1:return n.sent(),[3,4];case 2:return[4,m()];case 3:n.sent(),n.label=4;case 4:return[2]}})})).apply(this,arguments)}function H(e){var t=document.querySelectorAll(".book-category__list-item"),n=!0,o=!1,r=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var s=a.value;s.textContent===e?s.classList.add("active"):s.classList.remove("active")}}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}}S&&(!function(){E.apply(this,arguments)}(),S.addEventListener("click",function(e){return q.apply(this,arguments)}));var i=a("i7mVp"),s=a("4tSb9"),p=a("bFijQ"),h=a("6JpON"),x={btn:document.querySelector(".scrollBtn"),show:function(){this.btn.classList.remove("scrollBtn-hide")},hide:function(){this.btn.classList.add("scrollBtn-hide")},addEventListener:function(){var e=this;this.btn&&(window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>100?e.show():e.hide()}),this.btn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})})}};x.addEventListener();var B=a("eUyG2"),c=a("7SQp7"),A={};A=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iz5nZ");var O={};O=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("etq4A");var I={};I=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("mCCOp");var C={};C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iZ8qR");var N={};N=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gmnG0");var R={};R=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("95GBg");var j=document.querySelector("#allModal"),F=document.querySelector(".books-gallery"),J=document.querySelector(".add-storage-button"),U=document.querySelector(".remove-storage-btn"),T=document.querySelector(".storage-info"),V=new c.APIService,Q="storage-data",M=[],P={};F&&(null==J||J.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem(Q));P.description||(P.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");var t=P;e&&0!==e.length?(e.push(t),localStorage.setItem(Q,JSON.stringify(e))):(M=[t],localStorage.setItem(Q,JSON.stringify(M))),T.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.";var n=JSON.parse(localStorage.getItem(Q));1===n.length?(0,p.reportsInfo)("You added book to the shopping list. You have ".concat(n.length," book in your shopping list")):(0,p.reportsInfo)("You added book to the shopping list. You have ".concat(n.length," books in your shopping list")),Z()}),null==U||U.addEventListener("click",function(){T.textContent="";var e=P.id,t=JSON.parse(localStorage.getItem(Q)),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),1===t.length?(0,p.reportsInfo)("You removed book from your shopping list. You have ".concat(t.length," book in your shopping list")):0!==t.length&&t.length?t.length:(0,p.reportsInfo)("Your shopping list is empty"),localStorage.setItem(Q,JSON.stringify(t)),Z()}),F.addEventListener("click",function(e){var t=e.target.closest("li");if(t&&t.hasAttribute("data-id")&&t.classList.contains("book-card")){var n=t.getAttribute("data-id");J.hasAttribute("disabled","")&&(0,p.reportsWarning)("Please sign up to show a shopping list"),null==Y||Y.classList.remove("is-hidden"),null==z||z.classList.remove("is-hidden"),document.body.style.overflow="hidden",x.hide(),function(e){G.apply(this,arguments)}(n)}}));var Y=document.querySelector(".about-book-modal"),z=document.querySelector(".card-backdrop-modal");function G(){return(G=(0,i._)(function(e){var n,o;return(0,s.__generator)(this,function(r){switch(r.label){case 0:j&&(j.innerHTML=""),r.label=1;case 1:return r.trys.push([1,3,,4]),(0,h.Loading).standard("Loading..."),[4,function(e){return W.apply(this,arguments)}(e)];case 2:var a,i,s,c,l,u,d,g,f;return n=r.sent(),Z(),(0,h.Loading).remove("Loading..."),a=n.book_image,i=n.title,s=n.author,c=n.buy_links[0].url,l=n.buy_links[1].url,u=n.buy_links[4].url,g=d=n.description,""===d&&(g="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates."),f='  \n  <img src="'.concat(a,'" alt="Book Image" class="image-about-book-modal">\n  <div class="info-modal">\n  <h2 class="title-about-book-modal">').concat(i,'</h2>\n  <p class="author-about-book-modal"> ').concat(s,'</p>\n  <p class="text-about-book-modal">').concat(g,'</p>\n  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="').concat(c,'" target="_blank"\n    > <img class="amazon"\n     width="62"\n    height="19"\n    srcset="\n    ').concat(t(A)," 1x,\n    ").concat(t(O),' 2x\n  "\n   src="').concat(t(A),'"\n    alt="Amazon"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(l,'" target="_blank"\n    > <img class="marketApple"\n    width="33"\n    height="32"\n    srcset="\n    ').concat(t(I)," 1x,\n    ").concat(t(C),' 2x\n  "\n   src="').concat(t(I),'"\n    alt="AppleBooks"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(u,'" target="_blank"\n    > <img\n    width="38"\n    height="36"\n    srcset="\n    ').concat(t(N)," 1x,\n    ").concat(t(R),' 2x\n  "\n   src="').concat(t(N),'"\n    alt="Book-Shop"\n  /></a></li>\n</ul>\n</div>\n  '),j.innerHTML=f,[2,n];case 3:return o=r.sent(),(0,h.Loading).remove("Loading..."),console.log("Error",o),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function W(){return(W=(0,i._)(function(e){var t;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),P={},[4,V.fetchBookInfo(e)];case 1:return P={book_image:(t=n.sent().data).book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,marketBookshop:t.buy_links[4].url,list_name:t.list_name,id:t._id,description:t.description},[2,t];case 2:return console.log("Error",n.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function Z(){var e=(0,B.isAuthenticated)()?JSON.parse(localStorage.getItem(Q)):null,t=P.id;if(e&&0!==e.length)e.find(function(e){return e.id===t})?(J.style.display="none",U.style.display="block"):(J.style.display="block",null==U||(U.style.display="none"));else{J.style.display="block",U.style.display="none";return}}var D=document.querySelector(".card-backdrop-modal"),K=document.querySelector(".modal"),$=document.getElementById("modal-close");function X(){var e;null==D||D.classList.add("is-hidden"),null==K||K.classList.add("is-hidden"),null===(e=document.body)||void 0===e||e.classList.remove("modal-open"),document.removeEventListener("keydown",ee),document.body.style.overflow="",x.show()}function ee(e){"Escape"===e.code&&X()}K&&(null==D||D.addEventListener("click",function(e){e.target===D&&X()}),null==$||$.addEventListener("click",function(){X()}),window.addEventListener("keydown",ee)),a("aIhu9"),a("2ayrj"),a("50Y4H"),a("eUyG2"),a("bFijQ"),a("euqRf"),a("023A6")}();
//# sourceMappingURL=group.f09f0417.js.map
