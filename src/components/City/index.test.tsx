import React from 'react';
import { shallow, mount } from 'enzyme';

import City from './index';

describe('City weather component', () => {
    const props = {
        temperature: 10,
        name: 'Moscow',
    };
    it('should match snapshot', () => {
        const city = shallow(<City {...props} />);
        expect(city).toMatchSnapshot();
    });
    it('should be called with props name: city and value: Moscow', () => {
        const city = mount(<City {...props} />);
        expect(city.prop('name')).toEqual(props.name);
    });
    it('should be called with props name: temperature and value: 10', () => {
        const city = mount(<City {...props} />);
        expect(city.prop('temperature')).toEqual(props.temperature);
    });
});
