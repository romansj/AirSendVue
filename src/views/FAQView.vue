<script setup>
import { Head } from '@vueuse/head'


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

    <br />

    <section>
      <div class="faq_category" v-for="value in faqAll">
        <h3>{{ value.name }}</h3>
        <ItemSummaryDetails v-for="value1 in value.mainEntity">
          <template #heading>
            <b>{{ value1.name }}</b>
          </template>
          <template #description>
            <p v-html="value1.acceptedAnswer.text"></p>
          </template>
        </ItemSummaryDetails>
      </div>
    </section>
    <br />

    <!-- <section>

      <ItemSummaryDetails v-for="value in faq.mainEntity">
        <template #heading>
          <b>{{ value.name }}</b>
        </template>
        <template #description>
          <p v-html="value.acceptedAnswer.text"></p>
        </template>
      </ItemSummaryDetails>
    </section>
    <br />

    <div class="faq_category" :key="key" v-for="(value, key) in qanda">
      <h2>{{ value[0] }}</h2>
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
          <span v-else>{{ value1['a'] }}</span>
        </template>
      </ItemSummaryDetails>
    </div>

    <br />-->
  </div>
</template>




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
    q: "Does AirSend reconnect to my devices when my phone connects to home wifi?", a: "guide[[Please see [[Troubleshooting guide[[."
  },
]

let osSupportQuestions = [
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






let troubleshootingQuestions = [
  {
    q: "I can't connect to another device", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "I can send messages from one device, but not from the other", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "I can't see the Android notification", a: "guide[[Please see [[Troubleshooting guide[[."
  },
  {
    q: "Android app closes on its own", a: "guide[[Please see [[Troubleshooting guide[[."
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
map.set('Capabilities', capabilityQuestions);
map.set('OS support', osSupportQuestions);
map.set('Troubleshooting', troubleshootingQuestions);
map.set('Security', securityQuestions);


let faqSt =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I download AirSend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can download AirSend on the <a href='https://airsend.vercel.app/downloads' target='_blank'>Downloads page</a>"
      }
    },
    {
      "@type": "Question",
      "name": "Why don't you have an exe installer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend you use the Microsoft Store app, which is the same exe file, but verified so you know it is safe. However, if you are using Windows 7, you can download the exe file <a href='https://airsend.vercel.app/releases' target='_blank'>here</a>"
      }
    },
    {
      "@type": "Question",
      "name": "Is AirSend free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AirSend is free to use. If you require more functionality, a paid Pro version is available. See <a href='https://airsend.vercel.app/pricing' target='_blank'>Pricing</a> for more details."
      }
    },
    {
      "@type": "Question",
      "name": "Does AirSend reconnect to my devices when my phone connects to home wifi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AirSend reconnects to saved devices when network connection is reestablished."
      }
    },
    {
      "@type": "Question",
      "name": "Is the app coming to Mac?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no plan to support Mac OS at this time."
      }
    },
    {
      "@type": "Question",
      "name": "Is the app coming to iOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no plan to support iOS at this time."
      }
    },
    {
      "@type": "Question",
      "name": "Are you going to support Bluetooth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bluetooth is planned and in the works. Stay tuned!"
      }
    }
    ,
    {
      "@type": "Question",
      "name": "I can't connect to another device",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "I can send messages from one device, but not from the other",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "I can't see the Android notification",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "Android app closes on its own",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "Is my data safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your data is encrypted and visible only to you."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "What encryption standard do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AES-256"
      }
    }
  ]
}
`

let faqGeneral =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "General",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I download AirSend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can download AirSend on the <a href='https://airsend.vercel.app/downloads' target='_blank'>Downloads page</a>"
      }
    },
    {
      "@type": "Question",
      "name": "Why don't you have an exe installer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend you use the Microsoft Store app, which is the same exe file, but verified so you know it is safe. However, if you are using Windows 7, you can download the exe file <a href='https://airsend.vercel.app/releases' target='_blank'>here</a>"
      }
    },
    {
      "@type": "Question",
      "name": "Is AirSend free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AirSend is free to use. If you require more functionality, a paid Pro version is available. See <a href='https://airsend.vercel.app/pricing' target='_blank'>Pricing</a> for more details."
      }
    }
  ]
}
`

let faqOSSupport =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Operating System Support",
  "mainEntity": [

    {
      "@type": "Question",
      "name": "Is the app coming to Mac?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no plan to support Mac OS at this time."
      }
    },
    {
      "@type": "Question",
      "name": "Is the app coming to iOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no plan to support iOS at this time."
      }
    }

  ]
}
`
let faqCapabilties =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Capabilities",
  "mainEntity": [

    {
      "@type": "Question",
      "name": "Does AirSend reconnect to my devices when my phone connects to home wifi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AirSend reconnects to saved devices when network connection is reestablished."
      }
    },
    {
      "@type": "Question",
      "name": "Are you going to support Bluetooth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bluetooth is planned and in the works. Stay tuned!"
      }
    }


  ]
}
`
let faqTroubleshooting =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Troubleshooting",
  "mainEntity": [
    
    {
      "@type": "Question",
      "name": "I can't connect to another device",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "I can send messages from one device, but not from the other",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "I can't see the Android notification",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "Android app closes on its own",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please see <a href='https://airsend.vercel.app/guide' target='_blank'>Troubleshooting guide</a>."
      }
    }


  ]
}
`
let faqSecurity =
  `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Security",
  "mainEntity": [
    
    {
      "@type": "Question",
      "name": "Is my data safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your data is encrypted and visible only to you."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "What encryption standard do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AES-256"
      }
    }


  ]
}
`

let faqParsed = JSON.parse(faqSt)
let faqAllParsed = [JSON.parse(faqGeneral), JSON.parse(faqOSSupport), JSON.parse(faqCapabilties), JSON.parse(faqTroubleshooting), JSON.parse(faqSecurity)]

export default {
  data() {
    return {
      qanda: map,
      faq: faqParsed,
      faqAll: faqAllParsed
    }
  },
}

</script>