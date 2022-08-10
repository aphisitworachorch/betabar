<script setup>
import {loadFull} from "tsparticles";
const particlesInit = async (engine) => {
  await loadFull(engine);
}

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
}
</script>
<template>
  <Particles
      id="bgParticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="configVal"
  />
  <div class="customContainer">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "default",
  props:["speed"],
  data(){
    return {
      configVal: {
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            density: {
              enable: true,
              area: 1080
            },
            limit: 0,
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 0.25,
              sync: false
            },
            random: {
              enable: true,
              minimumValue: 0.05
            },
            value: 1
          }
        }
      }
    }
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.paragraphFonts {
  @apply font-apFont font-mono footer footer-center p-4
}

.customContainer {
  @apply container mx-auto
}
</style>