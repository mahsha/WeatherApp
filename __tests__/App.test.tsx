/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/no-extraneous-dependencies
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';

import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
