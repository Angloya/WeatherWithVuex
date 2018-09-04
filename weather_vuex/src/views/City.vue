<template>
  <div class="main">
    <h1 class="time">{{date}}</h1>
    <div class="home">
      <CityWeather class="CityWeather" />
      <div class="CityWeatherday">
        <h1> Weather
          <em v-if="day3">3</em>
          <em v-if="day5">5</em>
          <em v-if="day7"> detailed forecast 7</em>
          <em v-if="day10">7</em>
            days
        </h1>
        <div class="selectDay">
          <div v-if="!day3" @click="toggle3 ('3')"> 3 days </div>
          <div v-if="!day5" @click="toggle5 ('5')"> 5 days </div>
          <div v-if="!day7" @click="toggle7 ('7')">  detailed forecast 7 days</div>
          <div v-if="!day10" @click="toggle10 ('10')">7 days</div>
        </div>
        <weatherDay v-if="!day10"/>
        <weather10day v-if="day10" class="CityWeatherday10"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CityWeather from '@/components/CityWeather.vue'
import weatherDay from '@/components/WeatherDay.vue'
import weather10day from '@/components/Weather10day.vue'

export default {
  name: 'City',
  components: {
    CityWeather,
    weatherDay,
    weather10day
  },
  data () {
    return {
      date: '',
      day3: false,
      day5: false,
      day7: false,
      day10: true
    }
  },
  computed: {
    cityUrl () {
      return this.$store.state.cityUrl
    },
    weatherCityDay () {
      return this.$store.state.weatherCityDay
    }
  },
  created () {
    this.isDate()
  },
  methods: {
    toggle3 (day) {
      this.day3 = true
      this.day5 = false
      this.day7 = false
      this.day10 = false
      this.$store.dispatch('WeatherCity', [this.cityUrl, day])
    },
    toggle5 (day) {
      this.day3 = false
      this.day5 = true
      this.day7 = false
      this.day10 = false
      this.$store.dispatch('WeatherCity', [this.cityUrl, day])
    },
    toggle7 (day) {
      this.day3 = false
      this.day5 = false
      this.day7 = true
      this.day10 = false
      this.$store.dispatch('WeatherCity', [this.cityUrl, day])
    },
    toggle10 (day) {
      this.day3 = false
      this.day5 = false
      this.day7 = false
      this.day10 = true
      this.$store.dispatch('WeatherCity', [this.cityUrl, day])
    },
    isDate () {
      let date = new Date()
      this.date = date.toLocaleTimeString() + ' ' + date.toDateString()
      setTimeout(this.isDate, 1000)
      clearTimeout(this.date)
    }
  }
}
</script>

<style>
.CityWeatherday h1 {
  margin-bottom: 20px;
}
.home {
  display: flex;
  width: 100%
}
.CityWeather {
  width: 20%;
  border-right: 1px solid black;
  position: sticky;
  top: 20px;
  margin-top: -100px;
  height: 900px;
  background: rgba(255, 255, 255, 0.2);
  }
.CityWeatherday {
   width: 80%;
   margin-top: 0px;
   justify-content: center
}
.CityWeatherday10
{
  margin-top: 3%;
  margin-left: 20px;
  margin-right: 20px;
}
.selectDay {
  display: flex;
  font-weight: bold;
  justify-content: center;
}
.selectDay div {
  margin-right: 20px;
  font-size: 25px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.6);
}
.selectDay div:hover {
  border: 1px solid #8a3cff;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition:0.7s;
  transform-style: preserve-3d;
  font-weight: 900;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
}
.inputSearch{
  display: flex;
  align-items:center;
  justify-content: center;
}
@media only screen and (max-width: 1200px) {
.home {
  flex-direction: column
}
.CityWeather {
  width:100%;
  position: static;
  margin-top: 10px;
  min-height: 800px;
  padding-bottom: 30px;
}
.CityWeatherday {
  border-top: 1px solid black;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
}
.selectDay {
  flex-direction: column
}
.selectDay div {
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 5px;
  padding: 15px;
}
.selectDay div:hover {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-weight: normal;
  cursor: pointer;
  border: 1px solid black;
  }
}
</style>
