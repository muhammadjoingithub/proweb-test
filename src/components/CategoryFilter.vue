<template>
  <div class="categories_filter">
    <h4>Категории</h4>
    <div class="category_item">
      <div
        v-for="cat in categories"
        :key="cat.key"
        class="items"
        :style="selectedCategory === cat.key ? { backgroundColor: cat.color, color: '#fff' } : {}"
        @click="toggleCategory(cat.key)"
      >
        {{ cat.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLaunchStore } from '../stores/launchStore'
import { storeToRefs } from 'pinia'

const launchStore = useLaunchStore()
const { categories, selectedCategory } = storeToRefs(launchStore)

const toggleCategory = (key: string) => {
  if (selectedCategory.value === key) {
    launchStore.selectedCategory = null 
  } else {
    launchStore.selectedCategory = key
  }

  launchStore.fetchLaunches()
}
</script>
<style scoped>
.categories_filter {
  border-bottom: #cccccc 1px solid;
  display: flex;
  justify-content: start;
  align-items: center ;
}

.category_item {
  display: flex;
  justify-content: start;
  align-items: center !important;
  gap: 15px;
  padding: 15px;
  width: 100%;
  overflow-x: scroll;
}

.items {
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;
  padding: 8px 12px;
  border-radius: 50px;
  background-color: #ededed;
  cursor: pointer;
  transition: all 0.3s ease;
}

h4 {
  padding: 20px;
  color: #000000;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
