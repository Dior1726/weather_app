<template>
    <div class="weather__info" v-if="this.weatherData">
        <div class="weather__info-location">
          {{weatherData.location.name}}
        </div>

        <div class="weather__info-title">
          {{weatherData.current.temp_c.toFixed()}}°C <i class="uil" :class="classIcon"></i>
        </div>

        <div class="weather__info-time">
          {{weatherData.location.localtime}}
        </div>
      </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['weatherData', 'weatherText']),
        classIcon() {
            return {
                'uil-cloud-rain': this.weatherText == 'Mist',
                'uil-sun': this.weatherText == 'Sunny' 
                    || this.weatherText == 'Clear'
                    || this.weatherText == 'Overcast',
                'uil-cloud-showers-heavy': this.weatherText == 'Moderate or heavy rain shower' 
                    || this.weatherText == 'Patchy rain possible' 
                    || this.weatherText == 'Light rain shower' 
                    || this.weatherText == 'Light rain' ,
                'uil-clouds': this.weatherText == 'Partly cloudy' 
                    || this.weatherText == 'Cloudy'
            }
        }
    }
}

</script>

<style lang="scss">
.weather__info {
  margin: auto;
  max-width: 400px;
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(2px);
  border-radius: 40px;
  padding: 50px;
  text-align: center;

  &-title {
    margin-bottom: 10px;
    font-size: 100px;

    i {
      font-size: 30px;
    }
  }

  &-location {
    margin-bottom: 10px;
    font-size: 50px;
  }

  &-time {
    font-size: 16px;
    opacity: .8;
  }
}
</style>