import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

import { createApp } from "vue";
import App from "./App.vue";

const Boolflix = createApp(App);
Boolflix.component("font-awesome-icon", FontAwesomeIcon);
Boolflix.mount("#app");
