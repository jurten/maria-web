<template>
  <div class="flex flex-col min-h-screen font-lato bg-secondary">
    <SiteNavigation />
    <HomeView />
    <AboutView id="About"/>
    <ContactView id="Contact"/>
    <Footer />
  </div>
</template>

<script setup>
import SiteNavigation from './components/SiteNavigation.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss" scoped>

</style>
