<template>
 <div class="personal_information">
    <div class="personal_photo">
        <img src="/public/my-photo.jpg"/>
    </div>
    <div class="addres">
        <div class="name">Гафуров Мухаммаджон Гулямжон угли</div>
        <div class="age">22лет / 9 мая 2003год</div>
        <div class="location">г. Ташкент, Мирабадский рн. </div>
    </div>
 </div>
 <div class="more_information">
    <h3>Информация</h3>
 
    <p>Я опытный фронтенд-разработчик с более чем 6-месячным опытом веб-программирования с использованием Vue.js и Nuxt.js. Я креативен и обладаю прекрасными навыками программирования и дизайна, что позволяет мне создавать веб-сайты, которые не только функциональны, но и удобны для пользователя. Я умею работать как в команде, так и самостоятельно и всегда стремлюсь находить новые решения. У меня есть все навыки, необходимые для создания веб-приложений, соответствующих международным стандартам, для любого проекта.
        В этих проектах  пользовались Vue (options и composition) , Nuxt , Typescript , TailwindCSS,Pinia,Vuex , Material UI , VueUse и подобных технологий.
        <br><br>
        Ранее я работал интерном в компании UIC Group и получил соответствующий опыт.Я работал там от 1 декабря 2023 года до 1 июня 2024 года.
        Моя роль заключалась в проверке и отладке кода, написанного другими в существующих проектах. Я участвовал в UZnews, TMII, TIFT и подобных проектах.
        <br><br>У меня есть высшее образование 2025году окончил национальный  университет Узбекистана по специализации "История" 2021-2025 годах.И заодно учил разработку сайта в в учебных центрах UIC Group по специализации "Frontend PRO".
        <br><br>Мне нравится все виды спорта где основном понадобиться большая физическая нагрузка , особенно футбол и волейбол, настольный теннис. Люблю читать книги в жанрах детективы.Вдохновение для новых идей часто приходит во время прогулок на свежем воздухе.
    </p>
 </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.personal_information{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 15px;

}
.personal_photo{
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}
.personal_photo img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.addres{

}
.age , .location{
    font-family: Inter , sans-serif;
font-weight: 400;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
}
.age{
    margin-bottom: 10px;
}
.name{
font-weight: 500;
font-size: 30px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
margin-bottom: 15px;
}
.more_information{
    gap: 20px;
    padding: 15px;
}
.more_information h3{
font-weight: 500;
font-size: 26px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
margin-bottom: 15px;

}
.more_information p{
font-weight: 300;
font-size: 20px;
line-height: 30px;
letter-spacing: 0%;
color: #000000;


}
</style>