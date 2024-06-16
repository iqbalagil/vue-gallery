<template>
<div class="flex justify-center w-[100vw] h-[100vh] p-0 text-white align-middle bg-black rounded-lg " v-motion :initial="{
  scale: 0,
  delay: 100,
  y:0,
  x:0,
}"
:enter="{
  scale: 1,
  transition: {
    y: 0,
    x:0,
  }
}">
 <h1 class="text-9xl">
 </h1>
</div>
</template>

<script setup>



</script>