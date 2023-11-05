import { type ForecastResult } from '@src/models';
import { type IFetchWeatherForecast } from '@src/queries';

export interface HomeScreenViewProps {
  data: ForecastResult | undefined;
  isLoading: boolean;
  error: Error | null;
  onChangeSearchParams: (query: IFetchWeatherForecast) => void;
}
export interface FormValues {
  city: string;
}
