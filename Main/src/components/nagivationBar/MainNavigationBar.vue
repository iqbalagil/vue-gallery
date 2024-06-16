<template>
  <div class="container sticky z-50 w-full py-2 mx-auto my-auto md:py-0">
    <nav class="flex flex-wrap justify-around md:justify-between ">
       
      <ul class="flex items-center space-x-4 align-middle md:hidden">
        <input type="text" class="pl-10 border rounded-md border-neutral-200 focus:outline-neutral-200">
      </ul>

      <ul class="flex items-center space-x-4 align-middle md:hidden">
        <li class="p-2">
        <button @click="userTrigger">
          <v-icon name="fa-user-alt" width="30" height="30" />
        </button>
        <div v-if="!userTrigger" class="fixed min-w-[1000] max-w-full max-h-full shadow-inner min-h-[200px]: bg-neutral-50">

        </div>
        </li>
      </ul>

      <ul class="items-center content-center hidden my-auto space-x-4 align-middle md:flex">
        <li>
          <img src="@/assets/c.png" width="100" height="50" alt="logo/png" />
        </li>
        <li class="font-semibold">History</li>
        <li class="font-semibold">Inspiration</li>
        <li class="font-semibold">Gallery <v-icon name="fa-angle-down" /></li>
        <li>
          
          <div class="relative hidden">
            <input
              type="text"
              itemscope
              placeholder="Search Artisic"
              class="w-full p-2 pl-10 m-0 rounded-md focus:outline-none ring-neutral-300 pr-60 bg-neutral-100"
              name="searchBar"
              id="searchBar"
            />
            <div
              class="absolute inset-y-0 left-0 right-0 flex items-center p-2 pl-3 bg-transparent pointer-events-none"
            >
              <v-icon name="hi-search" />
            </div>
          </div>
        </li>


      </ul>
      <ul class="items-center content-center hidden p-8 my-auto space-x-4 align-middle md:flex">
      <li>
          <button
            @click="() => TogglePopup('buttonTrigger')"
            class="px-6 py-2 text-white rounded-md bg-neutral-700"
          >
            Login
          </button>
          <LoginViewPopup
            v-if="popupTrigger.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')"
          >
            <h2 class="flex text-xl max-w-[250px] w-full">Login</h2>
            <div class="relative">
              <input
                type="text"
                placeholder="User"
                class="w-full py-2 pl-10 mt-5 rounded-sm outline outline-1 outline-neutral-400 focus:outline-neutral-400"
              />
              <div class="absolute inset-y-0 left-0 right-0 items-center p-2 pl-3 bg-transparent pointer-events-none md:top-5">
                <v-icon name="md-email-round" />
              </div>
              <input
                type="text"
                placeholder="Password"
                class="w-full py-2 pl-10 mt-5 rounded-sm outline outline-1 outline-neutral-400 focus:outline-neutral-400"
              />
              <div class="absolute inset-y-0 left-0 right-0 items-center p-2 pl-3 bg-transparent pointer-events-none md:top-[5rem]">
                <v-icon name="fa-user-alt" />
              </div>
            </div>
          </LoginViewPopup>
        </li>
        <li>
          <button
            class="px-5 py-2 text-black border rounded-md hover:bg-neutral-600 hover:text-white border-neutral-600"
            @click="() => TogglePopup('registerTrigger')"
          >
            Sign up
          </button>
          <RegisterViewPopup
            v-if="popupTrigger.registerTrigger"
            :TogglePopup="() => TogglePopup('registerTrigger')"
          >
            <div class="relative">
              <h2 class="flex text-xl max-w-[250px] w-full">Register</h2>
              <input
                type="text"
                placeholder="Username"
                class="w-full py-2 pl-10 mt-5 rounded-sm outline outline-1 outline-neutral-400 focus:outline-neutral-400"
              />
              <div
                class="absolute inset-y-0 left-0 right-0 flex items-center p-2 pl-3 bg-transparent pointer-events-none bottom-[4.5rem]"
              >
                <v-icon name="fa-user-alt" />
              </div>
              <input
                type="text"
                placeholder="Email"
                class="w-full py-2 pl-10 mt-5 rounded-sm outline outline-1 outline-neutral-400 focus:outline-neutral-400"
              />
              <div class="absolute inset-y-0 left-0 right-0 flex items-center p-2 pl-3 bg-transparent top-[3rem] pointer-events-none">
                <v-icon name="md-email-round" />
              </div>
              <input
                type="text"
                placeholder="Password"
                class="w-full py-2 pl-10 mt-5 rounded-sm outline outline-1 outline-neutral-400 focus:outline-neutral-400"
              />
              <div class="absolute inset-y-0 left-0 right-0 flex items-center p-2 pl-3 bg-transparent pointer-events-none top-[11rem] ">
                <v-icon name="hi-lock-closed" />
              </div>
            </div>
          </RegisterViewPopup>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import LoginViewPopup from '../userSetting/LoginViewPopup.vue'
import RegisterViewPopup from '../userSetting/RegisterViewPopup.vue'
import { ref } from 'vue'

const userTrigger = ref(false)

const popupTrigger = ref({
  buttonTrigger: false,
  registerTrigger: false
})

const UserToggle = (trigger) => {
  userTrigger.value[trigger] = !userTrigger.value[trigger]
}

const TogglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger]
}
</script>
