import{a as _,o,b as i,f as p,i as v,H as w,w as s,e,F as d,s as h,n as g,p as m,q as y,g as c,t as b,v as S}from"./vendor.5ed81439.js";import{I as T}from"./ItemSummaryDetails.3358d266.js";import{_ as H}from"./index.d2f66814.js";const t=a=>(m("data-v-29f19234"),a=a(),y(),a),x=t(()=>e("title",null,"Guide | AirSend",-1)),I=t(()=>e("meta",{name:"title",content:"Download and install AirSend app for Android and Windows devices"},null,-1)),k=t(()=>e("meta",{name:"description",content:"Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."},null,-1)),A=t(()=>e("meta",{name:"keywords",content:"airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"},null,-1)),C=g('<section data-v-29f19234><h1 data-v-29f19234>Guide</h1><p data-v-29f19234>Here you can find a general testing guide as well as troubleshooting steps if you&#39;ve run into a problem</p><br data-v-29f19234><h2 data-v-29f19234>Jump to:</h2><div style="display:flex;flex-direction:column;" data-v-29f19234><ul data-v-29f19234><li data-v-29f19234><a href="#howto" data-v-29f19234>How-to</a></li><ul data-v-29f19234><li data-v-29f19234><a href="/guide/how-to-connect" data-v-29f19234>How to connect to a device?</a></li><li data-v-29f19234><a href="/guide/how-to-disconnect" data-v-29f19234>How to disconnect a device?</a></li><li data-v-29f19234><a href="/guide/how-to-message-one-device" data-v-29f19234>How can I send a message to only one device?</a></li><li data-v-29f19234><a href="/guide/how-to-disable-notifications" data-v-29f19234>How do I disable notifications on AirSend?</a></li></ul><li data-v-29f19234><a href="#testing" data-v-29f19234>Testing</a></li><li data-v-29f19234><a href="#troubleshooting" data-v-29f19234>Troubleshooting</a></li></ul></div></section><br data-v-29f19234>',2),j=t(()=>e("h2",{id:"howto"},"How-to guide",-1)),O=["innerHTML"],D=["src"],G=t(()=>e("br",null,null,-1)),N=t(()=>e("br",null,null,-1)),q=t(()=>e("br",null,null,-1)),P=t(()=>e("h2",{id:"testing"},"Testing guide",-1)),B=t(()=>e("p",null," Things to do: Poke around, send messages, connect, disconnect, switch network off/on, share text to the app, paste a very long text and send, write your language's special characters, provide bad data (e.g. scan fake QR) ",-1)),M=t(()=>e("br",null,null,-1)),Q=t(()=>e("p",null," I would be very thankful if you poked around the app, tried out its functionality and gave it a hard time :). When you find some issue, please drop me a message - what happened and what steps did you take to get there. ",-1)),R=t(()=>e("br",null,null,-1)),V=c(" Get started testing by "),Y=c("downloading Airsend"),J=c("today! "),L=g('<br data-v-29f19234><section data-v-29f19234><h2 id="troubleshooting" data-v-29f19234>Troubleshooting guide</h2><p data-v-29f19234> Please write down the last steps you took and drop me a message. That will help me investigate and fix the issue. <br data-v-29f19234>Now, for you to solve the issue: </p><br data-v-29f19234><h3 data-v-29f19234>App not responding:</h3><p data-v-29f19234>Android</p><ul data-v-29f19234><li data-v-29f19234>Swipe up and hold (or press the rectangle button) to see all open apps. Close AirSend.</li><li data-v-29f19234>Close AirSend.</li></ul><p data-v-29f19234>PC</p><ul data-v-29f19234><li data-v-29f19234>Open Task Manager and select AirSendWPF2.exe</li><li data-v-29f19234>Click &#39;End process&#39;</li></ul><br data-v-29f19234><h3 data-v-29f19234>Something not working right:</h3><p data-v-29f19234>Click on Restart button in the app, it should be back to normal.</p><br data-v-29f19234><h3 data-v-29f19234>Other issue:</h3><p data-v-29f19234>Please drop me a message with issue description.</p></section>',2);let W=[{q:"How to connect to a device?",a:`You want to connect from device A to device B.<br><br>
    On device B:<br>
    open AirSend<br>
    on Connections section swipe up or tap 'This device'<br><br>
    On Device A:<br>
    on Connections section tap 'Connect'<br>
    Scan the QR code or enter IP address and port<br><br>
    All done!
    `},{q:"How to disconnect a device?",a:"Go to Connections section, long tap on the device and in the menu that appears tap Disconnect"},{q:"How can I get a QR code?",a:"Go to Connections section and swipe up or tap 'This device'"},{q:"How can I see my device's IP address and port number?",a:"Go to Connections section and swipe up or tap 'This device'"}],F=[{q:"How do I disable AirSend from starting automatically?",a:"Open Settings and turn off the toggle 'Start AirSend automatically'"},{q:"How do I disable notifications?",a:"Open Settings and toggle on/off the type of notifications you would like to receive. You will still receive messages even if you turn off the notifications"},{q:"How do I disable battery optimization?",a:"Open Settings and under 'Disable battery optimization' tap 'Disable' and follow the on screen prompts"}],z=[{q:"How do I rename a device?",a:"You are on device A, you see device B and you want to rename it. Open Settings on device B and set the name for the device. You will need to reconnect to see the change on device B"}],E=[{q:"How can I send a message only to one device?",a:"In Messages section, under 'Select recipient' tap the selection box and pick 'Selected devices'. You will be able to select one or many devices. If you already have selected devices before, but would like to change the selection, tap the devices icon that shows to the right of selection box when 'Selected devices' is picked"}],n=new Map;n.set("Connections",W);n.set("Messaging",E);n.set("Devices",z);n.set("Other",F);let U=`
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
`,K=`
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
`,X=`
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
`,Z=`
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

`,$=[JSON.parse(U),JSON.parse(K),JSON.parse(X),JSON.parse(Z)];const ee={data(){return{howToList:n,howToItems:$}}},te=Object.assign(ee,{setup(a){return(u,oe)=>{const f=_("router-link");return o(),i(d,null,[p(v(w),null,{default:s(()=>[x,I,k,A]),_:1}),e("div",null,[C,e("section",null,[j,(o(!0),i(d,null,h(u.howToItems,l=>(o(),b(T,null,{heading:s(()=>[e("b",null,S(l.name),1)]),description:s(()=>[(o(!0),i(d,null,h(l.step,r=>(o(),i("span",null,[e("p",{innerHTML:r.text},null,8,O),e("img",{class:"img_guide_phone",src:r.image},null,8,D),G,N]))),256))]),_:2},1024))),256))]),q,e("section",null,[P,B,M,Q,R,e("p",null,[V,p(f,{to:"downloads",title:"Download AirSend for your device"},{default:s(()=>[Y]),_:1}),J])]),L])],64)}}});var se=H(te,[["__scopeId","data-v-29f19234"]]);export{se as default};
