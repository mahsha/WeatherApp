import React from 'react';

import { R } from '@src/res';
import { type ExtractProps } from '@src/utils';

import { StyledActivityIndicator } from './activity-indicator.styles';

function ActivityIndicator({
  preset = 'large',
  color,
  ...rest
}: ExtractProps<typeof StyledActivityIndicator>): JSX.Element {
  return <StyledActivityIndicator {...rest} color={color ?? R.color.colors.green} size={preset} />;
}

export default ActivityIndicator;
