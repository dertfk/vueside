<template>
  <div class="about">
    <template v-if="Object.keys(weather).length === 0">
      <div
        id="getWeather"
        style="cursor: pointer; text-decoration: underline; margin-bottom: 20px"
        @click="getWeather"
      >
        click to get weather
      </div>
      <h2 id="noneInfo">nothing of weather</h2>
    </template>
    <template v-else>
      <div
        id="clearWeather"
        style="cursor: pointer; text-decoration: underline"
        @click="weather = {}"
      >
        click to clear weather
      </div>
      <div id="weatherInfo">
        <div
          v-for="(value, key, index) in weather"
          :key="key"
          style="text-align: left; margin-top: 30px"
        >
          {{ index }}. {{ key }} - {{ value }}
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import API from "@/api";
export default {
  name: "About",
  data() {
    return {
      weather: {}
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      API.getWeather({
        citykey: "101270401"
      })
        .then(res => {
          if (res.data.data) {
            this.weather = res.data.data;
          } else {
            this.weather = res.data;
          }
          // console.log("weather=========", this.weather);
        })
        .catch(err => {
          this.weather = err;
          // console.log("err=========", err);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
