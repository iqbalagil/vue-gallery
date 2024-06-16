<template>
  <div class="flex w-full my-10 space-x-16 overflow-hidden whitespace-nowrap group">
    <span class="w-[1.5rem] bg-neutral-950 opacity-45 relative left-0"></span>
    <div :class="['flex items-center my-2 animate-marquee max-w-max space-x-16 group-hover:paused', { 'marquee-content': true }]" :style="{ '--marquee-duration': `${speed}s` }">
      <span v-for="(item, index) in marqueeItems" :key="index" class="flex items-center text-6xl font-bold text-neutral-600">
        <v-icon v-if="item.icon" :name="item.icon" :scale="item.scale || 2" :fill="item.fill"  /> {{ item.text }}
      </span>
    </div>
    <div aria-hidden="true" :class="['flex items-center my-2 max-w-max animate-marquee-delayed space-x-16 group-hover:paused ', { 'marquee-content': true }]" :style="{ '--marquee-duration': `${speed}s` }">
      <span v-for="(item, index) in marqueeItems" :key="index" class="flex items-center text-6xl font-bold text-neutral-600">
        <v-icon v-if="item.icon" :name="item.icon" :scale="item.scale || 2" :fill="item.fill"  /> {{ item.text }}
      </span>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  speed: {
    type: Number,
    default: 0
  }
});

const marqueeItems = ref(props.items);
</script>
