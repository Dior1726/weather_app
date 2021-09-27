<template>
    <div class="right" v-if="this.weatherData">
        <div class="right__search">
            <input type="text" v-model="location" placeholder="City name">
            <button type="submit" @click.prevent="getData()" ><i class="uil uil-search"></i></button>
        </div>

        <h3>Weather Detail</h3>
        <div class="right__info">
            <div class="right__info-item"> Country: <span>{{weatherData.location.country}}</span></div>
            <div class="right__info-item">Region: <span>{{weatherData.location.region}}</span> </div>
            <div class="right__info-item">Condition: <span>{{weatherData.current.condition.text}}</span> </div>
            <div class="right__info-item">Last updated: <span>{{weatherData.current.last_updated}}</span> </div>
        </div>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            location: 'London',
            key: process.env.VUE_APP_API_KEY
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        ...mapActions(['GET_WEATHER_DATA']),
        getData() {
            const params = {
                location: this.location,
                key: this.key
            }

            if (this.location) {
                this.GET_WEATHER_DATA(params)
            } else {
                this.GET_WEATHER_DATA({key: this.key, location: 'London'})
            }
        }
    },
    computed: {
        ...mapGetters(['weatherData'])
    }
}

</script>

<style lang="scss">
.right__search{
    display: flex;
    justify-content: space-between;

    input {
        width: 100%;
        padding: 15px 0;
        border: none ;
        border-bottom: 1px solid rgba(238, 238, 238, 0.2);
        background: none;
        font-size: 18px;
        color: #fff;
        transition: all .3s ease;
        text-transform: capitalize;

        &:active,
        &:focus-visible {
            outline: none;
        }
    }

    button {
        padding: 20px 25px;
        color: #fff;
        background: rgba(33, 46, 46, 0.7);
        border: none;
        font-size: 18px;
        transition: all .3s ease;
        margin-left: 15px;

        &:hover {
            background: rgba(33, 46, 46, 0.9)
        }
    }
}

.right h3 {
    margin-top: 50px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, .8);
}

.right__info {
    width: 100%;

    &-item {
        font-size: 16px;
        padding: 20px 0;
        color: rgba(238, 238, 238, 0.6);
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(238, 238, 238, 0.2);

        span {
            color: #fff;
            margin-left: 10px;
        }
    }
}
</style>