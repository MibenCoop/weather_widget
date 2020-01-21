import React from 'react';

export interface Props {
    counter: number;
}
const Counter = ({ counter }: Props) => <p>{counter}</p>;
export default Counter;
