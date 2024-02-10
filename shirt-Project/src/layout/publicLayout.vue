<template>
  <div>
    <navbar />
    <router-view v-slot="{ Component }">
      <transition
       enter-active-class="animate__animated animate__fadeInLeft"
       leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import navbar from "../components/navbar.vue";
</script>

<style  scoped>
</style>