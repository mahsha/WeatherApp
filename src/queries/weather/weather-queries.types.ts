export interface IFetchWeatherForecast {
  city: string;
  numberOfDays?: number;
}

export interface IFetchWeatherForecastQuery {
  enabled: boolean;
}
