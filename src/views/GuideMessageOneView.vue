<script setup>
import { Head } from '@vueuse/head'
import ItemSummaryDetails from '../components/ItemSummaryDetails.vue';

</script>

<template>
  <Head>
    <title>How can I send a message to only one device? | AirSend</title>
    <meta name="title" content="How can I send a message to only one device? | AirSend" />
    <meta
      name="description"
      content="Guide how to send a message to only one device in AirSend."
    />
    <meta
      name="keywords"
      content="guide, airsend, airsend guide, message device"
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
`


let arr = [JSON.parse(howToMessageOneDevice)]

export default {
  data() {
    return {
      howToItems: arr
    }
  },
}
</script>