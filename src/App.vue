<script setup>
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <Navbar />
  
  <main class="min-h-[calc(100vh-12rem)]">
    <RouterView />
  </main>

  <Footer />
</template>