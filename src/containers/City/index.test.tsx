import React from 'react';

import { shallow, mount } from 'enzyme';

import { CityWeatherList } from './index';
import Spinner from '../../components/Spinner';
import CityList from '../../components/CityList';
import CityItem from '../../components/CityItem';
import { Provider } from 'react-redux';

const props = {
    name: 'Moscow',
    temparature: 10,
    isFetching: false,
    fetchWeather: jest.fn(),
};

const cityItemProps = {
    name: 'Moscow',
    temparature: 10,
};

describe('City Weather List container', () => {
    const cityList = shallow(<CityWeatherList {...props} />);

    it('should match snapshot', () => {
        expect(cityList).toMatchSnapshot();
    });
    it('should render prop name correctly', () => {
        expect(cityList.prop('name')).toEqual(props.name);
    });
    it('should fetch weather on page loading', () => {
        expect(props.fetchWeather).toBeCalledTimes(1);
    });
    it('should be called data fetching if component will be updated', () => {
        //force a rerender
        cityList.setProps({ name: 'Rostov' });
        expect(cityList.prop('name')).toEqual('Rostov');
        expect(props.fetchWeather).toBeCalledTimes(2);
    });
    it("should not render spinner if doesn't fetching", () => {
        cityList.setProps({ isFetching: false });
        expect(cityList.find(Spinner).length).toEqual(0);
    });
    it('should not render city item if fetching', () => {
        cityList.setProps({ isFetching: true });
        expect(cityList.find(CityItem).length).toEqual(0);
    });
    it('should render spinner if fetching data', () => {
        cityList.setProps({ isFetching: true });
        expect(cityList.find(Spinner).length).toEqual(1);
    });
});
