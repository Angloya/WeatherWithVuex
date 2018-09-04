<template>
  <div class="search">
    <div class="inputSearch">
      <input v-model="search" type="search"
      @keypress.enter="getCities"
      id="inputSearch"
      autofocus
      placeholder="enter the name of the city..."
      required />
      <img src="../assets/search.png" @click="getCities" alt="Search"  id="buttonSearch">
    </div>
    <div v-if="searching">
      <h1>Searching...</h1>
    </div>
    <div v-if="errorSearch"><i>No result</i></div>
    <ul class="search" v-if="!showWeather">
      <li v-for="(city, index) in cities"
          :key="index"
          class="result"
          @click="getWeather(city.url)">
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
      search: ''
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    },
    searching () {
      return this.$store.state.searching
    },
    errorSearch () {
      return this.$store.state.errorSearch
    },
    showWeather () {
      return this.$store.state.showWeather
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
.search {
  height: 100%;
}
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
  border: 1px solid  black;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.6);
}
.result:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition:0.7s;
  transform-style: preserve-3d;
  background: rgba(255, 255, 255, 0.9);
}
input#inputSearch  {
  padding-left: 10px;
}
</style>
