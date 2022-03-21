import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import { createMetaManager } from 'vue-meta'
import { createHead } from '@vueuse/head'




const app = createApp(App);

app.use(router);

// app.use(createMetaManager())

const head = createHead()

app.use(head)

app.mount("#app");

