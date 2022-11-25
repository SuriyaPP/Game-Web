import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import HeaderView from '../views/HeaderView.vue'
import ServicesView from '../views/ServicesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
	{
		
		path: '/login',
		name: 'login',
		component: LoginView
	},
	{
		path: '/header',
		name: 'header',
		component: HeaderView
	},
	
	{
		
		path: '/services',
		name: 'services',
		component: ServicesView
	},
	
	
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        component: () => import('../views/ContactView.vue')
    },
	
  ]
})

export default router
