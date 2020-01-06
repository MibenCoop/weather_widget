import React from "react";
import * as actions from "../../actions";
const City = (props: any) => {
  console.log("CityComponent");
  props.dispatch(actions.fetchWeather(props.name));
  return (
    <p>
      City: {props.name} Temperature: {props.temperature}
    </p>
  );
};
export default City;
