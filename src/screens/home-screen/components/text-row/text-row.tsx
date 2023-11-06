import * as React from 'react';

import { Text } from '@src/screens/home-screen/components/text';

import { Row } from './text-row.styles';
import type TextRowProps from './text-row.types';

function TextRow({ title, value }: TextRowProps): JSX.Element {
  return (
    <Row>
      <Text value={title} />
      <Text value={value} />
    </Row>
  );
}

export default TextRow;
