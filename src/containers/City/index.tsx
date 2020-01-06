import React from "react";
// import { connect, Dispatch } from "react-redux";
import { connect } from "react-redux";

import City from "../../components/City";

import * as action from "../../actions";
import StoreState from "../../types";

const mapStateToProps = ({ cityName, temperature }: StoreState) => ({
  city: cityName,
  temperature
});
// const mapDispatchToProps = {
//   fetchWeather: () => action.fetchWeather()
// };

export default connect(mapStateToProps)(City);
