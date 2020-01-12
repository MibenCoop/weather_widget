export interface City {
  city: string;
  admin: string;
  country: string;
  population_proper: string;
  iso2: string;
  capital: string;
  lat: string;
  lng: string;
  population: string;
}

export interface CitiesStoreState {
  cities: any;
  isFetching: boolean;
  biggestCities: Array<object>;
}

export interface CounterStoreState {
  counter: number;
}

export interface CityListState extends CitiesStoreState, CounterStoreState {
  rootReducer: CitiesStoreState;
  counterReducer: CounterStoreState;
}

export interface CityWeather {
  temperature: number;
  isFetching: boolean;
}
