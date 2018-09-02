<template>
<div class="weather3day">
  <ul class="weatherCityDay">
  <li v-for="(weather, index) in weatherCityDay5" :key="index">
  <h2>Date: {{weather.date}}</h2>
  <h1>Air temperature:</h1>
  <span class="weatherImg">
  <img src="../assets/temp.png"  alt="temp">
  <h1><em>{{weather.day.avgtemp_c}}°C</em></h1>
  </span>
  <p>max: {{weather.day.maxtemp_c}}°C</p>
  <p>min: {{weather.day.mintemp_c}}°C</p>
  <h3>{{weather.day.condition.text}}</h3>
  <img :src="weather.day.condition.icon" alt="">
  <div class="astro">
  <p>sunrise: {{weather.astro.sunrise}}</p>
  <p>sunset: {{weather.astro.sunset}}</p>
  <p>moonrise: {{weather.astro.moonrise}}</p>
  <p>moonset: {{weather.astro.moonset}}</p>
  </div>
  </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'CityWeather5day',
  data () {
    return {
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    },
    weatherCityDay5 () {
      return this.$store.state.weatherCityDay5
    },
    cityUrl () {
      return this.$store.state.cityUrl
    }
  }
}
</script>

<style scoped>
.location h1, h2, h3, p{
  margin: 5px;
}
.location {
  flex-grow: 2
}
.weatherCityDay{
display: flex;
justify-content: center;
flex-wrap: wrap
}
.weatherCityDay li {
  list-style-type: none;
  padding: 20px;
  padding-right: 40px;
  border: 1px solid black;
  margin: 20px;
  width: 20%;
  background: rgba(255, 255, 255, 0.4);
}
.weatherCityDay li:hover {
-webkit-transform: scale(1.05);
-ms-transform: scale(1.05);
transform: scale(1.05);
transition:0.7s;
transform-style: preserve-3d;
border: 1px solid #8a3cff;
background: rgba(255, 255, 255, 0.8);
}
@media only screen and (max-width: 1050px) {
  .weatherCityDay{
flex-direction: column;
align-items: center;
}
.weatherCityDay li {
  padding-right: 0px;
  margin: 20px;
  width: 70%;
  max-width: 350px;
}
.weatherCityDay li:hover {
-webkit-transform: none;
-ms-transform: none;
transform: none;
}
}
@media only screen and (max-width: 350px) {
.weatherCityDay li {
  max-width: 270px;
  padding: 5px;
}
}
</style>
