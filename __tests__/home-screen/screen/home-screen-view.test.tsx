import React from 'react';

import { describe, expect, test } from '@jest/globals';
import { render, userEvent, waitFor } from '@testing-library/react-native';

import { R } from '@src/res';
import HomeScreenView from '@src/screens/home-screen/home-screen.view';

import fixture from './fixture.json';

describe('Test home screen View', () => {
  test('Should render error message', async () => {
    const { getByTestId, getByText, queryByText } = render(
      <HomeScreenView
        data={undefined}
        isLoading={false}
        error={null}
        onChangeSearchParams={() => {}}
        parseForecastDay={() => []}
      />,
    );

    const cityInput = getByTestId(R.testId.homeScreen.cityInput);
    const searchButton = getByTestId(R.testId.homeScreen.searchButton);
    let errorLabel = queryByText('Please Enter a city');
    expect(errorLabel).toBeNull();
    const user = userEvent.setup();
    await user.press(searchButton);
    await waitFor(() => {
      errorLabel = getByText('Please Enter a city');
      expect(errorLabel).toBeTruthy();
    });
    await user.type(cityInput, 'test');
    await waitFor(() => {
      errorLabel = queryByText('Please Enter a city');
      expect(errorLabel).toBeNull();
    });
  });

  test('Should render loader', async () => {
    const { getByTestId } = render(
      <HomeScreenView
        data={undefined}
        isLoading
        error={null}
        onChangeSearchParams={() => {}}
        parseForecastDay={() => []}
      />,
    );

    const loading = getByTestId(R.testId.homeScreen.loading);
    expect(loading).toBeTruthy();
  });

  test('Should render error', async () => {
    const { getByTestId } = render(
      <HomeScreenView
        data={undefined}
        isLoading={false}
        error={Error('message')}
        onChangeSearchParams={() => {}}
        parseForecastDay={() => []}
      />,
    );

    const error = getByTestId(R.testId.homeScreen.error);
    expect(error).toBeTruthy();
  });

  test('Should render data', async () => {
    const { getByTestId } = render(
      <HomeScreenView
        data={fixture}
        isLoading={false}
        error={null}
        onChangeSearchParams={() => {}}
        parseForecastDay={() => []}
      />,
    );

    const data = getByTestId(R.testId.homeScreen.data);
    expect(data).toBeTruthy();
  });
});
