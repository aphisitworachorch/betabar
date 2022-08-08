import {defineNuxtPlugin} from "nuxt/app";
import VueKinesis from "vue-kinesis";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueKinesis)
})