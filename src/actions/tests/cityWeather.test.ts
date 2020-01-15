import * as action from "../cityWeather";
import * as types from "../types";
import { api } from "../../services";

describe("city weather action", () => {
  const city = "Moscow";
  const weather = api.getDummyWeather();
  it("should create an action to notify about city list request", () => {
    const expectedAction = { type: types.REQUEST_WEATHER, city };
    expect(action.requestWeather(city)).toEqual(expectedAction);
  });
  it("should create an action to get cities", () => {
    const expectedAction = { type: types.RECEIVE_WEATHER, city, weather };
    expect(action.receiveWeather(city, weather)).toEqual(expectedAction);
  });

  it("should create an action to call saga effect", () => {
    const expectedAction = { type: types.FETCH_WEATHER, city };
    expect(action.fetchWeather(city)).toEqual(expectedAction);
  });
});
