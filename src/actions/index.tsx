import * as constants from "../constants";

export function requestWeather(city: any) {
  return {
    type: constants.REQUEST_WEATHER,
    city
  };
}

export function receiveWeather(city: any, weather: object) {
  return {
    type: constants.RECEIVE_WEATHER,
    city,
    weather
  };
}

export function fetchWeather(city: any) {
  return {
    type: constants.FETCH_WEATHER,
    city
  };
}

export function requestCityList() {
  return {
    type: constants.REQUEST_CITIES
  };
}

export function receiveCityList(cities: Array<object>) {
  console.log("receiveCityList", cities);
  return {
    type: constants.RECEIVE_CITIES,
    cities
  };
}

export function fetchCities() {
  return {
    type: constants.FETCH_CITIES
  };
}

export function increment() {
  return {
    type: constants.INCREMENT
  };
}
