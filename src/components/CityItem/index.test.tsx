import React from 'react';
import { shallow } from 'enzyme';

import CityItem from './index';

describe('City item component', () => {
    const cityMock = {
        name: 'Moscow',
        temperature: '2',
        lat: '55.752222',
        lng: '37.615556',
    };
    it('Renders a City Item ', () => {
        const city = shallow(<CityItem city={cityMock} />);
        expect(city).toMatchSnapshot();
    });
    it('Renders a correct city name ', () => {
        const city = shallow(<CityItem city={cityMock} />);
        expect(city.find('li').text()).toEqual(`${cityMock.name}, temperature: ${cityMock.temperature}`);
    });
});
