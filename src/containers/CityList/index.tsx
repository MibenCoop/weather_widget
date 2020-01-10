import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import CitiesSelector from "../../selectors/cityCelector";

import Spinner from "../../components/Spinner";
import CityList from "../../components/CityList";
import Counter from "../../components/Counter";

import { City, CityListState } from "../../interfaces";
export class CityListContainer extends Component {
  componentDidMount() {
    const { fetchCities }: any = this.props;
    fetchCities();
  }
  render() {
    const {
      cities,
      isFetching,
      increment,
      biggestCities,
      deleteLastCity,
      counter
    }: any = this.props;
    if (isFetching || !cities) {
      return <Spinner />;
    } else {
      return (
        <>
          <br></br>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => deleteLastCity()}>deleteLastCity</button>
          <Counter counter={counter} />
          <p>Top ten biggest City in Russia</p>
          <CityList cities={biggestCities} />
          <p>All</p>
          <CityList cities={cities} />
        </>
      );
    }
  }
}

const mapStateToProps = ({ rootReducer, counterReducer }: CityListState) => {
  return {
    cities: rootReducer.cities,
    isFetching: rootReducer.isFetching,
    biggestCities: CitiesSelector(rootReducer.cities),
    counter: counterReducer
  };
};

export default connect(mapStateToProps, {
  fetchCities: actions.fetchCities,
  deleteLastCity: actions.deleteLastCity,
  increment: actions.increment
})(CityListContainer);
