<template>
<div class="weathers weathersCityDay" @click="openCity(cityUrl)">
  <div v-if="searching"><h1>Searching...</h1></div>
  <div class="tempInfo">
   <h1>{{weatherCurrentCondition.text}}</h1>
   <img :src="weatherCurrentCondition.icon" alt="">
  <h1>Air temperature:</h1>
  <span class="weatherImg" id="temp">
  <img src="../assets/temp.png"  alt="temp">
  <h1><em>{{weatherCurrent.temp_c}}°C </em></h1>
  </span>
  <h2>feels like: {{weatherCurrent.feelslike_c}}°C</h2>
   </div>
     <div class="cityInfo">
  <h1>Weather in {{weatherLocation.name}}</h1>
  <h3>{{weatherLocation.country}}</h3>
  <p>{{weatherLocation.region}}</p>
  <p>Local time:</p>
  <h2>{{weatherLocation.localtime}}</h2>
  <p>If you want to know the weather for this city in more detail, click on any of the blocks...</p>
  <img src="../assets/more.png" id="more" alt="more">
  </div>
   <div class="moreInfo">
   <span class="weatherImg">
     <img src="../assets/cloud.png"  alt="Clouds">
   <h2>Clouds: {{weatherCurrent.cloud}}%</h2>
   </span>
   <h2>Wind speed: {{weatherCurrent.wind_kph}} km/h</h2>
   <span class="weatherImg">
   <img src="../assets/rain.png" alt="rain">
   <h2>Rainfall: {{weatherCurrent.precip_mm}} mm</h2>
   </span>
   <h2>Humidity: {{weatherCurrent.himidity}} %</h2>
   <h2>Visibility: {{weatherCurrent.vis_km}} km</h2>
   </div>
</div>
</template>

<script>
export default {
  name: 'Weather',
  computed: {
    weatherLocation () {
      return this.$store.state.weatherLocation
    },
    searching () {
      return this.$store.state.searching
    },
    weatherCurrent () {
      return this.$store.state.weatherCurrent
    },
    weatherCurrentCondition () {
      return this.$store.state.weatherCurrentCondition
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
