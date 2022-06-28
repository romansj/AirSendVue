import{a as g,o as a,b as l,f as i,j as m,H as w,g as o,e,F as r,t as h,q as f,s as v,h as n,p as y,x as b,y as S}from"./vendor.8e472e22.js";import{I as H}from"./ItemSummaryDetails.43d2e365.js";import{_ as T}from"./index.80ca274b.js";const t=c=>(f("data-v-57ddf116"),c=c(),v(),c),x=t(()=>e("title",null,"Guide | AirSend",-1)),I=t(()=>e("meta",{name:"title",content:"Download and install AirSend app for Android and Windows devices"},null,-1)),k=t(()=>e("meta",{name:"description",content:"Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."},null,-1)),A=t(()=>e("meta",{name:"keywords",content:"airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"},null,-1)),C=t(()=>e("h1",null,"Guide",-1)),j=t(()=>e("p",null,"Here you can find a general testing guide as well as troubleshooting steps if you've run into a problem",-1)),O=t(()=>e("br",null,null,-1)),D=t(()=>e("h2",null,"Jump to:",-1)),G={style:{display:"flex","flex-direction":"column"}},N=t(()=>e("li",null,[e("a",{href:"#howto"},"How-to")],-1)),q=n("How to connect to a device?"),P=n("How to disconnect a device?"),B=n("How can I send a message to only one device?"),M=n("How do I disable notifications on AirSend?"),Q=n("How to disable battery optimization?"),R=t(()=>e("li",null,[e("a",{href:"#testing"},"Testing")],-1)),V=t(()=>e("li",null,[e("a",{href:"#troubleshooting"},"Troubleshooting")],-1)),Y=t(()=>e("br",null,null,-1)),J=t(()=>e("h2",{id:"howto"},"How-to guide",-1)),L=["innerHTML"],W=["src"],z=t(()=>e("br",null,null,-1)),F=t(()=>e("br",null,null,-1)),E=t(()=>e("br",null,null,-1)),U=t(()=>e("h2",{id:"testing"},"Testing guide",-1)),K=t(()=>e("p",null," Things to do: Poke around, send messages, connect, disconnect, switch network off/on, share text to the app, paste a very long text and send, write your language's special characters, provide bad data (e.g. scan fake QR) ",-1)),X=t(()=>e("br",null,null,-1)),Z=t(()=>e("p",null," I would be very thankful if you poked around the app, tried out its functionality and gave it a hard time :). When you find some issue, please drop me a message - what happened and what steps did you take to get there. ",-1)),$=t(()=>e("br",null,null,-1)),ee=n(" Get started testing by "),te=n("downloading Airsend"),oe=n(" today! "),ne=y('<br data-v-57ddf116><section data-v-57ddf116><h2 id="troubleshooting" data-v-57ddf116>Troubleshooting guide</h2><p data-v-57ddf116> Please write down the last steps you took and drop me a message. That will help me investigate and fix the issue. <br data-v-57ddf116>Now, for you to solve the issue: </p><br data-v-57ddf116><h3 data-v-57ddf116>App not responding:</h3><p data-v-57ddf116>Android</p><ul data-v-57ddf116><li data-v-57ddf116>Swipe up and hold (or press the rectangle button) to see all open apps. Close AirSend.</li><li data-v-57ddf116>Close AirSend.</li></ul><p data-v-57ddf116>PC</p><ul data-v-57ddf116><li data-v-57ddf116>Open Task Manager and select AirSendWPF2.exe</li><li data-v-57ddf116>Click &#39;End process&#39;</li></ul><br data-v-57ddf116><h3 data-v-57ddf116>Something not working right:</h3><p data-v-57ddf116>Click on Restart button in the app, it should be back to normal.</p><br data-v-57ddf116><h3 data-v-57ddf116>Other issue:</h3><p data-v-57ddf116>Please drop me a message with issue description.</p></section>',2);let ie=[{q:"How to connect to a device?",a:`You want to connect from device A to device B.<br><br>
    On device B:<br>
    open AirSend<br>
    on Connections section swipe up or tap 'This device'<br><br>
    On Device A:<br>
    on Connections section tap 'Connect'<br>
    Scan the QR code or enter IP address and port<br><br>
    All done!
    `},{q:"How to disconnect a device?",a:"Go to Connections section, long tap on the device and in the menu that appears tap Disconnect"},{q:"How can I get a QR code?",a:"Go to Connections section and swipe up or tap 'This device'"},{q:"How can I see my device's IP address and port number?",a:"Go to Connections section and swipe up or tap 'This device'"}],se=[{q:"How do I disable AirSend from starting automatically?",a:"Open Settings and turn off the toggle 'Start AirSend automatically'"},{q:"How do I disable notifications?",a:"Open Settings and toggle on/off the type of notifications you would like to receive. You will still receive messages even if you turn off the notifications"},{q:"How do I disable battery optimization?",a:"Open Settings and under 'Disable battery optimization' tap 'Disable' and follow the on screen prompts"}],ae=[{q:"How do I rename a device?",a:"You are on device A, you see device B and you want to rename it. Open Settings on device B and set the name for the device. You will need to reconnect to see the change on device B"}],de=[{q:"How can I send a message only to one device?",a:"In Messages section, under 'Select recipient' tap the selection box and pick 'Selected devices'. You will be able to select one or many devices. If you already have selected devices before, but would like to change the selection, tap the devices icon that shows to the right of selection box when 'Selected devices' is picked"}],d=new Map;d.set("Connections",ie);d.set("Messaging",de);d.set("Devices",ae);d.set("Other",se);let ce=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect to a device",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "section_connections.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Tap 'Connect'",
      "image": "connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "The connection dialog will be displayed. You can now scan the other device's QR code or enter IP address and port manually",
      "image": "connect_device/3_dialog_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "On the second device, go to the Connections page as well and tap on 'This device'",
      "image": "connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Now on the first device scan the QR code or enter IP adress and port.",
      "image": "connect_device/4_scanned_qr.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "All done, you're connected!",
      "image": "device_list.jpg"
    }
  ]
}
`,le=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to disconnect a device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Long tap on the device",
      "image": "modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the menu that appears tap Disconnect",
      "image": "modify_notifications/3_notification_toggled.jpg"
    }
  ]
}  
`,re=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How can I send a message to only one device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Messages page",
      "image": "message_one_device/0_messages_page.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Under 'Select recipient' tap the selection box and pick 'Selected devices'",
      "image": "message_one_device/2_recipient_choice_selected.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the dialog that appears select one or many devices you would like to message. Tap 'Confirm' after you're done selecting",
      "image": "message_one_device/4_dialog_recipient_choice_checked.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Write and send your message",
      "image": "message_one_device/5_message_typed.jpg"
    }
  ]
}
`,pe=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How do I disable notifications on AirSend?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Open Settings",
      "image": "modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Scroll down to Notifications page",
      "image": "modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Toggle on/off the type of notifications you would like to receive",
      "image": "modify_notifications/3_notification_toggled.jpg"
    }
  ]
}

`,ue=[JSON.parse(ce),JSON.parse(le),JSON.parse(re),JSON.parse(pe)];const he={data(){return{howToList:d,howToItems:ue}}},_e=Object.assign(he,{setup(c){return(_,ge)=>{const s=g("router-link");return a(),l(r,null,[i(m(w),null,{default:o(()=>[x,I,k,A]),_:1}),e("div",null,[e("section",null,[C,j,O,D,e("div",G,[e("ul",null,[N,e("ul",null,[e("li",null,[i(s,{to:"/guide/how-to-connect"},{default:o(()=>[q]),_:1})]),e("li",null,[i(s,{to:"/guide/how-to-disconnect"},{default:o(()=>[P]),_:1})]),e("li",null,[i(s,{to:"/guide/how-to-message-one-device"},{default:o(()=>[B]),_:1})]),e("li",null,[i(s,{to:"/guide/how-to-disable-notifications"},{default:o(()=>[M]),_:1})]),e("li",null,[i(s,{to:"/guide/how-to-disable-battery-optimization"},{default:o(()=>[Q]),_:1})])]),R,V])])]),Y,e("section",null,[J,(a(!0),l(r,null,h(_.howToItems,p=>(a(),b(H,null,{heading:o(()=>[e("b",null,S(p.name),1)]),description:o(()=>[(a(!0),l(r,null,h(p.step,u=>(a(),l("span",null,[e("p",{innerHTML:u.text},null,8,L),e("img",{class:"img_guide_phone",src:u.image},null,8,W),z,F]))),256))]),_:2},1024))),256))]),E,e("section",null,[U,K,X,Z,$,e("p",null,[ee,i(s,{to:"downloads",title:"Download AirSend for your device"},{default:o(()=>[te]),_:1}),oe])]),ne])],64)}}});var ve=T(_e,[["__scopeId","data-v-57ddf116"]]);export{ve as default};
