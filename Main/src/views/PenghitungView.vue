<template>
  <div>
    <div>
      <h1 id="header" className=" text-red-500 text-[40px]">
        Welcome to Penghitung Angka {{ nama }}
      </h1>
    </div>
    <div class="block gap-5 text-black">
      <div class="m-5">
        <label for="">Nama</label>
        <input class="flex text-black rounded-md p-1 end-1 bg-sky-200" type="text" id="nama" v-model="nama" />
      </div>
      <div class="m-5">
        <label for="">Angka 1</label>
        <input
          type="text"
          class="flex text-black rounded-md p-1 end-1 bg-sky-200"
          id="angka"
          v-model="PenghitungAngka1"
        />
      </div>
      <div class="m-5">
        <label for="">Angka 2</label>
        <input
          type="text"
          class="flex text-black rounded-md p-1 end-1 bg-sky-200"
          id="angka"
          v-model="PenghitungAngka2"
        />
      </div>
      <div class="m-5">
        <button
          class="pt-2 bg-slate-700 hover:bg-slate-600 color-white rounded-md p-3"
          @click="hitung"
        >
          Submit
        </button>
        <h1 class="pt-2">Hasil {{ hasil }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nama = ref('Iqbal')
const PenghitungAngka1 = ref('')
const PenghitungAngka2 = ref('')
const hasil = ref('')

const hitung = () => {
  hasil.value = parseInt(PenghitungAngka1.value) + parseInt(PenghitungAngka2.value)
}
</script>
