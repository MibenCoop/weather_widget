export interface City {
  name: string;
  admin: string;
  country: string;
  population_proper: string;
  iso2: string;
  capital: string;
  lat: string;
  lng: string;
  temperature: number;
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

export interface SelectedCities {
  city: string;
  minTemperature: number;
  maxTemperature: number;
}
