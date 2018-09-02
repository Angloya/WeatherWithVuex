<template>
  <div class="main">
    <h1 class="time">{{date}}</h1>
    <div class="home">
      <CityWeather class="CityWeather" />
      <div class="CityWeatherday">
        <h1>Weather
      <em v-if="day3">3</em>
      <em v-if="day5">5</em>
      <em v-if="day7"> detailed forecast 7</em>
      <em v-if="day10">7</em>
      days
    </h1>
    <div class="selectDay">
  <div v-if="!day3" @click="toggle3 ()"> 3 days </div>
  <div v-if="!day5" @click="toggle5 ()"> 5 days </div>
  <div v-if="!day7" @click="toggle7 ()">  detailed forecast 7 days</div>
  <div v-if="!day10" @click="toggle10 ()">7 days</div>
    </div>
      <CityWeather3day v-if="day3"/>
      <CityWeather5day v-if="day5"/>
      <CityWeather7day v-if="day7"/>
      <CityWeather10day v-if="day10" class="CityWeatherday10"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CityWeather from '@/components/CityWeather.vue'
import CityWeather3day from '@/components/CityWeather3day.vue'
import CityWeather5day from '@/components/CityWeather5day.vue'
import CityWeather7day from '@/components/CityWeather7day.vue'
import CityWeather10day from '@/components/CityWeather10day.vue'

export default {
  name: 'City',
  components: {
    CityWeather,
    CityWeather3day,
    CityWeather5day,
    CityWeather7day,
    CityWeather10day
  },
  data () {
    return {
      date: '',
      day3: true,
      day5: false,
      day7: false,
      day10: false

    }
  },
  computed: {
    cityUrl () {
      return this.$store.state.cityUrl
    }
  },
  created () {
    this.isDate()
  },
  methods: {
    toggle3 () {
      this.day3 = true
      this.day5 = false
      this.day7 = false
      this.day10 = false
      this.$store.dispatch('WeatherCity', this.cityUrl)
    },
    toggle5 () {
      this.day3 = false
      this.day5 = true
      this.day7 = false
      this.day10 = false
      this.$store.dispatch('WeatherCity5', this.cityUrl)
    },
    toggle7 () {
      this.day3 = false
      this.day5 = false
      this.day7 = true
      this.day10 = false
      this.$store.dispatch('WeatherCity7', this.cityUrl)
    },
    toggle10 () {
      this.day3 = false
      this.day5 = false
      this.day7 = false
      this.day10 = true
      this.$store.dispatch('WeatherCity10', this.cityUrl)
    },
    isDate () {
      let date = new Date()
      this.date = date.toLocaleTimeString() + ' ' + date.toDateString()
      setTimeout(this.isDate, 1000)
    }
  }
}
</script>

<style>
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
  height: 800px;
  }
.CityWeatherday {
   width: 80%;
   margin-top: 0px;
   justify-content: center
}
.CityWeatherday10
{
  padding-top: 3%
}
.selectDay {
  display: flex;
  justify-content: center;
}
.selectDay div {
  margin-right: 20px;
  font-size: 25px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
}
.selectDay div:hover {
  border: 1px solid #8a3cff;
  -webkit-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
transition:0.7s;
transform-style: preserve-3d;
font-weight: 900;
cursor: pointer
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
  height: 800px;
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
