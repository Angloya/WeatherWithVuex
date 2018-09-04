<template>
  <div class="weathers weathersCityDay" @click="openCity(cityUrl)">
    <div v-if="searching">
      <h1>Searching...</h1>
    </div>
    <div class="tempInfo">
      <h1>{{weatherCondition.text}}</h1>
      <img :src="weatherCondition.icon" alt="">
      <h1>Air temperature:</h1>
    <span class="weatherImg" id="temp">
      <img src="../assets/temp.png"  alt="temp">
      <h1><em>{{weather.current.temp_c}}°C </em></h1>
    </span>
    <h2>feels like: {{weather.current.feelslike_c}}°C</h2>
    </div>
    <div class="cityInfo">
      <h1>Weather in {{weather.location.name}}</h1>
      <h3>{{weather.location.country}}</h3>
      <p>{{weather.location.region}}</p>
      <p>Local time:</p>
      <h2>{{weather.location.localtime}}</h2>
      <p>If you want to know the weather for this city in more detail, click on any of the blocks...</p>
      <img src="../assets/more.png" id="more" alt="more">
    </div>
    <div class="moreInfo">
      <span class="weatherImg">
        <img src="../assets/cloud.png"  alt="Clouds">
        <h2>Clouds: {{weather.current.cloud}}%</h2>
      </span>
      <h2>Wind speed: {{weather.current.wind_kph}} km/h</h2>
      <span class="weatherImg">
        <img src="../assets/rain.png" alt="rain">
        <h2>Rainfall: {{weather.current.precip_mm}} mm</h2>
      </span>
      <h2>Humidity: {{weather.current.himidity}} %</h2>
      <h2>Visibility: {{weather.current.vis_km}} km</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  computed: {
    weather () {
      return this.$store.state.weather
    },
    searching () {
      return this.$store.state.searching
    },
    weatherCondition () {
      return this.$store.state.weatherCondition
    },
    show () {
      return this.$store.state.show
    },
    cityUrl () {
      return this.$store.state.cityUrl
    }
  },
  methods: {
    openCity (cityUrl) {
      this.$router.push({ name: 'City', params: { url: cityUrl } })
    }
  }
}
</script>

<style>
#more {
  height: 60px;
  width: 60px;
}
h1, h2, h3, p .weathersCityDay {
  padding: 10px;
}
.weatherImg {
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
}
#temp:hover {
  -webkit-transform: rotate(720deg);
  -ms-transform: rotate(720deg);
  transform: rotate(720deg);
  transition:2s;
  transform-style: preserve-3d;
}
em {
  font-style: normal;
  font-size: 50px;
  font-weight: 900
}
.weathers {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.weathers div {
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 320px;
  height: 350px;
  background: rgba(255, 255, 255, 0.5)
}
.weathers div:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition:0.7s;
  transform-style: preserve-3d;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer
}
.tempInfo {
  margin-top: 60px;
}
.moreInfo {
  margin-top: 60px;
}
@media only screen and (max-width: 1050px) {
.weathers {
  flex-direction: column
}
.weathers div {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 330px;
  height: 400px;
  }
}
@media only screen and (max-width: 350px) {
.weathers {
  flex-direction: column
}
.weathers div {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 250px;
  height: 350px;
  }
}

</style>
