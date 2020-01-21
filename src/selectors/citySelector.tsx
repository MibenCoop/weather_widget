import { createSelector } from 'reselect';

const tenBiggestCitiesSelector = (state: any) => {
    return state === undefined ? state : state.filter((item: object, index: number) => index < 10);
};

const citiesSelector = createSelector(tenBiggestCitiesSelector, (cities: Array<object>) => {
    return cities;
});

export default citiesSelector;
