import { type ForecastDay, type ForecastResult } from '@src/models';
import { type IFetchWeatherForecast } from '@src/queries';

export interface HourlyConditions {
  time: string;
  temp_c: number;
  condition: string;
}

export interface HomeScreenViewProps {
  data: ForecastResult | undefined;
  isLoading: boolean;
  error: Error | null;
  onChangeSearchParams: (query: IFetchWeatherForecast) => void;
  parseForecastDay: (forecast: ForecastDay[]) => HourlyConditions[];
}

export interface FormValues {
  city: string;
}
