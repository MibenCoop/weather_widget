import { REQUEST_CITIES, RECEIVE_CITIES } from "../../actions/types";
import cities from "./index";
import cityList from "../../mocks/cityList.json";

describe("Cities reducer", () => {
  it("should return default value", () => {
    const newState = cities(undefined, {});
  });
  it("should return new state with property isFetching equals true", () => {
    const newState = cities(undefined, {
      type: REQUEST_CITIES
    });
    expect(newState).toEqual({ isFetching: true });
  });
  it("should return new state with property isFetching equals true", () => {
    const newState = cities(undefined, {
      type: REQUEST_CITIES
    });
    expect(newState).toEqual({ isFetching: true });
  });
  it("should return new state with cities", () => {
    const newState = cities(undefined, {
      type: RECEIVE_CITIES,
      cities: cityList
    });
    expect(newState).toEqual({ isFetching: false, cities: cityList });
  });
});
