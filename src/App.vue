<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import TechStack from './components/TechStack.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <main class="app-container">
    <Header />
    <Hero />
    <TechStack />
    <Projects />
    <Footer />
  </main>
</template>

<style scoped>
.app-container {
  width: min(100% - 2rem, 960px);
  min-height: 100dvh;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .app-container {
    width: min(100% - 1.5rem, 960px);
  }
}
</style>
