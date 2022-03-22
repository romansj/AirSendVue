<script setup>
import { Head } from '@vueuse/head'
</script>

<template>
  <Head>
    <title>About | AirSend</title>
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
      <h1>What is it for?</h1>
      <p>You know when you get a code on your phone that you need to enter on your PC?</p>
      <p>Or you have some text on your PC that you need on your phone?</p>
    </section>

    <br />

    <section>
      <h1>The AirSend way</h1>
      <p>Select some text, tap 'share' and choose AirSend</p>
      <img
        class="img_guide_s"
        src="@/assets/images/usage/share.png"
        alt="Image showing Android share menu outline with AirSend app highlighted"
      />
      <p>... and then just paste on your connected device. Voilà!</p>
      <img
        class="img_guide_s"
        src="@/assets/images/usage/paste_win.png"
        alt="Image showing text field with open right click context menu and 'Paste' option highlighted"
      />
      <h2>You already copied something and need to send it:</h2>
      <p>After copying, open notifications and tap 'send' in AirSend notification</p>
      <img
        class="img_guide_s"
        src="@/assets/images/usage/send_android.png"
        alt="Image showing AirSend notification with Send button"
      />
      <p>... and then just paste on your connected device. Voilà!</p>
      <img
        class="img_guide_s"
        src="@/assets/images/usage/paste_android.png"
        alt="Image showing text field with open long tap context menu and 'Paste' option"
      />
    </section>

    <section>
      <h1>Start using AirSend today!</h1>
      <p>
        Get started by
        <router-link
          to="downloads"
          title="Download AirSend for your Android and Windows device"
        >downloading Airsend</router-link> for your device
      </p>
    </section>
  </div>
</template>


