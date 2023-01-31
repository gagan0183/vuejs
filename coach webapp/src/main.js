import { createApp } from 'vue';
import Router from './router';
import App from './App.vue';

const app = createApp(App).use(Router);

app.mount('#app');
