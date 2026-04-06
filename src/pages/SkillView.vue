<script setup>
import { ref } from 'vue';

// ১. মেইন টেক স্ট্যাক (গ্রিড স্টাইল)
const technicalSkills = ref([
  { name: 'Vue.js 3', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' },
  { name: 'Laravel', level: 'Advanced', icon: '🔥' },
  { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
  { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
  { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
  { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
  { name: 'TypeScript', level: 'Intermediate', icon: '📘' },
  { name: 'Express.js', level: 'Intermediate', icon: '🚄' }
]);

// ২. টুলস এবং এনভায়রনমেন্ট
const tools = ['Ubuntu', 'VS Code', 'Git/GitHub', 'Postman', 'Vercel', 'Termius'];

// ৩. বর্তমান লার্নিং পাথ
const learningPath = [
  { topic: 'In-depth Laravel Architecture', status: 'Ongoing' },
  { topic: 'Advanced PostgreSQL Optimization', status: 'Next' },
  { topic: 'Docker & Microservices', status: 'Planned' }
];
</script>

<template>
  <div class="min-h-screen bg-base-100 pb-24">
    
    <section class="py-20 bg-base-200/30 border-b border-base-300">
      <div class="max-w-6xl mx-auto px-6 text-center lg:text-left">
        <h1 class="text-4xl lg:text-7xl font-black tracking-tighter mb-6">
          Skills & <span class="text-primary italic">Arsenal.</span>
        </h1>
        <p class="text-lg opacity-60 max-w-2xl">
          A deep dive into the technologies I use to turn complex ideas into digital reality. 
          Focused on performance, scalability, and clean code.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 mt-16 space-y-24">
      
      <section>
        <div class="flex items-center gap-4 mb-10">
          <h2 class="text-2xl font-bold tracking-tight">Main Stack</h2>
          <div class="h-px bg-base-300 grow"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skill in technicalSkills" :key="skill.name" 
               class="p-6 bg-base-200 border border-base-300 rounded-2xl hover:border-primary/40 transition-all group">
            <div class="flex justify-between items-start mb-4">
              <span class="text-3xl group-hover:scale-110 transition-transform">{{ skill.icon }}</span>
              <span class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ skill.level }}</span>
            </div>
            <h3 class="text-xl font-bold">{{ skill.name }}</h3>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl font-black mb-6 tracking-tight">Development <span class="text-primary">Environment</span></h2>
          <p class="opacity-70 mb-8 leading-relaxed">
            I believe a good developer is defined by their tools. My primary OS is <span class="font-bold">Ubuntu</span>, and I live inside <span class="font-bold">VS Code</span> with a highly optimized setup for maximum productivity.
          </p>
          <div class="flex flex-wrap gap-3">
            <span v-for="tool in tools" :key="tool" 
                  class="px-4 py-2 bg-base-300 rounded-lg text-sm font-semibold border border-base-100">
              {{ tool }}
            </span>
          </div>
        </div>
        <div class="bg-base-200 aspect-video rounded-3xl border border-base-300 flex items-center justify-center relative overflow-hidden group">
          <img src="https://via.placeholder.com/600x400/282a36/bd93f9?text=Coding+Environment" class="opacity-80 group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-primary/5"></div>
        </div>
      </section>

      <section class="p-10 lg:p-16 bg-base-200 rounded-[3rem] border border-base-300">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-black mb-10 tracking-tight text-primary">Continuous Learning</h2>
          <div class="space-y-8">
            <div v-for="item in learningPath" :key="item.topic" class="flex items-start gap-6 border-b border-base-300 pb-6 last:border-0">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                {{ item.status === 'Ongoing' ? '→' : '○' }}
              </div>
              <div>
                <h4 class="text-xl font-bold">{{ item.topic }}</h4>
                <p class="text-sm opacity-50 font-medium uppercase tracking-widest mt-1">{{ item.status }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <section class="mt-32 text-center py-20 bg-primary/5">
      <h2 class="text-3xl font-bold mb-6">Need a custom solution built with these?</h2>
      <button class="btn btn-primary px-10 rounded-full">Let's Discuss Project</button>
    </section>

  </div>
</template>

<style scoped>
section {
  animation: slideUp 0.8s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>