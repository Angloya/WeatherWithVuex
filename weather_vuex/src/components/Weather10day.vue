<template>
  <div class="weather3day">
    <ul class="weatherCityDay">
      <li v-for="(weather, index) in weatherCityDay"
      :key="index">
        <h2>{{weather.date}}</h2>
        <img :src="weather.day.condition.icon" alt="">
        <span class="weatherImg" id="temp">
          <img src="../assets/temp.png"  alt="temp">
          <h1><em>{{weather.day.avgtemp_c}}°C</em></h1>
        </span>
        <h3>{{weather.day.condition.text}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityWeather10day',
  computed: {
    weatherCityDay () {
      return this.$store.state.weatherCityDay
    },
    cityUrl () {
      return this.$store.state.cityUrl
    }
  }
}
</script>

<style scoped>
.weather3day h1, h2, h3, p{
  margin: 5px;
  font-size: 25px;
}
em {
  font-size: 30px;
}
.weatherCityDay{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.weatherCityDay li {
  list-style-type: none;
  margin: 20px;
  background: rgba(255, 255, 255, 0.6);
  width: 15%;
  min-width: 220px
}
@media only screen and (max-width: 1050px) {
.weatherCityDay{
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.weatherCityDay li {
  padding-right: 0px;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0,4);
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
