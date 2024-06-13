<script setup></script>

<template>
  <div
    class="container flex flex-wrap justify-center w-full mx-auto bg-black rounded-lg p-auto font-netural bg-blend-multiply -z-50"
  >
    <h1
      class="absolute z-10 flex-wrap p-5 text-5xl font-light md:text-9xl mt-30 invert bg-clip-text mix-blend-difference"
    >
      MUSEUM <span>CAKRAWALA</span>
    </h1>
    <p class="absolute z-10 text-lg italic font-semibold text-white md:text-2xl w-44 text-ellipsis float-start md:bottom-40 bottom-10 left-56 font-netural">
      “Culture is the sum of all the forms of art, of love, and of thought, which, in the course of centuries, have enabled man to be less enslaved.” – André Malraux
    </p>
    <img
      src="/src/assets/monalisa_painting.jpeg"
      v-motion-roll-visible-right
      :initial="{
        transition: {
          type: 'keyframe',
          ease: 'easeIn',
          x: {
            duration: 2000,
            delay: 1000
          },
          duration: 2000,
          opacity: 0,
          repeatType: 'mirror'
        },
        x: 500,
        y: 100,
        z: 10,
        rotate: -10.5,
        scale: 0.8
      }"
      :enter="{
        scale: 0.8,
        transition: {
          x: {
            duration: 2000
          },
          type: 'keyframes',
          ease: 'easeInOut',
          opacity: 1,
          duration: 1500,
          repeatType: 'mirror'
        },
        x: 300,
        y: 100
      }"
      class="relative p-5 mx-auto my-auto bg-transparent backdrop-invert bottom-10 md:bottom-28"
    />
  </div>
</template>
