<script setup>
import TheWelcome from '../components/homeEnterperneur/TheWelcome.vue';
import WelcomeItem from '../components/homeEnterperneur/WelcomeItem.vue';
import Marquee from '../components/homeEnterperneur/Marquee.vue';

const MarqueeEnterperneur = [
  {
    text: 'Van Gogh',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  {
    text: 'Da Vin Ci',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  {
    text: 'Leonardo',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  {
    text: 'Van Gogh',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  {
    text: 'Da Vin Ci',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  {
    text: 'Leonardo',
    // icon: 'bi-exclamation-lg',
    scale: 3,
    fill: 'neutral',
  },
  ];
</script>

<template>
  <main class="justify-center block">
    <!-- <MainNavigationBar /> -->
    <TheWelcome />
    <Marquee :items="MarqueeEnterperneur" :speed="20" />
    <WelcomeItem />
  </main>
</template>
