<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    alert('Message sent successfully!');
    isSubmitting.value = false;
    formData.value = { name: '', email: '', subject: '', message: '' };
  }, 1500);
};
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content pb-20">
    
    <header class="py-16 border-b border-base-300 bg-base-200/20 text-center">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Let's Build <span class="text-primary italic">Together.</span>
        </h1>
        <p class="text-sm md:text-base opacity-60 max-w-xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hi? Feel free to reach out. 
          I usually respond within 24 hours.
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      <div class="space-y-12">
        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Contact Details</h3>
          <div class="space-y-6">
            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center border border-base-300 group-hover:border-primary/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase opacity-40">Email Me</p>
                <a href="mailto:habibfahim71@gmail.com" class="text-lg font-bold hover:text-primary transition-colors">habibfahim71@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center border border-base-300 group-hover:border-primary/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase opacity-40">GitHub</p>
                <a href="https://github.com/dev-habibhossain" target="_blank" class="text-lg font-bold hover:text-primary transition-colors">github.com/dev-habibhossain</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Socials</h3>
          <div class="flex gap-4">
            <a href="#" class="btn btn-square btn-outline border-base-300 hover:bg-primary hover:border-primary">LI</a>
            <a href="#" class="btn btn-square btn-outline border-base-300 hover:bg-primary hover:border-primary">TW</a>
            <a href="#" class="btn btn-square btn-outline border-base-300 hover:bg-primary hover:border-primary">FB</a>
          </div>
        </div>
      </div>

      <div class="bg-base-200/50 border border-base-300 p-8 rounded-4xl shadow-xl">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase opacity-50 px-1">Your Name</label>
              <input v-model="formData.name" type="text" placeholder="Habib" class="input input-bordered w-full bg-base-100 focus:border-primary outline-none" required />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase opacity-50 px-1">Email Address</label>
              <input v-model="formData.email" type="email" placeholder="habib@mail.com" class="input input-bordered w-full bg-base-100 focus:border-primary outline-none" required />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase opacity-50 px-1">Subject</label>
            <input v-model="formData.subject" type="text" placeholder="Project Inquiry" class="input input-bordered w-full bg-base-100 focus:border-primary outline-none" required />
          </div>

          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase opacity-50 px-1">Message</label>
            <textarea v-model="formData.message" rows="5" placeholder="Tell me about your project..." class="textarea textarea-bordered w-full bg-base-100 focus:border-primary outline-none" required></textarea>
          </div>

          <button type="submit" :disabled="isSubmitting" class="btn btn-primary w-full rounded-xl font-black tracking-widest uppercase shadow-lg shadow-primary/20">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else class="loading loading-spinner"></span>
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>