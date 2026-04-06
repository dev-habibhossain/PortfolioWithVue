<script setup>
// আপনার পার্সোনাল কিছু ডাটা যা সেকশনগুলোতে ব্যবহার হবে
const education = [
  { degree: 'PHP Laravel Specialist Course', institution: 'Ostad Platform', year: '2025 - Present' },
  { degree: 'MERN Stack Development', institution: 'Self-Taught / Online', year: '2024 - 2025' }
];

const values = [
  { title: 'Clean Code', desc: 'Writing code that is not just functional, but readable and maintainable.' },
  { title: 'User Centric', desc: 'Designing interfaces that feel natural and solve real problems.' },
  { title: 'Always Learning', desc: 'Constantly exploring new tech like Laravel and advanced JS patterns.' }
];
</script>

<template>
  <div class="min-h-screen bg-base-100 pb-20">
    
    <section class="py-24 bg-base-200/30 border-b border-base-300">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-5xl lg:text-8xl font-black tracking-tighter mb-8">
          The <span class="text-primary italic">Developer</span> <br/> 
          behind the screen.
        </h1>
        <p class="text-xl lg:text-2xl opacity-60 max-w-3xl leading-relaxed">
          I'm Habib, a passionate full-stack developer based in Bangladesh. 
          I specialize in building clean, minimalist, and high-performance web applications.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 space-y-32 mt-24">
      
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative group">
          <div class="aspect-square rounded-[3rem] overflow-hidden border-8 border-base-200 shadow-2xl relative">
            <img src="https://via.placeholder.com/600x600/282a36/bd93f9?text=Habib+Profile" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-primary/10"></div>
          </div>
          <div class="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-[3rem]"></div>
        </div>
        
        <div class="space-y-6">
          <h2 class="text-4xl font-black tracking-tighter uppercase text-primary">Who am I?</h2>
          <div class="space-y-4 text-lg opacity-70 leading-relaxed text-justify">
            <p>
              আমার কোডিং যাত্রা শুরু হয়েছিল জাভাস্ক্রিপ্টের প্রতি ভালোবাসা থেকে। একজন <span class="text-base-content font-bold underline decoration-primary">MERN Stack Developer</span> হিসেবে আমি অনেকগুলো প্রোজেক্ট সফলভাবে শেষ করেছি। বর্তমানে আমি নিজেকে একজন পূর্ণাঙ্গ <span class="text-base-content font-bold underline decoration-primary">Full-Stack Developer</span> হিসেবে গড়ে তুলতে <span class="font-bold text-primary italic">PHP এবং Laravel</span> নিয়ে কাজ করছি।
            </p>
            <p>
              আমি বিশ্বাস করি, একটি ভালো অ্যাপ্লিকেশন শুধু ফিচার দিয়ে নয়, বরং তার পারফরম্যান্স এবং ইউজার এক্সপেরিয়েন্স দিয়ে বিচার করা হয়। আমার কাজের প্রধান অস্ত্র হলো <span class="font-bold uppercase tracking-widest text-xs px-2 py-1 bg-base-300 rounded">Ubuntu OS</span> এবং <span class="font-bold uppercase tracking-widest text-xs px-2 py-1 bg-base-300 rounded">VS Code</span>।
            </p>
          </div>
        </div>
      </section>

      <section class="py-20 border-y border-base-300">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="value in values" :key="value.title" class="space-y-4">
             <div class="w-12 h-1 border-t-4 border-primary"></div>
             <h3 class="text-2xl font-black tracking-tighter">{{ value.title }}</h3>
             <p class="text-sm opacity-60 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </section>

      <section class="max-w-4xl">
        <h2 class="text-4xl font-black tracking-tighter mb-12 italic underline decoration-primary underline-offset-8">Education & Training</h2>
        <div class="space-y-12">
          <div v-for="edu in education" :key="edu.degree" class="relative pl-8 border-l-2 border-primary/20">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(189,147,249,0.5)]"></div>
            <p class="text-xs font-black text-primary uppercase tracking-widest mb-1">{{ edu.year }}</p>
            <h4 class="text-2xl font-bold tracking-tight">{{ edu.degree }}</h4>
            <p class="opacity-60 text-lg">{{ edu.institution }}</p>
          </div>
        </div>
      </section>

      <section class="p-10 lg:p-16 bg-base-200 rounded-[3rem] border border-base-300 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-black mb-6 tracking-tight uppercase">Beyond <span class="text-primary italic">Code</span></h2>
          <p class="opacity-70 leading-relaxed text-lg">
            যখন আমি কোডিং করি না, তখন আমাকে হয়তো কোনো নতুন টেক ব্লগ পড়তে দেখবেন অথবা আমার <span class="font-bold text-primary">Ubuntu Setup</span> কাস্টমাইজ করতে দেখবেন। আমি মিনিমালিজম পছন্দ করি, যা আমার কোড এবং জীবনযাত্রা উভয়ক্ষেত্রেই ফুটে ওঠে।
          </p>
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
           <span class="px-6 py-3 bg-base-300 rounded-full text-xs font-black uppercase tracking-widest border border-base-100">Photography</span>
           <span class="px-6 py-3 bg-base-300 rounded-full text-xs font-black uppercase tracking-widest border border-base-100">Reading Tech</span>
           <span class="px-6 py-3 bg-base-300 rounded-full text-xs font-black uppercase tracking-widest border border-base-100">UI Design</span>
           <span class="px-6 py-3 bg-base-300 rounded-full text-xs font-black uppercase tracking-widest border border-base-100">Linux Ricing</span>
        </div>
      </section>

    </div>

    <section class="mt-32 text-center py-24 bg-primary/5">
      <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Interested in <br/> working with me?</h2>
      <a href="mailto:your-email@gmail.com" class="btn btn-primary btn-lg px-12 rounded-full font-black tracking-widest uppercase shadow-xl shadow-primary/20">Let's Connect</a>
    </section>

  </div>
</template>

<style scoped>
/* স্মুথ ট্রানজিশন অ্যানিমেশন */
section {
  animation: slideUp 0.8s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>