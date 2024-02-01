import { createApp } from 'vue'
import App from './App.vue';
import './assets/scss/main.scss';
import components from '../src/components/UI/index.js'
import router from './router/router.js';

const app = createApp(App);

components.forEach(i=>{
	app.component(i.name, i);
})

app.use(router).mount('#app');
