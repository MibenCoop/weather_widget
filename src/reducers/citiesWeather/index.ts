import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../../actions/types';

export default (state = [], action: any) => {
    switch (action.type) {
        case REQUEST_WEATHER:
            return { ...state, isFetching: true };
        case RECEIVE_WEATHER:
            return {
                ...state,
                isFetching: false,
                temperature: action.weather.current.temperature,
            };
        default:
            return state;
    }
};
