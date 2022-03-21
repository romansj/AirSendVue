<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import IconQRCode from "./icons/IconQRCode.vue";
import IconSpeed from "./icons/IconSpeed.vue";
import IconLock from "./icons/IconLock.vue";
import IconRestart from "./icons/IconRestart.vue";
import IconDevices from "./icons/IconDevices.vue";
import ItemFeature from "./ItemFeature.vue";
import IconCastConnection from "./icons/IconCastConnection.vue";
import IconShootingStar from "./icons/IconShootingStar.vue";
import IconRestart1 from "./icons/IconRestart.vue";
import IconLocation from "./icons/IconLocation.vue";
</script>

<template>
  <ItemFeature>
    <template #icon>
      <IconQRCode />
    </template>
    <template #heading>Easy setup</template>
    Get started just by scanning the QR code to connect to a device
  </ItemFeature>

  <ItemFeature>
    <template #icon>
      <IconDevices />
    </template>
    <template #heading>Multiple device support</template>
    Connect up to 5 devices at the same time and have them all in sync. You copy text and it's
    instantly available on all your connected devices
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
      <IconShootingStar />
    </template>
    <template #heading>A seriously beautiful design</template>
    AirSend was designed as a native, polished app, with attention to detail in its animations, UI
    and UX.
  </ItemFeature>

  <ItemFeature>
    <template #icon>
      <IconSpeed />
    </template>
    <template #heading>Speed</template>
    Your connected devices receive sent messages with virtually no delay
  </ItemFeature>

  <ItemFeature>
    <template #icon>
      <IconLock />
    </template>
    <template #heading>Security</template>
    The content you send is encrypted, so only you can see it
  </ItemFeature>

  <ItemFeature>
    <template #icon>
      <IconRestart />
    </template>
    <template #heading>Automation</template>
    If your device loses network connection or if you restart it, AirSend will automatically
    reconnect to previously connected devices, and AirSend will send any text that failed to send.
  </ItemFeature>

  <ItemFeature>
    <template #icon>
      <IconLocation />
    </template>
    <template #heading>It's only the beginning</template>
    Huge features are planned in the long-run: image & file transmission, Bluetooth connectivity &
    completely automated clipboard synchronization
  </ItemFeature>
</template>  

<style lang="css" scoped>
/* Features */

</style>