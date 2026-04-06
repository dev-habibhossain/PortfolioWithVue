<script setup>
import { RouterLink } from 'vue-router';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'About', path: '/about' },
  { name: 'Blogs', path: '/blogs' },
];
</script>

<template>
  <div class="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300 px-4 lg:px-8 shadow-sm">
    
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-2xl bg-base-200 rounded-box w-52 border border-base-300">
          <li v-for="link in navLinks" :key="link.path">
            <RouterLink :to="link.path" active-class="text-primary font-bold">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      
      <RouterLink to="/" class="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
        <span class="text-primary">&lt;</span>Dev.Habib<span class="text-primary">/&gt;</span>
      </RouterLink>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink 
            :to="link.path" 
            class="hover:text-primary transition-colors duration-300 font-medium"
            active-class="text-primary bg-base-200"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <a href="#contact" class="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
        Hire Me
      </a>
    </div>
  </div>
</template>

<style scoped>

.router-link-active {
  background-color: transparent !important;
  font-weight: 700;
}
</style>