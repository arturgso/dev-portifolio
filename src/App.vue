<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import TechStack from './components/TechStack.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <main class="app-container">
    <Header />
    <Hero />
    <About />
    <TechStack />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped>
.app-container {
  width: min(100% - 2rem, 1040px);
  min-height: 100dvh;
  margin: 0 auto;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .app-container {
    width: min(100% - 1.5rem, 1040px);
  }
}
</style>
