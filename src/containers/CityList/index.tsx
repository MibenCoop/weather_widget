import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCities } from '../../actions/cities';
import { increment } from '../../actions/counter';
import CitiesSelector from '../../selectors/citySelector';

import Spinner from '../../components/Spinner';
import CityList from '../../components/CityList';
import { SignupForm } from '../../components/SignupForm';
import Counter from '../../components/Counter';

import { City, CityListState, SelectedCities } from '../../interfaces';

interface Props {
    cities: Array<object>;
    biggestCities: Array<object>;
    counter: number;
    isFetching: boolean;
    fetchCities: Function;
}

interface State {
    playOrPause?: string;
    selectedCities?: SelectedCities;
    hasSelectedCities: boolean;
}

export function CityListContainer(props: Props) {
    const { fetchCities, biggestCities, cities, isFetching } = props;
    const [hasSelectedCities, setHasSelectedCities] = useState(false);
    const [selectedCities, setSelectedCities] = useState([]);
    useEffect(() => {
        const fetchCityList = () => {
            fetchCities();
        };
        return fetchCityList();
    }, []);

    const selectCities = ({ city, minTemperature, maxTemperature }: SelectedCities) => {
        const selectedCitiesBySelector = getCitiesByCelector(city, minTemperature, maxTemperature);
        setHasSelectedCities(true);
        setSelectedCities(selectedCitiesBySelector);
    };

    const getCitiesByCelector = (name: any, minTemperature: any, maxTemperature: any) => {
        const { cities }: any = props;
        if (name.length > 0) {
            return cities.filter((city: any) => city.name === name);
        } else if (minTemperature && maxTemperature) {
            return cities.filter(
                (city: any) => city.temperature <= maxTemperature && city.temperature >= minTemperature,
            );
        } else if (minTemperature) {
            return cities.filter((city: any) => city.temperature >= minTemperature);
        } else if (maxTemperature) {
            return cities.filter((city: any) => city.temperature <= maxTemperature);
        }
    };

    if (isFetching || !cities) return <Spinner />;
    return (
        <>
            <SignupForm selectCities={(values: SelectedCities) => selectCities(values)} />
            {hasSelectedCities ? (
                <>
                    <p>Selected cities</p>
                    <CityList cities={selectedCities} />
                </>
            ) : null}
            <p>Top ten biggest City in Russia</p>
            <CityList cities={biggestCities} />
            <p>All</p>
            <CityList cities={cities} />
        </>
    );
}

const mapStateToProps = ({ cities, counter }: CityListState) => {
    return {
        cities: cities.cities,
        isFetching: cities.isFetching,
        biggestCities: CitiesSelector(cities.cities),
        counter: counter,
    };
};

export default connect(mapStateToProps, {
    fetchCities: fetchCities,
    increment: increment,
})(CityListContainer);
