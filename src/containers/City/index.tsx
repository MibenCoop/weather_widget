import { connect } from "react-redux";
import React, { Component } from "react";

// import City from "../../components/City";

import StoreState from "../../types";
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
    return (
      <p>
        Sity: {name} Temperature: {temperature}{" "}
      </p>
    );
  }
}

const mapStateToProps = ({ temperature, isFetching }: StoreState) => ({
  temperature,
  isFetching
});

export default connect(mapStateToProps, { fetchWeather: actions.fetchWeather })(
  City
);
