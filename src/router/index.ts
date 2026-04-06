import  AboutView  from '@/pages/AboutView.vue';
import  HomeView  from '@/pages/HomeView.vue';
import ProjectView from '@/pages/ProjectView.vue';
import SkillView from '@/pages/SkillView.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  {path:'/projects', component: ProjectView},
  {path: '/skills', component: SkillView},
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router 