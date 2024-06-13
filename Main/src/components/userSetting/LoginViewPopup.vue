<template>
    <div class="fixed top-0 left-0 righ-5 bottom-0 w-full bg-opacity-60 bg-[#949796] flex items-center justify-center">
        <div class="bg-[#fff] rounded-md p-20">
            <slot></slot>
            <button class="p-3 mt-10 text-white rounded-md bg-neutral-600" @click="TogglePopup()">
                Login
            </button>
        </div>
    </div>
</template>
<script setup>
defineProps(['TogglePopup'])
</script>