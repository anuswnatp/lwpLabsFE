(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4mAC":function(e,t,a){e.exports={formControl:"styles-module--form-control--1H5sz",menuLinks:"styles-module--menuLinks--3Ot2D",modalCross:"styles-module--modalCross--3s5EK",cardContainer:"styles-module--cardContainer--24ppl",card:"styles-module--card--118Sl"}},C2xY:function(e,t,a){e.exports={formControl:"styles-module--form-control--oK2t2",menuLinks:"styles-module--menuLinks--3kF-i",modalCross:"styles-module--modalCross--24JfS",card:"styles-module--card--1Xqc2",batch:"styles-module--batch--3QdgN",info:"styles-module--info--3b8js"}},DAZo:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("o0o1"),n=a.n(r),c=(a("ls82"),a("HaE+")),o=a("D1a0"),l=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("courses");case 2:if(a=e.sent,e.prev=3,!t){e.next=8;break}return e.abrupt("return",{err:null,data:a.data.filter((function(e){return e.trending}))});case 8:return e.abrupt("return",{err:null,data:a.data});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",{err:"AWW Snap",data:a});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},d01g:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var r=a("/Nvl"),n=function(e){return{type:r.c,payload:e}},c=function(e){return{type:r.a,payload:e}}},klyS:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("v7Hm"),n=a("vG+z"),c=a("MAJE"),o=a("q1tI"),l=a.n(o),i=a("C2xY"),s=a.n(i),u=a("33Fu");function m(e){var t=e.imageUrl,a=e.imageAlt,o=e.title,i=e.rating,m=e.formattedPrice,f=e.instructor,d=e.latestBatch,g={imageUrl:t||"https://bit.ly/2Z4KKcF",imageAlt:a||"Rear view of modern home with pool",instructor:f||"Demo",baths:2,title:o||"Modern home in city center in the heart of historic Los Angeles",formattedPrice:"₹ "+m||!1,reviewCount:34,rating:i||4};function b(e){var t=new Date(e),a=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=(e=t.getDate(),t.getHours()),c=t.getMinutes();return e+" "+r+" "+a+" @"+n+":"+(c>0?c:"00")+" "+(n>12?"AM ":"PM ")+" IST"}return l.a.createElement(r.a,{maxW:"19rem",borderWidth:"1px",borderRadius:"15px",overflow:"hidden",className:s.a.card,as:"button",onClick:function(){}},l.a.createElement(n.a,{src:g.imageUrl,alt:g.imageAlt}),l.a.createElement(r.a,{p:"6",bgColor:"boxColor",height:"10em"},l.a.createElement("div",{className:s.a.info},l.a.createElement(r.a,{d:"flex",alignItems:"baseline"},l.a.createElement(r.a,{as:"span",fontSize:13},g.instructor)),l.a.createElement(r.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",whiteSpace:"break-spaces"},g.title),l.a.createElement(r.a,{as:"p"},g.formattedPrice),l.a.createElement(r.a,{d:"flex",mt:"2",justifyContent:"center",textAlign:"center",alignItems:"center"},Array(5).fill("").map((function(e,t){return t<g.rating?l.a.createElement(u.b,{key:t,color:"#ffd166"}):l.a.createElement(u.d,{key:t,color:"#333533"})})))),d&&l.a.createElement(r.a,{className:s.a.batch},l.a.createElement(c.a,null,"Upcoming Batches"),l.a.createElement(c.a,null,"Start Date: ",""+b(d.startDate)),l.a.createElement(c.a,null,"End Date: ",""+b(d.endDate)))))}},"vG+z":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("sKyC"),n=a("U6LL"),c=a("BXwj"),o=a("pr4h"),l=a("q1tI"),i=a("ODXe"),s=a("zlS4");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var f=l.forwardRef((function(e,t){var a=e.htmlWidth,r=e.htmlHeight,n=e.alt,c=m(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",u({width:a,height:r,ref:t,alt:n},c))})),d=Object(r.a)((function(e,t){var a=e.fallbackSrc,r=e.fallback,o=e.src,d=e.align,g=e.fit,b=e.loading,p=e.ignoreFallback,h=e.crossOrigin,v=m(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=b||p,E=function(e){var t=e.src,a=e.srcSet,r=e.onLoad,n=e.onError,c=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,m=Object(l.useState)("pending"),f=Object(i.a)(m,2),d=f[0],g=f[1];Object(l.useEffect)((function(){g(t?"loading":"pending")}),[t]);var b=Object(l.useRef)(),p=Object(l.useCallback)((function(){if(t){h();var e=new Image;e.src=t,c&&(e.crossOrigin=c),a&&(e.srcset=a),o&&(e.sizes=o),e.onload=function(e){h(),g("loaded"),null==r||r(e)},e.onerror=function(e){h(),g("failed"),null==n||n(e)},b.current=e}}),[t,c,a,o,r,n]),h=function(){b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return Object(s.a)((function(){if(!u)return"loading"===d&&p(),function(){h()}}),[d,p,u]),u?"loaded":d}(u({},e,{ignoreFallback:y})),k=u({ref:t,objectFit:g,objectPosition:d},y?v:Object(c.h)(v,["onError","onLoad"]));return"loaded"!==E?r||l.createElement(n.a.img,u({as:f,className:"chakra-image__placeholder",src:a},k)):l.createElement(n.a.img,u({as:f,src:o,crossOrigin:h,loading:b,className:"chakra-image"},k))}));o.a&&(d.displayName="Image")},y5kp:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),n=a.n(r),c=(a("ls82"),a("HaE+")),o=a("q1tI"),l=a.n(o),i=a("/MKj"),s=a("MAJE"),u=a("v7Hm"),m=a("4mAC"),f=a.n(m),d=a("klyS"),g=a("M/Vb"),b=a("d01g"),p=a("DAZo"),h=a("Wbzz");t.default=function(){var e=Object(o.useState)([]),t=e[0],a=e[1],r=Object(o.useState)(!1),m=r[0],v=r[1],y=Object(i.b)(),E=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,Object(p.a)(!1);case 3:t=e.sent,y(Object(b.a)(t.data)),a(t.data),v(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){E()}),[]);return l.a.createElement("div",null,l.a.createElement(s.a,{mb:"20px",textAlign:"center",color:"primary.100",fontWeight:"500",fontSize:"3xl"},"All Courses"),l.a.createElement(u.a,{className:f.a.cardContainer},m?l.a.createElement(g.a,{color:"#6118de",style:{margin:"auto"}}):t&&t.length>0?t.map((function(e,t){var a,r;return l.a.createElement("div",{className:f.a.card,onClick:function(){return t=e._id,void Object(h.navigate)("/course?courseId="+t);var t}},l.a.createElement(d.a,{imageUrl:e.img,imageAlt:e.title,title:e.title,rating:e.ratings,formattedPrice:e.price,instructor:(null===(a=e.teachers[0])||void 0===a?void 0:a.firstName)+" "+(null===(r=e.teachers[0])||void 0===r?void 0:r.lastName),latestBatch:e.batches?e.batches[0]:null,key:t}))})):l.a.createElement(s.a,{mb:"20px",color:"primary.100",fontWeight:"400",fontSize:"2xl"},"Sorry! There is no courses right now.")))}},zlS4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI"),n=a("epLR").d?r.useLayoutEffect:r.useEffect}}]);
//# sourceMappingURL=component---src-pages-courses-index-js-59f44861a902519becab.js.map