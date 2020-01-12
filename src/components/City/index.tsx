import React from "react";

export type Props = {
  name: string;
  temperature: number;
};

const City = ({ name, temperature }: Props) => (
  <p>
    City name: {name}, Temperature: {temperature + 1}
  </p>
);
export default City;
