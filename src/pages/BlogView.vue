<script setup>
import { ref, computed } from 'vue';

// ১. ব্লগ ডাটা (Category সহ)
const allBlogs = ref([
  {
    id: 1,
    date: 'APR 06, 2026',
    title: 'Migrating from MERN to Laravel Architecture',
    category: 'Laravel',
    excerpt: 'Exploring why I chose Laravel for my next SaaS project and how it handles scalability compared to Node.js.',
    readTime: '5 min'
  },
  {
    id: 2,
    date: 'MAR 28, 2026',
    title: 'My Optimized Ubuntu Workflow for 2026',
    category: 'Tools',
    excerpt: 'A clean breakdown of my VS Code settings, Zsh aliases, and terminal productivity hacks.',
    readTime: '3 min'
  },
  {
    id: 3,
    date: 'MAR 15, 2026',
    title: 'State Management in Hero IO Project',
    category: 'MERN',
    excerpt: 'How I managed complex JSON data and local storage for my latest React assignment.',
    readTime: '6 min'
  }
]);

// ২. ফিল্টার স্টেট
const selectedCategory = ref('All');
const categories = ['All', 'Laravel', 'MERN', 'Tools', 'UI/UX'];

// ৩. ফিল্টারিং লজিক (Computed Property)
const filteredBlogs = computed(() => {
  if (selectedCategory.value === 'All') {
    return allBlogs.value;
  }
  return allBlogs.value.filter(blog => blog.category === selectedCategory.value);
});
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    
    <header class="py-12 border-b border-base-300 bg-base-200/20">
      <div class="max-w-5xl mx-auto px-6">
        <h1 class="text-4xl font-black tracking-tight mb-2">The Journal</h1>
        <p class="text-sm opacity-50 font-medium">Insights on full-stack development and minimalist design.</p>
      </div>
    </header>

    <div class="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
      
      <main class="space-y-10">
        <div v-if="filteredBlogs.length === 0" class="py-20 text-center opacity-40 italic">
          No articles found in this category.
        </div>

        <article v-for="post in filteredBlogs" :key="post.id" 
                 class="group p-6 bg-base-200/50 border border-base-300 rounded-2xl hover:border-primary/30 transition-all duration-300">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-[10px] font-black tracking-widest opacity-40">
              <span class="text-primary">{{ post.category }}</span>
              <span class="w-1 h-1 rounded-full bg-base-content opacity-20"></span>
              <span>{{ post.date }}</span>
              <span class="w-1 h-1 rounded-full bg-base-content opacity-20"></span>
              <span>{{ post.readTime }}</span>
            </div>

            <h2 class="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors cursor-pointer">
              {{ post.title }}
            </h2>

            <p class="text-sm opacity-60 leading-relaxed max-w-2xl">
              {{ post.excerpt }}
            </p>

            <div class="pt-2">
              <button class="text-[11px] font-black uppercase tracking-wider text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </article>
      </main>

      <aside class="space-y-8">
        <div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Categories</h4>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="cat in categories" :key="cat" 
              @click="selectedCategory = cat"
              class="px-3 py-1.5 text-[10px] font-bold rounded-lg border transition-all"
              :class="selectedCategory === cat 
                ? 'bg-primary text-primary-content border-primary' 
                : 'bg-base-300 border-base-100 hover:border-primary/40 opacity-70 hover:opacity-100'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="p-6 bg-base-300 rounded-2xl border border-base-100">
          <h4 class="text-xs font-black mb-2 italic">Newsletter</h4>
          <p class="text-[11px] opacity-60 mb-4 leading-relaxed">Get the latest dev tips directly.</p>
          <div class="space-y-2">
            <input type="email" placeholder="Email address" class="input input-sm w-full bg-base-100 focus:outline-none border-none text-xs rounded-lg" />
            <button class="btn btn-primary btn-sm w-full font-black text-[10px] tracking-widest uppercase rounded-lg">Join</button>
          </div>
        </div>
      </aside>

    </div>
  </div>
</template>

<style scoped>
article {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>