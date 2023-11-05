import { type ForecastResult } from '@src/models';

export interface HomeScreenViewProps {
  data: ForecastResult | undefined;
  isLoading: boolean;
  error: Error | null;
}
