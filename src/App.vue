<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useHead } from '@vueuse/head'

</script>

<template>

  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/features">Features</RouterLink>
      <RouterLink to="/pricing">Pricing</RouterLink>
      <RouterLink to="/downloads">Downloads</RouterLink>
      <RouterLink to="/guide">Guide</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer>
    <router-link to="privacy">Privacy Policy</router-link>
    <router-link to="legal">Terms & Conditions</router-link>
    <br />
    <p>Copyright 2022 CherryDev</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const siteData = reactive({
      title: `My website`,
      description: `My beautiful website`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },
}
</script>

<style>
@import "@/assets/base.css";

/* top | right | bottom | left */

#app {
  /* background-color: bisque; */

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  padding: 1rem;
  margin: 1rem 0 1rem 0;
}

.content {
  /* background-color: beige; */

  width: 100%;
  flex-grow: 1;
  display: flex;

  padding: 2rem 0 2rem 0;
  margin: 1rem 0 1rem 0;
  /* justify-content: start; */
}

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
}

h1 {
  font-size: 1.8em;
}

/*  */

.icon {
  filter: invert(98%) sepia(98%) saturate(0%) hue-rotate(329deg)
    brightness(103%) contrast(101%);
}

header {
  max-height: 100vh;
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
nav {
  background-color: rgb(45, 45, 45);
  border-radius: 30px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-accent);
  /* color: white; */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: var(--color-accent);
}

/* links */
a,
.green {
  color: var(--color-text);

  text-underline-offset: 0.4em;
  text-decoration: underline 0.2em;
  transition: color 500ms, background-color 300ms;
}
nav a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: var(--color-accent);
  background-color: hsla(0, 0%, 100%, 0.2);
}

nav a:hover {
  color: white;
  background-color: hsla(0, 0%, 100%, 0.2);
}

nav a {
  padding: 1rem 2rem 1rem 2rem;
  border-bottom: 1px solid var(--color-border);
  border-left: 0px;
}

footer a {
  margin: 0 0 1rem 0;
}

nav a:first-of-type {
  border: 0;
}

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

[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}

[style*="--aspect-ratio"] > img {
  height: auto;
}

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

@media (min-width: 1024px) {
  #app {
    max-width: 1280px;
    min-height: 100%;
  }

  .download_links {
    flex-direction: row;
  }

  .prices {
    flex-direction: row;
    gap: 2rem;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  nav a {
    padding: 0 1rem;
    border-bottom: 0px;
    border-left: 1px solid var(--color-border);
  }

  header {
    display: flex;
    align-self: center;
  }

  .content {
    max-width: 1280px;
    padding: 3rem;
    margin: 4rem 0 4rem 0;

    flex-direction: column;
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
