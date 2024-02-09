import Main from '../pages/Main.vue';
import PostPage from '../pages/PostPage.vue';
import PostPageWidthStore from '../pages/PostPageWidthStore.vue';
import About from '../pages/About.vue';
import PostIdPage from '../pages/PostIdPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/posts',
		component: PostPage,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/posts/:id',
		component: PostIdPage,
	},
	{
		path: '/store',
		component: PostPageWidthStore,
	},
];

const router = createRouter({
	routes, 
	history: createWebHashHistory(),
});

export default router;