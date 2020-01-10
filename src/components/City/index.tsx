import React, { Component } from "react";
import * as actions from "../../actions";

import Spinner from "../Spinner";
class City extends Component {
  componentDidMount() {
    const { name, dispatch }: any = this.props;
    dispatch(actions.fetchWeather(name));
  }
  render() {
    const { name, isFetching, temperature }: any = this.props;
    if (isFetching) {
      return <Spinner />;
    } else {
      return (
        <p>
          City: {name} Temperature: {temperature}{" "}
        </p>
      );
    }
  }
}
export default City;
