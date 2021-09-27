<template>
  <div class="home background" :class="classType">
    <div class="left">
      <h3>The Weather App</h3>
      <weather-info />
    </div>
    
    <right-menu/>

  </div>
</template>

<script>
import RightMenu from '../components/RightMenu.vue'
import WeatherInfo from '../components/WeatherInfo.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    RightMenu,
    WeatherInfo
  },
  computed: {
    ...mapGetters(['weatherText']),
    classType() {
      return {
        mist: this.weatherText == 'Mist',
        sunny: this.weatherText == 'Sunny' 
          || this.weatherText == 'Clear'
          || this.weatherText == 'Overcast',
        rain: this.weatherText == 'Moderate or heavy rain shower' 
          || this.weatherText == 'Patchy rain possible' 
          ||this.weatherText == 'Light rain shower' 
          || this.weatherText == 'Light rain' ,
        cloud: this.weatherText == 'Partly cloudy'
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;

  &.background {
    height: 100%;
    background-color: rgba(50, 70, 61, 0.7) ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .left {
    width: 70%;
    padding: 50px 60px 0;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
    }
  }

  .right {
    width: 30%;
    padding: 50px 60px 0;
    min-height: 100%;

    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0, .7);
  }
}

.rain {
  background: url('~@/assets/images/rain1.png');
}

.sunny {
  background: url('~@/assets/images/sunny.png');
}

.mist {
  background: url('~@/assets/images/mist.jpg');
}

.cloud {
  background: url('~@/assets/images/cloud.png');
}

</style>
