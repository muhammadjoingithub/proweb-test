<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<div class="container">
  <nav>
      <RouterLink to="/"><img alt="Proweb logo" class="logo" src="/public/proweb-logo.png"  /></RouterLink>

    <div class="wrapper">
        <RouterLink exact-active-class="active" to="/" class="zapusk"><img src="/public/zapusk.png"  alt="zapusk"><span>Запуски</span></RouterLink>
        <RouterLink exact-active-class="active" to="/about" class="aboutMe"><img src="/public/aboutMe.png"  alt="aboutMe"><span>Обо мне</span></RouterLink>
    </div>
  </nav>
     <div class="page"><RouterView /></div>
</div>
</template>
<style scoped>
.container{
  display: flex;
  width: 100%;
  height: 100vh;
 
}
.active {
  color: #000000 ;
  background: #EEECDC;
  transition: all 0.5s ease-in;
  transition-duration: 0.5s;
}

nav{
  width: 20%;
}
.page{
  border-left: #CCCCCC solid 1px;
  width: 80%;
  height: 98%;
  margin-top: 6px;
  
}
.logo , .wrapper{
  padding:20px;

}
.aboutMe , .zapusk{
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  color: #000000 ;
  border: 6px ;
  padding: 10px;
  border-radius: 5px;
  
}
.aboutMe{
  margin-top:20px ;
}
.aboutMe:hover , .zapusk:hover{
  color: #000000 ;
  background: #EEECDC;
  transition: all 0.5s;
  transition-duration: 0.5s;
  
}
.aboutMe span , .zapusk span{
 margin-left: 10px;
  
}
</style>
