import { describe, expect, test } from '@jest/globals';

import { getNumberOfDaysNeeded, parseForecastDay } from '@src/screens/home-screen/utils';

import fixture from './fixture.json';

describe('Test home screen', () => {
  test('Get number of days needed', async () => {
    const result = getNumberOfDaysNeeded(0);
    expect(result).toBe(1);

    const result1 = getNumberOfDaysNeeded(1);
    expect(result1).toBe(1);

    const result3 = getNumberOfDaysNeeded(19);
    expect(result3).toBe(1);

    const result4 = getNumberOfDaysNeeded(23);
    expect(result4).toBe(2);
  });

  test('Parse forecast data', async () => {
    const result = parseForecastDay(0, fixture.forecast.forecastday);
    expect(result[0].time).toBe('2023-11-06 01:00');
    expect(result[4].time).toBe('2023-11-06 05:00');

    const result19 = parseForecastDay(19, fixture.forecast.forecastday);
    expect(result19[0].time).toBe('2023-11-06 20:00');
    expect(result19[4].time).toBe('2023-11-07 00:00');

    const result20 = parseForecastDay(20, fixture.forecast.forecastday);
    expect(result20[0].time).toBe('2023-11-06 21:00');
    expect(result20[4].time).toBe('2023-11-07 01:00');

    const result21 = parseForecastDay(21, fixture.forecast.forecastday);
    expect(result21[0].time).toBe('2023-11-06 22:00');
    expect(result21[4].time).toBe('2023-11-07 02:00');

    const result22 = parseForecastDay(22, fixture.forecast.forecastday);
    expect(result22[0].time).toBe('2023-11-06 23:00');
    expect(result22[4].time).toBe('2023-11-07 03:00');

    const result23 = parseForecastDay(23, fixture.forecast.forecastday);
    expect(result23[0].time).toBe('2023-11-07 00:00');
    expect(result23[4].time).toBe('2023-11-07 04:00');
  });
});
