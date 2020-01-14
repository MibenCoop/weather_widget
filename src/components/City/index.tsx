import React from "react";

export type Props = {
  name: string;
  temperature: number;
};

const City = ({ name, temperature }: Props) => (
  <p>
    City name: {name}, Temperature: {temperature}
  </p>
);
export default City;
