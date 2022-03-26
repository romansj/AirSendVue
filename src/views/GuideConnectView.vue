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



let howToConnect = `
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
`


let arr = [JSON.parse(howToConnect)]

export default {
  data() {
    return {
      howToItems: arr
    }
  },
}
</script>