import * as React from 'react';
import { useCallback, useState } from 'react';

import moment from 'moment';

import { type ForecastDay, type ForecastResult } from '@src/models';
import { type IFetchWeatherForecast, useWeatherForecastQuery } from '@src/queries';

import { Screen } from './home-screen.styles';
import HomeScreenView from './home-screen.view';

function HomeScreen(): JSX.Element {
  const [queryParams, setQueryParams] = useState<IFetchWeatherForecast | undefined>(undefined);
  const { data, isLoading, error } = useWeatherForecastQuery<ForecastResult>({
    enabled: queryParams !== undefined,
    city: queryParams?.city ?? '',
    numberOfDays: queryParams?.numberOfDays ?? 1,
  });

  const onChangeSearchParams = useCallback((query: IFetchWeatherForecast) => {
    let numberOfDays = 1;
    if (moment().hour() > 19) {
      numberOfDays = 2;
    }
    setQueryParams({ ...query, numberOfDays });
  }, []);

  const parseForecastDay = useCallback((forecast: ForecastDay[]) => {
    let timeIndex = moment().hour();
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
  }, []);

  return (
    <Screen>
      <HomeScreenView
        data={data}
        isLoading={isLoading}
        error={error}
        onChangeSearchParams={onChangeSearchParams}
        parseForecastDay={parseForecastDay}
      />
    </Screen>
  );
}

export default HomeScreen;
