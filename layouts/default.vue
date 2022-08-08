<script setup>
</script>
<template>
  <div class="customContainer">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "default"
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