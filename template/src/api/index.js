import Http from "@/utils/http";
const url = "http://wthrcdn.etouch.cn/weather_mini";
export default {
  // 获取天气
  getWeather: params => {
    return Http.get(url, params);
  }
};
