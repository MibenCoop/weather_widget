import { call, delay, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions";
import cityList from "../mocks/cityList.json";

export const getDummyWeather = () => 10;

export function fetchWeatherApi(city: string) {
  return axios
    .get(
      `http://api.weatherstack.com/current?access_key=d497a04501aa7afd413dd0b183565adf&query=${city}`
    )
    .then(res => res.data);
}

export function mockFetchWeatherApi(city: string) {
  let weather = {
    current: { temperature: Math.floor(Math.random() * Math.floor(10)) }
  };
  return new Promise(resolve => resolve(weather));
}
export function* fetchWeather(action: any) {
  console.log("fetchWeather");
  yield put(actions.requestWeather(action.city));
  yield delay(1000);
  // const weather = yield call(fetchWeatherApi, action.city);
  // console.log("weather", weather);
  let weather = {
    current: { temperature: getDummyWeather() }
  };
  // const weather = yield call(mockFetchWeatherApi, action.city);
  yield put(actions.receiveWeather(action.city, weather));
}
export function* fetchCities() {
  yield put(actions.requestCityList());
  yield delay(1000);
  yield put(actions.receiveCityList(cityList));
}

export function* watchFetchWeather() {
  yield takeEvery("FETCH_WEATHER", fetchWeather);
}

export function* watchFetchCities() {
  yield takeEvery("FETCH_CITIES", fetchCities);
}

export default function* rootSaga() {
  yield fork(watchFetchWeather);
  yield fork(watchFetchCities);
}
