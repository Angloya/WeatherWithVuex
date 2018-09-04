<template>
  <div class="weather">
    <div class="location">
      <h1>Weather in {{weatherCity.location.name}}</h1>
      <p>{{weatherCity.location.region}}</p>
      <h3>{{weatherCity.location.country}}</h3>
      <p>Local time:</p>
      <h2>{{weatherCity.location.localtime}}</h2>
      <h1>{{weatherCity.current.condition.text}}</h1>
      <img :src="weatherCity.current.condition.icon" alt="">
      <h1>Air temperature:</h1>
      <span class="weatherImg" id="temp">
        <img src="../assets/temp.png"  alt="temp">
        <h1><em>{{weatherCity.current.temp_c}}°C </em></h1>
      </span>
      <h2>feels like: {{weatherCity.current.feelslike_c}}°C</h2>
      <span class="weatherImg">
        <img src="../assets/cloud.png"  alt="Clouds">
        <h2>Clouds: {{weatherCity.current.cloud}}%</h2>
      </span>
      <h2>Wind speed: {{weatherCity.current.wind_kph}} km/h</h2>
      <span class="weatherImg">
        <img src="../assets/rain.png" alt="rain">
        <h2>Rainfall: {{weatherCity.current.precip_mm}} mm</h2>
      </span>
      <h2>Humidity: {{weatherCity.current.himidity}} %</h2>
      <h2>Visibility: {{weatherCity.current.vis_km}} km</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityWeather',
  computed: {
    weatherCity () {
      return this.$store.state.weatherCity
    },
    cityUrl () {
      return this.$store.state.cityUrl
    }
  },
  created () {
    this.$store.dispatch('WeatherCity', [this.cityUrl, '10'])
  }
}
</script>

<style scoped>
.weather {
  display: flex;
}
.location h1, h2, h3, p{
  margin: 0px;
}
.location {
  flex-grow: 2
}
</style>
