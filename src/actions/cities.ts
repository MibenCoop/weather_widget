import { REQUEST_CITIES, RECEIVE_CITIES, FETCH_CITIES } from './types';

export function requestCityList() {
    return {
        type: REQUEST_CITIES,
    };
}

export function receiveCityList(cities: Array<object>) {
    return {
        type: RECEIVE_CITIES,
        cities,
    };
}

export function fetchCities() {
    return {
        type: FETCH_CITIES,
    };
}
