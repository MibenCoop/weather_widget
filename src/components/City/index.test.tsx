import React from "react";
import { shallow, mount } from "enzyme";

import City from "./index";

describe("City weather component", () => {
  const cityWeather = {
    temperature: 10,
    name: "Moscow"
  };
  it("should match snapshot", () => {
    const city = shallow(
      <City name={cityWeather.name} temperature={cityWeather.temperature} />
    );
    expect(city).toMatchSnapshot();
  });
  it("should be called with props name: city and value: Moscow", () => {
    const city = mount(
      <City name={cityWeather.name} temperature={cityWeather.temperature} />
    );
    expect(city.prop("name")).toEqual(cityWeather.name);
  });
  it("should be called with props name: temperature and value: 10", () => {
    const city = mount(
      <City name={cityWeather.name} temperature={cityWeather.temperature} />
    );
    console.log("(city.length", city.length);
    expect(city.prop("temperature")).toEqual(cityWeather.temperature);
  });
});
