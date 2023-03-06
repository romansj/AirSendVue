import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import Components from 'unplugin-vue-components/vite'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({}),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // base:  '/AirSendVue/',
});

// module.exports={
//   runtimeCompiler: true
// }
