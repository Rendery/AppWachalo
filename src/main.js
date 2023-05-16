import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from "primevue/config";

import "@/primevue-styles.css";
import './assets/main.css'

import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import Listbox from "primevue/listbox";

const app = createApp(App)
app.use(PrimeVue);
app.component("Dropdown", Dropdown);
app.component("Card", Card);
app.component("Listbox", Listbox);

app.use(router);
app.mount('#app');
