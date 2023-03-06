<script setup>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
</script>

<template>
  <!--
AirSend rich preview snippet objects:
    HowTo
    $ FAQ
    $ SoftwareApp
    $ Video (or logo, but only video has microdata sample code) 
    -->

  <header>
    <nav role="navigation">
      <div id="menuToggle">
        <!-- A fake / hidden checkbox is used as click reciever, so you can use the :checked selector on it. -->
        <div id="menuToggleDiv">
          <input type="checkbox" v-model="message" />

          <!-- Some spans to act as a hamburger. -->
          <span></span>
          <span></span>
          <span></span>
          <div></div>
        </div>

        <!-- Too bad the menu has to be inside of the button but hey, it's pure CSS magic. -->
        <ul id="menu" class="menuClosed">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="features">Features</RouterLink>
          </li>
          <!-- <li><RouterLink to="/pricing">Pricing</RouterLink></li> -->
          <li>
            <RouterLink to="downloads">Downloads</RouterLink>
          </li>
          <li>
            <RouterLink to="guide">Guide</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer>
    <p>All trademarks belong to their respective owners.</p>
    <br />
    <p>iOS® is a registered trademark of Cisco in the US and is used by Apple under license.</p>
    <br />
    <p>Windows is a registered trademark of Microsoft Corporation in the United States and/or other countries.</p>
    <br />
    <RouterLink to="privacy">Privacy Policy</RouterLink>
    <br />
    <p>Copyright 2023 <a href="https://github.com/acherrydev" target="_blank" rel="noopener noreferrer">CherryDev</a></p>
  </footer>
</template>

<script>
import { sleep, noscript } from "./utils.js";

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `My website`,
      description: `My beautiful website`,
    });

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
  data() {
    return {
      message: false,
    };
  },

  watch: {
    // whenever question changes, this function will run
    message(isMenuOpen, wasMenuOpen) {
      // console.log(isMenuOpen + ", old: " + wasMenuOpen);
      this.toggleScrollability(isMenuOpen);
    },
    $route(to, from) {
      // console.log(to + ", old: " + from);

      this.updateMenuToggle(false);
      // react to route changes...
    },
  },

  methods: {
    async toggleScrollability(isMenuOpen) {
      const [body] = document.getElementsByTagName("body");
      const menu = document.getElementById("menu");
      if (isMenuOpen) {
        body.classList.remove(`scrollable`);
        body.classList.add(`not_scrollable`);

        menu.classList.remove(`menuClosed`);
        menu.classList.add(`menuOpen`);
      } else {
        body.classList.add(`scrollable`);
        body.classList.remove(`not_scrollable`);

        menu.classList.add(`menuClosed`);
        menu.classList.remove(`menuOpen`);
      }
    },

    async updateMenuToggle(isOpen) {
      await sleep(200);
      // console.log("isOpen" + isOpen);
      this.message = isOpen;
    },
  },

  computed: {},
});
</script>

<style>@import "@/assets/base.css";
@import "@/assets/layout.css";
@import "@/assets/menu.css";</style>
