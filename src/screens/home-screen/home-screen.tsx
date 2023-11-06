import * as React from 'react';
import { useCallback, useState } from 'react';

import moment from 'moment';

import { type ForecastDay, type ForecastResult } from '@src/models';
import { type IFetchWeatherForecast, useWeatherForecastQuery } from '@src/queries';

import { Screen } from './home-screen.styles';
import HomeScreenView from './home-screen.view';
import { getNumberOfDaysNeeded, parseForecastDay } from './utils';

function HomeScreen(): JSX.Element {
  const [queryParams, setQueryParams] = useState<IFetchWeatherForecast | undefined>(undefined);
  const { data, isLoading, error } = useWeatherForecastQuery<ForecastResult>({
    enabled: queryParams !== undefined,
    city: queryParams?.city ?? '',
    numberOfDays: queryParams?.numberOfDays ?? 1,
  });

  const onChangeSearchParams = useCallback((query: IFetchWeatherForecast) => {
    const numberOfDays = getNumberOfDaysNeeded(moment().hour());
    setQueryParams({ ...query, numberOfDays });
  }, []);

  const parseForecast = useCallback((forecast: ForecastDay[]) => {
    const timeIndex = moment().hour();
    return parseForecastDay(timeIndex, forecast);
  }, []);

  return (
    <Screen>
      <HomeScreenView
        data={data}
        isLoading={isLoading}
        error={error}
        onChangeSearchParams={onChangeSearchParams}
        parseForecastDay={parseForecast}
      />
    </Screen>
  );
}

export default HomeScreen;
