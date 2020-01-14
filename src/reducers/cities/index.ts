export default (state = [], action: any) => {
  switch (action.type) {
    case "REQUEST_CITIES":
      return { ...state, isFetching: true };
    case "RECEIVE_CITIES":
      return {
        ...state,
        isFetching: false,
        cities: action.cities
      };
    default:
      return state;
  }
};
