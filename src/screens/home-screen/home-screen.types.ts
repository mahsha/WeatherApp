import { type ForecastResult } from '@src/models';

export interface HomeScreenViewProps {
  data: ForecastResult | undefined;
  isLoading: boolean;
  error: Error | null;
}
export interface FormValues {
  city: string;
  numberOfDays: string;
}
