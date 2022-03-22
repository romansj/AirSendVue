import{d as b,r as $,u as M,c as v,a as p,o as u,b as h,e,f as i,w as n,F as w,g as s,h as m,i as E,H as C,j as k,k as R,l as S,m as I}from"./vendor.076e7d39.js";const L=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}};L();const P=s("Home"),x=s("About"),D=s("Features"),O=s("Pricing"),T=s("Downloads"),F=s("Guide"),W=s("FAQ"),N={class:"content"},B=s("Privacy Policy"),j=s("Terms & Conditions"),q=e("br",null,null,-1),Y=e("p",null,"Copyright 2022 CherryDev",-1),z=b({setup(){const r=$({title:"My website",description:"My beautiful website"});M({title:v(()=>r.title),meta:[{name:"description",content:v(()=>r.description)}]})}}),G=Object.assign(z,{setup(r){return(c,l)=>{const t=p("RouterLink"),o=p("RouterView"),a=p("router-link");return u(),h(w,null,[e("header",null,[e("nav",null,[i(t,{to:"/"},{default:n(()=>[P]),_:1}),i(t,{to:"/about"},{default:n(()=>[x]),_:1}),i(t,{to:"/features"},{default:n(()=>[D]),_:1}),i(t,{to:"/pricing"},{default:n(()=>[O]),_:1}),i(t,{to:"/downloads"},{default:n(()=>[T]),_:1}),i(t,{to:"/guide"},{default:n(()=>[F]),_:1}),i(t,{to:"/faq"},{default:n(()=>[W]),_:1})])]),e("div",N,[i(o)]),e("footer",null,[i(a,{to:"privacy"},{default:n(()=>[B]),_:1}),i(a,{to:"legal"},{default:n(()=>[j]),_:1}),q,Y])],64)}}}),Q="modulepreload",y={},Z="/AirSendVue/",_=function(c,l){return!l||l.length===0?c():Promise.all(l.map(t=>{if(t=`${Z}${t}`,t in y)return;y[t]=!0;const o=t.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":Q,o||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),o)return new Promise((g,A)=>{d.addEventListener("load",g),d.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>c())};var f=(r,c)=>{const l=r.__vccOpts||r;for(const[t,o]of c)l[t]=o;return l};const K={},U={class:"item"},J={class:"details"};function X(r,c){return u(),h("div",U,[e("i",null,[m(r.$slots,"icon",{},void 0,!0)]),e("div",J,[e("h3",null,[m(r.$slots,"heading",{},void 0,!0)]),m(r.$slots,"default",{},void 0,!0)])])}var V=f(K,[["render",X],["__scopeId","data-v-4787ba86"]]);const ee={},te={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},oe=e("path",{d:"M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"},null,-1),ne=[oe];function se(r,c){return u(),h("svg",te,ne)}var ie=f(ee,[["render",se]]);const re={},ae={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ce=e("path",{fill:"currentColor",d:"M1,10V12A9,9 0 0,1 10,21H12C12,14.92 7.07,10 1,10M1,14V16A5,5 0 0,1 6,21H8A7,7 0 0,0 1,14M1,18V21H4A3,3 0 0,0 1,18M21,3H3C1.89,3 1,3.89 1,5V8H3V5H21V19H14V21H21A2,2 0 0,0 23,19V5C23,3.89 22.1,3 21,3Z"},null,-1),de=[ce];function le(r,c){return u(),h("svg",ae,de)}var _e=f(re,[["render",le]]);const ue={},he={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},pe=e("path",{d:"M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"},null,-1),fe=[pe];function me(r,c){return u(),h("svg",he,fe)}var Ve=f(ue,[["render",me]]);const He=e("title",null,"AirSend",-1),ve=e("meta",{name:"title",content:"Download and install AirSend app for Android and Windows devices"},null,-1),ye=e("meta",{name:"description",content:"Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."},null,-1),we=e("meta",{name:"keywords",content:"airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"},null,-1),ge={class:"hero_text"},Ae=e("h1",null,"Welcome!",-1),be=s(" Download Airsend for your device on the "),$e=s("Downloads"),Me=s(" page "),Ee=e("br",null,null,-1),Ce=e("br",null,null,-1),ke=e("h1",null,"What makes AirSend special?",-1),Re=e("p",null," AirSend takes the simplicity of basic clipboard synchronization apps like Pushbullet, and merges it with the feature richness of other powerful synchronization and productivity apps. Take a look at some of the best features: ",-1),Se=e("br",null,null,-1),Ie=s("Easy setup"),Le=s(" Get started just by scanning the QR code to connect to a device "),Pe=s("Instant-syncing, cross-platform"),xe=s(" Not only can you connect to many devices at the same time, but you can use any Windows and any Android device with an Internet connection "),De=s("Security"),Oe=s(" The content you send is encrypted, so only you can see it "),Te=e("br",null,null,-1),Fe=s(" See all the features of AirSend on the "),We=s("Features"),Ne=s(" page "),Be=e("br",null,null,-1),je=e("br",null,null,-1),qe=e("section",null,[e("h1",null,"AirSend usage demo"),e("div",{style:{"--aspect-ratio":"16/9"}},[e("iframe",{src:"https://www.youtube.com/embed/zj8ajbekSD0",title:"YouTube video player",frameborder:"0",width:"1600",height:"900",allowfullscreen:""})])],-1),Ye={setup(r){return(c,l)=>{const t=p("router-link");return u(),h(w,null,[i(E(C),null,{default:n(()=>[He,ve,ye,we]),_:1}),e("div",null,[e("section",ge,[Ae,e("p",null,[be,i(t,{to:"downloads",title:"Download AirSend app for Android and Windows devices"},{default:n(()=>[$e]),_:1}),Me])]),Ee,Ce,e("section",null,[ke,Re,Se,i(V,null,{icon:n(()=>[i(ie)]),heading:n(()=>[Ie]),default:n(()=>[Le]),_:1}),i(V,null,{icon:n(()=>[i(_e)]),heading:n(()=>[Pe]),default:n(()=>[xe]),_:1}),i(V,null,{icon:n(()=>[i(Ve)]),heading:n(()=>[De]),default:n(()=>[Oe]),_:1}),Te,e("p",null,[Fe,i(t,{to:"features"},{default:n(()=>[We]),_:1}),Ne])]),Be,je,qe])],64)}}},ze=k({history:R("/AirSendVue/"),routes:[{path:"/",name:"home",component:Ye},{path:"/about",name:"about",component:()=>_(()=>import("./AboutView.b89dec8e.js"),["assets/AboutView.b89dec8e.js","assets/vendor.076e7d39.js"])},{path:"/features",name:"features",component:()=>_(()=>import("./FeaturesView.36342de7.js"),["assets/FeaturesView.36342de7.js","assets/WelcomeItem.vue_vue_type_style_index_0_scoped_true_lang.6d54a3c7.css","assets/vendor.076e7d39.js"])},{path:"/pricing",name:"pricing",component:()=>_(()=>import("./PricingView.8dd6d27b.js"),["assets/PricingView.8dd6d27b.js","assets/PriceItem.vue_vue_type_style_index_0_scoped_true_lang.bce8a4b9.css","assets/WelcomeItem.vue_vue_type_style_index_0_scoped_true_lang.6d54a3c7.css","assets/vendor.076e7d39.js"])},{path:"/downloads",name:"downloads",component:()=>_(()=>import("./DownloadsView.dc7d67bf.js"),["assets/DownloadsView.dc7d67bf.js","assets/vendor.076e7d39.js"])},{path:"/guide",name:"guide",component:()=>_(()=>import("./GuideView.0c9df14a.js"),["assets/GuideView.0c9df14a.js","assets/vendor.076e7d39.js","assets/ItemSummaryDetails.a3d4ab93.js","assets/ItemSummaryDetails.696e4c39.css"])},{path:"/faq",name:"faq",component:()=>_(()=>import("./FAQView.90fa265c.js"),["assets/FAQView.90fa265c.js","assets/vendor.076e7d39.js","assets/ItemSummaryDetails.a3d4ab93.js","assets/ItemSummaryDetails.696e4c39.css"])},{path:"/legal",name:"legal",component:()=>_(()=>import("./LegalView.84046930.js"),["assets/LegalView.84046930.js","assets/PriceItem.vue_vue_type_style_index_0_scoped_true_lang.bce8a4b9.css","assets/vendor.076e7d39.js"])},{path:"/privacy",name:"privacy",component:()=>_(()=>import("./PrivacyView.78f8e12e.js"),["assets/PrivacyView.78f8e12e.js","assets/vendor.076e7d39.js"])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>_(()=>import("./404View.e58302d6.js"),["assets/404View.e58302d6.js","assets/vendor.076e7d39.js"])},{path:"/:pathMatch(.*)",name:"bad-not-found",component:()=>_(()=>import("./404View.e58302d6.js"),["assets/404View.e58302d6.js","assets/vendor.076e7d39.js"])}]}),H=S(G),Ge=I();H.use(ze);H.use(Ge);H.mount("#app");export{ie as I,f as _,V as a,_e as b,Ve as c};
