<template>
  <div class="all_courses">
    <div v-for="cat in launch.categories" :key="cat.id" class="categories_type">
      <p class="course_name">{{ launch.name }}</p>
      <p :style="{ backgroundColor: cat.color }" class="categoryType_name"> {{ cat.name }}</p>
    </div>

       <div class="groups_time">
         <p style="padding: 15px;">Старт групп</p>
          <div class="group_date_times">
              <div class="group_lesson_times">
                  <div v-for="group in sortedGroups" :key="group.id" class="lessons" >
                      <span>{{ formatTime(group.study_time) }}</span>
                         <div class="group_date">
                             <p> {{ formatDate(group.start_date) }} </p>
                             <p>  {{ formatDays(group.days) }}</p>
                         </div>
                   </div>
               </div>
        </div>



          <div class="lessons_groups">
                <p>Открытые уроки</p>
                 <div class="group_date_times_lessons">
                  <div v-for="(times, date) in groupedLessons"  :key="date" >
                     <div class="group_date_header">
                       <p>{{ formatDate(date) }}</p>
                       <p>ВС</p>
                     </div>
                     <div class="group_lesson_days">
                        <div class="group_open_lesson_times">
                          <div v-for="time in times" :key="time" class="lessons_time">
                               <span>{{ formatTime(time) }}</span>
                           </div>
                     </div>
                     </div>
                    
                   </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Launch } from '../types/LaunchTypes'
import { computed } from 'vue'

const { launch } = defineProps<{
  launch: Launch
}>()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}г`
}

function formatTime(timeStr: string): string {
  return timeStr.slice(0, 5)
}

function formatDays(days: number[]): string {
  const dayNames: Record<number, string> = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
    7: 'Вс',
  }
  return days.map(day => dayNames[day]).join(', ')
}




const groupedLessons = computed(() => {
  const sorted = [...launch.open_lessons].sort((a, b) => {
    const aTime = new Date(`${a.date}T${b.time}`)
    const bTime = new Date(`${b.date}T${a.time}`)
    return bTime.getTime() - aTime.getTime()
  })

  const grouped: Record<string, string[]> = {}

  sorted.forEach(lesson => {
    if (!grouped[lesson.date]) {
      grouped[lesson.date] = []
    }
    grouped[lesson.date].push(lesson.time)
  })

  return grouped
})

const sortedGroups = computed(() => {
  return [...launch.groups].sort((a, b) => {
    const dateA = new Date(`${a.start_date}T${b.study_time}`)
    const dateB = new Date(`${b.start_date}T${a.study_time}`)
    return dateB.getTime() - dateA.getTime()
  })
})
</script>


<style scoped>
.group_date_times_lessons{
  margin-top: -30px;
}
.group_lesson_days{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px ;
}
.group_date_header {
  display: flex;
  justify-content: space-between;

}
.group_date_header p{
font-weight: 500;
font-size: 14px !important;
line-height: 100%;
letter-spacing: 0%;
color: #616161 !important;
}
.group_date{
  top:-16px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.group_date p{
font-weight: 100;
font-size: 14px !important;
line-height: 100%;
letter-spacing: 0%;
color: #616161 !important;
}
.group_date_times{
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.group_lesson_times{
  margin-top: 12px;
  width: 90%;
  border-radius:20px;
  background: #F9FAF5;
  margin-bottom: 20px;
  border: 1px solid #F0F0F0;
}
.group_open_lesson_times{
  width: 90%;
  border-radius:20px;
  background: #F9FAF5;
  margin-bottom: 20px;
  border: 1px solid #F0F0F0;
}

.group_lesson_times  .lessons{
  color:#383838;
  border-bottom: 1px solid #F0F0F0;
  margin-top: 6px;
  font-weight: 500;

  height: 30px;
  width: 100%;

}
.group_lesson_times .lessons:first-child{
  margin-top:8px;
}
.group_lesson_times .lessons:last-child{
  border-bottom: 0;
}
.group_lesson_times .lessons span{
  padding: 20px;
}

.group_date_times_lessons  .lessons_time{
  color:#383838;
  font-weight: 500;
  border-bottom: 1px solid #F0F0F0;
  margin-top: 6px;
  height: 30px;
  width: 100%;

}
.group_date_times_lessons .lessons_time:first-child{
  margin-top:8px;
}
.group_date_times_lessons .lessons_time:last-child{
  border-bottom: 0;
}
.group_date_times_lessons .lessons_time span{
  padding: 20px;
}


.line {
  border-radius: 20px;
  background: #F9FAF5;
}
.all_courses{
  cursor: pointer;
}
.lessons_groups{
  background: #EEECDC;
  border-radius: 0px 0px 20px 20px ;
}
.lessons_groups p{
  padding: 15px;
font-weight: 900;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
}
.groups_time{
background: #FFFFFF;
border-radius: 20px;
}
.groups_time p{
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
color:#000000;
margin-bottom: 15px;
}
.categories_type{
  display: flex;
  gap: 15px;
  justify-content: start;
  align-items: center;
  width: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
 
}
.course_name{
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
color: #606060;
margin-top: 5px;
}
.categoryType_name{
  padding: 4px 7px 4px 7px;
  border-radius: 50px;
}
.group_time{
  width: 100%;
  border-bottom: #F0F0F0 1px solid;
  padding-bottom: 10px;
}
.group_time span{
  margin: 10px 20px;
}

</style>
  