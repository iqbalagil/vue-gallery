<script setup>
import TheWelcome from '../components/homeEnterperneur/TheWelcome.vue'
import WelcomeItem from '../components/homeEnterperneur/WelcomeItem.vue'
// import Marquee from '../components/homeEnterperneur/Marquee.vue'

// const MarqueeEnterperneur = [
//   {
//     text : 'Maintenance',
//     icon : 'bi-exclamation-lg',
//     scale: 3,
//     fill : 'red'
//   },
//   {
//     text : 'Maintenance',
//     icon : 'bi-exclamation-lg',
//     scale: 3,
//     fill : 'red'
//   },
//   {
//     text : 'Maintenance',
//     icon : 'bi-exclamation-lg',
//     scale: 3,
//     fill : 'red'
//   },
//   ]
</script>

<template>
  <main class="justify-center block">
    <!-- <MainNavigationBar /> -->
    <TheWelcome />
    <!-- <Marquee :items="MarqueeEnterperneur"  class="absolute flex justify-end w-full mt-20 animate-marquee"/> -->
    <WelcomeItem />
  </main>
</template>
