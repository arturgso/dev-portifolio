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

  <a
    href="https://wa.me/5511921805274?text=Ol%C3%A1!%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Fale comigo no WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.218 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
</template>

<style scoped>
.app-container {
  width: min(100% - 2rem, 1040px);
  min-height: 100dvh;
  margin: 0 auto;
  overflow-x: hidden;
}

.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  background-color: #25D366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  background-color: #20ba5a;
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(37, 211, 102, 0.5);
}

@media (max-width: 640px) {
  .app-container {
    width: min(100% - 1.5rem, 1040px);
  }
  .whatsapp-float {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
  .whatsapp-float svg {
    width: 24px;
    height: 24px;
  }
}
</style>
