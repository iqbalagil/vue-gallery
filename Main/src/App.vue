<script setup>
import NavigationBar from '@/components/nagivationBar/NavigationBar.vue'
import MainNavigationBar from '@/components/nagivationBar/MainNavigationBar.vue';
import axios from 'axios';
import {onMounted} from 'vue';

const getMessage = async () => {

  try {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data);
  } catch (error) {
    console.error(error)
  }
} 

onMounted(() => {
  getMessage();
})

</script>

<template>
      <MainNavigationBar/>
  <div class="flex justify-center overflow-x-hidden">

    <NavigationBar class=""/>
    <div class="flex items-center content-center justify-center align-middle">
      <RouterView/>
    </div>

  </div>

</template>
