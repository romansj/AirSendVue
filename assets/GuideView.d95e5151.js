import{a as _,o,b as a,f as p,i as m,H as f,w as s,e,F as d,p as u,q as w,s as v,g as c,n as y,t as b,v as S}from"./vendor.271fe6a1.js";import{I as T}from"./ItemSummaryDetails.2fc21bc5.js";import{_ as H}from"./index.b3fb3ffb.js";const t=i=>(w("data-v-4215f598"),i=i(),v(),i),x=t(()=>e("title",null,"Guide | AirSend",-1)),k=t(()=>e("meta",{name:"title",content:"Download and install AirSend app for Android and Windows devices"},null,-1)),I=t(()=>e("meta",{name:"description",content:"Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."},null,-1)),A=t(()=>e("meta",{name:"keywords",content:"airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"},null,-1)),C=t(()=>e("section",null,[e("h1",null,"Guide"),e("p",null,"Here you can find a general testing guide as well as troubleshooting steps if you've run into a problem"),e("br"),e("h2",null,"Jump to:"),e("div",{style:{display:"flex","flex-direction":"column"}},[e("a",{href:"#howto"},"How-to"),e("a",{href:"#testing"},"Testing"),e("a",{href:"#troubleshooting"},"Troubleshooting")])],-1)),j=t(()=>e("br",null,null,-1)),O=t(()=>e("h2",{id:"howto"},"How-to guide",-1)),D=["innerHTML"],G=["src"],N=t(()=>e("br",null,null,-1)),q=t(()=>e("br",null,null,-1)),P=t(()=>e("br",null,null,-1)),B=t(()=>e("h2",{id:"testing"},"Testing guide",-1)),M=t(()=>e("p",null," Things to do: Poke around, send messages, connect, disconnect, switch network off/on, share text to the app, paste a very long text and send, write your language's special characters, provide bad data (e.g. scan fake QR) ",-1)),Q=t(()=>e("br",null,null,-1)),R=t(()=>e("p",null," I would be very thankful if you poked around the app, tried out its functionality and gave it a hard time :). When you find some issue, please drop me a message - what happened and what steps did you take to get there. ",-1)),V=t(()=>e("br",null,null,-1)),Y=c(" Get started testing by "),J=c("downloading Airsend"),L=c("today! "),W=y('<br data-v-4215f598><section data-v-4215f598><h2 id="troubleshooting" data-v-4215f598>Troubleshooting guide</h2><p data-v-4215f598> Please write down the last steps you took and drop me a message. That will help me investigate and fix the issue. <br data-v-4215f598>Now, for you to solve the issue: </p><br data-v-4215f598><h3 data-v-4215f598>App not responding:</h3><p data-v-4215f598>Android</p><ul data-v-4215f598><li data-v-4215f598>Swipe up and hold (or press the rectangle button) to see all open apps. Close AirSend.</li><li data-v-4215f598>Close AirSend.</li></ul><p data-v-4215f598>PC</p><ul data-v-4215f598><li data-v-4215f598>Open Task Manager and select AirSendWPF2.exe</li><li data-v-4215f598>Click &#39;End process&#39;</li></ul><br data-v-4215f598><h3 data-v-4215f598>Something not working right:</h3><p data-v-4215f598>Click on Restart button in the app, it should be back to normal.</p><br data-v-4215f598><h3 data-v-4215f598>Other issue:</h3><p data-v-4215f598>Please drop me a message with issue description.</p></section>',2);let F=[{q:"How to connect to a device?",a:`You want to connect from device A to device B.<br><br>
    On device B:<br>
    open AirSend<br>
    on Connections section swipe up or tap 'This device'<br><br>
    On Device A:<br>
    on Connections section tap 'Connect'<br>
    Scan the QR code or enter IP address and port<br><br>
    All done!
    `},{q:"How to disconnect a device?",a:"Go to Connections section, long tap on the device and in the menu that appears tap Disconnect"},{q:"How can I get a QR code?",a:"Go to Connections section and swipe up or tap 'This device'"},{q:"How can I see my device's IP address and port number?",a:"Go to Connections section and swipe up or tap 'This device'"}],z=[{q:"How do I disable AirSend from starting automatically?",a:"Open Settings and turn off the toggle 'Start AirSend automatically'"},{q:"How do I disable notifications?",a:"Open Settings and toggle on/off the type of notifications you would like to receive. You will still receive messages even if you turn off the notifications"},{q:"How do I disable battery optimization?",a:"Open Settings and under 'Disable battery optimization' tap 'Disable' and follow the on screen prompts"}],E=[{q:"How do I rename a device?",a:"You are on device A, you see device B and you want to rename it. Open Settings on device B and set the name for the device. You will need to reconnect to see the change on device B"}],U=[{q:"How can I send a message only to one device?",a:"In Messages section, under 'Select recipient' tap the selection box and pick 'Selected devices'. You will be able to select one or many devices. If you already have selected devices before, but would like to change the selection, tap the devices icon that shows to the right of selection box when 'Selected devices' is picked"}],n=new Map;n.set("Connections",F);n.set("Messaging",U);n.set("Devices",E);n.set("Other",z);let K=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect to a device",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "/section_connections.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Tap 'Connect'",
      "image": "/connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "The connection dialog will be displayed. You can now scan the other device's QR code or enter IP address and port manually",
      "image": "/connect_device/3_dialog_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "On the second device, go to the Connections page as well and tap on 'This device'",
      "image": "/connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Now on the first device scan the QR code or enter IP adress and port.",
      "image": "/connect_device/4_scanned_qr.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "All done, you're connected!",
      "image": "/device_list.jpg"
    }
  ]
}
`,X=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to disconnect a device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "/modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Long tap on the device",
      "image": "/modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the menu that appears tap Disconnect",
      "image": "/modify_notifications/3_notification_toggled.jpg"
    }
  ]
}  
`,Z=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How can I send a message to only one device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Messages page",
      "image": "/message_one_device/0_messages_page.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Under 'Select recipient' tap the selection box and pick 'Selected devices'",
      "image": "/message_one_device/2_recipient_choice_selected.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the dialog that appears select one or many devices you would like to message. Tap 'Confirm' after you're done selecting",
      "image": "/message_one_device/4_dialog_recipient_choice_checked.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Write and send your message",
      "image": "/message_one_device/5_message_typed.jpg"
    }
  ]
}
`,$=`
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How do I disable notifications on AirSend?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Open Settings",
      "image": "/modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Scroll down to Notifications page",
      "image": "/modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Toggle on/off the type of notifications you would like to receive",
      "image": "/modify_notifications/3_notification_toggled.jpg"
    }
  ]
}

`,ee=[JSON.parse(K),JSON.parse(X),JSON.parse(Z),JSON.parse($)];const te={data(){return{howToList:n,howToItems:ee}}},oe=Object.assign(te,{setup(i){return(g,ne)=>{const h=_("router-link");return o(),a(d,null,[p(m(f),null,{default:s(()=>[x,k,I,A]),_:1}),e("div",null,[C,j,e("section",null,[O,(o(!0),a(d,null,u(g.howToItems,l=>(o(),b(T,null,{heading:s(()=>[e("b",null,S(l.name),1)]),description:s(()=>[(o(!0),a(d,null,u(l.step,r=>(o(),a("span",null,[e("p",{innerHTML:r.text},null,8,D),e("img",{class:"img_guide_phone",src:r.image},null,8,G),N,q]))),256))]),_:2},1024))),256))]),P,e("section",null,[B,M,Q,R,V,e("p",null,[Y,p(h,{to:"downloads",title:"Download AirSend for your device"},{default:s(()=>[J]),_:1}),L])]),W])],64)}}});var de=H(oe,[["__scopeId","data-v-4215f598"]]);export{de as default};
