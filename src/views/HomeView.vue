<script setup>
import ItemFeature from '../components/ItemFeature.vue';
import IconQRCode from '../components/icons/IconQRCode.vue';
import IconCastConnection from '../components/icons/IconCastConnection.vue';
import IconLock from '../components/icons/IconLock.vue';


</script>

<template>
  <div>
    <section class="hero_text">
      <h1>Welcome!</h1>
      <p>
        Download Airsend for your device on the
        <router-link
          to="downloads"
          title="Download AirSend app for Android and Windows devices"
        >Downloads</router-link> page
      </p>
    </section>
    <br />
    <br />
    <section>
      <h1>What makes AirSend special?</h1>
      <p>
        AirSend takes the simplicity of basic clipboard synchronization apps like Pushbullet, and merges it with
        the feature richness of other powerful synchronization and productivity apps. Take a look at some of the
        best features:
      </p>
      <br />

      <ItemFeature>
        <template #icon>
          <IconQRCode />
        </template>
        <template #heading>Easy setup</template>
        Get started just by scanning the QR code to connect to a device
      </ItemFeature>

      <ItemFeature>
        <template #icon>
          <IconCastConnection />
        </template>
        <template #heading>Instant-syncing, cross-platform</template>
        Not only can you connect to many devices at the same time, but you can use any Windows and any
        Android device with an Internet connection
      </ItemFeature>

      <ItemFeature>
        <template #icon>
          <IconLock />
        </template>
        <template #heading>Security</template>
        The content you send is encrypted, so only you can see it
      </ItemFeature>

      <br />
      <p>
        See all the features of AirSend on the
        <router-link to="features">Features</router-link> page
      </p>
    </section>

    <br />
    <br />
    <section>
      <h1>AirSend usage demo</h1>
      <div style="--aspect-ratio: 16/9;">
        <iframe
          src="https://www.youtube.com/embed/zj8ajbekSD0"
          title="YouTube video player"
          frameborder="0"
          width="1600"
          height="900"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
