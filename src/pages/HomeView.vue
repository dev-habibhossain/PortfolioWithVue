<script setup>
import { RouterLink } from 'vue-router';
import HabibImage from '../assets/HabibHossain.png';

const featuredProjects = [
  { id: 1, title: 'Hero IO', desc: 'A comprehensive React-based app store with live search and local storage.', tag: 'React' },
  { id: 2, title: 'Productify', desc: 'Backend-focused API project utilizing TypeScript and Drizzle ORM.', tag: 'Node.js' },
  { id: 3, title: 'POS System', desc: 'High-density Inventory management system built with Laravel.', tag: 'Laravel' }
];

const services = [
  { title: 'Frontend Dev', desc: 'Crafting responsive UIs using Vue.js, React, and Tailwind CSS.', icon: '⚡' },
  { title: 'Backend Solutions', desc: 'Building robust APIs and server logic with Laravel and Node.js.', icon: '🛠️' },
  { title: 'Database Design', desc: 'Optimizing data structures with PostgreSQL and MongoDB.', icon: '💾' }
];
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    
    <section class="relative py-20 lg:py-32 border-b border-base-300">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new projects
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
            I build <span class="text-primary italic">minimalist</span> <br/> 
            digital products.
          </h1>
          <p class="text-lg opacity-70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <span class="font-bold text-base-content">Habib Hossain</span>. A Junior Full-Stack Developer 
            specializing in <span class="text-primary font-bold">MERN</span> & <span class="text-primary font-bold">Laravel</span>.
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <button class="btn btn-primary px-8 shadow-lg shadow-primary/20">View My Work</button>
            <button class="btn btn-outline border-base-300 px-8">Contact Me</button>
          </div>
        </div>
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-95 lg:h-95">
            <img :src="HabibImage" class="rounded-3xl w-full h-full object-cover shadow-2xl border-4 border-base-200 transform lg:rotate-3 hover:rotate-0 transition-all duration-500" />
            <div class="absolute -z-10 -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-base-200/30 border-b border-base-300">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-black text-primary">02+</div>
            <div class="text-[10px] uppercase tracking-widest opacity-50 font-bold">Years Experience</div>
          </div>
          <div>
            <div class="text-3xl font-black text-primary">15+</div>
            <div class="text-[10px] uppercase tracking-widest opacity-50 font-bold">Projects Completed</div>
          </div>
          <div>
            <div class="text-3xl font-black text-primary">10+</div>
            <div class="text-[10px] uppercase tracking-widest opacity-50 font-bold">Happy Clients</div>
          </div>
          <div>
            <div class="text-3xl font-black text-primary">Ubuntu</div>
            <div class="text-[10px] uppercase tracking-widest opacity-50 font-bold">Dev OS</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black tracking-tighter mb-3">Core Services.</h2>
        <p class="opacity-60 text-sm max-w-md mx-auto">Specialized in building scalable and performant web applications with modern tech stacks.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.title" class="p-10 bg-base-200 border border-base-300 rounded-3xl hover:border-primary/40 transition-all group">
          <div class="text-4xl mb-5 group-hover:scale-110 transition-transform">{{ service.icon }}</div>
          <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-sm opacity-60 leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-base-200/50 border-y border-base-300">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 class="text-3xl md:text-5xl font-black tracking-tighter">Featured Projects.</h2>
          <RouterLink to="/projects" class="btn btn-sm btn-outline rounded-full px-6 font-bold uppercase tracking-wider text-[10px]">View All Projects</RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="project in featuredProjects" :key="project.id" class="group bg-base-100 border border-base-300 p-8 rounded-4xl hover:shadow-xl transition-all duration-500">
            <div class="badge badge-primary font-black text-[9px] uppercase tracking-widest mb-4">{{ project.tag }}</div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-xs opacity-60 mb-8 leading-relaxed">{{ project.desc }}</p>
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.2em] border-b border-primary pb-0.5 hover:opacity-70">Case Study</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-28 text-center max-w-3xl mx-auto px-6">
      <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Let's build something <br/> <span class="text-primary italic">extraordinary</span>.</h2>
      <p class="text-lg opacity-60 mb-10 leading-relaxed">Currently looking for new opportunities and freelance projects. Let's talk about your idea.</p>
      <a href="mailto:your@email.com" class="btn btn-primary btn-md md:btn-lg px-10 rounded-full shadow-lg shadow-primary/20">Get In Touch</a>
    </section>

  </div>
</template>

<style scoped>
section {
  animation: slideUp 0.8s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>