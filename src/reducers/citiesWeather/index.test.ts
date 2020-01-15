import CityWeather from "./index";
import { REQUEST_WEATHER, RECEIVE_WEATHER } from "../../actions/types";
import { api } from "./../../services/index";

describe("City weather Reducer", () => {
  it("should return default value", () => {
    const newState = CityWeather(undefined, {});
    expect(newState).toEqual([]);
  });
  it("should return new state with property isFetching equals true", () => {
    const newState = CityWeather(undefined, {
      type: REQUEST_WEATHER
    });
    expect(newState).toEqual({ isFetching: true });
  });
  it("should return new state with city weather", () => {
    const weather = api.getDummyWeather();
    const newState = CityWeather(undefined, {
      type: RECEIVE_WEATHER,
      weather
    });
    expect(newState).toEqual({
      isFetching: false,
      temperature: weather.current.temperature
    });
  });
});
