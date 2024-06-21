<template>
  <div class="fixed text-center container bottom-0 z-[40] md:max-w-[80rem] md:w-full w-[60%]">
    <div class="mx-auto md:sticky">
      <nav :class="headerClass"
        class="flex flex-wrap px-2 m-5 mr-2 bg-black rounded-lg md:mr-64 md:mx-72 bg-opacity-70 md:justify-between"
      >
        <header
          class="inline-flex justify-center items-center p-[1.25rem] my-1 gap-2 rounded-md md:bg-[#222]"
        >
          <!-- <v-icon name="fa-grunt" scale='2' /> -->
          <h1 v-if="!toggleNav" :class="{'relative':toggleNav , '':!toggleNav}" class="font-bold text-white font-cousine text-md font-body">
            cakra.<span class="text-[#fff083]">{{ pageTitle }}</span>
          </h1>
         <!-- <div id="sidemenu"> -->
          <nav v-show="showview" v-if="toggleNav" :class="{'relative my-auto block text-neutral-300 pb-10 mb-24':toggleNav,'hidden': !toggleNav }" >
            <ul class="flex space-y-4 mx-2 flex-col items-start fixed w-full max-w-[250px] h-full">
              <li  v-for="link in LinksOpen" :key="link">
                <router-link :to="{link: link.link2 }" >
                  {{ link.name2 }}
                </router-link>
              </li>
            </ul>
          </nav>
          <button @click="toggleNav = !toggleNav" :class="{' transition-all ease-linear w-[200%] md:pl-[25.6rem] delay-100  flex end-1 ': toggleNav, '' :!toggleNav}" class="flex-col hidden h-4 gap-[0.07rem] md:flex w-7" >
            <span :class="{ 'transition-transform delay-75 ease-linear rotate-45 translate-y-[0.4rem] fade': toggleNav, '': !toggleNav }" class=" w-4 h-[0.04rem] my-auto bg-white "></span>
            <span :class="{ 'opacity-0': toggleNav, '': !toggleNav }" class=" w-4 h-[0.07rem] bg-white "></span>
            <span :class="{ 'transition-transform delay-75 ease-linear -rotate-45 -translate-y-[0.2rem]': toggleNav, '': !toggleNav }" class=" w-4 h-[0.01rem] my-auto bg-white "></span>
          </button>

        <!-- </div> -->
        </header>

        <li v-if="!toggleNav" :class="{'hidden':toggleNav , '' :!toggleNav}"
          class="w-full gap-2 p-2 my-1 text-white list-none bg-black rounded-lg md:rounded-md md:w-auto bg-opacity-70 md:flex md:items-center top-2"
        >
          <ul class="my-8 md:my-0 hover:border-white" v-for="link in Links" :key="link">
            <router-link
              class="gap-1 p-3 rounded-md md:border-2 md:border-gray-500 md:items-center md:gap-4 md:hover:border-white md:border-opacity-30"
              :to="{ name: link.link }"
              active-class="md:border-white"
            >
              {{ link.name }}
            </router-link>
          </ul>
        </li>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const toggleNav = ref(false);
const showview = ref(true);
 let Links = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Calculator', link: 'penghitung'},
]

const LinksOpen = [
  {
    name2: 'Auction', link2: '/auction'
  },
  {
    name2: 'Affiliation', link2: '/affiliation'
  },
  {
    name2: 'Program Internship', link2: '/internship'
  }
]

const route = useRoute();
const pageTitle = ref(''); 

const headerClass = computed(() => {
  return toggleNav.value ? '' : 'mt-10';
});

watch(
  () => route.meta.title,
  (newTitle) => {
    pageTitle.value = newTitle || 'Default Title';
    document.title = pageTitle.value; 
  }
)


</script>
