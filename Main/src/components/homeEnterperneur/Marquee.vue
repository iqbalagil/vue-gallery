<!-- <template>
  <div class="w-full overflow-hidden whitespace-nowrap">
    <div class="flex items-center justify-center ">
      <span v-for="item in marqueeItems" :key="item.text" class="flex items-center mr-4 text-lg font-bold text-neutral-600 marquee-item">
        <v-icon v-if="item.icon" :name="item.icon" class="mr-0" :scale="item.scale || 2" :fill="item.fill" /> {{ item.text }}
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
    default: 1 
  }
});

const marqueeItems = ref(props.items);
</script>
 -->
