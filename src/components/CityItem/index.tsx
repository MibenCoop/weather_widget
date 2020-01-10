import React from "react";

import { City } from "../../interfaces";

export interface CityProps {
  city: City;
}

const CityItem: any = ({ city }: CityProps) => {
  // console.log("city", city);
  return <li style={{ textAlign: "left" }}>{city.city}</li>;
};

export default CityItem;
