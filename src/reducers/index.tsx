import { combineReducers } from "redux";

import cityList from "../mocks/cityList.json";
// import citiesSelector from "../selectors/cityCelector";

export const rootReducer = (state = [], action: any) => {
  switch (action.type) {
    case "REQUEST_WEATHER":
      return { ...state, isFetching: true };
    case "RECEIVE_WEATHER":
      return {
        ...state,
        isFetching: false,
        temperature: action.weather.current.temperature
      };
    case "REQUEST_CITIES":
      return { ...state, isFetching: true };
    case "RECEIVE_CITIES":
      return {
        ...state,
        isFetching: false,
        cities: action.cities
      };
    case "DELETE_LAST_CITY":
      return {
        ...state,
        cities: cityList.slice(0, -1)
      };
    default:
      return state;
  }
};

export const counterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
export default combineReducers({ rootReducer, counterReducer });
