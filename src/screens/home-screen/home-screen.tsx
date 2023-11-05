import * as React from 'react';
import { useCallback, useState } from 'react';

import moment from 'moment';

import { type ForecastResult } from '@src/models';
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

  return (
    <Screen>
      <HomeScreenView
        data={data}
        isLoading={isLoading}
        error={error}
        onChangeSearchParams={onChangeSearchParams}
      />
    </Screen>
  );
}

export default HomeScreen;
