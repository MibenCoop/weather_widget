import { connect } from "react-redux";
import React, { Component } from "react";

import CityComponent from "../../components/City";

import { CityWeather } from "../../interfaces";
import Spinner from "../../components/Spinner";
import * as actions from "../../actions";

type cityProps = {
  name: String;
};

class City extends Component<cityProps> {
  componentDidMount() {
    const { name, fetchWeather }: any = this.props;
    fetchWeather(name);
  }
  componentDidUpdate(prevProps: any) {
    const { name, fetchWeather }: any = this.props;
    if (prevProps.name !== name) fetchWeather(name);
  }
  render() {
    const { name, isFetching, temperature }: any = this.props;
    if (isFetching) return <Spinner />;
    return <CityComponent name={name} temperature={temperature} />;
  }
}

type CityWeatherState = {
  rootReducer: CityWeather;
};

const mapStateToProps = ({ rootReducer }: CityWeatherState) => ({
  temperature: rootReducer.temperature,
  isFetching: rootReducer.isFetching
});

export default connect(mapStateToProps, {
  fetchWeather: (name: string) => actions.fetchWeather(name)
})(City);
