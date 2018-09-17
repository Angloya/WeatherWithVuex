import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {},
    timeError: {},
    cities: [],
    weatherCity: {},
    weather: {},
    weatherCityDay: {},
    weatherCondition: {},
    searching: false,
    errorSearch: false,
    showWeather: false,
    cityUrl: ''
  },
  mutations: {
    cities (state, cities) {
      state.cities = cities
    },
    cityUrl (state, cityUrl) {
      state.cityUrl = cityUrl
    },
    weather (state, weather) {
      state.weather = weather
    },
    weatherCondition (state, weatherCondition) {
      state.weatherCondition = weatherCondition
    },
    weatherCity (state, weatherCity) {
      state.weatherCity = weatherCity
    },
    weatherCityDay (state, weatherCityDay) {
      state.weatherCityDay = weatherCityDay
    },
    searching (state, bool) {
      state.searching = bool
    },
    errorSearch (state, bool) {
      state.errorSearch = bool
    },
    showWeather (state, bool) {
      state.showWeather = bool
    }
  },
  actions: {
    searchCities (context, term) {
      context.commit('searching', true)
      context.commit('showWeather', false)
      context.commit('cities', {})
      this.time = setTimeout(() => {
        Vue.http.get('https://api.apixu.com/v1/search.json?key=3d5ff657c00e4e12a8593943183108&q=' + term).then(response => {
          if (response.body.length !== 0) {
            context.commit('cities', response.body)
          } else {
            context.commit('errorSearch', true)
          }
        }, response => {
          console.log('ERROR', response)
          context.commit('errorSearch', true)
        })
        context.commit('searching', false)
        context.commit('cityUrl', '')
      }, 1000)
      this.time = setTimeout(() => { context.commit('errorSearch', false) }, 3000)
    },
    Weather (context, url) {
      context.commit('searching', true)
      Vue.http.get('https://api.apixu.com/v1/current.json?key=3d5ff657c00e4e12a8593943183108&q=' + url).then(response => {
        context.commit('weather', response.body)
        context.commit('weatherCondition', response.body.current.condition)
        context.commit('showWeather', true)
        context.commit('cityUrl', url)
      }, response => {
        console.log('ERROR', response)
      })
      context.commit('searching', false)
      context.commit('cities', [])
      clearTimeout(this.timeError)
      clearTimeout(this.time)
    },
    WeatherCity (context, [url, day]) {
      context.commit('searching', true)
      Vue.http.get('https://api.apixu.com/v1/forecast.json?key=3d5ff657c00e4e12a8593943183108&q=' + url + '&days=' + day).then(response => {
        context.commit('weatherCity', response.body)
        context.commit('weatherCityDay', response.body.forecast.forecastday)
        context.commit('showWeather', false)
      }, response => {
        console.log('ERROR', response)
      })
      context.commit('searching', false)
    }
  },
  plugins: [createPersistedState()]
})
