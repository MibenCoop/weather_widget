import * as action from '../cities';
import * as types from '../types';

import cities from '../../mocks/cityList.json';

describe('cities action', () => {
    it('should create an action to call saga effect', () => {
        const expectedAction = { type: types.FETCH_CITIES };
        expect(action.fetchCities()).toEqual(expectedAction);
    });
    it('should create an action to notify about fetching city list', () => {
        const expectedAction = { type: types.REQUEST_CITIES };
        expect(action.requestCityList()).toEqual(expectedAction);
    });

    it('should create an action to get cities', () => {
        const expectedAction = { type: types.RECEIVE_CITIES, cities };
        expect(action.receiveCityList(cities)).toEqual(expectedAction);
    });
});
