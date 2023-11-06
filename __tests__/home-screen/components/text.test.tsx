import React from 'react';

import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { Text } from '@src/screens/home-screen/components';

describe('Test Text View', () => {
  test('should render the Text', () => {
    const { getByText } = render(<Text value="test" />);

    const testLabel = getByText('test');

    expect(testLabel).toBeTruthy();
  });
});
