<template>
  <div class="main">
    <h1>Today's weather</h1>
    <div>
      <searchCity class="search"/>
      <transition name="flip">
        <weatherSearchDay  v-if="showWeather"/>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchCity from '@/components/SearchCity.vue'
import weatherSearchDay from '@/components/WeatherSearchDay.vue'

export default {
  name: 'home',
  components: {
    searchCity,
    weatherSearchDay
  },
  computed: {
    showWeather () {
      return this.$store.state.showWeather
    }
  },
  data () {
    return {
      date: ''
    }
  },
  created () {
    this.isDate()
  },
  methods: {
    isDate () {
      let date = new Date()
      this.date = date.toLocaleTimeString() + ' ' + date.toDateString()
      setTimeout(this.isDate, 1000)
      clearTimeout(this.isDate)
    }
  }
}
</script>

<style scoped>
.main {
  height:100%;
  min-height: 800px
}
.search {
  margin-left: 5px;
}
.flip-enter-active{
  transition: all 2s ease;
}
.flip-enter{
  transform: rotateY(180deg);
  opacity: 0;
}
.flip-leave{
  display: none;
}
.inputSearch{
  display: flex;
  align-items:center;
  justify-content: center;
}
</style>
