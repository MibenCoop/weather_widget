import { call, delay, put, takeEvery, fork } from "redux-saga/effects";

import * as citiesAction from "../actions/cities";
import * as cityWeather from "../actions/cityWeather";
import { api } from "../services";
import cityList from "../mocks/cityList.json";

export function mockFetchWeatherApi(city: string) {
  let weather = {
    current: { temperature: Math.floor(Math.random() * Math.floor(10)) }
  };
  return new Promise(resolve => resolve(weather));
}
export function* fetchWeather(action: any) {
  console.log("fetchWeather");
  yield put(cityWeather.requestWeather(action.city));
  yield delay(1000);
  // const weather = yield call(fetchWeatherApi, action.city);
  // console.log("weather", weather);
  let weather = api.getDummyWeather();
  // const weather = yield call(mockFetchWeatherApi, action.city);
  yield put(cityWeather.receiveWeather(action.city, weather));
}
export function* fetchCities() {
  yield put(citiesAction.requestCityList());
  yield delay(1000);
  yield put(citiesAction.receiveCityList(cityList));
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
