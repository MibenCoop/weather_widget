import React from 'react';
import { shallow, mount } from 'enzyme';

import CityList from './index';
import CityItem from '../CityItem';

import cities from '../../mocks/cityList.json';

describe('City item component', () => {
    it('should be render an empty list', () => {
        const cityList = shallow(<CityList cities={[]} />);
        expect(cityList).toMatchSnapshot();
    });
    it('should be render a cities', () => {
        const cityList = shallow(<CityList cities={cities} />);
        expect(cityList).toMatchSnapshot();
    });
    it('should be render all city', () => {
        const cityList = shallow(<CityList cities={cities} />);
        expect(cityList.find(CityItem)).toHaveLength(22);
    });
});
