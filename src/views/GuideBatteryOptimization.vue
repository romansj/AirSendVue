<script setup>
import { Head } from "@vueuse/head";
import ItemSummaryDetails from "../components/ItemSummaryDetails.vue";
</script>

<template>
  <Head>
    <title>How to connect to a device? | AirSend</title>
    <meta name="title" content="How to connect to a device? | AirSend" />
    <meta
      name="description"
      content="Guide how to connect to a device in AirSend app."
    />
    <meta
      name="keywords"
      content="guide, airsend, airsend guide, connect, connect device"
    />
  </Head>



  <div>
    <section>
      <h1>Guide</h1>
    </section>
    <br />



    <section>
      <h2 id="howto">How-to guide</h2>
      <ItemSummaryDetails>
        <template #heading>
          <b>How to disable battery optimization?</b>
        </template>
        <template #description>
          <p>
            AirSend needs to be able to run in the background so you could
            receive messages.
          </p>
          <p>
            Some manufacturers deliberately prevent apps from running in the
            background, only giving exceptions to large apps.
          </p>
          <p>To allow AirSend to work, please disable battery optimization.</p>
          <p>
            More:
            <a href="https://dontkillmyapp.com/">https://dontkillmyapp.com/</a>
          </p>
          <br />
          <!-- <span class="video_list">
            <p>Navigate to your phone's app settings</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/1 - apps.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <p>Open the app list</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/2 - apps list.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <p>Find and open AirSend</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/3 - open app.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <p>Open Battery usage / Battery settings</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/4 - battery.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <p>Enable background activity</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/5 - allow background.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <p>Enable auto launch</p>
            <video loop="true" autoplay="true" controls width="250">
              <source
                src="/disable_battery_opt_a12/6 - allow auto launch.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <br />
            <br />
          </span> -->
        </template>
      </ItemSummaryDetails>
    </section>
    <br />
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .img_guide_phone {
    width: 20rem;
  }
}
.video_list {
  display: flex;
  flex-direction: column;
}

.video_list video {
  margin-bottom: 1rem;
}

.img_guide_phone {
  width: 100%;
}




</style>