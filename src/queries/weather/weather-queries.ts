import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { type ForecastResult } from '@src/models';
import { api, endpoints } from '@src/network';

import {
  type IFetchWeatherForecast,
  type IFetchWeatherForecastQuery,
} from './weather-queries.types';

const fetchWeatherForecast = async ({
  city,
  numberOfDays = 1,
}: IFetchWeatherForecast): Promise<ForecastResult> => {
  const response = await api.client.get<unknown, AxiosResponse<ForecastResult, unknown>>(
    endpoints.forecast,
    {
      params: {
        q: city,
        days: numberOfDays,
      },
    },
  );
  return response.data;
};

const useWeatherForecastQuery = <T>({
  city,
  numberOfDays = 1,
  enabled,
}: IFetchWeatherForecastQuery & IFetchWeatherForecast): UseQueryResult<T> => useQuery({
    queryKey: ['WeatherForecast', city, numberOfDays],
    queryFn: async () => fetchWeatherForecast({ city, numberOfDays }),
    enabled,
  });

export default useWeatherForecastQuery;
