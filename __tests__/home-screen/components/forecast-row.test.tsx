import React from 'react';

import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { ForecastRow } from '@src/screens/home-screen/components';

describe('Test Forecast row View', () => {
  test('should render the ForecastRow', () => {
    const { getByText } = render(<ForecastRow temp={32} time="25-10-2023" condition="Cloudy" />);

    const timeLabel = getByText('25-10-2023');
    const hourlyConditionLabel = getByText('Cloudy');
    const tempLabel = getByText('32');

    expect(timeLabel).toBeTruthy();
    expect(hourlyConditionLabel).toBeTruthy();
    expect(tempLabel).toBeTruthy();
  });
});
