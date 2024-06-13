import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MotionPlugin } from '@vueuse/motion'
import { BiExclamationLg, FaAngleDown, HiSearch, HiLockClosed, MdEmailRound,FaUserAlt,BiBrushFill} from "oh-vue-icons/icons"

const app = createApp(App)

addIcons(BiExclamationLg,FaAngleDown,HiSearch,HiLockClosed,MdEmailRound,FaUserAlt,BiBrushFill);

app.component("v-icon", OhVueIcon);

app.use(MotionPlugin)

app.use(router)

app.mount('#app')
