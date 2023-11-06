import { type HourlyConditions } from '@src/screens/home-screen/home-screen.types';

export default interface ForecastCardProps {
  hourlyData: HourlyConditions[];
  condition: string;
  country: string;
  city: string;
  icon: string;
}
