import React from 'react';

import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';

import { TextRow } from '@src/screens/home-screen/components';

describe('Test TextRow View', () => {
  test('should render the TextRow', () => {
    const { getByText } = render(<TextRow value="value" title="title" />);

    const valueLabel = getByText('value');
    const titleLabel = getByText('title');

    expect(valueLabel).toBeTruthy();
    expect(titleLabel).toBeTruthy();
  });
});
