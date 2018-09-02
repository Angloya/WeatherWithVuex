<template>
  <div class="search">
    <div class="inputSearch">
  <input v-model="search" type="search" @keypress.enter="getCities" id="inputSearch" autofocus placeholder="enter the name of the city..." required />
  <img src="../assets/search.png" @click="getCities" alt="Search"  id="buttonSearch">
    </div>
   <div v-if="searching"><h1>Searching...</h1></div>
   <div v-if="error"><i>No result</i></div>
  <ul class="search" v-if="!show">
  <li v-for="(city, index) in cities" :key="index" class="result" @click="getWeather(city.url)">
         <div>{{city.name}}</div>
         </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'Weather5day',
  data () {
    return {
      search: '',
      id: ''
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    },
    weatherLocation () {
      return this.$store.state.weatherLocation
    },
    searching () {
      return this.$store.state.searching
    },
    error () {
      return this.$store.state.error
    },
    show () {
      return this.$store.state.show
    }
  },
  methods: {
    getCities () {
      if (this.search === '') return
      this.$store.dispatch('searchCities', this.search)
    },
    getWeather (url) {
      this.$store.dispatch('Weather', url)
      this.search = ''
    }
  }
}
</script>

<style scoped>
.inputSearch{
  display: flex;
  align-items:center;
  justify-content: center;
}
#inputSearch{
  height: 50px;
  width: 300px;
  font-family: 'Poiret One', cursive;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
}
.search ul {
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top: 10px
}
.result {
list-style-type: none;
border: 1px solid  #8a3cff;
margin: 10px;
padding: 10px;
font-size: 20px;
font-weight: 900;
cursor: pointer;
border-radius: 4px
}
.result:hover {
-webkit-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
transition:0.7s;
transform-style: preserve-3d;
}
</style>
