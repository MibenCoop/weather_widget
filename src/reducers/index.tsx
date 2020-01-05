const cityWeather = (state = [], action: any) => {
  switch (action.type) {
    case "GET_CITY_WEATHER":
      //
      return action.data;
    default:
      return state;
  }
};

export default cityWeather;
