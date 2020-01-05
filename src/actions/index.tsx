export function getCityWeather() {
  return {
    type: "GET_CITY_WEATHER",
    data: {
      cityName: "Saint-Peterburg",
      temperature: 1
    }
  };
}
