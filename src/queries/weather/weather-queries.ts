import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { type ForecastResult } from '@src/models';
import { api, endpoints } from '@src/network';

import type IFetchWeatherForecast from './weather-queries.types';

const fetchWeatherForecast = async ({
  country,
  numberOfDays = 5,
}: IFetchWeatherForecast): Promise<ForecastResult> => {
  const response = await api.client.get<unknown, AxiosResponse<ForecastResult, unknown>>(
    endpoints.forecast,
    {
      params: {
        q: country,
        days: numberOfDays,
      },
    },
  );
  return response.data;
};

const useWeatherForecastQuery = <T>({
  country,
  numberOfDays = 5,
}: IFetchWeatherForecast): UseQueryResult<T> => useQuery({
    queryKey: ['WeatherForecast', country, numberOfDays],
    queryFn: async () => fetchWeatherForecast({ country, numberOfDays }),
  });

export default useWeatherForecastQuery;
