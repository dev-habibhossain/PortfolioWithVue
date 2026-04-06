<script setup>
import { computed, ref } from "vue";

// আপনার প্রোজেক্ট লিস্ট (JSON স্টাইল)
const projects = ref([
  {
    id: 1,
    title: "Hero IO",
    category: "MERN",
    desc: "A comprehensive React app store featuring live search and local storage.",
    image: "https://via.placeholder.com/600x400/282a36/bd93f9?text=Hero+IO",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Productify API",
    category: "Node.js",
    desc: "Backend focused API built with TypeScript, PostgreSQL, and Drizzle ORM.",
    image: "https://via.placeholder.com/600x400/282a36/8be9fd?text=Productify",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "POS Inventory",
    category: "Laravel",
    desc: "High-density POS system designed with Laravel and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400/282a36/ff79c6?text=POS+System",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Minimal Portfolio",
    category: "Vue",
    desc: "This current portfolio site built with Vue 3 and DaisyUI.",
    image: "https://via.placeholder.com/600x400/282a36/50fa7b?text=Portfolio",
    link: "#",
    github: "#",
  },
]);

const activeFilter = ref("All");
const categories = ["All", "MERN", "Laravel", "Node.js", "Vue"];

// ফিল্টার লজিক
const filteredProjects = computed(() => {
  if (activeFilter.value === "All") return projects.value;
  return projects.value.filter((p) => p.category === activeFilter.value);
});
</script>

<template>
  <div class="min-h-screen bg-base-100 pb-20">
    <section class="py-16 border-b border-base-300 bg-base-200/30">
      <div class="max-w-6xl mx-auto px-6 text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-black tracking-tighter mb-4">
          Selected
          <span class="text-primary underline decoration-4 underline-offset-8"
            >Works</span
          >
        </h1>
        <p class="text-lg opacity-60 max-w-2xl">
          A collection of my full-stack developments, from MERN applications to
          robust Laravel systems.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeFilter = cat"
          class="btn btn-sm lg:btn-md rounded-full px-6 transition-all duration-300"
          :class="
            activeFilter === cat
              ? 'btn-primary shadow-lg shadow-primary/20'
              : 'btn-ghost border border-base-300'
          "
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative bg-base-200 border border-base-300 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div class="aspect-video overflow-hidden relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div class="absolute top-4 left-4">
              <span
                class="badge badge-primary font-bold text-[10px] uppercase px-3 py-3 border-none shadow-md"
              >
                {{ project.category }}
              </span>
            </div>
          </div>

          <div class="p-8">
            <h3
              class="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm opacity-60 leading-relaxed mb-8 line-clamp-2">
              {{ project.desc }}
            </p>

            <div class="flex items-center gap-6">
              <a
                :href="project.link"
                class="text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn"
              >
                Live Preview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                :href="project.github"
                class="text-xs font-black uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="opacity-50 italic">
          No projects found in this category yet. Coming soon!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > div {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}
</style>
