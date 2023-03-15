import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/bootstrap.css";
import "@/assets/js/bootstrap.js";

createApp(App).use(router).mount('#app')
