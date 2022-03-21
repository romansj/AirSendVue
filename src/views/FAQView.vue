<script setup>
// import RenderString from "../components/RenderString";
import ItemFAQ from "../components/ItemFAQ.vue";
import RenderString from "../components/RenderString.vue"
import linkify from "vue-linkify"


</script>



<template>
  <Head>
    <title>Frequently Asked Questions | AirSend</title>
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
      <h1>FAQ</h1>
      <p>Frequently asked questions</p>
    </section>

    <!-- Doesn't work -->
    <!-- <div style="background-color:aqua;">
      <RenderString :text="htmlContent" />
    </div> -->

    <br />

    <div class="faq_category" :key="key" v-for="(value, key) in qanda">
      <h2>{{ value[0] }}</h2>
      <ItemFAQ :key="key1" v-for="(value1, key1) in value[1]">
        <template #heading>{{ value1['q'] }}</template>
        <template #description>
          <span v-if="value1['a'].includes('[[')">
            {{ value1['a'].split('[[')[1] }}
            <a v-if="value1['a'].includes('https://')" :href="value1['a'].split('[[')[0]" target="_blank">{{ value1['a'].split('[[')[2] }}</a>
            <router-link v-else :to="value1['a'].split('[[')[0]">{{ value1['a'].split('[[')[2] }}</router-link>
            {{ value1['a'].split('[[')[3] }}
          </span>
          <span v-else >{{ value1['a'] }}</span>
        </template>
      </ItemFAQ>
    </div>

    <br />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>


<script>


/*
Syntax
named-link[[Start text[[link-text[[End text"

homepage[[Our homepage is accessible from[[this link[[" // can ommit last [[
homepage[[[[this link[[ is where you can access our homepage"

*/
let generalQuestions = [
  {
    q: "TEST Where can I download AirSend? START", a: "downloads[[[[Downloads page[[ is where you can download AirSend"
  },

  {
    q: "TEST Where can I download AirSend? MIDDLE", a: "downloads[[You can download AirSend on the [[Downloads page[[ and see installation instructions as well"
  },

  {
    q: "TEST Where can I download AirSend? END", a: "downloads[[You can download AirSend [[Downloads page"
  },

  {
    q: "Where can I download AirSend?", a: "downloads[[You can download AirSend on the [[Downloads page"
  },

  {
    q: "Why don't you have an exe installer?",
    a: "https://github.com/romansj/AirSendReleases/releases[[We recommend you use the Microsoft Store app, which is the same exe file, but verified so you know it is safe. However, if you are using Windows 7, you can download the exe file[[here"
  },

  {
    q: "Is AirSend free?", a: "pricing[[AirSend is free to use. If you require more functionality, a paid Pro version is available. See [[Pricing[[ for more details."
  },

]

let capabilityQuestions = [
  {
    q: "Is the app coming to Mac?", a: "There is no plan to support Mac OS at this time."
  },
  {
    q: "Is the app coming to iOS?", a: "There is no plan to support iOS at this time."
  },
  {
    q: "Are you going to support Bluetooth?", a: "Bluetooth is planned and in the works. Stay tuned!"
  },

]
let howToQuestions = [
  {
    q: "How do I connect a device?", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "How do I disconnect a device?", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "Can I disable AirSend from starting automatically?", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "Does AirSend reconnect to my devices when my phone connects to home wifi?", a: "guide[[Please see [[Troubleshooting guide[[."
  },


]

let troubleshootingQuestions = [
  {
    q: "I can't connect to another device", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "I can send messages from one device, but not from the other", a: "guide[[Please see [[Troubleshooting guide[[."
  },
]

let securityQuestions = [
  {
    q: "Is my data safe?", a: "Yes. Your data is encrypted and visible only to you."
  },
  {
    q: "What encryption standard do you use?", a: "AES-256"
  },
]

let map = new Map();
map.set('General', generalQuestions);
map.set('Capabilities / OS support', capabilityQuestions);
map.set('How-To', howToQuestions);
map.set('Troubleshooting', troubleshootingQuestions);
map.set('Security', securityQuestions);

export default {
  data() {
    return {
      qanda: map,
      htmlContent: `<router-link :to='downloads'>Downloads</router-link>`

    }
  },
}



</script>

<style>
.faq_category {
  margin-bottom: 2rem;
}
</style>