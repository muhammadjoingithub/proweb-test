<template>
  <div class="about">
    <h4>Обо мне</h4>
    <div class="skeleton" v-if="isLoading">
      <SkeletonCard  />
    </div>
   <div v-else>
   <AboutMe/>
   </div>
  </div>
</template>
<script lang="ts" setup>
import AboutMe from '../components/AboutMe.vue'
import SkeletonCard from '../components/SkeletonCard.vue'
import { ref, onMounted } from 'vue'
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>
<style scoped>
h4{
  width: 100%;
  padding: 20px;
  color: #000000;
  border-bottom: #CCCCCC 1px solid ;
  font-family: Inter , sans-serif;
font-weight: 500;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;

}
.about{
  transition: all 0.8s;
  transition-duration: 0.8s;
  width: 100%;
}
.skeleton{
  width: 90%;
  padding: 20px;
}
</style>
