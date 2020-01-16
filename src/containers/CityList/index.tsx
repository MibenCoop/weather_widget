import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCities } from "../../actions/cities";
import { increment } from "../../actions/counter";
import CitiesSelector from "../../selectors/citySelector";

import Spinner from "../../components/Spinner";
import CityList from "../../components/CityList";
import { SignupForm } from "../SignupForm";
import Counter from "../../components/Counter";

import { City, CityListState, SelectedCities } from "../../interfaces";
import cities from "../../reducers/cities";

interface IProps {
  cities: Array<object>;
  biggestCities: Array<object>;
  counter: number;
}

interface IState {
  playOrPause?: string;
  selectedCities?: SelectedCities;
  hasSelectedCities: boolean;
}
export class CityListContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasSelectedCities: false };
  }
  componentDidMount() {
    const { fetchCities }: any = this.props;
    fetchCities();
  }

  getCitiesByCelector = (
    name: any,
    minTemperature: any,
    maxTemperature: any
  ) => {
    const { cities }: any = this.props;
    console.log(minTemperature);
    if (name.length > 0) {
      return cities.filter((city: any) => city.name === name);
    } else if (minTemperature > 0) {
      return cities.filter((city: any) => city.temperature >= minTemperature);
    } else if (maxTemperature > 0) {
      return cities.filter((city: any) => city.temperature <= maxTemperature);
    } else {
      return cities.filter(
        (city: any) =>
          city.temperature <= maxTemperature &&
          city.temperature >= minTemperature
      );
    }
  };
  selectCities({ city, minTemperature, maxTemperature }: SelectedCities) {
    // console.log("selectCities", city, minTemperature, maxTemperature);
    const selectedCities = this.getCitiesByCelector(
      city,
      minTemperature,
      maxTemperature
    );
    this.setState({ selectedCities, hasSelectedCities: true });
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
        {/* <button className="counter-button" onClick={() => increment()}>
          Increment
        </button> */}
        <SignupForm
          selectCities={(values: SelectedCities) => this.selectCities(values)}
        />
        {this.state.hasSelectedCities ? (
          <>
            <p>Selected cities</p>
            <CityList cities={this.state.selectedCities} />
          </>
        ) : null}
        <p>Top ten biggest City in Russia</p>
        <CityList cities={biggestCities} />
        <p>All</p>
        <CityList cities={cities} />
      </>
    );
  }
}

const mapStateToProps = ({ cities, counter }: CityListState) => {
  return {
    cities: cities.cities,
    isFetching: cities.isFetching,
    biggestCities: CitiesSelector(cities.cities),
    counter: counter
  };
};

export default connect(mapStateToProps, {
  fetchCities: fetchCities,
  increment: increment
})(CityListContainer);
