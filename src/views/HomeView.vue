<template>
  <div class="min-h-screen bg-slate-950 text-white overflow-x-hidden">
    <NavbarComponent />
    <HeroSection />
    <TechStack />
    <AboutMe />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import AboutMe from '@/components/AboutMe.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import TechStack from '@/components/TechStack.vue';

</script>

<style scoped></style>
