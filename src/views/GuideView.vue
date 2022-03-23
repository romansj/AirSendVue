<script setup>
import { Head } from '@vueuse/head'
import ItemSummaryDetails from "../components/ItemSummaryDetails.vue";

</script>

<template>
  <Head>
    <title>Guide | AirSend</title>
    <meta name="title" content="Download and install AirSend app for Android and Windows devices" />
    <meta
      name="description"
      content="Download and install the latest version of AirSend app for Android and Windows devices on Google Play Store and Microsoft Store."
    />
    <meta
      name="keywords"
      content="airsend download, airsend install, airsend android, airsend windows, airsend app, clipboard sync, android, windows, share clipboard to mobile, download, easy clipboard sync"
    />
  </Head>

  <div>
    <section>
      <h1>Guide</h1>
      <p>Here you can find a general testing guide as well as troubleshooting steps if you've run into a problem</p>
      <br />
      <h2>Jump to:</h2>
      <div style="display:flex; flex-direction:column">
        <a href="#howto">How-to</a>
        <a href="#testing">Testing</a>
        <a href="#troubleshooting">Troubleshooting</a>
      </div>
    </section>
    <br />

    <section>
      <h2 id="howto">How-to guide</h2>
      <!-- <div class="faq_category" v-for="value in howToItems"> -->
      <!-- <h3>{{value.name}}</h3> -->
      <ItemSummaryDetails v-for="value in howToItems">
        <template #heading>
          <b>{{ value.name }}</b>
        </template>
        <template #description>
          <span v-for="value2 in value.step">
            <p v-html="value2.text"></p>
            <img class="img_guide_phone" :src="value2.image" />
            <br />
            <br />
          </span>
        </template>
      </ItemSummaryDetails>
      <!-- </div> -->
    </section>
    <br>

    <!-- <section>
      <h2 id="howto">How-to guide</h2>
      <div class="faq_category" :key="key" v-for="(value, key) in howToList">
        <h3>{{ value[0] }}</h3>
        <ItemSummaryDetails :key="key1" v-for="(value1, key1) in value[1]">
          <template #heading>{{ value1['q'] }}</template>
          <template #description>
            <span v-if="value1['a'].includes('[[')">
              {{ value1['a'].split('[[')[1] }}
              <a
                v-if="value1['a'].includes('https://')"
                :href="value1['a'].split('[[')[0]"
                target="_blank"
              >{{ value1['a'].split('[[')[2] }}</a>
              <router-link v-else :to="value1['a'].split('[[')[0]">{{ value1['a'].split('[[')[2] }}</router-link>
              {{ value1['a'].split('[[')[3] }}
            </span>
            <span v-else v-html="value1['a']"></span>
          </template>
        </ItemSummaryDetails>
      </div>
    </section>

    <br />-->

    <section>
      <h2 id="testing">Testing guide</h2>
      <p>
        Things to do: Poke around, send messages, connect, disconnect, switch network off/on, share text to the app,
        paste a very long text and send, write your language's special characters, provide bad data (e.g. scan fake QR)
      </p>
      <br />
      <p>
        I would be very thankful if you poked around the app, tried out its functionality and gave it a hard time :).
        When you find some issue, please drop me a message - what happened and what steps did you take to get there.
      </p>
      <br />
      <p>
        Get started testing by
        <router-link to="downloads" title="Download AirSend for your device">downloading Airsend</router-link>today!
      </p>
    </section>
    <br />
    <section>
      <h2 id="troubleshooting">Troubleshooting guide</h2>
      <p>
        Please write down the last steps you took and drop me a message. That will help me investigate and fix the
        issue.
        <br />Now, for you to solve the issue:
      </p>
      <br />
      <h3>App not responding:</h3>
      <p>Android</p>
      <ul>
        <li>Swipe up and hold (or press the rectangle button) to see all open apps. Close AirSend.</li>
        <li>Close AirSend.</li>
      </ul>
      <p>PC</p>
      <ul>
        <li>Open Task Manager and select AirSendWPF2.exe</li>
        <li>Click 'End process'</li>
      </ul>

      <br />
      <h3>Something not working right:</h3>
      <p>Click on Restart button in the app, it should be back to normal.</p>

      <br />
      <h3>Other issue:</h3>
      <p>Please drop me a message with issue description.</p>
    </section>
  </div>
</template>

<style scoped>
.img_guide_phone{
width: 100%;
}

@media (min-width: 1024px) {
  .img_guide_phone{
width: 20rem;
  }
}
</style>

<script>







