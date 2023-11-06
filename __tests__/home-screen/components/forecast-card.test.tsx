import React from 'react';

import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { ForecastCard } from '@src/screens/home-screen/components/forecast-card';

describe('Test Forecast card View', () => {
  test('Should render the ForecastCard', () => {
    const { getByText } = render(
      <ForecastCard
        hourlyData={[
          {
            time: '25-10-2023',
            temp_c: 32,
            condition: 'Cloudy',
          },
        ]}
        condition="Clear"
        country="Egypt"
        city="Cairo"
        icon=""
      />,
    );

    const countryLabel = getByText('Egypt');
    const conditionLabel = getByText('Clear');
    const cityLabel = getByText('Cairo');

    const timeLabel = getByText('25-10-2023');
    const hourlyConditionLabel = getByText('Cloudy');
    const tempLabel = getByText('32');

    expect(countryLabel).toBeTruthy();
    expect(conditionLabel).toBeTruthy();
    expect(cityLabel).toBeTruthy();

    expect(timeLabel).toBeTruthy();
    expect(hourlyConditionLabel).toBeTruthy();
    expect(tempLabel).toBeTruthy();
  });
});
