import React, { Component } from "react";
import * as actions from "../../actions";

import Spinner from "../Spinner";
// const City = (props: any) => {
//   props.dispatch(actions.fetchWeather(props.name));
//   if (!props.isFetching) {
//     return <Spinner />;
//   } else {
//     return (
//       <p>
//         City: {props.name} Temperature: {props.temperature}{" "}
//       </p>
//     );
//   }
// };

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
