import React from "react";
import { shallow, mount } from "enzyme";

import { CityListContainer } from "./index";
import Spinner from "../../components/Spinner";

import cities from "../../mocks/cityList.json";
import { biggestCitiesSelector } from "../../selectors/citySelector";

describe("CityList container", () => {
  const props = {
    cities,
    biggestCities: biggestCitiesSelector(cities),
    isFetching: false,
    counter: 0,
    increment: jest.fn(),
    fetchCities: jest.fn()
  };
  const cityList = shallow(<CityListContainer {...props} />);
  it("should match snapshot", () => {
    expect(cityList).toMatchSnapshot();
  });
  it("should cities be fetched", () => {
    expect(props.fetchCities).toBeCalledTimes(1);
  });
  it("should not render spinner if doesn't fetching", () => {
    cityList.setProps({ isFetching: false });
    expect(cityList.find(Spinner).length).toEqual(0);
  });
  it("should render spinner if fetching data", () => {
    cityList.setProps({ isFetching: true });
    expect(cityList.find(Spinner).length).toEqual(1);
  });
  //   it("should get as props , biggestCities with value 10", () => {
  //     cityList.setProps(props)
  //     expect(cityList.prop("biggestCities").length).toEqual(10);
  //   });
  //   it("should get a counter props with value 0", () => {
  //     expect(cityList.prop("counter")).toEqual(props.counter);
  //   });
  //   it("should  increment function be called 1 time", () => {
  //     cityList.find("button").simulate("click");
  //     console.log("counter 0 ", cityList.prop("counter"));
  //     expect(cityList.prop("counter")).toEqual(props.counter + 1);
  //   });
});
