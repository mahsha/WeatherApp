import type Current from './current';
import type Forecast from './forecast';
import type Location from './location';

export default interface ForecastResult {
  location: Location;
  current: Current;
  forecast: Forecast;
}
