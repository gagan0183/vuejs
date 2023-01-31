import { createApp } from 'vue';
import Router from './router';

const app = createApp({}).use(Router);

app.mount('#app');
