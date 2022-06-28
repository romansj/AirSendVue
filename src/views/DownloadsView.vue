<script setup>
import { Head } from "@vueuse/head";
import PriceItem from "@/components/PriceItem.vue";
import IconBriefcase from "../components/icons/IconBriefcase.vue";
import IconParty from "../components/icons/IconParty.vue";
</script>

<template>
  <Head>
    <title>Downloads | AirSend</title>
    <meta
      name="title"
      content="Download and install AirSend app for Android and Windows devices"
    />
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
      <h1><strong>Download</strong> AirSend for your device</h1>
      <p>
        AirSend is available for <strong>download</strong> for Android and Windows devices
      </p>
      <br>
      <div class="download_links">
        <PriceItem class="d_item">
          <template #icon>
            <img
              class="img_guide_phone"
              src="/android.png"
              style="height: 55px"
            />
          </template>
          <template #heading>Android app</template>
          <template #description>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.cherrydev.airsend"
              title="Download AirSend for Windows from the Play Store"
              >Download from the Play Store</a
            ></template
          >
        </PriceItem>

        <PriceItem class="d_item">
          <template #icon>
            <img
              class="img_guide_phone"
              src="/windows.png"
              style="height: 55px"
            />
          </template>
          <template #heading>Windows app</template>
          <template #description>
            <a
              target="_blank"
              href="https://github.com/romansj/AirSendReleases/releases"
              title="Download AirSend for Windows from GitHub"
              >Download from GitHub</a
            ></template
          >
        </PriceItem>

        <!-- <a
          target="_blank"
          href="https://www.microsoft.com/en-us/p/airsendwindows/9n80mlcvwf33"
          title="Download AirSend for Windows from GitHub"
        >
          <img
            style="height:55px;"
            src="@/assets/images/ms_store.png"
            alt="Microsoft Store badge logo"
          /> -->
      </div>

      <!-- <p>You can download AirSend for devices with Android 8 or later version, and Windows 10 or later version</p>
      <br />
      <details>
        <summary>Using an older version of Windows?</summary>
        If you are using an older version of Windows, you can
        <a
          target="_blank"
          href="https://github.com/romansj/AirSendReleases/releases"
          title="Download AirSend from GitHub releases page"
        >download AirSend here</a>
      </details> -->
    </section>
    <br />

    <section>
      <h1>Installation</h1>
      <p>
        After you have downloaded AirSend for Windows, follow the guide below to
        install the app:
      </p>
      <br />
      <ol>
        <li>Extract the downloaded .zip file</li>
        <li>Double click the AirSendWPF.exe file</li>
        <p class="emphasis">If you are asked to install a .NET runtime, please do so. Otherwise you will not be able to launch the app.</p>
         <img class="img_guide" style="max-width:450px;"  src="/net_runtime.png" />
        <br>
        <li>
          You will get a Security Warning prompt asking you to install a
          certificate. This allows the app to communicate securely with your
          other devices. Click 'Yes' at the bottom of the prompt.
        </li>

        <img class="img_guide" style="max-width:500px;" src="/certificate_warning.png" />

        <li>
          Next you will see a Windows Security Alert. Click 'Allow access' with
          the first checkbox selected. This allows the app to use your private
          network to send messages to your other devices.
        </li>

        <img class="img_guide" style="max-width:600px;"  src="/firewall_prompt.png" />

        <p class="emphasis">
          If you are often using a public network (cafe, work), then please also
          tick the second checkbox 'Public networks'
        </p>

        <br /><br />

        <li>All done!</li>
        <!-- 
        <img
          class="img_guide"
          srcset="
            ../assets/images/installation/download-airsend-extract-1000w.png 1000w,
            ../assets/images/installation/download-airsend-extract.png       2820w
          "
          sizes="(max-width: 1280px) 1000px, 2820px"
          src="../assets/images/installation/download-airsend-extract.png"
          title="This is what the contents of the extracted zip file will look like after you download AirSend"
          alt="Screenshot showing AirSend download contents after folder extraction, highlighting Install.ps1"
        />

        <li>Right click and choose "Run with PowerShell"</li>

        <img
          class="img_guide"
          srcset="
            ../assets/images/installation/install-airsend-1000w.png 1000w,
            ../assets/images/installation/install-airsend.png       2820w
          "
          src="../assets/images/installation/install-airsend.png"
          title="This is what the contents of the extracted zip file will look like after you download AirSend"
          alt="Screenshot showing AirSend download contents after folder extraction, highlighting Install.ps1"
        />

        <li>
          When you open AirSend, you will get a Windows Security Alert pop up.
          Tick both checkboxes (private for your home network and public if you
          are using workplace or coffee shop wifi)"
        </li>
        <img
          class="img_guide"
          style="max-width: 800px"
          src="@/assets/images/installation/install-airsend-firewall.png"
          alt="Screenshot showing Windows Security Alert pop up window, with Private networks checkbox checked"
        />
        <li>All done!</li> -->
      </ol>
    </section>

    <br />
    <section>
      <h1>Next steps</h1>
      <p>
        Now that you have successfully downloaded and installed AirSend, check
        out the following links:
      </p>
      <br />
      <p>
        <router-link to="about">About page</router-link> to see how to use
        AirSend
      </p>
      <p>
        <router-link to="guide">Guide page</router-link> to find out how you can
        help test and improve AirSend, how to fix common issues
      </p>
      <p>
        <router-link to="features">Features page</router-link> so you could take
        advantage of all great AirSend features
      </p>
    </section>
  </div>
</template>



<script>
// let photos = {
//   1: require('./assets/install-airsend.png'),
//   2: require('./assets/install-airsend.png'),

//   3: require('@/assets/images/installation/install-airsend.png'),
//   4: require('@/assets/images/installation/install-airsend.png')
// }

// export default {
//   computed: {
//     photos() { return photos }
//   }
// }
</script>

<style scoped>
.emphasis{
  font-style: italic;
}

.d_item {
  margin-bottom: 1rem;
  width: 100%;
}

@media (min-width: 1024px) {
  .d_item {
    margin-right: 1rem;
    width: 20rem;
  }
}
</style>