let connectionQuestions = [
  {
    q: "How to connect to a device?", a: `You want to connect from device A to device B.<br><br>
    On device B:<br>
    open AirSend<br>
    on Connections section swipe up or tap 'This device'<br><br>
    On Device A:<br>
    on Connections section tap 'Connect'<br>
    Scan the QR code or enter IP address and port<br><br>
    All done!
    `
  },

  {
    q: "How to disconnect a device?", a: "Go to Connections section, long tap on the device and in the menu that appears tap Disconnect"
  },

  {
    q: "How can I get a QR code?", a: "Go to Connections section and swipe up or tap 'This device'"
  },

  {
    q: "How can I see my device's IP address and port number?", a: "Go to Connections section and swipe up or tap 'This device'"
  },

]
let otherQuestions = [
  {
    q: "How do I disable AirSend from starting automatically?", a: "Open Settings and turn off the toggle 'Start AirSend automatically'"
  },

  {
    q: "How do I disable notifications?", a: "Open Settings and toggle on/off the type of notifications you would like to receive. You will still receive messages even if you turn off the notifications"
  },

  {
    q: "How do I disable battery optimization?", a: "Open Settings and under 'Disable battery optimization' tap 'Disable' and follow the on screen prompts"
  },

]
let deviceQuestions = [
  {
    q: "How do I rename a device?", a: "You are on device A, you see device B and you want to rename it. Open Settings on device B and set the name for the device. You will need to reconnect to see the change on device B"
  },

]
let messagingQuestions = [
  {
    q: "How can I send a message only to one device?", a: "In Messages section, under 'Select recipient' tap the selection box and pick 'Selected devices'. You will be able to select one or many devices. If you already have selected devices before, but would like to change the selection, tap the devices icon that shows to the right of selection box when 'Selected devices' is picked"
  },

]


let map = new Map();
map.set('Connections', connectionQuestions);
map.set('Messaging', messagingQuestions);
map.set('Devices', deviceQuestions);
map.set('Other', otherQuestions);


let howToConnect = `
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect to a device",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "src/assets/images/how_to/section_connections.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Tap 'Connect'",
      "image": "src/assets/images/how_to/connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "The connection dialog will be displayed. You can now scan the other device's QR code or enter IP address and port manually",
      "image": "src/assets/images/how_to/connect_device/3_dialog_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "On the second device, go to the Connections page as well and tap on 'This device'",
      "image": "src/assets/images/how_to/connect_device/2_button_connect.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Now on the first device scan the QR code or enter IP adress and port.",
      "image": "src/assets/images/how_to/connect_device/4_scanned_qr.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "All done, you're connected!",
      "image": "src/assets/images/how_to/device_list.jpg"
    }
  ]
}
`
let howToDisconnect =
  `
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to disconnect a device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Connections page",
      "image": "src/assets/images/how_to/modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Long tap on the device",
      "image": "src/assets/images/how_to/modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the menu that appears tap Disconnect",
      "image": "src/assets/images/how_to/modify_notifications/3_notification_toggled.jpg"
    }
  ]
}  
`

let howToMessageOneDevice =
  `
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How can I send a message to only one device?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Go to Messages page",
      "image": "src/assets/images/how_to/message_one_device/0_messages_page.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Under 'Select recipient' tap the selection box and pick 'Selected devices'",
      "image": "src/assets/images/how_to/message_one_device/2_recipient_choice_selected.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "In the dialog that appears select one or many devices you would like to message. Tap 'Confirm' after you're done selecting",
      "image": "src/assets/images/how_to/message_one_device/4_dialog_recipient_choice_checked.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Write and send your message",
      "image": "src/assets/images/how_to/message_one_device/5_message_typed.jpg"
    }
  ]
}
`
let howToDisableNotifications =
  `
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How do I disable notifications on AirSend?",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Open Settings",
      "image": "src/assets/images/how_to/modify_notifications/section_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Scroll down to Notifications page",
      "image": "src/assets/images/how_to/modify_notifications/2_notification_settings.jpg"
    },
    {
      "@type": "HowToStep",
      "text": "Toggle on/off the type of notifications you would like to receive",
      "image": "src/assets/images/how_to/modify_notifications/3_notification_toggled.jpg"
    }
  ]
}

`

let arr = [JSON.parse(howToConnect), JSON.parse(howToDisconnect), JSON.parse(howToMessageOneDevice), JSON.parse(howToDisableNotifications)]

export default {
  data() {
    return {
      howToList: map,
      howToItems: arr
    }
  },
}
</script>