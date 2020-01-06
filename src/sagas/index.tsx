import { call, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions";

export function* helloSaga() {
  console.log("hello world");
}

export function fetchWeatherApi(city: string) {
  return axios
    .get(
      `http://api.weatherstack.com/current?access_key=d497a04501aa7afd413dd0b183565adf&query=${city}`
    )
    .then(res => res.data);
}
export function* fetchWeather(action: any) {
  yield put(actions.requestWeather(action.city));
  const weather = yield call(fetchWeatherApi, action.city);
  yield put(actions.receiveWeather(action.city, weather));
}

export function* watchFetchWeather() {
  yield takeEvery("FETCH_WEATHER", fetchWeather);
}
export default function* rootSaga() {
  yield fork(helloSaga);
  yield fork(watchFetchWeather);
}
