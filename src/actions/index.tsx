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

export function requestCityList() {
  return {
    type: "REQUEST_CITIES"
  };
}

export function receiveCityList(cities: Array<object>) {
  return {
    type: "RECEIVE_CITIES",
    cities
  };
}

export function fetchCities() {
  return {
    type: "FETCH_CITIES"
  };
}
