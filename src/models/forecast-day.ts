import type Astro from './astro';
import type Day from './day';
import type Hour from './hour';

export default interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}
