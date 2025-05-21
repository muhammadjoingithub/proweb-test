import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Launch, Category } from '../types/LaunchTypes'

export const useLaunchStore = defineStore('launch', () => {
  const launches = ref<Launch[]>([])
  const isLoading = ref<boolean>(false)
  const selectedCategory = ref<string | null>(null)

  const fetchLaunches = async () => {
    isLoading.value = true
    const res = await fetch('https://main.proweb.uz/api/v1/launches/external/course/research/')
    const data = await res.json()
    launches.value = data.results
    isLoading.value = false
  }

  const categories = computed<Category[]>(() => {
    const allCats: Category[] = []
    launches.value.forEach(launch => {
      launch.categories.forEach(cat => {
        if (!allCats.some(c => c.key === cat.key)) {
          allCats.push(cat)
        }
      })
    })
    return allCats
  })

  const filteredLaunches = computed(() => {
  if (!selectedCategory.value) return launches.value 
  return launches.value.filter(launch =>
    launch.categories.some(cat => cat.key === selectedCategory.value)
  )
})

  return {
    launches,
    fetchLaunches,
    isLoading,
    selectedCategory,
    categories,
    filteredLaunches
  }
})
