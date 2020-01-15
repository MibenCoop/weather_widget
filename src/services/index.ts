import axios from "axios";

export const api = {
  fetchWeatherApi(city: string) {
    return axios
      .get(
        `http://api.weatherstack.com/current?access_key=d497a04501aa7afd413dd0b183565adf&query=${city}`
      )
      .then(res => res.data);
  },
  getDummyWeather() {
    return { current: { temperature: 10 } };
  }
};
