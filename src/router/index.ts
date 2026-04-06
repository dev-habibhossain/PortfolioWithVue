import  AboutView  from '@/pages/AboutView.vue';
import  HomeView  from '@/pages/HomeView.vue';
import ProjectView from '@/pages/ProjectView.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  {path:'/projects', component: ProjectView},
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router 