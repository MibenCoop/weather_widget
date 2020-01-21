import React from 'react';
import { shallow } from 'enzyme';

import CityItem from './index';

describe('City item component', () => {
    const cityMock = {
        city: 'Moscow',
        admin: 'Moskva',
        country: 'Russia',
        population_proper: '10452000',
        iso2: 'RU',
        capital: 'primary',
        lat: '55.752222',
        lng: '37.615556',
        population: '10452000',
    };
    it('Renders a City Item ', () => {
        const city = shallow(<CityItem city={cityMock} />);
        expect(city).toMatchSnapshot();
    });
    it('Renders a correct city name ', () => {
        const city = shallow(<CityItem city={cityMock} />);
        expect(city.find('li').text()).toEqual('Moscow');
    });
});
