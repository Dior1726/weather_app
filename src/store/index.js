import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: null
  },
  mutations: {
    SET_WEATHER_DATA(state, payload) {
      state.weatherData = payload
    }
  },
  actions: {
    GET_WEATHER_DATA({commit}, params) {
      axios
        .get(`http://api.weatherapi.com/v1/current.json?key=${params.key}&q=${params.location}&aqi=no`)
        .then((res) => {
            commit('SET_WEATHER_DATA', res.data)
          })
        .catch(e => console.log(e))
    }
  },
  getters: {
    weatherData(state) {
      return state.weatherData
    },
    weatherText(state) {
      if(state.weatherData) {
        return state.weatherData.current.condition.text
      }
    }
  },
  modules: {
  }
})
