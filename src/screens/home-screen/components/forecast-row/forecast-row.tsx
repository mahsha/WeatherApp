import * as React from 'react';

import { Text } from '@src/screens/home-screen/components/text';

import { Row } from './forecast-row.styles';
import type ForecastRowProps from './forecast-row.types';

function ForecastRow({ temp, time, condition }: ForecastRowProps): JSX.Element {
  return (
    <Row>
      <Text value={time} />
      <Text value={`${temp}`} />
      <Text value={condition} />
    </Row>
  );
}

export default ForecastRow;
