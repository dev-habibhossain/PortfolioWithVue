<script setup>
import { ref, computed } from 'vue';

// আপনার প্রোজেক্ট ডাটা (Productify, Hero IO সহ)
const projects = ref([
  { 
    id: 1, 
    title: 'Hero IO', 
    category: 'MERN', 
    status: 'Live',
    desc: 'A comprehensive React-based app store application featuring live search, local storage integration, and data visualization via Recharts.',
    image: 'https://via.placeholder.com/800x500/282a36/bd93f9?text=Hero+IO',
    techs: ['React', 'Tailwind', 'Recharts', 'Local Storage']
  },
  { 
    id: 2, 
    title: 'Productify API', 
    category: 'Node.js', 
    status: 'Completed',
    desc: 'Robust backend-focused project utilizing TypeScript, PostgreSQL, and Drizzle ORM for high-performance API management.',
    image: 'https://via.placeholder.com/800x500/282a36/8be9fd?text=Productify+API',
    techs: ['TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Clerk Auth']
  },
  { 
    id: 3, 
    title: 'POS Inventory System', 
    category: 'Laravel', 
    status: 'In Progress',
    desc: 'A high-density inventory management system designed for businesses using Laravel and Tailwind CSS.',
    image: 'https://via.placeholder.com/800x500/282a36/ff79c6?text=POS+System',
    techs: ['Laravel', 'MySQL', 'DaisyUI', 'Blade']
  },
  { 
    id: 4, 
    title: 'Personal Portfolio', 
    category: 'Vue', 
    status: 'Live',
    desc: 'Minimalist SaaS-style portfolio built with Vue 3, featuring Dracula theme and responsive design.',
    image: 'https://via.placeholder.com/800x500/282a36/50fa7b?text=Portfolio',
    techs: ['Vue 3', 'Tailwind CSS', 'Vite']
  }
]);

const activeFilter = ref('All');
const categories = ['All', 'MERN', 'Laravel', 'Node.js', 'Vue'];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.value;
  return projects.value.filter(p => p.category === activeFilter.value);
});
</script>

<template>
  <div class="min-h-screen bg-base-100 pb-32">
    
    <section class="py-20 bg-base-200/30 border-b border-base-300">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-5xl lg:text-8xl font-black tracking-tighter mb-6">
          My <span class="text-primary italic text-6xl lg:text-7xl underline decoration-8 underline-offset-8">Creations.</span>
        </h1>
        <p class="text-lg opacity-60 max-w-2xl leading-relaxed">
          From concept to code, I build scalable web applications with a focus on clean architecture and smooth user experience.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 -mt-10 mb-24">
      <div class="bg-primary/10 border border-primary/20 rounded-[3rem] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center backdrop-blur-xl">
        <div class="space-y-6">
          <div class="badge badge-primary font-black px-4 py-3">FEATURED PROJECT</div>
          <h2 class="text-4xl lg:text-5xl font-black tracking-tighter">Hero IO — App Store</h2>
          <p class="text-lg opacity-70">A fully functional app discovery platform with real-time data handling and optimized search performance.</p>
          <div class="flex gap-4">
             <button class="btn btn-primary rounded-full px-8">Live Demo</button>
             <button class="btn btn-outline rounded-full px-8">View Case Study</button>
          </div>
        </div>
        <div class="relative group">
          <img src="https://via.placeholder.com/600x400/282a36/bd93f9?text=Hero+IO+Mockup" class="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
          <button 
            v-for="cat in categories" :key="cat"
            @click="activeFilter = cat"
            class="btn btn-sm rounded-full px-8 tracking-widest font-bold"
            :class="activeFilter === cat ? 'btn-primary' : 'btn-ghost border border-base-300'"
          >
            {{ cat }}
          </button>
        </div>
        <div class="text-sm opacity-50 font-mono">Showing {{ filteredProjects.length }} Projects</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="project in filteredProjects" :key="project.id" 
             class="group flex flex-col space-y-6">
          <div class="aspect-[16/10] bg-base-200 rounded-[2.5rem] overflow-hidden border border-base-300 relative">
             <img :src="project.image" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
             <div class="absolute bottom-6 left-6 flex gap-2">
                <span v-for="tech in project.techs.slice(0, 3)" :key="tech" class="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                  {{ tech }}
                </span>
             </div>
          </div>
          <div class="px-4">
            <h3 class="text-3xl font-black mb-3 group-hover:text-primary transition-colors tracking-tighter uppercase">{{ project.title }}</h3>
            <p class="text-sm opacity-60 leading-relaxed line-clamp-3 mb-6">{{ project.desc }}</p>
            <div class="flex items-center gap-6">
               <a href="#" class="text-xs font-black tracking-widest border-b-2 border-primary pb-1">LIVE PREVIEW</a>
               <a href="#" class="text-xs font-black tracking-widest opacity-40 hover:opacity-100 transition-opacity">SOURCE CODE</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-base-200/50 mt-24 border-y border-base-300">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-16">How I Work.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div class="space-y-4">
            <div class="text-4xl">01</div>
            <h4 class="font-bold text-xl uppercase tracking-widest text-primary">Discovery</h4>
            <p class="text-sm opacity-60">Understanding requirements and planning the most efficient tech stack.</p>
          </div>
          <div class="space-y-4">
            <div class="text-4xl">02</div>
            <h4 class="font-bold text-xl uppercase tracking-widest text-primary">Build</h4>
            <p class="text-sm opacity-60">Coding with clean architecture, focusing on scalability and performance.</p>
          </div>
          <div class="space-y-4">
            <div class="text-4xl">03</div>
            <h4 class="font-bold text-xl uppercase tracking-widest text-primary">Deploy</h4>
            <p class="text-sm opacity-60">Optimizing, testing, and shipping the product to a live server.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
section {
  animation: slideUp 1s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>