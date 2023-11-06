import { type ForecastDay } from '@src/models';
import { type HourlyConditions } from '@src/screens/home-screen/home-screen.types';

const parseForecastDay = (currentHour: number, forecast: ForecastDay[]): HourlyConditions[] => {
  let timeIndex = currentHour;
  let dayIndex = 0;
  const result = [];
  for (let index = 0; index < 5; index += 1) {
    timeIndex += 1;
    if (timeIndex > 23) {
      dayIndex += 1;
      timeIndex = 0;
    }
    result.push({
      time: forecast[dayIndex].hour[timeIndex].time,
      temp_c: forecast[dayIndex].hour[timeIndex].temp_c,
      condition: forecast[dayIndex].hour[timeIndex].condition.text,
      icon: forecast[dayIndex].hour[timeIndex].condition.icon,
    });
  }
  return result;
};

const getNumberOfDaysNeeded = (currentHour: number): number => {
  let numberOfDays = 1;
  if (currentHour > 19) {
    numberOfDays = 2;
  }
  return numberOfDays;
};

export { parseForecastDay, getNumberOfDaysNeeded };
