<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Welcome'
})
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div @click="show = !show">
        <img class="imageLogo" src="~/assets/svg/logo.svg" alt="BetaBar"/>
      <Transition name="animate_menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
        <div class="container font-apFont pt-5" v-if="show">
          <div class="grid grid-cols-1 gap-1">
            <div class="font-bold">
              <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=Nm04YWdmNzZqYjMwcXQ2dWNkbW82OGY0YmUgYXJzYW5hbmRoYS5hcEBt&tmsrc=arsanandha.ap%40gmail.com">Save The Date !</a>
            </div>
          </div>
        </div>
      </Transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      placeholder: null,
      show: false,
    }
  }
}
</script>

<style scoped>
.bigHeadFonts {
  @apply font-apFont font-bold text-3xl text-center
}

.smallFonts {
  @apply font-apFont font-medium text-xl text-center
}

.imageLogo {
  @apply h-96 object-center invert
}
</style>