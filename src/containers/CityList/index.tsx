import React, { Component } from "react";
import { connect } from "react-redux";
import cityList from "../../mocks/cityList.json";
import * as actions from "../../actions";
import Spinner from "../../components/Spinner";

export class CityList extends Component {
  componentDidMount() {
    const { fetchCities }: any = this.props;
    fetchCities();
  }
  render() {
    const { cities, isFetching }: any = this.props;
    if (isFetching || !cities) {
      return <Spinner />;
    } else {
      const cityItems = cities.map(
        (item: { lat: any; lng: any; city: React.ReactNode }) => (
          <li style={{ textAlign: "left" }} key={item.lat + item.lng}>
            {item.city}
          </li>
        )
      );
      return <ul>{cityItems}</ul>;
    }
  }
}

export interface CitiesStoreState {
  cities: Array<object>;
  isFetching: boolean;
}

const mapStateToProps = ({ cities, isFetching }: CitiesStoreState) => ({
  cities,
  isFetching
});
export default connect(mapStateToProps, { fetchCities: actions.fetchCities })(
  CityList
);
