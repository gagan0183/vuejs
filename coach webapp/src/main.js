import { createApp } from 'vue';
import Router from './router';

import store from './store/index.js';
import App from './App.vue';

const app = createApp(App).use(Router).use(store);

app.mount('#app');
