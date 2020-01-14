import { combineReducers } from "redux";
import cities from "./cities";
import citiesWeather from "./citiesWeather";
import counter from "./counter";

export default combineReducers({ cities, citiesWeather, counter });
