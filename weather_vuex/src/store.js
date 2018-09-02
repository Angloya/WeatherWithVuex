import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: [],
    weatherLocation: {},
    weatherCity: {},
    weatherCityDay: {},
    weatherCityDay5: {},
    weatherCityDay7: {},
    weatherCityDay10: {},
    weatherCurrent: {},
    weatherCurrentCondition: {},
    searching: false,
    error: false,
    show: false,
    cityUrl: ''
  },
  mutations: {
    cities (state, cities) {
      state.cities = cities
    },
    cityUrl (state, cityUrl) {
      state.cityUrl = cityUrl
    },
    weatherLocation (state, weatherLocation) {
      state.weatherLocation = weatherLocation
    },
    weatherCurrent (state, weatherCurrent) {
      state.weatherCurrent = weatherCurrent
    },
    weatherCurrentCondition (state, weatherCurrentCondition) {
      state.weatherCurrentCondition = weatherCurrentCondition
    },
    weatherCity (state, weatherCity) {
      state.weatherCity = weatherCity
    },
    weatherCityDay5 (state, weatherCityDay5) {
      state.weatherCityDay5 = weatherCityDay5
    },
    weatherCityDay7 (state, weatherCityDay7) {
      state.weatherCityDay7 = weatherCityDay7
    },
    weatherCityDay10 (state, weatherCityDay10) {
      state.weatherCityDay10 = weatherCityDay10
    },
    weatherCityDay (state, weatherCityDay) {
      state.weatherCityDay = weatherCityDay
    },
    searching (state, bool) {
      state.searching = bool
    },
    error (state, bool) {
      state.error = bool
    },
    show (state, bool) {
      state.show = bool
    }
  },
  actions: {
    searchCities (context, term) {
      context.commit('searching', true)
      context.commit('show', false)
      context.commit('cities', {})
      setTimeout(() => {
        Vue.http.get('http://api.apixu.com/v1/search.json?key=3d5ff657c00e4e12a8593943183108&q=' + term).then(response => {
          if (response.body.length !== 0) {
            context.commit('cities', response.body)
          } else {
            context.commit('error', true)
          }
        }, response => {
          console.log('ERROR', response)
          context.commit('error', true)
        })
        context.commit('searching', false)
        context.commit('cityUrl', '')
      }, 1000)
      setTimeout(() => { context.commit('error', false) }, 3000)
    },
    Weather (context, url) {
      context.commit('searching', true)
      Vue.http.get('http://api.apixu.com/v1/current.json?key=3d5ff657c00e4e12a8593943183108&q=' + url).then(response => {
        context.commit('weatherLocation', response.body.location)
        context.commit('weatherCurrent', response.body.current)
        context.commit('weatherCurrentCondition', response.body.current.condition)
        context.commit('show', true)
        context.commit('cityUrl', url)
      }, response => {
        console.log('ERROR', response)
      })
      context.commit('searching', false)
      context.commit('cities', [])
    },
    WeatherCity (context, url) {
      context.commit('searching', true)
      Vue.http.get('http://api.apixu.com/v1/forecast.json?key=3d5ff657c00e4e12a8593943183108&q=' + url + '&days=3').then(response => {
        context.commit('weatherCity', response.body)
        context.commit('weatherCityDay', response.body.forecast.forecastday)
        context.commit('weatherCurrent', {})
        context.commit('weatherLocation', {})
        context.commit('show', false)
      }, response => {
        console.log('ERROR', response)
      })
      context.commit('searching', false)
    },
    WeatherCity5 (context, url) {
      Vue.http.get('http://api.apixu.com/v1/forecast.json?key=3d5ff657c00e4e12a8593943183108&q=' + url + '&days=5').then(response => {
        context.commit('weatherCityDay5', response.body.forecast.forecastday)
      }, response => {
        console.log('ERROR', response)
      })
    },
    WeatherCity7 (context, url) {
      Vue.http.get('http://api.apixu.com/v1/forecast.json?key=3d5ff657c00e4e12a8593943183108&q=' + url + '&days=7').then(response => {
        context.commit('weatherCityDay7', response.body.forecast.forecastday)
      }, response => {
        console.log('ERROR', response)
      })
    },
    WeatherCity10 (context, url) {
      Vue.http.get('http://api.apixu.com/v1/forecast.json?key=3d5ff657c00e4e12a8593943183108&q=' + url + '&days=10').then(response => {
        context.commit('weatherCityDay10', response.body.forecast.forecastday)
      }, response => {
        console.log('ERROR', response)
      })
    }
  },
  plugins: [createPersistedState()]
})
