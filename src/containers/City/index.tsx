import { connect } from 'react-redux';
import React, { Component } from 'react';

import CityComponent from '../../components/City';

import { CityWeather } from '../../interfaces';
import Spinner from '../../components/Spinner';
import { fetchWeather } from '../../actions/cityWeather';

type cityProps = {
    name: string;
};

export class CityWeatherList extends Component<cityProps> {
    componentDidMount() {
        const { name, fetchWeather }: any = this.props;
        fetchWeather(name);
    }
    componentDidUpdate(prevProps: any) {
        const { name, fetchWeather }: any = this.props;
        if (prevProps.name !== name) fetchWeather(name);
    }
    render() {
        const { name, isFetching, temperature }: any = this.props;
        if (isFetching) return <Spinner />;
        return <CityComponent name={name} temperature={temperature} />;
    }
}

type CityWeatherState = {
    citiesWeather: CityWeather;
};

const mapStateToProps = ({ citiesWeather }: CityWeatherState) => ({
    temperature: citiesWeather.temperature,
    isFetching: citiesWeather.isFetching,
});

export default connect(mapStateToProps, {
    fetchWeather: (name: string) => fetchWeather(name),
})(CityWeatherList);
