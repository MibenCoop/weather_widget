import { call, delay, put, takeEvery, fork } from "redux-saga/effects";

import { fetchWeather, fetchCities, getDummyWeather } from "./index";
import cityList from "../mocks/cityList.json";
import configureStore from "../store";
import * as actions from "../actions";

describe("Sagas", () => {
  describe("fetchCities Saga", () => {
    const gen = fetchCities();
    it("should dispatch requestCityList action", () => {
      expect(gen.next().value).toEqual(put(actions.requestCityList()));
    });
    it("should wait 1000 ms", () => {
      expect(gen.next().value).toEqual(delay(1000));
    });
    it("must dispatch a receiveCities action with city list", () => {
      expect(gen.next().value).toEqual(put(actions.receiveCityList(cityList)));
    });
  });
  // describe("fetchWeatherApi", () => {
  //   it("should call api and dispatch success action", async () => {
  //     let dummyWeather = {
  //       current: { temperature: Math.floor(Math.random() * Math.floor(10)) }
  //     };
  //     const dummyAction = {
  //       city: "Moscow"
  //     };
  //     const dispatched: any = [];
  //     // const store = configureStore();
  //     const mockFetchWeatherApi = jest
  //       .spyOn(sagas, "mockFetchWeatherApi")
  //       .mockImplementation(() => Promise.resolve(dummyWeather));
  //     const result = await runSaga(
  //       {
  //         dispatch: (action: any) => dispatched.push(action)
  //       },
  //       fetchWeather,
  //       dummyAction
  //     );
  //     expect(mockFetchWeatherApi).toHaveBeenCalledTimes(1);
  //     console.log("dispatched", dispatched);
  //     mockFetchWeatherApi.mockClear();
  //   });
  // });
  describe("fetchWeather Saga", () => {
    const actionMock = {
      city: "Moscow"
    };
    const weather = {
      current: { temperature: getDummyWeather() }
    };
    const gen = fetchWeather(actionMock);
    it("should dispatch requestWeather action", () => {
      expect(gen.next().value).toEqual(
        put(actions.requestWeather(actionMock.city))
      );
    });
    it("should wait 1000 ms", () => {
      expect(gen.next().value).toEqual(delay(1000));
    });
    it("should dispatch a receiveWeather action with weather list", () => {
      expect(gen.next().value).toEqual(
        put(actions.receiveWeather(actionMock.city, weather))
      );
    });

    // it("must dispatch a receiveWeather action with city list", () => {
    //     expect(gen.next().value).toEqual(put(actions.receiveCityList(cityList)));
    // });
    // console.log("gen", gen.next().value);
    // it("must dispatch a receiveCities action with city list", () => {
    //   expect(gen.next().value).toEqual(put(actions.receiveCityList(cityList)));
    // });
  });
  //   describe("fetchWeatherAp", () => {
  //     const actionMock = {
  //       city: "Moscow"
  //     };
  //     const weather = {
  //       current: { temperature: Math.floor(Math.random() * Math.floor(10)) }
  //     };
  //     const gen = fetchWeather(actionMock);

  //   });
});
