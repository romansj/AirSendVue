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

  <div class="div_and_header">
    <header>
      <nav role="navigation">
        <div id="menuToggle">
          <!--
  A fake / hidden checkbox is used as click reciever,
  so you can use the :checked selector on it.
  -->
          <input type="checkbox" />

          <!--
  Some spans to act as a hamburger.
  
  They are acting like a real hamburger,
  not that McDonalds stuff.
  -->
          <span></span>
          <span></span>
          <span></span>

          <!--
  Too bad the menu has to be inside of the button
  but hey, it's pure CSS magic.
  -->
          <ul id="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/features">Features</router-link>
            <router-link to="/pricing">Pricing</router-link>
            <router-link to="/downloads">Downloads</router-link>
            <router-link to="/guide">Guide</router-link>
          </ul>
        </div>
      </nav>
    </header>

    <div class="content">
      <RouterView />
    </div>
  </div>

  <footer>
    <router-link to="privacy">Privacy Policy</router-link>
    <router-link to="legal">Terms & Conditions</router-link>
    <br />
    <p>Copyright 2022 CherryDev</p>
  </footer>
</template>

<script>
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
});
</script>

<style>
@import "@/assets/base.css";

/* top | right | bottom | left */

section {
  /* background-color: rgb(255, 0, 212); */

  width: 100%;
}

/* headings */
h1,
h2,
h3 {
  color: var(--color-heading);
  /* background-color: aqua; */
  /* margin: 3rem 0 1rem 0; */
  line-height: normal;
  margin-bottom: 1rem;
}

h1 {
  font-size: 1.8em;
}

/*  */

.icon {
  filter: invert(98%) sepia(98%) saturate(0%) hue-rotate(329deg)
    brightness(103%) contrast(101%);
}

footer {
  /* background-color: rgb(22, 131, 233); */
  margin-top: 5rem;

  max-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* navigation */
/* nav {
  background-color: rgb(45, 45, 45);
  border-radius: 30px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-accent);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--color-accent);
} */

/* links */
a,
.green {
  color: var(--color-text);

  text-underline-offset: 0.4em;
  text-decoration: underline 0.2em;
  transition: color 500ms, background-color 300ms;
}
/* nav a {
  color: white;
  text-decoration: none;
} */

a:hover {
  color: var(--color-accent);
  /* background-color: hsla(0, 0%, 100%, 0.2); */
}

/* nav a:hover {
  color: white;
  background-color: hsla(0, 0%, 100%, 0.2);
}

nav a {
  padding: 1rem 2rem 1rem 2rem;
  border-bottom: 1px solid var(--color-border);
  border-left: 0px;
} */

footer a {
  margin: 0 0 1rem 0;
}

/* nav a:first-of-type {
  border: 0;
} */

.download_links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* other */

summary {
  cursor: pointer;
}

ol {
  list-style-position: inside;
  padding-left: 0;
}

.img_guide {
  width: 100%;
  margin-bottom: 2rem;
}

.img_guide_s {
  max-width: 100%;
  max-height: 60vh;
  margin-bottom: 2rem;
}

.faq_category {
  margin-bottom: 2rem;
}

[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}

[style*="--aspect-ratio"] > img {
  height: auto;
}

/* menu */
body {
  margin: 0;
  padding: 0;
}

#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle router-link {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle router-link:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul {
  transform: none;
}
/* end menu */

@supports (--custom: property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }

  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }

  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}

.prices {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

.hero_text {
  text-align: center;
}

.hero_text h1 {
  font-size: 4rem;
}

/* downloads */
li {
  margin-bottom: 1rem;
}

#menu {
  position: absolute;
  width: 100%;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
header {
  max-height: 100vh;
  top: 0;
  position: sticky;
  z-index: 1;
}
@media (min-width: 1024px) {
  /*
 * Make this absolute positioned
 * at the top left of the screen
 */

  .app_content {
    height: 100vh;
    flex-direction: column;
    display: flex;
  }

  .content {
    flex-grow: 1;
    min-width: 1000px;
    max-width: 1000px;
    height: 100%;
    margin-left: 30rem;
  }

  /* .app_content{
  margin: 2rem;
  padding: 2rem;
} */

  #menu {
    position: absolute;
    width: 20rem;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menuToggle {
    display: block;
    position: relative;
    top: 50px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  .download_links {
    flex-direction: row;
  }

  .prices {
    flex-direction: row;
    gap: 2rem;
  }

  header {
    max-height: 100vh;
    top: 0;
    position: sticky;
  }

  /* Features */
  /* .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 0;
  } */

  /* .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  } */
  /* 
  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
