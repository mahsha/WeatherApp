import * as React from 'react';

import { type ForecastResult } from '@src/models';
import { useWeatherForecastQuery } from '@src/queries';

import { Screen } from './home-screen.styles';
import HomeScreenView from './home-screen.view';

function HomeScreen(): JSX.Element {
  const { data, isLoading, error } = useWeatherForecastQuery<ForecastResult>({
    country: 'Cairo',
    numberOfDays: 1,
  });

  return (
    <Screen>
      <HomeScreenView data={data} isLoading={isLoading} error={error} />
    </Screen>
  );
}

export default HomeScreen;
