import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const apiUrl = process.env.API_URL;
console.log('API URL:', apiUrl);

createApp(App)
  .use(router)
  .mount('#app')
