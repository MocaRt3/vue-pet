import { createApp } from 'vue'
import App from './App.vue';
import './assets/scss/main.scss';
import components from '../src/components/UI/index.js'
import router from './router/router.js';
import store from './store/index.js';
import directives from './directives/index.js';

const app = createApp(App);

components.forEach(i=>{
	app.component(i.name, i);
})

directives.forEach(i=>{
	app.directive(i.name, i);
});

app
	.use(router)
	.use(store)
	.mount('#app');
