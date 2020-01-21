import * as action from '../counter';
import * as types from '../types';

describe('counter action', () => {
    it('should create an action to return only type', () => {
        const expectedAction = { type: types.INCREMENT };
        expect(action.increment()).toEqual(expectedAction);
    });
});
