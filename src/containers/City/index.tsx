import React from "react";
// import { connect, Dispatch } from "react-redux";
import { connect } from "react-redux";

import City from "../../components/City";

import * as action from "../../actions";
import StoreState from "../../types";

const mapStateToProps = ({ cityName, temperature }: StoreState) => ({
  cityName,
  temperature
});
const mapDispatchToProps = {
  getCityWeather: () => action.getCityWeather()
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
