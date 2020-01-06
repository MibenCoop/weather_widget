export function getCityWeather() {
  return {
    type: "GET_CITY_WEATHER",
    data: {
      cityName: "Saint-Peterburg",
      temperature: 1
    }
  };
}

export function requestWeather(city: any) {
  return {
    type: "REQUEST_WEATHER",
    city
  };
}

export function receiveWeather(city: any, weather: any) {
  return {
    type: "RECEIVE_WEATHER",
    city,
    weather
  };
}

export function fetchWeather(city: any) {
  return {
    type: "FETCH_WEATHER",
    city
  };
}
