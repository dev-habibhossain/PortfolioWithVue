<script setup>
import { ref } from 'vue';

// প্রধান ৯টি স্কিল (৩x৩ গ্রিড)
const mainSkills = ref([
  'Vue.js', 'React', 'Node.js',
  'Laravel', 'PHP', 'MERN',
  'Tailwind', 'Docker', 'Firebase'
]);

const socialLinks = [
  { name: 'GH', url: 'https://github.com/devhabib', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>' },
  { name: 'LI', url: 'https://linkedin.com/in/devhabib', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>' },
  { name: 'FB', url: 'https://facebook.com/devhabib', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h5v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>' }
];
</script>

<template>
  <footer class="bg-base-200 text-base-content border-t border-base-300 w-full">
    <div class="max-w-6xl mx-auto px-6 py-8">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div class="space-y-3">
          <div class="text-2xl font-bold tracking-tighter">
            <span class="text-primary">&lt;</span>Dev.Habib<span class="text-primary">/&gt;</span>
          </div>
          <p class="text-xs opacity-60 leading-relaxed max-w-60">
            Full-Stack Developer crafting minimalist SaaS with Vue & Laravel.
          </p>
          <div class="flex gap-3">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" 
               class="p-2 rounded-md bg-base-300 hover:bg-primary hover:text-primary-content transition-all duration-300">
              <span v-html="link.icon"></span>
            </a>
          </div>
        </div>

        <div class="space-y-3">
          <h6 class="text-[10px] uppercase font-black tracking-widest opacity-50">Stack</h6>
          <div class="grid grid-cols-3 gap-2">
            <div v-for="skill in mainSkills" :key="skill" 
                 class="bg-base-300 text-[10px] font-bold py-1.5 rounded text-center border border-transparent hover:border-primary/20 transition-colors cursor-default">
              {{ skill }}
            </div>
          </div>
        </div>

        <div class="space-y-4 md:text-right flex flex-col md:items-end">
          <h6 class="text-[10px] uppercase font-black tracking-widest opacity-50">Availability</h6>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-base-300 border border-base-100 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(54,211,153,0.5)]"></span>
            Hire Me
          </div>
          <router-link to="/skills" class="text-[11px] font-bold text-primary hover:underline underline-offset-4">
            View full portfolio →
          </router-link>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>