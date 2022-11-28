import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Inkline, components } from "@inkline/inkline";
import "@inkline/inkline/inkline.scss";

import { inject } from "@vercel/analytics";

const app = createApp(App);

app.use(router);

app.use(Inkline, {
  components,
  colorMode: "system",
});

app.mount("#app");

inject();
