import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import storeData from './store';

const app = createApp(App);
const store = createStore(storeData);

app.use(store).mount('#app');
