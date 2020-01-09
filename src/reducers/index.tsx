const rootReducer = (state = [], action: any) => {
  switch (action.type) {
    case "REQUEST_WEATHER":
      return { ...state, isFetching: true };
    case "RECEIVE_WEATHER":
      return {
        ...state,
        isFetching: false,
        temperature: action.weather.current.temperature
      };
    case "REQUEST_CITIES":
      return { ...state, isFetching: true };
    case "RECEIVE_CITIES":
      console.log("RECEIVE_CITIES", action);
      return {
        ...state,
        isFetching: false,
        cities: action.cities
      };
    default:
      return state;
  }
};

export default rootReducer;
