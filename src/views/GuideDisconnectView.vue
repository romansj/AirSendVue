<script setup>
import { Head } from '@vueuse/head'
import ItemSummaryDetails from '../components/ItemSummaryDetails.vue';

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
`


let arr = [JSON.parse(howToDisconnect)]

export default {
  data() {
    return {
      howToItems: arr
    }
  },
}
</script>