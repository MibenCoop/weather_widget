import React from 'react';

import CityItem from '../CityItem';
import { City } from '../../interfaces';

export interface Props {
    cities: Array<any>;
}

const CityList: any = ({ cities }: Props) =>
    cities.map((item: City) => {
        // console.log("item", item);
        return <CityItem key={item.lat + item.lng} city={item} />;
    });

export default CityList;
