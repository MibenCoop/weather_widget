import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import CitiesSelector from "../../selectors/cityCelector";

import Spinner from "../../components/Spinner";
import CityList from "../../components/CityList";
import Counter from "../../components/Counter";

import { City, CityListState } from "../../interfaces";

type Props = {
  cities: Array<object>;
  biggestCities: Array<object>;
  counter: number;
};
export class CityListContainer extends Component<{}, Props> {
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
      counter
    }: any = this.props;
    if (isFetching || !cities) return <Spinner />;
    return (
      <>
        <button className="counter-button" onClick={() => increment()}>
          Increment
        </button>
        <Counter counter={counter} />
        <p>Top ten biggest City in Russia</p>
        <CityList cities={biggestCities} />
        <p>All</p>
        <CityList cities={cities} />
      </>
    );
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
  increment: actions.increment
})(CityListContainer);
