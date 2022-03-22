<script setup>
import PriceItem from "@/components/PriceItem.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import ToolingIcon from "@/components/icons//IconTooling.vue";
import EcosystemIcon from "@/components/icons//IconEcosystem.vue";
import CommunityIcon from "@/components/icons//IconCommunity.vue";
import SupportIcon from "@/components/icons//IconSupport.vue";
import WelcomeItem from "../components/WelcomeItem.vue";
import IconBriefcase from "../components/icons/IconBriefcase.vue";
import IconParty from "../components/icons/IconParty.vue";
import { Head } from '@vueuse/head'
</script>

<template>
  <Head>
    <title>Pricing | AirSend</title>
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
      <h1>It's powerful for free, and Pro when you need it to be.</h1>
      <p>
        The Android app - with free syncing on multiple devices, be it laptops, desktops, phones or tablets - is free for most
        use-cases. It's only when you use AirSend to its fullest, with connections to all devices and
        different network access required, that Pro becomes a great upgrade.
      </p>
    </section>

    <br />
    <br />

    <section>
      <div class="prices">
        <PriceItem>
          <template #icon>
            <IconParty />
          </template>
          <template #heading>Starter</template>
          <template #price>$0</template>
          <template #description>Up to 5 connected devices on the same network</template>
        </PriceItem>

        <PriceItem>
          <template #icon>
            <IconBriefcase />
          </template>
          <template #heading>Pro</template>
          <template #price>$5 / pm</template>
          <template #description>Up to 10 connected devices on different networks</template>
        </PriceItem>
      </div>
    </section>
  </div>
</template>

