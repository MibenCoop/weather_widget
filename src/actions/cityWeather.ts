import { REQUEST_WEATHER, RECEIVE_WEATHER, FETCH_WEATHER } from './types';

export function requestWeather(city: string) {
    return {
        type: REQUEST_WEATHER,
        city,
    };
}

export function receiveWeather(city: string, weather: object) {
    return {
        type: RECEIVE_WEATHER,
        city,
        weather,
    };
}

export function fetchWeather(city: string) {
    return {
        type: FETCH_WEATHER,
        city,
    };
}
