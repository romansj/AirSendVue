import{d as b,r as $,u as E,c as H,a as p,o as u,b as h,e,f as i,w as n,F as y,g as s,h as f,i as M,H as R,j as I,k as L,l as P,m as C}from"./vendor.5ed81439.js";const D=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function _(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=_(t);fetch(t.href,a)}};D();const k=s("Home"),O=s("About"),x=s("Features"),S=s("Pricing"),T=s("Downloads"),W=s("Guide"),F={class:"content"},N=s("Privacy Policy"),B=s("Terms & Conditions"),j=e("br",null,null,-1),q=e("p",null,"Copyright 2022 CherryDev",-1),Y=b({setup(){const r=$({title:"My website",description:"My beautiful website"});E({title:H(()=>r.title),meta:[{name:"description",content:H(()=>r.description)}]})}}),z=Object.assign(Y,{setup(r){return(c,_)=>{const o=p("RouterLink"),t=p("RouterView"),a=p("router-link");return u(),h(y,null,[e("header",null,[e("nav",null,[i(o,{to:"/"},{default:n(()=>[k]),_:1}),i(o,{to:"/about"},{default:n(()=>[O]),_:1}),i(o,{to:"/features"},{default:n(()=>[x]),_:1}),i(o,{to:"/pricing"},{default:n(()=>[S]),_:1}),i(o,{to:"/downloads"},{default:n(()=>[T]),_:1}),i(o,{to:"/guide"},{default:n(()=>[W]),_:1})])]),e("div",F,[i(t)]),e("footer",null,[i(a,{to:"privacy"},{default:n(()=>[N]),_:1}),i(a,{to:"legal"},{default:n(()=>[B]),_:1}),j,q])],64)}}}),G="modulepreload",w={},Z="/",d=function(c,_){return!_||_.length===0?c():Promise.all(_.map(o=>{if(o=`${Z}${o}`,o in w)return;w[o]=!0;const t=o.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":G,t||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),t)return new Promise((g,A)=>{l.addEventListener("load",g),l.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>c())};var m=(r,c)=>{const _=r.__vccOpts||r;for(const[o,t]of c)_[o]=t;return _};const Q={},K={class:"item"},U={class:"details"};function J(r,c){return u(),h("div",K,[e("i",null,[f(r.$slots,"icon",{},void 0,!0)]),e("div",U,[e("h3",null,[f(r.$slots,"heading",{},void 0,!0)]),f(r.$slots,"default",{},void 0,!0)])])}var V=m(Q,[["render",J],["__scopeId","data-v-4787ba86"]]);const X={},ee={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},te=e("path",{d:"M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"},null,-1),oe=[te];function ne(r,c){return u(),h("svg",ee,oe)}var se=m(X,[["render",ne]]);const ie={},re={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ae=e("path",{fill:"currentColor",d:"M1,10V12A9,9 0 0,1 10,21H12C12,14.92 7.07,10 1,10M1,14V16A5,5 0 0,1 6,21H8A7,7 0 0,0 1,14M1,18V21H4A3,3 0 0,0 1,18M21,3H3C1.89,3 1,3.89 1,5V8H3V5H21V19H14V21H21A2,2 0 0,0 23,19V5C23,3.89 22.1,3 21,3Z"},null,-1),ce=[ae];function de(r,c){return u(),h("svg",re,ce)}var le=m(ie,[["render",de]]);const _e={},ue={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},he=e("path",{d:"M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"},null,-1),pe=[he];function me(r,c){return u(),h("svg",ue,pe)}var fe=m(_e,[["render",me]]);const Ve=e("title",null,"AirSend",-1),ve=e("meta",{name:"title",content:"Download and install AirSend app for Android and Windows devices"},null,-1),He=e("meta",{name:"description",content:"Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."},null,-1),we=e("meta",{name:"keywords",content:"airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"},null,-1),ye={class:"hero_text"},ge=e("h1",null,"Welcome!",-1),Ae=s(" Download Airsend for your device on the "),be=s("Downloads"),$e=s(" page "),Ee=e("br",null,null,-1),Me=e("br",null,null,-1),Re=e("h1",null,"What makes AirSend special?",-1),Ie=e("p",null," AirSend takes the simplicity of basic clipboard synchronization apps like Pushbullet, and merges it with the feature richness of other powerful synchronization and productivity apps. Take a look at some of the best features: ",-1),Le=e("br",null,null,-1),Pe=s("Easy setup"),Ce=s(" Get started just by scanning the QR code to connect to a device "),De=s("Instant-syncing, cross-platform"),ke=s(" Not only can you connect to many devices at the same time, but you can use any Windows and any Android device with an Internet connection "),Oe=s("Security"),xe=s(" The content you send is encrypted, so only you can see it "),Se=e("br",null,null,-1),Te=s(" See all the features of AirSend on the "),We=s("Features"),Fe=s(" page "),Ne=e("br",null,null,-1),Be=e("br",null,null,-1),je=e("section",null,[e("h1",null,"AirSend usage demo"),e("div",{style:{"--aspect-ratio":"16/9"}},[e("iframe",{src:"https://www.youtube.com/embed/zj8ajbekSD0",title:"YouTube video player",frameborder:"0",width:"1600",height:"900",allowfullscreen:""})])],-1),qe={setup(r){return(c,_)=>{const o=p("router-link");return u(),h(y,null,[i(M(R),null,{default:n(()=>[Ve,ve,He,we]),_:1}),e("div",null,[e("section",ye,[ge,e("p",null,[Ae,i(o,{to:"downloads",title:"Download AirSend app for Android and Windows devices"},{default:n(()=>[be]),_:1}),$e])]),Ee,Me,e("section",null,[Re,Ie,Le,i(V,null,{icon:n(()=>[i(se)]),heading:n(()=>[Pe]),default:n(()=>[Ce]),_:1}),i(V,null,{icon:n(()=>[i(le)]),heading:n(()=>[De]),default:n(()=>[ke]),_:1}),i(V,null,{icon:n(()=>[i(fe)]),heading:n(()=>[Oe]),default:n(()=>[xe]),_:1}),Se,e("p",null,[Te,i(o,{to:"features"},{default:n(()=>[We]),_:1}),Fe])]),Ne,Be,je])],64)}}},Ye=I({history:L("/"),routes:[{path:"/",name:"home",component:qe},{path:"/about",name:"about",component:()=>d(()=>import("./AboutView.9176914d.js"),["assets/AboutView.9176914d.js","assets/vendor.5ed81439.js"])},{path:"/features",name:"features",component:()=>d(()=>import("./FeaturesView.a9d9cf1f.js"),["assets/FeaturesView.a9d9cf1f.js","assets/WelcomeItem.vue_vue_type_style_index_0_scoped_true_lang.6d54a3c7.css","assets/vendor.5ed81439.js"])},{path:"/pricing",name:"pricing",component:()=>d(()=>import("./PricingView.3672c6d7.js"),["assets/PricingView.3672c6d7.js","assets/WelcomeItem.vue_vue_type_style_index_0_scoped_true_lang.6d54a3c7.css","assets/PriceItem.vue_vue_type_style_index_0_scoped_true_lang.bce8a4b9.css","assets/PriceItem.15afe7b0.js","assets/vendor.5ed81439.js"])},{path:"/downloads",name:"downloads",component:()=>d(()=>import("./DownloadsView.ae9f6548.js"),["assets/DownloadsView.ae9f6548.js","assets/DownloadsView.e0294d61.css","assets/PriceItem.vue_vue_type_style_index_0_scoped_true_lang.bce8a4b9.css","assets/vendor.5ed81439.js","assets/PriceItem.15afe7b0.js"])},{path:"/guide",name:"guide",component:()=>d(()=>import("./GuideView.d28254e0.js"),["assets/GuideView.d28254e0.js","assets/GuideView.4d9309eb.css","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/guide/how-to-connect",name:"how-to-connect",component:()=>d(()=>import("./GuideConnectView.8098cbd2.js"),["assets/GuideConnectView.8098cbd2.js","assets/GuideConnectView.118d1234.css","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/guide/how-to-disconnect",name:"how-to-disconnect",component:()=>d(()=>import("./GuideDisconnectView.4cc6e299.js"),["assets/GuideDisconnectView.4cc6e299.js","assets/GuideDisconnectView.c7d2dbc6.css","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/guide/how-to-message-one-device",name:"how-to-message-one-device",component:()=>d(()=>import("./GuideMessageOneView.c33c2831.js"),["assets/GuideMessageOneView.c33c2831.js","assets/GuideMessageOneView.3eb913b4.css","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/guide/how-to-disable-notifications",name:"how-to-disable-notifications",component:()=>d(()=>import("./GuideNotificationsView.ecb57ddc.js"),["assets/GuideNotificationsView.ecb57ddc.js","assets/GuideNotificationsView.aac79bbe.css","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/faq",name:"faq",component:()=>d(()=>import("./FAQView.be391968.js"),["assets/FAQView.be391968.js","assets/vendor.5ed81439.js","assets/ItemSummaryDetails.8ecafaf2.js","assets/ItemSummaryDetails.f2801f05.css"])},{path:"/legal",name:"legal",component:()=>d(()=>import("./LegalView.444f97ba.js"),["assets/LegalView.444f97ba.js","assets/PriceItem.vue_vue_type_style_index_0_scoped_true_lang.bce8a4b9.css","assets/vendor.5ed81439.js"])},{path:"/privacy",name:"privacy",component:()=>d(()=>import("./PrivacyView.4accc85e.js"),["assets/PrivacyView.4accc85e.js","assets/vendor.5ed81439.js"])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>d(()=>import("./404View.d85c69f8.js"),["assets/404View.d85c69f8.js","assets/vendor.5ed81439.js"])},{path:"/:pathMatch(.*)",name:"bad-not-found",component:()=>d(()=>import("./404View.d85c69f8.js"),["assets/404View.d85c69f8.js","assets/vendor.5ed81439.js"])}]}),v=P(z),ze=C();v.use(Ye);v.use(ze);v.mount("#app");export{se as I,m as _,V as a,le as b,fe as c};
