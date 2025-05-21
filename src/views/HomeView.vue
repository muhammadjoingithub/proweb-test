<template>
  <main>
    <h4>Запуски</h4>
      <div>
        <CategoryFilter />
        <div class="categories" @dragover.prevent>
          <template v-if="isReordering || isLoading"  >
            <div class="skeleton_visible">
              <SkeletonCard v-for="n in 4" :key="n"/>

            </div>
          </template>
            <template v-else>
               <div
                 v-for="(launch, index) in orderedLaunches"
                 :key="launch.id"
                 draggable="true"
                 @dragstart="handleDragStart(index)"
                 @dragenter.prevent="handleDragEnter(index)"
                 @dragend="handleDrop"
                 class="cardClass"
               >
                 <CardItem :launch="launch" />
              </div>
            </template>
    </div>
  </div>
  </main>
</template>
<script setup lang="ts">
import SkeletonCard from "../components/SkeletonCard.vue";
import CardItem from "../components/CardItem.vue";
import CategoryFilter from "../components/CategoryFilter.vue";

import { onMounted, ref, watch } from 'vue'
import { useLaunchStore } from '../stores/launchStore'
import { storeToRefs } from 'pinia'

const store = useLaunchStore()
const { filteredLaunches, isLoading } = storeToRefs(store)

const orderedLaunches = ref([...filteredLaunches.value])
const dragStartIndex = ref<number | null>(null)
const isReordering = ref(false)

watch(filteredLaunches, () => {
  orderedLaunches.value = [...filteredLaunches.value]
}, { immediate: true })

const handleDragStart = (index: number) => {
  dragStartIndex.value = index
}

const handleDragEnter = (targetIndex: number) => {
  if (dragStartIndex.value === null) return

  const items = [...orderedLaunches.value]
  const draggedItem = items[dragStartIndex.value]
  items.splice(dragStartIndex.value, 1)
  items.splice(targetIndex, 0, draggedItem)

  dragStartIndex.value = targetIndex
  orderedLaunches.value = items
}

const handleDrop = () => {
  isReordering.value = true
  setTimeout(() => {
    isReordering.value = false
  }, 500)
}

onMounted(async () => {
  await store.fetchLaunches()
})
</script>

<style scoped>
.skeleton_visible{
  width: 100%;
  display: flex;
  justify-items: start;
  align-items: start;
  gap: 20px;
  height: 400px;

}
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
.categories{
  display: flex;
  justify-content: start;
  overflow-x: scroll;
  gap: 30px;
  padding: 20px;
}
</style>
