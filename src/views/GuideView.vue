<template>
  <div>
    <section>
      <h1>Guide</h1>
      <p>Here you can find a general testing guide as well as troubleshooting steps if you've run into a problem</p>
    </section>
    <br>
    <section>
      <h2>Testing</h2>
      <p>
        Things to do: Poke around, send messages, connect, disconnect, switch network off/on, share text to the app,
        paste a very long text and send, give bad data (e.g. scan fake QR)
      </p>
      <br />
      <p>
        I would be very thankful if you poked around the app, tried out its functionality and gave it a hard time :).
        When you find some issue, please drop me a message - what happened and what steps did you take to get there.
      </p>
      <br />
      <p>
        Get started testing by
        <router-link
          to="downloads"
          title="Download AirSend for your device"
        >downloading Airsend</router-link> today!
      </p>
    </section>
    <br />
    <section>
      <h2>Troubleshooting</h2>
      <p>
        Please write down the last steps you took and drop me a message. That will help me investigate and fix the
        issue.
        <br />Now, for you to solve the issue:
      </p>
      <br />
      <h3>App not responding:</h3>
      <p>Android</p>
      <ul>
        <li>Swipe up and hold (or press the rectangle button) to see all open apps. Close AirSend.</li>
        <li>Close AirSend.</li>
      </ul>
      <p>PC</p>
      <ul>
        <li>Open Task Manager and select AirSendWPF2.exe</li>
        <li>Click 'End process'</li>
      </ul>

      <br />
      <h3>Something not working right:</h3>
      <p>Click on Restart button in the app, it should be back to normal.</p>

      <br />
      <h3>Other issue:</h3>
      <p>Please drop me a message with issue description.</p>
    </section>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
